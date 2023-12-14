import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function ProjectCard({ imgUrl, title, description, gitUrl, previewUrl }) {
  return (
    <div>
      <div
        className="h-64 md:h-72 rounded-t-xl relative group before:content-[''] before:absolute before:block before:bg-gradient-to-b before:from-black  before:via-transparent before:to-transparent before:inset-0 before:opacity-70 "
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay  items-center justify-center absolute  top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-60 transition-all duration-1000">
          <Link
            href={gitUrl}
            className="mr-2 h-14 w-14 border-2 rounded-full relative border-myText hover:border-white group/link  "
          >
            <CodeBracketIcon
              className=" h-10 w-10 text-myText cursor-pointer absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white
            "
            />
          </Link>
          <Link
            href={previewUrl}
            className=" h-14 w-14 border-2 rounded-full relative border-myText hover:border-white group/link "
          >
            <EyeIcon
              className=" h-10 w-10 text-myText cursor-pointer absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white
            "
            />
          </Link>
        </div>
      </div>
      <div className=" text-white mt-2 rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className=" text-xl font-semibold mb-2">{title}</h5>

        <p className=" text-myText">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
