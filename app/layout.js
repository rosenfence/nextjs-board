import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata = {
  title: 'Next Board',
  description: 'Board with Next.js & MongoDB',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
