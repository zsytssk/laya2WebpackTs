import { ui } from '../../ui/layaMaxUI';
import Start from './start';
import { loadScene } from '../../utils';

export default class Login extends ui.scenes.loginUI {
    public static preEnter() {
        loadScene('scenes/login.scene').then((scene: Login) => {
            scene.open();
            scene.onMounted();
        });
    }
    public onMounted(...params) {
        console.log(...params);
        this.initEvent();
    }
    public onResize(width: number, height: number) {
        console.log('Scene onResize', width, height);
    }
    private initEvent() {
        const { open_dialog, enter_start } = this;
        const { CLICK } = Laya.Event;
        open_dialog.on(CLICK, this, () => {
            loadScene('pop/alert.scene').then((pop: Laya.Dialog) => {
                pop.popup();
            });
        });
        enter_start.on(CLICK, this, () => {
            console.log('enter_start');
            Start.preEnter();
        });
    }
}
