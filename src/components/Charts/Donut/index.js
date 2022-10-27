import React, { Component } from 'react';
import Chart from "chart.js";

import CardBasic from '../../Cards/Basic';

class ChartDonut extends Component {
    chartRef = React.createRef();

    componentDidMount() {

        const myPieChart = this.chartRef.current.getContext("2d");
        console.log(this.chartRef);

        new Chart(myPieChart, {
            type: 'doughnut',
            data: {
                labels: ["India ","Europe ","Australia ","Antarctica ","Africa ", "Asia", "USA"],
                datasets: [{
                    data: [25,18,14,12,20,5,5],
                    backgroundColor:['#2e59d9', '#17a673', '#237d05', '#0062b3', '#4d3ca6', '#913ca6','##f70a1e'],
                    hoverBackgroundColor: ['#2e59d9', '#17a673', '#237d05', '#0062b3', '#4d3ca6', '#913ca6','##f70a1e'],
                    hoverBorderColor: "rgba(234, 236, 244, 1)",
                }],
            },
            options: {
                maintainAspectRatio: false,
                tooltips: {
                    backgroundColor: "rgb(255,255,255)",
                    bodyFontColor: "#858796",
                    borderColor: '#dddfeb',
                    borderWidth: 1,
                    xPadding: 15,
                    yPadding: 15,
                    displayColors: false,
                    caretPadding: 10,
                },
                legend: {
                    display: false
                },
                cutoutPercentage: 80,
            },
        });
    }

    render() {
        return (
            <CardBasic title="Regional Graph">
                 <div className="chart-pie pt-4">
                        <canvas id="myPieChart" ref={this.chartRef}></canvas>
                    </div>
                    <hr />
             </CardBasic>
        )
    }
}

export default ChartDonut;