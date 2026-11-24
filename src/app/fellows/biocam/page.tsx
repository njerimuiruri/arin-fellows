"use client"

import { useState, useMemo } from "react"
import { Search, X, MapPin, Building2, ArrowRight, Leaf, FileText } from "lucide-react"
import { biocamFellows } from "../../../../data/fellows/biocam-fellows"
import { arinFellows } from "../../../../data/fellows/arin-fellows"
import ArinFellowsFooter from "@/components/footer/footer"
import ARINNavbar from "@/components/navbar/navbar"

const arinById = Object.fromEntries(arinFellows.map((f) => [f.id, f]))

// Pull photo + bio from an existing ARIN profile when linked
const fellows = biocamFellows.map((f: any) => {
    const linked: any = f.fellowId ? arinById[f.fellowId] || {} : {}
    return { ...f, image: f.image || linked.image || "", bio: f.bio || linked.bio || "" }
})

const countries = new Set(fellows.map((f) => f.country)).size

function initials(name = "") {
    return name.replace(/^(Dr\.|Prof\.)\s*/i, "").split(/\s+/).slice(0, 2).map((w) => w[0]?.toUpperCase()).join("")
}

function Photo({ fellow, className = "" }) {
    if (fellow.image) return <img src={fellow.image} alt={fellow.name} className={`object-cover object-top ${className}`} />
    return (
        <div className={`flex items-center justify-center bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-700 font-bold ${className}`}>
            {initials(fellow.name)}
        </div>
    )
}

function FellowModal({ fellow, onClose }) {
    if (!fellow) return null
    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col sm:flex-row" onClick={(e) => e.stopPropagation()}>
                <div className="sm:w-2/5 h-64 sm:h-auto shrink-0 bg-slate-100">
                    <Photo fellow={fellow} className="w-full h-full text-6xl" />
                </div>
                <div className="flex-1 flex flex-col overflow-hidden">
                    <div className="relative p-6 border-b border-gray-100">
                        <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2">
                            <X className="w-4 h-4" />
                        </button>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-700 mb-1">BioCAM4 Fellow</p>
                        <h2 className="text-2xl font-bold text-gray-900 pr-10">{fellow.name}</h2>
                        <p className="flex items-start gap-1.5 text-sm text-gray-600 mt-2">
                            <Building2 className="w-4 h-4 mt-0.5 text-gray-400 shrink-0" /> {fellow.institution}
                        </p>
                        <p className="flex items-center gap-1.5 text-sm text-gray-600 mt-1">
                            <MapPin className="w-4 h-4 text-emerald-600" /> {fellow.country}
                        </p>
                    </div>
                    <div className="flex-1 overflow-y-auto p-6 space-y-5">
                        {fellow.projectTitle && (
                            <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-700 mb-1">Project</p>
                                <p className="font-semibold text-gray-900 leading-snug">{fellow.projectTitle}</p>
                                {fellow.document && (
                                    <a
                                        href={fellow.document}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 px-3.5 py-2 rounded-lg transition-colors"
                                    >
                                        <FileText className="w-4 h-4" /> View project proposal
                                    </a>
                                )}
                            </div>
                        )}
                        {fellow.summary && (
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Project Overview</h3>
                                <p className="text-gray-700 leading-relaxed">{fellow.summary}</p>
                            </div>
                        )}
                        <div>
                            <h3 className="font-bold text-gray-900 mb-2">Biography</h3>
                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{fellow.bio || "Biography coming soon."}</p>
                        </div>
                        {!fellow.projectTitle && fellow.document && (
                            <a href={fellow.document} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:underline">
                                <FileText className="w-4 h-4" /> View project proposal
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function BioCAMFellowsPage() {
    const [query, setQuery] = useState("")
    const [selected, setSelected] = useState(null)

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase()
        if (!q) return fellows
        return fellows.filter((f) => [f.name, f.institution, f.country, f.projectTitle].some((v) => v && v.toLowerCase().includes(q)))
    }, [query])

    return (
        <>
            <ARINNavbar />
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-12">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 border-b border-gray-200 pb-4 mb-5">
                        <div>
                            <p className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 mb-0.5">
                                <Leaf className="w-3.5 h-3.5" /> Planet, People &amp; Human Health
                            </p>
                            <h1 className="text-2xl md:text-3xl font-bold leading-tight bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                                BioCAM4 Fellows
                            </h1>
                            <p className="text-sm text-gray-500">
                                {fellows.length} fellows across {countries} countries advancing research on biodiversity, climate and human health
                            </p>
                        </div>
                        <div className="relative w-full md:w-80 shrink-0">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                                type="text"
                                placeholder="Search by name, institution, or country..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="w-full pl-10 pr-10 py-2 bg-white border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-sm"
                            />
                            {query && (
                                <button onClick={() => setQuery("")} aria-label="Clear search" className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                    <X className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Grid */}
                    {filtered.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filtered.map((f) => (
                                <article
                                    key={f.id}
                                    onClick={() => setSelected(f)}
                                    className="group cursor-pointer bg-white rounded-2xl border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                                >
                                    <div className="relative aspect-[4/3] bg-slate-100">
                                        <Photo fellow={f} className="w-full h-full text-5xl" />
                                        <span className="absolute top-3 right-3 flex items-center gap-1 bg-white/95 px-2.5 py-1 rounded-full shadow text-xs font-semibold text-gray-700">
                                            <MapPin className="w-3 h-3 text-emerald-600" /> {f.country}
                                        </span>
                                    </div>
                                    <div className="p-4 flex flex-col flex-1">
                                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">{f.name}</h3>
                                        <p className="flex items-start gap-1.5 text-sm text-gray-500 mt-1 mb-3">
                                            <Building2 className="w-4 h-4 mt-0.5 text-gray-400 shrink-0" /> {f.institution}
                                        </p>
                                        {f.projectTitle && <p className="text-sm font-semibold text-emerald-900 line-clamp-2 mb-3">{f.projectTitle}</p>}
                                        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 group-hover:gap-2.5 transition-all">
                                            View profile <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <p className="text-lg font-semibold text-gray-700 mb-3">No fellows match your search</p>
                            <button onClick={() => setQuery("")} className="text-emerald-700 font-semibold hover:underline">Clear search</button>
                        </div>
                    )}
                </div>
                <FellowModal fellow={selected} onClose={() => setSelected(null)} />
            </div>
            <ArinFellowsFooter />
        </>
    )
}
