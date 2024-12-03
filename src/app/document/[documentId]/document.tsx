"use client";
import { Preloaded, usePreloadedQuery } from "convex/react";
import { Editor } from "./editor";
import { Navbar } from "./navbar";
import { Room } from "./room";
import { api } from "../../../../convex/_generated/api";

interface Props {
    preloadedDocument: Preloaded<typeof api.documents.getById>;
}

export const Document = ({ preloadedDocument }: Props) => {
    const document = usePreloadedQuery(preloadedDocument);

    return (
        <Room>
            <div className="min-h-screen bg-[#FAFBFD]">
                <Navbar data={document} />
                <div className="pt-[140px] md:pt-[114px] print:pt-0">
                    <Editor initialContent={document.initialContent} />
                </div>
            </div>
        </Room>
    )
}