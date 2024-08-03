import { LexicalNode, NodeKey } from "../LexicalNode";

export class ElementNode extends LexicalNode {
  __children: LexicalNode[] = [];
  constructor(key?: NodeKey) {
    super(key);
    this.__children = [];
  }

  append(...nodesToAppend: LexicalNode[]): this {
    this.__children.push(...nodesToAppend);
    return this;
  }
}