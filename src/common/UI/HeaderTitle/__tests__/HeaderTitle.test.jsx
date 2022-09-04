import { describe, test, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import HeaderTitle from "../HeaderTitle";

//extending jest matchers
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

describe("Header Title component", () => {
  const props = {
    title: "Music Showcase",
    subtitle: "subtitle goes here",
    variant: "h2",
    component: "h2",
    imgPosition: "row",
    sx: { color: "white", fontWeight: "bold" },
  };

  test("correct title & subtitle is displayed", () => {
    render(<HeaderTitle {...props} />);
    expect(screen.getByText(/Music Showcase/i)).toBeInTheDocument();
    expect(screen.getByText(/subtitle goes here/i)).toBeInTheDocument();
  });

  test("correct element is displayed for component prop", () => {
    render(<HeaderTitle {...props} />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
