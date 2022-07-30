import useTestAxiosFetch from "./useTestAxiosFetch";
import { server, rest } from "../../../../testServer";
import { renderHook } from "@testing-library/react-hooks";
import FetchError from "../FetchError/FetchError";

test("fetch correctly", async () => {
  //Arrange & Act
  const { result, waitForNextUpdate } = renderHook(() =>
    useTestAxiosFetch({
      url: `${import.meta.env.VITE_BACKEND_URL}/releases`,
      method: "GET",
      headers: { "x-access-token": null },
    }),
  );

  // Assert
  expect(result.current.isLoading).toBeTruthy();

  // Act
  await waitForNextUpdate();

  // Assert
  expect(result.current.responseData).toEqual({ release: [] });
});

test("handles failure", async () => {
  // Arrange - rewrite the response from server for test scenario.
  server.use(
    rest.get(`${import.meta.env.VITE_BACKEND_URL}/releases`, (req, res, ctx) => {
      return res(ctx.status(404));
    }),
  );

  // Arrange & Act
  const { result, waitForNextUpdate } = renderHook(() =>
    useTestAxiosFetch({
      url: `${import.meta.env.VITE_BACKEND_URL}/releases`,
      method: "GET",
      headers: { "x-access-token": null },
    }),
  );

  // Assert
  expect(result.current.isLoading).toBeTruthy();

  // Act
  await waitForNextUpdate();

  // Assert
  expect(result.current.errorMessage).toEqual("$Status: 404 Message: Not Found");
  expect(result.current.errorMessageComponent).toStrictEqual(
    <FetchError errorMessage={result.current.errorMessage} />,
  );
});
