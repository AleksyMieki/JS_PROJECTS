const inputs = document.querySelectorAll("input");
const video = document.querySelector("video");
const buttons = document.querySelectorAll("button");
let isPlaying = false;

//video.play();

inputs.forEach(element => {
    console.log(element.value);
});

inputs[0].addEventListener("change", (e) => {
    video.volume = e.target.value;
})

inputs[1].addEventListener("change", (e) => {
    console.log(e.target.value);
    video.playbackRate = e.target.value;
})

buttons[0].addEventListener("click", () => {
    if(!isPlaying)
    {
    video.play();
    isPlaying = true;
    }
    else
    {
    video.pause();
    isPlaying = false;
    }
})

buttons[1].addEventListener("click", () => {
    if(video.currentTime - buttons[1].dataset.skip < 0)
    {
        video.currentTime += 0;
    }
    else{
    video.currentTime += Number(buttons[1].dataset.skip);
    }
})
buttons[2].addEventListener("click", () => {
    
    video.currentTime += Number(buttons[2].dataset.skip);
    
})