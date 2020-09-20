import React from 'react';
import PropTypes from 'prop-types';

import './AddEditComponent.css';
import modes from '../../static-data/mode';

class AddEditComponent extends React.Component {

    constructor(props) {
        super(props);

        let isEditMode = props.mode === modes.edit;

        this.state = {
            initialEditName: props.selectedGood.name,
            code: props.selectedGood.code,
            link: isEditMode ? props.selectedGood.Url : '',
            name: isEditMode ? props.selectedGood.name : '',
            cost: isEditMode ? props.selectedGood.cost : 0,
            power: isEditMode ? props.selectedGood.power : 0,
            numbers: isEditMode ? props.selectedGood.numbers : 0,
            isLinkValid: isEditMode,
            isNameValid: isEditMode,
            isCostValid: isEditMode,
            isPowerValid: isEditMode,
            isNumbersValid: isEditMode
        }
    }

    onLinkChanged = (e) => {
        let link = e.target.value;
        this.setState({ link: link, isLinkValid: link !== '' })
        this.props.formChanged()
    }

    onNameChanged = (e) => {
        let name = e.target.value;
        this.setState({ name: name, isNameValid: name !== '' })
        this.props.formChanged()
    }

    onCostChanged = (e) => {
        let cost = +e.target.value;
        this.setState({ cost: cost, isCostValid: cost > 0 })
        this.props.formChanged()
    }

    onPowerChanged = (e) => {
        let power = +e.target.value;
        this.setState({ power: power, isPowerValid: power > 0 })
        this.props.formChanged()
    }

    onNumbersChanged = (e) => {
        let numbers = +e.target.value;
        this.setState({ numbers: numbers, isNumbersValid: numbers > 0 })
        this.props.formChanged()
    }

    onSaveGood = () => {
        let newGood = {
            code: this.state.code,
            name: this.state.name,
            cost: this.state.cost,
            power: this.state.power,
            Url: this.state.link,
            numbers: this.state.numbers
        }
        this.props.saveGood(newGood);
    }

    onCancelSave = () => {
        this.props.cancelGood();
    }

    render() {
        let isDisable = !this.state.isLinkValid || !this.state.isNameValid || !this.state.isCostValid || !this.state.isPowerValid || !this.state.isNumbersValid;
        return (
            <div className='GoodBlock'>
                {
                    (this.props.mode === modes.add) && <h1>Add new product</h1>
                }
                {
                    (this.props.mode === modes.edit) && <h1>Edit product: {this.props.initialGoodName}</h1>
                }
                <div className='InputBlock'>
                    <label className='BlockLabels'>
                        Code:
                            <span className='BlockInput'>{this.state.code}</span>
                    </label>
                    <label className='BlockLabels'>
                        Link:
                            <input className='BlockInput' type='text' value={this.state.link} onChange={this.onLinkChanged} />
                        {(!this.state.isLinkValid) && <span className='BlockMessage'>Field is required</span>}
                    </label>
                    <label className='BlockLabels'>
                        Name:
                            <input className='BlockInput' type='text' value={this.state.name} onChange={this.onNameChanged} />
                        {(!this.state.isNameValid) && <span className='BlockMessage'>Field is required</span>}
                    </label>
                    <label className='BlockLabels'>
                        Cost:
                            <input className='BlockInput' type='text' value={this.state.cost} onChange={this.onCostChanged} />
                        {(!this.state.isCostValid) && <span className='BlockMessage'>Field is required</span>}
                    </label>
                    <label className='BlockLabels'>
                        Power:
                            <input className='BlockInput' type='text' value={this.state.power} onChange={this.onPowerChanged} />
                        {(!this.state.isPowerValid) && <span className='BlockMessage'>Field is required</span>}
                    </label>
                    <label className='BlockLabels'>
                        Numbers:
                            <input className='BlockInput' type='text' value={this.state.numbers} onChange={this.onNumbersChanged} />
                        {(!this.state.isNumbersValid) && <span className='BlockMessage'>Field is required</span>}
                    </label>
                </div>
                <div className='ButtonBlock'>
                    <input
                        className='Button'
                        disabled={isDisable}
                        type='button'
                        value='Save'
                        onClick={this.onSaveGood} />
                    <input className='Button' type='button' value='Cancel' onClick={this.onCancelSave} />
                </div>
            </div>
        )
    }
}

AddEditComponent.propTypes = {
    selectedGood: PropTypes.object,
    mode: PropTypes.number.isRequired,
    saveGood: PropTypes.func.isRequired,
    cancelGood: PropTypes.func.isRequired,
    formChanged: PropTypes.func.isRequired,
    initialGoodName: PropTypes.string
}

export default AddEditComponent;