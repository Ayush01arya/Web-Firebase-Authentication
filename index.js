var firebaseConfig = {
    apiKey: "AIzaSyD0sjKzuCFJ3-UnrO9L7iBWngTTVUehLe4",
    authDomain: "new-firebase-login.firebaseapp.com",
    databaseURL: "https://new-firebase-login.firebaseio.com",
    projectId: "new-firebase-login",
    storageBucket: "new-firebase-login.appspot.com",
    messagingSenderId: "429523363131",
    appId: "1:429523363131:web:c641ef85424b2a653d831e",
    measurementId: "G-8NM4ZMPQ0V"
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