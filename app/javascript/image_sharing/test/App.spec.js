import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from '../components/App';
import Footer from "../components/Footer";

describe('<App />', () => {
  it('should render <Footer />', () => {
    const stores = {
      feedbackStore: {}
    };

    const wrapper = shallow(<App.wrappedComponent stores={stores} />);
    expect(wrapper.find(Footer)).to.have.length(1);
  })
})
