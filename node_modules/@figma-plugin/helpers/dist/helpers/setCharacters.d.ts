/**
 * This helper will check font and set fallback before set characters to node. Useful to work with TextNode content changes.
 * For example:
 * ```diff
 * const text = "New text for label";
 * const labelNode = figma.currentPage.findOne((el) => el.type === "TEXT");
 * - await figma.loadFontAsync({
 * -    family: labelNode.fontName.family,
 * -    style: labelNode.fontName.style
 * - })
 * - labelNode.characters = text;
 * + await setCharacters(labelNode, text);
 * ```
 *
 * Provided example doesn't handle many annoying cases like, not existed or multiple fonts, which expand code a lot. `setCharacters` cover this cases and reducing noise.
 *
 * @param node Target node to set characters
 * @param characters String of characters to set
 * @param options Parser options
 * @param options.fallbackFont Font that will be applied to target node, if original will fail to load. By default is "Roboto Regular"
 * @param options.smartStrategy Parser stragtegy, that allows to set font family and styles to characters in more flexible way
 */
/// <reference types="plugin-typings" />
export declare const setCharacters: (node: TextNode, characters: string, options?: {
    smartStrategy?: 'prevail' | 'strict' | 'experimental';
    fallbackFont?: FontName;
}) => Promise<boolean>;
