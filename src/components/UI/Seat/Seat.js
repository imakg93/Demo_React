import React from 'react';
import classes from './Seat.module.scss';
import Button from '@material-ui/core/Button';
import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';

const seat = (props) => {
    return (
        <span>
            <Button variant="contained" className={classes.Button}
                onClick={props.selectAseat}
                style={{ backgroundColor: props.isSelected ? 'green' : '#e0e0e0' }} disabled={!props.isAvailable}>
                <AirlineSeatReclineNormalIcon className={classes.SeatIcon} />{props.seatNo}
            </Button>
            {(props.colIndex + 1) % 6 === 3 ? <span className={classes.Center}></span> : null}
        </span>
    )
}

export default seat;