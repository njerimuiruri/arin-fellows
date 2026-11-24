"use client"

import { useState, useMemo, useEffect } from "react"
import { Search, X, MapPin, BookOpen, Users, ChevronLeft, ChevronRight, Award, Building2, Briefcase, ArrowRight, Trophy } from "lucide-react"
import { aiFellows } from "../../../../data/fellows/ai-fellows"
import { aiAwardees } from "../../../../data/fellows/ai-awardees"
import ArinFellowsFooter from "@/components/footer/footer"
import ARINNavbar from "@/components/navbar/navbar"

const FELLOWS_PER_PAGE = 9

type Tab = "fellows" | "awardees"

const aiFellowsById = Object.fromEntries(aiFellows.map((f) => [f.id, f]))

// Merge awardee entries with their AI Fellow profile (photo + bio) when linked
const awardees = aiAwardees.map((a) => {
    const fellow: any = (a as any).fellowId ? aiFellowsById[(a as any).fellowId] || {} : {}
    return {
        ...a,
        name: (a.name || fellow.name || "").trim(),
        image: (a.image || fellow.image || "").trim(),
        bio: a.bio || fellow.bio || "",
    }
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

function AwardeeAvatar({ src, name, className = "" }) {
    if (src) return <img src={src} alt={name || "Awardee"} className={`object-cover ${className}`} />
    return (
        <div className={`flex items-center justify-center bg-gradient-to-br from-amber-100 to-orange-100 text-amber-700 font-bold ${className}`}>
            {name ? initials(name) : <Award className="w-1/2 h-1/2" />}
        </div>
    )
}

function AwardeeCard({ awardee, onClick, index }) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), index * 60)
        return () => clearTimeout(timer)
    }, [index])

    return (
        <article
            onClick={() => onClick(awardee)}
            className={`group cursor-pointer bg-white rounded-2xl border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-500 flex flex-col overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
            <div className="relative aspect-[4/3] bg-slate-100">
                <AwardeeAvatar src={awardee.image} name={awardee.name} className="w-full h-full object-top text-5xl" />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1 text-[11px] font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-full shadow">
                    <Trophy className="w-3 h-3" /> Awardee
                </span>
                {awardee.country && (
                    <span className="absolute top-3 right-3 flex items-center gap-1 bg-white/95 px-2.5 py-1 rounded-full shadow text-xs font-semibold text-gray-700">
                        <MapPin className="w-3 h-3 text-blue-600" /> {awardee.country}
                    </span>
                )}
            </div>

            <div className="p-4 flex flex-col flex-1">
                {awardee.name && <h3 className="text-lg font-bold text-gray-900 leading-tight">{awardee.name}</h3>}
                <p className={`text-sm ${awardee.name ? "text-gray-600" : "text-gray-900 font-bold"}`}>{awardee.position}</p>
                <p className="text-xs text-gray-400 mb-3 line-clamp-1">{awardee.institution}</p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700 mb-1">Awarded Project</p>
                <p className="text-sm font-semibold text-blue-900 leading-snug line-clamp-3 mb-3">{awardee.projectTitle}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 group-hover:gap-2.5 transition-all">
                    View profile <ArrowRight className="w-4 h-4" />
                </span>
            </div>
        </article>
    )
}

function AwardeeDetailModal({ awardee, onClose }) {
    if (!awardee) return null

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col" onClick={(e) => e.stopPropagation()}>
                <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 px-6 md:px-8 pt-8 pb-7 text-white">
                    <button onClick={onClose} className="absolute top-5 right-5 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors" aria-label="Close">
                        <X className="w-5 h-5" />
                    </button>
                    <div className="flex items-center gap-5 pr-10">
                        <AwardeeAvatar src={awardee.image} name={awardee.name} className="w-20 h-20 rounded-2xl ring-2 ring-white/30 shrink-0 text-2xl" />
                        <div className="min-w-0">
                            <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-amber-300 mb-1.5">
                                <Trophy className="w-3.5 h-3.5" /> AI for Climate Resilience · Mini-Grant Awardee
                            </p>
                            {awardee.name && <h2 className="text-xl md:text-2xl font-bold leading-tight">{awardee.name}</h2>}
                            <p className={`text-blue-100 ${awardee.name ? "text-sm mt-1" : "text-lg font-semibold text-white"}`}>{awardee.position}</p>
                            {awardee.country && (
                                <p className="flex items-center gap-1.5 text-sm text-blue-200 mt-1">
                                    <MapPin className="w-3.5 h-3.5" /> {awardee.country}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto px-6 md:px-8 py-7 space-y-7">
                    <div className="rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50/80 to-white p-5">
                        <p className="text-[11px] font-bold uppercase tracking-widest text-amber-700 mb-2">Awarded Project</p>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-snug">{awardee.projectTitle}</h3>
                        {awardee.theme && (
                            <span className="inline-block mt-3 text-[11px] font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">
                                {awardee.theme}
                            </span>
                        )}
                    </div>

                    {awardee.overview && (
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <div className="h-1 w-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full" />
                                <h4 className="text-base font-bold text-gray-900">Project Overview</h4>
                            </div>
                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{awardee.overview}</p>
                        </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-3">
                        {[
                            { Icon: Briefcase, label: "Current position", value: awardee.position },
                            { Icon: Building2, label: "Institution", value: awardee.institution },
                        ].map(({ Icon, label, value }) => (
                            <div key={label} className="flex items-start gap-3 bg-slate-50 border border-gray-100 rounded-xl p-3.5">
                                <div className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center shrink-0">
                                    <Icon className="w-4 h-4 text-blue-600" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">{label}</p>
                                    <p className="text-sm text-gray-800 font-medium leading-snug">{value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {awardee.bio && (
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <div className="h-1 w-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                                <h4 className="text-base font-bold text-gray-900">Biography</h4>
                            </div>
                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{awardee.bio}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

function FellowCard({ fellow, onClick, index }) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), index * 50)
        return () => clearTimeout(timer)
    }, [index])

    return (
        <div
            className={`group relative cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            onClick={() => onClick(fellow)}
        >
            {/* Card */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100">
                {/* Image Section */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                    <img
                        src={fellow.image}
                        alt={fellow.name}
                        className="w-full h-full object-cover object-top"
                    />

                    {/* Country Badge - Top Right */}
                    {fellow.country && (
                        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md border border-gray-200">
                            <MapPin className="w-3.5 h-3.5 text-blue-600" />
                            <span className="text-xs font-semibold text-gray-700">{fellow.country}</span>
                        </div>
                    )}
                </div>

                {/* Content Section */}
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {fellow.name}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium mb-4">
                        {fellow.title}
                    </p>

                    {/* Bio Preview */}
                    <p className="text-sm text-gray-500 line-clamp-3 mb-4 leading-relaxed">
                        {fellow.bio}
                    </p>

                    {/* View Bio Button */}
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        <span>View Full Biography</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

function FellowDetailModal({ fellow, isOpen, onClose }) {
    if (!isOpen || !fellow) return null

    return (
        <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
                    {/* Left Side - Image */}
                    <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 z-10"></div>
                        <img
                            src={fellow.image}
                            alt={fellow.name}
                            className="w-full h-full object-cover"
                        />

                        {fellow.country && (
                            <div className="absolute top-6 left-6 z-20 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                                <MapPin className="w-4 h-4 text-blue-600" />
                                <span className="text-sm font-semibold text-gray-700">{fellow.country}</span>
                            </div>
                        )}
                    </div>

                    {/* Right Side - Content */}
                    <div className="flex-1 flex flex-col overflow-hidden">
                        <div className="relative p-8 pb-6 border-b border-gray-100">
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full p-2 transition-all duration-300"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 pr-12">
                                {fellow.name}
                            </h2>
                            <p className="text-lg text-gray-600 font-medium">
                                {fellow.title}
                            </p>
                        </div>

                        <div className="flex-1 overflow-y-auto p-8">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                <h3 className="text-xl font-bold text-gray-800">Biography</h3>
                            </div>
                            <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
                                {fellow.bio}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function AIFellowsPage() {
    const [tab, setTab] = useState<Tab>("fellows")
    const [selectedAwardee, setSelectedAwardee] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedFellow, setSelectedFellow] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [isVisible, setIsVisible] = useState(false)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        setIsVisible(true)
        if (window.location.hash === "#awardees") setTab("awardees")

        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX - window.innerWidth / 2) / 50,
                y: (e.clientY - window.innerHeight / 2) / 50
            })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    const handleCardClick = (fellow) => {
        setSelectedFellow(fellow)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSelectedFellow(null)
    }

    const filteredFellows = useMemo(() => {
        setCurrentPage(1)
        if (!searchQuery) return aiFellows
        const query = searchQuery.toLowerCase()
        return aiFellows.filter(
            (fellow) =>
                fellow.name.toLowerCase().includes(query) ||
                (fellow.country && fellow.country.toLowerCase().includes(query)) ||
                (fellow.title && fellow.title.toLowerCase().includes(query)) ||
                fellow.bio.toLowerCase().includes(query)
        )
    }, [searchQuery])

    const filteredAwardees = useMemo(() => {
        const query = searchQuery.trim().toLowerCase()
        if (!query) return awardees
        return awardees.filter((a) =>
            [a.name, a.country, a.theme, a.position, a.institution, a.projectTitle].some(
                (v) => v && v.toLowerCase().includes(query)
            )
        )
    }, [searchQuery])

    const switchTab = (next: Tab) => {
        setTab(next)
        setSearchQuery("")
        history.replaceState(null, "", next === "awardees" ? "#awardees" : window.location.pathname)
    }

    const totalPages = Math.ceil(filteredFellows.length / FELLOWS_PER_PAGE)
    const paginatedFellows = filteredFellows.slice(
        (currentPage - 1) * FELLOWS_PER_PAGE,
        currentPage * FELLOWS_PER_PAGE
    )

    return (
        <>
            <ARINNavbar />
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
                <div className="fixed inset-0 overflow-hidden pointer-events-none">
                    <div
                        className="absolute top-0 -left-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"
                        style={{
                            transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`,
                            transition: 'transform 0.3s ease-out'
                        }}
                    ></div>
                    <div
                        className="absolute bottom-0 -right-20 w-96 h-96 bg-gradient-to-tl from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
                        style={{
                            transform: `translate(${mousePosition.x * -2}px, ${mousePosition.y * -2}px)`,
                            transition: 'transform 0.3s ease-out'
                        }}
                    ></div>
                </div>

                <div className="relative z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-3">
                        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                                <div>
                                    <h1 className="text-2xl md:text-3xl font-bold leading-tight bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                                        AI Fellows
                                    </h1>
                                    <p className="text-gray-500 text-sm">
                                        {tab === "fellows"
                                            ? "A network of talented researchers and technocrats promoting research excellence across Africa"
                                            : "Fellows awarded AI for Climate Resilience mini-grants to tackle climate challenges across Africa"}
                                    </p>
                                </div>
                                <div className="relative w-full md:w-80 shrink-0">
                                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 z-10" />
                                    <input
                                        type="text"
                                        placeholder={tab === "fellows" ? "Search by name, country, or expertise..." : "Search by project, institution, or theme..."}
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-10 pr-10 py-2 bg-white border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm"
                                    />
                                    {searchQuery && (
                                        <button
                                            onClick={() => setSearchQuery("")}
                                            aria-label="Clear search"
                                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Tab switcher */}
                            <div className="flex flex-wrap items-center gap-2 mt-4 border-b border-gray-200" role="tablist">
                                {[
                                    { key: "fellows", label: "AI Fellows", Icon: Users, count: aiFellows.length },
                                    { key: "awardees", label: "Mini-Grant Awardees", Icon: Trophy, count: awardees.length },
                                ].map(({ key, label, Icon, count }) => {
                                    const active = tab === key
                                    return (
                                        <button
                                            key={key}
                                            role="tab"
                                            aria-selected={active}
                                            onClick={() => switchTab(key as Tab)}
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
                                        Found <span className="font-bold text-blue-600">{tab === "fellows" ? filteredFellows.length : filteredAwardees.length}</span>{" "}
                                        {tab === "fellows" ? (filteredFellows.length === 1 ? "fellow" : "fellows") : (filteredAwardees.length === 1 ? "awardee" : "awardees")}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-3">
                    {tab === "awardees" ? (
                        <>
                            {filteredAwardees.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filteredAwardees.map((a, index) => (
                                        <AwardeeCard key={a.id} awardee={a} onClick={setSelectedAwardee} index={index} />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-16">
                                    <p className="text-lg font-semibold text-gray-700 mb-4">No awardees match your search</p>
                                    <button onClick={() => setSearchQuery("")} className="text-blue-600 font-semibold hover:underline">Clear search</button>
                                </div>
                            )}
                        </>
                    ) : filteredFellows.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {paginatedFellows.map((fellow, index) => (
                                    <FellowCard
                                        key={fellow.id}
                                        fellow={fellow}
                                        onClick={handleCardClick}
                                        index={index}
                                    />
                                ))}
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="flex items-center justify-center gap-2 mt-12">
                                    <button
                                        onClick={() => { setCurrentPage(p => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                                        disabled={currentPage === 1}
                                        className="flex items-center gap-1 px-4 py-2 rounded-xl border border-gray-200 bg-white text-gray-600 font-medium hover:bg-blue-50 hover:border-blue-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                        Prev
                                    </button>

                                    <div className="flex items-center gap-1">
                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                                            const isActive = page === currentPage
                                            const isNear = Math.abs(page - currentPage) <= 2 || page === 1 || page === totalPages
                                            if (!isNear) {
                                                if (page === currentPage - 3 || page === currentPage + 3) {
                                                    return <span key={page} className="px-1 text-gray-400">…</span>
                                                }
                                                return null
                                            }
                                            return (
                                                <button
                                                    key={page}
                                                    onClick={() => { setCurrentPage(page); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                                                    className={`w-9 h-9 rounded-xl font-semibold text-sm transition-all duration-200 ${
                                                        isActive
                                                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                                                            : 'bg-white border border-gray-200 text-gray-600 hover:bg-blue-50 hover:border-blue-300'
                                                    }`}
                                                >
                                                    {page}
                                                </button>
                                            )
                                        })}
                                    </div>

                                    <button
                                        onClick={() => { setCurrentPage(p => Math.min(totalPages, p + 1)); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                                        disabled={currentPage === totalPages}
                                        className="flex items-center gap-1 px-4 py-2 rounded-xl border border-gray-200 bg-white text-gray-600 font-medium hover:bg-blue-50 hover:border-blue-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
                                    >
                                        Next
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            )}

                            <p className="text-center text-sm text-gray-400 mt-4">
                                Showing {(currentPage - 1) * FELLOWS_PER_PAGE + 1}–{Math.min(currentPage * FELLOWS_PER_PAGE, filteredFellows.length)} of {filteredFellows.length} fellows
                            </p>
                        </>
                    ) : (
                        <div className="text-center py-20">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mb-6 shadow-xl">
                                <Search className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-4">No Fellows Found</h3>
                            <p className="text-gray-600 mb-8 text-lg">
                                Try adjusting your search to find what you&apos;re looking for
                            </p>
                            <button
                                onClick={() => setSearchQuery("")}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-8 py-4 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                Clear Search
                            </button>
                        </div>
                    )}
                </div>

                <FellowDetailModal fellow={selectedFellow} isOpen={isModalOpen} onClose={handleCloseModal} />
                <AwardeeDetailModal awardee={selectedAwardee} onClose={() => setSelectedAwardee(null)} />
            </div>
            <ArinFellowsFooter />

        </>
    )
}
