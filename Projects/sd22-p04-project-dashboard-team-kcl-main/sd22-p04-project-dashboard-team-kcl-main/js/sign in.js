
function signup(e){
event.preventDefault();
//hier wordt aangegeven waar email username en passwoord ingevuld moeten worden
    let email = document.getElementById('email').value;
    let username = document.getElementById('username').value;
    let pass= document.getElementById('password').value;
    //hier komen all drie de onderdelen bij elkaar om 'user te vormen'. user bestaat dus uit email, username en password 
    let user = {
        email: email,
        username: username,
        password: pass,
    };
//hier wordt de user omgezet naar een JSON format om opgeslagen te worden
   let json= JSON.stringify(user);
   localStorage.setItem(username,json);
   console.log(user)
   let button = document.getElementById("button").addEventListener("click",signup);

}



function login(e){
//hier wordt weer aangegeven waar email username en password ingevuld moeten worden
    let username = document.getElementById('username').value;
    let pass = document.getElementById('password').value;
    let result = document.getElementById('result').value;

    //hier haalt het de 'user' array om te kijken of de ingevulde gebieden correct zijn. 
    let user = localStorage.getItem(username);
    let data = JSON.parse(user);
    console.log(data);
//hier laat het zijn wat er gebeurt als je geen username, of de verkeerde username intikt.
    if (user ===null) {
        result.innerHTML = 'wrong username';
    } else if (username == data.username && pass ==data.password) { 
       result.innerHTML = 'logged in';  //hier laat het zien wat er staat als je allebei de kriteria hebt. dus de correcte wachtwoord en username.
    } else {
        result.innerHTML = 'wrong password';
    }
 //hier laat het zien wat er gebeurt als je geen of de verkeerde password intikt
}
