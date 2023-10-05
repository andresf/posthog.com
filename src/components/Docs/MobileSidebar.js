import React from 'react'
import InternalSidebarLink from './InternalSidebarLink'

export default function InternalSidebar({ tableOfContents, mobile = true }) {
    return (
        tableOfContents?.length > 0 && (
            <aside
                className={`shrink-0 basis-72 w-full @3xl:reasonable:sticky @3xl:reasonable:overflow-auto max-h-64 overflow-auto @3xl:max-h-[calc(100vh_-_148px)] @3xl:top-[128px] @3xl:pr-1 p-4 block ${
                    mobile ? 'lg:hidden' : ''
                } bg-accent dark:bg-accent-dark border border-border dark:border-dark rounded-md`}
            >
                <p className="text-primary/50 dark:text-primary-dark/50 text-[.933rem] mt-0 mb-4 font-semibold">
                    On this page
                </p>
                <ul className="list-none m-0 p-0 flex flex-col space-y-1">
                    {tableOfContents?.map((navItem, index) => {
                        return (
                            <li key={index}>
                                <InternalSidebarLink
                                    url={navItem.url}
                                    name={navItem.value}
                                    depth={navItem.depth}
                                    className="jumpTo text-sm @4xl:text-[15px] pl-6"
                                />
                            </li>
                        )
                    })}
                </ul>
            </aside>
        )
    )
}
