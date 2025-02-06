import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">EngiTech Solutions</h3>
            <p className="text-sm">
              Innovative Engineering for a Better Future
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-secondary" title="X">
              <Image
                src="/socials/x.jpg"
                alt="X"
                className="h-6 w-6"
                width={24}
                height={24}
              />
            </a>
            <a href="#" className="hover:text-secondary" title="Facebook">
              <Image
                src="/socials/Facebook.png"
                alt="Facebook"
                className="h-6 w-6"
                width={24}
                height={24}
              />
            </a>
            <a href="#" className="hover:text-secondary" title="LinkedIn">
              <Image
                src="/socials/linkedin.png"
                alt="LinkedIn"
                className="h-6 w-6"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} EngiTech Solutions. All rights reserved.
          Developed by JOKA.
        </div>
      </div>
    </footer>
  );
}
