import useReplay from "../hooks/useReplay";

/* Elbow routes from each player into the server. Kept as strings so the
   connectors and the message dots that travel them stay in sync. */
const PATH_A = "M132 47 H160 Q176 47 176 63 V94 Q176 110 192 110 H214";
const PATH_B = "M132 173 H160 Q176 173 176 157 V126 Q176 110 192 110 H214";
const PATH_DB = "M354 110 H428";

const BOXES = [
  { x: 0, y: 20, w: 132, title: "PLAYER A", sub: "React client" },
  { x: 0, y: 146, w: 132, title: "PLAYER B", sub: "React client" },
  { x: 214, y: 83, w: 140, title: "FastAPI", sub: "REST + WebSocket" },
  { x: 428, y: 83, w: 132, title: "SQLite", sub: "via SQLAlchemy" },
];

export default function SwitcherDiagram({ figure }) {
  const [ref, run] = useReplay(9000);

  return (
    <figure ref={ref} className="figure diagram-run">
      <svg key={run} viewBox="0 0 560 220" role="img" aria-labelledby="switcher-diagram-title">
        <title id="switcher-diagram-title">
          Player A sends a move over its WebSocket connection to the FastAPI
          server, which persists it to SQLite and broadcasts the new game state
          back to both players.
        </title>

        {/* Connectors */}
        <path className="dgm-line draw" pathLength="1" d={PATH_A} style={{ "--delay": "0ms" }} />
        <path className="dgm-line draw" pathLength="1" d={PATH_B} style={{ "--delay": "120ms" }} />
        <path className="dgm-line draw" pathLength="1" d={PATH_DB} style={{ "--delay": "240ms" }} />

        {/* Boxes */}
        {BOXES.map((box, i) => (
          <g key={box.title} className="appear" style={{ "--delay": `${i * 90}ms` }}>
            <rect className="dgm-box" x={box.x} y={box.y} width={box.w} height="54" />
            <text className="dgm-text dgm-text--strong" x={box.x + 12} y={box.y + 24}>
              {box.title}
            </text>
            <text className="dgm-text" x={box.x + 12} y={box.y + 41}>
              {box.sub}
            </text>
          </g>
        ))}

        {/* Edge labels */}
        <g className="appear" style={{ "--delay": "420ms" }}>
          <text className="dgm-text" x="138" y="38">
            WS
          </text>
          <text className="dgm-text" x="138" y="192">
            WS
          </text>
          <text className="dgm-text" x="391" y="102" textAnchor="middle">
            SQL
          </text>
        </g>

        {/* One move, then the broadcast back to both players. */}
        <circle
          className="flow-dot"
          r="4"
          style={{ "--path": `path("${PATH_A}")`, "--from": "0%", "--to": "100%", "--delay": "900ms", "--dur": "800ms" }}
        />
        <circle
          className="flow-dot"
          r="4"
          style={{ "--path": `path("${PATH_A}")`, "--from": "100%", "--to": "0%", "--delay": "1800ms", "--dur": "800ms" }}
        />
        <circle
          className="flow-dot"
          r="4"
          style={{ "--path": `path("${PATH_B}")`, "--from": "100%", "--to": "0%", "--delay": "1800ms", "--dur": "800ms" }}
        />
      </svg>

      <figcaption className="figcaption">
        <b>Fig. {figure}</b> — A move travels once, over the sender's socket.
        The server writes it and broadcasts the resulting state to every
        connected player.
      </figcaption>
    </figure>
  );
}
