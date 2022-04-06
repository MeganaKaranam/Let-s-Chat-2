
var firebaseConfig = {
      apiKey: "AIzaSyDI_3dmoJ5WZCwz1ARm9Ml0sDLdiTQTiis",
      authDomain: "kwitter-e2f2e.firebaseapp.com",
      databaseURL: "https://kwitter-e2f2e-default-rtdb.firebaseio.com",
      projectId: "kwitter-e2f2e",
      storageBucket: "kwitter-e2f2e.appspot.com",
      messagingSenderId: "393710673058",
      appId: "1:393710673058:web:54f885464d0fa5bfa00bfb"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("User_Name");
room_name=localStorage.getItem("room_name");

function Send(){

      MSG=document.getElementById("MSG").value;
      firebase.database().ref(room_name).push({

            name:user_name,
            message:MSG,
            like:0
      });
document.getElementById("MSG").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
