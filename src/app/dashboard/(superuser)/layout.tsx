import SuperAdminChecker from "@/components/roleCheckers/SuperAdminChecker";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SuperAdminChecker />
      {children}
    </>
  );
}
