export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400">
          © 2024 Reginald. Built with React and Tailwind CSS.
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="https://github.com" className="text-gray-400 hover:text-white">
            GitHub
          </a>
          <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
            LinkedIn
          </a>
          <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}