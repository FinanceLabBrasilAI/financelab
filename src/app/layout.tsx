import "./globals.css";

export const metadata = {
  title: "FinanceLab",
  description: "Gestão financeira e inteligência artificial",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
      </head>
      <body className="bg-[#0B0C10] text-[#F5F5F7] antialiased">
        {children}
      </body>
    </html>
  );
}