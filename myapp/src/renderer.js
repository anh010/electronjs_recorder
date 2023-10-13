
// buttons
const videoElement = document.querySelector('video');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const videoSelectionBtn = document.getElementById('videoSelectionBtn');

// imports
const { desktopCapturer } = require('electron');
// creating pop menu
const { Menu } = require('@electron/remote/main').enable;


videoSelectionBtn.onclick= getVideoSrcs();


// getting acess to all available screens
async function getVideoSrcs(){
    // method returns promise 
    console.log(desktopCapturer);
    const inputSources = await desktopCapturer.getSources({
        types:['window','screen']
    });

    const videoOptionsMenu = Menu.buildFromTemplate(
        inputSources.map(source =>{
            return{
                label:source.name,
                click: () => selectSource(source)
            };
        })
    );
    console.log(inputSources);
    videoOptionsMenu.popup();
}

async function selectSource(){

}