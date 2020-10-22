import React from 'react';
import { FormControlLabel, Radio, RadioGroup, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Choice } from '../../types';

const useStyles = makeStyles({
  questionWrapper: {
    '& .MuiTypography-body1': {
      fontSize: '1.2em',
      margin: '0 0 15px 0',
    }
  },
  choicesWrapper: {
    marginBottom: '15px',

    '& .Mui-checked': {
      color: '#7f8c8d'
    }
  },
});

interface Props {
  question: string;
  choices: Choice[];
  currentStepIndex: number;
  updateSelectedCheckbox: (a: string[]) => void;
}

const PollContent = (props: Props) => {
  const classes = useStyles();
  const {
    question,
    choices,
    currentStepIndex,
    updateSelectedCheckbox
  } = props;
  const [selected, setOptionSelected] = React.useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newArr = [...selected];
    newArr[currentStepIndex] = event.target.value;
    setOptionSelected(newArr);
    updateSelectedCheckbox(newArr);
  };

  return (
    <>
      <div className={classes.questionWrapper}>
        <Typography variant="body1">{question}</Typography>
      </div>
      <div className={classes.choicesWrapper}>
        <RadioGroup aria-label="options" name="options" value={selected} onChange={handleChange}>
          {choices.map((choice: Choice) => {
            const {id, label} = choice;
            const isChecked = selected[currentStepIndex] === id.toString();
            return (
              <FormControlLabel key={id} checked={isChecked} value={id} control={<Radio />} label={label} />
            )
          })}
        </RadioGroup>
      </div>
    </>
  );
};

export default PollContent;