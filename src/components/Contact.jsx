import { useState } from "react";
import { FiArrowUpRight, FiCopy, FiCheck } from "react-icons/fi";
import { SiGithub, SiLinkedin, SiCredly, SiX, SiInstagram, SiApplemusic, SiYoutube } from "react-icons/si";

const contacts = [
  ["GitHub", <SiGithub />, "https://github.com/klarutyunyan"],
  ["LinkedIn", <SiLinkedin />, "https://linkedin.com/in/klarutyunyan"],
  ["Credly", <SiCredly />, "https://www.credly.com/users/klarutyunyan"],
  ["X", <SiX />, "https://x.com/klarutyunyan"],
  ["Instagram", <SiInstagram />, "https://instagram.com/klarutyunyan"],
  ["Apple Music", <SiApplemusic />, "https://music.apple.com/profile/klarutyunyan"],
  ["YouTube", <SiYoutube />, "https://www.youtube.com/@klarutyunyan"],
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    await navigator.clipboard.writeText("contact@klarutyunyan.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="contact section-pad" id="contact">
      <p className="eyebrow eyebrow-light"><span /> Get in touch</p>
      <div className="contact-grid">
        <h2>Have a difficult quality problem? <em>Let’s solve it.</em></h2>
        <div className="contact-details">
          <p>Available for conversations about quality engineering, automation architecture, and ambitious software teams.</p>
          <a className="button button-light" href="mailto:contact@klarutyunyan.com">
            Send an email <FiArrowUpRight />
          </a>
          <button className="copy-email" type="button" onClick={copyEmail} title="Copy email address">
            contact@klarutyunyan.com {copied ? <FiCheck /> : <FiCopy />}
          </button>
        </div>
      </div>
      <ul className="social-links">
        {contacts.map(([name, icon, url]) => (
          <li key={name}>
            <a href={url} target="_blank" rel="noopener noreferrer" aria-label={name} title={name}>
              <span aria-hidden="true">{icon}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
