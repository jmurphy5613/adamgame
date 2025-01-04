export function makeGameOver(k) {
    return k.scene("gameOver", () => {
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