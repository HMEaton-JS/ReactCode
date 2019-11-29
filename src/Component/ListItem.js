
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const ListItems =(props)=>{
  return (
    <ListItem classes={{ root: props.containerStyle }}>
    <ListItemIcon classes={{ root: props.iconStyle }}>
        {props.iconComponent()}
    </ListItemIcon>
    <ListItemText classes={{primary:props.textPrimaryStyle,root:props.textContainerStyle}} primary={props.primary}/>
</ListItem>
  )
}
export default ListItems