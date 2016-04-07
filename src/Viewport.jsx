import React from 'react';

const Viewport = (props) => <div style={{height: '100vh'}}>{props.children}</div>;

Viewport.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ])
}

export default Viewport;