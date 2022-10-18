const { ipcRenderer } = require('electron');
export class addInventory extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({
            mode: 'open'
        })

    }

    connectedCallback() {

        let i=0;
        var upreply = ipcRenderer.sendSync('inventory', 'string');
        this.render(upreply,i)
        
        
      const done = this.shadowRoot.querySelector('#done');
      done.addEventListener('click', () => {
            const date = this.shadowRoot.querySelector('#date');
            const category = this.shadowRoot.querySelector('#category');
            const note = this.shadowRoot.querySelector('#note');
            let obj = JSON.parse('{"date":"' + date.value + '", "category":"' + category.value + '", "note":"' + note.value + '"}');
            console.log(obj);
            ipcRenderer.send("addinventory", obj)
        })

        this.addIn(upreply,i);
    }    

        addIn(upreply,i){
               
      /*const skip = this.shadowRoot.querySelector('#skip');
        skip.addEventListener('click', () => {
            const productamount = ipcRenderer.sendSync('productamount', 'string');
              console.log("skip");
              var upreply = ipcRenderer.sendSync('inventory', 'string');
              this.addIn(upreply,i++);
              this.render(upreply,i++);
            })*/
        const submit = this.shadowRoot.querySelector('#add');
        submit.addEventListener('click', () => {
            i=i+1;
            
            var stock = ipcRenderer.sendSync('stock', 'string');
            const productamount = ipcRenderer.sendSync('productamount', 'string');
            const name = this.shadowRoot.querySelector('#name');
      
            const quantity = this.shadowRoot.querySelector('#quantity');
     

            let obj = JSON.parse('{"name":"' + name.value + '",  "quantity": "' + quantity.value + '",  "s_id": "' + stock[0].s_id + '", "p_id": "' + upreply[i-1].p_id + '"}');
            ipcRenderer.send("InventoryManagement", obj)
            this.render(upreply,i);
            if(i<productamount.length){
                const done = this.shadowRoot.querySelector('#done');
                done.addEventListener('click', () => {
                    const date = this.shadowRoot.querySelector('#date');
                    const category = this.shadowRoot.querySelector('#category');
                    
                    let obj = JSON.parse('{"date":"' + date.value + '", "category":"' + category.value + '"}');
                    console.log(obj);
                    ipcRenderer.send("addinventory", obj)
                     this.connectedCallback();
                  })
                  this.addIn(upreply,i);}
            
        })
    }


    

    render(upreply,i) {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="Components/styleI.css">
        
        <div style="margin-left:-148px">

        <div class="tbl" style="padding-top:20px;">
        <label for="" style="font-size: 25px;color:grey;">Inventory</label>
        <hr style="width:49%; margin-left:0px;">
        <br>
        <label for="" style="font-size:23px;">Date</label>
        <label for="" style="font-size:23px; margin-left:573px">Category</label>
        <br>
        <input type="text" class="fname" name="date" id="date">
        <input type="text" class="fname" name="category" id="category" style="margin-left: 50px;">
        <br><br><br>
        <input type="text" class="txt1" value="Note" size="88" id="note">
        <br>
        <button id="done" style="margin-left:545px">ADD</button>
        </div>

    <div class="tbl" style="padding-top:20px;">
        <label for="" style="font-size: 25px;color:grey;">Items</label>
        <hr style="width:49%; margin-left:0px;">
        <br>
        <label for="" style="font-size:23px;">Name</label>
        <label for="" style="font-size:23px; margin-left:563px">Quantity</label>
        <br>
        <input type="text" class="fname" id="name" name="name" value="` + upreply[i].pname + `">
        <input type="text" class="fname" id="quantity" name="quantity" style="margin-left: 50px;>
        
        <br><br>
     
       
        <br>
        
        <input type="text" class="fname" id="nPrice" name="nPrice" style="margin-left: 50px;">
        <br>
        <button id="add" style="margin-left:545px">Done</button>
        



    </div>
    </div>
    

  
    
                `;

    }


}

customElements.define('add-inventory', addInventory)