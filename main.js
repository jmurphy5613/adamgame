import kaplay from "kaplay";
import { loadAssets } from "./assetLoader.js";
import { makeMenu } from "./makeMenu.js";
import { makeGame } from "./makeGame.js"
import { makeGameOver } from "./makeGameOver.js";


const k = kaplay({
    width: 1280,
    height: 720,
    scale: .7,
    letterbox: true,
    background: [40, 117, 45],
});

loadAssets(k);
makeMenu(k);
makeGame(k);
makeGameOver(k);


k.go("menu");









