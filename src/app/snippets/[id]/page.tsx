import { notFound, } from "next/navigation";
import Link from "next/link"
import { db } from "@/db";

interface SnippetShowPageProps {
  params: {
    id: string
  }
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  await new Promise(resolve => setTimeout(resolve, 2000));

  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) }
  })
  
  if(!snippet) {
    return notFound();
  }

  console.log(props);
  return  <div>
    <div className="flex m-4 justify-between items-center">
      <h1 className="text-xl font-bold">{snippet.title}</h1>
      <div className="flex gap-3">
        <Link 
          href={`/snippets/${props.params.id}/edit`}
          className="p-2 border rounded"
        >
          Edit
        </Link>
        <button className="p-2 border rounded">Delete</button>
      </div>
    </div>
    <pre className="p-3 border rounded bg-gray-200 border-gray-200">
      <code>{snippet.code}</code>
    </pre>
  </div>;

}

