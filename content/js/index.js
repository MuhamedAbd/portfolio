document.getElementById('dark__mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  
    // Update the button text based on the current mode
    if (document.body.classList.contains('dark-mode')) {
      this.innerText = 'Light Mode';
    } else {
      this.innerText = 'Dark Mode';
    }
  });
  