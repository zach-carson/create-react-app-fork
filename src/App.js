
import './App.css';

function App() {
  return (

<div class="card" id="card1">
  <div>
  <div class="title-header">
    <h2> Jalen Hurts </h2>
  </div>
  <img class = "img" src="https://th.bing.com/th/id/OIP.NX-MOMDx5uAkx4YnlPWexAHaE7?pid=ImgDet&rs=1" alt="jalen hurts"></img>
  <p class = "desc"> Jalen Hurts is a football player </p>
  <a href="https://hax.psu.edu/">
  <button class="btn" id='details'> Details </button>
  </a>
</div>
</div>

<button class="duplicate"> Duplicate card </button>

<button class="newcolor"> Toggle background color </button>
  
<button class="something"> Something else </button>
  
<button class="delete"> Delete last card </button>

  
<div id="destination"></div>
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
