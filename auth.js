import { getAuth, onAuthStateChanged } from 
"https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";


const auth = getAuth();



const loginLink = document.getElementById("loginLink");

const profileLink = document.getElementById("profileLink");



onAuthStateChanged(auth,(user)=>{


if(user){


if(loginLink){

loginLink.innerHTML="Sign Out";

loginLink.href="#";

}


if(profileLink){

profileLink.style.display="inline";

}



}

else{


if(loginLink){

loginLink.innerHTML="Sign In";

loginLink.href="login.html";

}


if(profileLink){

profileLink.style.display="none";

}


}


});
