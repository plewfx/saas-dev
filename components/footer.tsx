import { Container } from "./container";

import Image from "next/image";

const links = [
    {
        icon: "/email.svg",
        text: "hello@designproject.io"
    },
    {
        icon: "/inst.svg",
        text: "@designproject.io"
    },
    {
        icon: "/in.svg",
        text: "The Design Project"
    },
];

const navLink = [
    "How it works",
    "about",
    "our work",
    "blog",
    "contact",
];

export const Footer = () => {
    return (
        <footer className="bg-foreground py-[200px]">
            <Container className="max-w-[85%] lg:max-w-[80%]">
                <div className="flex lg:justify-between gap-20 flex-col lg:flex-row">
                    <div className="flex flex-col gap-[26px]">
                        <Image
                            src="/footer.svg"
                            width={571}
                            height={63}
                            alt="Footer"
                        />
                        <ul className="flex items-center gap-10 flex-wrap">
                            {links.map((link, index) => (
                                <li className="flex items-center gap-2" key={index}>
                                    <Image
                                        src={link.icon}
                                        width={26}
                                        height={25}
                                        alt={link.text}
                                    />
                                    <a href={`mailto:${link.text}`} className="text-white">{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <ul className="flex flex-col gap-[21px]">
                        {navLink.map((link, index) => (
                            <li className="text-white hover:text-primary duration-200 uppercase font-bold" key={index}>
                                <a href={`#${link}`}>{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </footer>
    );
}