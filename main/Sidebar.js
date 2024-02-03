function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  function activateButton(button) {
  
  document.querySelectorAll('.buttons').forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
  }