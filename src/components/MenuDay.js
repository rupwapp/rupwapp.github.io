import React, { PureComponent, Fragment } from 'react'
import { Card, CardContent, Typography, Divider, List, ListItem, ListItemText, CardActions, IconButton } from 'material-ui'
import { ChevronLeft as IconLeft, ChevronRight as IconRight } from '@material-ui/icons'

const weekDays = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado'
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
                    <Typography color="textSecondary">{date.getDate()}/{date.getMonth() + 1}</Typography>
                    <Typography variant="title" component="h2">{this.getWeekDay(date)}</Typography>
                </CardContent>

                <Card style={{ marginBottom: 10 }}>
                    <CardContent>
                        <Typography variant="headline" component="h3">{breakfast.name}</Typography>
                        {breakfast.menu && <Typography color="textSecondary">Aberto às {breakfast.open}</Typography>}
                    </CardContent>
                    <List>

                        {breakfast.menu && breakfast.menu.map(({ name, type }, i) =>
                            <Fragment key={i}>
                                <Divider />
                                <ListItem>
                                    <ListItemText primary={name || type} secondary={name && type} />
                                </ListItem>
                            </Fragment>
                        )}
                        {!breakfast.menu &&
                            <ListItem>
                                <ListItemText primary="Fechado" />
                            </ListItem>
                        }
                    </List>
                    <Divider />
                    <CardActions>
                        <IconButton disabled={!this.props.onPrevious} onClick={this.props.onPrevious || null}>
                            <IconLeft />
                        </IconButton>
                        <IconButton disabled={!this.props.onNext} onClick={this.props.onNext || null} style={{ marginLeft: 'auto' }}>
                            <IconRight />
                        </IconButton>
                    </CardActions>
                </Card>

                <Card style={{ marginBottom: 10 }}>
                    <CardContent>
                        <Typography variant="headline" component="h3">{lunch.name}</Typography>
                        {lunch.menu && <Typography color="textSecondary">Aberto às {lunch.open}</Typography>}
                    </CardContent>
                    <List>
                        {lunch.menu && lunch.menu.map(({ name, type }, i) =>
                            <Fragment key={i}>
                                <Divider />
                                <ListItem>
                                    <ListItemText primary={name || type} secondary={name && type} />
                                </ListItem>
                            </Fragment>
                        )}
                        {!lunch.menu &&
                            <ListItem>
                                <ListItemText primary="Fechado" />
                            </ListItem>
                        }
                    </List>
                    <Divider />
                    <CardActions>
                        <IconButton disabled={!this.props.onPrevious} onClick={this.props.onPrevious || null}>
                            <IconLeft />
                        </IconButton>
                        <IconButton disabled={!this.props.onNext} onClick={this.props.onNext || null} style={{ marginLeft: 'auto' }}>
                            <IconRight />
                        </IconButton>
                    </CardActions>
                </Card>

                <Card>
                    <CardContent>
                        <Typography variant="headline" component="h3">{dinner.name}</Typography>
                        {dinner.menu && <Typography color="textSecondary">Aberto às {dinner.open}</Typography>}
                    </CardContent>
                    <List>
                        {dinner.menu && dinner.menu.map(({ name, type }, i) =>
                            <Fragment key={i}>
                                <Divider />
                                <ListItem>
                                    <ListItemText primary={name || type} secondary={name && type} />
                                </ListItem>
                            </Fragment>
                        )}
                        {!dinner.menu &&
                            <ListItem>
                                <ListItemText primary="Fechado" />
                            </ListItem>
                        }
                    </List>
                    <Divider />
                    <CardActions>
                        <IconButton disabled={!this.props.onPrevious} onClick={this.props.onPrevious || null}>
                            <IconLeft />
                        </IconButton>
                        <IconButton disabled={!this.props.onNext} onClick={this.props.onNext || null} style={{ marginLeft: 'auto' }}>
                            <IconRight />
                        </IconButton>
                    </CardActions>
                </Card>
            </div>
        )
    }
}
