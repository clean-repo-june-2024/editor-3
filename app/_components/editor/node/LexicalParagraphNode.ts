import { NodeKey } from "../LexicalNode";
import { ElementNode } from "./LexicalElementNode";

export class ParagraphNode extends ElementNode {
  __textFormat: number;
  __textStyle: string;

  constructor(key?: NodeKey) {
    super(key);
    this.__textFormat = 0;
    this.__textStyle = '';
  }

  static getType(): string {
    return "paragraph";
  }

  static clone(node: ParagraphNode): ParagraphNode {
    return new ParagraphNode();
  }
}

export function $createParagraphNode(): ParagraphNode {
  return new ParagraphNode();
}