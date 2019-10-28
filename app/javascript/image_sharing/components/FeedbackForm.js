import React, { Component } from 'react';

class FeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {feedback: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({feedback: event.target.value})
  }

  handleSubmit(event) {

  }

  render() {
    const center = {
      textAlign: 'center'
    }

    return (
      <div style={center}>
        <form action="" onSubmit={this.handleSubmit}>
          <div> <label>Your thoughts:</label> </div>
          <div>
            <textarea type="text" value={this.state.feedback} onChange={this.handleChange} rows={10} cols={50} />
          </div>
          <div> <input type="submit" value="Submit" /> </div>
        </form>
      </div>
    )
  }
}

export default FeedbackForm;
