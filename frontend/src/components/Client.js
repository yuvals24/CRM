import React, { Component } from 'react'

class Client extends Component {

    showEditUserInfo = () => {
        this.props.showEditUserInfo(this.props.email)
    }

    render() {
        const client = this.props.client
        return (
            <div className='mains' onClick={this.showEditUserInfo}>
                <span className='column' >{client.name.split(' ')[0]}</span>
                <span className='column'>{client.name.split(' ')[1]}</span>
                <span className='column'>{client.email}</span>
                {client.emailType == null ? <span className="x">X</span> : <span className='column'>{client.emailType}</span>}
                {client.sold ? <span className="sold">SOLD</span> : <span className="x">X</span>}
                <span className='column'>{client.owner}</span>
                <span className='column'>{client.country}</span>
            </div>
            
        )
    }
}

export default Client