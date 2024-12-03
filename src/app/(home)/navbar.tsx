import Image from "next/image"
import Link from "next/link"
import { SearchInput } from "./search-input"
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export const Navbar = () => {
    return (
        <nav className='flex items-center justify-between h-full w-full'>
            <div className="flex gap-3 items-center shrink-0 pr-6">
                <Link href={'/'}>
                    <Image
                        src={"/logo.svg"}
                        alt='logo'
                        width={30}
                        height={30}
                    />
                </Link>
                <h3 className="text-xl">Docs</h3>
            </div>
            <SearchInput />
            <div className="flex items-center gap-3 pl-6 lg:pl-0">
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