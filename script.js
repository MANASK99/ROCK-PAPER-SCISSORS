
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scicors = document.getElementById("scicors");
let outputdiv = document.getElementById ("outputdiv");
let win = document.getElementById ("win");
let loss = document.getElementById ("loss");
let tie = document.getElementById ("tie");

//ROCK PART
function systemOutputOnClickRock() {
  let random = Math.random();
  outputdiv.removeAttribute ("hidden");
  let createdDiv = document.createElement ("div");
  let createdDivId = createdDiv.id;
  createdDiv.innerHTML = `<h2>SYSTEM OUTPUT</h2>`;
  let createdDisplay = document.createElement ("div");
  let createdDisplayId = createdDisplay.id;
  let paraTagDiv = document.createElement ("div");
  let paraTagDivId = paraTagDiv.id;
  if (random >= 0 && random < 1 / 3) {
    createdDisplay.style.backgroundImage = "url('3313783-middle.png')";
    createdDisplay.style.height = "200px";
    createdDisplay.style.width = "200px";
    createdDisplay.style.borderRadius = "50%";
    createdDisplay.style.backgroundSize = "cover";
    createdDisplay.style.backgroundPositionX= "-80px";
    createdDisplay.style.position= "absolute";
    createdDisplay.style.left=createdDisplay.style.top= "45px";
    paraTagDiv.innerHTML = '<p>IT`S A TIE</p>';  
    tie.value = Number(tie.value)+1;
  }

  if (random >= 1 / 3 && random < 2 / 3) {
    createdDisplay.style.backgroundImage = "url('428-4288836_your-hand-hand-clipart-png-rock-paper-scissors.png')";
    createdDisplay.style.height = "200px";
    createdDisplay.style.width = "200px";
    createdDisplay.style.borderRadius = "50%";
    createdDisplay.style.backgroundSize = "cover";
    createdDisplay.style.backgroundPositionX= "-67px";
    createdDisplay.style.position= "absolute";
    createdDisplay.style.left=createdDisplay.style.top= "50px";
    paraTagDiv.innerHTML = '<p>YOU WIN !!</p>';
 
    win.value = Number(win.value)+1;
    
  }

  if (random >= 2 / 3 && random < 1) {
    createdDisplay.style.backgroundImage = "url('3313779-middle\ \(1\).png')";
    createdDisplay.style.height = "200px";
    createdDisplay.style.width = "200px";
    createdDisplay.style.borderRadius = "50%";
    createdDisplay.style.backgroundSize = "cover";
    createdDisplay.style.backgroundPositionX= "-80px";
    createdDisplay.style.position= "absolute";
    createdDisplay.style.left=createdDisplay.style.top= "50px";
    paraTagDiv.innerHTML = '<p>YOU LOSS</p>';
    
    loss.value = Number(loss.value)+1;
  }

  let nextButton = document.createElement ("button");
  let nextButtonId = nextButton.id;
  nextButton.textContent = "Next Guess";
  nextButton.style.width = "150px";
  nextButton.style.height = "40px";
  nextButton.style.position = "absolute";
  nextButton.style.left = "74px";
  nextButton.style.top = "300px";
  nextButton.style.borderRadius = "20px";
  nextButton.addEventListener("click",function(){
    outputdiv.setAttribute ("hidden",true);
    outputdiv.innerHTML = "";
  });
  outputdiv.appendChild(nextButton);
  outputdiv.appendChild(createdDiv);
  outputdiv.appendChild(createdDisplay);
  outputdiv.appendChild(paraTagDiv);
  
}


//PAPER PART
function systemOutputOnClickPaper() {
  let random = Math.random();
  outputdiv.removeAttribute ("hidden");
  let createdDiv = document.createElement ("div");
  let createdDivId = createdDiv.id;
  createdDiv.innerHTML = `<h2>SYSTEM OUTPUT</h2>`;
  let createdDisplay = document.createElement ("div");
  let createdDisplayId = createdDisplay.id;
  let paraTagDiv = document.createElement ("div");
  let paraTagDivId = paraTagDiv.id;
  if (random >= 0 && random < 1 / 3) {
    createdDisplay.style.backgroundImage = "url('3313783-middle.png')";
    createdDisplay.style.height = "200px";
    createdDisplay.style.width = "200px";
    createdDisplay.style.borderRadius = "50%";
    createdDisplay.style.backgroundSize = "cover";
    createdDisplay.style.backgroundPositionX= "-80px";
    createdDisplay.style.position= "absolute";
    createdDisplay.style.left=createdDisplay.style.top= "45px";
    paraTagDiv.innerHTML = '<p>YOU WIN !!</p>';
    win.value = Number(win.value)+1;
  }

  if (random >= 1 / 3 && random < 2 / 3) {
    createdDisplay.style.backgroundImage = "url('428-4288836_your-hand-hand-clipart-png-rock-paper-scissors.png')";
    createdDisplay.style.height = "200px";
    createdDisplay.style.width = "200px";
    createdDisplay.style.borderRadius = "50%";
    createdDisplay.style.backgroundSize = "cover";
    createdDisplay.style.backgroundPositionX= "-67px";
    createdDisplay.style.position= "absolute";
    createdDisplay.style.left=createdDisplay.style.top= "50px";
    paraTagDiv.innerHTML = '<p>YOU LOSS</p>';
    loss.value = Number(loss.value)+1;
  }

  if (random >= 2 / 3 && random < 1) {
    createdDisplay.style.backgroundImage = "url('3313779-middle\ \(1\).png')";
    createdDisplay.style.height = "200px";
    createdDisplay.style.width = "200px";
    createdDisplay.style.borderRadius = "50%";
    createdDisplay.style.backgroundSize = "cover";
    createdDisplay.style.backgroundPositionX= "-80px";
    createdDisplay.style.position= "absolute";
    createdDisplay.style.left=createdDisplay.style.top= "50px";
    paraTagDiv.innerHTML = '<p>IT`S A TIE</p>';
    tie.value = Number(tie.value)+1;
  }

  let nextButton = document.createElement ("button");
  let nextButtonId = nextButton.id;
  nextButton.textContent = "Next Guess";
  nextButton.style.width = "150px";
  nextButton.style.height = "40px";
  nextButton.style.position = "absolute";
  nextButton.style.left = "74px";
  nextButton.style.top = "300px";
  nextButton.style.borderRadius = "20px";
  nextButton.addEventListener("click",function(){
    outputdiv.setAttribute ("hidden",true);
    outputdiv.innerHTML = "";
  })
  outputdiv.appendChild(nextButton);
  outputdiv.appendChild(createdDiv);
  outputdiv.appendChild(createdDisplay);
  outputdiv.appendChild(paraTagDiv);

}


//SCISSORS PART
function systemOutputOnClickScissors() {
  let random = Math.random();
  outputdiv.removeAttribute ("hidden");
  let createdDiv = document.createElement ("div");
  let createdDivId = createdDiv.id;
  createdDiv.innerHTML = `<h2>SYSTEM OUTPUT</h2>`;
  let createdDisplay = document.createElement ("div");
  let createdDisplayId = createdDisplay.id;
  let paraTagDiv = document.createElement ("div");
  let paraTagDivId = paraTagDiv.id;
  if (random >= 0 && random < 1 / 3) {
    createdDisplay.style.backgroundImage = "url('3313783-middle.png')";
    createdDisplay.style.height = "200px";
    createdDisplay.style.width = "200px";
    createdDisplay.style.borderRadius = "50%";
    createdDisplay.style.backgroundSize = "cover";
    createdDisplay.style.backgroundPositionX= "-80px";
    createdDisplay.style.position= "absolute";
    createdDisplay.style.left=createdDisplay.style.top= "45px";
    paraTagDiv.innerHTML = '<p>YOU LOSS</p>';
    loss.value = Number(loss.value)+1;
  }

  if (random >= 1 / 3 && random < 2 / 3) {
    createdDisplay.style.backgroundImage = "url('428-4288836_your-hand-hand-clipart-png-rock-paper-scissors.png')";
    createdDisplay.style.height = "200px";
    createdDisplay.style.width = "200px";
    createdDisplay.style.borderRadius = "50%";
    createdDisplay.style.backgroundSize = "cover";
    createdDisplay.style.backgroundPositionX= "-67px";
    createdDisplay.style.position= "absolute";
    createdDisplay.style.left=createdDisplay.style.top= "50px";
    paraTagDiv.innerHTML = '<p>IT`S A TIE</p>';
    tie.value =  Number(tie.value)+1;
  }

  if (random >= 2 / 3 && random < 1) {
    createdDisplay.style.backgroundImage = "url('3313779-middle\ \(1\).png')";
    createdDisplay.style.height = "200px";
    createdDisplay.style.width = "200px";
    createdDisplay.style.borderRadius = "50%";
    createdDisplay.style.backgroundSize = "cover";
    createdDisplay.style.backgroundPositionX= "-80px";
    createdDisplay.style.position= "absolute";
    createdDisplay.style.left=createdDisplay.style.top= "50px";
    paraTagDiv.innerHTML = '<p>YOU WIN !!</p>';
    win.value = Number(win.value)+1;
  }

  let nextButton = document.createElement ("button");
  let nextButtonId = nextButton.id;
  nextButton.textContent = "Next Guess";
  nextButton.style.width = "150px";
  nextButton.style.height = "40px";
  nextButton.style.position = "absolute";
  nextButton.style.left = "74px";
  nextButton.style.top = "300px";
  nextButton.style.borderRadius = "20px";
  nextButton.addEventListener("click",function(){
    outputdiv.setAttribute ("hidden",true);
    outputdiv.innerHTML = "";
  })
  outputdiv.appendChild(nextButton);
  outputdiv.appendChild(createdDiv);
  outputdiv.appendChild(createdDisplay);
  outputdiv.appendChild(paraTagDiv);
}

function reset() {
  window.location.reload();
}



