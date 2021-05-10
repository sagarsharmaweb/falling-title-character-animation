window.addEventListener("load", function(){
	var nodes = document.querySelectorAll(".letters");
	for(let i=0; i<nodes.length; i++){
		let text = nodes[i].innerText;
		for(let i2=0; i2<text.length; i2++){
			if(text[i2] != " "){
				let node = document.createElement("span");
				node.style.left = (Math.random()*75)+"vw";
				node.style.animationDelay = i2+"s";
				node.innerText = text[i2];
				nodes[i].appendChild(node);
			}
		}
	}
});
