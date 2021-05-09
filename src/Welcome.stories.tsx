import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

const WelComme: React.FC<any> = ({}) => {
    return (
        <h1>欢迎来到storybook</h1>
    )
}

export default {
    title: '首页',
    component: WelComme,
} as Meta;

const Template: Story<any> = (args) => <WelComme {...args} />;

export const WelCommePage = Template.bind({});

WelCommePage.args = {

};