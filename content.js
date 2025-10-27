
// MOUSE POSITIONS 
let lastMouse = { x: 0, y: 0 };

document.addEventListener("mousedown", (e) => {
  lastMouse = { x: e.clientX, y: e.clientY };
});

document.addEventListener("mouseup", () => {
  const text = window.getSelection().toString().trim();
  if (!text) return;
  chrome.runtime.sendMessage({ type: "TRANSLATE", text });
});

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "RESULT") {
    showBubble(msg.translation);
  }
});

function showBubble(text) {
  const div = document.createElement("div");
  div.textContent = text;
  Object.assign(div.style, {
    position: "fixed",
    left: `${lastMouse.x + 12}px`,
    top: `${lastMouse.y + 12}px`,
    maxWidth: "280px",
    background: "#222",
    color: "white",
    padding: "10px 12px",
    borderRadius: "10px",
    boxShadow: "0 10px 25px rgba(0,0,0,.25)",
    fontFamily: "system-ui, Arial, sans-serif",
    fontSize: "14px",
    zIndex: 9999,
    lineHeight: "1.35",
  });
  document.body.appendChild(div);
  setTimeout(() => div.remove(), 5000);
}
