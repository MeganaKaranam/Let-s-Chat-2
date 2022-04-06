
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
   document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
   
function add_room(){
      room_name=document.getElementById("Room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Hello Welcome To My App"
      });
      localStorage.setItem("room_name",room_name);
      window.location="Kwitter_page.html"
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room_name:"+Room_names)
row="<div class='room_name' id="+Room_names+"onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row
      //End code
      });});}
getData();

function redirect(name){
      console.log(name)
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html"
}
