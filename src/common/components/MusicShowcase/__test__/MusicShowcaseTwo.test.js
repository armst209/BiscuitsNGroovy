import React from "react";
import { render, cleanup, waitFor } from "@testing-library/react";
import MusicShowcase from "../MusicShowcaseIndex";

import { server, rest } from "../../../../testServer";

const sampleRelease = [
  {
    id: 33,
    title: "Test Jan 31",
    description: "Test Live",
    start_date: "2022-01-30T00:00:00.000Z",
    end_date: "2022-02-23T00:00:00.000Z",
    price: 2,
    art_url: "https://bng-resources.s3.us-east-2.amazonaws.com/3/art/drake.png",
    name: "drake",
    album_ep_or_single: 2,
    purchased: null,
    songs: ["Test Song"],
  },
];
const sampleReleaseTwo = [
  {
    id: 33,
    title: "Test Jan 31",
    description: "Test Live",
    start_date: "2022-01-30T00:00:00.000Z",
    end_date: "2022-02-23T00:00:00.000Z",
    price: 2,
    art_url: "https://bng-resources.s3.us-east-2.amazonaws.com/3/art/drake.png",
    name: "drake",
    album_ep_or_single: 2,
    purchased: null,
    songs: ["Test Song"],
  },
  {
    id: 34,
    title: "Test Jan 31",
    description: "Test Live",
    start_date: "2022-01-30T00:00:00.000Z",
    end_date: "2022-02-23T00:00:00.000Z",
    price: 2,
    art_url: "https://bng-resources.s3.us-east-2.amazonaws.com/3/art/drake.png",
    name: "drake",
    album_ep_or_single: 2,
    purchased: null,
    songs: ["Test Song"],
  },
];

beforeEach(() => {
  let portalRoot = document.getElementById("modal-overlay-root");
  if (!portalRoot) {
    portalRoot = document.createElement("div");
    portalRoot.setAttribute("id", "modal-overlay-root");
    document.body.appendChild(portalRoot);
  }
});

afterEach(cleanup);

describe("Fetch data successfully and display correct data", () => {
  test("No active release", async () => {
    // Arrange / Act
    server.use(
      rest.get(`${process.env.REACT_APP_BACKEND_URL}/releases`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ releases: [] }));
      }),
    );

    // Act
    const { findByTestId } = render(<MusicShowcase />);
    const element = await findByTestId("no-releases");

    // Assert
    expect(element).toBeInTheDocument();
    expect(element.textContent).toEqual("Check back soon for our next drop!");
  });

  test("Single Active release", async () => {
    // Arrange / Act
    server.use(
      rest.get(`${process.env.REACT_APP_BACKEND_URL}/releases`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ releases: sampleRelease }));
      }),
    );

    //Act
    const { findByTestId } = render(<MusicShowcase />);

    // Assert
    const element = await findByTestId("available-release-card");
    expect(element).toBeInTheDocument();
  });

  test("Two Active releases", async () => {
    // Arrange / Act
    server.use(
      rest.get(`${process.env.REACT_APP_BACKEND_URL}/releases`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ releases: sampleReleaseTwo }));
      }),
    );

    // Act
    const { findAllByTestId } = render(<MusicShowcase />);

    // Assert
    const element = await findAllByTestId("available-release-card");
    expect(element.length).toBe(2);
  });
});

describe("FAIL REQUEST", () => {
  test("Correct error is displayed", async () => {
    // Arrange - rewrite the response from server for test scenario.
    server.use(
      rest.get(`${process.env.REACT_APP_BACKEND_URL}/releases`, (req, res, ctx) => {
        return res(ctx.status(404));
      }),
    );

    const { findByTestId } = render(<MusicShowcase />);

    const element = await findByTestId("error-message");
    expect(element).toBeInTheDocument();
  });
});
