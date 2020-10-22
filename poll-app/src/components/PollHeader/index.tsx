import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

interface Props {
  color?: string;
  children?: React.ReactNode;
}

const useStyles = makeStyles( {
  panelHeader: {
    backgroundColor: '#2980b9',
    color: '#fff',
    padding: '20px',
    margin: 0,

    '&.MuiTypography-h4': {
      fontSize: '1.75rem'
    }
  },

});

const PollHeader = (props: Props) => {
  const {
    children
  } = props;
  const classes = useStyles();
  return (
      <Typography variant="h4" className={classes.panelHeader}>{children}</Typography>
  );
}

export default PollHeader;