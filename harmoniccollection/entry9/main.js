const card = document.querySelector(".card_inner");
card.addEventListener("click",function(e){
	card.classList.toggle('is-flipped');
});

function showAlert() {
	alert('HAVE YOU FINISHED UPCOMING ASSIGNMENTS?!');
    }
