import type { Metadata } from "next";
import Link from "next/link";

const content: Record<string, { title: string; body: string[] }> = {
  returns: {
    title: "Returns & Refunds",
    body: [
      "We offer a 30-day return window from the date of delivery. If your astrm insole isn't right for you, return it in its original condition for a full refund.",
      "To start a return, email keerti@astrm.co.uk with your order number and reason for return. We'll send you a prepaid return label within one business day.",
      "Refunds are processed within 5 working days of receiving your return. Your original payment method will be credited.",
    ],
  },
  shipping: {
    title: "Shipping",
    body: [
      "We ship to the UK and select international destinations. UK standard delivery is 2–3 working days. Express delivery (1 working day) is available at checkout.",
      "International shipping times vary by destination. Estimated times are shown at checkout before payment.",
      "All orders are dispatched from London. You will receive a tracking number by email once your order is dispatched.",
    ],
  },
  sizing: {
    title: "Sizing Questions",
    body: [
      "The astrm insole is designed to replace the existing insole in your shoe. Remove your shoe's insole, then insert the astrm insole.",
      "If your shoe has a non-removable insole (common in running shoes), size up by half a size from your usual shoe size.",
      "Between sizes? Choose the smaller. Each insole can be trimmed at the toe end using scissors. A trim guide is printed on the insole.",
    ],
  },
  care: {
    title: "Insole Care",
    body: [
      "Wipe clean with a damp cloth after use. Do not machine wash or submerge in water.",
      "Allow to air dry naturally. Do not place near direct heat sources, as this can affect the chassis geometry.",
      "With normal use, the astrm insole is designed to last 12 months before the chassis performance degrades. We recommend replacing annually.",
    ],
  },
};

type Props = { params: Promise<{ topic: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic } = await params;
  const page = content[topic];
  return { title: page?.title ?? "Help" };
}

export function generateStaticParams() {
  return Object.keys(content).map((topic) => ({ topic }));
}

export default async function HelpTopicPage({ params }: Props) {
  const { topic } = await params;
  const page = content[topic] ?? { title: "Help", body: ["We couldn't find that article."] };

  return (
    <section style={{ padding: "clamp(80px, 10vw, 140px) 0", minHeight: "60vh" }}>
      <div className="wrap" style={{ maxWidth: "760px" }}>
        <Link
          href="/help"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--ink-soft)",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "clamp(32px, 4vw, 48px)",
          }}
        >
          ← Help centre
        </Link>

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
          {page.title}
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5em" }}>
          {page.body.map((para, i) => (
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

        <div
          style={{
            marginTop: "clamp(48px, 6vw, 80px)",
            borderTop: "1px solid var(--rule)",
            paddingTop: "clamp(32px, 4vw, 48px)",
          }}
        >
          <p style={{ fontSize: "clamp(16px, 1.3vw, 19px)", color: "var(--ink-soft)", lineHeight: 1.7 }}>
            Still need help?{" "}
            <Link href="/contact" style={{ color: "var(--signal)", borderBottom: "1px solid var(--signal)", paddingBottom: "1px" }}>
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
