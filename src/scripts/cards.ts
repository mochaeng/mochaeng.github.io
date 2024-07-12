import chaeyoung from "../assets/chaeyoung.jpg";
import farmcode from "../assets/projects/farm-code.png";
import flscheme from "../assets/projects/fl-scheme.png";

export const projectTopics = [
  {
    name: "Machine Learning",
    description:
      "I have experience working with Machine learning and Federated Learning. I can work with libraries such as pandas, pytorch and flower",
    cards: [
      {
        title: "Federated Learning scheme",
        badges: ["Python", "Pytorch", "Sockets"],
        description:
          "A Federated Learning system using PyTorch and Python WebSockets. Clients can train an ML model while maintaining their data privacy.",
        img: { src: flscheme.src, alt: "Son chaeyoung from twice" },
        links: [
          { url: "https://github.com/mochaeng/FL-System", name: "GitHub" },
        ],
      },
      {
        title: "PhoenixFL",
        badges: ["Python", "Pytorch", "RabbitMQ", "Pandas", "Flower"],
        description:
          "A distributed system for intruder detection based on Federated Learning.",
        img: { src: chaeyoung.src, alt: "Son chaeyoung from twice" },
        links: [
          { url: "https://github.com/mochaeng/PhoenixFL", name: "GitHub" },
        ],
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
        description: "For now enjoy a chaeyoung photo",
        img: { src: chaeyoung.src, alt: "Son chaeyoung from twice" },
        links: [{ url: "github", name: "GitHub" }],
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
          "A game to teach programming logic through a block-based approach. The game was tested by 30 students in a class and showed effective results.",
        img: {
          src: farmcode.src,
          alt: "Starting screen from the FarmCode game.",
        },
        links: [
          { url: "https://github.com/mochaeng/IHM", name: "GitHub" },
          { url: "https://mochaeng.itch.io/farmcode", name: "Play" },
        ],
      },
    ],
  },
];
