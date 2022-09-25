const { ipcRenderer } = require("electron");
const {Chart} = require('chart.js');

export class ProductAnalysis extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({
      mode: "open",
    });
  }

  connectedCallback() {
    this.render();

    const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
    ];

    const data = {
        labels: labels,
        datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
        }]
    };

    const config = {
        type: 'line',
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

        <canvas id="myChart" width="1000" height="600"></canvas>

        <button class="btn btn-primary"></button>
    
            `;
  }
}

customElements.define("product-analysis", ProductAnalysis);