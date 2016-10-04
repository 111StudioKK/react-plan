
import 'custom-event-polyfill';
import { defaultBreakpoints } from './utils.js';

export default class Responsive {

  constructor() {
    this.breakpoint = null;
    this.windowResizeHandler();
    window._REACT_PLAN_BREAKPOINT = this.breakpoint;
    window.addEventListener('resize', this.windowResizeHandler);
  }

  matchMediaQuery() {
    return Object.keys(defaultBreakpoints).filter((breakpoint)=>{
      return (window.matchMedia(defaultBreakpoints[breakpoint]).matches);
    });
  }

  windowResizeHandler = () => {
    let breakpoint = this.matchMediaQuery().slice(-1)[0];
    if(breakpoint !== this.breakpoint){
      this.breakpoint = breakpoint;
      const event = new CustomEvent('breakpoint', { 'detail': this.breakpoint });
      window.dispatchEvent(event);
    }
    }
  }