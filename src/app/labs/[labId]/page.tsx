"use client"

import { use, useEffect, useState, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { labs } from "../../../data/labs"
import LabHero from "../../../components/lab/LabHero"
import LabMission from "../../../components/lab/LabMission"
import LabTeam from "../../../components/lab/LabTeam"
import { notFound, useRouter } from "next/navigation"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

interface PageProps {
  params: Promise<{ labId: string }>
}

export default function LabPage({ params }: PageProps) {
  const { labId } = use(params) // ← unwrap the Promise
  const router = useRouter()
  const [labsDropdownOpen, setLabsDropdownOpen] = useState(false)
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false)
  const labsDropdownRef = useRef<HTMLDivElement>(null)
  const eventsDropdownRef = useRef<HTMLDivElement>(null)

  const lab = labs.find(l => l.id === labId)

  const events = [
    {
      id: "schrodingers-cat",
      name: "Schrödinger's Cat",
      url: "https://schrodingerscat.singularitylabsrmap.space/"
    }
  ]

  // Handle outside clicks to close dropdowns
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (labsDropdownRef.current && !labsDropdownRef.current.contains(e.target as Node)) {
        setLabsDropdownOpen(false)
      }
      if (eventsDropdownRef.current && !eventsDropdownRef.current.contains(e.target as Node)) {
        setEventsDropdownOpen(false)
      }
    }

    if (labsDropdownOpen || eventsDropdownOpen) {
      document.addEventListener('click', handleOutsideClick)
      return () => document.removeEventListener('click', handleOutsideClick)
    }
  }, [labsDropdownOpen, eventsDropdownOpen])

  useEffect(() => {
    ScrollTrigger.refresh()
    gsap.to(".lab-page", { opacity: 1, duration: 0.8 })
  }, [])

  if (!lab) return notFound()

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-100 px-10 py-6 flex justify-between items-center mix-blend-difference text-white">
        <Link href="/">
          <div className="font-black text-lg tracking-tighter uppercase leading-none cursor-pointer hover:opacity-80 transition-opacity">
            ← Back
          </div>
        </Link>
        
        <div className="flex gap-10 font-mono text-[11px] tracking-[0.3em] opacity-60 uppercase">
          <a href="#about" className="hover:opacity-100 transition-opacity cursor-pointer">About Us</a>
          
          {/* Labs Dropdown */}
          <div 
            ref={labsDropdownRef}
            className="relative"
          >
            <button 
              onClick={() => setLabsDropdownOpen(!labsDropdownOpen)}
              className="hover:opacity-100 transition-opacity cursor-pointer flex items-center gap-2"
            >
              LABS
              <ChevronDown size={12} className={`transition-transform duration-200 ${labsDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {labsDropdownOpen && (
              <div className="absolute top-full mt-2 left-0 bg-black/95 border border-white/20 rounded-lg shadow-lg py-2 min-w-50 backdrop-blur-sm z-50">
                {labs.map((lab) => (
                  <button
                    key={lab.id}
                    onClick={() => {
                      router.push(`/labs/${lab.id}`)
                      setLabsDropdownOpen(false)
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-white/10 transition-colors text-white/80 hover:text-white text-xs whitespace-nowrap"
                  >
                    {lab.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Events Dropdown */}
          <div 
            ref={eventsDropdownRef}
            className="relative"
          >
            <button 
              onClick={() => setEventsDropdownOpen(!eventsDropdownOpen)}
              className="hover:opacity-100 transition-opacity cursor-pointer flex items-center gap-2"
            >
              EVENTS
              <ChevronDown size={12} className={`transition-transform duration-200 ${eventsDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {eventsDropdownOpen && (
              <div className="absolute top-full mt-2 left-0 bg-black/95 border border-white/20 rounded-lg shadow-lg py-2 min-w-55 backdrop-blur-sm z-50">
                {events.map((event) => (
                  <a
                    key={event.id}
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-white/10 transition-colors text-white/80 hover:text-white text-xs whitespace-nowrap"
                  >
                    {event.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#contact" className="hover:opacity-100 transition-opacity cursor-pointer">Contact</a>
        </div>
      </nav>

      <main className="bg-black text-white opacity-0 lab-page">
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
          logo={lab.logo}
        />
      </main>
    </>
  )
}