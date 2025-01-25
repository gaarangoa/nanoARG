const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {

    win = new BrowserWindow({
        width: 1200,
        height: 1200,
        // backgroundColor: "#FFFFFF"
        icon: `file://${__dirname}/dist/favicon.ico`
    });

    win.loadURL(`file://${__dirname}/dist/index.html`);
    win.on('closed', function() {
        win = null;
    });

}

app.on('ready', createWindow);
app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});
app.on('activate', function() {
    if (win === null) {
        createWindow();
    }
});