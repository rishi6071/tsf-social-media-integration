
//     <script>
//     // Google Sign-out Method
//     function signOut() {
//         var auth2 = gapi.auth2.getAuthInstance();
//         auth2.signOut().then(function () {
//             alert('User signed out.');
//             document.querySelector('#user_info').style.display = "none";
//             document.querySelector('#signin_user').style.display = "block";
//             document.querySelector('#home_profile_icon').src = "./img/icon/profile.png";
//             document.querySelector('#home_profile_icon').alt = "Profile Icon";
//             document.querySelector('#user_img').src = "./img/icon/profile.png";
//             document.querySelector('#user_img').alt = "Profile Icon";
//         });
//     }
// </script>