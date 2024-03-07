export default function CertificationCard(props) {
  return (
    <>
      <div
        className="card-container border-solid transition-transform duration-500 ease-in-out hover:scale-105 border-gray-50 p-4 flex flex-col justify-start pb-6"
        style={{
          width: "20rem",
          border: "0.5px solid #0369a1",
          borderRadius: "20px",
        }}
      >
        <img
          src={props.ImgSrc}
          className="rounded-xl mb-3"
          style={{ maxWidth: "100%", height: "13.5rem", objectFit: "cover" }}
        ></img>
        <div className="flex flex-col" style={{ flexGrow: "1" }}>
          <h4 className="text-sky-500 font-bold text-wrap px-1">
            {props.Name}
          </h4>
          <p className="text-gray-400 px-1 text-sm">{props.Company}</p>
          <p className="text-gray-600 text-sm mb-8 px-1">
            Issue Date: {props.IssueDate}
          </p>
        </div>
        <button
          // className="px-5 py-2 rounded-lg my-4 bg-[#0284c7] text-white flex view-credential-btn"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500  focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          style={{
            margin: " 0 auto",
          }}
        >
          <a href={props.Link} target="_blank">
            View Credential
          </a>
        </button>
      </div>
    </>
  );
}
