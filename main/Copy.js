function copyUrl() {
    var urlInput = document.getElementById("urlInput");
    urlInput.select();
    urlInput.setSelectionRange(0, 99999); 
    alert("URL copied: " + urlInput.value);
  }