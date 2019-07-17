console.log ("hello world")

window.onload = function(){
	var input =  document.querySelector(".input");
	var userText =  document.querySelector(".userText");
	var submit =  document.querySelector(".submit");
	var newOne =  document.querySelector(".newOne");
	var newStory = document.querySelector(".newStory")
	



    	// var newStory = ["Build App", "Boogie",]

	
	submit.addEventListener("click", function(anEvent){

		userText.value = ""

		var userItem = document.createElement("p");
		// var newStory = userText.value;
		var write = document.createTextNode(newStory);
		newStory.innerHTML = userText.value;
		userItem.appendChild(newStory);

		

		// for (i=0; i<20; i++) {
		// 	if 
		// 	newOne.appendChild(userItem);
		});

		
        // var listItems = [first, second, third] 
		// userItem.innerHTML = newToDo + clicks




		 // if (clicks = 1){
			// document.querySelector(".first").innerHTML = newToDo
   //       	};


	};



//   function update(){

// 	var userItem = document.createElement("li");
//          	if (clicks = 1){
//          		newToDo.innerHTML = first
//          		newOne.appendChild(userItem);
//          	};
//          	if(clicks = 2){
//          		userItem.innerHTML = second
//          		newOne.appendChild(userItem);
//          	}
//          	if(clicks = 3){
//          		userItem.innerHTML = second
//          		newOne.appendChild(userItem);
//          	}
//             else {
//          		userItem.innerHTML = newToDo
// 				newOne.appendChild(userItem)
//          	}



		
// }
