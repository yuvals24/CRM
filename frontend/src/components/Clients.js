import React, { Component } from 'react'
import Client from './Client'
import EditUser from './EditUser';


class Clients extends Component {
    constructor() {
        super()
        this.state = {
            input: '',
            search: 'name',
            start: 0,
            user: '',
            showEditInfo: false
        }
    }


    handleInputChange = (event) => {
        const input = event.target.value
        this.setState({ input, start: 0 })
    }
    handleSearch = (event) => {
        const search = event.target.value
        this.setState({ search })
    }

    changePage = (event) => {
        const direction = event.target.id
        if ((this.state.start > 0) || (direction === 'next')) {
            direction === 'next'
                ? this.setState({ start: this.state.start + 20 })
                : this.setState({ start: this.state.start - 20 })
        }
    }

    showEditUserInfo = (email) => {
        let userToUpdate = this.props.data.find(c => c.email === email)
        this.setState({ showEditInfo: true, user: userToUpdate })
    }

    closeEditUserInfo = () => {
        this.setState({ showEditInfo: false })
    }

    updateUserInfo = (email, firstName, surname, country) => {
        this.closeEditUserInfo()
        this.props.updateUserInfo({ email: email, name: firstName + ' ' + surname, country: country})
    }

    render() {
        const clients = this.props.data
        let type = this.state.search
        let result = this.props.data.filter(e => e[type].toLowerCase().includes(this.state.input))
        return (
            <div>
                <div className='search'>
                    <span id='previous' className="fas fa-arrow-left" onClick={this.changePage}></span>
                    <input id="name-input" placeholder='Search' value={this.state.input} onChange={this.handleInputChange} />
                    <select id="select-input" value={this.state.search} onChange={this.handleSearch}>
                        <option value="name">name</option>
                        <option value="email">email</option>
                        <option value="owner">owner</option>
                        <option value="country">country</option>
                    </select>
                    <span id='next' className="fas fa-arrow-right" onClick={this.changePage}></span>
                </div>
                <div className='mains'>
                    <span className='title'>Firstname</span>
                    <span className='title'>Surname</span>
                    <span className='title'>Email</span>
                    <span className='title'>Email Type</span>
                    <span className='title'>Sold</span>
                    <span className='title'>Owner</span>
                    <span className='title'>Country</span>
                </div>
                {this.state.input === '' ?
                    clients.slice(this.state.start, this.state.start + 20).map(c => <Client client={c} showEditUserInfo={this.showEditUserInfo} email={c.email} />) :
                    result.slice(this.state.start, this.state.start + 20).map(c => <Client client={c} showEditUserInfo={this.showEditUserInfo} email={c.email} />)}
                {this.state.showEditInfo ? <EditUser user={this.state.user} updateUserInfo={this.updateUserInfo} closeEditUserInfo={this.closeEditUserInfo} /> : null}
            </div>
        )
    }
}

export default Clients

