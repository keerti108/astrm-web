import type { Metadata } from "next";
import Link from "next/link";

const policies: Record<string, { title: string; body: string[] }> = {
  privacy: {
    title: "Privacy Policy",
    body: [
      "astrm Ltd ('we', 'our', 'us') is committed to protecting your personal data. This policy explains what we collect, how we use it, and your rights.",
      "We collect information you provide when placing an order (name, email, delivery address, payment details processed by our payment provider). We do not store card details ourselves.",
      "We use your data to process and deliver your order, communicate about your purchase, and improve our service. We do not sell your data to third parties.",
      "You have the right to access, correct, or delete your personal data. Contact keerti@astrm.co.uk to exercise these rights.",
      "We use cookies for essential site functionality. No tracking or advertising cookies are set without your consent.",
    ],
  },
  terms: {
    title: "Terms of Service",
    body: [
      "These terms govern your use of astrm.co.uk and any purchase made through this site. By placing an order, you agree to these terms.",
      "All prices are in GBP and include VAT where applicable. We reserve the right to amend prices at any time.",
      "Orders are subject to acceptance and availability. We will confirm your order by email. A contract is formed when we dispatch your order.",
      "We offer a 30-day return window. See our Returns & Refunds policy for full details.",
    ],
  },
  cookies: {
    title: "Cookie Policy",
    body: [
      "astrm.co.uk uses cookies to make the site work correctly. We use only essential cookies, with no advertising or tracking cookies.",
      "Essential cookies are required for the site to function. They are set automatically and cannot be disabled without affecting the site's operation.",
      "You can delete cookies at any time through your browser settings. This will not affect our use of essential cookies on your next visit.",
    ],
  },
};

type Props = { params: Promise<{ slug: string[] }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const key = slug.join("/");
  const policy = policies[key];
  return { title: policy?.title ?? "Policy" };
}

export function generateStaticParams() {
  return Object.keys(policies).map((slug) => ({ slug: [slug] }));
}

export default async function PolicyPage({ params }: Props) {
  const { slug } = await params;
  const key = slug.join("/");
  const policy = policies[key] ?? { title: "Policy", body: ["This page could not be found."] };

  return (
    <section style={{ padding: "clamp(80px, 10vw, 140px) 0", minHeight: "60vh" }}>
      <div className="wrap" style={{ maxWidth: "760px" }}>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(32px, 4.5vw, 60px)",
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            lineHeight: 0.95,
            color: "var(--ink)",
            margin: "0 0 clamp(40px, 5vw, 64px)",
          }}
        >
          {policy.title}
        </h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5em" }}>
          {policy.body.map((para, i) => (
            <p
              key={i}
              style={{
                fontSize: "clamp(17px, 1.4vw, 20px)",
                lineHeight: 1.75,
                color: "var(--ink-soft)",
              }}
            >
              {para}
            </p>
          ))}
        </div>
        <div style={{ marginTop: "clamp(48px, 6vw, 80px)", borderTop: "1px solid var(--rule)", paddingTop: "clamp(32px, 4vw, 48px)" }}>
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--ink-soft)",
            }}
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
