export function loadAssets(k) {
    k.loadSpriteAtlas('/assets/poker-sheet.png', {
        "cleatus": { 
            x: 0, 
            y: 16, 
            width: 48, 
            height: 16,
            sliceX: 4,
            anims: {
                "walk": { from: 2, to: 3, speed: 6 },
                "down": { from: 0, to: 0, speed: 6 },
                "up": { from: 1, to: 1, speed: 6 },
            },
            
        },

        "redChip": { 
            x: 2, 
            y: 2, 
            width: 12, 
            height: 12,
        },

        "blueChip": { 
            x: 18, 
            y: 2, 
            width: 12, 
            height: 12,
        },

        "greenChip": { 
            x: 34, 
            y: 2, 
            width: 12, 
            height: 12,
        },
    })
}