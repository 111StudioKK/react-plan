import Item from './Item.jsx';

class Row extends Item {
  constructor(props, context) {
    super(props, context);
    this.direction = 'row';
  }
}

export default Row;