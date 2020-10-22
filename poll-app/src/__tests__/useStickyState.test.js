import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useStickyState } from '../hooks/useStickyState';

describe("useStickyState hooks", () => {
  let Comp;
  beforeEach(() => {
    Comp = () => {
      const [value, setValue] = useStickyState(0, "value");

      return (
        <div>
          {value}
          <button onClick={() => setValue(value + 1)}>Add value</button>
        </div>
      );
    }
  });
  test("persists on component unmounts and rerender", () => {
    const { getByText, rerender, unmount } = render(<Comp />);
    expect(getByText(/0/i)).toBeInTheDocument();
    fireEvent.click(getByText(/add value/i));
    expect(getByText(/1/i)).toBeInTheDocument();
  });
  test("persist localstorage state on unmount and rerender", () => {
    const { getByText, rerender, unmount } = render(<Comp />);
    unmount();
    rerender(<Comp />);
    expect(getByText(/1/i)).toBeInTheDocument();
  })
});
