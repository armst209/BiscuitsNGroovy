import { render, screen, act } from "@testing-library/react";
import Vault from "./Vault";
import { BrowserRouter as Router } from "react-router-dom";

const Component = () => {
  return (
    <Router>
      <Vault />
    </Router>
  );
};

const unmockedFetch = global.fetch;

const mockResponse = {
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
    release_id: 7,
    release_name: "more music v",
    start_date: "2000-01-01T00:00:00.000Z",
  },
};

describe("Vault page static data renders correctly", () => {
  beforeEach(async () => {
    await act(async () => render(<Component />));
  });

  test("Vault header and icon are showing", () => {
    expect(screen.getByRole("heading", { name: /VAULT/ })).toBeInTheDocument();
    expect(screen.getByTestId("record-svg")).toBeInTheDocument();
  });

  test("Music showcase link is on the page", () => {
    expect(screen.getByRole("link", { name: /music showcase/i })).toBeInTheDocument();
  });
});

describe("Successful network/http/fetch request will render biscuits", () => {
  beforeEach(async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => mockResponse,
      });
    });
    await act(async () => render(<Component />));
  });

  afterEach(() => {
    global.fetch = unmockedFetch;
  });

  test("rendered vault biscuits", async () => {
    const releases = await screen.findAllByTestId("vault-release");
    expect(releases.length).toBe(2);
  });

  test("correct url called only one time", () => {
    expect(fetch).toBeCalledWith("http://ec2-3-140-216-48.us-east-2.compute.amazonaws.com:8080/api/vault", { signal: new AbortController().signal });
    expect(fetch).toBeCalledTimes(1);
  });
});

describe("Failed fetch/network/http request", () => {
  beforeEach(async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(new Error("fail"));
    });
    await act(async () => render(<Component />));
  });

  afterEach(() => {
    global.fetch = unmockedFetch;
  });

  test("Error message displays showing connection issue", async () => {
    expect(
      await screen.getByText(
        /oops! it looks like we're having trouble getting your content ready\. try restarting your internet connection or refreshing the page\./i,
      ),
    ).toBeInTheDocument();
  });
});
