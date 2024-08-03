import { LexicalEditor } from "./LexicalEditor";
import { EditorState } from "./LexicalEditorState";
import invariant from "./shared";

let activeEditorState: null | EditorState = null;

export function getActiveEditorState(): EditorState {
  if (activeEditorState === null) {
    invariant(
      false,
      'Unable to find an active editor state. ' +
        'State helpers or node methods can only be used ' +
        'synchronously during the callback of ' +
        'editor.update(), editor.read(), or editorState.read().',
    );
  }

  return activeEditorState;
}

export function $beginUpdate(
  editorState: EditorState,
  updateFn: () => void,
){
  activeEditorState = editorState;
}