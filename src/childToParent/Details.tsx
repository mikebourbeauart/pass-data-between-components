export default function Details({ selection }: any) {
  const data = "This is data from Child Component to the Parent Component.";

  return (
    <div>
      <h1>{selection}</h1>
    </div>
  );
}
