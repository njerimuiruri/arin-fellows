"use client"

import { useState, useMemo, useEffect } from "react"
import { Search, X, MapPin, BookOpen, Sparkles, Users, Globe } from "lucide-react"
import { sdgFellows } from "../../../../data/fellows/sdg-fellows"
import ARINNavbar from "@/components/navbar/navbar"
import ArinFellowsFooter from "@/components/footer/footer"

function FellowCard({ fellow, onClick, index }) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), index * 50)
        return () => clearTimeout(timer)
    }, [index])

    return (
        <div
            className={`group relative cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            onClick={() => onClick(fellow)}
        >
            {/* Card */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100">
                {/* Image Section */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                    <img
                        src={fellow.image}
                        alt={fellow.name}
                        className="w-full h-full object-cover"
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

export default function SDGFellowsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedFellow, setSelectedFellow] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [isVisible, setIsVisible] = useState(false)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        setIsVisible(true)

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
        if (!searchQuery) return sdgFellows
        const query = searchQuery.toLowerCase()
        return sdgFellows.filter(
            (fellow) =>
                fellow.name.toLowerCase().includes(query) ||
                (fellow.country && fellow.country.toLowerCase().includes(query)) ||
                (fellow.title && fellow.title.toLowerCase().includes(query)) ||
                fellow.bio.toLowerCase().includes(query)
        )
    }, [searchQuery])

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
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
                        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-1.5 mb-3 border border-gray-200 shadow-md">
                                <Sparkles className="w-3 h-3 text-blue-600 animate-pulse" />
                                <span className="text-gray-700 text-xs font-semibold tracking-wide">
                                    SDG SynergyFellows Program
                                </span>
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                            </div>

                            <h1 className="text-2xl md:text-3xl font-bold mb-1 leading-tight">
                                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    SDG SynergyFellows
                                </span>
                            </h1>

                            <p className="text-gray-500 text-sm leading-relaxed max-w-xl mx-auto mb-4">
                                Contributing to <span className="font-semibold text-blue-600">Sustainable Development Goals</span> across various sectors and communities
                            </p>

                            <div className="max-w-lg mx-auto">
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 z-10" />
                                    <input
                                        type="text"
                                        placeholder="Search by name, country, or expertise..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-11 pr-11 py-2.5 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-xl shadow-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-sm"
                                    />
                                    {searchQuery && (
                                        <button
                                            onClick={() => setSearchQuery("")}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                                {searchQuery && (
                                    <p className="mt-2 text-gray-500 text-xs">
                                        Found <span className="font-bold text-blue-600">{filteredFellows.length}</span> {filteredFellows.length === 1 ? 'fellow' : 'fellows'}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                    {filteredFellows.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredFellows.map((fellow, index) => (
                                <FellowCard
                                    key={fellow.id}
                                    fellow={fellow}
                                    onClick={handleCardClick}
                                    index={index}
                                />
                            ))}
                        </div>
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
            </div>

            <ArinFellowsFooter />


        </>
    )
}