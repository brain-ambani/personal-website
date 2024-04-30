import AboutPage from "@/app/about/page";
import BlogPage from "@/app/blog/page";
import ProjectsPage from "@/app/projects/page";

export default function Nav() {
  return (
    <div>
      <AboutPage />
      <ProjectsPage />
      <BlogPage />
    </div>
  );
}
