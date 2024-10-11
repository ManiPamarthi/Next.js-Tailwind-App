import Link from "next/link";
import "./header.css";

export default function Header() {
    return (
        <div className="">
            <li className="">
                <Link href="/homeware" className="">HomeWare</Link>
            </li>

            <li className="">
                <Link href="/grocery" className="">Grocery</Link>
            </li>

            <li className="">
                <Link href="/about" className="">About</Link>
            </li>

            <li className="">
                <Link href="/demos" className="">Demos</Link>
            </li>

            <li className="">
                <Link href="/ideas&inspirations" className="">Ideas & Inspirations</Link>
            </li>
        </div>
    )
}