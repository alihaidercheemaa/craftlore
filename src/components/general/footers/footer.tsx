import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa6"


export const Footer = () => {

    return (
        <footer className="col-span-12 bg-primary text-white pt-10">
            <div className="mx-6 lg:container">
                <div className="lg:container  grid grid-cols-1 md:grid-cols-4 gap-20 items-center font-opensans py-20">
                    <div className="text-center md:text-left grid gap-6">
                        <Image src="/logo/logo.png" alt="Logo" width={156} height={156} />
                        <p className="text-sm mb-4">
                            Sorem ipsum dolor sit amet consectetur adipiscing elit dapibus non apte magna ad suspendisse nec pulvi.
                        </p>
                        <a href="#" className="text-blue-300 font-semibold underline">About us</a>
                        <div className="flex justify-center md:justify-start mt-4 space-x-4">
                            <Link href="#" className="text-white hover:text-secondary"><FaFacebook size={24} /></Link>
                            <Link href="#" className="text-white hover:text-secondary"><FaTwitter size={24} /></Link>
                            <Link href="#" className="text-white hover:text-secondary"><FaPinterest size={24} /></Link>
                            <Link href="#" className="text-white hover:text-secondary"><FaLinkedin size={24} /></Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl text-white mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-white hover:text-secondary text-sm">Audit & Assurance</Link></li>
                            <li><Link href="#" className="text-white hover:text-secondary text-sm">Bonds & Commodities</Link></li>
                            <li><Link href="#" className="text-white hover:text-secondary text-sm">Financial Consulting</Link></li>
                            <li><Link href="#" className="text-white hover:text-secondary text-sm">Trades & Stocks</Link></li>
                            <li><Link href="#" className="text-white hover:text-secondary text-sm">Financial Projections</Link></li>
                            <li><Link href="#" className="text-white hover:text-secondary text-sm">Strategic Planning</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl text-white mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-white hover:text-secondary text-sm">Home</Link></li>
                            <li><Link href="#" className="text-white hover:text-secondary text-sm">About</Link></li>
                            <li><Link href="#" className="text-white hover:text-secondary text-sm">Features</Link></li>
                            <li><Link href="#" className="text-white hover:text-secondary text-sm">Services</Link></li>
                            <li><Link href="#" className="text-white hover:text-secondary text-sm">Blog</Link></li>
                            <li><Link href="#" className="text-white hover:text-secondary text-sm">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl text-white mb-4">Subscribe</h3>
                        <form className="space-y-4">
                            <input type="text" placeholder="Name" className="w-full p-2 rounded-md bg-white text-gray-800" />
                            <input type="email" placeholder="Email Address" className="w-full p-2 rounded-md bg-white text-gray-800" />
                            <button type="submit" className="w-full py-2 rounded-md bg-orange-500 text-white font-semibold hover:bg-orange-600">SUBSCRIBE</button>
                        </form>

                    </div>
                </div>
            </div>
            <div className="bg-blue-950">
                <div className="container flex justify-center items-center gap-2  text-sm p-2">
                    <p>&copy; 2019 Financial Consulting Template by ThemeModern</p>
                    <div className=" space-x-4">
                        <a href="#" className="hover:text-white">Terms and Conditions</a>
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">FAQs</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}