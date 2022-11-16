import React, {PropTypes, Component} from 'react/addons';
import shouldPureComponentUpdate from 'react-pure-render/function';

import {placeStyle} from './my_place_styles.js';

export default class MyPlace extends Component {
  static propTypes = {
    text: PropTypes.string,
    radius: PropTypes.int
  };

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
       <div style={placeStyle}>
          {this.props.text}
       </div>
    );
  }
}