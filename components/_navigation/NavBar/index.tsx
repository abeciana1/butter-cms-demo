import { use } from 'react'
import { getNavMenu } from '@/lib/butter'
import { headers } from 'next/headers';
import Image from 'next/image'
import ComponentRenderer from '@/components/ComponentRender'
import { NavigationLinkI, NavBarI } from '@/definitions/interfaces/_navigation'
import Link from 'next/link'

const NavBar = () => {
    const headersList = use(headers());
    const isPreview = headersList.get("x-search-param")
    const navContent = use(getNavMenu(isPreview as string, 'navigation_menu', 'main-menu'))
    const {
        fields
    } = navContent?.data as NavBarI
    return (
        <>
            <nav className='flex relative justify-between items-center py-2 px-5'>
                <Link
                    href='/'
                    title='Homepage link'
                >
                    <Image
                        src={fields?.logo?.url}
                        alt={fields?.logo?.alt}
                        width={fields?.logo_width}
                        height={fields?.logo_height}
                    />
                </Link>
                <ul
                    className='flex gap-7 items-center'
                >
                    {fields?.links?.map(({type, fields: sectionData}: NavigationLinkI, index: number) => {
                        if (type === 'navigation_link') {
                            return (
                                <ComponentRenderer
                                    key={type + index}
                                    type={type}
                                    sectionData={sectionData}
                                />
                            )
                        }
                    })}
                </ul>
            </nav>
            {fields?.links?.map(({type, fields: sectionData}: NavigationLinkI, index: number) => {
                if (type === 'sub_navigation_links') {
                    return (
                        <ComponentRenderer
                            key={type + index}
                            type={type}
                            sectionData={sectionData}
                        />
                    )
                }
            })}
        </>
    )
}

export default NavBar