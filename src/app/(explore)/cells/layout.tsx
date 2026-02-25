import Footer from "@/components/general/Footer";
import Navbar from "@/components/header/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
     <Navbar />
      {children}
      <Footer />
    </>
  );
}
