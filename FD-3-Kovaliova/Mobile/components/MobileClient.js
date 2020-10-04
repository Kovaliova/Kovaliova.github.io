import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';

import {voteEvents} from './events';

class MobileClient extends React.PureComponent {

  static propTypes = {
    
    FIO:PropTypes.shape({
      id: PropTypes.number.isRequired,
      fam: PropTypes.string.isRequired,
      im: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }),
   
  };

  state = {
    FIO: this.props.FIO,
    balance: this.props.FIO.balance,
    status: "active",
  };

  componentWillReceiveProps = (newProps) => {   
    this.setState({FIO:newProps.FIO,balance:newProps.FIO.balance});
  };

  clientDelete = (EO) => {    
    voteEvents.emit('EDeleteClicked',this.props.FIO.id);
  }

  clientEdit = (EO) => {    
    voteEvents.emit('EEditClicked',this.props.FIO);
  }

  render() {

    console.log("MobileClient id="+this.props.FIO.id+" render");   
    
    return (
      <tr className='MobileClient'>        
        <td>{this.state.FIO.fam}</td>
        <td>{this.state.FIO.im}</td>
        <td>{this.state.FIO.otch}</td>
        <td>{this.state.balance}</td>
        {
          (this.state.balance > 0)
          ?<td className='MobileClientBalanceActive'>active</td>
          :<td className='MobileClientBalanceBlocked'>blocked</td>
        }       
        <td><input type="button" value="Редактировать" onClick={this.clientEdit} /></td>
        <td> <input type="button" value="Удалить"  onClick={this.clientDelete} /></td>

      </tr>
    );

  }

}

export default MobileClient;