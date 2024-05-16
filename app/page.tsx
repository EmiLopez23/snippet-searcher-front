import CodeBlock from "@/components/code_block/CodeBlock";
import Button from "@/components/ui/button/Button";
import SnippetsList from "@/components/snippets_list/SnippetsList";
import { getSession } from "@auth0/nextjs-auth0";
import Link from "next/link";

export default async function Home() {
  const session = await getSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden p-24 pt-0">
      <div className="flex w-full justify-end p-10">
        {session ? (
          <Link href="/api/auth/logout" className="default-button px-10">Log out</Link>
        ) : (
          <Link href="/api/auth/login" className="default-button px-10">Log in</Link>
        )}
      </div>
      <h1 className="text-end text-3xl text-ds-gray-600">
        <span>PrintScript </span>
        Snippet
      </h1>
      <section className="flex w-full justify-center gap-10">
        <CodeBlock />
        <SnippetsList />
      </section>
    </main>
  );
}
