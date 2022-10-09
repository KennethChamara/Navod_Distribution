const { ipcRenderer } = require('electron');
export class viewCustomer extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({
            mode: 'open'
        })

    }

    connectedCallback() {
        let reply = ipcRenderer.sendSync('viewCustomer', 'a string');
        console.log(reply[0].name)
        const na = reply;




        this.render()
        const table = this.shadowRoot.querySelector('#jana');

        for (let i = 0; i < reply.length; i++) {
            const row = table.insertRow(i + 1);


            row.insertCell(0).innerHTML = reply[i].name;
            row.insertCell(1).innerHTML = reply[i].phone;
            row.insertCell(2).innerHTML = reply[i].address;
            row.insertCell(3).innerHTML = reply[i].route;
            row.insertCell(4).innerHTML = "<img src='images/icons8-delete-16.png' id='del" + i + "'>";
            row.insertCell(5).innerHTML = `<a onclick='updatecustomer(${reply[i].customer_id})'><img src='images/pencil.png'></a>`;
       
            const dele = this.shadowRoot.querySelector('#del' + i);
            dele.addEventListener('click', () => {
                const tb = this.shadowRoot.querySelector('#tb');


                ipcRenderer.send("deleteCustomer", reply[i].customer_id)
                tb.remove()

                this.connectedCallback()




            })






        }















    }






    render() {

        this.shadowRoot.innerHTML += `
        <link rel="stylesheet" href="Components/table.css">           
    
           
        
     <div id="tb">
        <p style="margin-left: -110px; margin-top:10px"><a onClick="first()" style="cursor: pointer;">Home</a>/Employee/Add Sales Rep</p>
        <br>  

        <div class="tbl" id="tb">
       

            
            <table id="jana">
            <tr>
                
                <th>Customer</th>
                <th>Contact No</th>
                <th>Address</th>
                <th>Route</th>
                <th></th>
                
            </tr>

           
        </table>
        <button style="margin-left: 40px;"><</button><button>></button>

        


    </div>
    <br><br>
    </div>
              
    
            `;

    }

}

customElements.define('view-customer', viewCustomer)