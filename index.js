var menubar = require("menubar");

var mb = menubar({
  transparent: true,
  dir: "build"
});

mb.on("ready", function ready() {
  console.log("app is ready");
  // your app code here
});

mb.on("after-create-window", () => {
  mb.window.openDevTools();
});
