import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import {toJS} from 'mobx';

@observer
class FeedbackList extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const divWrapper = {
      width: '100%'
    }
    const feedbackStore = this.props.store;

    const listItems = feedbackStore.feedbacks.map((singleFB) => (
      <li className={'js-list-item'}>
        <div style={divWrapper}>
          <div className={'js-feedback-name'}> Name: {singleFB.name} </div>
          <div className={'js-feedback-comment'} style={divWrapper}> Comment: {singleFB.comment} </div>
        </div>
      </li>
    ) );
    return (
      <ul>{listItems}</ul>
    );
  }
}

export default FeedbackList;
