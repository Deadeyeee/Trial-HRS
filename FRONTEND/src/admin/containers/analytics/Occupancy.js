import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as CharJS } from 'chart.js/auto'
import { ContainerGlobal } from '../../components/container/container'
import { Chart } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ChartDataLabels);
const Occupancy = (props) => {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            datasets: [{
                label: 'Occupancy percentage ',
                data: [props.January , props.February , props.March , props.April , props.May , props.June , props.July , props.August , props.September , props.October , props.November , props.December],
                fill: true,
                borderColor: 'pink',
                tension: 1,
                backgroundColor: "#f4c2c2",
                borderWidth: 5,
                pointBorderWidth: 10,
                pointHitRadius: 20,
            }],



    }
    return (
        <ContainerGlobal
            w='100%'
            h='auto'
            direction='column'
        >
            <Line
                data={data}
                options={{
                    animations: {
                        tension: {
                            duration: 2000,
                            easing: 'easeInOutCubic',
                            from: .9,
                            to: .5,
                            loop: true
                        }
                    },
                    plugins: {

                        legend: {
                            display: true,
                            position: 'bottom',
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

export default Occupancy