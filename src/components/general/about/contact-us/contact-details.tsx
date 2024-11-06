import Link from "next/link"
import { FaEnvelope, FaPhone } from "react-icons/fa6"
import { ContactForm } from "~/components/general/about/contact-us/contact-form"




export const ContactDetail = () => {

    return (
        <section className="col-span-12 bg-[#e5edf7] gap-4">
            <div className="container">
                <div className="container bg-white rounded-md shadow-md grid gap-7 mb-32 p-16">
                    <div className="grid grid-cols-2 gap-8">
                        <div className="grid gap-2">
                            <h2 className="font-montserrat text-3xl">Our Office</h2>
                            <p className="font-montserrat">Artisan Lane , 2 Dar Ul Zamrood,  Gousia Ext Zakiura</p>
                            <p className="font-montserrat">Srinagar Kashmir India 190006</p>
                        </div>
                        <div className="grid gap-2 justify-end">
                            <h2 className="font-montserrat text-3xl">Office Hours</h2>
                            <p className="font-montserrat flex gap-2 items-center"><span>Mon - Fir:</span><span className="text-gray-400">9am - 5pm</span></p>
                            <p className="font-montserrat flex gap-2 items-center"><span>Satursday:</span><span className="text-gray-400">10am - 3pm</span></p>
                            <p className="font-montserrat flex gap-2 items-center"><span>Sunday</span><span className="text-gray-400">Closed</span></p>
                        </div>
                        <div className="col-span-2 flex gap-8 text-secondary">
                            <div className="flex gap-2 items-center">
                                <FaEnvelope />
                                <Link className="text-gray-900 hover:text-secondary" href="mailto:info.consultax@gmail.com">info.consultax@gmail.com</Link>
                            </div>
                            <div className="flex gap-2 items-center">
                                <FaPhone />
                                <Link className="text-gray-900 hover:text-secondary" href="tel:+911 0113 0114">tel:+911 0113 0114</Link>
                            </div>
                        </div>
                        <div className="col-span-2 border border-gray-300" />
                        <ContactForm />
                        <div className="col-span-2 grid gap-4 text-xl">
                            <h3 className="font-montserrat text-3xl">Additional Information</h3>
                            <p className="font-opensans"><b>Business Inquiries</b>: For partnership or sponsorship opportunities, please contact us at partners@craftlore.org.</p>
                            <p className="font-opensans">
                                <b>Media Inquiries:</b>
                                Journalists and media representatives can reach out at media@craftlore.org.
                            </p>
                            <p>
                                Thank you for your interest in CraftLore! We look forward to connecting with you and exploring ways to collaborate in promoting Kashmiri craftsmanship.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
