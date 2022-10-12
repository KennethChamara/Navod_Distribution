const { ipcRenderer } = require("electron");

export class repAnalysis extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({
            mode: "open",
        });
    }

    connectedCallback() {

        this.render();
        this.shadowRoot.querySelector('#repChart')


    }

    render() {
        this.shadowRoot.innerHTML += `
        <link rel="stylesheet" href="bootstrap-5.2.0-dist/css/bootstrap.css">
        <link rel="stylesheet" type="" href="bootstrap-5.2.0-dist/css/bootstrap.min.css">
        <link rel="stylesheet" type="" href="Components/repA.css">
        <div class="container">
        <div class="row">
            <div class="col-4">
                <div class="b1" style="padding:2%">
                    <h3>April</h3>
                </div>
            </div>
            <div class="col-8">
                <div class="b1" style="padding:1%">
                    <h3>2022</h3>
                    
                </div>
            </div>
        </div>

        <br>
        <div class="row">
            <div class="col-4">
                <rep-progress id="repChart" val="89"></rep-progress>
            </div>
            <div class="col-8">
                <div class="row">
                    <br><br>
                </div>
                <div class="row">
                    <div class="col-6">
                        <div class="b2">
                            <h2 class="bh3">150 000</h2><br>
                            <h2 class="bh3">Monthly Target</h2>
                        </div>
                    </div>

                    <div class="col-6">
                        <div class="b2" style="background-color:#EDC5F6">
                            <h2 class="bh3">150 000</h2><br>
                            <h2 class="bh3">Monthly Target</h2>
                        </div>

                    </div>
                </div>
            </div>
            

        </div>

    </div>


    
            `;
    }

}
customElements.define("rep-analysis", repAnalysis);