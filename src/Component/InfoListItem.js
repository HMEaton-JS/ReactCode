import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Chevron from '@material-ui/icons/ChevronRight';
import * as PXBColors from '@pxblue/colors'
import color from 'color';


//Material-UI Components
import {
    Avatar,
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Typography
} from '@material-ui/core';

class InfoListItemClass extends React.Component {
    render() {
        const { classes, fontColor, onClick, statusColor, title, divider } = this.props;
        return (
            <ListItem style={this.wrapperStyle()} onClick={onClick ? () => onClick() : null}>
                <div className={classes.statusStripe} style={{ backgroundColor: statusColor }}></div>
                <ListItemText
                    primary={title}
                    secondary={""}
                    primaryTypographyProps={{ noWrap: true, variant: 'body2', className: classes.title, style: { color: fontColor || 'inherit', fontSize: 12, fontWeight: 650 } }}
                    secondaryTypographyProps={{ noWrap: true, variant: 'subtitle2' }}
                />
                {this.rightComponent()}
                {this.props.divider &&
                    <div className={classes.divider} style={{ zIndex: 0, left: divider === 'full' ? 0 : 72 }} />
                }
            </ListItem>
        )
    }
    icon() {
        const { avatar, hidePadding, icon, statusColor, theme } = this.props;
        if (icon && avatar) {
            return (
                <ListItemAvatar>
                    <Avatar style={{ backgroundColor: statusColor || theme.palette.primary[500] }}>
                        {icon}
                    </Avatar>
                </ListItemAvatar>
            )
        }
        else if (icon) {
            return (
                <ListItemIcon style={{ color: this.iconColor() }}>
                    {icon}
                </ListItemIcon>
            );
        }
        else if (!hidePadding) {
            return (
                <ListItemAvatar>
                    <Avatar style={{ backgroundColor: 'transparent' }}/>
                </ListItemAvatar>
            );
        }
    }
    rightComponent() {
        const { onClick, rightComponent } = this.props;
        if (rightComponent) {
            return (
                <div style={{ flex: '0 0 auto', marginLeft: 16 }}>
                    {rightComponent}
                </div>
            );
        }
        else if (onClick) {
            return (
                <ListItemSecondaryAction>
                    <Chevron color={'inherit'} />
                </ListItemSecondaryAction>
            );
        }
    }

    interpunct() {
        const { classes, subtitleSeparator } = this.props;
        const { withSmallMargins } = classes;
        return (
            <Typography className={withSmallMargins + ' ' + classes.separator}>
                {subtitleSeparator || '\u00B7'}
            </Typography>);
    }
    

    iconColor() {
        const { avatar, statusColor, iconColor, theme } = this.props;
        if (iconColor) return iconColor;
        if (avatar) {
            return statusColor ? (color(statusColor).isDark() ? PXBColors.white[50] : PXBColors.black[500]) : theme.palette.primary.contrastText;
        }
        return statusColor ? statusColor : 'inherit';
    }
    wrapperStyle() {
        const { backgroundColor, dense, onClick, style } = this.props;
        return Object.assign({
            backgroundColor: backgroundColor || 'transparent',
            cursor: onClick ? 'pointer' : 'default',
            height: dense ? 52 : 72
        }, style);
    }
}

InfoListItemClass.propTypes = {
    avatar: PropTypes.bool,
    backgroundColor: PropTypes.string,
    dense: PropTypes.bool,
    divider: PropTypes.oneOf(['full', 'partial']),
    fontColor: PropTypes.string,
    hidePadding: PropTypes.bool,
    icon: PropTypes.element,
    iconColor: PropTypes.string,
    onClick: PropTypes.func,
    rightComponent: PropTypes.element,
    statusColor: PropTypes.string,
    style: PropTypes.object,
    subtitleSeparator: PropTypes.string,
    title: PropTypes.string.isRequired
};
InfoListItemClass.defaultProps = {
    subtitleSeparator: '\u00B7',
    hidePadding: false,
    dense: false,
    avatar: false
};

const styles = theme => ({
    divider: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        height: 1,
        backgroundColor: theme.palette.type === 'light' ? PXBColors.black[50] : PXBColors.black[700]
    },
    statusStripe: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: 6,
        zIndex: 100
    },
    withSmallMargins: {
        margin: `0 4px`
    },
    title: {
        fontWeight: 600,
        lineHeight: 1.2,
        display: 'block'
    },
    separator: {
        display: 'inline-block',
        lineHeight: 1.3,
        color: 'inherit'
    }
})
export default withStyles(styles, { withTheme: true })(InfoListItemClass);
