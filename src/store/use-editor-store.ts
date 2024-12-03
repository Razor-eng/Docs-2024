import { create } from "zustand";
import { type Editor } from "@tiptap/react";

type Props = {
    editor: Editor | null;
    setEditor: (editor: Editor | null) => void;
}

export const UseEditorStore = create<Props>((set) => ({
    editor: null,
    setEditor: (editor) => set({ editor })
}))