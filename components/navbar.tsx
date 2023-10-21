import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";
import { Button } from "./ui/button";

const links = [
    "How it works",
    "About",
    "work",
    "pricing",
    "blog",
]

export const Navbar = () => {
    return (
        <nav className="py-[55px] bg-[#E0EAF3]">
            <Container className="lg:max-w-[60%] max-w-[90%]">
                <div className="flex items-center justify-between">
                    <Image
                        src="/logo.svg"
                        width={54}
                        height={54}
                        alt="Logo"
                    />
                    <ul className="lg:flex items-center gap-x-9 hidden">
                        {links.map(link => (
                            <li key={link} className="text-sm text-black hover:text-primary font-bold leading-4 uppercase duration-300">
                                <Link href="/">{link}</Link>
                            </li>
                        ))}
                    </ul>
                    <Button>Get started</Button>
                </div>
            </Container>
        </nav>
    );
}