import MusicShowcase from "../index";
import { render, screen } from "@testing-library/react";

import { QueryClient, QueryClientProvider } from "react-query";
import { renderWithProvidersAndRouter } from "setupTests";
import nock from "nock/types";
import { renderHook } from "@testing-library/react-hooks";
import useFetchReleases from "../Layout/Grid/hooks/useFetchReleases";
import { Route } from "react-router-dom";

import Homepage from "pages/Home/Homepage";

describe("MusicShowcase", () => {
  test("title and grid container are in the dom", () => {
    renderWithProvidersAndRouter(<MusicShowcase />);
  });

  describe("ReleasesGrid", () => {
    test("fetch", async () => {
      renderWithProvidersAndRouter(<MusicShowcase />, "/");

      const { result, waitFor } = renderHook(useFetchReleases(600000, 3.6e6, true, true, false));

      await waitFor(() => {
        return result.current.isSuccess;
      });
      expect(result.current.data).toBeTruthy();
    });
  });
});
