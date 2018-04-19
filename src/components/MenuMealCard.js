import React, { PureComponent, Fragment } from 'react'
import { Card, CardContent, CardActions, Typography, List, ListItem, ListItemText, Divider, IconButton } from 'material-ui'
import { ChevronLeft as IconLeft, ChevronRight as IconRight } from '@material-ui/icons'

export default class MenuMealCard extends PureComponent {
    render() {
        const { meal, onPrevious, onNext, ...CardProps } = this.props
        const { name, menu, open } = meal
        return (
            <Card {...CardProps}>
                <CardContent>
                    <Typography variant="headline" component="h3">{name}</Typography>
                    {menu && <Typography color="textSecondary">Aberto às {open}</Typography>}
                </CardContent>
                <List>
                    {menu && menu.map(({ name, type }, i) => {
                        const listItemProps = name ? { button: true, component: 'a', target: '_blank', href: `https://www.google.com/search?q=${encodeURI(name)}` } : {}
                        return (
                            <Fragment key={i}>
                                <Divider />
                                <ListItem {...listItemProps}>
                                    <ListItemText primary={name || type} secondary={name && type} />
                                </ListItem>
                            </Fragment>
                        )
                    })}
                    {!menu && <ListItem><ListItemText primary="Fechado" /></ListItem>}
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
        )
    }
}
