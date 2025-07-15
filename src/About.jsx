import profileImg from "./assets/IMG_1325.jpg";

export default function About() {
  return (
    <>
      <div
        id="about-section"
        className="about-section-container flex gap-5 justify-between py-20 bg-slate-900"
        style={{ zIndex: 100, position: "relative" }}
      >
        <div className="text-start">
          <p
            className="greetings text-white font-bold text-3xl"
            style={{ margin: "1rem 5rem" }}
          >
            Hi, I'm Rytham Sharma <span className="wave">👋🏻</span>
          </p>
          <p
            className="introduction-para text-white"
            style={{ margin: "1rem 2rem 1rem 5rem" }}
          >
            As a Full Stack Developer at Intellewings, I've successfully transitioned from academic pursuits to professional impact. My journey from intern to full-time <span className="text-sky-500">Software Development Engineer</span> reflects my commitment to continuous growth and delivering results.
          </p>
          <p
            className="text-white introduction-para"
            style={{ margin: "1rem 2rem 1rem 5rem" }}
          >
            With expertise spanning modern <span className="text-sky-500">web technologies, cloud solutions, and system design,</span> I've successfully delivered <span className="text-sky-500">end-to-end solutions</span> across diverse domains.
            My experience includes <span className="text-sky-500">architecting scalable systems,</span>  developing user-centric applications, and collaborating with cross-functional teams to bring innovative ideas to life.
          </p>
          <p
            className="text-white introduction-para"
            style={{ margin: "1rem 2rem 1rem 5rem" }}
          >
            Currently focused on expanding my expertise in distributed systems and <span className="text-sky-500">emerging technologies</span> while contributing to <span className="text-sky-500">impactful projects</span>  that make a difference.
          </p>
        </div>
        <img
          src={profileImg}
          alt="rytham-sharma-img"
          className="text-white self-center img-rytham hover:shadow-[0_35px_80px_-15px_rgba(51,65,125,0.8)] hover:scale-105 transition-all duration-1000 ease-in-out"
          style={{
            // margin: "0rem 5rem 1rem 1rem",
            borderRadius: "50%",
            width: "20rem",
            position: "relative",
            objectFit: "cover",
          }}
        />
      </div>
    </>
  );
}
