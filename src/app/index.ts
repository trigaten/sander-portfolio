import botanyResearch from "@/../public/projects/2023/botanyResearch.jpeg";
import hackAPrompt from "@/../public/projects/2023/hackaPrompt.png";
import image1 from "@/../public/gardenPhotos/home/image1.png";
import image2 from "@/../public/gardenPhotos/home/image2.png";
import image3 from "@/../public/gardenPhotos/home/image3.png";
import image4 from "@/../public/gardenPhotos/home/image4.png";
import image5 from "@/../public/gardenPhotos/home/image5.png";
import image8 from "@/../public/gardenPhotos/home/image8.png";

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
];
export { gardenImagesHome };
