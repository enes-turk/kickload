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
      <section className="section_container">
        <ul className="mt-7 card_grid">
          {ideas.map((idea) => (
            <div key={idea.id} className="p-4 bg-white shadow rounded">
              <h2 className="text-lg font-bold">{idea.name}</h2>
              <p className="italic text-sm text-gray-600">Tag: {idea.tag}</p>
              <p className="my-2">{idea.pitch}</p>
              <small className="text-gray-500">
                Posted on: {idea["date-posted"]}
              </small>
            </div>
          ))}
        </ul>
      </section>
    </>
  );
}
