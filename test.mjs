import {watch} from "chokidar";
import {rollup} from "rollup";
import createTypeScriptPlugin from "@rollup/plugin-typescript";

const build = () => {
    return rollup({
        input: 'src/index.ts',
        plugins: [
            createTypeScriptPlugin({
                noForceEmit: true
            })
        ]
    });
};

build().then(() => {
    const watcher = watch(['src/index.ts']);

    console.log('WATCHER CREATED');

    watcher.on("change", (file) => {
        console.log('FILE CHANGED', file);
        
        return build();
    });
});

