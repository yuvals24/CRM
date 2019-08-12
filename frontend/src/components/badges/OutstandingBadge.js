import React, { Component } from 'react'

class OutstandingBadge extends Component {
    render() {
        const clients = this.props.clients
        const unSoldClients = clients.filter(c => !c.sold).length
        return (
            <div>
                <span className='OutstandingBadge'><i class="fas fa-user-circle"></i></span>
                <div className='outstanding'>
                    <h1>{unSoldClients}</h1>
                    <span>Outstanding Clients</span>
                </div>
            </div>
        )
    }
}

export default OutstandingBadge
