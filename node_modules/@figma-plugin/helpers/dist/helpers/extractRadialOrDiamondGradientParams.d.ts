/**
 * This method can extract the rotation (in degrees), center point and radius for a radial or diamond gradient
 *
 * @param shapeWidth
 * @param shapeHeight
 * @param t
 */
export declare function extractRadialOrDiamondGradientParams(shapeWidth: number, shapeHeight: number, t: number[][]): {
    rotation: number;
    center: number[];
    radius: number[];
};
