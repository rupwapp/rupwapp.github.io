import React, { PureComponent } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { bindKeyboard } from 'react-swipeable-views-utils'

import MenuDay from './MenuDay'

const MealsSlider = bindKeyboard(SwipeableViews);

export default class MenuSwiper extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            index: this.fixWeekDay()
        }
    }

    fixWeekDay(day = (new Date()).getDay()) {
        day--;
        return day < 0 ? 6 : day
    }

    goPrevious = () => this.setState({ index: this.state.index > 0 ? this.state.index - 1 : 0 })

    goNext = () => this.setState({ index: this.state.index < this.props.menu.length - 1 ? this.state.index + 1 : this.props.menu.length - 1 })

    handleChange = index => this.setState({ index })

    render() {
        return (
            <MealsSlider index={this.props.menu.length && this.state.index} onChangeIndex={this.handleChange}>
                {this.props.menu.map(day =>
                    <div key={day.date}>
                        <MenuDay day={day} onPrevious={this.goPrevious} onNext={this.goNext} />
                    </div>)}
            </MealsSlider>
        )
    }
}
