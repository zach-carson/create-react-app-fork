
import './App.css';

function App() {
  return (

<div>
    <div class="outline">
      <div class="lecard">
        <h2>Some Nerd</h2>
        <img src="https://i.kym-cdn.com/news_feeds/icons/mobile/000/037/359/05b.jpg" alt="Obi-Wan headshot" />
        <p class="details">Hello there <br></br> Lightsaber go <i>brrrr</i></p>
      </div>
    </div>
  <div class="buttons">
  
  <button class="copyCat">Copy</button>
  <button id="del">Delete</button>
  <button class="btnDet">Toggle Details</button> 
  <button class="btnCT">Change Title</button>
  <button  class="btnBG">Change Background Color</button>
  
  </div>
  
</div>
  );
}
document.querySelector('.copyCat').addEventListener('click', function(e) {
  const copy = document.querySelector('.outline').cloneNode(true);
 document.body.appendChild(copy);
});

document.querySelector('#del').addEventListener('click', function(e) {
 let checkDel = confirm("Delete it?");
  if (checkDel) {
    if (document.querySelector('.outline:last-child') !== document.querySelector('.outline')) {    document.querySelector('.outline:last-child').remove();      
    }
    else {
      alert("No can do");
    }
  }
});
  document.querySelector('.btnCT').addEventListener('click', function(e) {
    let title = prompt("I think it needs a better title, don't you?");
  if (title) {
    document.querySelector('.outline h2').innerText = title;
  }
});

document.querySelector('.btnDet').addEventListener('click', function(e) {
  const detail = document.querySelector('.details')
  if (detail.style.display === "none"){
    detail.style.display = "block"
  } else {
    detail.style.display = "none";
  }
});
document.querySelector('.btnBG').addEventListener("click", (e) => { 
   color = ("Green");
   document.querySelector('.lecard').style.backgroundColor = color; 
});
export default App;
