// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010102010101010102010101010303030303030303030303030303010201010101020104030201010101030101030303030303010301030303010302010301030303030103010301010103010403010101020101030103030303030201030303030303030304010101010301010101020101030203010303030103020103030303010301030103030304030101030303030103010102030101010301020303030303030103030303030303010103010101010301030102040102030101030303030103040301030303010302010104010102030103010303030303010103030303030301030203030301030102010401010101020101010401010102`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 . 2 2 2 2 2 . 2 
2 . . . . . . 2 . 2 . . . 2 . 2 
2 . 2 . . . . 2 . 2 . 2 2 2 . 2 
2 . 2 2 2 2 2 2 . 2 . . . . . 2 
2 . . . . . . . . 2 2 2 2 2 . 2 
2 2 2 2 2 2 . 2 . 2 . . . 2 . 2 
2 . . . . 2 . 2 . 2 . . . 2 . 2 
2 . . . . 2 . 2 2 2 . 2 2 2 . 2 
2 . . . . . . 2 . . . . . . . 2 
2 . 2 2 2 2 . 2 . 2 2 2 2 2 . 2 
2 . . . . 2 . 2 . 2 . . . 2 . 2 
2 2 2 2 2 2 . 2 . 2 . . . . . 2 
2 . . . . . . 2 . 2 . . . 2 . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.floorLight1,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorLightMoss], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
