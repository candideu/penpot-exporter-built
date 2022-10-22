/// <reference types="plugin-typings" />
/**
 * this function converts figma color to RGB(A) (array)
 */
declare function figmaRGBToWebRGB(color: RGBA): webRGBA;
declare function figmaRGBToWebRGB(color: RGB): webRGB;
/**
 * this function converts RGB(A) color (array) to figma color
 */
declare function webRGBToFigmaRGB(color: webRGBA): RGBA;
declare function webRGBToFigmaRGB(color: webRGB): RGB;
/**
 * this function converts figma color to HEX (string)
 */
declare function figmaRGBToHex(color: RGB | RGBA): string;
/**
 * this function converts HEX color (string) to figma color
 */
declare function hexToFigmaRGB(color: string): RGB | RGBA;
export { figmaRGBToWebRGB, webRGBToFigmaRGB, figmaRGBToHex, hexToFigmaRGB };
declare type webRGB = [number, number, number];
declare type webRGBA = [number, number, number, number];
