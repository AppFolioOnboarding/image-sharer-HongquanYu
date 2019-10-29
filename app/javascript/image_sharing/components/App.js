import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from "./Footer";
import FeedbackForm from "./FeedbackForm";
import FeedbackList from "./FeedbackList";

@observer
class App extends Component {
  static propTypes = {
    stores: PropTypes.object.isRequired
  };

  render() {
    const flashMsg = this.props.stores.flashMsgStore.flashMessage;
    const styles = {
      textAlign: 'center'
    }

    return (
      <div>
        <Header title={'Tell us what you think'} />
        <div style={styles} className={'js-flash-message'}> {flashMsg} </div>
        <h4>Feedback List</h4>
        <FeedbackList />
        <FeedbackForm />
        <Footer footer={'Copyright: AppFolio Inc. Onboarding'} />
      </div>
    )
  }
}

export default inject(
  'stores'
)(App);
