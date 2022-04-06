import React from 'react'

import { Doughnut } from 'react-chartjs-2'
import { Chart as CharJS } from 'chart.js/auto'
import { ContainerGlobal } from '../../components/container/container'
import { Chart } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ChartDataLabels);
export const Reservation = () => {
    const data = {
        labels: ["Confirmed", "Cancelled", "Pending"],
        datasets: [{
            data: [30, 10, 20],
            backgroundColor: [
                'rgb(255, 209, 5, .4)',
                'rgb(0, 0, 0, .4)',
                'rgb(102, 193, 37, .4)',
                'rgb(231, 98, 95, .4)',
            ],
            borderColor: [
                '#E1C340',
                '#000000',
                '#76B947',
                '#E7625F',
            ],

            cutout: 80,
            hoverOffset: -10,
            borderWidth: 3,
            
            borderJoinStyle: 'round',
            spacing: 10,

        }],


    }
    return (
        <ContainerGlobal
            w='100%'
            h='100%'
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
