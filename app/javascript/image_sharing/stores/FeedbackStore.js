import {observable, action} from "mobx";

export class FeedbackStore {
  @observable
  feedbacks = [];

  @action
  addFeedback(name, comment) {
    this.feedbacks.push({name: name, comment: comment});
  }
}

export default FeedbackStore;
