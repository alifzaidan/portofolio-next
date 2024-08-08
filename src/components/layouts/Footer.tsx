import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div>
                <Link href={'/'}>Email</Link>
                <Link href={'/'}>Resume</Link>
                <Link href={'/'}>Linkedin</Link>
                <Link href={'/'}>Instagram</Link>
                <Link href={'/'}>Github</Link>
            </div>
            <div>
                <p>Updated 6/23</p>
                <p>Muchammad Alif Zaidan</p>
            </div>
        </footer>
    );
}
