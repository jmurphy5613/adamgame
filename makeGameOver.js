import { score } from "./makeGame.js"
export function makeGameOver(k) {
    return k.scene("gameOver", () => {

        const hudBox = k.add([
            k.pos(0, 0),
            k.rect(1280, 64),
            k.outline(4),
            k.color(k.Color.fromHex("#5fabc9")),
            k.z(10),
            k.area(),
            k.body({isStatic: true}),
          ]);

          k.add([
            k.text("Score:" + score.toString()), k.pos(500, 20,), k.z(10)
          ]);
      
        k.add([
            k.text("Game Over", {
                size: 72,
                font: "monospace",
            }),
            k.anchor("center"),
            k.color(k.Color.fromHex("#5fabc9")),
            k.pos(k.center().x, k.center().y),
        ]);

        k.add([
            k.text("Press Space to Play Again", {
                size: 32,
                font: "monospace",
    }),
            k.pos(k.center().x, k.center().y + 64),
            k.color(k.Color.fromHex("#5fabc9")),
            k.anchor("center"),
        ]);

        k.onKeyPress("space", () => {
            k.go("game");
        });
    });
}