import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GITHUB_URL } from "@/lib/constants";
import { getContributors } from "@/lib/github";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the BatchGrade project, the team behind it, and the technologies powering it.",
};

const techStack = [
  { icon: "⚡", name: "Electron", desc: "Cross-platform desktop runtime" },
  { icon: "🔷", name: "TypeScript", desc: "End-to-end type safety" },
  { icon: "⚛️", name: "React", desc: "Component-driven UI" },
  { icon: "🗄️", name: "SQLite", desc: "Local, zero-config database" },
  { icon: "🟩", name: "Node.js", desc: "Backend runtime & test runner" },
  { icon: "▲", name: "Next.js", desc: "This website" },
  { icon: "🎨", name: "Tailwind CSS", desc: "Utility-first styling" },
  { icon: "🔬", name: "Vitest", desc: "Unit & integration testing" },
];

// Contributors will be fetched at runtime to show real-time counts.

export default async function AboutPage() {
  const contributors = await getContributors();

  const stats = [
    { value: String(contributors.length), label: "Team members" },
    { value: "3", label: "Platforms" },
    { value: "Free", label: "Base version" },
    { value: "Active", label: "Development" },
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Introduces the project and its purpose. */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 60%, #3730a3 100%)",
        }}
        className="text-white py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-3">
            About
          </p>
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
            In progress in the classroom.
            <br />
            <span className="text-blue-300">Built for the classroom.</span>
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl leading-relaxed">
            BatchGrade is an active UNLV course project growing into a tool
            that makes grading faster, fairer, and less exhausting for
            everyone involved.
          </p>
        </div>
      </div>

      {/* Summarizes project status. */}
      <div className="bg-zinc-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div className="text-3xl font-extrabold text-blue-400">{value}</div>
              <div className="text-zinc-400 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Explains the problem BatchGrade solves. */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
                Mission
              </p>
              <h2 className="text-3xl font-extrabold text-zinc-900 mb-6">
                Grading should take minutes, not nights.
              </h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p>
                  Programming instructors spend enormous amounts of time
                  manually running and checking student code. BatchGrade
                  eliminates that bottleneck by automating the repetitive parts
                  of evaluation so educators can focus on the parts that
                  actually require human judgment.
                </p>
                <p>
                  Privacy is non-negotiable. The base desktop version runs
                  locally, keeping student submissions on the instructor&apos;s
                  machine while the team continues to plan future hosted
                  workflows carefully.
                </p>
                <p>
                  The base version is planned to remain free to use, while the
                  team explores a future SaaS offering for instructors and
                  departments that want hosted workflows, collaboration, and
                  managed infrastructure.
                </p>
              </div>
            </div>

            {/* Shows the main product values. */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  icon: "🏃",
                  title: "Speed",
                  desc: "Evaluate a full class of submissions in the time it used to take to grade three.",
                },
                {
                  icon: "⚖️",
                  title: "Fairness",
                  desc: "Every student is graded against the same automated test suite with zero inconsistency.",
                },
                {
                  icon: "🔒",
                  title: "Privacy",
                  desc: "All data stays on your machine. No cloud, no accounts, no third-party access.",
                },
                {
                  icon: "🚀",
                  title: "Launched",
                  desc: "BatchGrade has launched, with the base version available for free and a hosted SaaS option planned for the future.",
                },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="p-5 rounded-2xl border border-zinc-100 bg-zinc-50"
                >
                  <div className="text-2xl mb-2">{icon}</div>
                  <h3 className="font-bold text-zinc-900 text-sm mb-1">{title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lists the tools used to build BatchGrade. */}
      <section className="py-24 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Technology
            </p>
            <h2 className="text-3xl font-extrabold text-zinc-900">
              Built on proven developer tools
            </h2>
            <p className="text-zinc-500 mt-3 max-w-xl mx-auto">
              BatchGrade is assembled from mature, widely adopted technologies
              so the focus stays on the product, not the plumbing.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {techStack.map(({ icon, name, desc }) => (
              <div
                key={name}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-zinc-100 hover:border-blue-200 hover:shadow-sm transition-all duration-200"
              >
                <span className="text-3xl mb-3">{icon}</span>
                <p className="font-bold text-zinc-900 text-sm">{name}</p>
                <p className="text-zinc-400 text-xs mt-1 leading-snug">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shows the project contributors. */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              The Team
            </p>
            <h2 className="text-3xl font-extrabold text-zinc-900">
              UNLV CS 472 / 672 &mdash; Group 3
            </h2>
            <p className="text-zinc-500 mt-3 max-w-xl mx-auto">
              The contributors actively turning a semester-long project into a
              tool worth shipping.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contributors.map((c) => (
              <div
                key={c.login}
                className="p-6 rounded-2xl border border-zinc-100 bg-zinc-50 hover:border-blue-200 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full overflow-hidden shrink-0`}>
                    <Image
                      src={c.avatar_url}
                      alt={c.login}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-zinc-900">{c.login}</p>
                    <p className="text-zinc-400 text-xs font-medium">@{c.login}</p>
                    <p className="text-blue-600 text-xs font-medium">Project Contributor</p>
                  </div>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed">{c.contributions} contributions to the BatchGrade repository.</p>
                <a
                  href={c.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-4 text-xs text-zinc-400 hover:text-zinc-700 transition-colors"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub Profile
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Links to the project source and issue tracker. */}
      <section className="py-24 px-6 bg-zinc-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Project Status
          </p>
          <h2 className="text-3xl font-extrabold text-zinc-900 mb-4">
            BatchGrade has launched
          </h2>
          <p className="text-zinc-500 leading-relaxed mb-10 max-w-xl mx-auto">
            BatchGrade has launched. The base desktop version is available for
            free, and the team continues to refine the product while planning a
            hosted SaaS option for classroom and department workflows.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-zinc-700 transition-colors"
            >
              View on GitHub &rarr;
            </a>
            <a
              href={`${GITHUB_URL}/issues`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-zinc-300 text-zinc-700 font-semibold px-8 py-3.5 rounded-xl hover:border-zinc-400 hover:bg-zinc-100 transition-colors"
            >
              Browse Open Issues
            </a>
          </div>
        </div>
      </section>

      {/* Provides simple page navigation. */}
      <div className="border-t border-zinc-100 py-8 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-sm">
          <Link href="/docs" className="text-zinc-500 hover:text-zinc-900 transition-colors">
            &larr; Documentation
          </Link>
          <Link href="/" className="text-zinc-500 hover:text-zinc-900 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
