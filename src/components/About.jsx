import { ReactTyped } from "react-typed";
import photo from "../assets/photo.jpeg";

export default function About() {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 py-20">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold mb-6 text-gray-800 dark:text-gray-200">
            Hi, I’m <span className="text-indigo-600 dark:text-indigo-500">Karen Arutyunyan</span>
          </h1>
          <p className="text-xl min-h-[13rem] leading-relaxed text-gray-800 dark:text-gray-200">
            <ReactTyped
              strings={[
                "Professional Quality Assurance Automation Engineer with 8 years experience and proven track record in designing, developing, and executing automated test suites.",
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop={false}
            />
          </p>
          <h1 className="text-4xl font-bold mb-6 text-indigo-600 dark:text-indigo-500 text-center">{`{klarutyunyan}`}
          </h1>
        </div>

        <div className="flex justify-center">
          <img
            src={photo}
            alt="My portrait"
            className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-2xl shadow-lg"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </div>
  );
}