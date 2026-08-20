/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { AssessmentTool } from './components/AssessmentTool';
import { ScienceSolution } from './components/ScienceSolution';
import { ProgramsSection } from './components/ProgramsSection';
import { TrainerBio } from './components/TrainerBio';
import { ServiceProcess } from './components/ServiceProcess';
import { CaseStudies } from './components/CaseStudies';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f9f9ff] text-[#111c2c] flex flex-col font-sans selection:bg-[#031632] selection:text-white">
      {/* Top Header & Sticky Navigation */}
      <Navbar />

      {/* Main Landing Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Urgent Pain Points & Psychological Warnings */}
        <PainPoints />

        {/* 3. Interactive Canine Crisis Self-Assessment Triage Tool */}
        <AssessmentTool />

        {/* 4. Educational Psychology Science Solution & Comparison */}
        <ScienceSolution />

        {/* 5. 3 Tiered Structured Programs */}
        <ProgramsSection />

        {/* 6. Founder Credentials & Pedagogy Background */}
        <TrainerBio />

        {/* 7. Transparent 3-Step Service Roadmap */}
        <ServiceProcess />

        {/* 8. Real Hong Kong Case Studies */}
        <CaseStudies />

        {/* 9. Objective FAQs */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Floating WhatsApp CTA */}
      <FloatingWhatsApp />
    </div>
  );
}


