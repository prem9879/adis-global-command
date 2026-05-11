// ADIS (Advanced Disaster Intelligence System) Integration
// Mocks the backend response since the python server is not currently deployed.

export interface Shelter {
  id: string;
  name: string;
  capacity: number;
  current_occupancy: number;
  lat: number;
  lon: number;
}

export interface EvacuationRoute {
  route_id: number;
  safety_score: number;
  distance_km: number;
  eta_minutes: number;
  shelter: Shelter;
  path_coords: [number, number][]; // [lon, lat]
  color: 'green' | 'yellow' | 'red';
}

export interface ADISPrediction {
  risk_score: number;
  risk_label: 'LOW' | 'MEDIUM' | 'HIGH' | 'EXTREME';
  confidence: number;
  flood_probability: number[];
  evacuation_routes: EvacuationRoute[];
  affected_population: number;
}

export async function predictDisaster(lat: number, lon: number): Promise<ADISPrediction> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));

  // Generate a mock prediction based on coordinates
  const riskScore = Math.floor(Math.random() * 100);
  let riskLabel: 'LOW' | 'MEDIUM' | 'HIGH' | 'EXTREME' = 'LOW';
  if (riskScore > 85) riskLabel = 'EXTREME';
  else if (riskScore > 65) riskLabel = 'HIGH';
  else if (riskScore > 35) riskLabel = 'MEDIUM';

  return {
    risk_score: riskScore,
    risk_label: riskLabel,
    confidence: 0.92,
    flood_probability: [0.1, 0.4, 0.8, 0.9, 0.3],
    evacuation_routes: [
      {
        route_id: 1,
        safety_score: 95,
        distance_km: 5.2,
        eta_minutes: 15,
        color: 'green',
        shelter: {
          id: 'sh-1',
          name: 'Central High School',
          capacity: 1000,
          current_occupancy: 250,
          lat: lat + 0.05,
          lon: lon + 0.05
        },
        path_coords: [
          [lon, lat],
          [lon + 0.02, lat + 0.02],
          [lon + 0.05, lat + 0.05]
        ]
      }
    ],
    affected_population: Math.floor(Math.random() * 50000)
  };
}
