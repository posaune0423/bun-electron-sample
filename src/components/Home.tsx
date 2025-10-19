import { ModeToggle } from "./mode-toggle";

export function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-screen dark:bg-black">
      <h1 className="text-2xl font-bold dark:text-white">Home</h1>
      <ModeToggle />
    </section>
  );
}
