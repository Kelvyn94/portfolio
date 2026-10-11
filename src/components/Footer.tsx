import { profile } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-navy-900 py-8 text-sm text-paper/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 sm:flex-row sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Built with React, TypeScript and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
