import { type Metadata } from "next";
import { DetailAside } from "~/components/craft-repository/profiling/details/aside";

export const metadata: Metadata = {
  title: "CRAFTLORE | Profile",
};

export default function ProfileDetailLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="col-span-12 mx-6 grid grid-cols-3 gap-6 px-24 py-12">
      {children}
      <DetailAside/>
    </section>
  );
}
