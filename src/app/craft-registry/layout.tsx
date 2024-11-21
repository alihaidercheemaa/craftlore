import { type Metadata } from "next";


export const metadata: Metadata = {
    title: 'CRAFTLORE | Registry',
    description: 'Tecch - Technology & IT Solutions Next js Template',
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <div className="col-span-12 bg-[#e5edf7] h-96" />
            <div className="col-span-12 relative -mt-16">
                {children}
            </div>
        </>
    );
}
