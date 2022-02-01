import { render, screen, act } from "@testing-library/react";
import Vault from "./Vault";
import { BrowserRouter as Router } from "react-router-dom";
import { debug } from "console";

const Component = () => {
  return (
    <Router>
      <Vault />
    </Router>
  );
};

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        6: {
          artist_id: 3,
          artist_name: "drake",
          end_date: "2000-01-01T00:00:00.000Z",
          playlist: ["Passionfruit", "Nice For What (feat. Drake)"],
          release_art: "https://bng-resources.s3.us-east-2.amazonaws.com/3/art/drake-cover-photo.jpg",
          release_description: "the greatest hits ever",
          release_id: 6,
          release_name: "more music",
          start_date: "2000-01-01T00:00:00.000Z",
        },
        7: {
          artist_id: 3,
          artist_name: "drake",
          end_date: "2000-01-01T00:00:00.000Z",
          playlist: ["Passionfruit", "Nice For What (feat. Drake)"],
          release_art: "https://bng-resources.s3.us-east-2.amazonaws.com/3/art/drake-cover-photo.jpg",
          release_description: "the greatest hits ever",
          release_id: 6,
          release_name: "more music",
          start_date: "2000-01-01T00:00:00.000Z",
        },
      }),
  }),
);

describe("Vault page renders correctly", () => {
  // beforeEach(async () => {
  //   await act(async () => render(<Component />));
  // });

  // test("Vault header and icon are showing", () => {
  //   expect(screen.getByRole("heading", { name: /VAULT/ })).toBeInTheDocument();
  //   expect(screen.getByTestId("record-svg")).toBeInTheDocument();
  // });

  // test("Music showcase link is on the page", () => {
  //   expect(screen.getByRole("link", { name: /music showcase/i })).toBeInTheDocument();
  // });

  test("Vault contains biscuits/releases", async () => {
    await act(async () => render(<Component />));
    const releases = await screen.findAllByTestId("vault-release");
    expect(releases.length).toBe(2);
  });
});
