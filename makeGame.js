export let score = 0; 
export function makeGame(k) {
    return k.scene("game", () => {
      const hudBox = k.add([
        k.pos(0, 0),
        k.rect(1280, 64),
        k.outline(4),
        k.color(k.Color.fromHex("#5fabc9")),
        k.z(10),
        k.area(),
        k.body({isStatic: true}),
      ]);
  
    
       //score
     
      const scoreUI = k.add ([k.text("Score: 0"), k.Color.fromHex("#1a333d"), k.pos(500, 20), k.z(10)]);

      k.loop(.2, () => {
        score++;
        scoreUI.text = "Score: " + score.toString();
      });
    
  //spawn-sprites
      const player = k.add([
          k.pos(640, 360),
            k.sprite("cleatus"),
          k.scale(5),
          k.area(),
          k.body(),
          k.z(10),
          "cleatus",
          { speed: 350 }
          
      ]);
  
      const speeds = [300, 400, 600];
      const currentSpeed = speeds[Math.floor(Math.random() * 1.5)];

      function spawnRedChip() {
        k.add([
          k.sprite("redChip"),
          k.pos(k.rand(0, 1150), 0),
          k.scale(6),
          k.area(),
          k.body(),
          k.z(10),
          k.offscreen({destroy: true, distance: 10 }),
          k.move(k.vec2(0, 11), currentSpeed),
          "redChip"
        ]);
      }

      function spawnBlueChip() {
        k.add([
          k.sprite("blueChip"),
          k.pos(k.rand(0, 1150), 0),
          k.scale(6),
          k.area(),
          k.body(),
          k.z(10),
          k.offscreen({destroy: true, distance: 10 }),
          k.move(k.vec2(0, 11), currentSpeed),
          "blueChip"
        ]);
      }

      function spawnGreenChip() {
        k.add([
          k.sprite("greenChip"),
          k.pos(k.rand(0, 1150), 0),
          k.scale(6),
          k.area(),
          k.body(),
          k.z(10),
          k.offscreen({destroy: true, distance: 10 }),
          k.move(k.vec2(0, 11), currentSpeed),
          "greenChip"
        ]);
      }

    k.loop(1, () => {
      spawnRedChip();
      spawnRedChip();
      spawnBlueChip();
      spawnBlueChip();
      spawnGreenChip();
      spawnGreenChip();
    });

    k.loadSound('death', '/roblox-death.mp3')
    //dead
    k.onCollide("cleatus", "redChip", (player, redChip) => {
      k.destroy(redChip);
      k.destroy(player);
      k.play('death')
      k.go('gameOver', { score: score.value });
    });

    k.onCollide("cleatus", "blueChip", (player, blueChip) => {
      k.destroy(blueChip);
      k.destroy(player);
      k.play('death')

      k.go('gameOver', { score: score.value });
    });

    k.onCollide("cleatus", "greenChip", (player, greenChip) => {
      k.destroy(greenChip);
      k.destroy(player);
      k.play('death')

      k.go('gameOver', { score: score.value });
    });

    //Movement
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
        if (player.pos.x >= k.width() - 54) {
          player.pos.x = k.width() - 54;
        }
      });

      k.onKeyDown("w", () => {
        if (player.curAnim() !== "up") {
          player.play("up");
        }
        player.move(0, -player.speed);
        if (player.pos.y <= 0) {
            player.pos.y = 0;
        }
      });

      k.onKeyDown("s", () => {
        player.flipX = false;
        if (player.curAnim() !== "down") {
          player.play("down");
        }
        player.move(0, player.speed);
        if (player.pos.y >= k.height() - 78) {
            player.pos.y = k.height() - 78;
        }
      
    });

    

  })
}