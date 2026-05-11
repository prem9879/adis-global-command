# ADIS Global Command Center

A real-time situational awareness and disaster prediction dashboard. Built by extending the WorldMonitor architecture, this project integrates 3D WebGL visualizations with a custom local AI pipeline to track geopolitics, natural disasters, and cyber threats.

- **Dual-Map Engine** — 3D globe (`globe.gl`) and WebGL flat map (`deck.gl`) with 45+ data layers
- **ADIS+ Disaster AI** — Custom integration for tracking floods, landslides, cyclones, and evacuation routing using data from Sentinel, NOAA, and OpenWeather
- **Cross-stream escalation** — Military, economic, disaster, and escalation signal convergence
- **Local AI** — Runs everything with Ollama (Llama 3/Mistral), no API keys required
- **Multi-variant layouts** — Switch between World, Tech, and Finance modules instantly

For the full feature list, architecture, data sources, and algorithms, see the internal documentation.

---

## Quick Start

```bash
git clone https://github.com/prem9879/adis-global-command.git
cd adis-global-command
npm install
npm run dev
```

Open `localhost:5173`. 

To run the local AI intelligence backend:
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

---

## Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend** | Vanilla TypeScript, Vite, `globe.gl` + Three.js, `deck.gl` + MapLibre GL |
| **AI / ML** | Ollama, Llama 3, Mistral, Local FastAPI Python Backend |
| **API Contracts** | Protocol Buffers, REST |
| **Data Pipelines** | Sentinel Satellites, NOAA, OpenWeather, Live HLS Video Streams |

---

## Data Sources

ADIS Global Command aggregates live external data sources across geopolitics, finance, climate, aviation, cyber, military, infrastructure, and news intelligence. 

---

## Contributing

Contributions are welcome! Please ensure you test the local AI pipelines and WebGL contexts before submitting a PR.

```bash
npm run typecheck    # Type checking
npm run build        # Production build
```

---

## License

**MIT License**. Free for personal, research, educational, and commercial use.

| Use Case | Allowed? |
| :--- | :--- |
| **Personal / research / educational** | Yes |
| **Self-hosted (non-commercial)** | Yes |
| **Fork and modify** | Yes |
| **Commercial use / SaaS** | Yes |

Copyright (c) 2026 Prem Diwan. All rights reserved.

---

## Author

**Prem Diwan** — [GitHub](https://github.com/prem9879)

## Contributors

<a href="https://github.com/prem9879/adis-global-command/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=prem9879/adis-global-command" />
</a>

---

## Star History

<a href="https://star-history.com/#prem9879/adis-global-command&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=prem9879/adis-global-command&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=prem9879/adis-global-command&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=prem9879/adis-global-command&type=Date" />
 </picture>
</a>
