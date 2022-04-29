import { renderHook } from "@testing-library/react-hooks";
import { QueryClient, QueryClientProvider } from "react-query";
import useFetchReleases from "../hooks/useFetchReleases";

describe("ReleaseGrid", () => {
  const createWrapper = () => {
    const queryClient = new QueryClient();

    return ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  };

  test("first test", () => {
    const { result } = renderHook(() => useFetchReleases(), {
      wrapper: createWrapper(),
    });
  });
});
