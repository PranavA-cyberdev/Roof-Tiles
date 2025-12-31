#  Roof Extension for MakeCode Arcade

This extension provides tools to manage "Roof" sprites in MakeCode Arcade. It allows developers to dynamically replace specific tile types with sprites of the Roof kind, which is useful for creating overhead layers, hidden areas, or weather-shielding effects in your games.

## Blocks

### Replace Tiles With Roof
```
roof.ReplaceTilesWithRoof(i: Image, zL: number)
```
This block scans the current tilemap for all tiles matching the provided image. It then creates a sprite of kind Roof using that same image and places it exactly over the tile.
* i: The image of the tile you want to "elevate" into a roof sprite.
* zL: The Z-index (layer depth) for the roof sprites. Defaulting to a high value like 100 ensures the roof stays above the player and other game elements.

### Code:
```
namespace roof {

    /**
     * Replace tiles of a specific image with a sprite.
     * @param i Image of tile to replace
     * @param zL Z level of roof sprite, 100
     */
    //% block
    export function ReplaceTilesWithRoof(i: Image, zL: number): void {
        let roof: Sprite = null
        for (let Tile of tiles.getTilesByType(i)) {
            roof = sprites.create(i, SpriteKind.Roof)
            tiles.placeOnTile(roof, Tile)
            roof.x += 0
            roof.y += 0
            roof.z = zL
        }
    }
}
```

## Destroy All Roof Sprites
```
roof.DestroyAllRoofSprites()
```
This block instantly removes all sprites of the Roof kind from the game. This is helpful for "entering" a building where you want the roof to disappear so the player can see the interior.

### Code:
```
namespace roof {
    /**
     * Destroy all roof sprites
     */
    //% block
    export function DestroyAllRoofSprites(): void {
        sprites.destroyAllSpritesOfKind(SpriteKind.Roof)
    }
}
```

## Custom Sprite Kind
This extension utilizes the SpriteKind.Roof type. Make sure your project defines this kind in your enums.d.ts or via the Sprite Kind editor.

## Example Usage
In this example, when the player overlaps a "doorway" tile, we destroy the roofs to see inside.
```
// On start: Turn all stone tiles into a roof layer at Z-level 100
roof.ReplaceTilesWithRoof(img`stoneTile`, 100)

// When the player hits a trigger to enter a house
sprites.onOverlap(SpriteKind.Player, SpriteKind.Trigger, function (sprite, otherSprite) {
    roof.DestroyAllRoofSprites()
})
```

## Supported Targets

* for PXT/arcade
