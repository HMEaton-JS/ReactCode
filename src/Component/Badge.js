import React from 'react';
import Hero from '@pxblue/react-components/core/Hero';

const Badge =(props)=>{
  return (
    <Hero
    icon={props.icon}
    label={props.label}
    value={props.value}
    units={props.units}
    classes={{ value: props.styleValue, units: props.styleUnits, label: props.styleLabel }}
/>
  )
}
export default Badge