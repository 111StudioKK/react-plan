import React from 'react'
import {defaultBreakpoints, planTypes, flexJustifications, flexAlignments, warning} from './utils.js';

class Item extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      breakpoints: Object.assign({}, defaultBreakpoints, this.props.breakpoints),
      breakpoint: window._REACT_PLAN_BREAKPOINT
    };
  }

  componentWillMount() {
    if(this.state.breakpoint) {
      window.addEventListener('breakpoint', this.handleBreakpointEvent);
    }
    else {
      let parentName;
      try {
        parentName = ` (Parent name: ${this
          ._reactInternalInstance
          ._currentElement
          ._owner
          ._instance
          .__proto__
          .constructor.name})`;
      }
      catch(e) {console.error(e.message);}
      warning(`Couldn\'t find breakpoints${parentName}`);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('breakpoint', this.handleBreakpointEvent);
  }

  handleBreakpointEvent = ( e ) => {
    this.setState({
      breakpoint: e.detail
    });
  }

  componentStyle(breakpoint) {
    //Sends a warning if responsive props are used withoyt using the Responsive Component
    const BreakpointProp = this.props[breakpoint];
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
    let breakpoint = this.state.breakpoint;
    let style = this.componentStyle(breakpoint);
    let className = (this.props.className) ? `${this.props.className} ${breakpoint}` : breakpoint;
    let children = (this.props.itemDefaults && this.direction) ?
      React.Children.map(this.props.children, (child) => {
        if (planTypes.includes(child.type.name)) {
          let props = Object.assign({}, this.props.itemDefaults, child.props);
          props.className = [this.props.itemDefaults.className, child.props.className].join(' ').trim();
          props.style = Object.assign({}, this.props.itemDefaults.style, child.props.style);
          return React.cloneElement(child, props);
        }
        else {
          return child;
        }

      })
      :
      this.props.children;

    const {
      align,
      debug,
      itemDefaults,
      justify,
      noWrap,
      order,
      reverse,
      size,
      small,
      medium,
      large,
      wide,
      ...otherProps
    } = this.props;

    const props = Object.assign({}, this.otherProps, {className: className, style: style});
    return (style) ? <div {...props}>{ children }</div> : null;
  }
}

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