export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">EngiTech Solutions</h3>
            <p className="text-sm">
              Innovative Engineering for a Better Future
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400">
              Twitter
            </a>
            <a href="#" className="hover:text-blue-400">
              LinkedIn
            </a>
            <a href="#" className="hover:text-blue-400">
              GitHub
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} EngiTech Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
