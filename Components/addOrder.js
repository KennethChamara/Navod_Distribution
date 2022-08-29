const { ipcRenderer } = require('electron');
export class addOrder extends HTMLElement {
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
            const fn = this.shadowRoot.querySelector('#fname');
            const ln = this.shadowRoot.querySelector('#lname');
            const cn = this.shadowRoot.querySelector('#cNo');
            const r = this.shadowRoot.querySelector('#route');

            let obj = JSON.parse('{"fname":"' + fn.value + '", "lname":"' + ln.value + '", "contactNo": "' + cn.value + '", "route": "' + r.value + '"}');
            console.log(obj);
            ipcRenderer.send("my", obj)

        })

    }

    render() {
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
               
                padding: 3px; 

            }
            
            </style>
            
    
        <p style="margin-left: -110px; margin-top:10px">Home/Customer/Add Order</p>
        <form style="background-color: rgb(255, 255, 255); width: 400px; margin-top: 45px; height: 550px; margin-left: 300px;">
            <img src="images/icons8-fast-moving-consumer-goods-100.png" width="50px" height="50px" style="margin-left: 170px; margin-top: 20px;">
            <h5 for="name" style="margin-top: 20px; margin-left: 47px; color: rgba(0, 0, 0, 0.39);"> Date</h5>
            
            <input type="text" id="date" name="date"><br>
           
            <h5 for="price" style="margin-top: 20px; margin-left: 47px; color: rgba(0, 0, 0, 0.39);">Shop Id</h5>
            
            <input type="text" id="shopId" name="shopId"><br>
            
            <h5 for="category" style="margin-top: 20px; margin-left: 47px; color: rgba(0, 0, 0, 0.39);">Product</h5>
            
            <input type="text" id="product" name="product"><br>
            
            <h5 for="category" style="margin-top: 20px; margin-left: 47px; color: rgba(0, 0, 0, 0.39);">Quantity</h5>
            
            <input type="text" id="quantity" name="quantity"><br>

            <h5 for="category" style="margin-top: 20px; margin-left: 47px; color: rgba(0, 0, 0, 0.39);">Status</h5>
            
            <input type="text" id="status" name="status"><br>
        </form>
        
        <button style="background-color:rgba(255, 68, 68, 1);margin-left: 490px;"><b>Cancel</b></button>
        <button id="save" style="background-color:rgba(0, 200, 81, 1); margin-left: 20px; margin-bottom:30px;"><b>Save</b></button>`;

    }


}

customElements.define('add-order', addOrder)