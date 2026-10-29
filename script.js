function formatUptime(seconds) {
  if (typeof seconds !== "number" || seconds < 0) {
    return "0m 0s";
  }
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}m ${secs}s`;
}

// Only attach DOM events when running in a browser environment
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const uptimeDisplay = document.getElementById("uptimeDisplay");
    const pageLoadTimestamp = document.getElementById("pageLoadTimestamp");

    if (pageLoadTimestamp) {
      pageLoadTimestamp.textContent = new Date().toLocaleTimeString();
    }

    let elapsedSeconds = 0;
    if (uptimeDisplay) {
      uptimeDisplay.textContent = formatUptime(elapsedSeconds);
      setInterval(() => {
        elapsedSeconds += 1;
        uptimeDisplay.textContent = formatUptime(elapsedSeconds);
      }, 1000);
    }
  });
}

// Export for Jest in Node.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = { formatUptime };
}