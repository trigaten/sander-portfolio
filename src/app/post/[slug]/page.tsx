import react from "react";

export default function Page({ params }: { params: { slug: number } }) {
  const id = params.slug;
  return <h1>My Page {id}</h1>;
}
