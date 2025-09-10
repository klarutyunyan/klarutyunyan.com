import { useState } from "react";
import { SiGithub, SiLinkedin, SiCredly, SiX, SiInstagram, SiYoutube, SiSpotify } from "react-icons/si";

export default function Contact() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const recipient = "contact@klarutyunyan.com";

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const contacts = [
    { name: "GitHub", icon: SiGithub, url: "https://github.com/klarutyunyan" },
    { name: "LinkedIn", icon: SiLinkedin, url: "https://linkedin.com/in/klarutyunyan" },
    { name: "Credly", icon: SiCredly, url: "https://www.credly.com/users/klarutyunyan" },
    { name: "X", icon: SiX, url: "http://x.com/klarutyunyan" },
    { name: "Instagram", icon: SiInstagram, url: "https://instagram.com/klarutyunyan" },
    { name: "Youtube", icon: SiYoutube, url: "https://www.youtube.com/@klarutyunyan" },
    { name: "Spotify", icon: SiSpotify, url: "https://open.spotify.com/user/316px3bhlzecawgsoddy4hy5eddu" },

  ];

  return (
    <div id="contact" className="flex flex-col justify-center py-15 scroll-mt-0 mt-15">
      <h2 className="text-4xl font-bold mb-6 text-indigo-600 dark:text-indigo-500">Contact</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4 mt-14 mb-12 mx-auto">
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="p-3 border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800 dark:text-gray-200"
        />
        <textarea
          placeholder="Message"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows="7"
          className="p-3 border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800 dark:text-gray-200"
        />
        <button
          type="submit"
          className="bg-indigo-600 dark:bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-800 dark:hover:bg-indigo-400 transition-colors"
        >
          Send Email
        </button>
      </form>
      <div className="flex justify-center mt-18">
        <ul className="flex flex-wrap justify-center gap-8">
          {contacts.map((contact, i) => {
            const Icon = contact.icon;
            return (
              <li key={i}>
                <a
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={contact.name}
                >
                  <Icon className="w-8 h-8 text-indigo-600 dark:text-indigo-500 hover:text-indigo-800 dark:hover:text-indigo-400" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}