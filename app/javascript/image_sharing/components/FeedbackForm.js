import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import PropTypes from 'prop-types';

@observer
class FeedbackForm extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  @observable
  feedback = { name: '', comment: '' };

  onNameChange = (event) => {
    this.feedback.name = event.target.value;
  };

  onCommentChange = (event) => {
    this.feedback.comment = event.target.value;
  };

  @action
  onFormSubmit = (event) => {
    // event.preventDefault();
    this.props.store.addFeedback(this.feedback.name, this.feedback.comment);
    this.feedback.name = '';
    this.feedback.comment = '';
  }

  render() {
    const center = {
      textAlign: 'center'
    }

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
