import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

@inject('stores')
@observer
class FeedbackList extends Component {
  static propTypes = {
    stores: PropTypes.object.isRequired
  };

  render() {
    const divWrapper = {
      width: '100%'
    }
    const feedbackStore = this.props.stores.feedbackStore;

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
