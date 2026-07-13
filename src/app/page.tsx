export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="font-mono text-sm tracking-wide text-muted-foreground">
        MCAT PREP
      </p>
      <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        Scaffold is live.
      </h1>
      <p className="max-w-md text-muted-foreground">
        The exam simulator, tutor mode, and lesson library are being built
        here next.
      </p>
    </main>
  );
}
