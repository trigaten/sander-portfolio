import BlogsHero from "@/components/blogs/hero";
import Navbar from "@/components/navbar/navbar";
import Content from "@/components/blogs/content";
import BlogsTags from "@/components/blogs/blogsTags";
function Page() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 z-10">
        <Navbar variant="dark" />
      </div>
      <BlogsHero />
      <Content />
      <BlogsTags />
    </div>
  );
}

export default Page;
