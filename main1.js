function saveData(){
    let email, password;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    let user_record=new Array();
    user_record = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_record.some((v)=>{
        return v.email==email && v.password==password
    })){
        alert("Login Successfull")
        let current_user=user_record.filter((v)=>{
            return v.email==email && password==password
        })[0]

        localStorage.setItem("name",current_user.name);
        localStorage.setItem("email",current_user.email);
        window.location.href="index.html";
    }
    else{
        alert("Login Fail");
    }
}