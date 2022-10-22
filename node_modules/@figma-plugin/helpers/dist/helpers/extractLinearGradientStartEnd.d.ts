/// <reference types="plugin-typings" />
/**
 * This method can extract the x and y positions of the start and end of the linear gradient
 * (scale is not important here)
 *
 * @param shapeWidth number
 * @param shapeHeight number
 * @param t Transform
 */
export declare function extractLinearGradientParamsFromTransform(shapeWidth: number, shapeHeight: number, t: Transform): {
    start: number[];
    end: number[];
};
