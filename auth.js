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


// Remove old auth buttons

const oldAuth =
document.getElementById("authButton");


const oldProfile =
document.getElementById("profileButton");


if(oldAuth){
oldAuth.remove();
}


if(oldProfile){
oldProfile.remove();
}




if(user){


nav.innerHTML += `

<a id="profileButton" href="profile.html">
Profile
</a>


<a id="authButton" href="#">
Sign Out
</a>

`;



document
.getElementById("authButton")
.onclick = async()=>{


await signOut(auth);


window.location.reload();


};


}



else{


nav.innerHTML += `

<a id="authButton" href="login.html">
Sign In
</a>

`;



}



});


}
