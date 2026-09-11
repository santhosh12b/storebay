import React from 'react';
import Hero from '../components/Hero';
import FeaturesStrip from '../components/FeaturesStrip';
import ComparisonCalculator from '../components/ComparisonCalculator';
import DayInLife from '../components/DayInLife';
import HowItWorks from '../components/HowItWorks';
import CustomerView from '../components/CustomerView';
import TargetAudience from '../components/TargetAudience';
import Philosophy from '../components/Philosophy';
import Faq from '../components/Faq';
import Pricing from '../components/Pricing';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesStrip />
      <ComparisonCalculator />
      <DayInLife />
      <HowItWorks />
      <CustomerView />
      <TargetAudience />
      <Philosophy />
      <Pricing />
      <Faq />
    </>
  );
}
