var confirmation = false;

// Google Sign-in Method
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log(profile);
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

    const userInfo = {
        ID: profile.getId(),
        Name: profile.getName(),
        ImageUrl: profile.getImageUrl(),
        Email: profile.getEmail()
    };
    localStorage.setItem("userInfo", JSON.stringify(userInfo));

    confirmation = true;
    if (confirmation == true) {
        // Redirecting to user.html Page
        location.href = "user.html";

        // Show User Info
        setTimeout(showUserInfo, 1000);
    }
}

// Google Sign-out Method
function signOut() {
    alert("Nope");
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert('User signed out.');
    });
    location.href = "index.html";
}

// Show UserInfo
const showUserInfo = () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    document.querySelector('#user_name').innerText = userInfo.Name;
    document.querySelector('#userId').innerText = userInfo.ID;
    document.querySelector('#userName').innerText = userInfo.Name;
    document.querySelector('#userMailId').innerText = userInfo.Email;

    const image = document.querySelector('#user_img');
    image.src = userInfo.ImageUrl;
    image.alt = userInfo.Name;

    const navbarImage = document.querySelector('#profile_icon');
    navbarImage.src = userInfo.ImageUrl;
    navbarImage.alt = userInfo.Name;

    const homeProfileIcon = document.querySelector('#home_profile_icon');
    homeProfileIcon.src = userInfo.ImageUrl;
    homeProfileIcon.alt = userInfo.Name;
}

// It's a Self-Invoking Function to Initialise Firebase Auth UI
// (() => {
//     // Initialize the FirebaseUI Widget using Firebase.
//     var ui = new firebaseui.auth.AuthUI(firebase.auth());

//     var uiConfig = {
//         callbacks: {
//             signInSuccessWithAuthResult: function (authResult, redirectUrl) {
//                 // User successfully signed in.
//                 // Return type determines whether we continue the redirect automatically
//                 // or whether we leave that to developer to handle.
//                 return true;
//             },
//             uiShown: function () {
//                 // The widget is rendered.
//                 // Hide the loader.
//                 document.getElementById('loader').style.display = 'none';
//             }
//         },
//         // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
//         signInFlow: 'popup',
//         signInSuccessUrl: 'index.html',
//         signInOptions: [
//             // Leave the lines as is for the providers you want to offer your users.
//             firebase.auth.EmailAuthProvider.PROVIDER_ID,
//             firebase.auth.PhoneAuthProvider.PROVIDER_ID,
//             // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//             // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//         ],
//         // Terms of service url.
//         tosUrl: 'index.html',
//         // Privacy policy url.
//         privacyPolicyUrl: 'index.html'
//     };

//     // The start method will wait until the DOM is loaded.
//     ui.start('#firebaseui-auth-container', uiConfig);
// })()