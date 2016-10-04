import {Component, Children, PropTypes} from 'react'

class Responsive extends Component {
  getChildContext() {
    return { breakpoint: this.state.breakpoint };
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.warn('Responsive is not required anymore, instead Items, Columns and Rows handle beakpoint changes internally');
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

export default Responsive;