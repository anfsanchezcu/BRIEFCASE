import AboutMe from "@/Components/Features/AboutMe";
import Education from "@/Components/Features/Education";
import GetInTouch from "@/Components/Features/GetInTouch";
import { MyBriefcase } from "@/Components/Features/MyBriefcase";
import MySkills from "@/Components/Features/MySkills";
import NavComponent from "@/Components/Layout/NavComponent";
import Section from "@/Components/UI/Seccion";
import React from "react";

const page = () => {
  return (
    <>
      <NavComponent />
      <main className="w-full h-screen bg-image bg-cover bg-no-repeat overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <Section title="AboutMe">
          <AboutMe />
        </Section>
        <Section title="MySkills">
          <MySkills />
        </Section>
        <Section title="MyBriefcase">
          <MyBriefcase />
        </Section>
        <Section title="Education">
          <Education />
        </Section>
        <Section title="GetInTouch">
          <GetInTouch />
        </Section>
      </main>
    </>
  );
};

export default page;
