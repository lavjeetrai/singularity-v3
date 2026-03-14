import { labs } from "../../../data/labs"
import LabHero from "../../../components/lab/LabHero"
import LabMission from "../../../components/lab/LabMission"
import LabTeam from "../../../components/lab/LabTeam"
import { notFound } from "next/navigation"

interface PageProps {
  params: Promise<{
    labId: string
  }>
}

export default async function LabPage({ params }: PageProps) {

  const { labId } = await params

  const lab = labs.find(l => l.id === labId)

  if (!lab) return notFound()

  return (
    <main className="bg-black text-white">

      <LabHero
        name={lab.name}
        focus={lab.focus}
        description={lab.description}
        video={lab.video_id}
        color={lab.color}
        />

      <LabMission mission={lab.mission} />

      <LabTeam
        executives={lab.executives}
        members={lab.members}
        logo ={lab.logo}
        />

    </main>
  )
}


export function generateStaticParams() {
  return labs.map(lab => ({
    labId: lab.id
  }))
}