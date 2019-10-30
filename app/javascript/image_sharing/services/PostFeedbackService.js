import { post } from "../utils/helper";

export class PostFeedbackService {
  httpPost(name, comment) {
    return post('/api/feedbacks', { name, comment });
  }
}

export default PostFeedbackService;
