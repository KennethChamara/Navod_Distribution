const { ipcRenderer } = require('electron');
export class addInventory extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({
            mode: 'open'
        })

    }

    connectedCallback() {

        let reply = ipcRenderer.sendSync('inProduct', 'a string');
        const na = reply;



        this.render()
        const skip = this.shadowRoot.querySelector('#skip');
        submit.addEventListener('click', () => {
            this.shadowRoot.querySelector('#name').value = reply[0].pname;
            this.shadowRoot.querySelector('#oPrice').value = reply[0].price;
        })


        const submit = this.shadowRoot.querySelector('#add');
        submit.addEventListener('click', () => {
            const name = this.shadowRoot.querySelector('#name');
            const oPrice = this.shadowRoot.querySelector('#oPrice');
            const quantity = this.shadowRoot.querySelector('#quantity');
            const nPrice = this.shadowRoot.querySelector('#nPrice');

            let obj = JSON.parse('{"name":"' + name.value + '", "oPrice":"' + oPrice.value + '", "quantity": "' + quantity.value + '", "nPrice": "' + nPrice.value + '"}');
            console.log(obj);
            ipcRenderer.send("InventoryManagement", obj)

        })


    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="Components/styleI.css">
        
        <div style="margin-left:-90px">

        <div class="tbl" style="padding-top:20px;">
        <label for="" style="font-size: 25px;color:grey;">Inventory</label>
        <hr style="width:49%; margin-left:0px;">
        <br>
        <label for="" style="font-size:23px;">Date</label>
        <label for="" style="font-size:23px; margin-left:573px">Category</label>
        <br>
        <input type="text" class="fname" name="date">
        <input type="text" class="fname" name="category" style="margin-left: 50px;">
        <br><br><br>
        <input type="text" class="txt1" value="Note" size="88">

    </div>

    <div class="tbl" style="padding-top:20px;">
        <label for="" style="font-size: 25px;color:grey;">Items</label>
        <hr style="width:49%; margin-left:0px;">
        <br>
        <label for="" style="font-size:23px;">Name</label>
        <label for="" style="font-size:23px; margin-left:563px">Old Price</label>
        <br>
        <input type="text" class="fname" id="name" name="name" value="">
        <input type="text" class="fname" id="oPrice" name="oPrice" style="margin-left: 50px;">
        <br><br>
        <label for="" style="font-size:23px;">Quantity</label>
        <label for="" style="font-size:23px; margin-left:540px">New Price</label>
        <br>
        <input type="text" class="fname" id="quantity" name="quantity">
        <input type="text" class="fname" id="nPrice" name="nPrice" style="margin-left: 50px;">
        <br>
        <button id="add">ADD</button>
        <button style="margin-left:25px" id="skip">SKIP</button>



    </div>
    </div>
    <button style="margin-left: 978px;margin-bottom: 70px;">Done</button>

  
    
                `;

    }


}

customElements.define('add-inventory', addInventory)