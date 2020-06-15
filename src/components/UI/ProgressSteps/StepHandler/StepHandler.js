import React from 'react';
import Button from '@material-ui/core/Button';
import classes from './StepHandler.module.scss';

const stepHandler = (props) => {
    return (
        <div className={classes.Handler}>
            {props.activeStep > 0 ?
                (
                    <Button variant="contained" onClick={() => props.stepMovement(props.activeStep - 1)}>
                        Back
                    </Button>
                ) : null
            }
            {props.activeStep < (props.stepLength - 1) ?
                (
                    <Button variant="contained" color="primary" onClick={() => props.stepMovement(props.activeStep + 1)} disabled={props.isDisabled}>
                        Next
                    </Button>
                ) : (
                    <Button variant="contained" color="primary" onClick={props.submitCheckin}>
                        Submit
                    </Button>
                )
            }
        </div>
    )
}

export default stepHandler;
//disabled={props.activeStep <= 0}