import Navbar from "./_components/Navbar";

interface Props {
  children: React.ReactNode;
}

function LayoutPublic({ children }: Props) {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 md:px-6 lg:px-8">{children}</main>
    </div>
  );
}

export default LayoutPublic;
