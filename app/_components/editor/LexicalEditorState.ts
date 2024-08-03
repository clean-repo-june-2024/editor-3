import { LexicalNode } from "./LexicalNode";
import { BaseSelection } from "./LexicalSelection";

export class EditorState {
  _nodeMap: Map<string, LexicalNode>;
  _selection: null | BaseSelection;
  _readOnly: boolean;

  constructor() {
    this._nodeMap = new Map();
    this._selection = null;
    this._readOnly = false;
  }
}
