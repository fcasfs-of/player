var fplayeri;


function stringno_valtext(id,g) {   if (id == null || id === "" || id === "undefined") {     return g;    }    return id;   }


function onstart_fplay(fplayeri, time, starr, tid){ 

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

if(tid){   const mainVideotime = document.getElementById('vidlist_'+tid);  if(mainVideotime){  if(mainVideotime.innerHTML==""+convertSecondsDurationto(0) || mainVideotime.innerHTML==""){  mainVideotime.innerHTML=""+convertSecondsDurationto(Number(stringno_valtext(fplayeri.api("duration"),"0")));   }  }  }

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



function onstart_file(run_file){     
var playlistData = [];
           
  var acssr = document.getElementById('cutompll');   
  var acssr_cover = document.querySelector('.logo img');
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
            
//mainVideo.src = `https://player.fcasfs-of.cloud-fs.net/${run_file().player_lang}?fileID=${getfval_tyget}&fileView=true&pos=0&fileSelect=${video.videoId}`;

var playernoprib=1;
if(run_file().fl_priv==true){  playernoprib=0;  }

mainVideo.innerHTML='<div style="text-transform: uppercase;  overflow:auto; width:100%;height:100%; padding:5px;text-align:center;color:#fff;background:#000;"><br/><img style="display:block;  pointer-events:none;  width:64px;  text-align:center;margin:0 auto;" src="https://fcasfs-of.cloud-fs.net/player/fl_lock.png"/><br/><p>It is not possible to access the File because it is Private.</p><br/><br/><br/><br/><br/></div>';
    
if(playernoprib==1){
mainVideo.innerHTML='';

//if(fplayeri){  fplayeri.api("destroy");  }

fplayeri = fs_Playerjs({ OSD:run_file().player_osd, id:"main-video", customtext:{age:""}, config:run_file().config, nocontrols:0, autoplay:0, loop:0, title:""+video.title, file:""+video.file, poster:""+video.thumb, player:1,"url":`https://player.fcasfs-of.cloud-fs.net/${run_file().player_lang}?fileID=${getfval_tyget}&fileView=true&pos=${getfvald_tygetslpose}&fileSelect=${video.id}`  });
if(fplayeri){
fplayeri.Toast("info",video.filetl,video.title);
onstart_fplay(fplayeri, getfvald_tygetslpose, getfvald_ddfffle,video.id);  }
}
            
            videoTitle.innerHTML = video.title;
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

            playlistData.forEach(video => {
                const playlistItem = document.createElement('div');
                playlistItem.className = `playlist-item ${video.active ? 'active' : ''}`;
                playlistItem.dataset.id = video.id;
                
                playlistItem.innerHTML = `
                    <div class="playlist-item-thumb">
                        <img src="${video.thumb}" alt="${video.title}">
                    </div>
                    <div class="playlist-item-info">
                        <h3 class="playlist-item-title">${video.title}</h3>
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
            

if (!run_file){
mainVideo.innerHTML='<div style="text-transform: uppercase;  overflow:auto; width:100%;height:100%;text-align:center;color:#fff;background:#000;padding:5px;"><br/><br/><p>This File ID does not exist.</p><br/><br/><br/><br/><br/></div>';   }

            
  if(typeof run_file=='function'){  
    var sryrkk="<style>  .markdown-body blockquote #mpd, #mpd { color:#000;  }   body img{ pointer-events:none; } </style>";  
    if(run_file().pg_dark==true){  
      sryrkk="<style> .markdown-body blockquote #mpd, #mpd { color:#fff;  }  body, body img, .markdown-body div, .markdown-body blockquote, .markdown-body h3, .markdown-body h3 a { color:#fff; background:#111; }  .markdown-body h2 img, .markdown-body h2{   color:#fff;  background:#111;  background-color:#111;   } body img{ pointer-events:none; }  </style>";  
    }  
    acssr.innerHTML=sryrkk;  
    document.title='Player: '+run_file().file_title+' - '+document.title;  
    videoDescription.innerHTML=run_file().file_desc;  
    pfielidtile.innerHTML='Media Player';  
    mainVtha.innerHTML=''+run_file().file_title+'';
     acssr_cover.src = `${run_file().cover}`;    acssr_cover.style.width="160px";      acssr_cover.style.borderRadius = "20px";   
    var linkfroplauemd="https://fcasfs-of.cloud-fs.net/player/?fileID="+getfval_tyget+"";   
    var linkfrarromd="https://player.fcasfs-of.cloud-fs.net/"+run_file().player_lang+"?fileID="+getfval_tyget+"&fileView=true";  
    var linkfromd="https://player.fcasfs-of.cloud-fs.net/"+run_file().player_lang+"?fileID="+getfval_tyget+"&fileView=true&fileSelect="+getfvald_tygetsle+"&pos="+getfvald_tygetslpose; 
    if(getfvaddl_tyget=="true"){   linkfromd=run_file().cover;   }  
    
  var checjfdk=false;   var checjfdksd=parseInt(getfvald_tygetsle)-1;
   if(checjfdksd>run_file().list.length){  checjfdksd=0;  }
  if(checjfdksd<0){  checjfdksd=0;  }
             
   for(var j=0; j<run_file().list.length; j++){
    checjfdk=false;  if(j==checjfdksd){   checjfdk=true;  }
 playlistData.push({ id:j+1, filetl: run_file().file_title, title: run_file().list[j].title, file: run_file().list[j].file, description: run_file().file_desc, videoId: j+1, duration: "", views: "", date: "", category: "", thumb: run_file().list[j].poster, active: checjfdk  });
   }

      loadPlaylist(playlistData);
      const currentVideo = playlistData.find(v => v.active);
       if (currentVideo) {  document.querySelector('.video-meta').innerHTML = ``;    }  
              
    //ampmpl.innerHTML='<iframe allowfullscreen width="100%" height="350" allow="Access-Control-Allow-Origin *; accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *" sandbox="allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-storage-access-by-user-activation" frameborder="0" scrolling="no" src="'+linkfromd+'" style="border: 1px solid black"></iframe>';  
    //amptar.innerHTML="<a href='"+linkfrarromd+"'>"+run_file().file_title+"</a>"; 
    }  
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

