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
            Currently a <span className="text-sky-500">4th-year B.Tech student</span> at GLA University, Mathura, I am based in Uttar Pradesh. I am a results-driven
            <span className="text-sky-500"> Full Stack Developer</span> proficient in technologies like <span className="text-sky-500">HTML, CSS, JavaScript, Angular, .NET, and the MERN stack</span>. My skills also include <span className="text-sky-500">Docker, Bootstrap, TailwindCSS, GitHub, and Postman.</span>
          </p>
          <p
            className="text-white introduction-para"
            style={{ margin: "1rem 2rem 1rem 5rem" }}
          >
            With a strong background in web development, I have successfully completed <span className="text-sky-500">over 15 projects</span>, including <span className="text-sky-500">personal projects</span>, <span className="text-sky-500">client projects</span>, and those from <span className="text-sky-500">hackathons</span>. Notably, I was nominated in the Smart India Hackathon (SIH) in 2023, <span className="text-sky-500">a national-level competition</span>.
          </p>
          <p
            className="text-white introduction-para"
            style={{ margin: "1rem 2rem 1rem 5rem" }}
          >
            Currently, I am working at Intellewings as a <span className="text-sky-500">SDE Intern</span>. My strengths lie in being <span className="text-sky-500">hardworking, disciplined, and a team player</span>, as evidenced by my experience working with clients. While I tend to take time for decision-making, I believe in deep-diving into situations before making informed choices.
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
