import React, { PureComponent } from 'react'
import { CardContent, Typography } from 'material-ui'

import MenuMealCard from './MenuMealCard'

const weekDays = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado'
]
const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
]

export default class MenuDay extends PureComponent {
    parseDate(stringDate) {
        const splitDate = stringDate.split('-')
        return new Date(Number(splitDate[0]), Number(splitDate[1]) - 1, Number(splitDate[2]))
    }

    getWeekDay(date) {
        return weekDays[date.getDay()];
    }

    render() {
        const date = this.parseDate(this.props.day.date)
        const [breakfast, lunch, dinner] = this.props.day.meals
        return (
            <div style={{ padding: 10 }}>
                <CardContent style={{ marginTop: -10 }}>
                    <Typography color="textSecondary">{date.getDate()} de {months[date.getMonth()]}</Typography>
                    <Typography variant="title" component="h2">{this.getWeekDay(date)}</Typography>
                </CardContent>

                <MenuMealCard
                    meal={breakfast}
                    onPrevious={this.props.onPrevious}
                    onNext={this.props.onNext}
                    style={{ marginBottom: 10 }}
                />

                <MenuMealCard
                    meal={lunch}
                    onPrevious={this.props.onPrevious}
                    onNext={this.props.onNext}
                    style={{ marginBottom: 10 }}
                />

                <MenuMealCard
                    meal={dinner}
                    onPrevious={this.props.onPrevious}
                    onNext={this.props.onNext}
                    style={{ marginBottom: 10 }}
                />
            </div>
        )
    }
}
