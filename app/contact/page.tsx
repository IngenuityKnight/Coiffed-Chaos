import type { Metadata } from 'next';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Book a Hair Discovery Call | Coiffed Chaos',
  description:
    'Book a hair discovery call with Ava Gardner of Coiffed Chaos in Detroit. A short consultation to find the right next step for your hair.',
};

export default function ContactPage() {
  return (
    <section className="pt-12 md:pt-20 pb-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Left side: copy */}
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-wider2 text-cocoa font-medium mb-5">
            Book
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tightish text-ink leading-[1.05]">
            Book a Hair{' '}
            <span className="flourish text-cocoa">Discovery Call</span>.
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted leading-relaxed">
            Not sure what your hair needs next? Start here. This short
            consultation is for women who want guidance before choosing
            another product, style, or routine.
          </p>

          <div className="mt-10 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-wider2 text-cocoa mb-2">
                Location
              </p>
              <p className="font-display text-lg text-ink">
                Detroit, Michigan
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider2 text-cocoa mb-2">
                What happens next
              </p>
              <p className="text-muted leading-relaxed">
                After you submit the form, Ava or the Coiffed Chaos team
                will follow up with next steps — usually within 1&ndash;2
                business days.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider2 text-cocoa mb-2">
                Connect
              </p>
              <a
                href="https://www.instagram.com/coiffedchaos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:text-cocoa underline-offset-4 hover:underline"
              >
                @coiffedchaos on Instagram &nbsp;↗
              </a>
            </div>
          </div>
        </div>

        {/* Right side: form */}
        <div className="lg:col-span-7">
          <form
            action="https://formspree.io/f/your-form-id"
            method="POST"
            className="bg-cream border border-line rounded-3xl p-6 md:p-10"
            aria-label="Discovery call request form"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <Field
                label="Preferred contact method"
                name="preferredContact"
                as="select"
                options={['Email', 'Phone', 'Either']}
              />
            </div>

            <div className="mt-5">
              <Field
                label="What best describes your hair goal?"
                name="hairGoal"
                as="select"
                options={[
                  'Restoring damaged hair',
                  'Maintaining healthy hair',
                  'Transitioning (relaxed → natural, color, gray)',
                  'Special occasion styling',
                  'Building a routine',
                  'Just exploring',
                ]}
              />
            </div>

            <div className="mt-5">
              <Field
                label="What are you currently struggling with?"
                name="struggle"
                as="textarea"
                rows={3}
                placeholder="Breakage, dryness, products that aren't working, finding a stylist who understands your hair…"
              />
            </div>

            <div className="mt-5">
              <Field
                label="Are you looking for…"
                name="lookingFor"
                as="select"
                options={[
                  'Salon services',
                  'Hair education',
                  'Product guidance',
                  'A combination',
                  'Not sure yet',
                ]}
              />
            </div>

            <div className="mt-5">
              <Field
                label="Anything else you want Ava to know?"
                name="message"
                as="textarea"
                rows={4}
              />
            </div>

            <input
              type="hidden"
              name="_subject"
              value="Coiffed Chaos — New Discovery Call Request"
            />

            <div className="mt-7">
              <Button type="submit" className="w-full sm:w-auto">
                Send My Request
              </Button>
              <p className="text-xs text-muted mt-4">
                By submitting, you agree to be contacted about your
                request. Your information is kept private.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
  as?: 'input' | 'textarea' | 'select';
  rows?: number;
  options?: string[];
  placeholder?: string;
};

function Field({
  label,
  name,
  required,
  type = 'text',
  as = 'input',
  rows,
  options,
  placeholder,
}: FieldProps) {
  const baseInput =
    'mt-2 w-full rounded-lg border border-line bg-canvas px-4 py-3 text-ink placeholder:text-muted/60 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition';

  return (
    <label className="block">
      <span className="text-sm text-ink">
        {label}
        {required && <span className="text-cocoa ml-1">*</span>}
      </span>
      {as === 'textarea' && (
        <textarea
          name={name}
          required={required}
          rows={rows}
          placeholder={placeholder}
          className={`${baseInput} resize-y`}
        />
      )}
      {as === 'input' && (
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className={baseInput}
        />
      )}
      {as === 'select' && options && (
        <select name={name} required={required} className={baseInput} defaultValue="">
          <option value="" disabled>
            Choose one
          </option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      )}
    </label>
  );
}
