console.log ("hello world")

window.onload = function(){
	var input =  document.querySelector(".input");
	var userText =  document.querySelector(".userText");
	var submit =  document.querySelector(".submit");
	var newOne =  document.querySelector(".newOne");
	var newStory = document.querySelector(".newStory")
	
	
	submit.addEventListener("click", function(anEvent){

		var userItem = document.createElement("p");

		document.getElementById('added').textContent = userItem;

		var newDoDo = userText.value;

		userText.value = "";

		userItem.innerHTML = newDoDo;

		newStory.appendChild(userItem);


		});

	};