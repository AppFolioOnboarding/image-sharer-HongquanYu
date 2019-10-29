import { expect } from 'chai';
import {toJS} from 'mobx';
import sinon from 'sinon';

import { FeedbackStore } from "../stores/FeedbackStore";

describe('FeedbackStore', () => {
  it('should push a new feedback object in store', () => {
    const mock = new FeedbackStore();
    mock.httpPostRequestHandler.httpPost = sinon.spy();

    expect(mock.feedbacks.length).to.equal(0);

    mock.addFeedback('test name', 'test comment');

    expect(mock.feedbacks.length).to.equal(1);

    expect(toJS(mock.feedbacks)[0].name).to.equal('test name');
    expect(toJS(mock.feedbacks)[0].comment).to.equal('test comment');

    expect(mock.httpPostRequestHandler.httpPost.withArgs('test name', 'test comment').calledOnce).to.equal(true);
  })
});
