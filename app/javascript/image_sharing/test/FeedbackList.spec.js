import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import FeedbackList from "../components/FeedbackList";
import sinon from "sinon";

describe('<FeedbackList />', () => {
  let store;

  beforeEach(() => {
    store = { feedbacks: [{name: 'test name', comment: 'test comment'}] };
  });

  it('should render', () => {
    const wrapper = shallow(<FeedbackList store={store}/>);

    const listItem = wrapper.find('.js-list-item');
    expect(listItem).to.have.length(1);

    expect(listItem.find('.js-feedback-name').text()).to.equal(' Name: test name ');
    expect(listItem.find('.js-feedback-comment').text()).to.equal(' Comment: test comment ');
  });
});
