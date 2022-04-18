import Title from "../Title";

export default {
  title: "UI/Title",
  component: Title,
  argTypes: {
    title: "",
    subtitle: "",
    variant: "",
    component: "",
    sx: {},
    direction: "",
  },
};

// export const TitleWithProps = (props) => <Title {...props} />;

// TitleWithProps.args = {
//   title: "This is a title",
//   subtitle: "This is a subtitle",
//   variant: "h2",
//   sx: {},
//   direction: "",
// };

const Template = (args) => <Title {...args} />;

export const TitleWithNoSubtitle = Template.bind({});
TitleWithNoSubtitle.args = {
  title: "Title with no subtitle",
  subtitle: "",
  variant: "",
  component: "",
  sx: { color: "red" },
  direction: "",
};
