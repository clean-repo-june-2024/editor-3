'use client';

import Image from "next/image";
import { useEffect, useRef } from "react";
import { LexicalEditor } from "./_components/editor/LexicalEditor";
import { EditorState } from "./_components/editor/LexicalEditorState";
import { $createParagraphNode } from "./_components/editor/node/LexicalParagraphNode";
import { $getRoot } from "./_components/editor/LexicalUtils";
import { $createTextNode } from "./_components/editor/node/LexicalTextNode";
import { $createRootNode } from "./_components/editor/node/LexicalRootNode";

export default function Home() {
  const editorRef = useRef<HTMLDivElement>(null);

  const lexicalEditorRef = useRef<LexicalEditor | null>(null);

  useEffect(() => {
    if (editorRef.current && !lexicalEditorRef.current) {
      const editorState = new EditorState();
      const nodes = new Map()
      nodes.set('root', $createRootNode());
      const editor = new LexicalEditor(null, editorState, nodes);
      lexicalEditorRef.current = editor;

      editor.update(() => {
        const root = $getRoot();
        const paragraph = $createParagraphNode();
        const text = $createTextNode("Welcome to Lexical Editor!");
        paragraph.append(text);
        root.append(paragraph);
      });
    }
  }, [editorRef]);
  return (
    <main>
      hello
      <div contentEditable={true} ref={editorRef}>

      </div>
    </main>
  );
}
