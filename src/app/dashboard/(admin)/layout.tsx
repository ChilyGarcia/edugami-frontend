import AdminChecker from "@/components/roleCheckers/AdminChecker";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AdminChecker />
      {children}
    </>
  );
}
