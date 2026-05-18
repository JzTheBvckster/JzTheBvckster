"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, ExternalLink, Github, Layers, Sparkles } from "lucide-react";
import { useState } from "react";

type ProjectScreenshot = {
  src: string;
  title: string;
  caption: string;
};

export type ProjectShowcaseData = {
  title: string;
  repoUrl: string;
  liveUrl: string;
  screenshots: ProjectScreenshot[];
  language: string;
  summary: string;
  highlights: string[];
  stack: string[];
  status: string;
  demoNote?: string;
  accent: "blue" | "yellow";
};

export function ProjectShowcase({
  projects
}: Readonly<{ projects: ProjectShowcaseData[] }>) {
  const [activeProject, setActiveProject] = useState(0);
  const [activeShot, setActiveShot] = useState(0);
  const project = projects[activeProject];
  const screenshot = project.screenshots[activeShot];

  const chooseProject = (index: number) => {
    setActiveProject(index);
    setActiveShot(0);
  };

  const nextShot = () =>
    setActiveShot((current) => (current + 1) % project.screenshots.length);
  const previousShot = () =>
    setActiveShot((current) => (current - 1 + project.screenshots.length) % project.screenshots.length);

  return (
    <section className={`project-lab lab-${project.accent}`} aria-label="Interactive project showcase">
      <div className="project-rail" role="tablist" aria-label="Choose project">
        {projects.map((item, index) => (
          <button
            aria-controls="project-panel"
            aria-selected={activeProject === index}
            className={activeProject === index ? "is-active" : ""}
            key={item.title}
            onClick={() => chooseProject(index)}
            role="tab"
            type="button"
          >
            <span>0{index + 1}</span>
            <strong>{item.title}</strong>
            <small>{item.status}</small>
          </button>
        ))}
      </div>

      <div className="project-stage" id="project-panel" role="tabpanel">
        <div className="screen-column">
          <div className="browser-shell">
            <div className="browser-bar">
              <span />
              <span />
              <span />
              <strong>{screenshot.title}</strong>
            </div>
            <div className="screen-frame">
              <Image
                alt={`${project.title}: ${screenshot.title}`}
                fill
                priority={activeProject === 0 && activeShot === 0}
                sizes="(max-width: 900px) 90vw, 680px"
                src={screenshot.src}
              />
            </div>
          </div>

          <div className="shot-controls">
            <button type="button" onClick={previousShot} aria-label="Previous screenshot">
              <ArrowLeft size={20} aria-hidden="true" />
            </button>
            <div>
              <strong>{screenshot.title}</strong>
              <span>{screenshot.caption}</span>
            </div>
            <button type="button" onClick={nextShot} aria-label="Next screenshot">
              <ArrowRight size={20} aria-hidden="true" />
            </button>
          </div>

          <div className="shot-strip" aria-label={`${project.title} screenshots`}>
            {project.screenshots.map((item, index) => (
              <button
                aria-label={`Show ${item.title}`}
                aria-pressed={activeShot === index}
                className={activeShot === index ? "is-active" : ""}
                key={item.src}
                onClick={() => setActiveShot(index)}
                type="button"
              >
                <div className="thumbnail-frame">
                  <Image alt="" fill sizes="120px" src={item.src} />
                </div>
                <span>{item.title}</span>
              </button>
            ))}
          </div>
        </div>

        <aside className="project-brief">
          <p className="project-status">
            <Sparkles size={18} aria-hidden="true" />
            {project.status}
          </p>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          {project.demoNote ? <p className="demo-note">{project.demoNote}</p> : null}

          <div className="brief-grid">
            <div>
              <span className="brief-label">Language</span>
              <strong>{project.language}</strong>
            </div>
            <div>
              <span className="brief-label">Screens</span>
              <strong>{project.screenshots.length}</strong>
            </div>
          </div>

          <div className="feature-board">
            <h4>
              <Layers size={20} aria-hidden="true" />
              Key moves
            </h4>
            <ul>
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>

          <ul className="stack-cloud" aria-label={`${project.title} technology stack`}>
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="project-actions">
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              <ExternalLink size={18} aria-hidden="true" />
              Live app
            </a>
            <a href={project.repoUrl} target="_blank" rel="noreferrer">
              <Github size={18} aria-hidden="true" />
              GitHub
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
