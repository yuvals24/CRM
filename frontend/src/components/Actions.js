import React, { Component } from 'react'

class Actions extends Component {
    constructor() {
        super()
        this.state = {
            client: 'Perkins Cunningham',
            addressee: 'Emily Durham',
            emailType: 'A',
            firstName: '',
            surName: '',
            email: '',
            country: '',
            owner: '',
            declare : false
        }
    }

    handleClient = (event) => {
        const client = event.target.value
        this.setState({ client })
    }
    handleAddressee = (event) => {
        const addressee = event.target.value
        this.setState({ addressee })
    }
    handleEmailType = (event) => {
        const emailType = event.target.value
        this.setState({ emailType })
    }
    handleFirstName = (event) => {
        const firstName = event.target.value
        this.setState({ firstName })
    }
    handleSurName = (event) => {
        const surName = event.target.value
        this.setState({ surName })
    }
    handleEmail = (event) => {
        const email = event.target.value
        this.setState({ email })
    }
    handleCountry = (event) => {
        const country = event.target.value
        this.setState({ country })
    }
    handleOwner = (event) => {
        const owner = event.target.value
        this.setState({ owner })
    }

    addClient = () => {
        this.props.addClient({ name: this.state.firstName + ' ' + this.state.surName, country: this.state.country, owner: this.state.owner, email: this.state.email, firstContact: new Date(), sold: false })
    }

    changeAttribute = (event) => {
        const attributeToChange = event.target.id
        if (attributeToChange === 'ownership') {
            this.props.changeAttribute({name : this.state.client, type: 'owner', owner : this.state.addressee})
        }
        else if (attributeToChange === 'emailType') {
            this.props.changeAttribute({name : this.state.client, type: 'emailType', emailType : this.state.emailType})
        }
        else {
            this.props.changeAttribute({name : this.state.client, type : 'sold', sold : !this.state.declare})
        }
    }

    render() {
        let owners = this.props.data.map(o => o.owner);
        let ownersArray = [...new Set(owners)];
        let clients = this.props.data.map(c => c.name)
        let clientsArray = [...new Set(clients)]
        return (
            <div>
                <div className='update'>
                    <h4>UPDATE</h4>
                    Client:  
                    <select id="select-input" value={this.state.client} onChange={this.handleClient} >
                        {clientsArray.map(c => <option value={c}>{c}</option>)}
                    </select><br></br>
                    Transfer ownership to:
                    <select id="select-input" value={this.state.addressee} onChange={this.handleAddressee}>
                        {ownersArray.map(o => <option value={o}>{o}</option>)}
                    </select> <span id='ownership' className="fas fa-check-circle" value='ownership' onClick={this.changeAttribute}></span><br></br>
                    Send email:
                    <select id="select-inputA" value={this.state.emailType} onChange={this.handleEmailType}>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                    </select><span id='emailType' className="fas fa-check-circle" value='emailType' onClick={this.changeAttribute}></span><br></br>
                    Declare sale <span id='declareSale' className="fas fa-check-circle" value='declareSale' onClick={this.changeAttribute}></span>
                </div>
                <br></br><hr></hr>
                <div className='add'>
                    <h4>ADD CLIENT</h4>
                    First Name:  <input id="add-input" placeholder='Enter First Name' value={this.state.firstName} onChange={this.handleFirstName} /><br></br><br></br>
                    Surname:  <input id="add-input" placeholder='Enter Surname' value={this.state.surName} onChange={this.handleSurName} /><br></br><br></br>
                    Email:  <input id="add-input" placeholder='Enter Email' value={this.state.email} onChange={this.handleEmail} /><br></br><br></br>
                    Country:  <input id="add-input" placeholder='Enter Country' value={this.state.country} onChange={this.handleCountry} /><br></br><br></br>
                    Owner:  <input id="add-input" placeholder='Enter Owner' value={this.state.owner} onChange={this.handleOwner} /><br></br><br></br>
                    <button onClick={this.addClient}>Add New Client</button>
                </div>
            </div>
        )
    }
}

export default Actions
