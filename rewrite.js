const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

code = code.replace(
  'import { ComicProject, type ComicProjectData } from "./components/ComicProject";',
  'import { ProjectShowcase, type ProjectShowcaseData } from "./components/ProjectShowcase";'
);

code = code.replace(
  'const projects: ComicProjectData[] = [',
  'const projects: ProjectShowcaseData[] = ['
);

code = code.replace(
  /issue: "Issue 01",\s*repoUrl:/,
  'repoUrl:'
);
code = code.replace(
  /screenshot: "\/projects\/kaziflow.png",/,
  'screenshots: [{ src: "/projects/kaziflow.png", title: "Dashboard", caption: "Issue 01" }],'
);

code = code.replace(
  /issue: "Issue 02",\s*repoUrl:/,
  'repoUrl:'
);
code = code.replace(
  /screenshot: "\/projects\/shenanigans.png",/,
  'screenshots: [{ src: "/projects/shenanigans.png", title: "Workspaces", caption: "Issue 02" }],'
);

code = code.replace(
  '<h2>Flip through the project comics.</h2>',
  '<h2>Explore the project labs.</h2>'
);

code = code.replace(
  /<div className="comic-grid">[\s\S]*?<\/div>/,
  '<ProjectShowcase projects={projects} />'
);

fs.writeFileSync('app/page.tsx', code);
