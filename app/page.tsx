import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";
import PersonaCard from "@/components/PersonaCard";
import SectionHeader from "@/components/SectionHeader";
import { GITHUB_URL } from "@/lib/constants";

const features = [
  {
    icon: "⚡",
    title: "Batch Processing",
    description:
      "Upload an entire class's worth of submissions at once. BatchGrade evaluates all of them simultaneously, cutting grading time by hours.",
  },
  {
    icon: "🧪",
    title: "Automated Test Runner",
    description:
      "Define test cases once and apply them to every submission automatically. Consistent, objective evaluation every single time.",
  },
  {
    icon: "💬",
    title: "Structured Feedback",
    description:
      "Each student receives clear, actionable feedback alongside their grade — not just a score, but guidance on how to improve.",
  },
  {
    icon: "📊",
    title: "Grade Management",
    description:
      "A built-in SQLite database keeps all grades organized and accessible. Export results to your spreadsheet or LMS with ease.",
  },
  {
    icon: "🔒",
    title: "Fully Local & Private",
    description:
      "Student data never leaves your machine. No cloud accounts, no data agreements, no privacy concerns — ever.",
  },
  {
    icon: "💻",
    title: "Cross-Platform",
    description:
      "Native desktop app for Windows, macOS, and Linux. Works wherever your students submit their code.",
  },
];

const personas = [
  {
    icon: "👩‍🏫",
    role: "Instructors",
    highlight: true,
    description:
      "Stop spending your evenings manually running student code. BatchGrade handles all the repetitive evaluation work so you can focus on what matters — teaching.",
    benefits: [
      "Grade 30+ submissions in the time it used to take for 3",
      "Consistent rubric enforcement across all submissions",
      "Automatic feedback generation saves time on comments",
      "All grades stored and exportable in one place",
    ],
  },
  {
    icon: "🎓",
    role: "Students",
    highlight: false,
    description:
      "Get faster, more detailed feedback on your programming assignments so you can learn from mistakes and improve before the next deadline.",
    benefits: [
      "Receive feedback within hours, not days",
      "Understand exactly which test cases failed",
      "Clear explanations of what went wrong",
      "More time to iterate and improve",
    ],
  },
  {
    icon: "🏫",
    role: "CS Departments",
    highlight: false,
    description:
      "Start with a free local grading workflow today, with a future hosted service planned for teams that want managed infrastructure and collaboration.",
    benefits: [
      "Free base version for local classroom use",
      "Local-first privacy for student submissions",
      "Scales to any enrollment size",
      "Future SaaS option for hosted department workflows",
    ],
  },
];

const steps = [
  {
    title: "Install BatchGrade",
    description:
      "Download the installer for your platform (Windows, macOS, or Linux) and run it. No accounts, no cloud setup, no configuration required.",
  },
  {
    title: "Load submissions and define test cases",
    description:
      "Point BatchGrade at the folder of student submissions and configure your test suite once. BatchGrade supports multiple programming languages and testing frameworks.",
  },
  {
    title: "Run, review, and export",
    description:
      "Click Run. BatchGrade evaluates every submission, generates per-student feedback, and stores the results. Export grades directly to your spreadsheet or LMS.",
  },
];

export default function Home() {
  return (
    <div className="bg-white text-zinc-900">
      {/* Introduces the product and primary actions. */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #3730a3 100%)",
        }}
        className="text-white"
      >
        <div className="max-w-6xl mx-auto px-6 py-28 lg:py-40">
          <div className="max-w-3xl">
            <div className="mb-8 rounded-2xl border border-white/20 bg-white/10 p-4 shadow-lg shadow-blue-950/20 backdrop-blur-sm">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(74,222,128,0.15)]" />
                  <div>
                    <p className="font-semibold text-white">BatchGrade has launched.</p>
                    <p className="text-sm text-blue-100/90">
                      The app is now available for download for Windows, macOS, and Linux.
                    </p>
                  </div>
                </div>
                <a
                  href={`${GITHUB_URL}/releases`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-bold text-blue-900 transition-colors hover:bg-blue-50"
                >
                  Download now
                </a>
              </div>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
              Grade code submissions.
              <br />
              <span className="text-blue-300">In minutes, not hours.</span>
            </h1>
            <p className="text-lg lg:text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl">
              BatchGrade is a desktop application with a free base version for
              automating student programming assignment evaluation, so educators
              can focus on teaching, not grading.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`${GITHUB_URL}/releases`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg"
              >
                Download Base Version &rarr;
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-blue-400 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-800/40 transition-colors text-lg"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights the product scope at a glance. */}
      <section className="bg-zinc-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { stat: "30+", label: "Submissions per batch" },
            { stat: "$0", label: "Free base version" },
            { stat: "3", label: "Platforms supported" },
            { stat: "100%", label: "Locally hosted & private" },
          ].map(({ stat, label }) => (
            <div key={label}>
              <div className="text-3xl font-extrabold text-blue-400">{stat}</div>
              <div className="text-zinc-400 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Lists the core grading features. */}
      <section id="features" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Features"
            title="Everything you need to grade at scale"
            subtitle="Purpose-built for computer science courses, BatchGrade handles the repetitive evaluation work so you don't have to."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Shows the main user groups. */}
      <section id="who" className="py-24 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Who It's For"
            title="Built for educators. Loved by students."
            subtitle="BatchGrade fits naturally into your existing classroom workflow."
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {personas.map((p) => (
              <PersonaCard key={p.role} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Explains the basic grading workflow. */}
      <section id="how" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="How It Works"
            title="Up and running in three steps"
            subtitle="No cloud setup. No subscriptions. Just install and go."
          />
          <div className="space-y-10">
            {steps.map((s, i) => (
              <div key={s.title} className="flex gap-6 items-start">
                <div className="shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white font-extrabold text-xl flex items-center justify-center">
                  {i + 1}
                </div>
                <div className="pt-2">
                  <h3 className="font-bold text-xl text-zinc-900 mb-1">
                    {s.title}
                  </h3>
                  <p className="text-zinc-500 leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Read the full documentation &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Ends with the next actions for visitors. */}
      <section
        style={{
          background: "linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%)",
        }}
        className="text-white py-24 px-6"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
            Ready to reclaim your grading time?
          </h2>
          <p className="text-blue-200 text-lg mb-10 leading-relaxed">
            BatchGrade has launched, with a free base version available for
            local grading and a future hosted SaaS service planned for expanded
            classroom workflows.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`${GITHUB_URL}/releases`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-900 font-bold px-10 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg"
            >
              Download BatchGrade
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-400 text-white font-semibold px-10 py-4 rounded-xl hover:bg-blue-800/40 transition-colors text-lg"
            >
              View Source
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
