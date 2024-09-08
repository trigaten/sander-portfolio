import BlogsHero from "@/components/blogs/hero";
import Navbar from "@/components/navbar/navbar";

function Page() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 z-10">
        <Navbar variant="dark" />
      </div>
      <BlogsHero />
    </div>
  );
}

export default Page;
