import { Hero } from "@/components/Hero";
import { InfoRow } from "@/components/InfoRow";
import { AccentLink } from "@/components/AccentLink";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[920px] px-6 md:px-18 lg:px-6">
      <Hero />

      <hr className="border-t border-[#d8d8d8]" />

      <InfoRow label="about me" stacked>
        <p className="mb-6">
          I started my career doing design for a bunch of startups, but over time my interests shifted
          to doing more product-oriented work like UX research and early stage startup validation
          and most recently AI.
        </p>
        <p className="mb-6">
          Yet no matter what I do, I keep coming back to my roots in design: building products for
          users, solving real problems and making people&apos;s lives easier.
        </p>
        <p className="mb-6">
          I&apos;m fresh out of college with a CS degree looking to explore ways to expand my skillset
          and work on cool stuff.
        </p>
        <p>
          On the side, I do community, keep my 700 day Duolingo streak alive, and grind poker from
          my bedroom.
        </p>
      </InfoRow>

      <InfoRow label="currently">
        <ul className="list-disc space-y-3 pl-5">
          <li>Looking for my next opportunity in tech! 👀</li>
          <li>
            Venture Scout for{" "}
            <AccentLink href="https://scala-vc.com">Scala Capital</AccentLink>
          </li>
        </ul>
      </InfoRow>

      <InfoRow label="previously">
        <ul className="list-disc space-y-3 pl-5">
          <li>
            Support Engineering @{" "}
            <AccentLink href="https://www.dashlabs.ai">Dashlabs.ai</AccentLink>{" "}
            (YC S21)
          </li>
          <li>
            UX Research @{" "}
            <AccentLink href="https://angkas.com">Angkas</AccentLink>
          </li>
          <li>
            Tech generalist at{" "}
            <AccentLink href="https://www.facebook.com/startupphtraining">
              a startup consultancy
            </AccentLink>
            {" "}— did everything from Meta ads to automating slide deck creation to making a VA redundant with automations
          </li>
          <li>
            Campus Ambassador @{" "}
            <AccentLink href="https://prosple.com">Prosple</AccentLink>
          </li>
          <li>
            Design for{" "}
            <AccentLink href="https://codebility.tech">Codebility</AccentLink>{" "}
            and numerous other early stage startups
          </li>
        </ul>
      </InfoRow>

      <InfoRow label="community">
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <AccentLink href="https://www.instagram.com/genz_bookclub/">
              gen z book club
            </AccentLink>
            {" "}(founder): definitely not like other book clubs ;)
          </li>
          <li>
            <AccentLink href="https://joinpizza.fun">Pizza and Friends!</AccentLink>
            {" "}(founder): What if tech communities were less serious?
          </li>
          <li>
            <AccentLink href="https://www.uxph.org">UXPH</AccentLink>
            : Inclusive design for Filipinos
          </li>
          <li>
            <AccentLink href="https://nocode.ph">NoCodePH</AccentLink>
            : Empowering every Filipino to create with technology, not just consume it
          </li>
        </ul>
      </InfoRow>

      <InfoRow label="projects">
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <AccentLink href="https://fyxor.eu">Fyxor.eu</AccentLink>: A Chrome
            extension to tailor your CV for job listings on LinkedIn, OLX.pl,
            Pracuj, Indeed, and more
          </li>
          <li>
            <AccentLink href="https://t.me/Uzbektruckbot">
              @Uzbektruckbot
            </AccentLink>
            : A Telegram bot to gather leads and info for outside-EU truck
            drivers wanting to get into Germany — with secure handling of data
          </li>
          <li>
            <AccentLink href="https://museumgrades.com">Museum Grades</AccentLink>
            : An e-commerce site in progress, built end to end with AI
          </li>
          <li>
            <AccentLink href="https://onlinecareers.ph">OnlineCareers.PH</AccentLink>
            : A two-sided job site built in 2024, before agentic AI was super
            good — Vue.js and Laravel
          </li>
        </ul>
      </InfoRow>

      <InfoRow label="talks">
        <ul className="space-y-5">
          <li>
            <AccentLink href="https://luma.com/event/evt-VsFyha5xC0EQuLn">From Wholesome to Degenerate: A Personal Spectrum of OpenClaw Use Cases</AccentLink>
            <span className="block text-[14px] text-[#aaaaaa] mt-0.5">Openclaw Manila — April 2026</span>
          </li>
          <li>
            <AccentLink href="https://gdg.community.dev/e/m6xsn2/">SparkPulse UXpedition</AccentLink>
            <span className="block text-[14px] text-[#aaaaaa] mt-0.5">GDG PUP — June 2026</span>
          </li>
          <li>
            <AccentLink href="https://www.facebook.com/awssbg/posts/pfbid07hb4TCbKzB3nDFzP4CQsG6RMPyNLDyVxcz8b9ZB287WE3nvm8JJmXhZKnJfTBKuxl">AWS IDEATHON 2026</AccentLink>
            <span className="block text-[14px] text-[#aaaaaa] mt-0.5">UPHSL Binan — April 2026</span>
          </li>
          <li>
            <AccentLink href="https://www.linkedin.com/posts/yumuljohn_ux-productdesign-designthinking-activity-7394708750160416768-w7Cy">UI/UX Fundamentals and Execution</AccentLink>
            <span className="block text-[14px] text-[#aaaaaa] mt-0.5">Lyceum of the Philippines University — January 2026</span>
          </li>
          <li>
            <AccentLink href="https://www.facebook.com/share/p/1LFejPB8v7/">GONNA BE GOLDEN: LEVEL UP WITH GDGoC!</AccentLink>
            <span className="block text-[14px] text-[#aaaaaa] mt-0.5">GDG on Campus Holy Angel University — August 2025</span>
          </li>
          <li>
            <AccentLink href="https://www.facebook.com/photo/?fbid=1175032011333303&set=a.470381998464978">Create &amp; Conquer Hackathon 2025</AccentLink>
            <span className="block text-[14px] text-[#aaaaaa] mt-0.5">FEU Tech — June 2025</span>
          </li>
          <li>
            <AccentLink href="https://www.linkedin.com/posts/yumuljohn_webaccessibility-wcag-inclusivedesign-activity-7343213150730653696-Nbym">HIMATANG: Designing for Inclusive Access</AccentLink>
            <span className="block text-[14px] text-[#aaaaaa] mt-0.5">GDSC Mapua, Makati — May 2025</span>
          </li>
          <li>
            <AccentLink href="https://www.facebook.com/kyoshi.devs/posts/pfbid02eYEKzWP7ELmPgFgekogJba21HVQ6QCASyxUF1CJCeqgUuhGhayaAmnb4yfQMvRtVl">UX for WEB3 Applications</AccentLink>
            <span className="block text-[14px] text-[#aaaaaa] mt-0.5">BLOKCSPACE, Makati City — April 2025</span>
          </li>
        </ul>
      </InfoRow>

      <section className="border-t border-[#d8d8d8] py-12">
        <p className="font-sans text-[14px] font-normal uppercase tracking-wide text-foreground mb-4">
          Contact Info
        </p>
        <p className="font-sans text-[18px] font-light">
          <AccentLink href="mailto:hello@johnyumul.com">Email</AccentLink>
          <span className="mx-2 text-[#c9c9c9]">|</span>
          <AccentLink href="https://linkedin.com/in/yumuljohn">LinkedIn</AccentLink>
          <span className="mx-2 text-[#c9c9c9]">|</span>
          <AccentLink href="https://x.com/johnirt">X</AccentLink>
          <span className="mx-2 text-[#c9c9c9]">|</span>
          <AccentLink href="/John_Yumul_Resume.pdf">Resume</AccentLink>
        </p>
      </section>
    </main>
  );
}
