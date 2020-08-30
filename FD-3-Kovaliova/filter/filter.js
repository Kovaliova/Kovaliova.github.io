var filter = React.createClass({

    displayName: 'filter',

    propTypes: {
        textArray: React.PropTypes.arrayOf(React.PropTypes.string)
    },

    getInitialState: function () {
        return {
            textArray: this.props.textArray,
            isChecked: false,
            inputText: ''
        };
    },

    checkboxClicked: function (e) {
        let currentStateTextArray = [];
        if (!this.state.isChecked) {
            currentStateTextArray = this.state.textArray.slice().sort()
        } else {
            currentStateTextArray = this.props.textArray.filter(element => {
                return element.includes(this.state.inputText)
            });
        }
        this.setState({ isChecked: !this.state.isChecked, textArray: currentStateTextArray })
    },

    inputChanged: function (e) {
        let currentStateTextArray = [];
        if(this.state.isChecked){
            currentStateTextArray = this.props.textArray.slice().sort().filter(element => {
                return element.includes(e.target.value)
            });
        } else {
            currentStateTextArray = this.props.textArray.filter(element => {
                return element.includes(e.target.value)
            });
        }
        this.setState({ textArray: currentStateTextArray, inputText: e.target.value })
    },

    buttonClicked: function (e) {
        this.setState({ isChecked: false, inputText: '', textArray: this.props.textArray })
    },

    render: function () {

        return React.DOM.div({ className: 'FilterBlock' },
            React.DOM.input({
                type: 'checkbox', className: 'FilterCheckbox',
                checked: this.state.isChecked,
                onClick: this.checkboxClicked
            }),
            React.DOM.input({
                type: 'text', className: 'FilterInput', value: this.state.inputText,
                onChange: this.inputChanged
            }),
            React.DOM.input({
                type: 'button', value: 'сброс', className: 'FilterResetBtn',
                onClick: this.buttonClicked
            }),
            React.DOM.div({ className: 'FilterText' }, this.state.textArray)
        );
    },

});