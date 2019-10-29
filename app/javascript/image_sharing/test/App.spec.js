import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import App from '../components/App';
import Footer from "../components/Footer";
import FeedbackForm from "../components/FeedbackForm";
import FeedbackList from "../components/FeedbackList";

describe('<App />', () => {
  let stores;

  beforeEach(() => {
    stores = {
      feedbackStore: {
        addFeedback: sinon.stub().rejects()
      },
      flashMsgStore: { flashMessage: 'test message' }
    };
  })

  it('should render sub-components correctly', () => {
    const wrapper = shallow(<App.wrappedComponent stores={stores} />);

    expect(wrapper.find(Footer)).to.have.length(1);
    expect(wrapper.find(FeedbackForm)).to.have.length(1);
    expect(wrapper.find(FeedbackList)).to.have.length(1);
  });

  it('should display a message', () => {
    const wrapper = shallow(<App.wrappedComponent stores={stores} />);
    expect(wrapper.find('.js-flash-message').text().trim()).to.equal('test message');
  });
})
