var firebaseConfig = {
    apiKey: "<YOUR API KEY>",
    authDomain: "new-firebase-login.firebaseapp.com",
    databaseURL: "https://new-firebase-login.firebaseio.com",
    projectId: "new-firebase-login",
    storageBucket: "new-firebase-login.appspot.com",
    messagingSenderId: "<YOUR MSG ID>",
    appId: "<YOUR APP ID>",
    measurementId: "< YOUR MEASUREMENT ID>"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById("user_div").style.display="block";
        document.getElementById("login_div").style.display="none";
        var user = firebase.auth().currentUser;
        if(user!=null){
            var email_id=user.email;
            document.getElementById("user_para").innerHTML="welcome user : "+email_id;
        }

    } else {
        document.getElementById("user_div").style.display="none";
        document.getElementById("login_div").style.display="block";
    }
  });



function login(){
    //window.alert("ffrfr");


//window.alert(useremail + " " + userpass);

var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

  });

}



function logout(){
    firebase.auth().signOut();
}
