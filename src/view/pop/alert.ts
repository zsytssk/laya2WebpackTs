import { ui } from '../../ui/layaMaxUI';

export default class Alert extends ui.pop.alertUI {
    constructor() {
        super();
    }
    /** 只会在弹出层第一次创建完成的时候执行 */
    public onAwake() {
        this.initEvent();
    }
    public onMounted(msg: string) {
        this.msg.text = msg;
    }
    private initEvent() {
        const { btn_confirm, btn_cancel } = this;
        const { CLICK } = Laya.Event;
        btn_confirm.on(CLICK, this, () => {
            console.log('btn_confirm');
            this.close();
        });
        btn_cancel.on(CLICK, this, () => {
            console.log('btn_cancel');
            this.close();
        });
    }
}
