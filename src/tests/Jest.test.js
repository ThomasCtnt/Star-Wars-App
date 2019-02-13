import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import ImageInput from '../components/ImageInput/ImageInput';

describe('<App />', () => {
    test('contains a header', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('header')).toHaveLength(1);
    });

    test('contains an image', () => {
        const wrapper = shallow(<ImageInput />);
        expect(wrapper.find('img')).toHaveLength(1);
    })
});