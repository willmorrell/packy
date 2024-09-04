statusbars.onZero(StatusBarKind.Health, function (status) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -1
})
let mySprite2: Sprite = null
let statusbar: StatusBarSprite = null
tiles.setCurrentTilemap(tilemap`level2`)
let manpac = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . 2 2 2 2 2 2 2 . . . . . . . 
    . . 2 2 2 2 2 9 9 . . . . . . . 
    . 2 2 2 2 2 2 9 9 . . . . . . . 
    . 2 2 2 2 2 2 2 2 . . . . . . . 
    . 2 2 2 2 2 2 2 2 . . . . . . . 
    . 2 2 2 2 2 2 2 2 . . . . . . . 
    . . 2 2 2 2 2 2 2 . . . . . . . 
    . . 2 2 2 . 2 2 2 . . . . . . . 
    . . 2 2 2 . 2 2 2 . . . . . . . 
    . . 2 2 2 . 2 2 2 . . . . . . . 
    . . 2 2 2 . 2 2 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(manpac)
controller.moveSprite(manpac)
tiles.placeOnTile(manpac, tiles.getTileLocation(0, 0))
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(manpac)
statusbar.setColor(9, 7)
statusbar.setLabel("HP")
let THE_DEVIL = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 8 8 8 8 8 8 . . 
    . . . . . . . . 9 9 8 8 8 8 . . 
    . . . . . . . . 9 9 8 8 8 8 8 . 
    . . . . . . . . 8 8 8 8 8 8 8 . 
    . . . . . . . . 8 8 8 8 8 8 8 . 
    . . . . . . . . 8 8 8 8 8 8 . . 
    . . . . . . . . 8 8 8 8 8 8 . . 
    . . . . . . . . 8 8 8 8 8 8 . . 
    . . . . . . . . 8 8 . . 8 8 . . 
    . . . . . . . . 8 8 . . 8 8 . . 
    . . . . . . . . 8 8 . . 8 8 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
THE_DEVIL.follow(manpac, 90)
tiles.placeOnTile(THE_DEVIL, tiles.getTileLocation(15, 15))
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
})
game.onUpdateInterval(10000, function () {
    mySprite2 = sprites.create(assets.image`w`, SpriteKind.Food)
})
