import React from 'react';
import PropTypes from 'prop-types';

import './ListComponent.css';
import ItemComponent from './ItemComponent/ItemComponent';
import ViewComponent from '../ViewComponent/ViewComponent';
import modes from '../../static-data/mode';
import AddEditComponent from '../AddEditComponent/AddEditComponent';

class ListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemList: props.itemList,
            selectedCode: null,
            selectedGood: null,
            detailMode: null,
            isFromChanged: false,
            editGood: null,
            uniqueCode: 5,
            isDisableBtn: false
        };
    }

    rowSelected = (code) => {
        if (!this.state.isFromChanged) {
            let selectedGood = this.state.itemList.filter(item => item.code === code)[0];
            this.setState({ selectedCode: code, selectedGood: selectedGood, detailMode: modes.view })
        }
    }

    deleteRow = (code) => {
        let answer = confirm(this.props.question);
        if (answer) {
            let filteredArray = this.state.itemList.filter(element => element.code !== code);
            this.setState({ itemList: filteredArray })
        }
    }

    editRow = (editGood) => {
        this.setState({ editGood: editGood, detailMode: modes.edit, selectedCode: editGood.code })
    }

    formChanged = () => {
        this.setState({ isFromChanged: true })
    }

    disableBtn = (isDisableBtn) => {
        this.setState({ isDisableBtn: isDisableBtn })
    }

    addGood = () => {
        this.setState({
            editGood: { code: this.state.uniqueCode },
            detailMode: modes.add,
            selectedCode: null,
            uniqueCode: this.state.uniqueCode + 1
        })
    }

    saveGood = (newGood) => {
        let newGoodsArray;
        if (this.state.detailMode === modes.edit) {
            newGoodsArray = this.state.itemList.map(item => {
                if (item.code === newGood.code) {
                    item = newGood
                }
                return item
            })
        }
        if (this.state.detailMode === modes.add) {
            newGoodsArray = this.state.itemList.concat(newGood);
        }
        this.setState({ itemList: newGoodsArray, detailMode: modes.none, isFromChanged: false })

    }

    cancelGood = () => {
        this.setState({ detailMode: modes.none, isFromChanged: false })
    }

    render() {
        var headers = this.props.tableHeaders.map(header =>
            <th key={header.id} className='TableHeader'>{header.name}</th>
        );
        var items = this.state.itemList.map(item =>
            <ItemComponent
                key={item.code}
                item={item}
                rowWasSelected={this.rowSelected}
                isSelected={this.state.selectedCode === item.code ? true : false}
                deleteSelectedRow={this.deleteRow}
                editSelectedRow={this.editRow}
                isFromChanged={this.state.isFromChanged}
                selectedMode={this.state.detailMode}
            />
        );

        let isAddMode = this.state.detailMode === modes.add;
        let isEditMode = this.state.detailMode === modes.edit;

        return (
            <React.Fragment>
                <table className='ListComponent'>
                    <caption className='ListCaption'>{this.props.tableName}</caption>
                    <thead><tr>{headers}</tr></thead>
                    <tbody>{items}</tbody>
                </table>
                <div>
                    {
                        <input 
                        className='AddButton'
                        disabled={isAddMode || isEditMode}
                        type='button' 
                        value='Add' 
                        onClick={this.addGood} />
                    }
                </div>
                <div>
                    {
                        (this.state.detailMode === modes.view) &&
                        <ViewComponent item={this.state.selectedGood} />
                    }
                    {
                        (isAddMode || isEditMode) &&
                        <AddEditComponent
                            key={this.state.editGood.code}
                            selectedGood={this.state.editGood}
                            initialGoodName={this.state.editGood.name}
                            mode={this.state.detailMode}
                            saveGood={this.saveGood}
                            cancelGood={this.cancelGood}
                            formChanged={this.formChanged}
                        />
                    }
                </div>
            </React.Fragment>
        )
    }
}

ListComponent.propTypes = {
    tableName: PropTypes.string.isRequired,
    tableHeaders: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        })
    ),
    question: PropTypes.string.isRequired
}

export default ListComponent;