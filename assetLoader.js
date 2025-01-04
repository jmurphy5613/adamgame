export function loadAssets(k) {
    k.loadSpriteAtlas('/assets/poker-sheet.png', {
    "cleatus": {
    'player-down': { x: 0, y: 16, width: 16, height: 16 },
    'player-up': { x: 16, y: 16, width: 16, height: 16 },
    'player-side': { x: 0, y: 32, width: 32, height: 16, sliceX: 2, sliceY: 1,
        anims: { 'walk': { from: 0, to: 1, speed: 6, loop: true }}
}},
    'red-chip': { x:0, y: 0, width: 16, height: 16 },
    'blue-chip': { x: 16, y: 0, width: 16, height: 16 },
    'green-chip': { x: 32, y: 0, width: 16, height: 16 },
    'chip-stack': { x: 48, y: 0, width: 16, height: 16 },
})
}