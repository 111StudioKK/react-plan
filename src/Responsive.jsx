import {Component, Children, PropTypes} from 'react'
import {defaultBreakpoints} from './utils.js';

class Responsive extends Component {
  getChildContext() {
    return { breakpoint: this.state.breakpoint };
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      breakpoints: Object.assign({}, defaultBreakpoints, this.props.breakpoints),
      breakpoint: null
    };
  }

  componentWillMount() {
    this.windowResizeHandler();
    window.addEventListener('resize', this.windowResizeHandler.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener(this.windowResizeHandler);
  }

  matchMediaQuery() {
    return Object.keys(this.state.breakpoints).filter((breakpoint)=>{
      return (window.matchMedia(this.state.breakpoints[breakpoint]).matches);
    });
  }

  windowResizeHandler() {
    let breakpoint = this.matchMediaQuery().slice(-1)[0];
    if(breakpoint !== this.state.breakpoint){
      this.setState({
        breakpoint: breakpoint
      });
    }
  }

  render() {
    const { children } = this.props;
    return Children.only(children);
  }
}

Responsive.propTypes = {
  children: PropTypes.element.isRequired,
  breakpoints: PropTypes.shape({
    mobile: PropTypes.number,
    tablet: PropTypes.number,
    laptop: PropTypes.number,
    desktop: PropTypes.number
  })
}

Responsive.childContextTypes = {
  breakpoint: PropTypes.string
}

export default Responsive;