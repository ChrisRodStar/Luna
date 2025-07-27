import CourseCard from "./CourseCard";

const coursesData = [
  {
    title: "HTML Foundations",
    description: "Start your frontend journey by learning the building blocks of the web. Master semantic HTML, forms, and document structure.",
    type: "Course" as const,
    technologies: ["HTML5", "Semantic Tags", "Forms", "Accessibility"],
    isComingSoon: false,
  },
  {
    title: "CSS Styling & Layout",
    description: "Transform your HTML into beautiful, responsive designs. Learn Flexbox, Grid, animations, and modern CSS techniques.",
    type: "Course" as const,
    technologies: ["CSS3", "Flexbox", "Grid", "Responsive Design"],
    isComingSoon: false,
  },
  {
    title: "JavaScript Fundamentals",
    description: "Bring your websites to life with interactive JavaScript. Master DOM manipulation, events, and modern ES6+ features.",
    type: "Course" as const,
    technologies: ["JavaScript", "DOM", "ES6+", "APIs"],
    isComingSoon: false,
  },
  {
    title: "React Development",
    description: "Build dynamic user interfaces with React. Learn components, hooks, state management, and modern React patterns.",
    type: "Course" as const,
    technologies: ["React", "JSX", "Hooks", "State Management"],
    isComingSoon: false,
  },
  {
    title: "TypeScript Mastery",
    description: "Add type safety to your JavaScript projects. Learn TypeScript fundamentals and how to build scalable applications.",
    type: "Course" as const,
    technologies: ["TypeScript", "Type Safety", "Interfaces", "Generics"],
    isComingSoon: false,
  },
  {
    title: "Next.js Full-Stack",
    description: "Master the React framework for production. Learn server-side rendering, API routes, and deployment strategies.",
    type: "Course" as const,
    technologies: ["Next.js", "SSR", "API Routes", "Deployment"],
    isComingSoon: false,
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frontend Development Roadmap
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Follow our structured path from HTML basics to Next.js mastery. Each course builds on the previous one to create a complete frontend developer skillset.
          </p>
        </div>

        {/* Mobile-first grid layout using Tailwind CSS responsive grid classes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-6">
          {coursesData.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              type={course.type}
              technologies={course.technologies}
              isComingSoon={course.isComingSoon}
              stepNumber={index + 1}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-gray-600 text-base md:text-lg">
            Follow the numbered sequence for the best learning experience. All courses are completely free and include hands-on projects to build your portfolio.
          </p>
        </div>
      </div>
    </section>
  );
}