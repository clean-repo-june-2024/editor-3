import { LexicalNode } from "../LexicalNode";
import { ElementNode } from "./LexicalElementNode";

export class RootNode extends ElementNode {
  static getType(): string {
    return 'root';
  }

  constructor() {
    super('root')
  }
}

export function $isRootNode(
  node: RootNode | LexicalNode | null | undefined,
): node is RootNode {
  return node instanceof RootNode;
}

export function $createRootNode(): RootNode {
  return new RootNode();
}