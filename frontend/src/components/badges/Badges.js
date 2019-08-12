import React, {Component} from 'react'
import NewClientsBadge from './NewClientsBadge'
import EmailsBadge from './EmailsBadge'
import OutstandingBadge from './OutstandingBadge'
import HottestCountryBadge from './HottestCountryBadge'

class Badges extends Component {
    render() {
        return (
            <div className="badges">
                <NewClientsBadge />
                <EmailsBadge clients={this.props.clients} />
                <OutstandingBadge clients={this.props.clients} />
                <HottestCountryBadge clients={this.props.clients} />
            </div>
        )
    }
}

export default Badges
