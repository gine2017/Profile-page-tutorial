import React from "react";
import Profile from "./Profile";
import imageFile from "../assets/girl.jpg";

export default {
  title: "Components/Profile",
  component: Profile,
};

const Template = (args) => <Profile {...args} />;

export const RoundProfile = Template.bind({});
// Profile.args = {
//   imgFile: imageFile,
// };
