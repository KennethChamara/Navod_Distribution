const { ipcRenderer } = require('electron');
export class viewProduct extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({
            mode: 'open'
        })

    }

    connectedCallback() {
        let reply = ipcRenderer.sendSync('viewProduct', 'a string');
      
        const na = reply;




        this.render()
        const table = this.shadowRoot.querySelector('#jana');

        for (let i = 0; i < reply.length; i++) {
            const row = table.insertRow(i + 1);


            row.insertCell(0).innerHTML = reply[i].pname;
            row.insertCell(1).innerHTML = reply[i].price;
            row.insertCell(2).innerHTML = reply[i].category;
            row.insertCell(3).innerHTML = "<img src='images/icons8-delete-16.png' id='del" + i + "'>";
            row.insertCell(4).innerHTML = `<a onclick='updateproduct(${reply[i].p_id})'><img src='images/pencil.png'></a>`;
       
            const dele = this.shadowRoot.querySelector('#del' + i);
            dele.addEventListener('click', () => {
                const tb = this.shadowRoot.querySelector('#tb');


                ipcRenderer.send("deleteProduct", reply[i].p_id)
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
                
                <th>Name</th>
                <th>Price</th>
                <th>Cateogory</th>
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

customElements.define('view-product', viewProduct)