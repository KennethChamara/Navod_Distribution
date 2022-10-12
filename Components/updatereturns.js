const { ipcRenderer } = require('electron');
export class updatereturns extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({
            mode: 'open'
        })

    }

    connectedCallback() {
        var upreply = ipcRenderer.sendSync('updatereturns', this.getAttribute("pname"));
        console.log(upreply);
        this.render(upreply);
        const submit = this.shadowRoot.querySelector('#save');
        submit.addEventListener('click', () => {
            const item = this.shadowRoot.querySelector('#item');
            const cname = this.shadowRoot.querySelector('#cname');
            const date = this.shadowRoot.querySelector('#date');
            const mfcDate = this.shadowRoot.querySelector('#mfcDate');
            const quantity = this.shadowRoot.querySelector('#quantity');
            const description = this.shadowRoot.querySelector('#description');

            let obj = JSON.parse('{"item":"' + item.value + '", "cname":"' + cname.value + '", "date": "' + date.value + '","mfcDate": "' + mfcDate.value + '", "quantity": "' + quantity.value + '","description": "' + description.value + '"}');
            obj.id = upreply[0].o_id;
            console.log(obj);
            ipcRenderer.send("updateorderiteam", obj);
            document.getElementById("main-body").innerHTML = "<view-order></view-order>";

        })

    }

    render(upreply) {
        this.shadowRoot.innerHTML = `
        <style> 
            input[type=text] {
              width: 300px;
              height: 5px;
              padding: 12px 20px;
              margin-top: -12px;
              box-sizing: border-box;
              border: none;
              border-bottom: 2px solid rgba(0, 0, 0, 0.39);
              background-color: rgb(255, 255, 255);
              margin-left: 47px;
              
              
            }
            button{
                width: 80px; 
                height:40px;  
                border:none; 
                margin-top: 20px; 
                cursor: pointer;
                padding: 3px; 

            }
            
            </style>
            
    
        <p style="margin-left: -110px; margin-top:10px"><a onClick="first()" style="cursor: pointer;">Home</a>/Customer/Add Order</p>
        <form style="background-color: rgb(255, 255, 255); width: 400px; margin-top: 45px; height: 550px; margin-left: 300px;">
            <img src="images/icons8-fast-moving-consumer-goods-100.png" width="50px" height="50px" style="margin-left: 170px; margin-top: 20px;">
            <h5 for="name" style="margin-top: 20px; margin-left: 47px; color: rgba(0, 0, 0, 0.39);">Item</h5>
            
            <input type="text" id="item" name="item" value="` + upreply[0].pname + `"><br>
           
            <h5 for="price" style="margin-top: 20px; margin-left: 47px; color: rgba(0, 0, 0, 0.39);">Customer_Name</h5>
            
            <input type="text" id="cname" name="cname" value="` + upreply[0].name + `"><br>
            
            <h5 for="category" style="margin-top: 20px; margin-left: 47px; color: rgba(0, 0, 0, 0.39);">Date</h5>
            
            <input type="text" id="date" name="product" value="` + upreply[0].date + `"><br>
            
            <h5 for="category" style="margin-top: 20px; margin-left: 47px; color: rgba(0, 0, 0, 0.39);">Mfc_Date</h5>
            
            <input type="text" id="mfcDate" name="quantity" value="` + upreply[0].manufacture_date + `"><br>

            <h5 for="category" style="margin-top: 20px; margin-left: 47px; color: rgba(0, 0, 0, 0.39);">Quantity</h5>
            
            <input type="text" id="quantity" name="status" value="` + upreply[0].quantity + `"><br>

            <h5 for="category" style="margin-top: 20px; margin-left: 47px; color: rgba(0, 0, 0, 0.39);">Description</h5>
            
            <input type="text" id="description" name="status" value="` + upreply[0].description + `"><br>
        </form>
        
        <button style="background-color:rgba(255, 68, 68, 1);margin-left: 490px;"><b>Cancel</b></button>
        <button id="save" style="background-color:rgba(0, 200, 81, 1); margin-left: 20px; margin-bottom:30px;"><b>Save</b></button>`;

    }


}

customElements.define('update-returns', updatereturns)