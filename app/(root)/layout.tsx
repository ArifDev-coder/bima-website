import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";
import WhatsAppButton from "@/components/custom/WhatsAppButton";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col bg-brand-bg font-sans">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
