import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold text-[var(--geist-foreground)]">
        Welcome to the Rest Countries API
      </h1>
      <Image
        src="/world.svg"
        alt="World"
        width={400}
        height={400}
        className="rounded-lg"
      />
      <p className="text-lg text-[var(--geist-foreground)]">
        Get information about countries, regions, and cities around the world.
      </p>
    </div>
  );
}
