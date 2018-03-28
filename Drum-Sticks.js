window.addEventListener('keydown', function (e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	let Keys = document.querySelectorAll('.key');
	const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
			if(!audio) return;
			audio.currentTime = 0;
			audio.play();
			key.classList.add('playing');
			console.log("here");
			console.log(Keys);
	function removeTransition() {
		console.log('hereaaaaaaaa');
		this.classList.remove('playing');
    }
	Keys.forEach(function(Key){
		console.log("hereeee");
		console.log(Key);
		Key.addEventListener('transitionend', removeTransition)});
	console.log("here");

});
