import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import FeedbackList from "../components/FeedbackList";

describe('<FeedbackList />', () => {
  let stores;

  beforeEach(() => {
    stores = {
      feedbackStore: {
        feedbacks: [{name: 'test name', comment: 'test comment'}]
      },
      flashMsgStore: {
        flashMessage: 'test message'
      }
    };
  });

  it('should render', () => {
    const wrapper = shallow(<FeedbackList.wrappedComponent stores={stores}/>);

    const listItem = wrapper.find('.js-list-item');
    expect(listItem).to.have.length(1);

    expect(listItem.find('.js-feedback-name').text()).to.equal(' Name: test name ');
    expect(listItem.find('.js-feedback-comment').text()).to.equal(' Comment: test comment ');
  });
});
