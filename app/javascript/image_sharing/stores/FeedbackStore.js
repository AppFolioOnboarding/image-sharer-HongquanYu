import {observable, action} from "mobx";

import PostFeedbackService from "../services/PostFeedbackService";

export class FeedbackStore {
  @observable feedbacks = [];
  httpPostRequestHandler = new PostFeedbackService();

  @action
  addFeedback(name, comment) {
    this.feedbacks.push({name: name, comment: comment});
    return this.httpPostRequestHandler.httpPost(name, comment);
  }
}

export default FeedbackStore;
