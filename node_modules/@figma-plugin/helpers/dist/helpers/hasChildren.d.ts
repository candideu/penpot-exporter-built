/// <reference types="plugin-typings" />
/**
 * Checks node to have children nodes
 * For example:
 *
 * ```ts
 * // BEFORE
 * console.log(node.children) // throw TS error "Property 'children' does not exist on type ..."
 *
 * // AFTER
 * if (hasChildren(node)) {
 *  console.log(node.children) // valid code
 * }
 * ```
 *
 */
export declare const hasChildren: (node: BaseNode) => node is (TextNode & ChildrenMixin) | (SliceNode & ChildrenMixin) | (FrameNode & ChildrenMixin) | (GroupNode & ChildrenMixin) | (ComponentSetNode & ChildrenMixin) | (ComponentNode & ChildrenMixin) | (InstanceNode & ChildrenMixin) | (BooleanOperationNode & ChildrenMixin) | (VectorNode & ChildrenMixin) | (StarNode & ChildrenMixin) | (LineNode & ChildrenMixin) | (EllipseNode & ChildrenMixin) | (PolygonNode & ChildrenMixin) | (RectangleNode & ChildrenMixin) | (DocumentNode & ChildrenMixin) | (PageNode & ChildrenMixin);
