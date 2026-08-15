import "./globals.css";

export const metadata = {
  title: "FinanceLab",
  description: "Gestão financeira e inteligência artificial",
  openGraph: {
    title: "FinanceLab",
    description: "Gestão financeira e inteligência artificial",
    images: [
      {
        url: "/logo-login.png",
        width: 1200,
        height: 630,
        alt: "FinanceLab Logo",
      },
    ],
  },
  icons: {
    icon: "/logo-login.png",
  },
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