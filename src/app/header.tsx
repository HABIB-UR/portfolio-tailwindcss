import Link from "next/link"
  export default function Header(){
    return(
        <header className="flex justify-between bg-black">
            <div>
                <h1 className="text-3xl font-semibold text-purple-800 ml-10"> welcome !</h1>
            </div>
            <nav>
                <ul className="flex gap-x-40 text-white mt-4   font-semibold">
                    <li className="hover:text-purple-800">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hover:text-purple-800">
                        <Link href="/about"> ABOUT</Link>
                    </li>
                    <li className="mr-8 hover:text-purple-800">
                        <Link href="/contact">CONTACT ME</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
  }