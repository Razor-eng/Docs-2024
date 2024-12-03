"use client";
import Image from 'next/image'
import Link from 'next/link'
import { DocumentInput } from './document-input'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from '@/components/ui/menubar'
import { BoldIcon, FileIcon, FileJsonIcon, FilePenIcon, FilePlusIcon, FileTextIcon, GlobeIcon, ItalicIcon, PrinterIcon, Redo2Icon, RemoveFormattingIcon, StrikethroughIcon, TextIcon, TrashIcon, UnderlineIcon, Undo2Icon } from 'lucide-react'
import { BsFilePdf } from 'react-icons/bs'
import { UseEditorStore } from '@/store/use-editor-store';
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';
import { Avatars } from './avatars';
import { Inbox } from './inbox';
import { Doc } from '../../../../convex/_generated/dataModel';
import { useMutation } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { RemoveDialog } from '@/components/remove-dialog';
import { RenameDialog } from '@/components/rename-dialog';

interface Props {
    data: Doc<"documents">;
}

export const Navbar = ({ data }: Props) => {
    const router = useRouter();
    const { editor } = UseEditorStore();

    const mutation = useMutation(api.documents.create);
    const onNewDocument = () => {
        mutation({
            title: "Untitled document",
            initialContent: ""
        }).then((id) => {
            toast.success("Document created");
            router.push(`/document/${id}`);
        }).catch(() => {
            toast.error("Something went wrong");
        });
    }

    const undo = () => {
        editor?.chain().focus().undo().run();
    }

    const redo = () => {
        editor?.chain().focus().redo().run();
    }

    const bold = () => {
        editor?.chain().focus().toggleBold().run();
    }

    const italic = () => {
        editor?.chain().focus().toggleItalic().run();
    }

    const underline = () => {
        editor?.chain().focus().toggleUnderline().run();
    }

    const strikethrough = () => {
        editor?.chain().focus().toggleStrike().run();
    }

    const clearFormatting = () => {
        editor?.chain().focus().unsetAllMarks().run();
    }

    const insertTable = ({ rows, cols }: { rows: number, cols: number }) => {
        editor?.chain().focus().insertTable({ rows, cols, withHeaderRow: false }).run();
    }

    const onDownload = (blob: Blob, filename: string) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
    }

    const onSaveJSON = () => {
        if (!editor) return;

        const content = editor.getJSON();
        const blob = new Blob([JSON.stringify(content)], {
            type: "application/json"
        });
        onDownload(blob, `${data.title}.json`);
    }

    const onSaveHTML = () => {
        if (!editor) return;

        const content = editor.getHTML();
        const blob = new Blob([content], {
            type: "text/html"
        });
        onDownload(blob, `${data.title}.html`);
    }

    const onSaveText = () => {
        if (!editor) return;

        const content = editor.getText();
        const blob = new Blob([content], {
            type: "text/plain"
        });
        onDownload(blob, `${data.title}.txt`);
    }

    return (
        <nav className='flex items-center justify-between'>
            <div className="flex gap-2 items-center">
                <Link href={'/'}>
                    <Image
                        src={"/logo.svg"}
                        alt='logo'
                        width={30}
                        height={30}
                    />
                </Link>
                <div className="flex flex-col">
                    <DocumentInput
                        id={data._id}
                        title={data.title}
                    />
                    <div className="flex">
                        <Menubar className='border-none bg-transparent shadow-none h-auto p-0'>
                            <MenubarMenu>
                                <MenubarTrigger className='text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto'>
                                    File
                                </MenubarTrigger>
                                <MenubarContent className='print:hidden'>
                                    <MenubarSub>
                                        <MenubarSubTrigger>
                                            <FileIcon className='size-4 mr-2' />
                                            Save
                                        </MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem onClick={onSaveJSON}>
                                                <FileJsonIcon className='size-4 mr-2' />
                                                JSON
                                            </MenubarItem>
                                            <MenubarItem onClick={onSaveHTML}>
                                                <GlobeIcon className='size-4 mr-2' />
                                                HTML
                                            </MenubarItem>
                                            <MenubarItem onClick={() => window.print()}>
                                                <BsFilePdf className='size-4 mr-2' />
                                                PDF
                                            </MenubarItem>
                                            <MenubarItem onClick={onSaveText}>
                                                <FileTextIcon className='size-4 mr-2' />
                                                Text
                                            </MenubarItem>
                                        </MenubarSubContent>
                                    </MenubarSub>
                                    <MenubarItem onClick={onNewDocument}>
                                        <FilePlusIcon className='size-4 mr-2' />
                                        New Document
                                    </MenubarItem>
                                    <MenubarSeparator />
                                    <RenameDialog documentId={data._id} title={data.title}>
                                        <MenubarItem
                                            onClick={(e) => e.stopPropagation()}
                                            onSelect={(e) => e.preventDefault()}
                                        >
                                            <FilePenIcon className='size-4 mr-2' />
                                            Rename
                                        </MenubarItem>
                                    </RenameDialog>
                                    <RemoveDialog documentId={data._id}>
                                        <MenubarItem
                                            onClick={(e) => e.stopPropagation()}
                                            onSelect={(e) => e.preventDefault()}
                                        >
                                            <TrashIcon className='size-4 mr-2' />
                                            Remove
                                        </MenubarItem>
                                    </RemoveDialog>
                                    <MenubarSeparator />
                                    <MenubarItem onClick={() => window.print()}>
                                        <PrinterIcon className='size-4 mr-2' />
                                        Print <MenubarShortcut>&#8984;P</MenubarShortcut>
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger className='text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto'>
                                    Edit
                                </MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem onClick={undo}>
                                        <Undo2Icon className='size-4 mr-2' />
                                        Undo <MenubarShortcut>&#8984;Z</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem onClick={redo}>
                                        <Redo2Icon className='size-4 mr-2' />
                                        Redo <MenubarShortcut>&#8984;R</MenubarShortcut>
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger className='text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto'>
                                    Insert
                                </MenubarTrigger>
                                <MenubarContent>
                                    <MenubarSub>
                                        <MenubarSubTrigger>
                                            Table
                                        </MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem onClick={() => insertTable({ rows: 1, cols: 1 })}>
                                                1 x 1
                                            </MenubarItem>
                                            <MenubarItem onClick={() => insertTable({ rows: 2, cols: 2 })}>
                                                2 x 2
                                            </MenubarItem>
                                            <MenubarItem onClick={() => insertTable({ rows: 3, cols: 3 })}>
                                                3 x 3
                                            </MenubarItem>
                                            <MenubarItem onClick={() => insertTable({ rows: 4, cols: 4 })}>
                                                4 x 4
                                            </MenubarItem>
                                        </MenubarSubContent>
                                    </MenubarSub>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger className='text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto'>
                                    Format
                                </MenubarTrigger>
                                <MenubarContent>
                                    <MenubarSub>
                                        <MenubarSubTrigger>
                                            <TextIcon className='size-4 mr-2' />
                                            Text
                                        </MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem onClick={bold}>
                                                <BoldIcon className='size-4 mr-2' />
                                                Bold <MenubarShortcut>&#8984;B</MenubarShortcut>
                                            </MenubarItem>
                                            <MenubarItem onClick={italic}>
                                                <ItalicIcon className='size-4 mr-2' />
                                                Italic <MenubarShortcut>&#8984;Ɪ</MenubarShortcut>
                                            </MenubarItem>
                                            <MenubarItem onClick={underline}>
                                                <UnderlineIcon className='size-4 mr-2' />
                                                Underline <MenubarShortcut>&#8984;U</MenubarShortcut>
                                            </MenubarItem>
                                            <MenubarItem onClick={strikethrough}>
                                                <StrikethroughIcon className='size-4 mr-2' />
                                                Strikethrough&nbsp;&nbsp; <MenubarShortcut>&#8984;S</MenubarShortcut>
                                            </MenubarItem>
                                        </MenubarSubContent>
                                    </MenubarSub>
                                    <MenubarItem onClick={clearFormatting}>
                                        <RemoveFormattingIcon className='size-4 mr-2' />
                                        Clear Formatting
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-3 pl-6 lg:pl-0">
                <Avatars />
                <Inbox />
                <OrganizationSwitcher
                    afterCreateOrganizationUrl={"/"}
                    afterLeaveOrganizationUrl={"/"}
                    afterSelectOrganizationUrl={"/"}
                    afterSelectPersonalUrl={"/"}
                />
                <UserButton />
            </div>
        </nav>
    )
}

