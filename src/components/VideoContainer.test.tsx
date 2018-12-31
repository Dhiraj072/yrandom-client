import React from 'react';
import { shallow, mount } from 'enzyme';
import VideoContainer from './VideoContainer';
import YouTube from 'react-youtube';

jest.mock('../services/services');

it('renders without crashing', () => {
    const wrapper = shallow(<VideoContainer />);
    expect(wrapper).not.toBeNull();
    expect(wrapper.find('p').length).toEqual(1);
});

it('sets video id correctly', async ()=> {
    const wrapper = shallow(<VideoContainer />);
    await wrapper.update();
    expect(wrapper.state('videoId')).toBe('12345');
    expect(wrapper.find(YouTube).length).toEqual(1);
});
