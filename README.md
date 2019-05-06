# react-p5

This Component lets you integrate p5 Sketches into your React App. [DEMO](https://codesandbox.io/s/k09k8knxz5)

### Installation

```bash
npm i react-p5
```

### Usage

```js
import React, { Component } from "react";
import { Sketch } from "react-p5";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 50,
            y: 50
        };
    }
    setup = (p5, parent) => {
        p5.createCanvas(500, 500).parent(parent);
    };
    draw = p5 => {
        p5.background(0);
        p5.ellipse(this.state.x, this.state.y, 70, 70);
    };
    render() {
        return (
            <div>
                <Sketch setup={this.setup} draw={this.draw} />
            </div>
        );
    }
}
```

### Props

| Prop          | Required | Type     | Description                 |
| ------------- | -------- | -------- | --------------------------- |
| className     | false    | String   | ClassName for canvas parent |
| style         | false    | Object   | Styles for canvas parent    |
| setup         | true     | Function |                             |
| draw          | true     | Function |                             |
| windowResized | false    | Function |                             |
| preload       | false    | Function |                             |
| mouseClicked  | false    | Function |                             |
| mouseMoved    | false    | Function |                             |
| doubleClicked | false    | Function |                             |
| mousePressed  | false    | Function |                             |
| mouseWheel    | false    | Function |                             |
| mouseDragged  | false    | Function |                             |
| mouseReleased | false    | Function |                             |
| keyPressed    | false    | Function |                             |
| keyReleased   | false    | Function |                             |
| keyTyped      | false    | Function |                             |
| touchStarted  | false    | Function |                             |
| touchMoved    | false    | Function |                             |
| touchEnded    | false    | Function |                             |
| deviceMoved   | false    | Function |                             |
| deviceTurned  | false    | Function |                             |
| deviceShaken  | false    | Function |                             |

#### If you like this repository star⭐ and watch👀 on [GitHub](https://github.com/Gherciu/react-p5)
