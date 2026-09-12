import SectionTitle from "../components/SectionTitle";

function Blog() {
  const posts = [
    {
      title: "How To Store Spices For Maximum Freshness",
      image:
        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "5 Essential Masalas Every Kitchen Needs",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "The Story Behind Indian Spice Blends",
      image:
        "https://images.unsplash.com/photo-1596040033234-bf6e1c3a3f5e?auto=format&fit=crop&w=900&q=85",
    },
  ];

  return (
    <main className="bg-[#F7F3E7] px-5 py-20 sm:px-8 lg:px-12">

      <SectionTitle
        eyebrow="Maa Tadka Journal"
        title="Stories, Tips & Inspiration"
        description="Discover more about Indian spices, cooking and flavours."
      />

      <div className="mx-auto mt-12 grid max-w-[1150px] gap-6 md:grid-cols-3">

        {posts.map((post) => (
          <article
            key={post.title}
            className="overflow-hidden bg-white"
          >
            <img
              src={post.image}
              alt={post.title}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">

              <div className="text-[9px] font-bold uppercase tracking-[2px] text-[#9D211D]">
                Maa Tadka Journal
              </div>

              <h2 className="mt-3 font-serif text-xl font-bold text-[#103F2C]">
                {post.title}
              </h2>

              <button className="mt-5 text-[10px] font-bold uppercase text-[#103F2C]">
                Read More →
              </button>

            </div>
          </article>
        ))}

      </div>
    </main>
  );
}

export default Blog;