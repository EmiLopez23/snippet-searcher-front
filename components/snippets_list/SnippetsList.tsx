import { INITIAL_SNIPPETS } from "@/utils/snippets";
import SnippetCard from "../ui/snippet_card/SnippetCard";

export default function SnippetsList() {

  return (
    <div className="flex flex-col gap-5">
      {INITIAL_SNIPPETS.map((snippet) => {
        return (
          <SnippetCard
            key={snippet.id}
            name={snippet.name}
            compliance={snippet.compliance}
            content={snippet.content}
          />
        );
      })}
    </div>
  );
}
