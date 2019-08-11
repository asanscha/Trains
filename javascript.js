var config = {
    apiKey: "",
    authDomain: "m",
    databaseURL: "https://"       ".firebaseio.com",
    storageBucket: "      .appspot.com"
  };
  
  firebase.initializeApp(config);
  
  var database = firebase.database();
  
  $("#add-employee-btn").on("click", function(event) {
    event.preventDefault();
  
    var trainName = $("#train-name-input").val().trim();
    var trainDest = $("#destination-input").val().trim();
    var frequency = $("#time-input").val().trim();
    var arrival = $("#rate-input").val().trim();
  
    var newTrain = {
      name: empName,
      role: empRole,
      start: empStart,
      rate: empRate
    };
  
    database.ref().push(newTrain);

    
  })