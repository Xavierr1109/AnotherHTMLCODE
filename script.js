const messages = [

"Hiii, I coded this on VSCode while thinking of you. 😊",

"I saw that you worked really hard on your project.",

"Imagine waking up the chickens just for UC Everyone Lmao.",

"Yahh but there's like a 2 week holiday incoming.",

"But you still got some Projects to do.",

"And that takes strength and effort.",

"I'm really proud of you for holding on for this long.",

"Please remember to be proud of yourself too.",

"Semangat yaa buat nugasnya selama liburan.",

"And no matter what happens next, you've already know what i am gonna say.",

"Can't be me yang ga ada tugas selama liburan AWKAOWKAOKWOAKOAWK. ❤️",

"Yeah but for realsies, Goodluck n semangat with ur projects and assignments. I know you can do it Christal! 💪"



];

let index = 0;

function nextMessage(){

if(index < messages.length){
document.getElementById("message").innerText = messages[index];
index++;
}

if(index === messages.length){
document.getElementById("heart").style.opacity = "1";
}

}


/* teddy bear rain */

function createTeddy(){

const teddy = document.createElement("div");
teddy.classList.add("teddy");
teddy.innerText = "🧸";

teddy.style.left = Math.random()*100 + "vw";
teddy.style.animationDuration = (Math.random()*3 + 4) + "s";
teddy.style.fontSize = (Math.random()*20 + 20) + "px";

document.querySelector(".teddy-container").appendChild(teddy);

setTimeout(()=>{
teddy.remove();
},7000);

}

const audio = document.getElementById("bgMusic");
const playBtn = document.getElementById("playBtn");
const progressBar = document.getElementById("progressBar");
const currentTimeText = document.getElementById("currentTime");
const durationText = document.getElementById("duration");
const player = document.getElementById("musicPlayer");

function toggleMusic(){

if(audio.paused){

audio.play();
playBtn.innerText = "⏸";

}else{

audio.pause();
playBtn.innerText = "▶";

}

}

function togglePlayer(){

player.classList.toggle("minimized");

}

audio.addEventListener("loadedmetadata", () => {

progressBar.max = Math.floor(audio.duration);
durationText.innerText = formatTime(audio.duration);

});

audio.addEventListener("timeupdate", () => {

progressBar.value = Math.floor(audio.currentTime);
currentTimeText.innerText = formatTime(audio.currentTime);

});

progressBar.addEventListener("input", () => {

audio.currentTime = progressBar.value;

});

function formatTime(time){

let minutes = Math.floor(time / 60);
let seconds = Math.floor(time % 60);

if(seconds < 10){
seconds = "0" + seconds;
}

return minutes + ":" + seconds;

}

const verses = [

{
quote: "Come to me, all who labor and are heavy laden, and I will give you rest.",
ref: "Matthew 11:28"
},

{
quote: "I can do all things through Him who strengthens me.",
ref: "Philippians 4:13"
},

{
quote: "Be strong and courageous. Do not be afraid; do not be discouraged.",
ref: "Joshua 1:9"
},

{
quote: "Cast all your anxiety on Him because He cares for you.",
ref: "1 Peter 5:7"
},

{
quote: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
ref: "Psalm 34:18"
},

{
quote: "For I know the plans I have for you, declares the Lord.",
ref: "Jeremiah 29:11"
},

{
quote: "Those who hope in the Lord will renew their strength.",
ref: "Isaiah 40:31"
}

];

function generateVerse(){

const random = verses[Math.floor(Math.random() * verses.length)];

document.getElementById("bibleQuote").innerText = '"' + random.quote + '"';
document.getElementById("bibleRef").innerText = random.ref;

}



setInterval(createTeddy,500);