$(document).ready(function() {
    //firebase api key for public use
    var config = {
        apiKey: "AIzaSyDkN9Zz6vNmEPhNjrMCd5MXc8tqHanvjpg",
        authDomain: "mycontactform-5cc65.firebaseapp.com",
        databaseURL: "https://mycontactform-5cc65.firebaseio.com",
        projectId: "mycontactform-5cc65",
        storageBucket: "mycontactform-5cc65.appspot.com",
        messagingSenderId: "424739524879"
    };
    firebase.initializeApp(config);
    //end api key
    //create firebase collection
    var messagesRef = firebase.database().ref('messages');
    //end collection
    document.getElementById("contactForm").addEventListener('submit', submitForm);

    function submitForm(e) {
        e.preventDefault();
        var name = getInputVal("name");
        var email = getInputVal("email");
        var message = getInputVal("message");
        saveMessage(name, email, message);
        console.log("Sent");

        document.querySelector(".alert").style.display = "block";

        setTimeout(function() {
            document.querySelector(".alert").style.display = "none";
        }, 3000);

        document.getElementById("contactForm").reset();
    }

    function getInputVal(id) {
        return document.getElementById(id).value;
    }

    function saveMessage(name, email, message) {
        //push data to collection
        var newMessageRef = messagesRef.push();
        //set data to object propertys in collection
        newMessageRef.set({
            name: name,
            email: email,
            message: message
        });
    }
})