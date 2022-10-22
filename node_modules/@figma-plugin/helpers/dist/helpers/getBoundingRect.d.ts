/// <reference types="plugin-typings" />
/**
 *  this function return a bounding rect for an nodes
 */
export default function getBoundingRect(nodes: SceneNode[]): {
    x: number;
    y: number;
    x2: number;
    y2: number;
    height: number;
    width: number;
};
