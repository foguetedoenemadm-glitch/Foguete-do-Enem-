import type {Metadata} from 'next';
import { Poppins, PT_Sans } from 'next/font/google';
import '@/src/app/globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const fontPoppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-poppins',
});

const fontPtSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

export const metadata: Metadata = {
  title: 'Foguete do ENEM | Sua Aprovação a um Foguete de Distância',
  description: 'O compilado definitivo com resumos, mapas mentais, questões e estratégias para você decolar no ENEM.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={cn("font-body antialiased", fontPoppins.variable, fontPtSans.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
