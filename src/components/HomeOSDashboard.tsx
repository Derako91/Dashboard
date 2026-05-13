'use client'

export default function HomeOSDashboard() {
  const widgets = [
    {
      title: "Kalender",
      content: (
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>09:00 Arbeit</span>
            <span>Dennis</span>
          </div>
          <div className="flex justify-between">
            <span>18:00 Einkauf</span>
            <span>Gemeinsam</span>
          </div>
        </div>
      ),
    },
    {
      title: "Energie",
      content: (
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Verbrauch</span>
            <span>1.2 kW</span>
          </div>
          <div className="flex justify-between">
            <span>SOLIX Akku</span>
            <span>78%</span>
          </div>
        </div>
      ),
    },
    {
      title: "Anwesenheit",
      content: (
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Dennis</span>
            <span className="text-green-400">HOME</span>
          </div>
          <div className="flex justify-between">
            <span>Celine</span>
            <span className="text-green-400">HOME</span>
          </div>
        </div>
      ),
    },
    {
      title: "Smart Home",
      content: (
        <div className="grid grid-cols-2 gap-2 text-sm">
          <button className="rounded-xl bg-slate-700 p-3 hover:bg-slate-600">
            Licht
          </button>
          <button className="rounded-xl bg-slate-700 p-3 hover:bg-slate-600">
            Heizung
          </button>
          <button className="rounded-xl bg-slate-700 p-3 hover:bg-slate-600">
            Kamera
          </button>
          <button className="rounded-xl bg-slate-700 p-3 hover:bg-slate-600">
            Alarm
          </button>
        </div>
      ),
    },
    {
      title: "Wetter",
      content: (
        <div className="space-y-1 text-sm">
          <div className="text-4xl font-bold">21°C</div>
          <div>Karlsruhe</div>
          <div className="text-slate-400">Leicht bewölkt</div>
        </div>
      ),
    },
    {
      title: "Autos",
      content: (
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Diesel</span>
            <span>210€/Monat</span>
          </div>
          <div className="flex justify-between">
            <span>Benzin</span>
            <span>165€/Monat</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0f14] text-white">
      <header className="border-b border-slate-800 bg-[#121821] px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-wide">HOME OS</h1>
            <p className="text-sm text-slate-400">
              Gemeinsames Smart Home Dashboard
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
              HOME
            </div>
            <div className="rounded-xl bg-slate-800 px-4 py-2 text-sm">
              Dennis
            </div>
          </div>
        </div>
      </header>

      <main className="p-6">
        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-6 shadow-2xl">
            <div className="text-sm text-slate-300">Hausstatus</div>
            <div className="mt-2 text-4xl font-bold">ONLINE</div>
            <div className="mt-4 text-sm text-slate-400">
              Alle Systeme aktiv
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900 p-6 shadow-xl">
            <div className="text-sm text-slate-400">Stromverbrauch</div>
            <div className="mt-3 text-4xl font-bold">1.2 kW</div>
            <div className="mt-2 text-sm text-green-400">
              -8% zum Durchschnitt
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900 p-6 shadow-xl">
            <div className="text-sm text-slate-400">Sicherheit</div>
            <div className="mt-3 text-4xl font-bold">OK</div>
            <div className="mt-2 text-sm text-slate-400">
              Fenster geschlossen
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {widgets.map((widget) => (
            <div
              key={widget.title}
              className="rounded-3xl border border-slate-800 bg-[#121821] p-5 shadow-xl transition hover:border-cyan-500/40"
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold">{widget.title}</h2>
                <button className="rounded-lg bg-slate-800 px-2 py-1 text-xs text-slate-400 hover:bg-slate-700">
                  ⚙
                </button>
              </div>

              {widget.content}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}