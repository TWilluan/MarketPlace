import Link from "next/link";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-grey-900 sm:text-6xl">
          Your market place for high-quality{" "}
          <span className="text-blue-600">digital assets</span>.
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Welcome to StoreMarket. Every asset is verified by our team to ensure
          highest-quality standard
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/products" className={buttonVariants()}>
            Browse Trending
          </Link>
          <Button variant='ghost'>
            Out quality promise &rarr;
          </Button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
