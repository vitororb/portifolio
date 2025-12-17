import { EducationItem } from "./EducationItem";
import { ProjectItem } from "./ProjectItem";
import { Section } from "./Section";
import { WorkItem } from "./WorkItem";

export const Sidebar = () => {
  return (
    <aside className="border-1 border-white h-full flex flex-col rounded-sm p-4 gap-4">
      <header className="flex flex-col items-center gap-2">
        <img className="bg-white w-6 h-6 rounded-sm"></img>
        <h3>your name</h3>
        <h2>Frontend Developer</h2>
        <span>html only with proper layout, no styling</span>
      </header>

      <hr />

      <Section sectionTilte="Projects">
        <ProjectItem projectName="Project 1" projectStatus="Completed" />
        <ProjectItem projectName="Project 2" projectStatus="Completed" />
        <ProjectItem projectName="Project 3" projectStatus="Completed" />
      </Section>

      <hr />

      <Section sectionTilte="Work Experience">
        <WorkItem
          workRole="Engenheiro de Requisitos e Design de UI/UX"
          workPeriod="Out 2022 - Set 2023"
        />
        <WorkItem
          workRole="Analista de Teste e Qualidade"
          workPeriod="Jan 2025 - Atual"
        />
      </Section>

      <hr />

      <Section sectionTilte="Education">
        <EducationItem
          educationName="University of Example"
          educationPeriod="2015 - 2019"
        />
      </Section>

      <hr />

      <Section sectionTilte="Skills">
        <ul className="w-full">
          <li>
            <span className="font-medium">Linguagens:</span> Java, Python,
            C/C++, JavaScript, HTML/CSS
          </li>
          <li>
            <span className="font-medium">Frameworks:</span> React, Next.js,
            Node.js, Tailwind
          </li>
          <li>
            <span className="font-medium">Testes e QA:</span> Postman, Cypress,
            K6
          </li>
          <li>
            <span className="font-medium"> Ferramentas e DevOps:</span> Git,
            Docker, VS Code, PyCharm
          </li>
        </ul>
      </Section>
    </aside>
  );
};
