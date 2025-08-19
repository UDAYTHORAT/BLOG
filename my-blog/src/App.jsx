import { Github, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
     <header>
  <h1>Uday Ashok Thorat</h1>
  <p>B.Tech CSE (AI & Analytics)</p>
  <div className="links">
    <a href="mailto:udaythorat0018@gmail.com" className="email">
      <Mail /> Email
    </a>
    <a href="tel:+917057619489" className="call">
      <Phone /> Call
    </a>
    <a href="https://github.com/UDAYTHORAT" target="_blank" className="github">
      <Github /> GitHub
    </a>
  </div>
</header>


      {/* About */}
      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <div className="shadow-md rounded-2xl p-4 bg-white">
          <p>
            I'm a passionate developer skilled in React.js, Express.js,
            JavaScript, Java, CSS, HTML, and DSA. I enjoy solving problems and
            building scalable web applications. My goal is to contribute to a
            dynamic team and grow as a full-stack developer while learning
            continuously.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "React.js",
            "Express.js",
            "Java",
            "JavaScript",
            "HTML5",
            "CSS",
            "Python",
            "Machine Learning",
            "API Development",
          ].map((skill) => (
            <div
              key={skill}
              className="shadow-sm rounded-xl p-3 text-center font-medium bg-white"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid gap-4">
          <div className="shadow-md rounded-2xl p-4 bg-white">
            <h3 className="text-xl font-semibold">
              AI-Powered Fashion Outfit Recommender
            </h3>
            <p className="mt-2 text-gray-700">
              An AI system that suggests visually compatible outfits using the
              CLIP model and cosine similarity. Built with Express.js and EJS,
              integrated with e-commerce APIs.
            </p>
            <a
              href="https://github.com/UDAYTHORAT/AI-Powered-Fashion-Outfit-Recommender"
              target="_blank"
              className="text-indigo-600 mt-2 inline-block hover:underline"
            >
              View Project →
            </a>
          </div>

          <div className="shadow-md rounded-2xl p-4 bg-white">
            <h3 className="text-xl font-semibold">Women's Safety App</h3>
            <p className="mt-2 text-gray-700">
              A responsive app with SOS alerts, live location sharing, and
              emergency contacts. Built using React.js, Tailwind CSS, and Google
              Maps API.
            </p>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Publications</h2>
        <div className="shadow-md rounded-2xl p-4 bg-white">
          <h3 className="text-xl font-semibold">
            AI-Powered Fashion Outfit Recommender
          </h3>
          <p className="text-gray-700 mt-2">
            Published in IJRTI (2025). Research on recommendation systems, CLIP
            model, and e-commerce API integration.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Certifications</h2>
        <ul className="list-disc list-inside text-gray-700 bg-white p-4 rounded-2xl shadow-md">
          <li>IBM Introduction to Machine Learning</li>
          <li>Introduction to Web Development with HTML, CSS, JavaScript</li>
          <li>Pattern Discovery in Data Mining</li>
          <li>Networking Basics</li>
          <li>Java Training</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <p>
            © {new Date().getFullYear()} Uday Ashok Thorat | Built with React &
            Tailwind
          </p>
        </div>
      </footer>
    </div>
  );
}
