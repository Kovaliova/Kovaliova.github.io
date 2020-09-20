import React from 'react';
import PropTypes from 'prop-types';

import './ItemComponent.css';
import modes from '../../../static-data/mode';

class ItemComponent extends React.Component {

  rowSelected = () => {
    const item = this.props.item;
    this.props.rowWasSelected(item.code)
  }

  onEditRow = (e) => {
    e.stopPropagation();
    this.props.editSelectedRow(this.props.item)
  }

  onDeleteRow = (e) => {
    const item = this.props.item;
    e.stopPropagation();
    this.props.deleteSelectedRow(item.code)
  }

  doNotClick = (e) => {
    e.stopPropagation();
  }

  render() {
    const item = this.props.item;

    let isAddMode = this.props.selectedMode === modes.add;
    let isEditMode = this.props.selectedMode === modes.edit;

    return (
      <tr className={this.props.isSelected ? 'GoodRowSelected' : 'GoodRow'} onClick={isAddMode ? this.doNotClick : this.props.isFromChanged ? this.doNotClick : this.rowSelected}>
        <td className='GoodItem'>{item.name}</td>
        <td className='GoodItem'>{item.cost}</td>
        <td className='GoodItem'>{item.power}</td>
        <td className='GoodItem'>{item.Url}</td>
        <td className='GoodItem'>{item.numbers}</td>
        <td className='GoodItem'>
          <input type='button' disabled={this.props.isFromChanged || isAddMode} className='Input' value='Edit' onClick={this.onEditRow} />
          <input type='button' disabled={this.props.isFromChanged || isAddMode || isEditMode} className='Input' value='Delete' onClick={this.onDeleteRow} />
        </td>
      </tr>
    )
  }
}

ItemComponent.propTypes = {
  item: PropTypes.object.isRequired,
  rowWasSelected: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  deleteSelectedRow: PropTypes.func.isRequired,
  editSelectedRow: PropTypes.func.isRequired,
  isFromChanged: PropTypes.bool.isRequired,
  selectedMode: PropTypes.number
}

export default ItemComponent;