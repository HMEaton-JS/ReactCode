import React from 'react';
import HeroBanner from '@pxblue/react-components/core/HeroBanner';
 const Banner =(props)=>{
    return(
        <HeroBanner divider={props.divider} classes={props.style?{
            banner:props.style
        }:null}>
        {props.children}
        </HeroBanner>
    )
   
}
export default Banner