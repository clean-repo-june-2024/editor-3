import { EditorState } from "./LexicalEditorState";
import { getActiveEditorState } from "./LexicalUpdate";
import { RootNode } from "./node/LexicalRootNode";

export function internalGetRoot(editorState: EditorState): RootNode {
  return editorState._nodeMap.get('root') as RootNode;
}

export function $getRoot(): RootNode {
  return internalGetRoot(getActiveEditorState());
}
