// dat GUI instance
let gui;

// Setting values for dat GUI
const DefaultOptions = {};
const options = new Object();

const utilities = {
  Reset: () => {
    initializeSettings();
  },
  RandomizeColor: () => {
    randomizeColor();
    gui.updateDisplay();
  },
  Download: () => {
    isReqSaveImage = true;
  },
  GitHub: () => {
    window.open('https://github.com/tetunori/hunter-font-tester', '_blank');
  },
};

const prepareDatGUI = (opt) => {
  gui = new dat.GUI({ closeOnTop: true });

  // Set initial values
  DefaultOptions.bgColor = opt.bgColor;
  DefaultOptions.fontColor = opt.fontColor;
  DefaultOptions.fontSize = opt.fontSize;
  DefaultOptions.isCenterAlign = opt.isCenterAlign;
  initializeSettings();

  gui.addColor(options, 'bgColor').name('背景色 🎨');
  gui.addColor(options, 'fontColor').name('文字色 🎨');
  gui
    .add(options, 'fontSize', 5, 100, 1)
    .name('フォントサイズ');
  gui.add(utilities, 'RandomizeColor').name('ランダムHUNTERx2色 🎨');

  gui.add(options, 'isCenterAlign', true).name('中央寄せ');
  gui.add(utilities, 'Reset').name('設定リセット ❌');

  gui.add(utilities, 'Download').name('画像ダウンロード');
  gui.add(utilities, 'GitHub').name('GitHub 🔗');

};

// Initialize with default values
const initializeSettings = () => {
  options.bgColor = DefaultOptions.bgColor;
  options.fontColor = DefaultOptions.fontColor;
  options.fontSize = DefaultOptions.fontSize;
  options.isCenterAlign = DefaultOptions.isCenterAlign;
  gui.updateDisplay();
};
