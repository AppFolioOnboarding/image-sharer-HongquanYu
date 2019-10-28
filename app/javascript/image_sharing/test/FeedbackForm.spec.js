import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import FeedbackForm from "../components/FeedbackForm";

describe('<FeedbackForm />', () => {
  let store;

  beforeEach(() => {
    store = { addFeedback: sinon.spy() };
  });

  it('should form fields be updated when do so', () => {
    const wrapper = shallow(<FeedbackForm store={store} />);

    const nameInput = wrapper.find('.js-name-input');
    nameInput.simulate('change', {target: {value: 'test name'}});
    expect(wrapper.instance().feedback.name).to.equal('test name');

    const commentInput = wrapper.find('.js-comment-input');
    commentInput.simulate('change', {target: {value: 'test comment'}});
    expect(wrapper.instance().feedback.comment).to.equal('test comment');
  });

  it('should submit button functions correctly', () => {
    const wrapper = shallow(<FeedbackForm store={store} />);

    wrapper.instance().feedback = {name: 'test name 2', comment: 'test comment 2'};

    const button = wrapper.find('.js-submit-btn');
    button.simulate('click');
    expect(store.addFeedback.withArgs('test name 2', 'test comment 2').calledOnce).to.equal(true);
    expect(wrapper.instance().feedback.name).to.equal('');
    expect(wrapper.instance().feedback.comment).to.equal('');
  });
});
