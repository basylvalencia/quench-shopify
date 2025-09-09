
document.addEventListener("DOMContentLoaded", function() {
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  // Format example: "Tue, Sep 10"
  const formatted = tomorrow.toLocaleDateString('en-AU', options);

  document.querySelector(".ship-date").textContent = formatted;
});
