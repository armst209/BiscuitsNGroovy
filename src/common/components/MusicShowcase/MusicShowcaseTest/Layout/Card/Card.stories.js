//mocks
import { mockRelease } from "common/utils/Mocks/Mocks";

//component imports
import Card from "./Card";

export default {
  title: "Music Showcase/Card",
  component: Card,
};

export const Normal = () => <Card release={mockRelease} />;
