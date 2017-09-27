import React from 'react';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Page from 'Page';
import icon from '../../images/icon.svg';

Enzyme.configure({ adapter: new Adapter() });

describe('<Page />', () => {
  it('should exist', () => {
    expect(Page).toExist();
  });

  describe('render', () => {
    it('should render an icon with empty alt tag', () => {
      const page = shallow(<Page />);
      const currentIcon = page.find('img.icon');

      expect(currentIcon.prop('src')).toBe(icon);
      expect(currentIcon.prop('alt')).toBe('');
    });
  });
});
