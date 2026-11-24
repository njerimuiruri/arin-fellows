"use client"

import { useState, useMemo, useEffect } from "react"
import {
    Search, X, MapPin, BookOpen, Building2, ArrowRight,
    Layers, Target, Handshake, FileText, UserRound,
} from "lucide-react"
import { leepsFellows, leepsPhase2Projects } from "../../../../data/fellows/leeps-fellows"
import ArinFellowsFooter from "@/components/footer/footer"
import ARINNavbar from "@/components/navbar/navbar"

type Phase = "phase1" | "phase2"

const fellowsById = Object.fromEntries(leepsFellows.map((f) => [f.id, f]))

// Phase I profiles that are still placeholders (no bio yet) stay hidden
const phase1Fellows = leepsFellows.filter((f) => f.bio && f.bio.trim().length > 0)

const phase2Projects = leepsPhase2Projects.map((p) => {
    const fellow: any = fellowsById[p.fellowId] || {}
    return { ...p, image: fellow.image || "", bio: fellow.bio || "", fellowTitle: fellow.title || "" }
})

function initials(name = "") {
    return name
        .replace(/^(Dr\.|Prof\.)\s*/i, "")
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((w) => w[0]?.toUpperCase())
        .join("")
}

function Avatar({ src, name, className = "" }) {
    if (src) return <img src={src} alt={name} className={`object-cover ${className}`} />
    return (
        <div className={`flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 text-blue-700 font-bold ${className}`}>
            {initials(name)}
        </div>
    )
}

/* ───────────────────────── Phase I ───────────────────────── */

function FellowCard({ fellow, onClick, index }) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), index * 50)
        return () => clearTimeout(timer)
    }, [index])

    return (
        <div
            className={`group relative cursor-pointer transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            onClick={() => onClick(fellow)}
        >
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                    <Avatar src={fellow.image} name={fellow.name} className="w-full h-full text-4xl" />
                    {fellow.country && (
                        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md border border-gray-200">
                            <MapPin className="w-3.5 h-3.5 text-blue-600" />
                            <span className="text-xs font-semibold text-gray-700">{fellow.country}</span>
                        </div>
                    )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {fellow.name}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium mb-4">{fellow.title}</p>
                    <p className="text-sm text-gray-500 line-clamp-3 mb-4 leading-relaxed">{fellow.bio}</p>
                    <button className="mt-auto w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        <span>View Full Biography</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

function FellowDetailModal({ fellow, onClose }) {
    if (!fellow) return null

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
                <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
                    <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 z-10"></div>
                        <Avatar src={fellow.image} name={fellow.name} className="w-full h-full text-6xl" />
                        {fellow.country && (
                            <div className="absolute top-6 left-6 z-20 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                                <MapPin className="w-4 h-4 text-blue-600" />
                                <span className="text-sm font-semibold text-gray-700">{fellow.country}</span>
                            </div>
                        )}
                    </div>

                    <div className="flex-1 flex flex-col overflow-hidden">
                        <div className="relative p-8 pb-6 border-b border-gray-100">
                            <button onClick={onClose} className="absolute top-6 right-6 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full p-2 transition-all duration-300">
                                <X className="w-5 h-5" />
                            </button>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 pr-12">{fellow.name}</h2>
                            <p className="text-lg text-gray-600 font-medium">{fellow.title}</p>
                        </div>

                        <div className="flex-1 overflow-y-auto p-8">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                <h3 className="text-xl font-bold text-gray-800">Biography</h3>
                            </div>
                            <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">{fellow.bio}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

/* ───────────────────────── Phase II ───────────────────────── */

function ProjectCard({ project, onClick, index }) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), index * 60)
        return () => clearTimeout(timer)
    }, [index])

    return (
        <article
            onClick={() => onClick(project)}
            className={`group cursor-pointer bg-white rounded-2xl border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-500 flex flex-col overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
            {/* Photo — large, aligned to the face */}
            <div className="relative aspect-[4/3] bg-slate-100">
                <Avatar src={project.image} name={project.name} className="w-full h-full object-top text-5xl" />
                <span className="absolute top-3 right-3 flex items-center gap-1 bg-white/95 px-2.5 py-1 rounded-full shadow text-xs font-semibold text-gray-700">
                    <MapPin className="w-3 h-3 text-blue-600" /> {project.country}
                </span>
            </div>

            <div className="flex-1 p-4 flex flex-col">
                <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">{project.name}</h3>
                    <span className="shrink-0 text-[11px] font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full">
                        {project.theme}
                    </span>
                </div>
                <p className="text-sm font-semibold text-blue-900 leading-snug line-clamp-3 mb-2 group-hover:text-blue-700 transition-colors">
                    {project.projectTitle}
                </p>
                <p className="flex items-start gap-1.5 text-xs text-gray-500 mb-2">
                    <Building2 className="w-3.5 h-3.5 mt-0.5 text-gray-400 shrink-0" />
                    <span>{project.hostInstitution}</span>
                </p>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-3">{project.summary}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 group-hover:gap-2.5 transition-all">
                    View project details <ArrowRight className="w-4 h-4" />
                </span>
            </div>
        </article>
    )
}

function ProjectDetailModal({ project, onClose }) {
    const [tab, setTab] = useState<"project" | "fellow">("project")

    useEffect(() => setTab("project"), [project])

    if (!project) return null

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 px-6 md:px-8 pt-8 pb-6 text-white">
                    <button onClick={onClose} className="absolute top-5 right-5 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors" aria-label="Close">
                        <X className="w-5 h-5" />
                    </button>
                    <div className="flex items-center gap-4 pr-10">
                        <Avatar src={project.image} name={project.name} className="w-24 h-28 rounded-xl object-top ring-2 ring-white/30 shrink-0 text-2xl" />
                        <div className="min-w-0">
                            <p className="text-[11px] font-semibold uppercase tracking-widest text-blue-200 mb-1">LEEPS Phase II · Mini-Grant</p>
                            <h2 className="text-xl md:text-2xl font-bold leading-tight">{project.name}</h2>
                            <p className="flex items-center gap-1.5 text-sm text-blue-100 mt-1">
                                <MapPin className="w-3.5 h-3.5" /> {project.country}
                                <span className="text-white/30">•</span>
                                <span>{project.theme}</span>
                            </p>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-1 mt-6 bg-white/10 p-1 rounded-xl w-fit">
                        {[
                            { key: "project", label: "Project", Icon: Target },
                            { key: "fellow", label: "About the Fellow", Icon: UserRound },
                        ].map(({ key, label, Icon }) => (
                            <button
                                key={key}
                                onClick={() => setTab(key as "project" | "fellow")}
                                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors ${tab === key ? "bg-white text-slate-900" : "text-white/80 hover:text-white"}`}
                            >
                                <Icon className="w-3.5 h-3.5" /> {label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto px-6 md:px-8 py-7">
                    {tab === "project" ? (
                        <div className="space-y-7">
                            <div>
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">Project Title</p>
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-snug">{project.projectTitle}</h3>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-3">
                                <InfoTile Icon={Building2} label="Host institution" value={project.hostInstitution} />
                                {project.partners ? (
                                    <InfoTile Icon={Handshake} label="Partners" value={project.partners} />
                                ) : (
                                    <InfoTile Icon={FileText} label="Builds on Phase I study" value={project.phase1Study} />
                                )}
                                {project.partners && (
                                    <div className="sm:col-span-2">
                                        <InfoTile Icon={FileText} label="Builds on Phase I study" value={project.phase1Study} />
                                    </div>
                                )}
                            </div>

                            <div>
                                <SectionHeading>Overview</SectionHeading>
                                <p className="text-gray-700 leading-relaxed">{project.summary}</p>
                            </div>

                            <div>
                                <SectionHeading>Key Activities &amp; Outputs</SectionHeading>
                                <ol className="space-y-3">
                                    {project.activities.map((a, i) => (
                                        <li key={i} className="flex gap-3">
                                            <span className="shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                                                {i + 1}
                                            </span>
                                            <span className="text-gray-700 leading-relaxed">{a}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    ) : (
                        <div>
                            {project.fellowTitle && <p className="text-gray-900 font-semibold mb-4">{project.fellowTitle}</p>}
                            <SectionHeading>Biography</SectionHeading>
                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{project.bio || "Biography coming soon."}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

function SectionHeading({ children }) {
    return (
        <div className="flex items-center gap-2 mb-3">
            <div className="h-1 w-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            <h4 className="text-base font-bold text-gray-900">{children}</h4>
        </div>
    )
}

function InfoTile({ Icon, label, value }) {
    return (
        <div className="flex items-start gap-3 bg-slate-50 border border-gray-100 rounded-xl p-3.5 h-full">
            <div className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-blue-600" />
            </div>
            <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">{label}</p>
                <p className="text-sm text-gray-800 font-medium leading-snug">{value}</p>
            </div>
        </div>
    )
}

/* ───────────────────────── Page ───────────────────────── */

export default function LEEPSFellowsPage() {
    const [phase, setPhase] = useState<Phase>("phase1")
    const [selectedFellow, setSelectedFellow] = useState(null)
    const [selectedProject, setSelectedProject] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [isVisible, setIsVisible] = useState(false)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        setIsVisible(true)
        if (window.location.hash === "#phase-2") setPhase("phase2")

        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX - window.innerWidth / 2) / 50,
                y: (e.clientY - window.innerHeight / 2) / 50,
            })
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    const switchPhase = (next: Phase) => {
        setPhase(next)
        setSearchQuery("")
        history.replaceState(null, "", next === "phase2" ? "#phase-2" : window.location.pathname)
    }

    const query = searchQuery.trim().toLowerCase()

    const filteredFellows = useMemo(() => {
        if (!query) return phase1Fellows
        return phase1Fellows.filter((f) =>
            [f.name, f.country, f.title, f.bio].some((v) => v && v.toLowerCase().includes(query))
        )
    }, [query])

    const filteredProjects = useMemo(() => {
        if (!query) return phase2Projects
        return phase2Projects.filter((p) =>
            [p.name, p.country, p.theme, p.projectTitle, p.hostInstitution, p.summary].some(
                (v) => v && v.toLowerCase().includes(query)
            )
        )
    }, [query])

    const resultCount = phase === "phase1" ? filteredFellows.length : filteredProjects.length
    const countries = new Set(phase2Projects.map((p) => p.country)).size

    return (
        <>
            <ARINNavbar />
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
                <div className="fixed inset-0 overflow-hidden pointer-events-none">
                    <div
                        className="absolute top-0 -left-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"
                        style={{ transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`, transition: "transform 0.3s ease-out" }}
                    ></div>
                    <div
                        className="absolute bottom-0 -right-20 w-96 h-96 bg-gradient-to-tl from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
                        style={{ transform: `translate(${mousePosition.x * -2}px, ${mousePosition.y * -2}px)`, transition: "transform 0.3s ease-out" }}
                    ></div>
                </div>

                {/* Header */}
                <div className="relative z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-3">
                        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                                <div>
                                    <h1 className="text-2xl md:text-3xl font-bold leading-tight bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                                        LEEPS Fellows
                                    </h1>
                                    <p className="text-gray-500 text-sm">
                                        Learning together to advance <span className="font-semibold text-blue-600">Evidence and Equity in Policymaking</span> to achieve the SDGs
                                    </p>
                                </div>
                                <div className="relative w-full md:w-80 shrink-0">
                                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 z-10" />
                                    <input
                                        type="text"
                                        placeholder={phase === "phase1" ? "Search by name, country, or expertise..." : "Search by fellow, country, theme, or institution..."}
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-10 pr-10 py-2 bg-white border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm"
                                    />
                                    {searchQuery && (
                                        <button onClick={() => setSearchQuery("")} aria-label="Clear search" className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                            <X className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Phase switcher */}
                            <div className="flex flex-wrap items-center gap-2 mt-4 border-b border-gray-200" role="tablist">
                                {[
                                    { key: "phase1", label: "Phase I · Fellows", count: phase1Fellows.length, Icon: UserRound },
                                    { key: "phase2", label: "Phase II · Mini-Grant Projects", count: phase2Projects.length, Icon: Layers },
                                ].map(({ key, label, count, Icon }) => {
                                    const active = phase === key
                                    return (
                                        <button
                                            key={key}
                                            role="tab"
                                            aria-selected={active}
                                            onClick={() => switchPhase(key as Phase)}
                                            className={`-mb-px inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold border-b-2 transition-colors ${active ? "border-blue-600 text-blue-700" : "border-transparent text-gray-500 hover:text-gray-800"}`}
                                        >
                                            <Icon className="w-4 h-4" />
                                            {label}
                                            <span className={`text-xs px-1.5 py-0.5 rounded-full ${active ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-500"}`}>{count}</span>
                                        </button>
                                    )
                                })}
                                {searchQuery && (
                                    <span className="ml-auto text-xs text-gray-500 pb-2">
                                        Found <span className="font-bold text-blue-600">{resultCount}</span>{" "}
                                        {phase === "phase1" ? (resultCount === 1 ? "fellow" : "fellows") : resultCount === 1 ? "project" : "projects"}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-3">
                    {phase === "phase2" && (
                        <p className="mb-4 text-sm text-gray-600 border-l-4 border-blue-600 bg-white px-4 py-2.5 rounded-r-lg">
                            <span className="font-semibold text-gray-900">{phase2Projects.length} projects · {countries} countries.</span>{" "}
                            Phase I fellows received mini-grants to turn their case-study findings into lasting practice inside the institutions they studied.
                        </p>
                    )}

                    {resultCount > 0 ? (
                        phase === "phase1" ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredFellows.map((fellow, index) => (
                                    <FellowCard key={fellow.id} fellow={fellow} onClick={setSelectedFellow} index={index} />
                                ))}
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredProjects.map((project, index) => (
                                    <ProjectCard key={project.id} project={project} onClick={setSelectedProject} index={index} />
                                ))}
                            </div>
                        )
                    ) : (
                        <div className="text-center py-20">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mb-6 shadow-xl">
                                <Search className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-4">No Results Found</h3>
                            <p className="text-gray-600 mb-8 text-lg">Try adjusting your search to find what you&apos;re looking for</p>
                            <button
                                onClick={() => setSearchQuery("")}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-8 py-4 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                Clear Search
                            </button>
                        </div>
                    )}
                </div>

                <FellowDetailModal fellow={selectedFellow} onClose={() => setSelectedFellow(null)} />
                <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            </div>
            <ArinFellowsFooter />
        </>
    )
}
