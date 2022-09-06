const { ipcRenderer } = require('electron');

export class returnItem extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({
            mode: 'open'
        })

    }



    connectedCallback() {
        let reply = ipcRenderer.sendSync('helloSync', 'a string');
        console.log(reply[0].name)
        const na = reply;


        this.render(reply)
        const table = this.shadowRoot.querySelector('#jana');
        for (let i = 0; i < reply.length; i++) {
            const row = table.insertRow(i + 1);


            row.insertCell(0).innerHTML = reply[i].name;
            row.insertCell(1).innerHTML = reply[i].phone;
            row.insertCell(2).innerHTML = reply[i].address;
            row.insertCell(3).innerHTML = reply[i].route;
            row.insertCell(4).innerHTML = "<img src='images/icons8-delete-16.png' id='del" + i + "'>";


            const dele = this.shadowRoot.querySelector('#del' + i);
            dele.addEventListener('click', () => {


                ipcRenderer.send("returnItem", reply[i].customer_id)

            })



        }















    }






    render(row) {

        this.shadowRoot.innerHTML += `
        <link rel="stylesheet" href="Components/table.css">           
    
           
        <p style="margin-left: -110px; margin-top:10px"><a onClick="first()" style="cursor: pointer;">Home</a>/Employee/Add Sales Rep</p>
                <br>

        <div class="tbl">
            <table id="jana">
            <tr>
                
                <th>Rep Id</th>
                <th>Sales Rep</th>
                <th>Contact No</th>
                <th>Adress</th>
                <th></th>
                
            </tr>

           
        </table>
        <button style="margin-left: 40px;"><</button><button>></button>

        


    </div>
    <br><br>
              
    
            `;

    }


}

customElements.define('return-item', returnItem)