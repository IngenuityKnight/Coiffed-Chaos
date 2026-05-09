import type { Metadata } from 'next';
import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Black Hair Stylist in Detroit | Coiffed Chaos Services',
  description:
    'Healthy hair consultations, natural hair care, press and curl, protective styling, special occasion hair, and education from Ava Gardner in Detroit.',
};

export default function ServicesPage() {
  return (
    <>
      <Section
        eyebrow="Services"
        title="Hair care that starts with understanding your hair story."
        intro="Not every woman needs the same hair routine. Your hair history, lifestyle, texture, styling habits, and confidence all matter. Coiffed Chaos starts with the person, not just the hairstyle."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((s) => (
            <ServiceCard
              key={s.slug}
              number={s.number}
              title={s.title}
              description={s.description}
              forWho={s.forWho}
            />
          ))}
        </div>
      </Section>

      <CTASection
        eyebrow="Not sure which service is right?"
        title="Reach out and ask."
        copy="Have a question about which service fits your hair? Reach out on Instagram or the contact page — Ava is happy to help you find the right next step."
        primaryCta={{ label: 'Get in Touch', href: '/contact' }}
      />
    </>
  );
}
