import { NextRequest, NextResponse } from 'next/server'
import {
  getHomeAssistantState,
  ENTITIES,
  type EnergyData,
  type BatteryData,
} from '@/lib/homeassistant'

export async function GET(request: NextRequest) {
  try {
    const powerState = await getHomeAssistantState(ENTITIES.power_consumption)
    const dailyState = await getHomeAssistantState(ENTITIES.daily_consumption)
    const batteryState = await getHomeAssistantState(ENTITIES.battery_level)
    const batteryPowerState = await getHomeAssistantState(ENTITIES.battery_power)

    // Parse power consumption (Watts)
    const power = powerState ? parseFloat(powerState.state) : 0

    // Parse daily consumption (kWh)
    const daily_consumption = dailyState ? parseFloat(dailyState.state) : 0

    // Parse battery level (%)
    const battery_percentage = batteryState ? parseFloat(batteryState.state) : 0

    // Parse battery power (Watts)
    const battery_power = batteryPowerState ? parseFloat(batteryPowerState.state) : 0

    const data: EnergyData & BatteryData = {
      power,
      daily_consumption,
      percentage: battery_percentage,
      battery_power,
      timestamp: new Date().toISOString(),
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('Energy API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch energy data from Home Assistant' },
      { status: 500 }
    )
  }
}