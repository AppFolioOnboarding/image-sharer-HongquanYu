import React, { Component } from 'react';
import { inject } from 'mobx-react';
import Header from './Header';
import Footer from "./Footer";
import FeedbackForm from "./FeedbackForm";
import FeedbackList from "./FeedbackList";
import PropTypes from 'prop-types';

class App extends Component {
  static propTypes = {
    stores: PropTypes.object.isRequired
  };

  render() {
    const store = this.props.stores.feedbackStore;

    return (
      <div>
        <Header title={'Tell us what you think'} />
        <h4>Feedback List</h4>
        <FeedbackList store={store} />
        <FeedbackForm store={store} />
        <Footer footer={'Copyright: AppFolio Inc. Onboarding'} />
      </div>
    )
  }
}

export default inject(
  'stores'
)(App);
