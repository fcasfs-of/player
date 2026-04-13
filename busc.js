
function stringno_valtext(id,g) {   if (id == null || id === "" || id === "undefined") {     return g;    }    return id;   }



  function progress_valo(mumh) {  var mumhf=0;    
if(mumh){   mumhf=mumh;
if(mumh<=9){  mumhf="0"+mumh;  }
}
return mumhf;  }



const autoClose = true;



function dpro_add(id, iye) {  if(iye && id && id!=""){ 
const mainVidime = document.getElementById(id); 
if(mainVidime){

var liestrood="";
   for(var j=0; j<iye.length; j++){
if(iye[j].txt && iye[j].txt!="" && iye[j].name && iye[j].name!=""){ 
liestrood=liestrood+'<details class="acc-item">    <summary>      <span>'+iye[j].name+'</span>         <span class="acc-icon">▼</span>    </summary>    <div class="content-wrapper">     <div class="content-body">'+iye[j].txt+'</div>    </div>  </details>';
}
   }

mainVidime.innerHTML=liestrood;

}  }
}




function progressScript(idf,ll) {
    const progress = (idf.value / idf.max) * 100;
  ll.textContent = progress_valo(idf.value);
  idf.style.background = `linear-gradient(to right, #4682B4 ${progress}%, #ccc ${progress}%)`;
 }

function progressScriptfile(oper,valks){
  const sliderEl = document.querySelector(oper);
const sliderValue = document.querySelector(valks);
sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  sliderValue.textContent = progress_valo(tempSliderValue);
  const progress = (tempSliderValue / sliderEl.max) * 100;
  sliderEl.style.background = `linear-gradient(to right, #4682B4 ${progress}%, #ccc ${progress}%)`;
});
 progressScript(sliderEl,sliderValue);



document.querySelectorAll('.acc-item').forEach(el => {
  const summary = el.querySelector('summary');
  const wrapper = el.querySelector('.content-wrapper');

  summary.onclick = (e) => {
    e.preventDefault();
    const isOpen = el.classList.contains('is-open');

	if (isOpen) {
	  el.classList.remove('is-open');
	  wrapper.style.height = '0px';
	  setTimeout(() => el.open = false, 310);
	} else {
	  if (autoClose) {
		document.querySelectorAll('.acc-item.is-open').forEach(openItem => {
		  openItem.classList.remove('is-open');
		  openItem.querySelector('.content-wrapper').style.height = '0px';
		  setTimeout(() => openItem.open = false, 310);
		});
	  }
	  el.open = true;
      el.classList.add('is-open');
      wrapper.style.height = wrapper.querySelector('.content-body').scrollHeight + 'px';
	}
  };
});


}

