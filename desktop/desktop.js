document.addEventListener('DOMContentLoaded', function () {
  // Start menu toggle
  const startButton = document.getElementById('startButton');
  const startMenu = document.getElementById('startMenu');

  startButton.addEventListener('click', function (e) {
    e.stopPropagation();
    startMenu.classList.toggle('visible');
  });

  // Close start menu when clicking outside
  document.addEventListener('click', function () {
    startMenu.classList.remove('visible');
  });

  // Prevent closing when clicking inside start menu
  startMenu.addEventListener('click', function (e) {
    e.stopPropagation();
  });

  // Update time
  function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Convert 0 to 12
    document.getElementById('time').textContent = `${hours}:${minutes} ${ampm}`;
  }

  updateTime();
  setInterval(updateTime, 1000);

  // Set active app
  const apps = document.querySelectorAll('.taskbar-app');
  apps.forEach(app => {
    app.addEventListener('click', function () {
      apps.forEach(a => a.classList.remove('active'));
      this.classList.add('active');
    });
  });
});
