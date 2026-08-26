export const projects = [
  {
    id: "switcher",
    name: "El Switcher",
    year: "2024",
    role: "Backend & frontend",
    diagram: "switcher",
    stack: ["FastAPI", "React", "WebSockets", "SQLite"],
    summary:
      "A real-time multiplayer board game. Every player holds an open WebSocket connection, so a move made by one lands on everyone else's board without anyone polling for it.",
    bullets: [
      "Built the FastAPI backend — a REST API for match setup, plus a WebSocket layer that broadcasts game state to every connected player.",
      "Built the React frontend against that WebSocket API, so the board renders from server state instead of guessing locally.",
      "Developed as a team project under a Scrum workflow, with SQLite behind SQLAlchemy for persistence.",
    ],
    repo: "https://github.com/Ctrl-Z-2024",
    repoLabel: "github.com/Ctrl-Z-2024",
  },
  {
    id: "graph-coloring",
    name: "Graph Coloring Tool",
    year: "2023",
    role: "Coursework, Discrete Mathematics II",
    diagram: "graph-coloring",
    stack: ["C", "DIMACS"],
    summary:
      "A command-line tool that reads a graph in DIMACS format and colors it greedily. Written for algorithm coursework, where handling the format exactly matters more than being fast.",
    bullets: [
      "Wrote a parser for standard DIMACS files, handling the comment, problem and edge lines the format defines.",
      "Implemented greedy vertex coloring: walk the vertices in order and give each one the lowest color none of its neighbors already holds.",
      "Written in C with explicit memory management over an adjacency structure built once at parse time.",
    ],
    repo: "https://github.com/juampiludu/discreta2-proyecto",
    repoLabel: "github.com/juampiludu/discreta2-proyecto",
  },
];
