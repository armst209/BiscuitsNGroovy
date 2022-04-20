import { render, screen } from "@testing-library/react";

import Title from "../Title";
import { TitleWithNoSubtitle } from "./Title.stories";

describe("Title Component", () => {
  test("renders correct title passed by props", () => {
    //Arrange
    render(<TitleWithNoSubtitle />);
    const h1Element = screen.getByText(/Title with no subtitle/i);

    //Act
    expect(h1Element).toBeInTheDocument();
  });
});
