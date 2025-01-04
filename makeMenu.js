export function makeMenu(k) {
    return k.scene("menu", () => {
     k.add([
        k.text("Avoid the falling chips!", {
            size: 25, 
            font: "monospace",
        }),
        k.anchor("center"),
        k.color(k.Color.fromHex("#5fabc9")),
        k.pos(k.center().x, k.center().y + 128),
        ]);
    
    k.add([
        k.text("Flee the Felt", {
            size: 72,
            font: "monospace",
        }),
        k.anchor("center"),
        k.color(k.Color.fromHex("#5fabc9")),
        k.pos(k.center().x, k.center().y - 200),
    ]);



        const startButton = k.add([
            k.rect(32*6, 16*4, 0, 0),
            k.pos(k.center().x, k.center().y),
            k.color(k.Color.fromHex("#5fabc9")),
            k.anchor("center"),
            k.area(),
            "startButton",
        ]);

        startButton.add([
            k.text("Start", {size:32, font: "monospace"}),
            k.anchor("center"),
            k.color(k.Color.fromHex("#386678")),
        ]);


        k.onHover("startButton", () => {
            startButton.color = k.Color.fromHex("#1a333d");
    });

    k.onHoverEnd("startButton", () => {
        startButton.color = k.Color.fromHex("#5fabc9");
        
});

    k.onClick("startButton", () => {
        k.go("game");


    });

    })
};