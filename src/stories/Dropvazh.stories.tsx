import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Dropvazh } from '../Dropvazh';

export default {
  title: 'Dropvazh',
  component: Dropvazh,
  argTypes: {},
} as Meta<typeof Dropvazh>;

const Template: StoryFn<typeof Dropvazh> = (args) => <Dropvazh {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  kita: 'Clicked this many times:',
};

Secondary.args = {
  kita: 'seocndari:',
};
