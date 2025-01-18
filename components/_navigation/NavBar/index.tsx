import { use } from 'react'
import { getMainMenu } from '@/lib/butter'
import { headers } from 'next/headers';

const NavBar = () => {
    const headersList = use(headers());
    const isPreview = headersList.get("x-search-param")
    const navContent = use(getMainMenu(isPreview as string))
    console.log('navContent', navContent)
    return (
        <nav></nav>
    )
}

export default NavBar