const { ipcRenderer } = require("electron");

export class login extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({
            mode: "open",
        });
    }

    connectedCallback() {

        this.render();


    }

    render() {
        this.shadowRoot.innerHTML += `
        <style> 
        input[type=text] {
          width: 300px;
          height: 5px;
          padding: 12px 20px;
          margin-top: -12px;
          box-sizing: border-box;
          border: none;
          border-bottom: 2px solid rgba(0, 0, 0, 0.39);
          background-color: rgba(243, 212, 132, 1);
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
       

        
       <form style="background-color: rgba(243, 212, 132, 1); width: 400px; margin-top: 100px; height: 500px; margin-left: 280px;">
        <img src="images/customers-icon-3.png" width="50px" height="50px" style="margin-left: 170px; margin-top: 20px;">
          <br><br>  
           <h5 for="price" style="margin-top: 20px; margin-left: 47px; color: rgb(0, 0, 0 );">User Name</h5>
            
            <input type="text" id="lname" name="lname"><br>
            
            <h5 for="category" style="margin-top: 20px; margin-left: 47px; color: rgb(0, 0, 0);">Password</h5>
            
            <input type="text" id="price" name="price"><br><br>
            <button id="save" style="background-color:rgba(0, 200, 81, 1); margin-left: 165px; margin-bottom:30px;"><b>Log In</b></button>
       
      
       <h5 for="category" style="margin-top: -20px; margin-left: 150px; color: rgb(0, 0, 0);">Forgot Password?</h5>
            
       <input style="margin-top:-100px;" type="text" id="price" name="price" >
            
        </form>
       


    
            `;
    }

}
customElements.define("log-in", login);