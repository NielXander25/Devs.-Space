"use client";

import { Target, Eye, Heart, Users, Sparkles, ShieldCheck, Compass } from "lucide-react";

import { SITE_CONFIG } from "@/lib/constants";
import { developers } from "@/data/developers";
import { SectionTitle } from "@/components/shared/section-title";
import { FadeIn, StaggerContainer, staggerItem } from "@/components/shared/fade-in";
import { Avatar } from "@/components/shared/avatar";
import { StatsCard } from "@/components/shared/stats-card";

const coreValues = [
  {
    icon: ShieldCheck,
    title: "Craft over speed",
    description: "We'd rather ship something well-made a week later than something rushed today.",
  },
  {
    icon: Users,
    title: "Teach as you build",
    description: "Every senior builder in the network mentors at least one person actively.",
  },
  {
    icon: Compass,
    title: "Open by default",
    description: "Code, decisions, and progress are visible to the whole network unless there's a real reason otherwise.",
  },
  {
    icon: Sparkles,
    title: "Bias to ship",
    description: "Prototypes beat perfect plans. We'd rather learn from a real thing than debate a hypothetical one.",
  },
];

// A small cross-section of the team leading network operations.
const teamLeads = developers.slice(0, 6);

export default function AboutPage() {
  return (
    <div className="pb-24">
      <section className="border-b border-border py-16 sm:py-20">
        <div className="container">
          <SectionTitle
            eyebrow="About us"
            title={`Who is ${SITE_CONFIG.orgShortName}?`}
            description={`${SITE_CONFIG.orgName} is a community of developers and founders who believe the best way to learn to build is to build something real, alongside people who'll tell you the truth about your code.`}
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatsCard icon={Users} value="180+" label="Active members" delay={0} />
            <StatsCard icon={Sparkles} value="42" label="Shipped products" delay={0.05} />
            <StatsCard icon={Target} value="5 yrs" label="Building together" delay={0.1} />
            <StatsCard icon={Eye} value="20+" label="Countries represented" delay={0.15} />
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 sm:py-20">
        <div className="container grid gap-10 lg:grid-cols-2">
          <FadeIn>
            <div className="glass h-full rounded-2xl p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Target className="h-5 w-5" />
              </div>
              <h2 className="mt-5 font-display text-xl font-semibold text-foreground">Mission</h2>
              <p className="mt-3 text-muted-foreground">
                Give developers, at any stage, access to real project experience and real
                teammates — and give founders access to technical partners who actually care
                about the outcome.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="glass h-full rounded-2xl p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                <Eye className="h-5 w-5" />
              </div>
              <h2 className="mt-5 font-display text-xl font-semibold text-foreground">Vision</h2>
              <p className="mt-3 text-muted-foreground">
                A world where &ldquo;where did you learn to build?&rdquo; has the same answer as &ldquo;who did you
                build it with?&rdquo; — a global, decentralized network instead of a handful of
                gatekept institutions.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-border py-16 sm:py-20">
        <div className="container">
          <SectionTitle eyebrow="What we believe" title="Core values" align="center" />
          <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="glass flex flex-col gap-4 rounded-2xl p-6 transition-transform hover:-translate-y-1"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <value.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section id="team" className="border-b border-border py-16 sm:py-20 scroll-mt-24">
        <div className="container">
          <SectionTitle
            eyebrow="Leadership"
            title="Meet the team"
            description="A few of the people who keep the network running day to day, alongside their regular project work."
          />
          <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {teamLeads.map((member) => (
              <div
                key={member.id}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <Avatar seed={member.avatarSeed} name={member.name} size="lg" />
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{member.location}</p>
                </div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container">
          <FadeIn>
            <div className="glass-strong flex flex-col items-center gap-4 rounded-3xl px-6 py-14 text-center sm:px-16">
              <Heart className="h-8 w-8 text-primary" />
              <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                Our community
              </h2>
              <p className="max-w-xl text-muted-foreground">
                Beyond shipped code, the network runs weekly guild calls, async code review
                threads, and an annual in-person gathering. It&apos;s the kind of place where your
                reviewer today might be your co-founder next year.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
