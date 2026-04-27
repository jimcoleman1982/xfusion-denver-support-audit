/* xFusion Landing — components (single page, mobile-first, responsive) */

const { useState, useRef, useEffect } = React;

// ── small primitives ──────────────────────────────────────────
function MountainLine({ className = "xf-hero-mountain" }) {
  // Simple geometric horizon line. Two overlapping ranges, accent stroke.
  return (
    <svg className={className} viewBox="0 0 1440 110" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M0 92 L120 60 L210 78 L300 40 L420 72 L520 50 L640 80 L740 38 L860 70 L980 52 L1080 82 L1200 46 L1320 74 L1440 56 L1440 110 L0 110 Z"
        fill="var(--xf-accent)"
        opacity="0.55"
      />
      <path
        d="M0 100 L100 78 L200 92 L320 66 L440 88 L560 70 L680 90 L800 64 L920 86 L1040 70 L1160 92 L1280 66 L1380 88 L1440 76 L1440 110 L0 110 Z"
        fill="var(--xf-accent)"
        opacity="0.85"
      />
    </svg>
  );
}

function MountainMark() {
  // Tiny mountain row used above the Story headline.
  return (
    <svg viewBox="0 0 120 22" aria-hidden="true">
      <path
        d="M2 18 L18 6 L30 14 L46 4 L62 16 L78 6 L92 14 L108 4 L118 16"
        fill="none"
        stroke="var(--xf-accent)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ContourPattern() {
  // Topographic contour pattern, very low opacity. Used once behind offer intro.
  return (
    <svg className="xf-offer-contour" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="xf-contour-r" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="var(--xf-accent)" />
          <stop offset="100%" stopColor="var(--xf-accent)" stopOpacity="0" />
        </radialGradient>
      </defs>
      {[0,1,2,3,4,5,6,7,8,9,10].map(i => (
        <ellipse
          key={i}
          cx="600" cy="300"
          rx={90 + i * 70}
          ry={50 + i * 38}
          fill="none"
          stroke="var(--xf-accent)"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

function PrimaryCTA({ children, subText, align = "center" }) {
  const cluster = align === "left"
    ? "xf-cta-cluster xf-cta-cluster-left"
    : "xf-cta-cluster";
  return (
    <div className={cluster}>
      <a href="/book" className="xf-button-primary">
        {children}
        <svg className="xf-arrow" viewBox="0 0 14 14" aria-hidden="true">
          <path d="M2 7 L11 7 M7 3 L11 7 L7 11" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
      <p className="xf-sub-cta">{subText}</p>
    </div>
  );
}

// ── topbar ───────────────────────────────────────────────────
function TopBar() {
  return (
    <header className="xf-topbar">
      <div className="xf-wordmark" aria-label="xFusion">
        <span className="xf-word-x">x</span>Fusion
      </div>
      <span className="xf-mono-low">Denver, Colorado.</span>
    </header>
  );
}

// ── hero ─────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="xf-hero">
      <div className="xf-container">
        <div className="xf-medium" style={{ textAlign: "left" }}>
          <p className="xf-prehead xf-hero-prehead">
            For Denver business owners whose customer support is breaking.
          </p>
          <h1 className="xf-h-hero">
            Find out which customers you are losing this week.
          </h1>
          <p className="xf-hero-deck">
            30 minutes with a Denver-based xFusion ops lead. We audit every channel and hand you a written diagnosis of what is broken and what to fix first. No pitch.
          </p>
        </div>

        <VideoPlaceholder />

        <PrimaryCTA subText="30 minutes. Free. No pitch.">
          Get my Denver Support Audit
        </PrimaryCTA>
      </div>
      <MountainLine />
    </section>
  );
}

function VideoPlaceholder() {
  return (
    <div className="xf-video">
      <div className="xf-video-frame" role="img" aria-label="Video placeholder">
        <span className="xf-video-corner">VSL · 16 : 9</span>
        <span className="xf-video-corner-r">Poster pending</span>
        <button className="xf-play" aria-label="Play video">
          <svg width="28" height="32" viewBox="0 0 28 32" aria-hidden="true">
            <path d="M2 2 L26 16 L2 30 Z" fill="var(--xf-cta-ink)" />
          </svg>
        </button>
      </div>
      <p className="xf-video-cap">
        Hit play. The short version is in the video. Or scroll down to read it.
      </p>
    </div>
  );
}

// ── lead ─────────────────────────────────────────────────────
function Lead() {
  return (
    <section className="xf-section xf-lead">
      <div className="xf-container">
        <div className="xf-narrow">
          <p className="xf-lead-blockquote">
            If you own a Denver business and your customer support is breaking, this 30 minutes was built for you.
          </p>
          <p>
            One call, one xFusion ops lead, and you walk out with a written diagnosis: every channel your customers are messaging on, every gap in your current setup, every slip-through that is costing you customers, and a prioritized list of what to fix first. Not a brochure. Real findings on your specific business.
          </p>
          <p>No slide deck. No sales pitch. No drip sequence chasing you for the next month.</p>
          <p>
            Most Denver owners who take this call have already tried a VA, a chatbot, or hiring in-house. Most of them say the same thing afterward: "I did not know it was this bad."
          </p>
          <p>30 minutes. Free. Backed by the No-Pitch Audit.</p>
          <p>
            If you are a Denver owner who is tired of being the person answering every customer message, this is the call that tells you what to do about it.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── story ────────────────────────────────────────────────────
function Story() {
  return (
    <section className="xf-section xf-story" style={{ background: "var(--xf-bg)" }}>
      <div className="xf-container">
        <div className="xf-narrow">
          <div className="xf-story-mark"><MountainMark /></div>
          <h2 className="xf-h-section">Why Denver businesses are drowning in customer support.</h2>
          <div style={{ marginTop: 36 }}>
            <p>Monday morning, 7:47am, and you already have 43 unread emails.</p>
            <p>
              12 of them are from customers. 4 of those are from customers who emailed last week and never got a reply. There is a chat blinking in another tab from someone who tried to reach you Saturday at 9pm. Your Instagram DMs have a question from a wedding photographer who needs a quote by tonight or she is going somewhere else.
            </p>
            <p>
              You built this Denver business. You earned every customer. And right now you are personally answering most of them, between meetings and after dinner, because every other option you tried has failed.
            </p>
            <p>
              You hired a VA. She was cheap. She also told a customer the wrong return policy on day three, and you spent an hour fixing it.
            </p>
            <p>
              You bought a chatbot. Customers figured it out in two messages and asked for a human. The chat log is full of "is this a bot? I need a person."
            </p>
            <p>
              You hired in-house. Great hire. Quit nine months later for a corporate role with health insurance you could not match.
            </p>
            <p>
              You tried just doing it yourself. That worked for the first three years. Now it is burning your evenings and your wife is asking when you are going to stop checking your phone at the dinner table.
            </p>
            <p>
              So you have adapted. The easy ones get answered in batches at 6am. The hard ones get triaged in your head. The chats get half-answered. The Instagram DMs go unread for two days. Sometimes longer.
            </p>
            <p>The customers feel it. You feel it. Your team can tell it is wearing on you.</p>
          </div>

          <div className="xf-story-final">
            <p>
              Here is what almost nobody tells Denver owners. The right answer is not a VA. Not a bot. Not another in-house hire. It is a team that already knows how to do this work, knows how to use AI tools to do it faster than humans alone ever could, and covers every channel your customers actually use.
            </p>
            <p style={{ fontFamily: "var(--xf-serif)", fontSize: 24, fontWeight: 600, color: "var(--xf-accent)", margin: "20px 0" }}>
              That is xFusion.
            </p>
            <p>
              We are a customer support team built for Denver business owners. Phone, email, live chat, social DMs, all of it. Our agents are senior, with years of front-line work behind them. They use AI tools that draft, triage, and route in real time, so responses go out in minutes instead of hours. They learn your voice, your products, and your policies, and they answer the way you would. Except they answer all of them. Including the one that came in at 9pm Saturday from the wedding photographer.
            </p>
            <p>
              You stop being the person who answers customer messages. You become the person who runs the business again.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── offer ────────────────────────────────────────────────────
const OFFER_CARDS = [
  {
    n: "01",
    title: "Your Channel Coverage Check",
    bullets: [
      "A working map of every channel your customers are messaging on right now: phone, email, live chat, Instagram, Facebook, Google reviews, and anywhere else",
      "Where the coverage gaps are, including the channels you may not even be monitoring",
      "Current response time on each channel, measured against what your customers actually expect",
      "The specific channels where you are losing customers fastest",
    ],
  },
  {
    n: "02",
    title: "Your Slip-Through Diagnosis",
    bullets: [
      "Which customer messages are going unanswered, half-answered, or answered too late",
      "Where in your week the volume hits hardest and breaks your current setup",
      "The specific cost of the slip-throughs (lost deals, lost reviews, lost return customers)",
      "A walk-through of recent customer interactions on your business that show the pattern",
    ],
  },
  {
    n: "03",
    title: "The Fix List",
    bullets: [
      "A prioritized list of fixes for your specific business, ordered by impact",
      "What you can fix yourself this week with no outside help",
      "What requires a tool or a process change inside the next 30 days",
      "What requires a real support team running your front line, and what that should look like",
    ],
  },
  {
    n: "04",
    title: "Honest Fit Answer",
    bullets: [
      "Whether xFusion is the right team to run your support, given your size, your channels, and your customer base",
      "If we are not a fit, who else in Denver might be (or whether to keep it in-house)",
      "If we are a fit, what running it would look like in your first 30 and 90 days",
      "A direct answer with no follow-up nag if you decide it is not for you",
    ],
  },
];

function Offer() {
  return (
    <section className="xf-section xf-offer">
      <ContourPattern />
      <div className="xf-container">
        <div className="xf-offer-head">
          <h2 className="xf-h-section">What we cover in 30 minutes.</h2>
          <p className="xf-offer-intro">
            In one 30-minute call, an xFusion ops lead audits your customer support across every channel your customers are actually using. You walk away with answers you cannot get from a generic agency, a chatbot vendor, or another VA hire.
          </p>
          <div className="xf-offer-promise">
            <p className="xf-pull-quote">
              You walk out knowing exactly which customers you are losing this week, on which channel, and the specific fixes that close the gap. In writing. On your specific business.
            </p>
          </div>
        </div>

        <div className="xf-card-grid">
          {OFFER_CARDS.map(c => (
            <article key={c.n} className="xf-card">
              <div className="xf-card-num">{c.n}</div>
              <h3 className="xf-card-title">{c.title}</h3>
              <ul className="xf-card-list">
                {c.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <div className="xf-why">
          <div className="xf-why-head">
            <h3 className="xf-h-sub">Why xFusion runs this audit, not a chatbot vendor, a VA agency, or another consultant.</h3>
          </div>
          <div className="xf-why-grid">
            <div className="xf-why-item">
              <p>
                <strong>Senior people, not entry-level.</strong>
                Most outsourced support is someone reading a script for a few dollars an hour. xFusion staffs experienced support pros with years of front-line work, then arms them with AI tools so they answer faster than any human-only team ever could. The audit reflects that standard: you are talking to a Denver-based ops lead, not a junior researcher.
              </p>
            </div>
            <div className="xf-why-item">
              <p>
                <strong>All channels, not just one.</strong>
                Most agencies do email tickets. Or just chat. Or just social. xFusion covers phone, email, live chat, and social as a single coordinated front line. The audit looks at the whole picture, not the slice that is convenient for someone to sell you.
              </p>
            </div>
            <div className="xf-why-item">
              <p>
                <strong>Run your support, not just advise on it.</strong>
                Most consultants tell you what is broken and walk out. xFusion runs the support function for the businesses we audit, when we are a fit. The audit is the same work we do on day one with a new client, given to you free, even if you never hire us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── secondary band CTA ───────────────────────────────────────
function BandCTA() {
  return (
    <section className="xf-band">
      <div className="xf-band-cta">
        <p className="xf-prehead">The Denver Support Audit</p>
        <h2>Stop being the person answering every customer message.</h2>
        <PrimaryCTA subText="Free. Denver owners only. Same-week scheduling.">
          Book my Denver Support Audit
        </PrimaryCTA>
      </div>
    </section>
  );
}

// ── testimonials ─────────────────────────────────────────────
const TESTIMONIALS = [
  {
    file: "uploads/John Carbone of Bonify.png",
    initials: "JC",
    pull: "I forget they're technically not in-house. They truly are part of the Bonify team.",
    body: "Working with xFusion led to a monumental improvement in our customer experience. They found us the perfect reps with complete alignment to our mission, and they've handled the vast majority of our tickets while maintaining a 4.9 customer satisfaction score on Shopify since May 2020.",
    attr: "John Carbone, Founder, Bonify.",
  },
  {
    file: "uploads/Derrick Reimer of SavvyCal.png",
    initials: "DR",
    pull: "I was admittedly skeptical at first. They proved my skepticism unwarranted.",
    body: "As a founder busy building and marketing my product, I wanted a partner I could trust to train and manage dedicated reps as an extension of my team. This is not your stereotypical outsourced support agency. They've cut our average response time by 84.79% and freed me up to focus on running the business.",
    attr: "Derrick Reimer, Founder, SavvyCal.",
  },
  {
    file: "uploads/Claire Fundingsland of SkyFi.png",
    initials: "CF",
    pull: "They never leave a customer interaction unresolved.",
    body: "xFusion's emphasis on customer satisfaction has been such an asset. Their team is thorough and adapts and learns quickly, helping us maintain a 91.9% customer satisfaction score with an average response time of 36 minutes across a global, 24/7 customer base.",
    attr: "Claire Fundingsland, SkyFi.",
  },
  {
    file: "uploads/Tom Foster of TheReceptionist.png",
    initials: "TF",
    pull: "Attentive. Hire the best people. We see no reason to stop.",
    body: "When we first met with Jim and David, we were immediately struck by their values and commitment to their employees, which meshed with ours completely. Over years of working together they've helped us hit a 98.9% CSAT rating, and we've expanded the partnership several times. If you're looking for an outsourced solution, I highly recommend the team at xFusion.",
    attr: "Tom Foster, Director of Sales, TheReceptionist.",
  },
];

function Portrait({ file, initials }) {
  // Try the image; fall back to initials placeholder on error.
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <div className="xf-tm-portrait"><span>{initials}</span></div>;
  }
  return (
    <div className="xf-tm-portrait">
      <img src={file} alt="" onError={() => setFailed(true)} />
    </div>
  );
}

function Testimonials() {
  return (
    <section className="xf-section">
      <div className="xf-container">
        <div className="xf-tm-head">
          <h2 className="xf-h-section">What founders say after xFusion takes over their support.</h2>
        </div>
        <div className="xf-tm-grid">
          {TESTIMONIALS.map((t, i) => (
            <article key={i} className="xf-card xf-tm-card">
              <Portrait file={t.file} initials={t.initials} />
              <p className="xf-tm-pull">"{t.pull}"</p>
              <p className="xf-tm-body">{t.body}</p>
              <p className="xf-tm-attr">{t.attr}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── close + guarantee ────────────────────────────────────────
function Close() {
  return (
    <section className="xf-section">
      <div className="xf-container">
        <div className="xf-narrow">
          <div className="xf-close-head">
            <h2 className="xf-h-sub" style={{ color: "var(--xf-accent)", fontSize: "30px" }}>
              Why is the audit free?
            </h2>
          </div>
          <div className="xf-close-body">
            <p>
              Most customer support consultants charge real money to come into your business, identify what is broken, and walk out leaving you to fix it yourself. xFusion does not operate that way. The 30-minute audit is free because we only take on a small number of new Denver clients per quarter, and the audit is how we figure out if you are a fit. Owners who are not a fit still walk away with the written diagnosis and the prioritized fix list. Owners who are a fit get a proposal to have us run support for them. Either way, the 30 minutes was worth your time.
            </p>
          </div>
        </div>

        <div className="xf-guarantee">
          <p className="xf-guarantee-title">The No-Pitch Audit.</p>
          <p>
            In 30 minutes together, we audit your customer support across every channel: how long customers wait, what is slipping through, and where you are losing money in unanswered messages. You leave with a written diagnosis and a prioritized fix list specific to your business. We will not pull out a slide deck. We will not pitch you. If at any point the call starts feeling like a sales call, end it. You keep the diagnosis and the fix list. No follow-up nag. No drip sequence chasing you for the next month. That is the deal.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── faq ──────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    q: "What actually happens on the audit?",
    a: "We look at your support across every channel: phone, email, live chat, Instagram DMs, Facebook messages, and reviews. We measure response times, identify the channels where customers are slipping through, and walk you through specific examples on your own business. You leave with a written diagnosis and a prioritized fix list.",
  },
  {
    q: "Why is it free?",
    a: "We only take on a small number of new Denver clients per quarter. The audit is how we figure out if you are a fit. Owners who are not a fit still get the diagnosis and the fix list. We deliver real value either way.",
  },
  {
    q: "Is this a sales call?",
    a: "No. The No-Pitch Audit is the rule. No slide deck, no pitch, no follow-up sequence chasing you. If at any point you feel like you are being sold, end the call. You keep everything we covered.",
  },
  {
    q: "Phone or in person?",
    a: "Denver Front Range owners get the choice. We can come to you, you can come to our office, or we run it on Zoom or by phone. Outside Denver: phone or video.",
  },
  {
    q: "Do I need to share data?",
    a: "Helpful but not required. If you can show us your support inbox, your help desk dashboard, or even just a screenshot of unread counts on each channel, we get more precise. If you cannot share data, we work with what you describe and still produce useful findings.",
  },
  {
    q: "How long is it really?",
    a: "30 minutes. Some calls run shorter when an owner is clearly not a fit, and that is still useful information for both sides.",
  },
  {
    q: "Is the call confidential?",
    a: "Yes. We will sign a standard NDA on request. Nothing you share with us goes anywhere else.",
  },
  {
    q: "What happens after the call?",
    a: "Nothing automatic. You walk away with the diagnosis and the fix list. If you want a proposal for us to run support for you, you tell us. If you do not, we shake hands and you keep everything we covered. No automated drip emails.",
  },
  {
    q: "What if my business is not in Denver?",
    a: "The audit still works, and you will still get useful findings. The Denver-based ops lead and the in-person option are reserved for Front Range businesses.",
  },
  {
    q: "What is the catch?",
    a: "No catch. The No-Pitch Audit is the rule. The 30 minutes is real, the diagnosis is real, and the fix list is yours regardless of whether you become a client.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="xf-section">
      <div className="xf-container">
        <div className="xf-faq-head">
          <h2 className="xf-h-section">Questions before you book.</h2>
        </div>
        <div className="xf-faq" role="list">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="xf-faq-item" data-open={isOpen} role="listitem">
                <button
                  className="xf-faq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className="xf-faq-toggle" aria-hidden="true" />
                </button>
                <div className="xf-faq-a">
                  <div className="xf-faq-a-inner">{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── final cta + footer ───────────────────────────────────────
function FinalCTA() {
  return (
    <section className="xf-band xf-final">
      <p className="xf-prehead" style={{ marginBottom: 22 }}>One last thing.</p>
      <h2>You can keep answering messages at 9pm. Or you can book the audit.</h2>
      <PrimaryCTA subText="Denver-based. 30 minutes. Free. Walk away with a written diagnosis on your specific business.">
        Claim my free audit
      </PrimaryCTA>
      <MountainLine className="xf-final-mountain" />
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="xf-footer">
      <p>xFusion. Premium AI-augmented customer support. Denver, Colorado.</p>
      <p>© {year}</p>
    </footer>
  );
}

// ── page ─────────────────────────────────────────────────────
function XFusionLanding() {
  return (
    <div className="xf-root xf-page">
      <TopBar />
      <Hero />
      <Lead />
      <Story />
      <Offer />
      <BandCTA />
      <Testimonials />
      <Close />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

window.XFusionLanding = XFusionLanding;
