import React from 'react'

import { Doughnut } from 'react-chartjs-2'
import { Chart as CharJS } from 'chart.js/auto'
import { ContainerGlobal } from '../../components/container/container'
import { Chart } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ChartDataLabels);
export const Reservation = (props) => {
    const data = {
        labels: ["Reserved", "Cancelled", "Pending"],
        datasets: [{
            data: [props.confirmed, props.cancelled, props.pending],
            backgroundColor: [
                'rgb(0, 0, 255, .5)',
                'rgb(255, 0, 0, .5)',
                'rgb(205, 161, 65, .5)',
                'rgb(231, 98, 95, .4)',
            ],
            borderColor: [
                'rgb(0, 0, 255)',
                'rgb(255, 0, 0)',
                'rgb(205, 161, 65)',
                '#E7625F',
            ],

            cutout: 80,
            hoverOffset: -10,
            borderWidth: 3,
            
            borderJoinStyle: 'round',
            spacing: 5,

        }],


    }
    return (
        <ContainerGlobal
            w='70%'
            h='auto'
            direction='column'
        >
            <Doughnut
                data={data}
                options={{
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    },
                    plugins: {
                        datalabels: {
                            color: 'black', 
                            labels: {
                                title: {
                                    font: {
                                        weight: 'bold'
                                    }
                                },
                                value: {
                                    color: 'green'
                                }
                            }
                        },

                        legend: {
                            display: true,
                            position: 'right',
                            labels: {
                                color: 'black',
                                boxHeight: 20,
                                boxWidth: 20,
                            }
                        },
                    },

                }}
            />
        </ContainerGlobal>
    )
}
