class Person{
     name;
    password;
    get(name, password){
        this.name = name;
        this.password = password;
    }
    set(){
        alert(this.name);
        alert(this.password);
    }
}
var person = new Person();
function valid(){
    var form = document.getElementById('contact');
    var Problema = document.getElementById('Problema');
    var problema_name = document.getElementById("problema_name");
    var problema_password = document.getElementById("problema_password");
    var problema_RePassword = document.getElementById("problema_RePassword");
var name = form.name.value;
var password = form.password.value;
var RePassword = form.RePassword.value;
var pas = /[a-z]{1}[0-9a-z]{8}/i;
var fail = false;
if (name == "" || name == " ") {
    fail = "Не ввели ім'я!";
}else if (password == "" || password == " ") {
    fail = "Не ввели пароль!" 
}else if (pas.test(password) == false) {
    fail = "Ввели пароль не вірно: <br> <span class = 'fon'>пароль має містити як мінімум 1 латинсіку літеру, і містити 8 символів! </span>"; 
}else if (password != RePassword) {
    fail = "Пароль не співпадає!"; 
}
if(fail){
    if(fail == "Не ввели ім'я!"){
        problema_password.style.display = "none";
        problema_RePassword.style.display = "none";
        Problema.style.display = "none";
        problema_name.style.display = "block";
        problema_name.innerHTML = fail;
    }else if(fail == "Не ввели пароль!"){
        problema_RePassword.style.display = "none";
        Problema.style.display = "none";
        problema_name.style.display = "none";
        problema_password.style.display = "block";
        problema_password.innerHTML = fail;
    }else if(fail == "Пароль не співпадає!"){
        Problema.style.display = "none";
        problema_name.style.display = "none";
        problema_password.style.display = "none";
        problema_RePassword.style.display = "block";
        problema_RePassword.innerHTML = fail;
    }else{
        problema_name.style.display = "none";
        problema_password.style.display = "none";
        problema_RePassword.style.display = "none";
    Problema.style.display = "block";
    Problema.innerHTML = fail;
    }
}else{
    person.get(name, password);
    window.location = "index.html";
    Get_Set(name);
}
}
function Und(){
    window.location = "index.html";
}
var i = 0;
function exit(){
    var form = document.getElementById('contact');
    var TextPassword = document.getElementById('TextPassword');
    var RePassword = document.getElementById('RePassword');
    var problema_name = document.getElementById("problema_name");
    var problema_password = document.getElementById("problema_password");
    var exit = document.getElementById('exit');
    if(i == 0){
        exit.value = "Reg"
        problema_name.style.marginTop = "-80px"
        problema_password.style.marginTop = "-45px";
        TextPassword.style.display = "none";
        RePassword.style.display = "none";
        form.style.top = "calc(50% - 80px)";
    i++;
    }else{
        window.location = "osoba.html"; 
        i--;
    }
}
