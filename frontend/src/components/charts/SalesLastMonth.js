import React, { Component, PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import axios from 'axios'

class Example3 extends PureComponent {
    constructor() {
        super()
        this.state = {
            data: {}
        }
    }

    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

    findDates = async () => {
        let newClients = await axios.get('http://localhost:8080/newClientsSoldLastYear')
        let a = newClients.data.map(m => m.firstContact.slice(0, 10)).reduce(function (acc, curr) {
            if (typeof acc[curr] == 'undefined') {
                acc[curr] = 1;
            } else {
                acc[curr] += 1;
            }

            return acc;
        }, {});

        this.setState({
            data: a
        })
    }
    componentDidMount() {
        this.findDates()
    }

    findSalesByDate = (data) => {
        const arr = []
        let highest = Object.values(data)
        const highestSales = highest
        let keysSorted = Object.keys(data)
        const topCountries = keysSorted
        let i = 0
        while (i < highestSales.length) {
            arr[i] = { name: topCountries[i], sales: highestSales[i] }
            i++
        }
        return arr
    }

    render() {

        let data = this.state.data
        let finalData = this.findSalesByDate(data)
        let dateOfYearAgo = new Date();
        dateOfYearAgo.setDate(dateOfYearAgo.getDate() - 365)
        dateOfYearAgo = dateOfYearAgo.toString().slice(4,15)
        return (
            <div className='SalesLastYear'>
                <LineChart
                    width={600}
                    height={200}
                    data={finalData}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="sales" stroke="#ff6e54" activeDot={{ r: 8 }} />
                </LineChart>
                <span className='SalesLastYearText'>Sales Since {dateOfYearAgo}</span>
            </div>
        );
    }
}

export default Example3