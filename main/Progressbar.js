function updateProgressBar(value) {
    const progressBar = document.getElementById('progress-bar');
    
    progressBar.value = value;
    progressText.textContent = `${value}%`;
  }

   // Listen for changes in localStorage and update the progress bar
   window.addEventListener('storage', function (event) {
    if (event.key.startsWith('progressValue')) {
      const cardId = event.key.replace('progressValue','');
      const progressValue = parseInt(event.newValue) || 0;
      updateProgressBar(cardId,progressValue);
    }
  });

  // Fetch the initial value from localStorage
  for (let i = 1; i <= 2; i++) {
    const cardId = `card${i}`;
    const initialProgressValue = parseInt(localStorage.getItem(`progressValue${cardId}`)) || 0;
    updateProgressBar(cardId, initialProgressValue);
  }