export default function ProjectCard(props) {
  return (
    <div
    className="project-container flex flex-col align-center p-5 transition-transform duration-500 ease-in-out transform-gpu hover:scale-105"
      style={{
        borderRadius: "20px",
        border: "0.5px solid #0369a1",
        minWidth: "20rem",
        maxWidth: "20rem",
        minHeight: "10rem",
      }}
    >
      <img
        src={props.ImgSrc}
        alt=""
        className="rounded mb-4"
        style={{ height: "10rem" }}
      />
      <h4 className="text-white font-bold mb-2" style={{ minHeight: "3rem" }}>
        {props.Name}
      </h4>
      <p className="text-gray-400 text-sm" style={{ flexGrow: "1" }}>
        {props.Desc}
      </p>
      <div className="mt-5 mb-3 flex justify-center">
        {props.GithubLink && (
          <a
            href={props.GithubLink}
            className="view-credential-btn2 w-full h-9 text-center pt-1 rounded-lg"
            style={{
              backgroundColor: "#e0f2fe",
              color: "#0284c7",
              marginRight: "8px",
              border: "1px solid #e0f2fe",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
        {props.Demo && (
          <a
            href={props.Demo}
            className="-btn w-full rounded-lg pt-1 text-center  "
            style={{ backgroundColor: "#0ea5e9", color: "#fff" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit
          </a>
        )}
      </div>
    </div>
  );
}
