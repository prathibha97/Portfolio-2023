import { profile } from '@/lib/data';
import pkg from '@/package.json';
import Link from 'next/link';

function buildInfo() {
  const sha =
    process.env.VERCEL_GIT_COMMIT_SHA || process.env.NEXT_PUBLIC_COMMIT_SHA || 'local';
  const deployedAt =
    process.env.VERCEL_GIT_COMMIT_AUTHOR_DATE ||
    process.env.NEXT_PUBLIC_BUILD_TIME ||
    new Date().toISOString();

  let rel = '—';
  const diffMs = Date.now() - new Date(deployedAt).getTime();
  if (!Number.isNaN(diffMs)) {
    const days = Math.round(diffMs / 86_400_000);
    if (days <= 0) rel = 'today';
    else if (days === 1) rel = 'yesterday';
    else if (days < 30) rel = `${days} days ago`;
    else if (days < 365) rel = `${Math.round(days / 30)} months ago`;
    else rel = `${Math.round(days / 365)} years ago`;
  }

  return { version: pkg.version, shortSha: sha.slice(0, 7), rel };
}

export default function Footer() {
  const { version, shortSha, rel } = buildInfo();

  return (
    <footer className="on-ink">
      <div className="container-page py-16 md:py-24">
        {/* The name, set once at size, as a sign-off. */}
        <p className="display text-[clamp(2.5rem,9vw,7rem)] leading-[0.9]">{profile.name}</p>

        <div className="mt-16 grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <p className="text-[0.9375rem] leading-[1.6] text-[#c6cad0]">
              {profile.role}. {profile.availability}
            </p>
            <p className="t-meta mt-2">
              {profile.workingStyle}. {profile.relocation}.
            </p>
          </div>

          <div className="col-span-6 sm:col-span-3 lg:col-span-2 lg:col-start-7">
            <h2 className="t-meta mb-2">Pages</h2>
            <ul className="space-y-1 text-[0.9375rem]">
              <li><Link className="link-rule" href="/#work">Work</Link></li>
              <li><Link className="link-rule" href="/#about">About</Link></li>
              <li><Link className="link-rule" href="/writing">Writing</Link></li>
              <li><Link className="link-rule" href="/#contact">Contact</Link></li>
            </ul>
          </div>

          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <h2 className="t-meta mb-2">Elsewhere</h2>
            <ul className="space-y-1 text-[0.9375rem]">
              <li>
                <a className="link-rule" href={profile.socials.github} target="_blank" rel="noreferrer">GitHub</a>
              </li>
              <li>
                <a className="link-rule" href={profile.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              </li>
              <li>
                <a className="link-rule" href={`mailto:${profile.email}`}>Email</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-white/15 pt-5">
          <p className="t-meta">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="t-meta">
            v{version} · {shortSha} · deployed {rel}
          </p>
        </div>
      </div>
    </footer>
  );
}
