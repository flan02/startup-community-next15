import SearchForm from "@/components/custom/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/custom/StartupCard";
import { auth } from "../../../auth";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";


type searchParamsProps = {
  searchParams: Promise<{ query?: string }>
}

export default async function Home({ searchParams }: searchParamsProps) {
  const query = (await searchParams).query;
  const params = { search: query || null };
  const session = await auth();
  // console.log(session?.id);

  // const posts = await client.fetch(STARTUPS_QUERY);
  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

  /*
  ** Dummy data only for example purpose
  const posts: StartupTypeCard = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: 'Dan' },
      _id: 1,
      description: 'Post description',
      image: 'https://plus.unsplash.com/premium_photo-1682464708085-95b4486e2c32?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: "Robots",
      title: "We Robots"
    }
  ]
  */
  // console.log(JSON.stringify(posts, null, 2));

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Inspire yourself, <br />
          Discover new startups
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {
            posts?.length > 0 ? (
              posts.map((post: StartupTypeCard) => (
                <StartupCard key={post?._id} post={post} />
              ))
            ) : (
              <p className="no-results">No startups found</p>
            )
          }
        </ul>
      </section>


      <SanityLive />

    </>
  );
}
