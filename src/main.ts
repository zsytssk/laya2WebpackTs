import GameConfig from './GameConfig';
import { ui } from './ui/layaMaxUI';
import Login from './view/scenes/login';

function main() {
    init().then(() => {
        Login.preEnter();
    });
}
main();

function init() {
    return new Promise((resolve, reject) => {
        Laya.init(GameConfig.width, GameConfig.height, Laya.WebGL);
        Laya.stage.scaleMode = GameConfig.scaleMode;
        Laya.stage.screenMode = GameConfig.screenMode;
        Laya.stage.alignV = GameConfig.alignV;
        Laya.stage.alignH = GameConfig.alignH;
        // 兼容微信不支持加载scene后缀场景
        Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
        if (GameConfig.physicsDebug && Laya.PhysicsDebugDraw) {
            Laya.PhysicsDebugDraw.enable();
        }
        // 激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
        Laya.AtlasInfoManager.enable(
            'fileconfig.json',
            Laya.Handler.create(null, () => {
                resolve();
            })
        );
    });
}
