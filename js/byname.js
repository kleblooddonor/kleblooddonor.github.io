var txt;
var str1;
var str2;
var name;
var data;
var list=[];
var n1,n2,n3;
var string = ""
string = window.location.search;
// var url = "http://localhost:8000/web_html/examdata.txt";
var url = "examdata.txt";




/*--------------------------
        PRE LOADER GIF
        ----------------------------*/
        jQuery(window).on('load', function () {
        	"use strict";
        	
        	$(".preeloader").fadeOut(2000);


        });

// END OF PRELOADER


function preload(){

	txt = loadStrings(url);



}

function setup(){
	noCanvas();
	string = string.replace('?name=','');
	string = string.replace('+',' ');
	string = string.replace('+',' ');
	string = string.replace('+',' ');
	string = string.replace('+',' ');
	string = string.replace('+',' ');
	name = string.toUpperCase();
	list = [];

	for (var i=0;i<txt.length;i++){
		var str2 = "";
		str1 = "";

		str1 = txt[i].match(name);
		if(str1 == name)
		{
			str2 = txt[i-1].match("http://exam.m");
			if(str2 == "http://exam.m")
			{	
			append(list,txt[i]);
			// append(list,txt[i+1]);
			}
		}

	}



	if(list.length !=  0)
	{
		
		for (var k=0;k<list.length;k++)
		{
			var table = document.getElementById("mytable");
			var row = table.insertRow(k);
			var cell1 = row.insertCell(0);

			cell1.innerHTML = list[k];



		}
	}
	else
	{
		alert("No match found");
		window.open("exam.html","_self");
	}

}

var value;

$(document).ready(function(){

	$(document).on("click","#mytable tr",function(){

		$(this).addClass('selected').siblings().removeClass('selected');    
		var value=$(this).find('td:first').html();
		// alert(value);
		window.localStorage.setItem("id", value);
		window.open("display.html","_self");  

	});
});


