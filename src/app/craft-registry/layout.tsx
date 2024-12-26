import { type Metadata } from "next";


export const metadata: Metadata = {
    title: 'CRAFTLORE | Registry',
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            {children}
        </>
    );
}
