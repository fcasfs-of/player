  function progress_valo(mumh) {  var mumhf=0;    
if(mumh){   mumhf=mumh;
if(mumh<=9){  mumhf="0"+mumh;  }
}
return mumhf;  }



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
}

