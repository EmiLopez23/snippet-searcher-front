import Save from "@geist-ui/icons/save";
import Share2 from "@geist-ui/icons/share2";
import Play from "@geist-ui/icons/play";
import AlignLeft from "@geist-ui/icons/alignLeft";
import Copy from "@geist-ui/icons/copy";
import CodeBlock from "@/components/code_block/CodeBlock";
import Button from "@/components/ui/button/Button";
import SnippetsList from "@/components/snippets_list/SnippetsList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden p-24">
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
