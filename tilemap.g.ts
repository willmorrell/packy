// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100002020202010101010101010101010101010101020101020202010101010101010102010202020201020102010101020101020202010101010202020202020201010101010101010102010202010102010202020101010101020101010102020102010202020202020201020202020101020101010101010101010202020201010201010101010202020202020201010102020201010102010101010202010101010102020202020102010102010101010101020101010101020101020101020101010202010202020201010202020201010102020101010102020202020102010101020201010101010101020201020201010101010101010101010202020202`, img`
. . . . 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . 2 2 . . . 2 2 2 2 2 2 2 
2 . 2 . . . . 2 . 2 . 2 2 2 . 2 
2 . . . 2 2 2 2 . . . . . . . 2 
2 2 2 2 2 2 2 2 . 2 . . 2 2 . 2 
. . . 2 2 2 2 2 . 2 2 2 2 . . 2 
. 2 . . . . . . . 2 . . . . 2 2 
. 2 2 2 2 2 2 2 2 2 . . . . 2 2 
. 2 2 2 2 2 . . . . . . . 2 2 2 
. . . 2 2 2 . 2 2 2 2 . . 2 2 2 
2 2 . . . . . 2 . 2 2 . 2 2 2 2 
2 2 . 2 2 2 2 2 . 2 2 . 2 2 . 2 
2 2 . . 2 . . . . 2 2 . . . . 2 
2 2 . . 2 2 2 2 . . . . . 2 . 2 
2 2 . . 2 2 2 2 2 2 2 . . 2 . . 
2 2 2 2 2 2 2 2 2 2 2 . . . . . 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.floorLight5], TileScale.Sixteen);
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
