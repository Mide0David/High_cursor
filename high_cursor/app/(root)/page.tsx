import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Ayo" },
      _id: 1,
      description: "This is a description",
      image: "https://placehold.co/600x400",
      category: "Robots",
      title: "we Robots",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Add you animation template</h1>
        <p className="sub-heading !max-w-3xl">
          submit ideas, vote on piteches and get noticed in virtual
          compatitlies.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Automations"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
