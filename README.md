# keyboard-input

Simple keyboard input for use in a game loop.

## Installation

```
$ npm install --save keyboard-input
```

## Usage

```js
import KeyboardInput from 'keyboard-input';
import { ESC } from '@vaalentin/keycodes';

const keyboard = new KeyboardInput();

// then later
if(keyboard.isPressed(ESC)) {
  // esc is pressed
}
```

## API

#### `input = new KeyboardInput()`

#### `input.isPressed(keyCode)`

## License

MIT, see [LICENSE.md](https://github.com/vaalentin/keyboard-input/blob/master/LICENSE.md) for more details.

