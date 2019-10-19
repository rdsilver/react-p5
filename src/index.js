import React from "react";
import p5 from "p5";

export default class Sketch extends React.Component {
    constructor(props) {
        super(props)
        this.canvasRef = React.createRef()
    }

    componentDidMount() {
        this.scketch = new p5(p => {
            p.setup = () => {
                this.props.setup(p, this.canvasRef.current);
            };
            const p5Events = [
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
                    p[event] = () => {
                        this.props[event](p);
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
        return <div ref={this.canvasRef} className={this.props.className || ""} style={this.props.style || {}} />;
    }
}
