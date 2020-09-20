import React from 'react';
import PropTypes from 'prop-types';

import './ItemComponent.css';
import modes from '../../../static-data/mode';

class ItemComponent extends React.Component {

  rowSelected = () => {
    const good = this.props.good;
    this.props.rowWasSelected(good.code)
  }

  onEditRow = (e) => {
    e.stopPropagation();
    this.props.editSelectedRow(this.props.good)
  }

  onDeleteRow = (e) => {
    const good = this.props.good;
    e.stopPropagation();
    this.props.deleteSelectedRow(good.code)
  }

  doNotClick = (e) => {
    e.stopPropagation();
  }

  render() {
    const good = this.props.good;

    let isAddMode = this.props.selectedMode === modes.add;
    let isEditMode = this.props.selectedMode === modes.edit;

    return (
      <tr className={this.props.isSelected ? 'GoodRowSelected' : 'GoodRow'} onClick={isAddMode ? this.doNotClick : this.props.isFromChanged ? this.doNotClick : this.rowSelected}>
        <td className='GoodItem'>{good.name}</td>
        <td className='GoodItem'>{good.cost}</td>
        <td className='GoodItem'>{good.power}</td>
        <td className='GoodItem'>{good.Url}</td>
        <td className='GoodItem'>{good.numbers}</td>
        <td className='GoodItem'>
          <input type='button' disabled={this.props.isFromChanged || isAddMode} className='Input' value='Edit' onClick={this.onEditRow} />
          <input type='button' disabled={this.props.isFromChanged || isAddMode || isEditMode} className='Input' value='Delete' onClick={this.onDeleteRow} />
        </td>
      </tr>
    )
  }
}

ItemComponent.propTypes = {
  good: PropTypes.object.isRequired,
  rowWasSelected: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  deleteSelectedRow: PropTypes.func.isRequired,
  editSelectedRow: PropTypes.func.isRequired,
  isFromChanged: PropTypes.bool.isRequired,
  selectedMode: PropTypes.number
}

export default ItemComponent;