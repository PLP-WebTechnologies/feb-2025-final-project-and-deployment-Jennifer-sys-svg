// Simple feature: Show an alert when the user clicks the Join button
document.addEventListener("DOMContentLoaded", function () {
  const joinBtn = document.getElementById("join-btn");

  if (joinBtn) {
    joinBtn.addEventListener("click", function () {
      alert("Welcome to SyncFit! Let's start your fitness journey 💪");
    });
  }
});
