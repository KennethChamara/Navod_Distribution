const { ipcRenderer } = require('electron');
export class repAnalysis extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({
            mode: 'open'
        })

    }

    connectedCallback() {





        this.render()


















    }






    render() {

        this.shadowRoot.innerHTML += `
        <link rel="stylesheet" href="bootstrap-5.2.0-dist/css/bootstrap.css">
        <link rel="stylesheet" type="" href="bootstrap-5.2.0-dist/css/bootstrap.min.css">
        <style>
  
        /* Apply css properties to h1 element */
        h1 {
            text-align: center;
        }
  
        /* Create a container using CSS properties */
        .container {
            top: 50%;
            left: 23%;
            position: absolute;
            text-align: center;
            transform: translate(-50%, -50%);
            margin-top: 120px;
            margin-left: 55px;
        }
  
        /* Apply CSS properties to ui-widgets class */
        .ui-widgets {
            position: relative;
            display: inline-block;
            width: 18rem;
            height: 18rem;
            border-radius: 11rem;
            margin: 1.5rem;
            border: 2.2rem solid palegreen;
            box-shadow: inset 0 0 7px grey;
            border-left-color: palegreen;
            border-top-color: chartreuse;
            border-right-color: darkgreen;
            border-bottom-color: white;
            text-align: center;
            box-sizing: border-box;
        }
  
        /*  Apply css properties to the second 
            child of ui-widgets class */
        .ui-widgets:nth-child(2) {
            border-top-color: chartreuse;
            border-right-color: white;
            border-left-color: palegreen;
            border-bottom-color: white;
        }
  
        /*  Apply css properties to ui-widgets class 
            and ui-values class*/
        .ui-widgets .ui-values {
            top: 55px;
            position: absolute;
            left: 10px;
            right: 0;
            font-weight: 700;
            font-size: 4.0rem;
  
        }
  
        /*  Apply css properties to ui-widgets 
            class and ui-labels class*/
        .ui-widgets .ui-labels {
  
            left: 0;
            bottom: -16px;
            text-shadow: 0 0 4px grey;
            color: black;
            position: absolute;
            width: 100%;
            font-size: 26px;
        }

        .box{
            background-color: white; 
            width: 1145px; 
            height: 480px; 
            padding: 50px; 
            margin-top: 60px;
            margin-left: -80px;
        }
        .box1{
            background-color: #D6E9FB; 
            width: 200px; 
            height: 125px; 
            padding: 50px; 
            margin-top: 30px;
            margin-left: 420px;
            
        }

        .b1{
            background-color: #D6E9FB;
            width: 300px;
            
            margin-top: 20px;
            margin-left: 20px;
            float: left;
            text-align: center;
            height: 55px; 
        }
        .

        </style>
    <div class="box">

        <div class="row">

        </div>





        <div class="grid">
        
            <div class="t1">
               <div class="b1">
                    <h3>April</h3>
                </div>
                <div class="b1" style="margin-left:170px; width: 550px">
                    <h3>Janitha</h3>
                </div>
            </div>
        </div>
        

            
    </div>
        
        
            `;

    }
}

customElements.define('rep-analysis', repAnalysis)