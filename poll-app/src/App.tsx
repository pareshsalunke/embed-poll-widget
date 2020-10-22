import React from 'react';
import './App.css';
import Poll from './components/Poll';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  appContainer: {
    margin:'0 auto'
  },
  appHeader: {
    backgroundColor: '#fff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.appContainer}>
      <header className={classes.appHeader}>
        <Poll pollName="Take a Poll" />
      </header>
    </div>
  );
}

export default App;
