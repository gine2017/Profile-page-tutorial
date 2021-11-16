import React from "react";
import Hero from "./Hero";

export default {
  title: "Components/Hero",
  component: Hero,
};

const Template = (args) => <Hero {...args} />;

export const CityHero = Template.bind({});
