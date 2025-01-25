import Link from "next/link";
import Image from "next/image";
import ex_img from "@/public/ex_img.jpg";

interface Idea {
  id: string;
  name: string;
  tag: string;
  pitch: string;
  "date-posted": string;
}

export default function PostCard({ idea }: { idea: Idea }) {
  // Destructure `idea` object
  const { id, name, tag, pitch, "date-posted": datePosted } = idea;

  return (
    <li className="post-card group">
      <div className="center m-2">
        <Image
          src={ex_img}
          alt="ex_name"
          width={374}
          height={256}
          className="rounded-xl"
        />
      </div>
      <div>
        <div key={id}>
          <Link href={`/projects/${id}`}>
            <h2 className="text-lg font-bold hover:text-blue-600 transition">
              {name}
            </h2>
          </Link>
          <p className="italic text-sm text-gray-600">Tag: {tag}</p>
          <p className="my-2">{pitch}</p>
          <small className="text-gray-500">Posted on: {datePosted}</small>
        </div>
      </div>
    </li>
  );
}
