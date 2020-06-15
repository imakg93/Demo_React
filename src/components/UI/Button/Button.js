import React from 'react';
import Button from '@material-ui/core/Button';

const button = (props) => (
    <Button variant="contained" color={props.btnType} disabled={props.disabled} onClick={props.clicked}>
        {props.children}
    </Button>
);

export default button;