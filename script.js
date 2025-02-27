document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  const h1 = document.createElement("h1");
  h1.id = "h1";
  h1.classList.add("font-effect-fire-animation");
  h1.innerText = "Magic 8 Ball";
  root.append(h1);
  
    const clickMeText = document.createElement("p");
    clickMeText.id = "clickMeText";
    clickMeText.innerText = "Click me!";
    h1.append(clickMeText);

  const container = document.createElement("div");
  container.id = "container";
  root.append(container);

  const eBallWrapper= document.createElement("div");
  eBallWrapper.id = "eBallWrapper";
  container.append(eBallWrapper);

  const eBall = document.createElement("div");
  eBall.id = "eBall"; 
  eBallWrapper.append(eBall);

  const littleBall = document.createElement("div");
  littleBall.id = "littleBall";
  eBall.append(littleBall);

  const canvas = document.createElement("canvas");
  canvas.id = "canvas";
  canvas.width = 200;
  canvas.height = 200;
  littleBall.append(canvas);

  const ctx = canvas.getContext("2d");

  function draw8Ball() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(100, 100, 90, 0, 2 * Math.PI);
    ctx.fill();
    drawTriangle();
  }

  function drawTriangle() {
    ctx.beginPath();
    ctx.moveTo(100, 50);
    ctx.lineTo(150, 150);
    ctx.lineTo(50, 150);
    ctx.closePath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.stroke();
  }

  function displayAnswer(answer) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw8Ball();
    ctx.fillStyle = "aliceblue";
    ctx.font = "16px Sofia";
    ctx.textAlign = "center";
    ctx.fillText(answer, 100, 100);
  }

  const heading = document.createElement("p");
  heading.id = "heading";
  heading.style.fontFamily = "Sofia";
  heading.innerText = "Ask me a question!";
  container.append(heading);
  
  const input = document.createElement("input");
  input.id = "input";
  input.type = "text";
  input.placeholder = "Ask me a question";
  container.append(input);

  const tryAgainText = document.createElement("p");
  tryAgainText.id = "tryAgainText";
  tryAgainText.innerText = "Click the ball to try again!";
  tryAgainText.style.display = "none";
  container.append(tryAgainText);
  
  // const home = document.createElement("button");
  // home.id = "home";
  // home.innerText = "What would you like to know???";
  // home.onclick = homeFunction;
  // home.style.display="none";
  // container.append(home);

  let answers = [
    "Yes",
    "No",
    "Maybe",
    "Ask again later",
    "Definitely",
    "Absolutely",
    "Not a chance",
    "Absolutely not",
    "I don't know",
  ];
 
  
  let isShaken = false;

  function shake() {
    if (!isShaken) {
      eBallWrapper.classList.add("shake");
      eBallWrapper.addEventListener("animationend", () => {
        eBallWrapper.classList.remove("shake");
      }, { once: true });

      clickMeText.style.display = "none"; // Hide "Click me!" text after clicking
      document.getElementById("eBall").style.display = "block";
      document.getElementById("heading").style.display = "block";
      document.getElementById("input").style.display = "none";
      tryAgainText.style.display = "block"; // Show "Try again!" text
      let randomAnswer = Math.floor(Math.random() * answers.length);
      displayAnswer(answers[randomAnswer]);
      isShaken = true;
    } else {
      reset();
    }
  }

  function reset() {
    document.getElementById("eBall").style.display = "block";
    document.getElementById("input").style.display = "block";
    document.getElementById("heading").style.display = "block";
    clickMeText.style.display = "block"; // Show "Click me!" text again
    tryAgainText.style.display = "none"; // Hide "Try again!" text
    isShaken = false;
    draw8Ball();
  }

  eBallWrapper.addEventListener("click", shake); // Add event listener to eBallWrapper

  draw8Ball();
});