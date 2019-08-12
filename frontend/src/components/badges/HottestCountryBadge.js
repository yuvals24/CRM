import React, { Component } from 'react'

class HottestCountryBadge extends Component {

    findCountries = () => {
        let countriesList = {}
        this.props.clients.filter(m => m.sold).map(m => countriesList[m.country] ? null : countriesList[m.country] = 0)
        this.props.clients.filter(m => m.sold).map(m => countriesList[m.country]++)
        return countriesList
    }

    findHottestCountry = (countries) => {
        let highest = Object.values(countries).sort(function (a, b) { return b - a })[0]
        for (let i of Object.keys(countries)) {
            if (countries[i] == highest) {
                return i
            }
        }
    }

    render() {
        let countries = this.findCountries()
        let country = this.findHottestCountry(countries)
        return (
            <div>
                <span className='HottestCountryBadge'><i class="fas fa-globe-americas"></i></span>
                <div className='countries'>
                    <h1>{country}</h1>
                    <span>Hottest Country</span>
                </div>
            </div>
        )
    }
}

export default HottestCountryBadge
