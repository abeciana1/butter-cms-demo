import { getNavMenu } from '@/lib/butter'
import { headers } from 'next/headers';
import Image from 'next/image'
import ComponentRenderer from '@/components/ComponentRender'
import { NavigationLinkI, NavBarI } from '@/definitions/interfaces/_navigation'
import Link from 'next/link'

const NavBar = async () => {
    const headersList = await headers()
    const isPreview = headersList.get("x-search-param")
    const navContent = await getNavMenu(isPreview as string, 'navigation_menu', 'main-menu')
    const {
        fields
    } = navContent?.data as NavBarI
    return (
        <div className='sticky top-0 z-50 bg-background'>
            <nav className='flex relative justify-between items-center py-5 px-5'>
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
                        return (
                            <ComponentRenderer
                                key={type + index}
                                type={type}
                                sectionData={sectionData}
                            />
                        )
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
        </div>
    )
}

export default NavBar