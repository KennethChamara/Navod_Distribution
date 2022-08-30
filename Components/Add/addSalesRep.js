const { ipcRenderer } = require('electron');
export class addSalesRep extends HTMLElement {
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
            ipcRenderer.send("addSalesRep", obj)

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
            
    
        <p style="margin-left: -110px; margin-top:10px"><a onClick="first()">Home</a>/Employee/Add Sales Rep</p>
        <form style="background-color: rgb(255, 255, 255); width: 400px; margin-top: 45px; height: 550px; margin-left: 300px;">
            <img src="images/icons8-fast-moving-consumer-goods-100.png" width="50px" height="50px" style="margin-left: 170px; margin-top: 20px;">
            
            <h5 for="price" style="margin-top: 20px; margin-left: 47px; color: rgba(0, 0, 0, 0.39);">Rep Id</h5>
            
            <input type="text" id="Rid" name="Rid"><br>
           
            <h5 for="price" style="margin-top: 20px; margin-left: 47px; color: rgba(0, 0, 0, 0.39);">Name</h5>
            
            <input type="text" id="name" name="name"><br>
            
            <h5 for="category" style="margin-top: 20px; margin-left: 47px; color: rgba(0, 0, 0, 0.39);">Adress(RS)</h5>
            
            <input type="text" id="adress" name="adress"><br>
            
            <h5 for="category" style="margin-top: 20px; margin-left: 47px; color: rgba(0, 0, 0, 0.39);">Contact</h5>
            
            <input type="text" id="contact" name="contact"><br>

            
        </form>
        
        <button style="background-color:rgba(255, 68, 68, 1);margin-left: 490px;"><b>Cancel</b></button>
        <button id="save" style="background-color:rgba(0, 200, 81, 1); margin-left: 20px; margin-bottom:30px;"><b>Save</b></button>`;

    }


}

customElements.define('add-sales-rep', addSalesRep)