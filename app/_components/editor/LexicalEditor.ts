import { NO_DIRTY_NODES } from "./constants";
import { EditorState } from "./LexicalEditorState";
import { NodeKey } from "./LexicalNode";
import { $beginUpdate } from "./LexicalUpdate";

export type EditorUpdateOptions = {
  onUpdate?: () => void;
  skipTransforms?: true;
  tag?: string;
  discrete?: true;
};

export type IntentionallyMarkedAsDirtyElement = boolean;

export class LexicalEditor {
  _parentEditor: null | LexicalEditor;
  _rootElement: null | HTMLElement;
  _editorState: EditorState;
  _nodes: Map<string, any>;
  _compositionKey: null | NodeKey;
  _updating: boolean;
  _updates: Array<[() => void, EditorUpdateOptions | undefined]>;
  _cloneNotNeeded: Set<NodeKey>;
  _dirtyElements: Map<NodeKey, IntentionallyMarkedAsDirtyElement>;
  _dirtyType: 0 | 1 | 2;
  _dirtyLeaves: Set<NodeKey>;

  constructor(
    parentEditor: null | LexicalEditor,
    editorState: EditorState,
    nodes: Map<string, any>,
  ) {
    this._parentEditor = parentEditor;
    this._rootElement = null;
    this._editorState = editorState;
    this._nodes = nodes;
    this._compositionKey = null;
    this._updating = false;
    this._updates = [];
    this._cloneNotNeeded = new Set();
    this._dirtyType = NO_DIRTY_NODES;
    this._dirtyElements = new Map();
    this._dirtyLeaves = new Set();
  }

  update(callback: () => void) {
    $beginUpdate(this._editorState, callback);
    this._editorState._nodeMap = new Map(this._nodes);
    callback();
    // After the update, you might want to trigger a re-render or update the DOM
    // This is a simplified version and might need more logic depending on your requirements
  }
}