import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snippet-edit-form";

interface SnippetEditPageProps {
  params: {
    id: string
  }
}

export default async function SnippetEditPage({params}: SnippetEditPageProps) {
  const param = await params;
  const id = parseInt(param.id);

  const snippet = await db.snippet.findFirst({
    where: {
      id,
    }
  })

  if(!snippet) {
    notFound()
  }

  return <div>
   <SnippetEditForm snippet={snippet} />
  </div>
}