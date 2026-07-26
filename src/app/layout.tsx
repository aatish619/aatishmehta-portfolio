import { geist, geistMono, inter } from '@/lib/fonts';
import { ThemeProvider } from '@/providers/theme-provider';
import { LenisProvider } from '@/providers/lenis-provider';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { AuroraBackground } from '@/components/background/aurora-background';
import { GradientOrbs } from '@/components/background/gradient-orbs';
import { GridBackground } from '@/components/background/grid-background';
import { NoiseTexture } from '@/components/background/noise-texture';
import './globals.css';

import { createMetadata } from '@/lib/seo/metadata-builder';

export const metadata = createMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider>
          <LenisProvider>
            <NoiseTexture />
            <GridBackground />
            <GradientOrbs />
            <AuroraBackground />
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1 pt-16">{children}</main>
              <Footer />
            </div>
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
