import {
  SiAmazonwebservices, SiApachejmeter, SiApachekafka, SiApachemaven, SiApple,
  SiCucumber, SiCypress, SiDocker, SiGithub, SiGitlab, SiGrafana, SiGradle,
  SiInsomnia, SiJenkins, SiJira, SiJavascript, SiJunit5, SiKotlin, SiKubernetes,
  SiLinux, SiPostgresql, SiPrometheus, SiSelenium, SiStorybook, SiSwagger

} from "react-icons/si";

import JavaIcon from "../assets/icons/java.svg?react";
import PlaywrightIcon from "../assets/icons/playwright.svg?react";
import RestAssuredIcon from "../assets/icons/restassured.svg?react";
import TestcontainersIcon from "../assets/icons/testcontainers.svg?react";
import WireMockIcon from "../assets/icons/wiremock.svg?react";

export default function Skills() {
  const skills = [
    { name: "AWS", icon: SiAmazonwebservices },
    { name: "Apache JMeter", icon: SiApachejmeter },
    { name: "Apache Kafka", icon: SiApachekafka },
    { name: "Cypress", icon: SiCypress },
    { name: "Cucumber", icon: SiCucumber },
    { name: "Docker", icon: SiDocker },
    { name: "GitHub", icon: SiGithub },
    { name: "GitLab", icon: SiGitlab },
    { name: "Gradle", icon: SiGradle },
    { name: "Grafana", icon: SiGrafana },
    { name: "Insomnia", icon: SiInsomnia },
    { name: "Java", icon: JavaIcon },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Jenkins", icon: SiJenkins },
    { name: "Jira", icon: SiJira },
    { name: "JUnit", icon: SiJunit5 },
    { name: "Kotlin", icon: SiKotlin },
    { name: "Kubernetes", icon: SiKubernetes },
    { name: "Linux", icon: SiLinux },
    { name: "Mac OS", icon: SiApple },
    { name: "Maven", icon: SiApachemaven },
    { name: "Playwright", icon: PlaywrightIcon },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Prometheus", icon: SiPrometheus },
    { name: "REST-assured", icon: RestAssuredIcon },
    { name: "Selenium WebDriver", icon: SiSelenium },
    { name: "Storybook", icon: SiStorybook },
    { name: "Swagger", icon: SiSwagger },
    { name: "Testcontainers", icon: TestcontainersIcon },
    { name: "WireMock", icon: WireMockIcon }
  ];

  return (
    <div className="mt-35">
      <h2 className="text-4xl font-bold mb-6 text-indigo-600 dark:text-indigo-500">Skills</h2>
      <ul className="grid grid-cols-3 md:grid-cols-6 gap-8 text-center">
        {skills.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <li key={i} className="flex flex-col items-center">
              <Icon className="w-12 h-12 mb-3 text-indigo-600 dark:text-indigo-500" />
              <span className="text-base font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}