const number = document.querySelector("input[type='tel']");
const allInputs = document.querySelectorAll(".type");
const submit = document.querySelector("button[type='submit']");

function placeHolderChange(){
    allInputs.forEach(element => {
        if(element.type == "text" && element.id == "first_name"){
            element.placeholder = "First Name"
        }else if(element.type == "text" && element.id == "last_name"){
            element.placeholder = "Last Name";
        }else if(element.type == "email"){
            element.placeholder = "Email";
        }else if(element.type == "tel"){
            element.placeholder = "Phone Number";
        }else if(element.type == "text" && element.id == "gov_id"){
            element.placeholder = "Government Id";
        }else if(element.type == "text" && element.id == "username"){
            element.placeholder = "Username";
        }else if(element.type == "password" && element.id == "password"){
            element.placeholder = "Password";
        }else if(element.type == "password" && element.id =="cnfrm_password"){
            element.placeholder = "Confirm Password"
        }
    });
}

window.onresize = ()=>{
    if(window.innerWidth <= 1110){
        placeHolderChange();
    }
}

window.onload = () =>{
    if(window.innerWidth <=1110){
        placeHolderChange();
    }
}
