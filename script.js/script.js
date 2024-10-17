document.addEventListener('keydown', function(event) {
 
    const key = event.key;
   
    switch (event.key) {
   
      case "ArrowLeft":
          console.log("Left arrow!")
          break;
      case "ArrowRight":
          console.log("Right arrow!")
          break;
      case "ArrowUp":
          console.log("Up arrow!")
          break;
      case "ArrowDown":
          console.log("Down arrow!")
          break;
         
     }
});
