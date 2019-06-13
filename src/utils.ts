export function loadScene(url: string): Promise<Laya.Scene> {
    return new Promise((resolve, reject) => {
        Laya.Scene.load(
            url,
            Laya.Handler.create(null, scene => {
                resolve(scene);
            })
        );
    });
}
