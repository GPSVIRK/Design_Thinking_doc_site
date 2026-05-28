import CTAButton from './CTAButton';
import Reveal from './Reveal';

export default function JourneyCTA() {
  return (
    <Reveal>
      <section className="rounded-[28px] border border-[#DCE4EE] bg-[#1F2937] p-7 text-white shadow-[0_22px_70px_rgba(31,41,55,0.16)] md:p-9">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-semibold">This journey shaped TrustLayer.</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              The final prototype turns the design insight into a working trust-calibration interface. It helps users inspect AI-generated text through confidence signals, claim types, risk cues, and transparent rule paths.
            </p>
            <p className="mt-4 text-sm text-slate-300">
              TrustLayer does not ask users to blindly trust AI. It helps them decide how much trust is appropriate.
            </p>
          </div>
          <CTAButton to="/prototype" variant="secondary">View Prototype</CTAButton>
        </div>
      </section>
    </Reveal>
  );
}
