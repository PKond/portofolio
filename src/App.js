import "./css/styles.css";
import cloud from "./images/cloud.png";
import mountain from "./images/mountain.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDatabase } from "@fortawesome/fontawesome-free-solid";
import { IoLogoGithub } from "react-icons/io5";
import { Projects } from "./utils/data";

function App() {
  return (
    <>
      <div className="top-container">
        <img className="top-cloud" src={cloud} alt="cloud-img" />
        <h1>I'm Pandelis.</h1>
        <h2>a programmer.</h2>
        <img className="bottom-cloud" src={cloud} alt="cloud-img" />
        <img className="mountain" src={mountain} alt="mountain-img" />
      </div>

      <div className="middle-container text-[#FFFFFF]">
        <div className="profile">
          <img src="" alt="" />
          <h2>Hello.</h2>
          <p className="intro">
            I am a graduate of the Department of Informatics and
            Telecommunications of the National Kapodistrian University of
            Athens.
          </p>
          <p className="intro">In the coming months I aspire to land my first Web Development job.</p>
        </div>

        <div className="skills text-[#C3C3C3]">
          <h2>My Skills.</h2>
          <div className="text-xl">
            <h3>Web Development</h3>
          </div>
          <div class="skill-row">
            <div className="icon-title">
              <p className="text-2xl underline">FrontEnd</p>
              <div className="pt-6">
                <FontAwesomeIcon icon={faCode} size="6x fa-fw" />
              </div>
            </div>

            <div className="web-development-list text-2xl">
              <ul>
                <li>- CSS including vanilla CSS, Bootstrap and Tailwind CSS</li>
                <li>- JavaScript including jQuery</li>
                <li>- React-React Redux</li>
              </ul>
            </div>
          </div>

          <div className="skill-row">
            <div className="icon-title2">
              <p className="text-2xl underline">BackEnd</p>
              <div className="pt-6">
                <FontAwesomeIcon icon={faDatabase} size="6x fa-fw" />
              </div>
            </div>

            <div class="web-development-list2 text-2xl">
              <ul>
                <li>- Backend including SQL, MongoDB, Mongoose, Firebase</li>
                <li>
                  - Familiarity with deployment frameworks mainly Heroku and
                  Firebase
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio">
        <div className="text-6xl text-[#696969] underline">Portfolio</div>
        <div className="skill-row2">
          <section className="flex flex-wrap items-center justify-center justify-evenly my-12 gap-4">
            {Projects &&
              Projects.map((n) => (
                <div
                  key={n.id}
                  className="border border-zinc-800 rounded-md p-2 min-w-[600px] md:max-w-[600px] hover:border-zinc-600 duration-100 ease-in-out"
                >
                  <p className="text-4xl text-[#66bfbf] font-bold italic text-textBase uppercase">
                    <a
                      className="hover:text-[#2e77bf] hover:underline"
                      href={n.link}
                    >
                      {n.name}
                    </a>
                  </p>

                  <img
                    src={n.imageSrc}
                    className="w-full h-full object-cover rounded-md my-4"
                    alt=""
                  />

                  <div className="flex flex-1 items-center justify-between">
                    <p className="text-2xl text-[#66bfbf] text-start">
                      Technologies
                      <span className="block text-xl text-bold text-gray-500">
                        {n.techs}
                      </span>
                    </p>

                    <a href={n.github}>
                      <div>
                        <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
                      </div>
                    </a>
                  </div>
                </div>
              ))}
          </section>
        </div>
      </div>

      <div class="contact-me">
        <h2>Get In Touch</h2>
        <a class="btn" href="mailto:pandelis777@gmail.com">
          Via Email
        </a>
      </div>
      <div className="bottom-container">
        <a className="footer-link text-2xl" href="https://www.linkedin.com/in/pandelis-kondos/">
          LinkedIn
        </a>
        <a
          className="footer-link text-2xl"
          href="https://www.facebook.com/pandelis.kondos"
        >
          Facebook
        </a>
        <p className="copyright text-xl">© 2022 Pandelis Kondos.</p>
      </div>
    </>
  );
}

export default App;
