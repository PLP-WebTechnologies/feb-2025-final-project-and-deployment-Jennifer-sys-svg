document.getElementById('getStartedBtn').addEventListener('click', function () {
  alert('Welcome to SyncFit! Let’s get started!');
});document.getElementById('getStartedBtn').addEventListener('click', function () {
  alert('Welcome to SyncFit! Let’s get started!');
});

document.getElementById('workoutSelect').addEventListener('change', function () {
  const selected = this.value;
  const message = document.getElementById('workoutMessage');

  if (selected === 'beginner') {
    message.textContent = 'Great choice! Let’s ease into fitness.';
  } else if (selected === 'intermediate') {
    message.textContent = 'Nice! Time to level up.';
  } else if (selected === 'advanced') {
    message.textContent = 'Awesome! Let’s push your limits.';
  } else {
    message.textContent = '';
  }
});

