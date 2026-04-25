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


function F_getFileName(file) {
    const fileParam = fstringno_valtext(file, "");
    return fstringno_valtext(getFileNameFromoUrl(fileParam),"");
}



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



