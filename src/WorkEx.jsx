export default function WorkEx() {
  return (
    <div>
      <div
        id="workex-container"
        className="workex-container bg-slate-900 pt-20 pb-12"
        style={{ zIndex: 100, position: "relative" }}
      >
        <h3 className="text-white text-center text-3xl font-bold my-6">
          Work <span className="text-sky-500">Experience</span>
        </h3>
        <div className="timeline mt-6">
          <div className="timeline-container">
          <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="text-sky-500">SDE 1</h3>
                <span className="text-white">Intellewings</span>
                <p className="text-white mb-3">
                  <em>Jan 2025 - Present</em>
                </p>
                <p className="text-gray-400 text-justify">
                 As a Software Development Engineer at Intellewings, I contribute to
                 developing and maintaining scalable and efficient web services while working
                 with modern tech stacks. My role involves architecting scalable solutions, 
                 collaborating with cross-functional teams, and ensuring optimal performance 
                 and user experience across diverse projects.
                </p>
              </div>
            </div>
          <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="text-sky-500">SDE Intern</h3>
                <span className="text-white">Intellewings</span>
                <p className="text-white mb-3">
                  <em>May 2024 - Dec 2024</em>
                </p>
                <p className="text-gray-400 text-justify">
                  As an SDE Intern at Intellewings, I am gaining valuable
                  experience working with a diverse tech stack including Angular
                  and .NET Core. My responsibilities involve developing and
                  maintaining web applications, collaborating with cross-functional
                  teams to design scalable solutions, and ensuring optimal
                  performance and user experience. This role has allowed me to
                  enhance my proficiency in both frontend and backend
                  development, and apply best practices in software engineering
                  to solve complex problems and deliver high-quality projects
                </p>
              </div>
            </div>
            <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="text-sky-500">Freelance Front-end Dev</h3>
                <span className="text-white">StingHike</span>
                <p className="text-white mb-3">
                  <em>Sep 2023 - Oct 2023</em>
                </p>
                <p className="text-justify text-gray-400">
                  I played a pivotal role as a Frontend Developer in a client
                  project involving the creation of a self-earning app, designed
                  to empower individuals to invest their money wisely.
                  Throughout this experience, I honed my skills in ReactJS,
                  TailwindCSS, and Redux state management, gaining a deeper
                  understanding of frontend development. Collaborating within a
                  team setting, I immersed myself in production-based coding
                  practices, elevating my ability to create robust and
                  user-friendly interfaces. The project not only enriched my
                  technical proficiency but also provided valuable insights into
                  the intricacies of user-centric design and effective
                  collaboration within a development team. This hands-on
                  experience further solidified my commitment to delivering
                  seamless and engaging frontend solutions that align with both
                  user expectations and industry standards.
                </p>
              </div>
            </div>

            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="text-sky-500">AWS Trainee</h3>
                <span className="text-white">GLA University, Mathura</span>
                <p className="text-white mb-3">
                  <em>Jun 2023 - Aug 2023</em>
                </p>
                <p className="text-gray-400 text-justify">
                  I acquired a foundational understanding of DevOps principles,
                  delving into the fundamentals that drive collaborative
                  software development and operational efficiency. My knowledge
                  extends to Amazon Web Services (AWS), encompassing key aspects
                  such as regions, Availability Zones (AZ), and core AWS
                  services like EC2, IAM, S3, and CloudWatch. Venturing into
                  containerization, I expanded my expertise to include Docker,
                  mastering the creation and management of Docker images and
                  containers. Proficiency in Docker Compose enabled me to
                  effectively orchestrate containerized applications.
                  Furthermore, I gained practical experience leveraging Docker
                  Hub for streamlined deployment and distribution of containers,
                  enhancing my skills in deploying scalable and efficient
                  solutions within containerized environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
