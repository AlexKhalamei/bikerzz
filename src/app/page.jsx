import Hero from "@/components/Hero";
import PopularBikes from "@/components/PopularBikes";

export const metadata = {
  title: "Home",
  description: "Home",
};

export default function Home() {
  return (
    <>
      <Hero />
      <PopularBikes />
    </>
  );
}
