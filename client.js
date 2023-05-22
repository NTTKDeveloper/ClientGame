const { io } = require("socket.io-client");

// the following forms are similar
const socket = io("http://localhost:3000");

// client-side
socket.on("connect", () => {
  console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});

