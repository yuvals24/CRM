import React, {Component} from 'react'
import Badges from './badges/Badges'
import Charts from './charts/Charts'

class Analytics extends Component {
    render() {
        return (
            <div>
                <Badges clients={this.props.data} />
                <Charts clients={this.props.data} />
            </div>
        )
    }
}

export default Analytics