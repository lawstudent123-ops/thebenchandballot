import { 
getAuth,
onAuthStateChanged,
signOut
} from 
"https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";


const auth = getAuth();


const nav = document.querySelector("nav");


if(nav){


onAuthStateChanged(auth,(user)=>{


let oldButtons = document.getElementById("firebaseButtons");


if(oldButtons){
oldButtons.remove();
}




const div = document.createElement("div");

div.id = "firebaseButtons";





if(user){


div.innerHTML = `

<a href="profile.html">
Profile
</a>


<a href="#" id="logoutButton">
Sign Out
</a>

`;



div.querySelector("#logoutButton")
.addEventListener("click",async(e)=>{

e.preventDefault();

await signOut(auth);

location.reload();

});



}



else{


div.innerHTML = `

<a href="login.html">
Sign In
</a>

`;



}




nav.appendChild(div);



});

}
