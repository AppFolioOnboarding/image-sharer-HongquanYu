import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import FeedbackForm from "../components/FeedbackForm";

describe('<FeedbackForm />', () => {
  let stores;

  beforeEach(() => {
    stores = {
      feedbackStore: {
        addFeedback: sinon.stub().resolves()
      },
      flashMsgStore: {
        flashMessage: 'test message'
      }
    };
  });

  it('should form fields be updated when do so', () => {
    const wrapper = shallow(<FeedbackForm.wrappedComponent stores={stores} />);

    const nameInput = wrapper.find('.js-name-input');
    nameInput.simulate('change', {target: {value: 'test name'}});
    expect(wrapper.instance().feedback.name).to.equal('test name');

    const commentInput = wrapper.find('.js-comment-input');
    commentInput.simulate('change', {target: {value: 'test comment'}});
    expect(wrapper.instance().feedback.comment).to.equal('test comment');
  });

  it('should submit button functions correctly', () => {
    const wrapper = shallow(<FeedbackForm.wrappedComponent stores={stores} />);

    wrapper.instance().feedback = {name: 'test name 2', comment: 'test comment 2'};

    const button = wrapper.find('.js-submit-btn');
    button.simulate('click');
    expect(stores.feedbackStore.addFeedback.withArgs('test name 2', 'test comment 2').calledOnce).to.equal(true);
    expect(wrapper.instance().feedback.name).to.equal('test name 2');
    expect(wrapper.instance().feedback.comment).to.equal('test comment 2');
  });

  it('should display successful flash message when submit successfully', async () => {
    const wrapper = shallow(<FeedbackForm.wrappedComponent stores={stores} />);
    wrapper.instance().feedback = {name: 'test name', comment: 'test comment'};

    await wrapper.instance().onFormSubmit();

    expect(stores.flashMsgStore.flashMessage).to.equal('Http post request succeed!');
  });

  it('should display failed flash message when submit failed', async () => {
    stores.feedbackStore.addFeedback = sinon.stub().rejects();

    const wrapper = shallow(<FeedbackForm.wrappedComponent stores={stores} />);
    wrapper.instance().feedback = {name: 'test name', comment: 'test comment'};

    await wrapper.instance().onFormSubmit();

    expect(stores.flashMsgStore.flashMessage).to.equal('Http post request failed!');
  });
});
