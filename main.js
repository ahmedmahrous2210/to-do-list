function saveData(){
   let name, email, password;
   name = document.getElementById("name").value;
   email = document.getElementById("email").value;
   password = document.getElementById("password").value;
   
//    localStorage.setItem("name",name);
//    localStorage.setItem("email",email);
//    localStorage.setItem("password",password);

let user_records = new Array();
user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(user_records.some((v)=>{
    return v.email==email
})){
    alert("Email already Exists");
}
else{
    user_records.push({
        "name":name,
        "email":email,
        "password":password
    })
    // stringify() to convert object into string
    localStorage.setItem("users",JSON.stringify(user_records));
}
}