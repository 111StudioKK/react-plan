import React from 'react';

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

const icons = {
  mobile: require('./images/mobile.png'),
  tablet: require('./images/tablet.png'),
  laptop: require('./images/laptop.png'),
  desktop: require('./images/desktop.png')
};

const BreakpointWatcher = (props, context) => <span><img src={icons[context.breakpoint]} alt={context.breakpoint}/>{context.breakpoint.capitalize()}</span>;

BreakpointWatcher.contextTypes = {
  breakpoint: React.PropTypes.string
};

export default BreakpointWatcher;