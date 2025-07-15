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
                  As an SDE Intern at Intellewings, My responsibilities involve developing and
                  maintaining web applications, ensuring optimal
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
                 I played a pivotal role as a Frontend Developer in a client project 
                 involving the creation of a self-earning investment app. This experience
                  enhanced my expertise in ReactJS, TailwindCSS, and Redux state management 
                  while working within a collaborative team environment.
                 The project provided valuable insights into production-based coding practices
                  and user-centric design principles. Through this hands-on experience, 
                  I developed a engaging frontend solutions that aligned with both user
                   expectations and industry standards, further solidifying my commitment to 
                   delivering seamless user interfaces.
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
               I acquired foundational knowledge in DevOps principles, focusing on 
               collaborative software development and operational efficiency. 
               My expertise includes key Amazon Web Services (AWS) components such as
                EC2, IAM, S3, and CloudWatch, along with understanding of regions and Availability Zones.
               I expanded my skills in containerization through Docker, mastering image 
               and container management, Docker Compose orchestration, and Docker Hub deployment.
                This experience enhanced my ability to deploy scalable solutions within containerized environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
