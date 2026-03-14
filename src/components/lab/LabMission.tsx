interface Props {
  mission: string
}

export default function LabMission({ mission }: Props) {

  return (
    <section className="max-w-4xl mx-auto px-6 py-28 text-center">

      <h2 className="text-4xl font-black uppercase tracking-tight mb-10">
        Our Mission
      </h2>

      <p className="text-white/70 leading-relaxed text-lg">
        {mission}
      </p>

    </section>
  )
}