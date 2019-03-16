
    var url1 = 'bday_updated.txt';
    ivar txt;
    function setup(){

      loadFile();

    }



    function loadFile(){
      loadStrings(url1,fileLoaded);
    }

    function fileLoaded(txt1){
      console.log(txt1);


    }
      var config = {
      apiKey: "AIzaSyCvLRwJ4PNd4joJKBjbe8458QLGuey1qYg",
      authDomain: "techmsrit1.firebaseapp.com",
      databaseURL: "https://techmsrit1.firebaseio.com",
      projectId: "techmsrit1",
      storageBucket: "techmsrit1.appspot.com",
      messagingSenderId: "193681871061"
    };
    firebase.initializeApp(config);

    var name = 'John';

    var url = "users/"+name;
    var ref = firebase.database().ref(url);


    var usn ="";
    
    ref.on("value", function(data,txt1) 

    {
     console.log(data.val());

     var stud = data.val();
     usn = stud.usn;

     usn = usn.split("/");
console.log(txt1);

var count=1;
for(var i=0;i<usn.length;i++)
{
  var table = document.getElementById("mytable");
  var row = table.insertRow(count);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);

  cell1.innerHTML = usn[i];
  cell2.innerHTML = usn[i]+'hey';
  count = count+1;


}



  




}, function (error) {
 console.log("Error: " + error.code);
});


    // Initialize Firebase
    

    // console.log("usn:" + usn);
    


