
var imageCount = 1;
var total=5;
var description;

function slide(x){
	
		var image = document.getElementById('image');
		imageCount = imageCount +x;
		if(imageCount > total){imageCount = 1;}
		if(imageCount < 1){imageCount = total;}	
		image.src ="web/img"+imageCount+ ".jpg";
		image.onClick= describe();
}
var imageCount1 = 1;
var total1=5;
var descPost;

function posterSlide(x){
	
//var description;
		var posterImage = document.getElementById('poster-image');
		imageCount1 = imageCount1 +x;
		if(imageCount1 > total1){imageCount1 = 1;}
		if(imageCount1 < 1){imageCount1 = total1;}	
		posterImage.src ="posters/img"+ imageCount1+ ".jpg";
	posterImage.onClick=describePoster();
}

function describe()
	{
	description = document.getElementById('desc');
	switch(imageCount){
		case 1:
		description.innerHTML ="The design only using photoshop";
		break;
		case 2:
		description.innerHTML ="Made the design on photoshop and the development using html5, css3, and wordpress ";
		break;
		case 3:
		description.innerHTML ="The design only using photoshop";
		break;
		case 4:
		description.innerHTML ="Made the front end design using html5, css3 for a wordpress theme";
		break;
		case 5:
		description.innerHTML ="Made the wordpress them using html5, css3 and the wordpress development";
		break;
	}
	}
function describePoster()
	{
	descPost = document.getElementById('desc1');
	switch(imageCount1){
		case 1:
		descPost.innerHTML ="Photoshop";
		break;
		case 2:
		descPost.innerHTML ="Illustrator only";
		break;
		case 3:
		descPost.innerHTML ="Photoshop and Illustrator";
		break;
		case 4:
		descPost.innerHTML ="The cube is made on Illustrator and the design on Photoshop";
		break;
		case 5:
		descPost.innerHTML ="Photoshop and using my drawing pade for the lines";
		break;
	}
	}

	/*var ypos,image;
	function parallex() {
		image = document.getElementById('concat');
		ypos = window.pageYOffset;
		image.style.top = ypos * .2+ 'px';
	}
	window.addEventListener('scroll', parallex),false;
	*/
	$(document).ready(function(){
	/* This code is executed after the DOM has been completely loaded */

		$('nav a,footer a.up').click(function(e){

			// If a link has been clicked, scroll the page to the link's hash target:

			$.scrollTo( this.hash || 0, 2500);
			e.preventDefault();
		});

    });
