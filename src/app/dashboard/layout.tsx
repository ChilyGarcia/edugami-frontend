import DashboardNavbar from "@/components/dashboard/navbar/DashboardNavbar";
import ModeratorChecker from "@/components/roleCheckers/ModeratorChecker";
import SessionChecker from "@/components/roleCheckers/SessionChecker";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ModeratorChecker />
      <SessionChecker />
      <DashboardNavbar />
      {children}
    </>
  );
}
