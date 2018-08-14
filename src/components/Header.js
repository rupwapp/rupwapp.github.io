import React, { PureComponent } from 'react'
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from 'material-ui'
import { Menu as MenuIcon, Refresh as RefreshIcon } from '@material-ui/icons'

export default class Header extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { menuOpen: false }
    }


    toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen })
    render() {
        return (
            <header style={{ paddingTop: 64 }}>
                <AppBar>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="abrir menu"
                            onClick={this.toggleMenu}
                            style={{ marginLeft: -12, marginRight: 20 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" style={{ flexGrow: 1 }} >Cardápio</Typography>
                        {this.props.onRefresh &&
                            <div className={this.props.loading ? 'animation-rotate' : undefined} >
                                <IconButton
                                    color="inherit"
                                    aria-label="atualizar"
                                    onClick={this.props.onRefresh}
                                >
                                    <RefreshIcon />
                                </IconButton>
                            </div>
                        }
                    </Toolbar>
                </AppBar>
                <Drawer open={this.state.menuOpen} onClose={this.toggleMenu}>
                    <List style={{ width: 250, maxWidth: '100vw' }}>
                        <ListItem button component="a" href="https://github.com/rupwapp/rupwapp.github.io" target="_blank">
                            <ListItemText primary="sobre" />
                        </ListItem>
                    </List>
                </Drawer>
            </header>
        )
    }
}