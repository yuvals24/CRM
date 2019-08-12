import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Clients from './components/Clients'
import Actions from './components/Actions'
import Analytics from './components/Analytics'
import axios from 'axios'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  loadData = async () => {
    let data = await axios.get('http://localhost:8080/clients')
    data = data.data
    this.setState({ data })
  }

  componentDidMount = () => {
    this.loadData()
  }

  addClient = async (client) => {
    await axios.post(`http://localhost:8080/client`, client)
    this.loadData()
  }

  
  changeAttribute = async (updatedClient) => {
    let updatedData = await axios.put(`http://localhost:8080/editClient/${updatedClient.name}`, updatedClient)
    console.log(updatedData.data.name + ' updated')
    this.loadData()
  }

  updateUserInfo = async (updatedClient) => {
    let updatedData = await axios.put(`http://localhost:8080/editClientInfo/${updatedClient.email}`, updatedClient)
    console.log(updatedData.data.name + ' updated')
    this.loadData()
  }


  render() {
    return (
      <Router>
        <div className="App">
          <ul className='navbar'>
            <Link className="li" to="/clients"><li>Clients</li></Link>
            <Link className="li" to="/actions"><li>Actions</li></Link>
            <Link className="li" to="/analytics"><li>Analytics</li></Link>
          </ul>
          <Route exact path="/clients" exact render={() => <Clients data={this.state.data} updateUserInfo={this.updateUserInfo} />} />
          <Route exact path="/actions" exact render={() => <Actions data={this.state.data} addClient={this.addClient} changeAttribute={this.changeAttribute} />} />
          <Route exact path="/analytics" exact render={() => <Analytics data={this.state.data} />} />
        </div>
      </Router>
    );
  }
}

export default App;

