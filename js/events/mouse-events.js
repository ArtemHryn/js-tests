const boxRef = document.querySelector(".js-box");

// boxRef.addEventListener("mouseenter", onMouseEnter);
// boxRef.addEventListener("mouseleave", onMouseLeave);
// boxRef.addEventListener("mousemove", onMouseMove);

function onMouseEnter(event) {
  const box = event.currentTarget;
  //   box.style.backgroundColor = 'red'
  box.classList.add("box--active");
}

function onMouseLeave(event) {
  const box = event.currentTarget;
  //   box.style.backgroundColor = "blue";
  box.classList.remove("box--active");
}

function onMouseMove(event) {
  // console.log(event);
  const box = event.currentTarget;
  console.log(event);
  //   console.log(box.style.margin);
  box.style.margin = `${event.screenX}px`;
}

// window.addEventListener("mousemove", onBoxMove)

boxRef.addEventListener("click", (event) => {
  console.log(event);
    window.addEventListener("mousemove", onBoxMove); 
});

function onBoxMove(event) {
  console.log("Enabled");
  boxRef.style.marginLeft = `${event.screenX - 100}px`;
  boxRef.style.marginTop = `${event.screenY - 200}px`;
}
