import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  pollFooter: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  backBtn: {
    borderColor: '#3498db',
    color: '#000',
    '&:hover': {
      borderColor: '#2980b9'
    }
  },
  nextBtn: {
    backgroundColor: '#3498db',
    color: '#ecf0f1',
    '&:hover': {
      backgroundColor: '#2980b9'
    }
  },
  submitBtn: {
    backgroundColor: '#147a3d',
    color: '#ecf0f1',
    '&:hover': {
      backgroundColor: '#0d4725'
    }
  }
});

interface Props {
  handleNext: () => void;
  handleBack: () => void;
  handleSubmit?: () => void;
  hasNext?: boolean;
  hasSubmit?: boolean;
  currentStepIndex: number;
  maxSteps?: number;
}

const PollStepper = (props: Props) => {
  const classes = useStyles();
  const {
    handleNext,
    handleBack,
    handleSubmit,
    hasNext,
    hasSubmit,
    currentStepIndex,
  } = props;


  return (
    <>
      <div className={classes.pollFooter}>
        <Button
          className={classes.backBtn}
          variant="outlined"
          color="primary"
          disableElevation={true}
          disabled={currentStepIndex === 0}
          onClick={handleBack}>
          Back
        </Button>
        { hasNext &&
          !hasSubmit &&
          <Button
            className={classes.nextBtn}
            variant="contained"
            disableElevation={true}
            disabled={hasSubmit}
            onClick={handleNext}>
            Next
          </Button>
        }
        { hasSubmit &&
          <Button
            className={classes.submitBtn}
            variant="contained"
            disableElevation={true}
            onClick={handleSubmit}>
            Submit
          </Button>
        }
      </div>
    </>
  );
};

export default PollStepper;