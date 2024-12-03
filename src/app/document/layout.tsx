type Props = {
    children: React.ReactNode;
}

const DocumentLayout = ({ children }: Props) => {
    return (
        <div>{children}</div>
    )
}

export default DocumentLayout