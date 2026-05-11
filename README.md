# ADIS Global Command Center

A real-time situational awareness and disaster prediction dashboard. Built by extending the WorldMonitor architecture, this project integrates 3D WebGL visualizations with a custom local AI pipeline to track geopolitics, natural disasters, and cyber threats.

## Overview

The goal of this project was to create a centralized command center that pulls in disparate data sources (news, webcams, military activity) and runs them through a local AI to predict escalations and natural disasters.

### What it does:
- **Dual-Map Interface**: Toggles between a 3D globe and a 2D tactical map.
- **ADIS Intelligence**: Custom integration for tracking floods, landslides, cyclones, and evacuation routes using data from Sentinel, NOAA, and OpenWeather.
- **Local AI**: Uses Ollama (Llama 3/Mistral) to process 500+ live news feeds into digestible summaries without relying on external cloud APIs.
- **Live Media**: Streams live news and regional webcams.

## Running Locally

You'll need Node.js (v18+), Python (3.10+), and Ollama installed.

1. **Start the AI Backend**
   \`\`\`bash
   cd backend
   pip install -r requirements.txt
   uvicorn main:app --reload --port 8000
   \`\`\`

2. **Start the Frontend**
   \`\`\`bash
   npm install
   npm run dev
   \`\`\`
   Then open \`http://localhost:5173\`.

## License

MIT License. See the \`LICENSE\` file.

## Credits

This project builds heavily upon the [WorldMonitor](https://github.com/elichabib/worldmonitor) repository, turning it into a full AI disaster tracking platform.
