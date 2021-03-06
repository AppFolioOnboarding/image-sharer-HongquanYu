import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
  static propTypes = {
    footer: PropTypes.string.isRequired
  };

  render () {
    const styles = {
      bottom: 0,
      width: '100%',
      position: 'absolute',
      textAlign: 'center'
    }
    return (
      <div>
        <p style={styles} className='js-footer'>{this.props.footer}</p>
      </div>
    );
  }
}

export default Footer;
