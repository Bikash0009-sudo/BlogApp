import Header from "../component/Header";

function Help() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-600 to-slate-400">
      <Header />

      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6 text-white">Help & Support</h1>

        {/* Section 1 */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-white">
            📝 How to Create a Blog
          </h2>
          <p className="text-white">
            Go to the Create Blog page, fill in the title, content,
            author name, and upload an image. Then click publish.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-white">
            🔍 How to Read Blogs
          </h2>
          <p className="text-white">
            Visit the Home or Blogs page and click on any blog card
            to read the full article.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-white">
            🖼 Image Upload Issues
          </h2>
          <p className="text-white">
            Make sure you upload a valid image while creating a blog.
            Supported formats include JPG, PNG, and JPEG.
          </p>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-white">
            📩 Contact Support
          </h2>
          <p className="text-white">
            If you face any issues, contact us at:
          </p>
          <p className="font-semibold mt-2 text-white">
            support@codexblogs.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Help;