window.onload = function(){

	function storTyme (){
		var XHR = new XMLHttpRequest();

		xhr.open('GET', 'url');
		xhr.onreadystatechange = function(){
			if (xhr.status = 200) && (xhr.readystate = 4){

				eval(xhr.responseText);
				writeStory();
			}
		};

		xhr.send();

		function writeStory(){
			var addition = url.newAdiition

			var novel = document.createElement(responseText)


			ourStory.src = addition
			novel.innerHTML = 
			// var userName = url.addUser


			novel.appendChild(addition);
			document.body.appendChild(novel);
		}

	}



}