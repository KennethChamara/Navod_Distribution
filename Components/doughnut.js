const { ipcRenderer } = require("electron");
const { Chart } = require('chart.js');

export class doughnut extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({
            mode: "open",
        });
    }

    connectedCallback() {
        this.render();

        const labels = [
            'Kalkiri',
            'Butter',
            'Ghee',
            'Cheese',
            'Milk',
            'Curd',
        ];

        const data = {
            labels: labels,
            datasets: [{
                label: 'My First dataset',
                backgroundColor: [
                    '#ED8699',
                    '#EDE986',
                    '#E586ED',
                    '#8886ED',
                    '#86ED9D',
                    '#EDBE86'
                ],
                borderColor: 'white',
                data: [0, 10, 5, 2, 20, 30, 45],
            }]
        };

        const config = {
            type: 'doughnut',
            data: data,
            options: {}
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

        <button class="btn btn-primary"></button>
    
            `;
    }
}

customElements.define("donut-chart", doughnut);