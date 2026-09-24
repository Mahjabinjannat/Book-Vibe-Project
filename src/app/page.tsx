import Books from "@/component/homePage/Books";
import Hero from "@/component/homePage/Hero";

export default function Home() {
  return (
    <div className="flex-1 font-sans ">
      <Hero />
      <Books />
    </div>
  );
}
