import chaeyoung from "../assets/chaeyoung.jpg";

export const projectTopics = [
  {
    name: "Machine Learning",
    description:
      "I have experience working with Machine learning and Federated Learning. I can work with libraries such as pandas, pytorch and flower",
    cards: [
      {
        title: "Federated Learning scheme",
        badges: ["Python", "Pytorch", "Web-sockets"],
        description:
          "I develop a Federated Learning system using Pytorch and Python web-sockets. Clients can training a ML model while mantain their data privacy",
        img: { src: chaeyoung.src, alt: "Son chaeyoung from twice" },
        links: [{ url: "github", name: "github" }],
      },
      {
        title: "PhoniexFL",
        badges: ["Machine Learning", "Python", "Web-sockets"],
        description:
          "I develop a Federated Learning intruder detector capable of training a more robust model while maitaining user data privacy in non-IID settings.",
        img: { src: chaeyoung.src, alt: "Son chaeyoung from twice" },
        links: [{ url: "github", name: "github" }],
      },
    ],
  },
  {
    name: "Web Dev",
    description: "I will add web dev projects.",
    cards: [
      {
        title: "",
        badges: [],
        description: "For now, enjoy a chaeyoung photo",
        img: { src: chaeyoung.src, alt: "Son chaeyoung from twice" },
        links: [{ url: "github", name: "github" }],
      },
    ],
  },
  {
    name: "Game Dev",
    description:
      "I an amauter game developer. I'm currently learning Godot. What I like about Game Dev is being able to apply both creative and analytical thinking to solve problems.",
    cards: [
      {
        title: "FarmCode",
        badges: ["Godot", "C#"],
        description:
          "I develop a game to teach programming logic trough a block based approach. The game was test by 30 students in a class and demonstrated a effected result.",
        img: { src: chaeyoung.src, alt: "Son chaeyoung from twice" },
        links: [{ url: "https://mochaeng.itch.io/farmcode", name: "itch.io" }],
      },
    ],
  },
];
