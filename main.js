const { app, BrowserWindow, ipcMain } = require("electron/main");
const { Habit, Habits } = require("./habit");
const path = require("node:path");
const cron = require("node-cron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 440,
    height: 680,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  ipcMain.handle("ping", () => "pong");
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Schedule reset at midnight every day
cron.schedule("0 0 * * *", () => {
  Habit.resetDaily();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
