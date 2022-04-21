const explode = element => {
    document.body.removeChild(element);
  };
  
  const addBall = () => {
    const ball = document.createElement("div");
    ball.setAttribute("class", "ball");
  
    let p1 = Math.floor(Math.random() * 500);
    let p2 = Math.floor(Math.random() * 400);
  
    ball.setAttribute("style", "left:" + p1 + "px; top:" + p2 + "px;");
  
    ball.setAttribute("onClick", "explode(this)");
  
    document.body.appendChild(ball);
  };
  
  const startGame = () => {
    setInterval(addBall, 1000);
  };
  