import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Portfolio | Fihaonantsoa",
  description: "Fihaonantsoa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning className="transition-colors duration-300">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
