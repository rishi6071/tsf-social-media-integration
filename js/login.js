// Login by Google Sign-in
const loginWithGoogle = () => {

    // [START auth_google_provider_create]
    var provider = new firebase.auth.GoogleAuthProvider();
    // [END auth_google_provider_create]

    // [START auth_google_provider_scopes]
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    firebase.auth().languageCode = 'en';
    // To apply the default browser preference instead of explicitly setting it.
    // firebase.auth().useDeviceLanguage();

    // [START auth_google_provider_params]
    provider.setCustomParameters({
        'login_hint': 'user@example.com'
    });
    // [END auth_google_provider_params]

    // Sign-in with Popup Window
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
}