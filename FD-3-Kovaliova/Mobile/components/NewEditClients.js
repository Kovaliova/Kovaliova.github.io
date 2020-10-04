import React from 'react';
import PropTypes from 'prop-types';

import './NewEditClients.css';

import {voteEvents} from './events';

class NewEditClients extends React.PureComponent {  
  
  static propTypes = { 
    client: PropTypes.object.isRequired, 
    workMode: PropTypes.number.isRequired, 
  };

  state = {
    stClient: this.props.client,
    newClient:null,    
  } 

  newFamRef = null;
  newImRef = null;
  newOtchRef = null;
  newBalanceRef = null;

  setNewFamRef = (ref) => {
    this.newFamRef=ref;
  };

  setNewImRef = (ref) => {
    this.newImRef=ref;
  };

  setNewOtchRef = (ref) => {
    this.newOtchRef=ref;
  };

  setNewBalanceRef = (ref) => {
    this.newBalanceRef=ref;
  };

  

  saveEditClient = () => {
    if ( this.newFamRef && this.newImRef && this.newOtchRef && this.newBalanceRef ) { // всегда проверяем - мало ли метод вызовется когда DOM-элемента уже нет или ещё нет?
      let newFam=this.newFamRef.value;
      let newIm=this.newImRef.value;
      let newOtch=this.newOtchRef.value;
      let newBalance=Number(this.newBalanceRef.value);
      let editClient={id:this.props.client.id, fam:newFam, im:newIm, otch:newOtch, balance: newBalance };          
      voteEvents.emit('ESaveEditClient', editClient);
    }
  }

  
  saveNewClient = () => {  
    if ( this.newFamRef && this.newImRef && this.newOtchRef && this.newBalanceRef ) { // всегда проверяем - мало ли метод вызовется когда DOM-элемента уже нет или ещё нет?
          let newFam=this.newFamRef.value;
          let newIm=this.newImRef.value;
          let newOtch=this.newOtchRef.value;
          let newBalance=Number(this.newBalanceRef.value);
          let newClient={id:this.props.client.id, fam:newFam, im:newIm, otch:newOtch, balance: newBalance };          
          voteEvents.emit('ESaveNewClient', newClient);
        }    
  }


  cansel = () => {
    voteEvents.emit('ECansel');
  }  

  render() {

    console.log("NewEditClients id="+this.props.client.id+" render"); 

    if ( this.props.workMode==1 ) {
      
    return (
       <div className='NewEditClients'> 
        <h2>Редактирование данных клиента</h2> 
        <p><span className='LableInput'>Id {this.props.client.id}</span></p>
        <p>
        <span className='LableInput'>Фамилия</span> 
        <input type="text" defaultValue={this.props.client.fam} ref={this.setNewFamRef}/>
        </p>
        <p>
        <span className='LableInput'>Имя</span> 
        <input type="text" defaultValue={this.props.client.im} ref={this.setNewImRef} /> 
        </p>
        <p>
        <span className='LableInput'>Отчество</span> 
        <input type="text" defaultValue={this.props.client.otch} ref={this.setNewOtchRef} />
        </p>
        <p>
        <span className='LableInput'>Баланс</span> 
        <input type="text" defaultValue={this.props.client.balance} ref={this.setNewBalanceRef} />
        </p>
        <p className="blockBtnNewEdit">
        <input type="button" className="BtnNewEdit" onClick={this.saveEditClient} value="Сохранить"/>
        <input type="button" className="BtnNewEdit" onClick={this.cansel} value="Отмена"/>
        </p>            
       </div>
    );    
    } else if ( this.props.workMode==2 ) {
      return (
        <div className='NewEditClients'> 
         <h2>Создание нового клиента</h2> 
         <p><span className='LableInput'>Id {this.props.client.id}</span></p>
        <p>
        <span className='LableInput'>Фамилия</span> 
        <input type="text" defaultValue="Фамилия нового клиента" ref={this.setNewFamRef}/>
        </p>
        <p>
        <span className='LableInput'>Имя</span> 
        <input type="text" defaultValue="Имя нового клиента" ref={this.setNewImRef} /> 
        </p>
        <p>
        <span className='LableInput'>Отчество</span> 
        <input type="text" defaultValue="Отчество нового клиента" ref={this.setNewOtchRef}/>
        </p>
        <p>
        <span className='LableInput'>Баланс</span> 
        <input type="text" defaultValue={0} ref={this.setNewBalanceRef}/>
        </p>
        <p className="blockBtnNewEdit">
        <input type="button" className="BtnNewEdit" onClick={this.saveNewClient} value="Сохранить"/>
        <input type="button" className="BtnNewEdit" onClick={this.cansel} value="Отмена"/>
        </p> 
        </div>
     );    

    }
  }

}


export default NewEditClients;