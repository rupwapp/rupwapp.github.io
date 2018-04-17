import React, { PureComponent, Fragment } from 'react'
import { Snackbar, Button } from 'material-ui'

export default class UpdateSnackbar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            showInstalledMessage: false,
            showUpdateMessage: false,
            showUpdateOnRestartMessage: false,
        }
    }

    componentDidMount() {
        const { appServiceWorker } = this.props
        if (appServiceWorker) {
            appServiceWorker.onInstalled(() => this.setState({ showInstalledMessage: true }))
            appServiceWorker.onUpdateFound(() => this.setState({ showUpdateMessage: true }))
        }
    }

    render() {
        return (
            <Fragment>
                <Snackbar
                    open={this.state.showInstalledMessage}
                    autoHideDuration={6000}
                    onClose={() => this.setState({ showInstalledMessage: false })}
                    message="O Aplicativo está pronto para funcionar offline."
                />
                <Snackbar
                    open={this.state.showUpdateMessage}
                    onClose={() => this.setState({ showUpdateMessage: false, showUpdateOnRestartMessage: true })}
                    message="Uma nova versão está disponível."
                    action={[
                        <Button key="undo" color="secondary" size="small" onClick={() => window.location.reload()}>Atualizar</Button>
                    ]}
                />
                <Snackbar
                    open={this.state.showUpdateOnRestartMessage}
                    autoHideDuration={6000}
                    onClose={() => this.setState({ showUpdateOnRestartMessage: false })}
                    message="O App será atualizado na próxima inicialização."
                />
            </Fragment>
        )
    }
}
