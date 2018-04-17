import React, { PureComponent as Component } from 'react';
import { HashRouter } from 'react-router-dom';
import 'typeface-roboto';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
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

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: [],
            error: false,
        }
    }


    fetchData() {
        return axios.get('https://cors-anywhere.herokuapp.com/https://www.ruapp.com.br/api/v1/menu?restaurant_id=1');
    }

    componentDidMount() {
        this.fetchData().then(({ data }) => this.setState({ menu: data }))
    }

    render() {
        return (
            <HashRouter>
                <MuiThemeProvider theme={theme}>
                    <Header />
                    <main>
                        <MenuSwiper menu={this.state.menu} />
                    </main>
                    <UpdateSnackbar appServiceWorker={this.props.appServiceWorker} />
                </MuiThemeProvider>
            </HashRouter>
        );
    }
}

export default App;
