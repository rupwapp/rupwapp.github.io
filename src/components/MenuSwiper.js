import React, { PureComponent } from 'react'
import SwipeableViews from 'react-swipeable-views'

import MenuDay from './MenuDay'

export default class MenuSwiper extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            index: 0
        }
    }
    goPrevious = () => this.setState({ index: this.state.index > 0 ? this.state.index - 1 : 0 })

    goNext = () => this.setState({ index: this.state.index < this.props.menu.length - 1 ? this.state.index + 1 : this.props.menu.length - 1 })

    handleChange = (event, index) => this.setState({ index })

    render() {
        return (
            <SwipeableViews index={this.props.menu.length && this.state.index} onChangeIndex={this.handleChange}>
                {this.props.menu.map(day => <MenuDay key={day.date} day={day} onPrevious={this.state.index > 0 && this.goPrevious} onNext={this.state.index < this.props.menu.length - 1 && this.goNext} />)}
            </SwipeableViews>
        )
    }
}
