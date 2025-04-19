import SearchForm from '@/components/SearchForm';
import StartupCard from '@/components/StartupCard';

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      _id: 1,
      title: 'Pitch 1',
      image:
        'https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'This is a description of pitch 1',
      category: 'Tech',
      views: 45,
      author: { _id: 1, name: 'John Doe' },
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Ideas, <br />
          Connect with Entrepreneurs
        </h1>
        <p className="sub-heading max-w-3xl">
          Submit your Ideas, Vote in Pitches, Get noticed in virtual
          competitions
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Showing results for ${query}` : 'All Startups'}
        </p>
        <ul className="mt-7 card_grid">
          {posts.length ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="no-results">No Startups Found</p>
          )}
        </ul>
      </section>
    </>
  );
};

export default Home;
