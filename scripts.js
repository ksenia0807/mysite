function readMore3(){
	var p3 = document.getElementById("p3");
	var more3 = document.getElementById("more3");
	var btn3 = document.getElementById("btn3");
	
		if(p3.style.display === "none"){
		p3.style.display = "inline";
		more3.style.display = "none";
		btn3.innerHTML = "подробнее о курсе »";
	}
	else{
		p3.style.display = "none";
		more3.style.display = "inline";
		btn3.innerHTML = "скрыть «";
	}
}

function readMore4(){
	var p4 = document.getElementById("p4");
	var more4 = document.getElementById("more4");
	var btn4 = document.getElementById("btn4");
	
	if(p4.style.display === "none"){
		p4.style.display = "inline";
		more4.style.display = "none";
		btn4.innerHTML = "подробнее о курсе »";
	}
	else{
		p4.style.display = "none";
		more4.style.display = "inline";
		btn4.innerHTML = "скрыть «";
	}
}

function readMore1(){
	var p1 = document.getElementById("p1");
	var more1 = document.getElementById("more1");
	var btn1 = document.getElementById("btn1");
	
	if(p1.style.display === "none"){
		p1.style.display = "inline";
		more1.style.display = "none";
		btn1.innerHTML = "подробнее о курсе »";
	}
	else{
		p1.style.display = "none";
		more1.style.display = "inline";
		btn1.innerHTML = "скрыть «";
	}
}

function readMore2(){
	var p2 = document.getElementById("p2");
	var more2 = document.getElementById("more2");
	var btn2 = document.getElementById("btn2");
	
	if(p2.style.display === "none"){
		p2.style.display = "inline";
		more2.style.display = "none";
		btn2.innerHTML = "подробнее о курсе »";
	}
	else{
		p2.style.display = "none";
		more2.style.display = "inline";
		btn2.innerHTML = "скрыть «";
	}
}



/* $(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

}); */