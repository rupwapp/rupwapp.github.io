import React, { PureComponent } from 'react';
import { HashRouter } from 'react-router-dom';
import 'typeface-roboto';
import { MuiThemeProvider, createMuiTheme, Snackbar } from 'material-ui';
import themeColor from 'material-ui/colors/blue';
import axios from 'axios'

import Header from './components/Header'
import MenuSwiper from './components/MenuSwiper'
import UpdateSnackbar from './components/UpdateSnackbar'

const theme = createMuiTheme({
    palette: {
        primary: themeColor
    },
});

const hasLocalStorage = typeof (Storage) !== "undefined"
const localStorageKey = 'menu-restaurant';

class App extends PureComponent {

    constructor(props) {
        super(props);
        const cachedData = this.cachedData
        this.state = {
            loading: false,
            menu: cachedData,
            cached: cachedData.length,
            error: false,
        }

    }

    get cachedData() {
        let data;
        if (hasLocalStorage && (data = localStorage.getItem(localStorageKey)))
            return JSON.parse(data)
        else
            return [];
    }

    set cachedData(data) {
        if (hasLocalStorage)
            localStorage.setItem(localStorageKey, JSON.stringify(data))
    }

    fetchData() {
        return axios.get('https://cors-anywhere.herokuapp.com/https://www.ruapp.com.br/api/v1/menu?restaurant_id=1');
    }

    updateMenuData = () => {
        this.setState({ loading: true })
        this.fetchData()
            .then(({ data }) => {
                this.setState({ menu: data, cached: true, loading: false })
                this.cachedData = data;
            })
            .catch(err => {
                console.error(err);
                this.setState({ error: true, loading: false })
            })
    }



    componentDidMount() {
        this.updateMenuData()
    }

    render() {
        return (
            <HashRouter>
                <MuiThemeProvider theme={theme}>
                    <Header loading={this.state.loading} onRefresh={this.updateMenuData} />
                    <MenuSwiper menu={this.state.menu} cached={this.state.cached} />
                    <UpdateSnackbar appServiceWorker={this.props.appServiceWorker} />
                    <Snackbar
                        open={this.state.error}
                        autoHideDuration={6000}
                        onClose={() => this.setState({ error: false })}
                        message={this.state.cached ? "Você está offline. Mostrando informações antigas." : "Você esta offline e as informações ainda não foram obtidas."}
                    />
                </MuiThemeProvider>
            </HashRouter>
        );
    }
}

export default App;
