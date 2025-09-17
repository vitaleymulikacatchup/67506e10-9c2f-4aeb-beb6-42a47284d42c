"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'highlight' }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          logoSrc="/images/logo.svg"
          logoWidth={100}
          logoHeight={40}
          navItems={[
            { name: 'Hero', id: 'hero' },
            { name: 'About', id: 'about' },
            { name: 'How to Buy', id: 'how-to-buy' },
            { name: 'Tokenomics', id: 'tokenomics' },
            { name: 'Footer', id: 'footer' },
          ]}
          buttonText="Start planning"
          onButtonClick={() => {}}
        />
      </div>
      <div id="hero" data-section="hero">
        <BillboardHero
          title="Welcome to PlanPage!"
          subtitle="Your guide to seamless planning."
        />
      </div>
      <div id="about" data-section="about">
        <CtaAbout
          title="About PlanPage"
          descriptions={[
            'PlanPage is designed to simplify your planning process.',
            'We focus on user friendliness and efficiency.'
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy3D
          title="How to Start"
          steps={[
            { title: 'Step 1', description: 'Create an account', image: '/images/placeholder1.avif', position: 'left', isCenter: false },
            { title: 'Step 2', description: 'Choose your plan', image: '/images/placeholder2.avif', position: 'center', isCenter: true },
            { title: 'Step 3', description: 'Begin planning!', image: '/images/placeholder3.avif', position: 'right', isCenter: false }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <BigNumberTokenomics
          title="Tokenomics Overview"
          description="Key metrics and stats of our token."
          kpiItems={[
            { value: '100K', description: 'Total Supply', longDescription: 'Total number of tokens available.', icon: { } },
            { value: '50K', description: 'Circulating Supply', longDescription: 'Tokens currently in circulation.', icon: { } },
            { value: '$1.50', description: 'Current Price', longDescription: 'Market price per token.', icon: { } }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogoEmphasisBackgroundGradient
          logoSrc="/images/logo.svg"
          logoAlt="PlanPage Logo"
          logoText="PlanPage"
          items={[
            { label: 'Privacy Policy', onClick: () => {} },
            { label: 'Terms of Service', onClick: () => {} },
            { label: 'Help', onClick: () => {} }
          ]}
          className="bg-opacity-50"
          containerClassName="py-10"
          gradientClassName="bg-gradient-to-r from-yellow-400 to-yellow-200"
        />
      </div>
    </SiteThemeProvider>
  );
}
