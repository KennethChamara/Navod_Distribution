const { ipcRenderer } = require("electron");
const { Chart } = require('chart.js');

export class inventoryChart extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({
            mode: "open",
        });
    }

    connectedCallback() {
        this.render();

        const labels = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

        const data = {
            labels: labels,
            datasets: [{
                data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
                borderColor: "red",
                fill: false
            }, {
                data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
                borderColor: "green",
                fill: false
            }, {
                data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
                borderColor: "blue",
                fill: false
            }]
        };

        const config = {
            type: 'line',
            data: data,
            options: {
                legend: { display: false }
            }
        };

        const myChart = new Chart(
            this.shadowRoot.getElementById('myChart'),
            config
        );


    }

    render() {
        this.shadowRoot.innerHTML += `

        <link rel="stylesheet" href="bootstrap-5.2.0-dist/css/bootstrap.css">
        <link rel="stylesheet" type="" href="bootstrap-5.2.0-dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="Components/table.css">           
        <script src="node_modules/chart.js/dist/chart.min.js"></script>

        <div style="width:80%; height:80%">
            <canvas id="myChart"></canvas>
        </div>

        
            `;
    }
}

customElements.define("inventory-chart", inventoryChart);