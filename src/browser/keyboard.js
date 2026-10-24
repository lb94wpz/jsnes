import Controller from "../controller.js";

// Mapping keyboard code to [controller, button]
const KEYS = {
  75: [1, Controller.BUTTON_A, "K"], // K
  // 89: [1, Controller.BUTTON_B, "Y"], // Y (Central European keyboard)
  74: [1, Controller.BUTTON_B, "J"], // J
  17: [1, Controller.BUTTON_SELECT, "Right Ctrl"], // Right Ctrl
  13: [1, Controller.BUTTON_START, "Enter"], // Enter
  87: [1, Controller.BUTTON_UP, "W"], // W
  83: [1, Controller.BUTTON_DOWN, "S"], // S
  65: [1, Controller.BUTTON_LEFT, "A"], // A
  68: [1, Controller.BUTTON_RIGHT, "D"], // D
  73: [1, Controller.BUTTON_TURBO_A, "I"], // I
  85: [1, Controller.BUTTON_TURBO_B, "U"], // U
  98: [2, Controller.BUTTON_A, "Num-2"], // Num-2
  97: [2, Controller.BUTTON_B, "Num-1"], // Num-1
  99: [2, Controller.BUTTON_SELECT, "Num-3"], // Num-3
  108: [2, Controller.BUTTON_START, "↵"], // ↵
  38: [2, Controller.BUTTON_UP, "↑"], // ↑
  40: [2, Controller.BUTTON_DOWN, "↓"], // ↓
  37: [2, Controller.BUTTON_LEFT, "←"], // ←
  39: [2, Controller.BUTTON_RIGHT, "→"] // →
};

export default class KeyboardController {
  constructor(options) {
    this.onButtonDown = options.onButtonDown;
    this.onButtonUp = options.onButtonUp;
  }

  loadKeys = () => {
    var keys;
    try {
      keys = localStorage.getItem("keys");
      if (keys) {
        keys = JSON.parse(keys);
      }
    } catch (e) {
      console.warn("Failed to get keys from localStorage.", e);
    }

    this.keys = keys || KEYS;
  };

  setKeys = (newKeys) => {
    try {
      localStorage.setItem("keys", JSON.stringify(newKeys));
      this.keys = newKeys;
    } catch (e) {
      console.warn("Failed to set keys in localStorage.", e);
    }
  };

  handleKeyDown = (e) => {
    var key = this.keys[e.keyCode];
    if (key) {
      this.onButtonDown(key[0], key[1]);
      e.preventDefault();
    }
  };

  handleKeyUp = (e) => {
    var key = this.keys[e.keyCode];
    if (key) {
      this.onButtonUp(key[0], key[1]);
      e.preventDefault();
    }
  };

  handleKeyPress = (e) => {
    if (this.keys[e.keyCode]) {
      e.preventDefault();
    }
  };
}
