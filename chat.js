// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";

    var firebaseConfig = {
        apiKey: "AIzaSyAvnBZMnBLgyYCRv_fnx89VP5X5KwPXzOU",
        authDomain: "lets-s-chat-1.firebaseapp.com",
        databaseURL: "https://lets-s-chat-1-default-rtdb.firebaseio.com",
        projectId: "lets-s-chat-1",
        storageBucket: "lets-s-chat-1.appspot.com",
        messagingSenderId: "1053023144949",
        appId: "1:1053023144949:web:8926a068af2eba4c636ebc"
      };
      
}



