export default function Page({ params }) {
  console.log(params.id);

  return <div>Viewing message with ID: {params.id}</div>;
}
