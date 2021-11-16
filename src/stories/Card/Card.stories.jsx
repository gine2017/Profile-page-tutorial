import React from "react";
import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const CardImage = Template.bind({});
CardImage.args = {
  title: "Image 1",
  imgSrc: "trees1",
  description: "Location: New York, NY",
  likes: 200,
};
