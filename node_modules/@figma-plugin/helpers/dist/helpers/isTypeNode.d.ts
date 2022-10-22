/// <reference types="plugin-typings" />
/**
 * Checks node to be PageNode
 */
export declare const isPageNode: (node: BaseNode) => node is PageNode;
/**
 * Checks node to be GroupNode
 */
export declare const isGroupNode: (node: BaseNode) => node is GroupNode;
/**
 * Checks node to be FrameNode
 */
export declare const isFrameNode: (node: BaseNode) => node is FrameNode;
/**
 * Checks node to be TextNode
 */
export declare const isTextNode: (node: BaseNode) => node is TextNode;
/**
 * Checks node to be InstanceNode
 */
export declare const isInstanceNode: (node: BaseNode) => node is InstanceNode;
/**
 * Checks node to be ComponentNode
 */
export declare const isComponentNode: (node: BaseNode) => node is ComponentNode;
/**
 * Checks node to be one of provided types
 */
export declare const isOneOfNodeType: (node: BaseNode, typeList: NodeType[]) => boolean;
