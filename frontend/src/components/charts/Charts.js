import React, {Component} from 'react'
import TopEmolyees from './TopEmolyees'
import SalesByParameters from './SalesByParameters'
import SalesLastMonth from './SalesLastMonth'
import ClientAcquisition from './ClientAcquisition'
import axios from 'axios'

class Charts extends Component {

    constructor() {
        super()
        this.state = {
            data : []
        }
    }

    componentWillMount = async () => {
        let lastMonth = await axios.get('http://localhost:8080/newClients')
        lastMonth = lastMonth.data.length
        let lastYear = await axios.get('http://localhost:8080/newClientsLastYear')
        lastYear = lastYear.data.length
        let beforeLastYear = await axios.get('http://localhost:8080/newClientsBeforeLastYear')
        beforeLastYear = beforeLastYear.data.length
        const data = [{ name: 'lastMonth', value: lastMonth },
        { name: 'lastYear', value: lastYear },
        { name: 'beforeLastYear', value: beforeLastYear }]
        this.setState({data})
    }


    render() {
        console.log(this.state.data)
        return (
            <div className="charts">
                <TopEmolyees clients={this.props.clients} />
                <SalesByParameters clients={this.props.clients} />
                <SalesLastMonth clients={this.props.clients} />          
                <ClientAcquisition data={this.state.data} />
            </div>
        )
    }
}

export default Charts
