"use client";
import { GiRibbonMedal } from "react-icons/gi";
import BulletPoint from "../../components/BulletPoint";
import Reveal from "../../components/Reveal";
import Lines from "../../components/Lines";

const AboutPage = () => {
  return (
    <main className="p-10 relative flex-1 flex flex-col justify-center items-center max-w-6xl self-center">
      <Lines />
      <Reveal>
        <p className="font-semibold pb-10 font-secondary text-text-grey text-2xl self-start">
          <span className="text-accent-blue ">
            As the founder and lead engineer at Ship Design Engineering,
          </span>
          &nbsp;I bring a wealth of experience and expertise to the table. With
          a background in welding and a passion for maritime engineering, I have
          dedicated my career to pushing the boundaries of innovation in ship
          design. My journey reflects my commitment to excellence and continuous
          learning.
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <section>
          <GiRibbonMedal
            color="#283260"
            size={400}
            className="opacity-5 absolute -left-5 -bottom-10 -rotate-12"
          />
          <p className="font-semibold pb-10 font-secondary text-text-grey text-2xl self-start">
            <span className="text-accent-blue ">
              Highlighting my commitment to quality and expertise,
            </span>
            &nbsp;is not just a promise, it a certified reality.
          </p>

          <div className="flex flex-col gap-2 pl-4 font-secondary text-text-grey text-xl font-semibold">
            <Reveal delay={0.2}>
              <div>
                <div className="flex">
                  <BulletPoint />
                  <span className="ml-4">
                    Certificate Leadership in Marine Engineering
                  </span>
                </div>
                <p className="italic text-xl text-gray-500 pl-5 font-light">
                  Issued: July 2022 <br />
                  Institution: [Institution] <br />
                  Description: Lorem Ipsum has been the industry standard dummy
                  text ever since the 1500s
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div>
                <div className="flex">
                  <BulletPoint />
                  <span className="ml-4">MSc in Naval Architecture</span>
                </div>
                <p className="italic text-xl text-gray-500 pl-5 font-light">
                  Issued: July 2019 <br />
                  Institution: [Institution] <br />
                  Description: Lorem Ipsum has been the industry standard dummy
                  text ever since the 1500s
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div>
                <div className="flex">
                  <BulletPoint />
                  <span className="ml-4">BSc in Naval Architecture</span>
                </div>
                <p className="italic text-xl text-gray-500 pl-5 font-light">
                  Issued: July 2017 <br />
                  Institution: [Institution] <br />
                  Description: Lorem Ipsum has been the industry standard dummy
                  text ever since the 1500s
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <div>
                <div className="flex">
                  <BulletPoint />
                  <span className="ml-4">Certificate Welder</span>
                </div>
                <p className="italic text-xl text-gray-500 pl-5 font-light">
                  Issued: July 2011 <br />
                  Institution: [Institution] <br />
                  Description: Lorem Ipsum has been the industry standard dummy
                  text ever since the 1500s
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </Reveal>
    </main>
  );
};

export default AboutPage;
