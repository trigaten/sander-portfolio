import botanyResearch from "@/../public/projects/2023/botanyResearch.jpeg";
import hackAPrompt from "@/../public/projects/2023/hackaPrompt.png";
import image1 from "@/../public/gardenPhotos/home/image1.png";
import image2 from "@/../public/gardenPhotos/home/image2.png";
import image3 from "@/../public/gardenPhotos/home/image3.png";
import image4 from "@/../public/gardenPhotos/home/image4.png";
import image5 from "@/../public/gardenPhotos/home/image5.png";
import image8 from "@/../public/gardenPhotos/home/image8.png";
import image6 from "@/../public/gardenPhotos/home/image6.png";
import image7 from "@/../public/gardenPhotos/home/image7.png";
import image9 from "@/../public/gardenPhotos/home/image9.png";
import thePromptReport from "@/../public/projects/2023/thePromptReport.png";
import mineRL from "@/../public/projects/2023/mineRL.png";
import shade from "@/../public/projects/2023/Shade.png";
import andreou from "@/../public/projects/2023/andreou.png";
import farama from "@/../public/projects/2023/farama.png";
import semiotic from "@/../public/projects/2023/semiotic.png";
//Plant imports for projects
import creepingCucumber from "@/../public/gardenPhotos/projects/creepingCucumber.png";
import ghostPipe from "@/../public/gardenPhotos/projects/ghostPipe.png";
import plant2 from "@/../public/gardenPhotos/projects/plant2.png";
import plant3 from "@/../public/gardenPhotos/projects/plant3.png";
import plant4 from "@/../public/gardenPhotos/projects/plant4.png";
import plant5 from "@/../public/gardenPhotos/projects/plant5.png";
import plant6 from "@/../public/gardenPhotos/projects/plant6.png";
import plant7 from "@/../public/gardenPhotos/projects/plant7.png";
import plant8 from "@/../public/gardenPhotos/projects/plant8.png";
import blog1 from "@/../public/blogs/ExampleBlog.png";

const homePageProjects = [
  {
    title: "HackAPrompt",
    stack: ["React", "Node"],
    date: "Spring 2023",
    link: "https://paper.hackaprompt.com/",
    description:
      "Organized the inaugural global Prompt Hacking competition, focusing on jailbreaking and prompt injection. Collected and published the largest dataset of prompt injections (600K+ adversarial prompts) and developed the first taxonomical ontology of Prompt Hacking. Secured $40K in sponsorships from major companies, including OpenAI and HuggingFace. The project won Best Theme Paper at EMNLP2023, with a live presentation delivered to 2,000 researchers.",
    image: hackAPrompt,
    research: true,
    year: 2023,
  },
  {
    title: "The Prompt Report",
    stack: ["LLMs"],
    date: "Spring 2023",
    link: "https://arxiv.org/pdf/2311.16119",
    description:
      "The text discusses the vulnerability of Large Language Models (LLMs), commonly deployed in interactive applications like chatbots, to prompt injection and jailbreaking, collectively termed prompt hacking. These attacks manipulate models to disregard their initial instructions and follow potentially harmful inputs. Despite being a recognized security issue, there has been a lack of large-scale studies on this topic. To address this gap, a global prompt hacking competition was launched, generating over 600,000 adversarial prompts targeting three state-of-the-art LLMs. The study presents a dataset that demonstrates the susceptibility of current LLMs to prompt hacking and introduces a taxonomical classification of adversarial prompts.",
    image: thePromptReport,
    research: true,
    year: 2023,
  },
  {
    title:
      "Stabilizing Hostilities through Arbitration and Diplomatic Engagement",
    link: "https://www.shade-aie.org/",
    date: "Spring 2022 - Spring 2023",
    stack: ["CI Pipelines"],
    description:
      "I led a team of graduate and undergraduate students in a DARPA-funded multi-university project aimed at building AI bots to play the board game Diplomacy while interacting with human players. As part of this initiative, I conceptualized and pitched four unique bot designs: Janus Bot, Janus Bot [Shortened], Janus Bot [MVP], and SOA Bot. I developed continuous integration pipelines to streamline development, implementing Dockerized testing and integrating precommit checks. Additionally, I built Vercel integration for the project's documentation website. I also authored a comprehensive report on DAIDE-English translation and developed a DAIDE syntax parser package to support communication protocols between the bots and players.",
    image: shade,
    research: true,
    year: 2023,
  },
];

const projectsResearch = [
  {
    title: "Botany Research",
    stack: ["HTML"],
    date: "Fall 2024",
    link: "https://forageflora.com/",
    description:
      "Developed a comprehensive map of hundreds of wild plants on the University of Maryland campus, engaging numerous campus stakeholders and securing a UMD sustainability grant. Additionally, constructed a biogas reactor using plastic components to further support campus sustainability efforts.",
    image: botanyResearch,
    research: true,
    year: 2024,
  },
  {
    title: "HackAPrompt",
    stack: ["React", "Node"],
    date: "Spring 2023",
    link: "https://paper.hackaprompt.com/",
    description:
      "Organized the inaugural global Prompt Hacking competition, focusing on jailbreaking and prompt injection. Collected and published the largest dataset of prompt injections (600K+ adversarial prompts) and developed the first taxonomical ontology of Prompt Hacking. Secured $40K in sponsorships from major companies, including OpenAI and HuggingFace. The project won Best Theme Paper at EMNLP2023, with a live presentation delivered to 2,000 researchers.",
    image: hackAPrompt,
    research: true,
    year: 2023,
  },
  {
    title: "The Prompt Report",
    stack: ["LLMs"],
    date: "Spring 2023",
    link: "https://arxiv.org/pdf/2311.16119",
    description:
      "The text discusses the vulnerability of Large Language Models (LLMs), commonly deployed in interactive applications like chatbots, to prompt injection and jailbreaking, collectively termed prompt hacking. These attacks manipulate models to disregard their initial instructions and follow potentially harmful inputs. Despite being a recognized security issue, there has been a lack of large-scale studies on this topic. To address this gap, a global prompt hacking competition was launched, generating over 600,000 adversarial prompts targeting three state-of-the-art LLMs. The study presents a dataset that demonstrates the susceptibility of current LLMs to prompt hacking and introduces a taxonomical classification of adversarial prompts.",
    image: thePromptReport,
    research: true,
    year: 2023,
  },
  {
    title: "Mine RL",
    stack: ["Reinforcement Learning", "Python"],
    date: "Summer 2022 - Summer 2023",
    link: "https://minerl.io/",
    description:
      "Committed 1000+ lines of documentation, bug fixes, and feature additions, including a tutorial on custom environment building. Also ported (from Project Malmo) the ability to send chat messages in MineRL and wrote a tutorial page for it. This functionality allows significant speed ups for training agents",
    image: mineRL,
    research: true,
    year: 2023,
  },
  {
    title:
      "Stabilizing Hostilities through Arbitration and Diplomatic Engagement",
    link: "https://www.shade-aie.org/",
    date: "Spring 2022 - Spring 2023",
    stack: ["CI Pipelines"],
    description:
      "I led a team of graduate and undergraduate students in a DARPA-funded multi-university project aimed at building AI bots to play the board game Diplomacy while interacting with human players. As part of this initiative, I conceptualized and pitched four unique bot designs: Janus Bot, Janus Bot [Shortened], Janus Bot [MVP], and SOA Bot. I developed continuous integration pipelines to streamline development, implementing Dockerized testing and integrating precommit checks. Additionally, I built Vercel integration for the project's documentation website. I also authored a comprehensive report on DAIDE-English translation and developed a DAIDE syntax parser package to support communication protocols between the bots and players.",
    image: shade,
    research: true,
    year: 2023,
  },
  {
    title: "Andreou Lab Internship",
    stack: ["Python", "PyTorch", "CNN", "GRU"],
    date: "Summer 2021 - Fall 2021",
    link: "https://andreoulab.net/",
    image: andreou,
    description:
      "During my internship at the Andreou Lab at Johns Hopkins University under Professor Andreas G. Andreou, I developed data pipelines to capture and transmit data from Arduino chips and RealSense cameras to Microsoft's Psi framework. My role also involved implementing a Convolutional Neural Network (CNN) combined with a Gated Recurrent Unit (GRU) model from scratch using PyTorch for video classification tasks, specifically working with event camera data. This hands-on experience allowed me to contribute to cutting-edge research at the intersection of hardware integration and machine learning.",
    research: true,
    year: 2021,
  },
  {
    title: "Semiotic labs Deep RL Work",
    stack: ["Python", "Reinforcement Learning", "Julia"],
    date: "Summer 2022",
    research: false,
    link: "https://www.semiotic.ai/",
    year: 2022,
    description:
      "Developed Software for deep reinforcement learning, and implemented continuous policy gradient bandits.",
    image: semiotic,
  },
  {
    title: "Farama Foundation",
    stack: ["Python", "Jekyll", "Liquid", "HTML", "CSS"],
    date: "Spring 2022 - Summer 2022",
    research: false,
    link: "https://farama.org/",
    image: farama,
    year: 2022,
    description:
      "I led the development of the new Gymnasium website, managing PRs and writing scripts to generate pages, menus, and GIFs. I implemented numerous fixes to Gymnasium, and built and refactored the Fantasia Jekyll theme from the PettingZoo website. Additionally, I wrote and published the gym-notices PyPI package and assisted in the development of the PettingZoo website.",
  },
];

export default projectsResearch;

const gardenImagesHome = [
  [image1, "Heliconia", "", ""],
  [
    image2,
    "Lowbush Blueberry",
    "Vaccinium angustifolium",
    "My first wild blueberries, found in Maine",
  ],
  [image3, "Plants grown in my room", "", ""],
  [image4, "Red Trillium", "Trillium erectum", "Only flowers for 2-3 weeks."],
  [
    image5,
    "Ice Plant",
    "Mesembryanthemum crystallinum L.",
    "Technically edible, but very salty",
  ],
  [image8, "False Shamrock", "Oxalis Triangularis", ""],
  [image7, "Cactus", "", ""],
  [image6, "Cactus", "", ""],
  [image9, "Cactus", "", ""],
];
export { gardenImagesHome };
export { homePageProjects };

const gardenImagesProjects = [
  [creepingCucumber, "Creeping Cucumber", "", ""],
  [ghostPipe, "Ghost Pipe", "", ""],
  [plant2, "Plant 2", "", ""],
  [plant3, "Plant 3", "", ""],
  [plant4, "Plant 4", "", ""],
  [plant5, "Plant 5", "", ""],
  [plant6, "Plant 6", "", ""],
  [plant7, "Plant 7", "", ""],
  [plant8, "Plant 8", "", ""],
];

const gardenImagesBlog = [
  [creepingCucumber, "Creeping Cucumber", "", ""],
  [ghostPipe, "Ghost Pipe", "", ""],
  [plant2, "Plant 2", "", ""],
  [plant3, "Plant 3", "", ""],
  [plant4, "Plant 4", "", ""],
  [plant5, "Plant 5", "", ""],
  [plant6, "Plant 6", "", ""],
  [plant7, "Plant 7", "", ""],
  [plant8, "Plant 8", "", ""],
];

export { gardenImagesBlog };
export { gardenImagesProjects };
interface BlogPostProps {
  title: string;
  image: any;
  date: string;
  tag: string;
  blurbs: string;
  content: string;
  id: number;
}

const blogPosts: BlogPostProps[] = [
  {
    id: 0,
    title: "Python Stack",
    image: blog1,
    date: "8th September, 2024",
    tag: "Python",
    blurbs: "Research-Grade Coding Practices",
    content: `
      <p>Here are my recommendations for how to write/organize code (targeted at Python).</p>
      <p>
        Here is me talking about CI and the rest of this for 30 minutes: 
        <a href="https://example.com/code-practices-talk">Code Practices Talk</a>
      </p>
      <p>Here are my recommendations of things to do/use (roughly in order of importance):</p>
      <ul>
        <li>CI/CD Pipeline</li>
        <li>Make your repo a Python Package</li>
        <li>Use Pytest in CI Pipeline</li>
        <li>Protect your Main Branch</li>
        <li>Make people write tests for any new feature they introduce</li>
        <li>
          Make people write documentation for all code they write. This can either be in the 
          <code>README.md</code> or using something like Sphinx, which autobuilds a documentation 
          website from your docs.
        </li>
        <li>Use black and flake8.</li>
        <li>Conventional Commits</li>
        <li>Use Test-Driven Development</li>
      </ul>
    `,
  },
];

export { blogPosts };
