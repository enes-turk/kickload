import PostCard from "@/components/PostCard";
import ideas from "@/public/data_1.json";

export default function Home() {
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Ideas <br /> Connect with Others
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches and Get Noticed in Virtual Competitions
        </p>
      </section>
      <section className="section_container mx-9 my-9">
        <ul className="card_grid">
          {ideas.map((idea) => (
            <PostCard key={idea.id} idea={idea} />
          ))}
        </ul>
      </section>
    </>
  );
}
