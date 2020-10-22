import React from 'react';
import ErrorComponent from '../components/ErrorComponent';
import { render } from '@testing-library/react';

describe('Error component', () => {
  let Comp;
  beforeEach(() => {
    Comp = () => {

      return (
        <ErrorComponent />
      );
    }
  });

  test('error component mounts', () => {
    expect(Comp()).toMatchSnapshot();
  });

  test('error component text', () => {
    const { getByText } = render(<Comp />);
    expect(getByText("Error: Loading Survey")).toBeInTheDocument();
  });
})