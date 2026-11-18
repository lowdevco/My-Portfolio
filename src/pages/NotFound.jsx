import React from "react";
import { Link, useLocation } from "react-router-dom";
import Layout from "@/components/Layout";

function NotFound() {
  const { pathname } = useLocation();
  return (
    <Layout>
      <main className="wrap flex min-h-svh flex-col justify-center pt-32 pb-20">
        <p data-reveal className="label">
          <span className="text-accent">Error</span> — route not found
        </p>
        <h1 data-split className="mt-6 text-[clamp(6rem,24vw,20rem)] font-semibold leading-[0.8] tracking-[-0.07em]">
          404<span className="text-accent">.</span>
        </h1>
        <pre data-reveal className="mt-10 overflow-x-auto font-mono text-sm text-muted">
          <span className="text-accent">~$</span> cd {pathname}
          {"\n"}bash: cd: {pathname}: No such file or directory
        </pre>
        <div data-reveal className="mt-10">
          <Link to="/" className="btn btn-primary">
            <span className="roll">
              <span data-text="cd ~ (go home)">cd ~ (go home)</span>
            </span>
          </Link>
        </div>
      </main>
    </Layout>
  );
}

export default NotFound;
