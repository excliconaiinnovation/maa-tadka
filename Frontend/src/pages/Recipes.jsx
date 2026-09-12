import SectionTitle from "../components/SectionTitle";

const recipes = [
  {
    name: "Paneer Butter Masala",
    time: "30 MIN",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Dal Tadka",
    time: "25 MIN",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Aloo Gobi",
    time: "25 MIN",
    image:
      "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85",
  },
];

function Recipes() {
  return (
    <main className="bg-[#F7F3E7] px-5 py-20 sm:px-8 lg:px-12">

      <SectionTitle
        eyebrow="Cook With Us"
        title="Recipes Full Of Flavour"
        description="Easy Indian recipes made delicious with Maa Tadka spices."
      />

      <div className="mx-auto mt-12 grid max-w-[1150px] gap-6 md:grid-cols-3">

        {recipes.map((recipe) => (
          <article
            key={recipe.name}
            className="overflow-hidden bg-white shadow-sm"
          >

            <div className="relative h-60 overflow-hidden">

              <img
                src={recipe.image}
                alt={recipe.name}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />

              <span className="absolute bottom-4 left-4 bg-white px-3 py-2 text-[9px] font-bold text-[#103F2C]">
                ⏱ {recipe.time}
              </span>

            </div>

            <div className="p-6">

              <h2 className="font-serif text-2xl font-bold text-[#103F2C]">
                {recipe.name}
              </h2>

              <p className="mt-2 text-xs leading-6 text-[#737c75]">
                Discover a simple recipe packed with authentic
                Indian flavour.
              </p>

              <button className="mt-5 text-[10px] font-bold uppercase tracking-wide text-[#9D211D]">
                View Recipe →
              </button>

            </div>
          </article>
        ))}

      </div>

    </main>
  );
}

export default Recipes;