import { useParams } from "react-router-dom";

export default function Content() {
  const { id } = useParams();

  return (
    <>
      <h1>{id}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed minus,
        laboriosam, voluptate, quasi nemo quas possimus ipsa recusandae impedit
        quia illum dignissimos vel similique numquam tempore cumque ipsam.
        Officiis, nobis?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor tenetur
        at omnis? Nulla rem praesentium minus repellat itaque fugit a ad.
      </p>
    </>
  );
}
