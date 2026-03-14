import { Unbounded } from 'next/font/google';
import { EntryWrapper } from '../components/EntryWrapper';
import './globals.css';

// Load Unbounded font
const unbounded = Unbounded({ 
  subsets: ['latin'],
  weight: ['400', '700', '900'], // Normal, Bold, Black
  display: 'swap',
});

export const metadata = {
  title: 'Singularity | Student Research Lab',
  description: 'The Singularity Advanced Research Lab at SRMAP.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${unbounded.className} bg-black min-h-screen text-white overflow-x-hidden`}>
        <EntryWrapper>
          {children}
        </EntryWrapper>
      </body>
    </html>
  );
}