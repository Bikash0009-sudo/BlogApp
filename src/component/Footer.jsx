function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-16">
      <div className="text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} CodexBlogs. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-gray-500">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

export default Footer;