import { useParams } from "react-router";

export function Recipe() {
  const { slug, id } = useParams();
  return (
    <div className="">
      <h1>{slug}</h1>
      <h1>{id}</h1>
    </div>
  );
}
