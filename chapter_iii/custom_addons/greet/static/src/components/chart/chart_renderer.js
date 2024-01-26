/** @odoo-module */

import { registry } from '@web/core/registry'
import { loadJS } from '@web/core/assets'

const { Component, useState, onWillStart, useRef, onMounted } = owl

export class ChartRenderer extends Component {
    setup() {
        this.chartRef = useRef('chart')
        this.state = useState({
            title: this.props.title,
            data: this.props.data,
        })

        onWillStart(async () => {
            await loadJS('https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js')
        })

        onMounted(()=>{
            console.log('chart_renderer.js')
            console.log('title', this.state.title)
            console.log('data', this.state.data)

            const labels = []
            const metrics = []
            this.state.data.map((item) => {
                labels.push(item.state)
                metrics.push(item.state_count)
            })

            this.render(this.state.title, labels, metrics)
        })
    }

    render(title, labels, metrics) {
        new Chart(
            this.chartRef.el,
            {
                type: 'pie',
                data: {
//                    labels: ['Blue','Red', 'Yellow'],
                    labels: labels,
                    datasets: [{
                        label: title,
//                        data: [300, 50, 100],
                        data: metrics,
                    }]
                }
            }
        )
    }
}

ChartRenderer.template = "owl.ChartRenderer"
