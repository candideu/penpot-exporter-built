/// <reference types="plugin-typings" />
/**
 * Return top level parent for node before PageNode.
 * For example:
 * ```js
 * // for structure below
 * // Page / Frame / Group1 / Group2 / Text
 *
 * getTopLevelParent(Text) // Frame
 * ```
 */
export declare const getTopLevelParent: (node: BaseNode) => BaseNode;
/**
 * Calculate relative position of node based on provided parent or top level parent.
 * For example:
 * ```js
 * // for structure below
 * // Page / Frame / Group1 / Group2 / Text
 *
 * getRelativePosition(Text, Group1) // will calculate { x, y } based on Group1
 *
 * getRelativePosition(Text) // will calculate { x, y } based on Frame
 * ```
 **/
export declare const getRelativePosition: (node: BaseNode & LayoutMixin, relativeNode?: BaseNode & LayoutMixin) => {
    x: number;
    y: number;
};
