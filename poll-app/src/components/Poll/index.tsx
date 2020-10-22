import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PollHeader from '../PollHeader';
import { initData } from '../../data';
import PollStepper from '../PollStepper';
import PollContent from '../PollContent';
import { useStickyState } from '../../hooks/useStickyState';
import { Choice } from '../../types';
import { Button, Typography } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ErrorComponent from '../ErrorComponent';

const useStyles = makeStyles({
  pollContainer: {
    display: 'flex',
    flexFlow: 'column',
    width: '100%',
    maxWidth: '24em',
    minHeight: '12em',
    background: '#fff',
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
  },
  pollBody: {
    margin: '10px',
    padding: '10px',
  },
  widgetFooter: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px',
    backgroundColor: '#2980b9'
  },
  pollCompleteBody: {
    minHeight: '12em'
  },
  questionText: {
    padding: '10px 0',
    fontWeight: 700
  },
  voteWrapper: {
    padding: '10px 0',
    color: '#2c3e50'
  },
  backToPollBtn: {
    margin: '10px 0'
  }
});

interface Props {
  pollName: string;
}

const Poll = (props: Props) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [store, setStore] = useStickyState(initData, 'lol');
  const [votes, setVotes] = useState<string[]>([]);
  const [viewResult, setViewResult] = useState<boolean>(false);
  const maxSteps = store.length;

  const {
    pollName
  } = props;

  const onAnswerSelection = useCallback((a: any[]) => {
    let answerKey = a[activeStep];
    let newArr = [...votes];
    newArr[activeStep] = answerKey;
    setVotes(newArr);
  },[activeStep, votes]);

  const onNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const onBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const onSubmit = () => {
    let payload = [...store];
    for (let i = 0; i < votes.length; i++) {
      payload[i].results[votes[i]] += 1;
    }
    setStore(payload);
    setActiveStep(0);
    setViewResult(!viewResult);
  };

  const handleBackToPoll = () => {
    setViewResult(!viewResult);
    setActiveStep(0);
  }

  const {
    question,
    choices,
    results
  } = store[activeStep];

  const options: Choice[] = Object.values(choices);
  const voteCount: number[] = Object.values(results);

  return (
    <main className={classes.pollContainer}>
      <PollHeader>{pollName}</PollHeader>
      <article className={classes.pollBody}>
        {!store && <ErrorComponent />}
        { !viewResult &&
          <>
            <PollContent question={question}
             choices={choices}
             currentStepIndex={activeStep}
             updateSelectedCheckbox={onAnswerSelection}
            />
            <PollStepper
              currentStepIndex={activeStep}
              maxSteps={maxSteps}
              hasNext={activeStep < maxSteps - 1}
              hasSubmit={activeStep === maxSteps - 1}
              handleNext={onNext}
              handleBack={onBack}
              handleSubmit={onSubmit}
            />
          </>}
          { viewResult &&
            <>
              <div className={classes.pollCompleteBody}>
                <Typography variant="body1">Thank you for participating</Typography>
                <Button
                  onClick={handleBackToPoll}
                  className={classes.backToPollBtn}
                  variant="outlined"
                  startIcon={<ArrowBackIosIcon/>}>
                  Back To Poll
                </Button>
                <Typography variant="body1" className={classes.questionText}>{store[activeStep].question}</Typography>
                {options &&
                options.map((option: Choice, index: number) => {
                  return (
                    <div key={option.id} className={classes.voteWrapper}>
                      {option.label} - {voteCount[index]} votes
                    </div>
                  )
                })}
                <PollStepper
                  currentStepIndex={activeStep}
                  maxSteps={maxSteps}
                  hasNext={activeStep < maxSteps - 1}
                  handleNext={onNext}
                  handleBack={onBack}
                />
              </div>
            </>
          }
      </article>
      <footer className={classes.widgetFooter}>Powered by: Parry's Poll</footer>
    </main>
  )
}

export default Poll;