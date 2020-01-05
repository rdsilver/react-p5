import React from "react";
import p5 from "p5";

if(typeof window !== undefined)
  window.p5 = p5
export default class Sketch extends React.Component {
    constructor(props) {
        super(props)
        this.canvasParentRef = React.createRef()
    }

    componentDidMount() {
        this.scketch = new p5(p5Instance => {
            const customisedP5Instance = {
              ...p5Instance,
              createCanvas: (...args) => {
                p5Instance.createCanvas(...args).parent(this.canvasParentRef);
              }
            }
            const p5Events = [
                "setup",
                "draw",
                "windowResized",
                "preload",
                "mouseClicked",
                "doubleClicked",
                "mouseMoved",
                "mousePressed",
                "mouseWheel",
                "mouseDragged",
                "mouseReleased",
                "keyPressed",
                "keyReleased",
                "keyTyped",
                "touchStarted",
                "touchMoved",
                "touchEnded",
                "deviceMoved",
                "deviceTurned",
                "deviceShaken"
            ];
            p5Events.forEach(event => {
                if (this.props[event]) {
                    customisedP5Instance[event] = () => {
                        this.props[event](customisedP5Instance);
                    };
                }
            });
        });
    }
    shouldComponentUpdate() {
        return false;
    }
    componentWillUnmount() {
        this.scketch.remove();
    }
    render() {
        return <div ref={this.canvasParentRef} className={this.props.className || "react-p5"} style={this.props.style || {}} />;
    }
}
