import { 
    getAuth,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";


const auth = getAuth();


onAuthStateChanged(auth, (user) => {


    const nav = document.querySelector("nav");


    if (!nav) return;


    // remove previous buttons
    const existing = document.getElementById("authArea");

    if(existing){
        existing.remove();
    }



    const authArea = document.createElement("span");

    authArea.id = "authArea";




    if(user){


        authArea.innerHTML = `
            <a href="profile.html">
                Profile
            </a>

            <a href="#" id="logout">
                Sign Out
            </a>
        `;



        authArea.querySelector("#logout")
        .addEventListener("click", async(e)=>{

            e.preventDefault();

            await signOut(auth);

            location.reload();

        });


    } else {


        authArea.innerHTML = `
            <a href="login.html">
                Sign In
            </a>
        `;


    }



    nav.appendChild(authArea);



});
