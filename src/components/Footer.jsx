import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-gray-200 dark:border-white/5 bg-white dark:bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          
          {/* 1. Brand Section */}
          <div className="space-y-5">
            <h2 className="text-2xl font-extrabold tracking-tight text-black dark:text-white">
              Skill<span className="text-green-600">Spher.</span>
            </h2>
            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              Empowering your journey with high-quality AI visuals and skill-driven solutions. Simple, fast, and built for the future.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-gray-400">
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 dark:bg-white/5 hover:bg-blue-600 hover:text-white transition-all duration-300">
                <i className="fa-brands fa-facebook-f text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 dark:bg-white/5 hover:bg-black hover:text-white transition-all duration-300">
                <i className="fa-brands fa-x-twitter text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 dark:bg-white/5 hover:bg-pink-600 hover:text-white transition-all duration-300">
                <i className="fa-brands fa-instagram text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 dark:bg-white/5 hover:bg-blue-700 hover:text-white transition-all duration-300">
                <i className="fa-brands fa-linkedin-in text-sm"></i>
              </a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-black dark:text-white mb-6 uppercase tracking-widest">
              Resources
            </h3>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              <li><Link href="/courses" className="hover:text-blue-600 transition">Our Courses</Link></li>
              <li><Link href="/gallery" className="hover:text-blue-600 transition">AI Gallery</Link></li>
              <li><Link href="/blog" className="hover:text-blue-600 transition">Community Blog</Link></li>
            </ul>
          </div>

          {/* 3. Contact Section */}
          <div>
            <h3 className="text-sm font-bold text-black dark:text-white mb-6 uppercase tracking-widest">
              Support
            </h3>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-envelope mt-1 text-blue-600"></i>
                <span>hello@skillspher.com</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-location-dot mt-1 text-blue-600"></i>
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>

          {/* 4. Legal Section */}
          <div>
            <h3 className="text-sm font-bold text-black dark:text-white mb-6 uppercase tracking-widest">
              Company
            </h3>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              <li><Link href="/about" className="hover:text-blue-600 transition">About Us</Link></li>
              <li><Link href="/terms" className="hover:text-blue-600 transition">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-600 transition">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-xs font-medium text-gray-400">
            © {currentYear} <span className="text-black dark:text-white">SkillSpher</span>. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/terms" className="text-xs text-gray-400 hover:text-black dark:hover:text-white transition">Terms</Link>
            <Link href="/privacy" className="text-xs text-gray-400 hover:text-black dark:hover:text-white transition">Privacy</Link>
            <Link href="/cookies" className="text-xs text-gray-400 hover:text-black dark:hover:text-white transition">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;