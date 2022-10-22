/// <reference types="plugin-typings" />
/**
 * This method can extract the image crop rotation, scale (/size) and position.
 *
 * @param shapeWidth
 * @param shapeHeight
 * @param t
 */
export declare function extractImageCropParams(shapeWidth: number, shapeHeight: number, t: Transform): {
    rotation: number;
    scale: number[];
    size: number[];
    position: number[];
};
