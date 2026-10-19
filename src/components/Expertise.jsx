import {
  SiAmazonwebservices, SiAndroid, SiApachejmeter, SiApachekafka, SiApachemaven, SiApple,
  SiCucumber, SiCypress, SiDocker, SiGithub, SiGitlab, SiGrafana, SiGradle,
  SiInsomnia, SiJenkins, SiJira, SiJavascript, SiJunit5, SiKotlin, SiKubernetes,
  SiLinux, SiOpenai, SiPostgresql, SiSelenium, SiStorybook, SiSwagger
} from "react-icons/si";
import JavaIcon from "../assets/icons/java.svg?react";
import PlaywrightIcon from "../assets/icons/playwright.svg?react";
import RestAssuredIcon from "../assets/icons/restassured.svg?react";
import TestcontainersIcon from "../assets/icons/testcontainers.svg?react";
import WireMockIcon from "../assets/icons/wiremock.svg?react";
import ProxymanIcon from "../assets/icons/proxyman.svg?react";

const groups = [
  {
    number: "01", title: "Engineering foundations", description: "Languages, databases, build tools, and operating systems behind reliable automation.",
    skills: [["Java", JavaIcon], ["JavaScript", SiJavascript], ["PostgreSQL", SiPostgresql], ["Kotlin", SiKotlin], ["Maven", SiApachemaven], ["Gradle", SiGradle], ["macOS", SiApple], ["Linux", SiLinux]],
  },
  {
    number: "02", title: "API & integration", description: "High-signal contract and integration testing for distributed systems.",
    skills: [["REST-assured", RestAssuredIcon], ["Testcontainers", TestcontainersIcon], ["WireMock", WireMockIcon], ["Insomnia", SiInsomnia], ["Proxyman", ProxymanIcon], ["Kafka", SiApachekafka], ["Swagger", SiSwagger]],
  },
  {
    number: "03", title: "Test automation", description: "Maintainable test architecture across browser, mobile, and service layers.",
    skills: [["Playwright", PlaywrightIcon], ["Cypress", SiCypress], ["Selenium", SiSelenium], ["JUnit", SiJunit5], ["Cucumber", SiCucumber], ["Storybook", SiStorybook]],
  },
  {
    number: "04", title: "CI/CD & cloud", description: "Automated quality gates that fit naturally into the delivery pipeline.",
    skills: [["AWS", SiAmazonwebservices], ["Docker", SiDocker], ["GitHub", SiGithub], ["GitLab", SiGitlab], ["Jenkins", SiJenkins], ["Kubernetes", SiKubernetes]],
  },
  {
    number: "05", title: "Performance & insight", description: "Performance validation and observability that expose risk before release.",
    skills: [["Codex", SiOpenai], ["Jira", SiJira], ["JMeter", SiApachejmeter], ["Grafana", SiGrafana]],
  },
  {
    number: "06", title: "Mobile", description: "Quality engineering for native mobile experiences across the iOS and Android ecosystems.",
    skills: [["iOS", SiApple], ["Android", SiAndroid]],
  },
];

function SkillPill({ skill }) {
  const [name, Icon] = skill;
  return <li><Icon aria-hidden="true" /><span>{name}</span></li>;
}

export default function Expertise() {
  return (
    <section className="expertise section-pad" id="expertise">
      <div className="section-heading">
        <p className="eyebrow"><span /> Expertise</p>
        <h2>Quality engineering,<br /><em>end to end.</em></h2>
        <p>From the first test strategy to a production-ready delivery pipeline.</p>
      </div>
      <div className="expertise-list">
        {groups.map((group) => (
          <article className="expertise-card" key={group.number}>
            <span className="card-number">{group.number}</span>
            <div className="card-copy">
              <h3>{group.title}</h3>
              <p>{group.description}</p>
            </div>
            <ul>{group.skills.map((skill) => <SkillPill skill={skill} key={skill[0]} />)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}
