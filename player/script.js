const videoPlayer = document.querySelector('.video-player')
const video = videoPlayer.querySelector('.video')
const playButton = videoPlayer.querySelector('.play-pause')
const volume = videoPlayer.querySelector('.volume')
const currentTimeElement = videoPlayer.querySelector('.current')
const durationTimeElement = videoPlayer.querySelector('.duration')
const progress = videoPlayer.querySelector('.video-progress')
const progressBar = videoPlayer.querySelector('.video-progress-filled')

function togglePlayPause() {
	if(video.paused){
		playButton.className = "pause";
		video.play();
	} else {
		playButton.className = "play";
		video.pause();
	}
}

playButton.onclick = function(){
	togglePlayPause();
};

volume.addEventListener('mousemove', (e)=>{
	video.volume = e.target.value
})

const currentTime = () => {
	let currentMinutes = Math.floor(video.currentTime / 60)
	let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60)
	let durationMinutes = Math.floor(video.duration / 60)
	let durationSeconds = Math.floor(video.duration - durationMinutes * 60)
	
	currentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? '0' + currentSeconds : currentSeconds}`
	durationTimeElement.innerHTML=`${durationMinutes}:${durationSeconds}`
}

video.addEventListener('timeupdate', currentTime)

video.addEventListener('timeupdate', () =>{
	const percentege = (video.currentTime / video.duration) * 100
	progressBar.style.width = `${percentege}%`
})

progress.addEventListener('click', (e) => {
	const progressTime = (e.offsetX / progress.offsetWidth) * video.duration
	video.currentTime = progressTime
})

