import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <section className="container py-32 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          Syed Maaz
        </h1>

        <p className="mt-4 text-white/60 max-w-xl">
          Frontend Developer building responsive and secure web experiences.
        </p>

        <div className="mt-8">
          <Button>View Projects</Button>
        </div>
      </section>
    </main>
  );
}