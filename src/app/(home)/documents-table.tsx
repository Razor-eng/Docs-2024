import { LoaderIcon } from 'lucide-react';
import { Doc } from '../../../convex/_generated/dataModel';
import { PaginationStatus } from 'convex/react';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DocumentRow } from './document-row';
import { Button } from '@/components/ui/button';

type Props = {
    documents: Doc<"documents">[] | undefined;
    loadMore: (numItems: number) => void;
    status: PaginationStatus;
}

export const DocumentsTable = ({ documents, loadMore, status }: Props) => {
    return (
        <div className='max-w-screen-xl mx-auto px-16 py-6 flex flex-col gap-5'>
            {documents == undefined ? (
                <div className="flex items-center justify-center h-24 mt-8">
                    <LoaderIcon className='size-6 text-muted-foreground animate-spin' />
                </div>
            ) : (
                documents?.length === 0 ? (
                    <div className="flex items-center justify-center mt-8">
                        <p className='text-muted-foreground'>No documents found</p>
                    </div>
                ) : (
                    <>
                        <Table>
                            <TableHeader>
                                <TableRow className='hover:bg-transparent border-none'>
                                    <TableHead>Name</TableHead>
                                    <TableHead>&nbsp;</TableHead>
                                    <TableHead className='hidden md:table-cell'>Shared</TableHead>
                                    <TableHead className='hidden md:table-cell'>Created at</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {documents.map((document, id) => (
                                    <DocumentRow key={id} document={document} />
                                ))}
                            </TableBody>
                        </Table>
                        <div className="flex items-center justify-center">
                            <Button
                                variant={'ghost'}
                                size={'sm'}
                                onClick={() => loadMore(5)}
                                disabled={status !== "CanLoadMore"}
                            >
                                {status === "CanLoadMore" ? "Load more" : "End of results"}
                            </Button>
                        </div>
                    </>
                )
            )}
        </div>
    )
}