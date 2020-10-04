import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import NewEditClients from './NewEditClients';

import './MobileCompany.css';

import {voteEvents} from './events';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fam: PropTypes.string.isRequired,
        im: PropTypes.string.isRequired,
        otch: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    name: this.props.name,
    clients: this.props.clients,
    clientsFilt: this.props.clients,
    workMode: 0, //0 - ничего не отображается, 1 - редактирование клиента, 2 - создание нового клиента
    editClientId: 0,
  };
  
  componentDidMount = () => {
    voteEvents.addListener('EDeleteClicked',this.clientDelete);
    voteEvents.addListener('EEditClicked',this.clientEdit);
    voteEvents.addListener('ECansel',this.cansel);
    voteEvents.addListener('ESaveNewClient',this.saveNewClient);
    voteEvents.addListener('ESaveEditClient',this.saveEditClient);
  };

  componentWillUnmount = () => {
    voteEvents.removeListener('EDeleteClicked',this.clientDelete);
    voteEvents.removeListener('EEditClicked',this.clientEdit);
    voteEvents.removeListener('ECansel',this.cansel);
    voteEvents.removeListener('ESaveNewClient',this.saveNewClient);
    voteEvents.removeListener('ESaveEditClient',this.saveEditClient);
  };

  clientDelete = (delId) => {

    if(this.state.workMode == 0 ){    
      var questionDelete = confirm("Вы хотите удалить клиента?");
      if (questionDelete) {     
         var filteredClients = this.state.clients.filter(c => c.id != delId);
         this.setState({ clients: filteredClients });
         this.setState({ clientsFilt: filteredClients });
      }
     }
  }

  clientEdit = (editC) => {
    this.setState( {workMode:1, editClientId:editC} );
  }

  cansel = () => {
    this.setState( {workMode:0});
  }

  saveNewClient = (newClient) => {
    var addNewClient = this.state.clients.concat(newClient);  
    this.setState( {workMode:0, clients: addNewClient, clientsFilt: addNewClient,});
  }

  saveEditClient = (editClient) => {    
    let changed=false;
    let newClients=[...this.state.clients];   
    newClients.forEach( (c,i) => {
        if (( c.id==editClient.id && c.fam != editClient.fam ) || (c.id==editClient.id && c.im != editClient.im) || (c.id==editClient.id && c.otch != editClient.otch) || (c.id==editClient.id && c.balance != editClient.balance))  {
          let newClient={...c}; // копия хэша изменившегося клиента
          newClient.fam = editClient.fam;
          newClient.im = editClient.im;
          newClient.otch = editClient.otch;
          newClient.balance = editClient.balance;          
          newClients[i]=newClient;
          changed=true;
        }
      } );

      if ( changed ){
          this.setState({clients:newClients, clientsFilt: newClients});
      }
   
      this.setState({workMode:0});
  }


  showAllClients = () => {
    this.setState({ clientsFilt: this.state.clients });
  }

  showActiveClients = () => {
    if(this.state.workMode == 0 ){          
         var filteredActiveClients = this.state.clients.filter(c => c.balance >=0);
         this.setState({ clientsFilt: filteredActiveClients });
      
     }
  }

  showBlockedClients = () => {
    if(this.state.workMode == 0 ){          
      var filteredBlockedClients = this.state.clients.filter(c => c.balance < 0);
      this.setState({ clientsFilt: filteredBlockedClients });   
    }
  }

  addClient = () => {
    this.setState( {workMode:2} );
  }

  setName1 = () => {
    this.setState({name:'МТС'});
  };

  setName2 = () => {
    this.setState({name:'Velcom'});
  };
  
  setBalance = (clientId,newBalance) => {
    let changed=false;
    let newClients=[...this.state.clients]; // копия самого массива клиентов
    newClients.forEach( (c,i) => {
      if ( c.id==clientId && c.balance!=newBalance ) {
        let newClient={...c}; // копия хэша изменившегося клиента
        newClient.balance=newBalance;
        newClients[i]=newClient;
        changed=true;
      }
    } );
    if ( changed )
      this.setState({clients:newClients});
  };
  
  
  
  render() {

    console.log("MobileCompany render");

    var cardClient ;

    if( this.state.workMode == 1) {  
      let editClient = this.state.editClientId;          
      cardClient = <NewEditClients key= {editClient.id} client = {editClient} workMode = {1} ></NewEditClients>
    } else if ( this.state.workMode == 2) { 
      let newId = this.state.clients[this.state.clients.length - 1].id+1;
      let FIO={id:newId, fam:"",im:"",otch:"", balance: 0 };         
      cardClient = <NewEditClients key= {FIO.id} client = {FIO} workMode = {2}></NewEditClients>
    } else {
      cardClient = null;
    }


    var clientsCode=this.state.clientsFilt.map( client => {        
        return <MobileClient key={client.id}  FIO={client} />;
      }
    );

    return (
      <div className='MobileCompany'>
        <input type="button" className="Button" value="МТС" onClick={this.setName1} />
        <input type="button" className="Button" value="Velcom" onClick={this.setName2} />
        <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
        <input type="button" className="Button" value="Все" onClick={this.showAllClients} />
        <input type="button" className="Button" value="Активные" onClick={this.showActiveClients} />
        <input type="button" className="Button" value="Заблокированные" onClick={this.showBlockedClients} />

        <table className='MobileCompanyClients' >
           <tbody>
         <tr>
           <th>Фамилия</th>
           <th>Имя</th>
           <th>Отчество</th>
           <th>Баланс</th>
           <th>Статус</th>
           <th>Редактировать</th>
           <th>Удалить</th>
         </tr>         
          {clientsCode}
          </tbody>
        </table>
        <input type="button" className="Button" value="Добавить клиента" onClick={this.addClient} />
        <div> {cardClient} </div>
      </div>
    )
    ;

  }

}

export default MobileCompany;