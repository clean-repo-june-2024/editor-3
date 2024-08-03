import { LexicalNode } from "../LexicalNode";

export class TextNode extends LexicalNode {
  __text: string;

  static getType(): string {
    return 'text';
  }

  constructor(text: string) {
    super();
    this.__text = text;
  }
}

export function $createTextNode(text: string): TextNode {
  return new TextNode(text);
}