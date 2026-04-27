var myVar;


function fstringno_valtext(id,g) {   if (id == null || id === "" || id === "undefined") {     return g;    }    return id;   }


function getFileNameFromoUrl(url) {
    if (!url || typeof url !== 'string') return null;
    try {
        url = url.trim();
        const urlObj = new URL(url);
        const pathname = urlObj.pathname;
        if (!pathname || pathname === '/') return null;
        const segments = pathname.split('/');
        const fileName = segments[segments.length - 1];
        if (!fileName || fileName === '') return null;
        const cleanFileName = fileName.split('?')[0].split('#')[0];
        return decodeURIComponent(cleanFileName);
        
    } catch (error) {        return null;    }
}

function removeExtension(filename) {
            const lastDotIndex = filename.lastIndexOf('.');
            if (lastDotIndex === -1 || lastDotIndex === 0) {
                return filename;
            }
            return filename.substring(0, lastDotIndex);
 }


function F_getFileName(file) {
    var fileParam = removeExtension(fstringno_valtext(getFileNameFromoUrl(fstringno_valtext(file, "")),""));
if(fileParam==="watch" || fileParam==="embed"){  fileParam="";  }
    return fileParam;   }



function myFunc() {  myVar = setTimeout(showPage, 600);   }

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
showPage();

  //document.getElementsByTagName("body")[0].onload=function(){  myFunc();   };



function loaded_itenf(mdpl_fielsd){  
  if(mdpl_fielsd){
    for (var i = 0; i < mdpl_fielsd.length; i++) {
idarquivo=mdpl_fielsd[i];
 
var scriptfd = document.createElement("script");
    scriptfd.setAttribute("id", "fileplffayer_fd");
    scriptfd.setAttribute("onload", "   run_file=\"\";    ");
    scriptfd.setAttribute("src", "https://player.fcasfs-of.cloud-fs.net/file/"+idarquivo+".js");
document.getElementsByTagName("head")[0].appendChild(scriptfd);

var infilefaz = document.getElementById("fileplffayer_fd");     if(infilefaz){   infilefaz.remove();   }   
     
    }
  }   
     var infiddlefdaz = document.getElementById("fileplffggayer_fd");     if(infiddlefdaz){   infiddlefdaz.remove();   }   

}



function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
       var paramName = decodeURIComponent(sParameterName[0]);
        var paramValue = sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        if (paramName === sParam) {            return paramValue;        }
    }    
return "";   }





function initSidebar_onload(api){       if(api){

api("bttnsearch", "this", [
   { label: '<div class="accordion-group" id="optionspl"></div>', desc: ' ', icon: null, onClick: null }
 ], "Search", '<svg fill="#fff" width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22.241 24-7.414-7.414c-1.559 1.169-3.523 1.875-5.652 1.885h-.002c-.032 0-.07.001-.108.001-5.006 0-9.065-4.058-9.065-9.065 0-.038 0-.076.001-.114v.006c0-5.135 4.163-9.298 9.298-9.298s9.298 4.163 9.298 9.298c-.031 2.129-.733 4.088-1.904 5.682l.019-.027 7.414 7.414zm-12.942-21.487c-3.72.016-6.73 3.035-6.73 6.758 0 3.732 3.025 6.758 6.758 6.758s6.758-3.025 6.758-6.758c0-1.866-.756-3.555-1.979-4.778-1.223-1.223-2.912-1.979-4.778-1.979-.01 0-.02 0-.03 0h.002z"/></svg>', 
'light', 'center', function(api){
	
dpro_add("optionspl", [
{ name:"Section ID", txt:'<div class="llk" style="width: 100%;  text-align: center;"><form class="busca" action="https://fcasfs-of.cloud-fs.net/player/">  <input required type="text" value="" placeholder="ID..." id="textidf" name="fileID"/>  <label class="container" data-tooltip="Preview" data-flow="bottom">    <input type="checkbox" checked="true" valeu="true" name="fileView"/>    <span class="checkmark"></span></label> <br/><br/>   <label class="range" data-tooltip="Position" data-flow="bottom"><span>  </span>    <input type="range" min="1" max="99" value="1" name="select" id="fileSelect"/>    <span class="value" style="color:#000;"></span>  </label> <br/> <input type="text" value="00:00:00" placeholder="00:00:00" id="texttime" name="time"/> <br/><br/> <button type="submit" value="Search">Search</button></form>  <br/></div>' },
{ name:"Section LINK", txt:'<div class="llk" style="width: 100%;  text-align: center;"><form class="busca" action="https://fcasfs-of.cloud-fs.net/player/"> <input required type="text" value="" placeholder="URL..." name="fileLINK"/>  <label class="container" data-tooltip="Preview" data-flow="bottom" style="display:none;">    <input type="checkbox" checked="true" valeu="true" name="fileView"/>    <span class="checkmark"></span></label> <br/><br/>  <input type="text" value="00:00:00" placeholder="00:00:00" name="time"/> <br/><br/> <button type="submit" value="Open">Open</button></form>  <br/></div> <br/>' }
]);


  progressScriptfile("#fileSelect",".value");   
   if(api){
     api.active(0);
      }
    }, { btn:" ", icon:"",
open: function(){   if(fplayeri){  fplayeri.api("pause");  }  },
close: function(){  if(fplayeri){  fplayeri.api("play");  }  }
});


}   }

fcarregarTudo([
    {
        destino: 'head',  tag: 'link',   
        atributos: {    
  "rel":"stylesheet", "href":"theme2.css"
     }
}, {
        destino: 'head',  tag: 'script',   
        atributos: {    
  'src': 'busc.js',
     }
}, {
        destino: 'body',  tag: 'script',   
        atributos: {    
  'src': 'https://fcasfs-of.cloud-fs.net/sidebar/core.js',
//'onload': "initSidebar_start();"
     }
}
]);



var getfval_tyget=getUrlParameter("fileID");
	

if (getfval_tyget=="") {
var getfval_tygddet=getUrlParameter("fileLINK");
	if (getfval_tygddet!="") {
var getfvald_ddfffle="1";
var getfvald_tygetsle="1";
var getfvald_tygetslpose="0";
var getfvalddd_tyget=getUrlParameter("pos");
if (getfvalddd_tyget!="") {
getfvald_tygetslpose=getfvalddd_tyget;
}

if(getfvalddd_tyget==""){
var getfvalddd6dd_tyget=getUrlParameter("time");
if (getfvalddd6dd_tyget!="") {
getfvald_tygetslpose=convertDurationtoSeconds(getfvalddd6dd_tyget);
}   }


onstart_file(function(){  return { 
player_lang:"en", 
pg_dark:false,
player_osd:true,
player_controls:0,
player_autoplay:0,
player_loop:0,
 file_title:"",
 file_desc:"",
config:{ osd:{  theme:"light" }, fontweight:"bold" },
 list:[
{ poster:"player_banner.jpg",title:""+F_getFileName(getfval_tygddet),file:""+getfval_tygddet }
],
 cover:"player_banner.jpg"  };
});

}  }


if (getfval_tyget!="") {
	
  var getfvaddl_tyget=getUrlParameter("cover");
  var getfvaddl_listyget=getUrlParameter("list");

var getfvadinf_listyget=getUrlParameter("info");

var getfvald_ddfffle="0";
var getfvaddld_tyget=getUrlParameter("fileView");
if (getfvaddld_tyget=="on") {
getfvald_ddfffle="1";
}
	
var getfvald_tygetsle="1";
var getfvald_tygetslpose="0";
var getfvald_tyget=getUrlParameter("select");
if (getfvald_tyget!="") {
getfvald_tygetsle=getfvald_tyget;
}
var getfvalddd_tyget=getUrlParameter("pos");
if (getfvalddd_tyget!="") {
getfvald_tygetslpose=getfvalddd_tyget;
}

if(getfvalddd_tyget==""){
var getfvalddd6dd_tyget=getUrlParameter("time");
if (getfvalddd6dd_tyget!="") {
getfvald_tygetslpose=convertDurationtoSeconds(getfvalddd6dd_tyget);
}   }



  var scriptfd = document.createElement("script");
    scriptfd.setAttribute("type", "text/javascript");
	scriptfd.setAttribute("id", "fileplayer_fd");
    scriptfd.setAttribute("src", "https://player.fcasfs-of.cloud-fs.net/file/"+getfval_tyget+".js");
document.getElementsByTagName("body")[0].appendChild(scriptfd);

  function remover_id_playerfile(){  var infilefaz = document.getElementById("fileplayer_fd");     if(infilefaz){   infilefaz.remove();   }    		  }

 
  var scrfiptfd = document.createElement("script");
    scrfiptfd.setAttribute("type", "text/javascript");
      scrfiptfd.setAttribute("onload", "onstart_file();");
    scrfiptfd.setAttribute("src", "data:text/javascript,"+encodeURIComponent('    onstart_file(run_file);  remover_id_playerfile();   '));
document.getElementsByTagName("body")[0].appendChild(scrfiptfd);
  document.getElementsByTagName("body")[0].onload=function(){  onstart_file(run_file);   remover_id_playerfile();     };

}   



