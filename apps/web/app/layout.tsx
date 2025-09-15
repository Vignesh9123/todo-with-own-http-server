import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Todo App",
  description: "This todo app's http server is raw-built on top of tcp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        {children}
      </body>
    </html>
  );
}
