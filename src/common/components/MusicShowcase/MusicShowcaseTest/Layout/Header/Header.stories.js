import Title from "common/UI/Title/Title";

export default {
  title: "Music Showcase/Header",
  component: Title,
};

export const Header = () => (
  <Title
    title="Music Showcase"
    subtitle="Available biscuits shown below. Click on a title for more details"
    variant="h2"
    sx=""
  />
);
