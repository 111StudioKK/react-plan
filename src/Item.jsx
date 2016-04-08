import React from 'react'
import {flexJustifications, flexAlignments, warning} from './utils.js';

class Item extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentStyle(breakpoint) {
    //Sends a warning if responsive props are used withoyt using the Responsive Component
    if(!breakpoint) {
      warning('Couldn\'t find breakpoints');
    }
    let BreakpointProp = this.props[breakpoint];
    //If the matching breakpoint is set to 'hide', we skip styling and rendering the children.
    if(BreakpointProp === 'hide' && breakpoint) {
      return null;
    }
    else{
      let style = this.props.style || {};
      let size = (BreakpointProp) ? BreakpointProp : this.props.size;

      //Assign breakpoint or default size
      if(size){
        style.flex = (typeof size === 'number') ? size : `0 0 ${size}`;
      }
      //If the Item is a Row or Column apply specific flex container styles
      if(this.direction){
        let reverse = (this.props.reverse) ? '-reverse' : '';
        style.display = 'flex';
        style.flex = style.flex || 1;
        style.alignItems = this.props.align;
        style.flexDirection = this.direction + reverse;
        style.justifyContent = this.props.justify;
        style.flexWrap = (this.props.noWrap) ? 'nowrap' : `wrap${reverse}`;
      }
      else {
        style.alignSelf = this.props.align;
        style.order = this.props.order;
      }
      return style;
    }
  }

  render() {
    let breakpoint = this.context.breakpoint;
    let style = this.componentStyle(breakpoint);
    let className = (this.props.className) ? `${this.props.className} ${breakpoint}` : breakpoint;
    let children = (this.props.itemDefaults && this.direction) ?
      React.Children.map(this.props.children, (child) => React.cloneElement(child, this.props.itemDefaults))
      :
      this.props.children;
    return (style) ? <div className={className} style={style}>{children}</div> : null;
  }
}

Item.contextTypes = {
  breakpoint: React.PropTypes.string
};

Item.propTypes = {
  align: React.PropTypes.oneOf(flexAlignments),
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ]),
  className: React.PropTypes.string,
  debug: React.PropTypes.bool,
  itemDefaults: React.PropTypes.object,
  justify: React.PropTypes.oneOf(flexJustifications),
  noWrap: React.PropTypes.bool,
  order: React.PropTypes.number,
  reverse: React.PropTypes.bool,
  size: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string
  ]),
  style: React.PropTypes.object
}

export default Item;