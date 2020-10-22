import React from 'react';
import PollHeader from '../components/PollHeader';
import { render } from '@testing-library/react';

describe('Poll Header component', () => {
  let Comp;
  beforeEach(() => {
    Comp = () => {

      return (
        <PollHeader>Header</PollHeader>
      );
    }
  });

  test('error component mounts', () => {
    expect(Comp()).toMatchSnapshot();
  });

  test('error component text', () => {
    const { getByText } = render(<Comp />);
    expect(getByText("Header")).toBeInTheDocument();
  });
})