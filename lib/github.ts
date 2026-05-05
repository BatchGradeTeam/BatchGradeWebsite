export type Contributor = {
  login: string;
  html_url: string;
  avatar_url: string;
  contributions: number;
};

export async function getContributors(): Promise<Contributor[]> {
  const owner = "UNLV-CS472-672";
  const repo = "2026-S-GROUP3-BatchGrade";
  const url = `https://api.github.com/repos/${owner}/${repo}/contributors?per_page=100`;

  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
  };

  if (process.env.GITHUB_TOKEN) {
    headers["Authorization"] = `token ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch(url, { headers, cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Failed to fetch contributors: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();

  // Filter out common bot accounts (dependabot, update bots, etc.)
  // Also explicitly exclude the user 'danielogen' per project request.
  return (data || []).filter((c: any) => {
    const login = String(c.login || "").toLowerCase();
    if (login === "danielogen") return false;
    return !/update-?bot|dependabot|bot/i.test(login);
  });
}
