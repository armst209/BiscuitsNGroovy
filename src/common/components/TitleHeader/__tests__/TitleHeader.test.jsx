import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TitleHeader from "../TitleHeader";

describe("Title Header component", () => {
  const props = {
    title: "Music Showcase",
    subtitle: "listen to the music below",
  };

  test("correct title & subtitle is displayed", () => {
    render(<TitleHeader {...props} />);
    expect(screen.getByText(/Music Showcase/i)).toBeDefined();
    expect(screen.getByText(/listen to the music below/i)).toBeDefined();
  });
});
