import React from 'react';
import Button from '@material-ui/core/Button';


const ButtonComponent = ({children, ...props}) => (
    <Button 
    type={props.type}
    className={props.className} 
    variant={props.variant} 
    color={props.color}>
       {children}
    </Button>
);


export default ButtonComponent;