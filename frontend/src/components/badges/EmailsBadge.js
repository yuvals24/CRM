import React, { Component } from 'react'

class EmailsBadge extends Component {
    render() {
        const clients = this.props.clients
        const numberOfEmails = clients.filter(c => c.emailType).length
        return (
            <div>
                <span className='emailsBadge'><i class="fas fa-envelope"></i></span>
                <div className='emails'>
                    <h1>{numberOfEmails}</h1>
                    <span>Emails Sent</span>
                </div>
            </div>
        )
    }
}

export default EmailsBadge
