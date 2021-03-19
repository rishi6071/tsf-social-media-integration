var confirmation = false;

// Google Sign-in Method
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log(profile);
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

    document.querySelector('#user_name').innerText = profile.getName();
    document.querySelector('#userId').innerText = profile.getId();
    document.querySelector('#userName').innerText = profile.getName();
    document.querySelector('#userMailId').innerText = profile.getEmail();

    const image = document.querySelector('#user_img');
    image.src = profile.getImageUrl();
    image.alt = profile.getName();

    const navbarImage = document.querySelector('#profile_icon');
    navbarImage.src = profile.getImageUrl();
    navbarImage.alt = profile.getName();

    const homeProfileIcon = document.querySelector('#home_profile_icon');
    homeProfileIcon.src = profile.getImageUrl();
    homeProfileIcon.alt = profile.getName();

    confirmation = true;
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

const redirectUser = () => {
    if (confirmation == true) {
        // Redirecting to user.html Page
        location.href = "user.html";
    }
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