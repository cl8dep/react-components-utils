import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { PrivateRoute, PrivateRouteProps } from '../router';

export default {
  title: 'Router/PrivateRoute',
  component: PrivateRoute,
  argTypes: {
    
  },
} as Meta;

const Template: Story<PrivateRouteProps> = (args) => <PrivateRoute {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  
};