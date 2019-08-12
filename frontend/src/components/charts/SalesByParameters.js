import React, { Component, PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import axios from 'axios'


class Example2 extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';




    findCountries = () => {
        let countriesList = {}
        this.props.clients.filter(m => m.sold).map(m => countriesList[m.country] ? null : countriesList[m.country] = 0)
        this.props.clients.filter(m => m.sold).map(m => countriesList[m.country]++)
        return countriesList
    }

    findHottestCountries = (countries) => {
        const arr = []
        let highest = Object.values(countries)
        let keysSorted = Object.keys(countries)
        let i = 0
        while (i < keysSorted.length) {
            arr[i] = { name: keysSorted[i], pv: highest[i] }
            i++
        }
        return arr
    }

    render() {
        let countries = this.findCountries()
        let country = this.findHottestCountries(countries)
        return (
            <div className='SalesByParameters'>
                <BarChart
                    width={660}
                    height={160}
                    data={country}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="pv" fill="#955196" />
                </BarChart>
                <span className='salesByCountry'>Sales By Country</span>
            </div>
        );
    }
}

export default Example2
