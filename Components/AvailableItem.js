const { ipcRenderer } = require('electron');
export class AvailableItem extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({
            mode: 'open'
        })

    }

    connectedCallback() {

        this.render()
        const submit = this.shadowRoot.querySelector('#save');
        submit.addEventListener('click', () => {
            const repId = this.shadowRoot.querySelector('#Rid');
            const name = this.shadowRoot.querySelector('#name');
            const adress = this.shadowRoot.querySelector('#adress');
            const contact = this.shadowRoot.querySelector('#contact');

            let obj = JSON.parse('{"repId":"' + repId.value + '", "name":"' + name.value + '", "adress": "' + adress.value + '", "contact": "' + contact.value + '"}');
            console.log(obj);
            ipcRenderer.send("InventoryManagement", obj)

        })

    }

    render() {
        this.shadowRoot.innerHTML = `
        <style> 
        .txt1[type=text] {
            border: none;
            border-bottom: 1px solid grey;
            font-size: 25px;
            color: gray;
        }
        
        .txt2[type=text] {
            background-color: #FAEED2;
            height: 25px;
            
            border: 2px solid rgba(0, 0, 0, 0.281);
        }
      
          input[type=checkbox] {
            width: 30px;
            height: 20px;
            padding: 2px 13px;
            display: inline;
            border-radius: 8px;
            border: 2px solid rgba(0, 0, 0, 0.281);
           
        }
        
        .tbl {
            background-color: rgba(255, 255, 255, 1);
            width: 1190px;
            margin-top: 20px;
            height: auto;
            margin-left:-90px;
            padding: 30px;
            padding-top: 80px;
        }
        
        table {
            margin-top: 100px;
            margin: 20px;
            border-collapse: collapse;
            width: 95%;
        }
        
        th,
        td {
            padding: 20px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        
        th {
            color: grey;
        }
            
            </style>
            
    
           
                <br>

        <div class="tbl">
            <table>
            <tr>
                <th></th>
                <th>Item</th>
                <th>Order ID</th>
                <th>Price(Rs)</th>
                <th>Category</th>
                <th>Quantity</th>
            </tr>

            <tr>
                <form>
                    <td><input type="checkbox" id="vehicle" name="vehicle1" value="Bike"></td>
                </form>
                <td>Peter</td>
                <td>Griffin</td>
                <td>Griffin</td>
                <td>Griffin</td>
                <td>$100</td>
            </tr>

        </table>
        <button style="margin-left: 40px;"><</button><button>></button>


    </div>
    <br><br>
              
    
                `;

    }


}

customElements.define('available-item', AvailableItem)