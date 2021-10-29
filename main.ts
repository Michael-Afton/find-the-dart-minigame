enum RadioMessage {
    message1 = 49434
}
namespace SpriteKind {
    export const objective = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.objective, function (sprite, otherSprite) {
    mySprite2 = sprites.create(assets.image`dead bobby`, SpriteKind.Food)
    pause(2000)
    mySprite2.destroy()
    mySprite3 = sprites.create(assets.image`bobbys gravestone`, SpriteKind.Player)
    pause(2000)
    mySprite3.destroy()
    mySprite4 = sprites.create(assets.image`bobbys hand`, SpriteKind.Player)
    pause(2000)
    mySprite4.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    game.splash("i am undead, you cannot destoy me!!!UwU")
    mySprite6.startEffect(effects.disintegrate)
    pause(2000)
    music.playMelody("C5 A F D C D C D ", 6)
    game.over(false)
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    mySprite6 = sprites.create(assets.image`derick`, SpriteKind.Player)
    controller.player2.moveSprite(mySprite6)
    mySprite.setVelocity(35, 19)
    mySprite.setPosition(132, 41)
})
controller.player1.onEvent(ControllerEvent.Connected, function () {
    myEnemy = sprites.create(assets.image`zombie bobby`, SpriteKind.Enemy)
    controller.player1.moveSprite(myEnemy)
    myEnemy.setVelocity(15, 21)
    myEnemy.setPosition(47, 83)
})
let myEnemy: Sprite = null
let mySprite6: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(9)
effects.blizzard.startScreenEffect(5000)
let objective_1 = darts.create(assets.image`Nerf dart`, SpriteKind.Player, 10, 70)
objective_1.throwDart()
pause(2000)
game.splash("find the dart")
scene.setBackgroundColor(7)
let myDart2 = darts.create(assets.image`Nerf dart mock 2`, SpriteKind.objective)
mySprite = sprites.create(assets.image`bobby`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setVelocity(21, 21)
mySprite.setPosition(111, 25)
