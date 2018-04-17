import React from 'react'
import { AppBar, Toolbar, Typography } from 'material-ui'

const Header = () => {
    return (
        <header style={{ paddingTop: 64 }}>
            <AppBar>
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Cardápio
                    </Typography>
                </Toolbar>
            </AppBar>
        </header>
    )
}

export default Header
