import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-6">
      <h1 className="font-heading text-title-l md:text-jumbo font-bold mb-4">404</h1>
      <p className="text-body-m text-muted-foreground mb-8 text-center max-w-md">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="text-body-s font-body font-medium text-foreground hover:text-primary transition-colors duration-300"
      >
        Return to Home
      </Link>
    </div>
  );
}
