interface Props {
  name: string
  focus: string
  description: string
  video: string
  color: string
}

export default function LabHero({ name, focus, description, video, color }: Props){

  const CLOUDINARY_BASE =
    "https://res.cloudinary.com/djtemmctt/video/upload/q_auto:eco,f_auto/"

  return (
    <section className="relative h-[85vh] flex items-center justify-center text-center overflow-hidden">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        src={`${CLOUDINARY_BASE}${video}.mp4`}
      />
      <div
        className="absolute bottom-0 left-0 w-full h-[2px]"
        style={{ backgroundColor: color }}
        />

      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-3xl px-6">

        <h1 className="text-[5vw] font-black uppercase tracking-tight">
          {name}
        </h1>

        <p className="text-lg text-white/70 mt-4">
          {focus}
        </p>

        <p className="text-white/60 mt-8 leading-relaxed">
          {description}
        </p>

      </div>
    </section>
  )
}