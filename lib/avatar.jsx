import React, {PropTypes} from 'react';

export default class Avatar extends React.Component {
  render() {
    return (
      <div className="avatar">
        <p>
          <em>{this.props.email}</em>
        </p>
        <img className="img-rounded" src={this.props.src} alt=""/>
      </div>
    );
  }
}

Avatar.propTypes = {
  email: PropTypes.string,
  src: PropTypes.string
};
