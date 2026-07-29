"use client";

import { useState } from "react";
import { Mail, MapPin, Github, Linkedin, Twitter, MessageCircle, Send, CheckCircle2 } from "lucide-react";

import { SITE_CONFIG } from "@/lib/constants";
import { SectionTitle } from "@/components/shared/section-title";
import { FadeIn } from "@/components/shared/fade-in";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { href: SITE_CONFIG.social.github, icon: Github, label: "GitHub" },
  { href: SITE_CONFIG.social.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: SITE_CONFIG.social.twitter, icon: Twitter, label: "Twitter" },
  { href: SITE_CONFIG.social.discord, icon: MessageCircle, label: "Discord" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Frontend-only mock: no backend wired up yet for v1.
    setSubmitted(true);
  }

  return (
    <div className="container py-16 sm:py-20">
      <SectionTitle
        eyebrow="Contact"
        title="Let's talk"
        description="Have a project idea, a question about joining, or a partnership to discuss? Send us a message — a real human reads every one."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <FadeIn>
          <div className="glass rounded-2xl p-6 sm:p-8">
            {submitted ? (
              <div className="flex min-h-[320px] flex-col items-center justify-center gap-4 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-success/10 text-success">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Message sent
                </h3>
                <p className="max-w-sm text-sm text-muted-foreground">
                  Thanks for reaching out, {form.name.split(" ")[0] || "friend"}. This is a v1
                  frontend demo, so nothing was actually delivered yet — but this is exactly
                  where a live submission would land.
                </p>
                <Button variant="secondary" onClick={() => setSubmitted(false)}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    required
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    required
                    placeholder="Tell us a little about what you're working on..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <Button type="submit" size="lg" className="self-start">
                  Send message
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="flex flex-col gap-6">
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display text-base font-semibold text-foreground">
                Direct contact
              </h3>
              <div className="mt-4 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium text-foreground">{SITE_CONFIG.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm font-medium text-foreground">{SITE_CONFIG.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="font-display text-base font-semibold text-foreground">
                Find us online
              </h3>
              <div className="mt-4 flex items-center gap-2">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
