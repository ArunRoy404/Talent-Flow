'use client'
import Footer from './Footer';
import { usePathname } from 'next/navigation';

const FooterContainer = () => {
    const pathname = usePathname()
    if (pathname.includes('/dashboard')) return <></>
    return <Footer />
};

export default FooterContainer;