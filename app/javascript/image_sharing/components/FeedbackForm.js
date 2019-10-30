import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';
import PropTypes from 'prop-types';

@inject('stores')
@observer
class FeedbackForm extends Component {
  static propTypes = {
    stores: PropTypes.object.isRequired
  };

  @observable feedback = { name: '', comment: '' };

  onNameChange = (event) => {
    this.feedback.name = event.target.value;
  };

  onCommentChange = (event) => {
    this.feedback.comment = event.target.value;
  };

  @action
  onFormSubmit = () => {
    const flashMsgStore = this.props.stores.flashMsgStore;
    const feedbackStore = this.props.stores.feedbackStore;

    return feedbackStore.addFeedback(this.feedback.name, this.feedback.comment).then(() => {
      flashMsgStore.flashMessage = 'Http post request succeed!';

      // clear fields when successfully post feedback
      this.feedback.name = '';
      this.feedback.comment = '';
    }).catch((error) => {
      console.log('error in catch block', error);
      flashMsgStore.flashMessage = 'Http post request failed!';
    })
  };

  render() {
    const center = {
      textAlign: 'center'
    };

    return (
      <div style={center}>
        <form>
          <div>
            <label className={'js-name-label'}>Name: </label>
            <input type="text" value={this.feedback.name} onChange={this.onNameChange} className={'js-name-input'} />
          </div>
          <div> <label className={'js-comment-label'}>Comments:</label> </div>
          <div>
            <textarea
              type="text"
              value={this.feedback.comment}
              onChange={this.onCommentChange}
              className={'js-comment-input'}
              rows={10}
              cols={50} />
          </div>
          <button type={'button'} className={'js-submit-btn'} onClick={this.onFormSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default FeedbackForm;
