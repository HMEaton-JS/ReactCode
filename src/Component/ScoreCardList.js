import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import * as PXBColors from '@pxblue/colors';
import { ScoreCard } from 'common-ui-library';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Banner from '../Component/Banner'
import Badge from '../Component/Badge'
import List from '@material-ui/core/List';

import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ListItems from '../Component/ListItem'
import CloudCircleIcon from '@material-ui/icons/CloudCircle';
import InfoIcon from '@material-ui/icons/Info';
import ChevronRight from '@material-ui/icons/ChevronRight'
import InfoListItem from './InfoListItem';

const moisture = require('@pxblue/icons-svg/moisture.svg');
const gascylinder = require('@pxblue/icons-svg/gas_cylinder.svg');
const flow = require('@pxblue/icons-svg/flow.svg');
const temperature = require('@pxblue/icons-svg/temp.svg');

const styles = () => ({
    card: {
        shadowColor: PXBColors.gray[900],
        shadowOpacity: 0.6,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 0
        },
        elevation: 1,
        display: 'inline-block'
    },
    cardaction: {
        display: 'block',
        align: 'end'
    },
    details: {
        display: 'flex',
        flexDirection: 'row',
    },
    listdetails: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
    },
    bannerdetails: {
        display: 'flex',
        flex: 1,
    },
    herobanner: {
        flex: 0,
        minWidth: '100%',
        justifyContent: 'flex-end',
    },
    listtext: {
        fontSize: 12,
        fontWeight: 650,
        color: PXBColors.gray[700],
    },
    listredtext: {
        fontSize: 12,
        color: PXBColors.red[700],
        fontWeight: 650
    },
    listbluetext: {
        fontSize: 12,
        color: PXBColors.blue[700],
        fontWeight: 650
    },
    listitem: {
        padding: 5,
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    listitemtext: {
        fontSize: 12,
        flex: 'none',
        padding: 3
    },
    listitemicon: {
        minWidth: 40
    },
    listvalues: {
        fontSize: 14,
        fontWeight: 650,
        color: PXBColors.gray[700]
    },
    iconsize: {
        iconsize: 18
    },
    headerTitle: {
        color: PXBColors.white[500],
        fontSize: 16,
        fontWeight: '700',
        paddingBottom: 4
    },
    headerSubtitle: {
        color: PXBColors.white[500],
        fontSize: 14,
        fontWeight: '400',
        paddingBottom: 3
    },
    headerInfo: {
        color: PXBColors.white[500],
        fontSize: 14,
        fontWeight: '400',
        paddingBottom: 3
    },
    backgroundcolorred: {
        backgroundColor: PXBColors.red[500],
    },
    backgroundcolorblue: {
        backgroundColor: PXBColors.blue[500],
    },
    iconcolor: {
        color: PXBColors.white[500]
    }
});

class CardList extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        this.getSampleData();
    }

    getSampleData = () => {
        var sampleData = []
        sampleData = require('../sampleData');
        this.setState({ data: sampleData });
    }

    addBanner(classes, data) {
        return (
            <div className={classes.bannerdetails}>

                <Banner style={classes.herobanner}>
                    {
                        Object.keys(data.values).map((item) => {
                            let label, icons, units;
                            if (item === 'humidity') {
                                icons = moisture
                                label = 'Humidity'
                                units = '%'
                            } else if (item === 'flow') {
                                icons = flow
                                label = 'Flow'
                                units = 'KSCFH'
                            } if (item === 'temperature') {
                                icons = temperature
                                label = 'Temperature'
                                units = '\u2109'
                            } if (item === 'volume') {
                                icons = gascylinder
                                label = 'Volume'
                                units = 'KSCF'
                            }

                            return (
                                <Badge
                                    icon={<img src={icons} alt="" />}
                                    label={label}
                                    value={data.values[item] || 0}
                                    units={units}
                                    styleValue={classes.listvalues}
                                    styleUnits={classes.listvalues}
                                    styleLabel={classes.listtext}
                                />
                            )
                        })
                    }
                </Banner>

            </div>
        )
    }

    addChildren(classes, data) {
        return (
            <div className={classes.listdetails}>
                <List >
                    <ListItems
                        containerStyle={classes.listitem}
                        iconStyle={classes.listitemicon}
                        iconComponent={() => {
                            return (
                                <NotificationsActiveIcon />
                            )
                        }}
                        textPrimaryStyle={data.alarmCount > 0 ? classes.listbluetext : classes.listtext}
                        textContainerStyle={data.alarmCount > 0 ? classes.listitemtext : classes.listitemtext}
                        primary={data.alarmCount ? data.alarmCount > 1 ? data.alarmCount + ' Alarms' : data.alarmCount + ' Alarm' : '0 Alarm'}
                    />
                    <ListItems
                        containerStyle={classes.listitem}
                        iconStyle={classes.listitemicon}
                        iconComponent={() => {
                            return (
                                <CloudCircleIcon />
                            )
                        }}
                        textPrimaryStyle={data.eventCount > 0 ? classes.listbluetext : classes.listtext}
                        textContainerStyle={data.eventCount > 0 ? classes.listitemtext : classes.listitemtext}
                        primary={data.eventCount ? data.eventCount > 1 ? data.eventCount + ' Events' : data.eventCount + ' Event' : '0 Event'}
                    />
                    <ListItems
                        containerStyle={classes.listitem}
                        iconStyle={classes.listitemicon}
                        iconComponent={() => {
                            return (
                                <InfoIcon />
                            )
                        }}
                        textPrimaryStyle={classes.listtext}
                        textContainerStyle={classes.listitemtext}
                        primary={data.commStatus}
                    />
                </List>
            </div>
        )
    }


    render() {
        const { classes } = this.props;
        console.log('render', this.state)
        return (
            <React.Fragment>
                <Grid container style={{ padding: 10 }} spacing={2}>
                    {this.state.data.map((data, index) => (
                        <Grid key={index} item lg={4} md={3} sm={2} xs={12}>

                            <ScoreCard
                                headerTitle={data.title || ""}
                                headerSubtitle={data.subtitle || ""}
                                headerColor={data.subtitle === 'High Humidity Alarm' ? PXBColors.red[500] : PXBColors.blue[500]}
                                headerInfo={data.deviceCount == null ? '0 Device' : (data.deviceCount === 1 ? '1 Device' : (data.deviceCount + ' Devices'))}
                                actionItems={
                                    <IconButton aria-label="settings" className={classes.iconcolor} >
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                badgeOffset={-10}
                                badge={
                                    this.addBanner(classes, data)
                                }
                                actionRow={
                                    <div>
                                        <InfoListItem
                                            title={'View Location'}
                                            rightComponent={<ChevronRight color={'inherit'} />}
                                        />
                                    </div>
                                }>
                                {this.addChildren(classes, data)}
                            </ScoreCard>
                        </Grid>
                    ))
                    }
                </Grid>
            </React.Fragment>
        );
    }
}

CardList.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(CardList);