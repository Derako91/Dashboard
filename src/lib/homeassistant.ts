// Home Assistant API configuration
export const HA_BASE_URL = process.env.NEXT_PUBLIC_HA_URL || 'http://localhost:8123'
export const HA_TOKEN = process.env.HA_TOKEN || ''

// Available entity IDs (configure based on your Home Assistant setup)
export const ENTITIES = {
  // Anker Smart Meter
  power_consumption: 'sensor.anker_smart_meter_power',
  daily_consumption: 'sensor.anker_smart_meter_daily_consumption',
  
  // Anker E1600
  battery_level: 'sensor.anker_e1600_battery_level',
  battery_power: 'sensor.anker_e1600_power',
  
  // Weather
  temperature: 'weather.home',
  
  // Presence
  dennis_presence: 'device_tracker.dennis_phone',
  celine_presence: 'device_tracker.celine_phone',
}

export interface EnergyData {
  power: number // Watts
  timestamp: string
  daily_consumption: number // kWh
}

export interface BatteryData {
  percentage: number
  power: number // Watts (positive = charging, negative = discharging)
  timestamp: string
}

export interface HomeAssistantState {
  entity_id: string
  state: string
  attributes: Record<string, any>
  last_changed: string
  last_updated: string
}

// Fetch data from Home Assistant
export async function getHomeAssistantState(
  entityId: string
): Promise<HomeAssistantState | null> {
  if (!HA_TOKEN) {
    console.warn('HA_TOKEN not configured')
    return null
  }

  try {
    const response = await fetch(`${HA_BASE_URL}/api/states/${entityId}`, {
      headers: {
        Authorization: `Bearer ${HA_TOKEN}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      console.error(`Failed to fetch state for ${entityId}:`, response.statusText)
      return null
    }

    return await response.json()
  } catch (error) {
    console.error(`Error fetching ${entityId}:`, error)
    return null
  }
}

// Get multiple entities at once
export async function getHomeAssistantStates(
  entityIds: string[]
): Promise<Record<string, HomeAssistantState | null>> {
  const results: Record<string, HomeAssistantState | null> = {}

  for (const entityId of entityIds) {
    results[entityId] = await getHomeAssistantState(entityId)
  }

  return results
}