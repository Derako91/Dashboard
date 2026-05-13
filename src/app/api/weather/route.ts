import { NextRequest, NextResponse } from 'next/server'

// Mock weather data - in production würde hier eine echte API wie OpenWeatherMap verwendet
const getMockWeatherData = () => {
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  const dayAfter = new Date(today)
  dayAfter.setDate(dayAfter.getDate() + 2)

  return {
    current: {
      temperature: 21,
      condition: 'Leicht bewölkt',
      humidity: 65,
      windSpeed: 12,
      icon: '02d',
    },
    forecast: [
      {
        date: today.toISOString().split('T')[0],
        high: 23,
        low: 18,
        condition: 'Leicht bewölkt',
        icon: '02d',
        precipitation: 10,
      },
      {
        date: tomorrow.toISOString().split('T')[0],
        high: 20,
        low: 16,
        condition: 'Regnerisch',
        icon: '10d',
        precipitation: 60,
      },
      {
        date: dayAfter.toISOString().split('T')[0],
        high: 19,
        low: 14,
        condition: 'Bewölkt',
        icon: '04d',
        precipitation: 30,
      },
    ],
    location: 'Karlsruhe',
  }
}

export async function GET(request: NextRequest) {
  try {
    // Optional: Hier könnte eine echte API abgefragt werden
    // const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Karlsruhe&appid=${process.env.WEATHER_API_KEY}&units=metric`)
    // const data = await response.json()

    const weatherData = getMockWeatherData()

    return NextResponse.json(weatherData)
  } catch (error) {
    console.error('Weather API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch weather data' },
      { status: 500 }
    )
  }
}