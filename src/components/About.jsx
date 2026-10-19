import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import photo from "../assets/photo.webp";

export default function About() {
  return (
    <section className="hero" id="about">
      <p className="eyebrow hero-eyebrow"><span /> Software Quality · Automation</p>
      <div className="hero-copy">
        <h1>I build quality systems that help teams <em>ship confidently.</em></h1>
        <p className="hero-intro">
          I’m Karen, a QA Automation Engineer with 9+ years of experience
          designing reliable test systems for modern software teams.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#expertise">
            Explore my expertise <FiArrowDownRight />
          </a>
          <a className="text-link" href="mailto:contact@klarutyunyan.com">
            Start a conversation <FiArrowUpRight />
          </a>
        </div>
      </div>
      <div className="portrait-wrap" aria-label="Portrait of Karen Arutyunyan">
        <div className="portrait-marker">Based in tech<br />Working globally</div>
        <img src={photo} alt="Karen Arutyunyan" fetchPriority="high" />
        <span className="portrait-caption">Quality is a system,<br />not a final checkpoint.</span>
      </div>
      <div className="proof-strip">
        <div><strong>9+</strong><span>Years building<br />quality systems</span></div>
        <div><strong>06</strong><span>Core areas of<br />expertise</span></div>
        <div><strong>30+</strong><span>Tools across the<br />delivery stack</span></div>
        <p>FOUNDATIONS · API · UI · CI/CD · PERFORMANCE · MOBILE</p>
      </div>
    </section>
  );
}
