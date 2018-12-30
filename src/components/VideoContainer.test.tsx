import React from 'react';
import { shallow, mount } from 'enzyme';
import VideoContainer from './VideoContainer';

jest.mock('../services/services');

it('renders without crashing', () => {
    const wrapper = shallow(<VideoContainer />);
    expect(wrapper).not.toBeNull();
});

it('sets video id correctly', async ()=> {
    const wrapper = shallow(<VideoContainer />);
    await wrapper.update();
    expect(wrapper.state('videoId')).toBe('12345');
});
