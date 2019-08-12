import React, { Component } from 'react'
import axios from 'axios'

class NewClientsBadge extends Component {
    constructor() {
        super()
        this.state = {
            newClientsThisMonth: 0
        }
    }
    
    componentDidMount = async () => {
        let newClients = await axios.get('http://localhost:8080/newClients')
        this.setState({ newClientsThisMonth: newClients.data.length })
    }
    render() {
        return (
            <div>
                <span className='monthBadge'><i class="fas fa-chart-line"></i></span>
                <div className='newClients'>
                    <h1>{this.state.newClientsThisMonth}</h1>
                    <span>New Clients Last month</span>
                </div>
            </div>
        )
    }
}

export default NewClientsBadge
