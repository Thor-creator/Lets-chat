const firebaseConfig = {
      apiKey: "AIzaSyDCc0F1cMLiq-aK_Ve6ynMS01RzWWU-xtk",
      authDomain: "let-s-chat-app-a705d.firebaseapp.com",
      databaseURL: "https://let-s-chat-app-a705d-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-app-a705d",
      storageBucket: "let-s-chat-app-a705d.appspot.com",
      messagingSenderId: "824085555579",
      appId: "1:824085555579:web:f5846cb1bbe57aa43975de"
  };
  
  // Initialize Firebase
  
    firebase.initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);
  
      room_name = localStorage.getItem("room_name")
      user_name = localStorage.getItem("user_name")
      function send(){
            msg = document.getElementById("msg").value   
            firebase.database().ref(room_name).push({
                  message : msg,
                  name : user_name,
                  like : 0
            });
            document.getElementById("msg").value = "";
      }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
