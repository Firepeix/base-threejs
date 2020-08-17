import { Display } from "./UI/UI";
import { Camera, PerspectiveCamera, Scene, WebGLRenderer} from "three";
import { LoveScene } from './Scenes/Scenes'
export default class  Program {
    private display: Display;
    readonly scene: LoveScene;
    readonly camera: Camera;
    private renderer: WebGLRenderer

    constructor() {
        this.display = new Display(window.innerWidth, window.innerHeight);
        this.scene = new LoveScene();
        this.camera = new PerspectiveCamera(75, this.display.getAspectRatio(), 0.1, 1000);
        this.renderer = new WebGLRenderer();
        this.renderer.setSize(this.display.width, this.display.height);
        document.body.appendChild(this.renderer.domElement);
        this.camera.position.z = 5;
    }

    public animate() {
        this.scene.animate();
        this.renderer.render(this.scene, this.camera);
    }
}