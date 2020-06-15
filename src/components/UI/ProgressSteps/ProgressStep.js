import React, { Fragment } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { STEP_LEVELS } from './step-levels.constant';
import classes from './ProgressSteps.module.scss';

const progressStep = (props) => {
    return (
        <Fragment>
            <Stepper activeStep={props.activeStep} alternativeLabel className={classes.Stepper}>
                {STEP_LEVELS.map((level) => {
                    return (
                        <Step key={level}>
                            <StepLabel>{level}</StepLabel>
                        </Step>
                    )
                })}
            </Stepper>
            <div>
                {props.children}
            </div>
        </Fragment>

    )
}

export default progressStep;