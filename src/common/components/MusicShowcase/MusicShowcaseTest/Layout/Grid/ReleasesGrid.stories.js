//component imports
import ReleasesGrid from "./ReleasesGrid";
import NoReleasesComponent from "../NoReleases/NoReleases";
import Loader from "../Loader/Loader";

//react query
import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient();

export default {
  title: "Music Showcase/Release Component",
  component: ReleasesGrid,
  decorators: [],
};

export const Grid = () => (
  <QueryClientProvider client={queryClient}>
    <ReleasesGrid />
  </QueryClientProvider>
);
export const NoReleases = () => <NoReleasesComponent />;

export const Loading = () => <Loader />;

const Template = (args) => (
  <QueryClientProvider client={queryClient}>
    <ReleasesGrid {...args} />
  </QueryClientProvider>
);
