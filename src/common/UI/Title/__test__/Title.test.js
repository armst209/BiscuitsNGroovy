import { render, screen } from "@testing-library/react";

import Title from "../Title";

describe("Title Component", () => {
  test("renders correct title passed by props", () => {
    //Arrange
    render(<Title title="This is a title" />);
    const h1Element = screen.getByText(/This is a title/i);

    //Act
    expect(h1Element).toBeInTheDocument();
  });
});
