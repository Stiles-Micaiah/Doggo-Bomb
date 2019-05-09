var dog ={
name: "One Sneezy Boi",
petCount: 0,
tolerance: 2,
mood: 0,
moodDisplay: ['Moderate','Elevated',  'Hide The Kids','Lock The Doors', 'RUN'],
display: ['assets/lvl01.jpg', 'assets/lvl02.jpg', 'assets/lvl03.jpg', 'assets/lvl04.jpg', 'assets/lvl05.jpg', '/assets/OneSneezyBoi(Headphone Warning)_Trim.mp4']
}


function instigation() {
dog.petCount++
if (dog.petCount % dog.tolerance == 0) {
  dog.mood++
}


drawImg()

}





function drawImg() {
document.getElementById("petCount").innerText = dog.petCount
      dog.mood == dog.moodDisplay.length ? document.getElementById('mainContent').innerHTML = '<video autoplay src="assets/OneSneezyBoi(HeadphoneWarning)_Trim.mp4"></video>' : document.getElementById('mainImg').setAttribute('src', dog.display[dog.mood])


document.getElementById('dangerLvl').innerText = dog.moodDisplay[dog.mood]

dog.mood == dog.moodDisplay.length  ? document.getElementById('instigate').disabled = true : document.getElementById('instigate').disabled = false
}


function reset() {
  dog.mood = 0
  dog.petCount = 0
  document.getElementById('mainContent').innerHTML = '<img id="mainImg" src="assets/lvl01.jpg" alt="scream and run now">'
  drawImg()
}