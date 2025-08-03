import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="16" fill="#4361EE" /><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="60" font-weight="bold" fill="white">M</text></svg>`;
const faviconDataUri = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;


export const metadata: Metadata = {
  title: 'M Manoj Kumar Reddy | Portfolio',
  description: 'Portfolio of M Manoj Kumar Reddy, a Computer Science and Engineering student.',
  icons: {
    icon: faviconDataUri,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
          {children}
          <Toaster />
      </body>
    </html>
  );
}
