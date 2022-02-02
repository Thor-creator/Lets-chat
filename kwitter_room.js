
//ADD YOUR FIREBASE LINKS HERE

    
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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
