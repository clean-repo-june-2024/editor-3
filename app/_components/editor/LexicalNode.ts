import invariant from "./shared";

export type NodeKey = string;

export class LexicalNode {
  __type: string;
  __key: string;
  __parent: null | NodeKey;
  __prev: null | NodeKey;
  __next: null | NodeKey;

  ['constructor']!: typeof LexicalNode;

  constructor(key?: NodeKey) {
    this.__type = this.constructor.getType();
    this.__parent = null;
    this.__prev = null;
    this.__next = null;
    this.__key = key || '';
  }

  static getType(): string {
    invariant(
      false,
      'LexicalNode: Node %s does not implement .getType().',
      this.name,
    );
  }
}