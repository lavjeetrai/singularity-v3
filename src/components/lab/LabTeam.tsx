interface Executive {
  name: string
  role: string
  field: string
  image?: string
}

interface Member {
  name: string
  field: string
  year: string
}

interface Props {
  executives: Executive[]
  members: Member[]
  logo: string
}

export default function LabTeam({ executives, members, logo }: Props) {

  return (
    <section className="max-w-6xl mx-auto px-6 pb-32">

      {/* HEADER */}

      <div className="text-center mb-20">

        <h2 className="text-5xl font-black uppercase tracking-tight">
          Our Team
        </h2>

        <p className="text-white/50 mt-4">
          Meet the minds building intelligence
        </p>

      </div>


      {/* EXECUTIVES */}

      <h3 className="text-xs text-white/40 uppercase tracking-[0.4em] mb-10 text-center">
        Executives
      </h3>

      <div className="flex justify-center mb-24">

        {executives.map((e, i) => (

          <div
            key={i}
            className="flex items-center gap-8 border border-white/20 p-8 bg-black/70 hover:border-white/40 hover:bg-white/[0.03] transition-all hover:scale-[1.02] max-w-xl"
          >

            {/* PHOTO */}

            <div className="w-24 h-24 rounded-full overflow-hidden border border-white/20">

              {e.image && (
                <img
                  src={e.image}
                  className="w-full h-full object-cover"
                />
              )}

            </div>


            {/* INFO */}

            <div>

              <p className="text-xs text-white/40 uppercase tracking-widest">
                {e.role}
              </p>

              <div className="flex items-center gap-3 mt-1">

                <h3 className="text-2xl font-bold">
                    {e.name}
                </h3>

                <img
                    src={logo}
                    className="w-5 h-5 opacity-70"
                />

               </div>

              <p className="text-white/60 text-sm mt-2">
                {e.field}
              </p>

            </div>

          </div>

        ))}

      </div>


      {/* MEMBERS */}

      <h3 className="text-xs text-white/40 uppercase tracking-[0.4em] mb-10 text-center">
        Members
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {members.map((m, i) => (

          <div
            key={i}
            className="border border-white/10 p-5 bg-black/60 transition-all hover:border-white/30 hover:bg-white/[0.03] hover:translate-y-[-4px]"
          >

            <h4 className="font-semibold">
              {m.name}
            </h4>

            <p className="text-white/60 text-sm mt-1">
              {m.field}
            </p>

            <p className="text-white/40 text-xs mt-2">
              {m.year}
            </p>

          </div>

        ))}

      </div>

    </section>
  )
}