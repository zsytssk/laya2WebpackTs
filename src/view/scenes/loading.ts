import { ui } from '../../ui/layaMaxUI';

/** loading场景 */
export default class LoadingScene extends ui.scenes.loadingUI {
    constructor() {
        super();
    }

    public onShow() {
        console.log('LoadingScene onReset');
    }

    public onReset() {
        console.log('LoadingScene onReset');
    }

    public onProgress(val: number) {
        this.progress.value = val;
    }
}
