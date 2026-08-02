import { 
    getAuth,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";


const auth = getAuth();



onAuthStateChanged(auth, (user) => {


    const nav = document.querySelector("nav");


    if (!nav) return;



    // Remove old Firebase buttons if they exist

    const oldButtons = document.getElementById("firebaseButtons");


    if (oldButtons) {
        oldButtons.remove();
    }




    const authDiv = document.createElement("div");

    authDiv.id = "firebaseButtons";





    if (user) {


        authDiv.innerHTML = `

        <a href="profile.html">
            Profile
        </a>


        <a href="#" id="logoutButton">
            Sign Out
        </a>

        `;



        const logoutButton =
        authDiv.querySelector("#logoutButton");



        logoutButton.addEventListener("click", async (e)=>{


            e.preventDefault();


            await signOut(auth);


            window.location.reload();


        });



    } 





    else {


        authDiv.innerHTML = `

        <a href="login.html">
            Sign In
        </a>

        `;


    }






    nav.appendChild(authDiv);



});
