const { ipcRenderer } = require('electron');

function logIn() {
    const name = document.getElementById("name");
    const pass = document.getElementById("pass");
    document.getElementById("invalid").innerHTML = '';

    
    // element.classList.remove('error');

    //validation
    if (name.value==null || name.value==""){ 
        document.getElementById("invalid").innerHTML = "Name can't be blank";
        name.classList.add("error");
        return false;  
    }
    if(pass.value==null || pass.value==""){
        document.getElementById("invalid").innerHTML = "Enter password";
        pass.classList.add("error");
        return false;
    }else if(pass.value.length<6){  
        document.getElementById("invalid").innerHTML = "Password must be at least 6 characters long";
        pass.classList.add("error");
        return false;  
    } 

    const args = {
        user: name.value,
        password: pass.value
    };

    const reply = ipcRenderer.sendSync("logIn", args);
    console.log("val",reply);
    if(reply[0]){
        if(reply[1]){
            name.classList.remove("error");
            pass.classList.remove("error");
            window.location.replace("./home.html");   
        }else{
            document.getElementById("invalid").innerHTML = 'Password incorrect';
            pass.classList.add("error");
            name.classList.remove("error");
        }
    }else{ 
        document.getElementById("invalid").innerHTML = 'User name or password incorrect';
        pass.classList.add("error");
        name.classList.add("error");
    }
    
    
    
    
}