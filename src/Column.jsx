import Item from './Item.jsx';

class Column extends Item {
  constructor(props, context) {
    super(props, context);
    this.direction = 'column';
  }
}

export default Column;