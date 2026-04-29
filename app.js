var fplayeri;

const AgeGate = {
    i18n: {
        pt: {
            title: "Conteúdo Restrito",
            msg: "Este site contém material destinado exclusivamente a adultos.",
            terms: `
                <h3>Termos de Uso</h3>
                <p>Ao clicar em confirmar, você declara estar ciente de:</p>
                <ul>
                    <li>Possuir 18 anos ou mais de idade.</li>
                    <li>O conteúdo é de natureza adulta e explícita.</li>
                    <li>A responsabilidade de acesso em locais públicos ou perto de menores é sua.</li>
                </ul>`,
            confirm: "Sou maior de idade",
            exit: "Sair",
        },
        en: {
            title: "Restricted Content",
            msg: "This website contains material intended for adults only.",
            terms: `
                <h3>Terms of Use</h3>
                <p>By clicking confirm, you declare that:</p>
                <ul>
                    <li>You are 18 years of age or older.</li>
                    <li>The content is of an adult and explicit nature.</li>
                    <li>Access responsibility near minors is entirely yours.</li>
                </ul>`,
            confirm: "I am 18 or older",
            exit: "Exit",
        }
    },

    init: function(lang = 'pt', onAccept, onDeny) {
        if (localStorage.getItem('isAdultUser') === 'true') {
            if(onAccept) onAccept();
            return;
        }

        const text = this.i18n[lang] || this.i18n['pt'];
        this.injectStyles();
        this.renderModal(text, onAccept, onDeny);
    },

    injectStyles: function() {
        if (document.getElementById('age-gate-styles')) return;
        const style = document.createElement('style');
        style.id = 'age-gate-styles';
        style.textContent = `
            #age-gate-wrapper {
                position: fixed; top: 0; left: 0; bottom:0; right:0;  width: 100%; height: 100%;
                background: rgba(0,0,0,0.85); backdrop-filter: blur(20px);
                z-index: 999999; display: flex; align-items: center; justify-content: center;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            }
            .age-gate-card {
                background: #121212; color: white; padding: 30px; border-radius: 20px;
                width: 90%; height: 100%;  text-align: center; border: 1px solid #333;  overflow: auto;
                box-shadow: 0 20px 50px rgba(0,0,0,0.5);
            }
            .age-gate-card h2 { color: #e74c3c; margin-top: 0; }
            .age-gate-terms {
                text-align: left; background: #1e1e1e; padding: 15px;
                border-radius: 10px; font-size: 0.85rem; color: #bbb;
                margin: 20px 0; max-height: 150px; overflow-y: auto; border: 1px solid #222;
            }
            .age-gate-btns { display: flex; flex-direction: column; gap: 10px; }
            .btn-age-accept {
                background: #e74c3c; color: white; border: none; padding: 15px;
                border-radius: 10px; font-weight: bold; cursor: pointer; transition: 0.2s;
            }
            .btn-age-accept:hover { background: #c0392b; transform: translateY(-2px); }
            .btn-age-deny {
                 background: transparent; color: #777; border: none; cursor: pointer; text-decoration: underline;
            }
            body.age-gate-active { overflow: hidden; }
        `;
        document.head.appendChild(style);
    },

    renderModal: function(text, onAccept, onDeny) {
        document.body.classList.add('age-gate-active');
        const overlay = document.createElement('div');
        overlay.id = 'age-gate-wrapper';

        overlay.innerHTML = `
            <div class="age-gate-card">  <br/><br/>
                <h2>${text.title}</h2>
                <p>${text.msg}</p>
                <div class="age-gate-terms">${text.terms}</div>
                <div class="age-gate-btns">
                   <button class="btn-age-accept" id="age-accept">${text.confirm}</button>
                    <button class="btn-age-deny" id="age-deny">${text.exit}</button>
                </div>
            <br/><br/>  </div>
        `;

        document.body.appendChild(overlay);

       
        document.getElementById('age-accept').onclick = () => {
            localStorage.setItem('isAdultUser', 'true');
            overlay.remove();
            document.body.classList.remove('age-gate-active');
            if (onAccept) onAccept();
        };

        document.getElementById('age-deny').onclick = () => {
            if (onDeny) onDeny();
            else window.location.href = "https://google.com";
        };
    }
};


function fcarregarTudo(listaRecursos) {   if(listaRecursos){
    listaRecursos.forEach(item => {
        const destinoStr = item.destino; 
        const tag = item.tag;           
        const atributos = item.atributos; 
        const elementoPai = document.getElementsByTagName(destinoStr)[0];
        if (!elementoPai) {            return;        }
        const elemento = document.createElement(tag);
        for (const chave in atributos) {
            if (atributos.hasOwnProperty(chave)) {                elemento.setAttribute(chave, atributos[chave]);            }
        }
        elementoPai.appendChild(elemento);
    });     }
}



function stringno_valtext(id,g) {   if (id == null || id === "" || id === "undefined") {     return g;    }    return id;   }


function onstart_fplay(fplayeri, time, starr, tid){ 
const mainVideotime = document.getElementById('vidlist_'+tid); 

fplayeri.OnEvents("exitfullscreen",function(){      fplayeri.OSD({ duration:3e3, position:"absolute", text: 'Exiting FullScreen', pos: "top-center", showAction: false,  actionText: "", width: 'auto'   });  }); 
fplayeri.OnEvents("fullscreen",function(){      fplayeri.OSD({ duration:3e3, position:"absolute", text: 'FullScreen', pos: "top-center", showAction: false,  actionText: "", width: 'auto'    });      });

fplayeri.OnEvents("unmute",function(){      fplayeri.OSD({ duration:3e3, text: 'Active Sound', position:"absolute", pos: "top-center", showAction: false,  actionText: "", width: 'auto'    });      });
fplayeri.OnEvents("mute",function(){     fplayeri.OSD({ duration:3e3, text: 'Muted', position:"absolute", pos: "top-center", showAction: false,  actionText: "", width: 'auto'    });      });

fplayeri.OnEvents("pause",function(){     fplayeri.OSD({ duration:3e3, text: 'Paused', position:"absolute", pos: "top-center", showAction: false,  actionText: "", width: '120'    });      });
fplayeri.OnEvents("stop",function(){     fplayeri.OSD({ duration:3e3, text: 'Stopped', position:"absolute", pos: "top-center", showAction: false,  actionText: "", width: '120'    });      });
fplayeri.OnEvents("play",function(){     fplayeri.OSD({ duration:3e3, text: 'Reproducing', position:"absolute", pos: "top-center", showAction: false,  actionText: "", width: '180'    });      });


fplayeri.OnEvents("start",function(){

});

fplayeri.OnEvents("metadata",function(){
if(tid){    if(mainVideotime){  if(mainVideotime.innerHTML==""+convertSecondsDurationto(0) || mainVideotime.innerHTML==""){  mainVideotime.innerHTML=""+convertSecondsDurationto(Number(stringno_valtext(fplayeri.api("duration"),"0")));   }  }  }
});

fplayeri.OnEvents("init",function(){
fplayeri.api("unmute");

fplayeri.api('seek',Number(stringno_valtext(time,"0")));

fplayeri.OnEvents("end",function(){      fplayeri.OSD({ duration:3e3, position:"absolute", text: 'Finishing', pos: osdposito, showAction: false,  actionText: "", width: '180px'    });      });

fplayeri.OnEvents("volume",function(){     fplayeri.OSD({ duration:3e3, position:"absolute", text: 'Volume: '+Math.floor(fplayeri.api("volume")*100)+"%", pos: "top-center", showAction: false,  actionText: "", width: 'auto'    });      });
  
fplayeri.OnEvents("finish",function(){       fplayeri.OSD({ duration:3e3, position:"absolute", text: 'Finished', pos: "top-center", showAction: false,  actionText: "", width: '180px'    });      });

fplayeri.OnEvents("seek",function(){      fplayeri.OSD({ duration:3e3, position:"absolute", text: ''+convertSecondsDurationto(fplayeri.api("time")), pos: "top-center", showAction: false,  actionText: "", width: '180px'   });      });

fplayeri.OnEvents("userseek",function(){      fplayeri.OSD({ duration:3e3, position:"absolute", text: ''+convertSecondsDurationto(fplayeri.api("time")), pos: "top-center", showAction: false,  actionText: "", width: '180px'   });      });

fplayeri.OnEvents("speed",function(){       fplayeri.OSD({ duration:3e3, text: 'Speed: '+fplayeri.api("speed"), position:"absolute", pos: "top-center", showAction: false,  actionText: "", width: 'auto'     });       });

});

}


function is_messageadd(txt,icon){   return '<div class="md-info"><br/>'+stringno_valtext(icon,"")+'<br/><p>'+stringno_valtext(txt,"")+'</p><br/><br/><br/></div>';  }



function onstart_file(run_file){   
var playlistData = [];   
           
  var acssr = document.getElementById('cutompll');   
  var acssr_cover = document.querySelector('.logo img');
  
        const controlsbtns = document.getElementById('ctbtnss');
    
        const mainVideo = document.getElementById('main-video');
        const mainVtha = document.getElementById('infotime');
        const videoTitle = document.getElementById('video-title');
        const videoDescription = document.getElementById('video-description');
        const playlistContainer = document.getElementById('playlist');
        const playlistTotal = document.getElementById('playlisttotal');
        const pfielidtile = document.getElementById('titlemfpf');


  
function changeVideo(playlistData,videoId) {
    const video = playlistData.find(v => v.id === videoId);
       if (!video) return;
  
 if(playlistData.length>=2){
function prevVideo() {
let newIndex = videoId - 1;
if (newIndex <= 0) {  newIndex = playlistData.length;   }
 changeVideo(playlistData, newIndex);
}
function nextVideo() {
let newIndex = videoId + 1;
if (newIndex >= playlistData.length + 1) {  newIndex = 1;    }
 changeVideo(playlistData, newIndex);
}

  if(getfvald_ddfffle=="1"){

var btenvoltr='<button class="control-btn secondary" id="prevVideo">Prev</button>';
var btenproxim='<button class="control-btn secondary" id="nextVideo">Next</button>';

if (videoId <= 1) {  btenvoltr='';  }
if (videoId >= playlistData.length) {  btenproxim='';  }


controlsbtns.innerHTML = btenvoltr+'   '+btenproxim+'   ';
   
        const conprevVideosbtns = document.getElementById('prevVideo');
        const conpnextVideobtns = document.getElementById('nextVideo');
        if(conprevVideosbtns){   conprevVideosbtns.addEventListener('click', prevVideo);  }
        if(conpnextVideobtns){  conpnextVideobtns.addEventListener('click', nextVideo);   } 
  }
  }
  
//mainVideo.src = `https://player.fcasfs-of.cloud-fs.net/${run_file().player_lang}?fileID=${getfval_tyget}&fileView=true&pos=0&fileSelect=${video.videoId}`;

var playernoprib=1;
if(run_file().fl_priv==true){  playernoprib=0;  }

mainVideo.innerHTML=is_messageadd("It is not possible to access the File because it is Private.",'<img src="https://fcasfs-of.cloud-fs.net/player/fl_lock.png"/>');

if(playernoprib==1){
mainVideo.innerHTML='';

//if(fplayeri){  fplayeri.api("destroy");  }


var configpllof = { OSD:run_file().player_osd, id:"main-video", customtext:{age:""}, config:run_file().config, nocontrols:0, autoplay:0, loop:0, title:""+video.title, file: playlistData, poster:"", player:1, "embed":`https://player.fcasfs-of.cloud-fs.net/${run_file().player_lang}?fileID=${getfval_tyget}&fileView=true&pos=${getfvald_tygetslpose}&fileSelect=${video.id}`,"url":`https://player.fcasfs-of.cloud-fs.net/${run_file().player_lang}?fileID=${getfval_tyget}&fileView=true&pos=${getfvald_tygetslpose}&fileSelect=${video.id}`, plstart:""+video.id  };

if(getfvald_ddfffle=="1"){
configpllof = { OSD:run_file().player_osd, id:"main-video", customtext:{age:""}, config:run_file().config, nocontrols:0, autoplay:0, loop:0, title:""+video.title, file:""+video.file, poster:""+video.thumb, player:1, casturl:""+video.file, castname:""+video.title,"embed":`https://player.fcasfs-of.cloud-fs.net/${run_file().player_lang}?fileID=${getfval_tyget}&fileView=true&pos=${getfvald_tygetslpose}&fileSelect=${video.id}`,"url":`https://player.fcasfs-of.cloud-fs.net/${run_file().player_lang}?fileID=${getfval_tyget}&fileView=true&pos=${getfvald_tygetslpose}&fileSelect=${video.id}`  };
}

fplayeri = fs_Playerjs(configpllof);
if(video.filetl!="" && video.title!=""){   fplayeri.Toast("info",video.filetl,video.title);  }
onstart_fplay(fplayeri, getfvald_tygetslpose, getfvald_ddfffle,video.id);  }
            
            videoTitle.innerHTML = video.title;

if(video.title==""){   
fplayeri.OnEvents("init",function(){    
const mainVideddotime = document.getElementById('tvidlist_'+video.id);
const maindVideddoposte = document.getElementById('ividlistm_'+video.id);


if(mainVideddotime){  if(mainVideddotime.innerHTML=="undefined" || mainVideddotime.innerHTML=="" || mainVideddotime.innerHTML=="Tech: Player"){  videoTitle.innerHTML=""+fplayeri.api("title");  mainVideddotime.innerHTML=""+fplayeri.api("title");  }  } 


fplayeri.OnEvents("metadata",function(){      if(mainVideddotime){  if(mainVideddotime.innerHTML=="undefined" || mainVideddotime.innerHTML=="" || mainVideddotime.innerHTML=="Tech: Player"){  videoTitle.innerHTML=""+fplayeri.api("title");  mainVideddotime.innerHTML=""+fplayeri.api("title");  }  }  });   

fplayeri.OnEvents("start",function(){     if(mainVideddotime){  if(mainVideddotime.innerHTML=="undefined" || mainVideddotime.innerHTML=="" || mainVideddotime.innerHTML=="Tech: Player"){  videoTitle.innerHTML=""+fplayeri.api("title");  mainVideddotime.innerHTML=""+fplayeri.api("title");  }  }  });   

}); 
}

            videoDescription.innerHTML = video.description;
            
            playlistData.forEach(v => v.active = v.id === videoId);
            
            document.querySelectorAll('.playlist-item').forEach(item => {
                if (parseInt(item.dataset.id) === videoId) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
            
            if (window.innerWidth < 992) {
                document.querySelector('.video-section').scrollIntoView({ behavior: 'smooth' });
            }
}

  
function loadPlaylist(playlistData) {
            playlistContainer.innerHTML = '';
            playlistTotal.innerHTML = '';
            controlsbtns.innerHTML = '';
  
            playlistData.forEach(video => {
                const playlistItem = document.createElement('div');
                playlistItem.className = `playlist-item ${video.active ? 'active' : ''}`;
                playlistItem.dataset.id = video.id;
                
                playlistItem.innerHTML = `
                    <div class="playlist-item-thumb">
                        <img src="${video.thumb}" alt="${video.title}" id="ividlistm_${video.id}">
                    </div>
                    <div class="playlist-item-info">
                        <h3 class="playlist-item-title" id="tvidlist_${video.id}">${video.title}</h3>
                        <p class="playlist-item-duration" id="vidlist_${video.id}"></p>
                    </div>
                `;
                
                playlistItem.addEventListener('click', () => changeVideo(playlistData,video.id));
                playlistContainer.appendChild(playlistItem);

                if(video.active==true){  changeVideo(playlistData,video.id);  }
            });
            
            var playlistItemsd="";  if(playlistData.length>=2){  playlistItemsd="s";  }
             playlistTotal.innerHTML = playlistData.length+' Video'+playlistItemsd;
  
}
            

   
  if(typeof run_file=='function'){  

var stillist="  .playlist-section {  display:none;  }   ";
if(getfvald_ddfffle=="1"){
stillist="";
}

    var sryrkk="<style> "+stillist+" .markdown-body blockquote #mpd, #mpd { color:#000;  }   body img{ pointer-events:none; } </style>";  
    if(run_file().pg_dark==true){  
      sryrkk="<style> "+stillist+" .markdown-body blockquote #mpd, #mpd { color:#fff;  }  body, body img, .markdown-body div, .markdown-body blockquote, .markdown-body h3, .markdown-body h3 a { color:#fff; background:#111; }  .markdown-body h2 img, .markdown-body h2{   color:#fff;  background:#111;  background-color:#111;   } body img{ pointer-events:none; }  </style>";  
    }  

    acssr.innerHTML=sryrkk;  
    document.title='Player: '+run_file().file_title+' - '+document.title;  
    videoDescription.innerHTML=run_file().file_desc;  
    pfielidtile.innerHTML='Media Player';  
    mainVtha.innerHTML=''+run_file().file_title+'';
 if(run_file().cover!=""){    acssr_cover.src = `${run_file().cover}`;    acssr_cover.style.width="160px";  acssr_cover.style.borderRadius = "20px";   }
    var linkfroplauemd="https://fcasfs-of.cloud-fs.net/player/?fileID="+getfval_tyget+"";   
    var linkfrarromd="https://player.fcasfs-of.cloud-fs.net/"+run_file().player_lang+"?fileID="+getfval_tyget+"&fileView=true";  
    var linkfromd="https://player.fcasfs-of.cloud-fs.net/"+run_file().player_lang+"?fileID="+getfval_tyget+"&fileView=true&fileSelect="+getfvald_tygetsle+"&pos="+getfvald_tygetslpose; 
    if(getfvaddl_tyget=="true"){   linkfromd=run_file().cover;   }  
    
  var checjfdk=false;   var checjfdksd=parseInt(getfvald_tygetsle)-1;
   if(checjfdksd>run_file().list.length){  checjfdksd=0;  }
  if(checjfdksd<0){  checjfdksd=0;  }
             
   for(var j=0; j<run_file().list.length; j++){
    checjfdk=false;  if(j==checjfdksd){   checjfdk=true;  }

var itenslifffd={ id:""+j+1, filetl: run_file().file_title, title: run_file().list[j].title, file: run_file().list[j].file, description: run_file().file_desc, videoId: j+1, casturl:run_file().list[j].file, castname:run_file().list[j].title, duration: "", views: "", date: "", category: "", thumb: run_file().list[j].poster, poster: run_file().list[j].poster, active: checjfdk  };
if(getfvald_ddfffle=="1"){
itenslifffd={ id:j+1, filetl: run_file().file_title, title: run_file().list[j].title, file: run_file().list[j].file, description: run_file().file_desc, videoId: j+1, duration: "", views: "", date: "", category: "", thumb: run_file().list[j].poster, active: checjfdk  };
}
 playlistData.push(itenslifffd);
   }


      loadPlaylist(playlistData);
      const currentVideo = playlistData.find(v => v.active);
       if (currentVideo) {  document.querySelector('.video-meta').innerHTML = ``;    }  

             
    //ampmpl.innerHTML='<iframe allowfullscreen width="100%" height="350" allow="Access-Control-Allow-Origin *; accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *" sandbox="allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-storage-access-by-user-activation" frameborder="0" scrolling="no" src="'+linkfromd+'" style="border: 1px solid black"></iframe>';  
    //amptar.innerHTML="<a href='"+linkfrarromd+"'>"+run_file().file_title+"</a>"; 
    }  
    else if(typeof run_file=='undefined'){    mainVideo.innerHTML=is_messageadd("This File ID does not exist.","");   }
    else {   mainVideo.innerHTML=is_messageadd("This File ID does not exist.","");   }

         
    if(getfvaddl_tyget=="true"){      }  
    if(getfvaddl_listyget=="true"){  
      //ammpdr.innerHTML=""+listaFiles(run_file().list, linkfrarromd);  
    } 
    if(getfvadinf_listyget=="true"){   
      //amptar.innerHTML="<a href='"+linkfroplauemd+"'>"+run_file().file_title+"</a>";  
      //ammpdr.innerHTML=ammpdr.innerHTML+""+listaFiles(run_file().list, linkfrarromd);  
      //ampmpl.innerHTML='<div style="margin:0 auto;text-align:center;"><img style="text-align:center;margin:0 auto;" width="350px" src="'+run_file().cover+'"/></div>';  
    } 

            
}  

