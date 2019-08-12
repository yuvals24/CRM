import React, { Component } from 'react'

class EditUser extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            surName: '',
            country: ''
        }
    }

    handleFirstName = (event) => {
        const firstName = event.target.value
        this.setState({ firstName })
    }
    handleSurName = (event) => {
        const surName = event.target.value
        this.setState({ surName })
    }
    handleCountry = (event) => {
        const country = event.target.value
        this.setState({ country })
    }
    updateUserInfo = () => {
        this.props.updateUserInfo(this.props.user.email,
            this.state.firstName || this.props.user.name.split(' ')[0], 
            this.state.surName || this.props.user.name.split(' ')[1], 
            this.state.country || this.props.user.country)
    }

    render() {
        console.log('show div')
        return (
            <div className='editUserInfo'>
                <span className='exit' onClick={this.props.closeEditUserInfo}>X</span>
                <span className='editUser'>First Name: <input type='text' placeholder={this.props.user.name.split(' ')[0]} value={this.state.firstName} onChange={this.handleFirstName} /></span>
                <span className='editUser'>Surname: <input type='text' placeholder={this.props.user.name.split(' ')[1]} value={this.state.surName} onChange={this.handleSurName} /></span>
                <span className='editUser'>Country: <input type='text' placeholder={this.props.user.country} value={this.state.country} onChange={this.handleCountry} /></span>
                <span className='updateUser' onClick={this.updateUserInfo}>Update</span>
            </div>
        )
    }
}

export default EditUser
