import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from '../components/App';
import Footer from "../components/Footer";
import FeedbackForm from "../components/FeedbackForm";
import FeedbackList from "../components/FeedbackList";

describe('<App />', () => {
  it('should render sub-components correctly', () => {
    const stores = {
      feedbackStore: {}
    };

    const wrapper = shallow(<App.wrappedComponent stores={stores} />);

    expect(wrapper.find(Footer)).to.have.length(1);
    expect(wrapper.find(FeedbackForm)).to.have.length(1);
    expect(wrapper.find(FeedbackList)).to.have.length(1);
  });
})
