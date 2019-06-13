import { ui } from '../../ui/layaMaxUI';
import Login from './login';
import { loadScene } from '../../utils';

export default class Start extends ui.scenes.startUI {
    public static preEnter() {
        loadScene('scenes/start.scene').then((scene: Start) => {
            scene.open();
            scene.onMounted();
        });
    }
    public onMounted(...params) {
        const { btn_back } = this;
        const { CLICK } = Laya.Event;

        btn_back.on(CLICK, this, () => {
            console.log('btn_back');
            Login.preEnter();
        });
    }
}
