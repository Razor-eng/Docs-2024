"use client";
import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import TaskItem from "@tiptap/extension-task-item"
import TaskList from "@tiptap/extension-task-list"
import TableHeader from "@tiptap/extension-table-header"
import TableRow from "@tiptap/extension-table-row"
import { Color } from '@tiptap/extension-color'
import FontFamily from '@tiptap/extension-font-family'
import TextAlign from '@tiptap/extension-text-align'
import TextStyle from '@tiptap/extension-text-style'
import TableCell from "@tiptap/extension-table-cell"
import Table from '@tiptap/extension-table'
import Highlight from '@tiptap/extension-highlight'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import ImageResize from 'tiptap-extension-resize-image'
import Underline from '@tiptap/extension-underline'
import { UseEditorStore } from "@/store/use-editor-store";
import { FontSizeExtension } from "@/extensions/font-size";
import { LineHeightExtension } from "@/extensions/line-height";
import { useLiveblocksExtension } from "@liveblocks/react-tiptap";
import Ruler from "./ruler";
import { Threads } from "./threads";
import { useStorage } from "@liveblocks/react";
import { LEFT_MARGIN_DEFAULT, RIGHT_MARGIN_DEFAULT } from "@/constants/margins";

interface Props {
    initialContent?: string | undefined;
}

export const Editor = ({ initialContent }: Props) => {
    const leftMargin = useStorage((root) => root.leftMargin) ?? LEFT_MARGIN_DEFAULT;
    const rightMargin = useStorage((root) => root.rightMargin) ?? RIGHT_MARGIN_DEFAULT;

    const liveblocks = useLiveblocksExtension({
        initialContent,
        offlineSupport_experimental: true
    });
    const { setEditor } = UseEditorStore();

    const editor = useEditor({
        autofocus: true,
        immediatelyRender: false,
        onCreate({ editor }) {
            setEditor(editor);
        },
        onDestroy() {
            setEditor(null);
        },
        onUpdate({ editor }) {
            setEditor(editor);
        },
        onSelectionUpdate({ editor }) {
            setEditor(editor);
        },
        onTransaction({ editor }) {
            setEditor(editor);
        },
        onFocus({ editor }) {
            setEditor(editor);
        },
        onBlur({ editor }) {
            setEditor(editor);
        },
        onContentError({ editor }) {
            setEditor(editor);
        },
        editorProps: {
            attributes: {
                style: `padding-left:${leftMargin}px; padding-right:${rightMargin}px;`,
                class: "focus:outline-none print:border-0 bg-white border border-[$C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text"
            }
        },
        extensions: [
            liveblocks,
            StarterKit.configure({
                history: false
            }),
            FontFamily,
            TextStyle,
            FontSizeExtension,
            LineHeightExtension,
            Highlight.configure({
                multicolor: true
            }),
            Link.configure({
                openOnClick: false,
                autolink: true,
                defaultProtocol: 'https'
            }),
            TextAlign.configure({
                types: ["heading", "paragraph"]
            }),
            Color,
            Table,
            TableHeader,
            TableRow,
            TableCell,
            Image,
            ImageResize,
            Underline,
            TaskItem.configure({
                nested: true
            }),
            TaskList
        ],
    })

    return (
        <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible">
            <Ruler />
            <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
                <EditorContent editor={editor} />
                <Threads editor={editor} />
            </div>
        </div>
    )
}