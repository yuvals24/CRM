import React, { Component, PureComponent } from 'react'
import {
    ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend,
} from 'recharts';


class Example extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/shjsn5su/';

    findEmployees = () => {
        let ownersList = {}
        this.props.clients.filter(m => m.sold).map(m => ownersList[m.owner] ? null : ownersList[m.owner] = 0)
        this.props.clients.filter(m => m.sold).map(m => ownersList[m.owner]++)
        return ownersList
    }

    findHottestEmployee = (owners) => {
        let highest = Object.values(owners).sort(function (a, b) { return b - a })
        const highestSales = highest
        let keysSorted = Object.keys(owners).sort(function (a, b) { return owners[a] - owners[b] })
        const topEmployees = keysSorted
        const topThreeEmployees = [{ name: topEmployees[topEmployees.length - 1] }, { sales: highestSales[0] },
        { name: topEmployees[topEmployees.length - 2] }, { sales: highestSales[1] },
        { name: topEmployees[topEmployees.length - 3] }, { sales: highestSales[2] }]
        return topThreeEmployees
    }

    render() {
        let owners = this.findEmployees()
        let owner = this.findHottestEmployee(owners)
        let data = [
            {
                name: owner[0].name, pv: owner[1].sales,
            },
            {
                name: owner[2].name, pv: owner[3].sales,
            },
            {
                name: owner[4].name, pv: owner[5].sales,
            },
        ]
        return (
            <div className='topEmployees'>
                <ComposedChart
                    layout="vertical"
                    width={400}
                    height={200}
                    data={data}
                    margin={{
                        top: 20, right: 20, bottom: 20, left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Bar dataKey="pv" barSize={20} fill="#003f5c" />
                </ComposedChart>
                <span className='sales'>sales</span>
            </div>
        );
    }
}

export default Example


