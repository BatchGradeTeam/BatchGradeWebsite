import Link from "next/link";
import { GITHUB_URL } from "@/lib/constants";

const productLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#who", label: "Who It's For" },
  { href: "/#how", label: "How It Works" },
  { href: "/docs", label: "Documentation" },
];

const projectLinks = [
  { href: "/about", label: "About", external: false },
  { href: GITHUB_URL, label: "GitHub", external: true },
  { href: `${GITHUB_URL}/issues`, label: "Report an Issue", external: true },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400">
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
          {/* Product summary. */}
          <div>
            <div className="flex items-center gap-0.5 mb-3">
              <span className="text-white font-extrabold text-lg">Batch</span>
              <span className="text-blue-400 font-extrabold text-lg">Grade</span>
            </div>
            <p className="text-sm leading-relaxed text-zinc-500">
              Automated grading for CS classrooms, with a free base version and
              a future hosted service planned.
            </p>
          </div>

          {/* Product links. */}
          <div>
            <h4 className="text-white font-semibold text-xs mb-4 uppercase tracking-widest">
              Product
            </h4>
            <ul className="space-y-2.5 text-sm">
              {productLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Project links. */}
          <div>
            <h4 className="text-white font-semibold text-xs mb-4 uppercase tracking-widest">
              Project
            </h4>
            <ul className="space-y-2.5 text-sm">
              {projectLinks.map(({ href, label, external }) => (
                <li key={href}>
                  {external ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  ) : (
                    <Link href={href} className="hover:text-white transition-colors">
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm">
          <span>Built by UNLV CS 472 / 672 &mdash; Group 3</span>
          <span className="text-zinc-600">Now available for download</span>
        </div>
      </div>
    </footer>
  );
}
