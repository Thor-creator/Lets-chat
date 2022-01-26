
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyDDBn6b-gkpIzOcXGL_S35t5SijpiA8iVI",
      authDomain: "kwitter-2c7e9.firebaseapp.com",
      databaseURL: "https://kwitter-2c7e9-default-rtdb.firebaseio.com",
      projectId: "kwitter-2c7e9",
      storageBucket: "kwitter-2c7e9.appspot.com",
      messagingSenderId: "262172180721",
      appId: "1:262172180721:web:44c22e5a266e9774b6a950",
      measurementId: "G-E2CNGV1WHX"
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
