import "./globals.css";
import Layout from "../components/Layout";
import ThemeProvider from "../contexts/ThemeContext";

export const metadata = {
  title: "Kendo UI Clone",
  description: "A Kendo UI clone built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
