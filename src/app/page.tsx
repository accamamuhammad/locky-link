import Entry from "../app/components/Entry";

export default function Home() {
  return (
    <section className="w-screen h-screen px-8 bg-gradient-to-br from-purple-200 to-purple-50 flex flex-col gap-3 items-center justify-center">
      <h1 className="text-center font-light text-4xl leading-11">
        <span className="font-bold">Password Secured,</span> <br />
        Data Transmission.
      </h1>
      <p className="text-center opacity-65 text-sm">
        Take full control of your data, password secure links and QR code you
        can share with anyone
      </p>
      <Entry />
    </section>
  );
}
