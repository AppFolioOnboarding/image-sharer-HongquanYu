import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'mobx-react';

import FeedbackStore from './stores/FeedbackStore';
import FlashMessageStore from "./stores/FlashMessageStore";

const stores = {
  feedbackStore: new FeedbackStore(),
  flashMsgStore: new FlashMessageStore()
};

ReactDOM.render(
  <Provider stores={stores}>
    <App/>
  </Provider>,
  document.getElementById('feedback-root')
);
