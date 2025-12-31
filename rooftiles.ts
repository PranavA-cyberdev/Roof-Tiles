namespace SpriteKind {
    export const Roof = SpriteKind.create()
}

//%color=#b22222 icon="⩓"

namespace roof{

    /**
     * Replace tiles of a specific image with a sprite.
     * @param i Image of tle to replace
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
namespace roof {

    /**
     * Destroy all roof sprites
     */
    //% block

    export function DestroyAllRoofSprites(): void {
        sprites.destroyAllSpritesOfKind(SpriteKind.Roof)
    }
}
