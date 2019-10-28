import { expect } from 'chai';
import {toJS} from 'mobx';

import { FeedbackStore } from "../stores/FeedbackStore";

describe('FeedbackStore', () => {
  it('should push a new feedback object in store', () => {
    const store = new FeedbackStore();
    expect(store.feedbacks.length).to.equal(0);

    store.addFeedback('this is a name', 'this is a comment');

    expect(store.feedbacks.length).to.equal(1);

    expect(toJS(store.feedbacks)[0].name).to.equal('this is a name');
    expect(toJS(store.feedbacks)[0].comment).to.equal('this is a comment');
  })
});
