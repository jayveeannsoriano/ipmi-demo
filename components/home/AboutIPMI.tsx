import { InsuranceTerm } from "@/components/shared/InsuranceTerm"

/**
 * AboutIPMI — editorial explainer section on the landing page.
 * Covers what IPMI is, pre-existing condition exclusions, and FMU.
 * Uses InsuranceTerm for inline glossary callouts on key jargon.
 */
export function AboutIPMI() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-10">
          <p className="mb-2 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Understanding your cover
          </p>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            What is the{" "}
            <span className="text-primary">
              International Private Medical Insurance
            </span>
            ?
          </h2>
        </div>

        {/* Content blocks */}
        <div className="space-y-0 divide-y divide-border overflow-hidden rounded-xl border border-border">
          {/* Block 1 — What is IPMI */}
          <div className="grid grid-cols-1 gap-4 px-7 py-7 md:grid-cols-[180px_1fr]">
            <p className="text-sm font-semibold text-foreground">
              Global coverage
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              <InsuranceTerm
                term="IPMI"
                definition="International Private Medical Insurance — health cover designed specifically for people living outside their home country."
              />{" "}
              provides worldwide coverage — often excluding the USA — for
              medical expenses incurred outside your home country, making it the
              standard choice for{" "}
              <InsuranceTerm
                term="expatriates"
                definition="People who live and work outside their country of origin, either temporarily or permanently."
              />
              . USA coverage can usually be added, though this typically carries
              a significant additional premium. Benefits typically include
              inpatient hospital stays, surgeries, outpatient care, and
              specialist treatments across more than 190 countries.
            </p>
          </div>

          {/* Block 2 — Pre-existing conditions */}
          <div className="grid grid-cols-1 gap-4 px-7 py-7 md:grid-cols-[180px_1fr]">
            <p className="text-sm font-semibold text-foreground">
              Pre-existing conditions
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Most policies, plans, and schemes exclude{" "}
              <InsuranceTerm
                term="pre-existing conditions"
                definition="Any medical condition that was diagnosed, treated, or in some cases even present (whether diagnosed or not) before the policy start date. These are typically not covered as standard."
              />{" "}
              — any health issue diagnosed or treated before the policy start
              date. In some cases this extends to conditions that existed but
              had not yet been formally diagnosed. It is important to disclose
              your full health history accurately, as non-disclosure may
              invalidate a claim.
            </p>
          </div>

          {/* Block 3 — FMU */}
          <div className="grid grid-cols-1 gap-4 px-7 py-7 md:grid-cols-[180px_1fr]">
            <p className="text-sm font-semibold text-foreground">
              Full Medical Underwriting
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              <InsuranceTerm
                term="Full Medical Underwriting (FMU)"
                definition="A thorough review of an applicant's complete medical history by the insurer or scheme administrator, used to determine what will and will not be covered and to set an appropriate premium."
              />{" "}
              is a process in which the insurer or scheme administrator reviews
              your complete health history before issuing cover. This results in
              a tailored policy — clearly setting out any exclusions upfront —
              which can benefit applicants who want certainty about what is
              covered. While FMU often still excludes pre-existing conditions,
              it removes ambiguity at claims stage and, in some circumstances,
              may allow broader acceptance of managed conditions.
            </p>
          </div>
        </div>

        {/* Footnote */}
        <p className="mt-5 text-xs text-muted-foreground/70">
          This information is provided for general guidance only and does not
          constitute financial or medical advice. Terms and conditions vary
          between plans — always read your policy documentation carefully.
        </p>
      </div>
    </section>
  )
}
