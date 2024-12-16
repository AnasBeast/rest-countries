import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "./Context/ThemeContext";

export const metadata: Metadata = {
  title: "REST Countries API with color theme switcher",
  description: "Challenge by Frontend Mentor",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <ThemeProvider>
          <NavBar />
        {children}
        </ThemeProvider>

      </body>
    </html>
  );
}
