export function makeGame(k) {
    return k.scene("game", () => {
        const hudBox = k.add([
            k.pos(0, 0),
            k.rect(1280, 64),
            k.outline(4),
            k.color(k.Color.fromHex("#5fabc9")),
            k.z(10),
        ]);


        const score = k.add([
            k.pos(20, 20),
            k.color(k.Color.fromHex("#1a333d")),
            k.text("Score: 0", { size: 32, font: "monospace" }),
            k.z(10),
            { value: 0 },
        ]);

        const player = k.add([
            k.pos(k.center().x, 700 - 64),
            k.sprite("cleatus", "player-down"),
            k.area(),
            k.body(),
            k.anchor("center"),
            k.scale(4),
            { speed: 400 },
            "cleatus",
        ]);

        const speeds = [300, 400, 600]
        const currentSpeed = speeds[Math.floor(Math.random() * speeds.length)];

        function spawnRedChip() {
            k.add([
                k.pos(k.rand(k.vec2(k.width(), 0))),
                k.sprite("red-chip"),
                k.area(),
                k.body(),
                k.anchor("center"),
                k.scale(4),
                k.move(k.vec2(0, -1), currentSpeed),
                {
                    speed: k.rand(100, 300),
                },
                "redChip",
            ]);
        }

        function spawnGreenChip() {
            k.add([
                k.pos(k.rand(k.vec2(k.width(), 0))),
                k.sprite("green-chip"),
                k.area(),
                k.body(),
                k.anchor("center"),
                k.scale(4),
                k.move(k.vec2(0, -1), currentSpeed),
                {
                    speed: k.rand(100, 300),
                },
                "greenChip",
            ]);
        }


            function spawnBlueChip() {
               k.add([
                    k.pos(k.rand(k.vec2(k.width(), 0))),
                    k.sprite("blue-chip"),
                    k.area(),
                    k.body(),
                    k.anchor("center"),
                    k.scale(4),
                    k.move(k.vec2(0, -1), currentSpeed),
                    {
                        speed: k.rand(100, 300),
                    },
                    "blueChip",
                ]);
            }

        

        spawnRedChip();
        spawnGreenChip();
        spawnBlueChip();
        spawnRedChip();
        spawnGreenChip();
        spawnBlueChip();

        k.onKeyDown("a", () => {
            player.flipX = true;
            if (player.curAnim() !== "walk") {
                player.play("walk");
            }
            player.move(-player.speed, 0);
            if (player.pos.x <= 32) {
                player.pos.x = 32;
            }
        });

        k.onKeyDown("d", () => {
            player.flipX = false;
            if (player.curAnim() !== "walk") {
                player.play("walk");
            }
            player.move(player.speed, 0);
            if (player.pos.x >= k.width() - 32) {
                player.pos.x = k.width() - 32;
            }
        });

        k.onKeyDown("w", () => {
            player.move(0, -player.speed);
            if (player.pos.y <= 0) {
                player.pos.y = 0;
            }
        });

        k.onKeyDown("s", () => {
            player.move(0, player.speed);
            if (player.pos.y >= k.height() - 32) {
                player.pos.y = k.height() - 32;
            }
        });





    });
}


