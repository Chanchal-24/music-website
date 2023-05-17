console.log("WELCOME TO SPOTIFY");
let saibo= new Audio("saibo.mp3");
// console.log(saibo);
let buddhu=new Audio("BuddhuSaMann.mp3");
let ik=new Audio("IkVaariAa.mp3");
let khairiyat=new Audio("Khairiyat.mp3");
let Ek=new Audio("Ek Jindari.mp3");
let raabta=new Audio("Raabta.mp3");
let raataan=new Audio("Raataan Lambiyan.mp3");
let yaari=new Audio("Yaari.mp3");
let sooraj=new Audio("Sooraj Dooba Hain.mp3");
let vaste=new Audio("Vaaste.mp3");
// console.log(songplay);
// console.log(i1);
let progressbar=document.getElementsByClassName("progressbar");
console.log(progressbar);
let butt2=document.getElementsByClassName("butt2");
let playbutton1=document.getElementById("playbutton");
let backbutton=document.getElementById("backbutton");
let forwardbutton=document.getElementById("forwardbutton");

let i0=document.getElementById("i0");
let i1=document.getElementById("i1");
let i2=document.getElementById("i2");
let i3=document.getElementById("i3");
let i4=document.getElementById("i4");
let i5=document.getElementById("i5");
let i6=document.getElementById("i6");
let i7=document.getElementById("i7");
let i8=document.getElementById("i8");
let i9=document.getElementById("i9");

// console.log(i0);

let songplay=[{first:"i0",second:saibo},{first:"i1",second:buddhu},{first:"i2",second:ik},{first:"i3",second:khairiyat},{first:"i4",second:Ek},{first:"i5",second:raabta},{first:"i6",second:raataan},{first:"i7",second:yaari},{first:"i8",second:sooraj},{first:"i9",second:vaste}];

let currentsong;
let idname;
let index;
// console.log(backbutton);
// songplay.forEach((element,i)=>{
//     console.log(element,i);
// })
// Array.from(backbutton).forEach(element => {
//     console.log(element);
//     element.addEventListener('click',()=>{
//         Array.from(progressbar).forEach((e)=>{
//             e.value='0';
//         })
//         let i=songplay.indexOf(element);
//         console.log(i);
//         songplay[i-1].play();
//     });
// });
function convertplay(){
    Array.from(butt2).forEach(element=>{
        element.src="circle-play-solid.svg";
    })
    playbutton1.src="circle-play-solid.svg";
}

function currentsongstop(){
    Array.from(songplay).forEach((e)=>{
        let stopsong= e.second;
        stopsong.pause();
    })
}
// -----function for finding current song-------------------------------------------------------------------------
function findcurrentsong(element){
    let idname=element.id;
    // console.log(idname);
    let index= songplay.findIndex(Object=>{
        // console.log(Object.first);
        return Object.first==idname;
    });
    // console.log(index);
    console.log(songplay[index].second);
    let currentsong= new Audio(songplay[index].second);
    // console.log(currentsong);
    return currentsong;
}
// ---------------------------------------------------------------------------
backbutton.addEventListener('click',(e)=>{
    // console.log(backbutton);
    if(index!=0){
        index=index-1;
        idname=songplay[index].first;
        // console.log(idname);
        
        // idname.src="circle-pause-solid.svg";
        currentsongstop();
        convertplay();
        if(currentsong.paused){
            currentsong=songplay[index].second;
            songplay[index].second.play();
            const idname1=document.getElementsByClassName("butt2")[index];
            // console.log("idname1 is printed");
            // console.log(idname1);
            // let idname2=document.getElementById("idname1");
            // console.log("idname1 is printed");
            // console.log(idname2);
            idname1.src="circle-pause-solid.svg";
            playbutton1.src="circle-pause-solid.svg";
            currentsong.currentTime=0;
        }
        else{

        }
    }
    else if(index==0){
        index=index+9;
        idname=songplay[index].first;
        currentsongstop();
        convertplay();
        if(currentsong.paused){
            currentsong=songplay[index].second;
            songplay[index].second.play();
            const idname1=document.getElementsByClassName("butt2")[index];
            // console.log("idname1 is printed");
            // console.log(idname1);
            // let idname2=document.getElementById("idname1");
            // console.log("idname1 is printed");
            // console.log(idname2);
            idname1.src="circle-pause-solid.svg";
            playbutton1.src="circle-pause-solid.svg";
            currentsong.currentTime=0;
        }
    }
    currentsong.addEventListener('timeupdate',()=>{
        console.log('timeupdate');
        progress=parseInt((currentsong.currentTime/currentsong.duration)*100);
        // console.log(playsong.play());
        // console.log(progress);
        // progressbar.value=progress;
        Array.from(progressbar).forEach(element => {
            element.value=progress;
        });
    })
})


// -------------------------------------------------------------------------
// console.log(playbutton1);
// Array.from(playbutton1).forEach(element => {
//     element.addEventListener('click',function playmusic(){
//         saibo.play();
//     })
// });
// playbutton1.getElementsByTagName("img").src="circle-play-solid.svg"



// console.log(playbutton1.classList);
forwardbutton.addEventListener('click',(e)=>{
    // console.log(backbutton);
    if(index!=9){
        index=index+1;
        idname=songplay[index].first;
        // console.log(idname);
        
        // idname.src="circle-pause-solid.svg";
        currentsongstop();
        convertplay();
        if(currentsong.paused){
            currentsong=songplay[index].second;
            songplay[index].second.play();
            const idname1=document.getElementsByClassName("butt2")[index];
            // console.log("idname1 is printed");
            // console.log(idname1);
            // let idname2=document.getElementById("idname1");
            // console.log("idname1 is printed");
            // console.log(idname2);
            idname1.src="circle-pause-solid.svg";
            playbutton1.src="circle-pause-solid.svg";
            currentsong.currentTime=0;
        }
        else{

        }
    }
    else if(index==9){
        index=0;
        idname=songplay[index].first;
        currentsongstop();
        convertplay();
        if(currentsong.paused){
            currentsong=songplay[index].second;
            songplay[index].second.play();
            const idname1=document.getElementsByClassName("butt2")[index];
            // console.log("idname1 is printed");
            // console.log(idname1);
            // let idname2=document.getElementById("idname1");
            // console.log("idname1 is printed");
            // console.log(idname2);
            idname1.src="circle-pause-solid.svg";
            playbutton1.src="circle-pause-solid.svg";
            currentsong.currentTime=0;
        }
    }
    currentsong.addEventListener('timeupdate',()=>{
        console.log('timeupdate');
        progress=parseInt((currentsong.currentTime/currentsong.duration)*100);
        // console.log(playsong.play());
        // console.log(progress);
        // progressbar.value=progress;
        Array.from(progressbar).forEach(element => {
            element.value=progress;
        });
    })
})
// --------------------------------------------------------------------------------------------------------------------------
playbutton1.addEventListener('click',function playmusic(){
   if(currentsong.paused || currentsong.currentTime<=0){
    currentsong.play();
    playbutton1.src="circle-pause-solid.svg";
    // element.src="circle-pause-solid.svg";
   }
   else{
            currentsong.pause();
            playbutton1.src="circle-play-solid.svg";
            // element.src="circle-play-solid.svg";
   }
})

// console.log(butt2);
// ------------------------------------------------------------------------------------------------------------------------------
Array.from(butt2).forEach(element => {
    // console.log(element);
    // console.log("progressbar is running");
    element.addEventListener('click',(e)=>{
        idname=element.id;
        // console.log(idname);
        index= songplay.findIndex(Object=>{
            // console.log(Object.first);
            return Object.first==idname;
        });
        // console.log(index);
        // console.log(songplay[index].second);
        currentsong= (songplay[index].second);
        // console.log("song is played");
        // console.log(currentsong);
        
        if(currentsong.paused || currentsong.currentTime<=0){
            currentsongstop();
            convertplay();
            // e.target.src="circle-pause-solid.svg";
            currentsong.play();
            playbutton1.src="circle-pause-solid.svg";
            element.src="circle-pause-solid.svg";
            currentsong.currentTime=0;
        }
        else{
            // convertplay();
            currentsong.pause();
            playbutton1.src="circle-play-solid.svg";
            element.src="circle-play-solid.svg";
            // e.target.src="circle-play-solid.svg";
            currentsong.currentTime=0;
        }
        currentsong.addEventListener('timeupdate',()=>{
            
            console.log('timeupdate');
            progress=parseInt((currentsong.currentTime/currentsong.duration)*100);
            // console.log(playsong.play());
            // console.log(progress);
            // progressbar.value=progress;
            Array.from(progressbar).forEach(element => {
                element.value=progress;
            });
        }) 
    })
});

// let link1=document.getElementsByClassName("spotifylogo");
// console.log(link1);
// Array.from(link1).forEach(element => {
//     element.addEventListener('click',function playmusic(){
//         saibo.play();
//     })
// });



// updationn of progressbar-----------------------------------------------------


// 100*ct/d=p;
// ct=pd/100
// console.log(progressbar);
// console.log("currentsong is playing");
// console.log(currentsong);
// saibo.addEventListener('timeupdate',()=>{
//     console.log('timeupdate');
//     progress=parseInt((saibo.currentTime/saibo.duration)*100);
//     // console.log(playsong.play());
//     // console.log(progress);
//     // progressbar.value=progress;
//     Array.from(progressbar).forEach(element => {
//         element.value=progress;
//     });
// })
// Array.from(butt2).forEach(element => {
//     element.addEventListener('click',()=>{
//         currentsong.addEventListener('timeupdate',()=>{
//             console.log('timeupdate');
//             progress=parseInt((currentsong.currentTime/currentsong.duration)*100);
//             // console.log(playsong.play());
//             // console.log(progress);
//             // progressbar.value=progress;
//             Array.from(progressbar).forEach(element => {
//                 element.value=progress;
//             });
//         })

//     })
// });

Array.from(progressbar).forEach(element => {
    element.addEventListener('change',()=>{
        currentsong.currentTime=element.value*currentsong.duration/100;
    })
});

