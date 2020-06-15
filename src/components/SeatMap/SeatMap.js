import React from 'react';
import Seat from '../UI/Seat/Seat';
import classes from './SeatMap.module.scss';

const seatMap = (props) => {
    const cols = ['A', 'B', 'C', 'D', 'E', 'F'];
    const rows = [...Array(20).keys()];

    return (
        <div className={classes.ParentMap}>
            {
                rows.map(row => {
                    return (
                        <div key={row}>
                            {
                                cols.map((col, index) => {
                                    const isSelected = props.selectedSeat.includes(col + (row + 1));
                                    const isAvailable = props.availableSeat.includes(col + (row + 1));
                                    return (
                                        <Seat
                                            selectAseat={() => props.selectAseat(col + (row + 1), isSelected)}
                                            colIndex={index}
                                            isSelected={isSelected}
                                            isAvailable={isAvailable}
                                            key={col + (row + 1)}
                                            seatNo={col + (row + 1)}
                                        />
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    );
}

export default seatMap;