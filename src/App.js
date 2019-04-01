import React, { Component } from "react";
import { Sketch } from "./Sketch";

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
    windowResized = p => {
        p.resizeCanvas(200, 200);
    };
    incrementX = e => {
        this.setState(s => ({ x: s.x + 10 }));
    };
    incrementY = e => {
        this.setState(s => ({ y: s.y + 10 }));
    };
    decrementX = e => {
        this.setState(s => ({ x: s.x - 10 }));
    };
    decrementY = e => {
        this.setState(s => ({ y: s.y - 10 }));
    };
    render() {
        return (
            <div>
                <center>
                    <h1>My App</h1>
                    <Sketch setup={this.setup} draw={this.draw} windowResized={this.windowResized} className="myCanvas" />
                    <Sketch setup={this.setup} draw={this.draw} windowResized={this.windowResized} style={{ padding: 20, background: "red" }} />
                    <span>X: {this.state.x}</span>
                    <span>Y: {this.state.y}</span>
                    <div>
                        <button onClick={this.incrementX}>X+10</button>
                        <button onClick={this.incrementY}>Y+10</button>
                        <button onClick={this.decrementX}>X-10</button>
                        <button onClick={this.decrementY}>Y-10</button>
                    </div>
                </center>
            </div>
        );
    }
}
