let mySprite2 = sprites.create(assets.image`myImage1`, SpriteKind.Projectile)
mySprite2.setPosition(24, 24)
mySprite2.startEffect(effects.spray)
let mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
mySprite.setPosition(24, 24)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
forever(function () {
    if (controller.left.isPressed()) {
        mySprite.x += -1
    }
    if (controller.right.isPressed()) {
        mySprite.x += 1
    }
    if (controller.down.isPressed()) {
        mySprite.y += 1
    }
    if (controller.up.isPressed()) {
        mySprite.y += -1
    }
})
forever(function () {
    if (controller.left.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`player1`,
        200,
        true
        )
        pauseUntil(() => !(controller.left.isPressed()))
    } else if (controller.right.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`player0`,
        200,
        true
        )
        pauseUntil(() => !(controller.right.isPressed()))
    } else {
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim`,
        200,
        true
        )
        pauseUntil(() => controller.left.isPressed() || controller.right.isPressed())
    }
})
