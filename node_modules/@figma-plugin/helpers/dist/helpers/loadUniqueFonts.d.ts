/// <reference types="plugin-typings" />
/**
 * this function allows you to load only unique fonts asynchronously
 */
export default function loadUniqueFonts(textNodes: Array<TextNode>): Promise<FontName[]>;
