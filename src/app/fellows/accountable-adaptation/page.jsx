"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Search, X } from "lucide-react"
import { accountableFellows } from "../../../../data/fellows/accountable-adaptation-fellows"
import ARINNavbar from "@/components/navbar/navbar"
import ArinFellowsFooter from "@/components/footer/footer"

// Fellow Card Component with View Bio
function FellowCard({ fellow, onClick }) {
    return (
        <div
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-visible cursor-pointer group"
            onClick={() => onClick(fellow)}
        >
            <div className="relative h-40 bg-gradient-to-br from-[#030f41] to-[#48a4bb] rounded-t-xl">
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                    <img
                        src={fellow.image}
                        alt={fellow.name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </div>
            <div className="pt-20 pb-6 px-6 text-center">
                {/* FELLOW NAME */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                    {fellow.name}
                </h3>
                <p className="text-[#48a4bb] font-semibold text-sm mb-2">{fellow.title}</p>
                {/* FELLOW COUNTRY */}
                <p className="text-gray-600 text-sm mb-4">{fellow.country}</p>
                {/* VIEW BIO BUTTON */}
                <Button className="w-full bg-[#48a4bb] hover:bg-[#9bc8ce] text-white py-2 px-4 rounded-lg transition-all duration-300">
                    View Bio
                </Button>
            </div>
        </div>
    )
}

// Fellow Detail Modal
function FellowDetailModal({ fellow, isOpen, onClose }) {
    if (!isOpen || !fellow) return null

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div
                className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative bg-gradient-to-br from-[#030f41] to-[#48a4bb] p-8 text-white">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <div className="flex flex-col items-center">
                        <img
                            src={fellow.image}
                            alt={fellow.name}
                            className="w-32 h-32 rounded-full object-cover border-4 border-white mb-4"
                        />
                        <h2 className="text-3xl font-bold mb-2">{fellow.name}</h2>
                        <p className="text-[#9bc8ce] text-lg">{fellow.title}</p>
                        {/* FELLOW COUNTRY in Modal */}
                        <p className="text-white/90">{fellow.country}</p>
                    </div>
                </div>
                <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Biography</h3>
                    {/* FELLOW BIO - full biography text */}
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{fellow.bio}</p>
                </div>
            </div>
        </div>
    )
}

export default function AccountableAdaptationFellowsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedFellow, setSelectedFellow] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const fellowsPerPage = 12

    const handleCardClick = (fellow) => {
        setSelectedFellow(fellow)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSelectedFellow(null)
    }

    const filteredFellows = useMemo(() => {
        if (!searchQuery) {
            return accountableFellows
        }
        const lowerCaseQuery = searchQuery.toLowerCase()
        return accountableFellows.filter(
            (fellow) =>
                fellow.name.toLowerCase().includes(lowerCaseQuery) ||
                fellow.country.toLowerCase().includes(lowerCaseQuery) ||
                fellow.bio.toLowerCase().includes(lowerCaseQuery),
        )
    }, [searchQuery])

    const indexOfLastFellow = currentPage * fellowsPerPage
    const indexOfFirstFellow = indexOfLastFellow - fellowsPerPage
    const currentFellows = filteredFellows.slice(indexOfFirstFellow, indexOfLastFellow)
    const totalPages = Math.ceil(filteredFellows.length / fellowsPerPage)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value)
        setCurrentPage(1)
    }

    return (
        <>
            <ARINNavbar />
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
                <div className="bg-gradient-to-r from-[#030f41] via-[#2c5aa0] to-[#48a4bb] text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10">
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10"></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <Link href="/" passHref>
                                <Button
                                    variant="ghost"
                                    className="mb-4 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-full px-6"
                                >
                                    ← Back to Fellows
                                </Button>
                            </Link>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                                Accountable Adaptation
                                <span className="block text-[#9bc8ce]">Fellows</span>
                            </h1>
                            <p className="text-lg text-white/90 max-w-4xl mx-auto leading-relaxed mb-6">
                                Meet our dedicated fellows driving innovative research and policy solutions for climate resilience
                                across Africa. Each fellow brings unique expertise and passion to advance accountable adaptation
                                initiatives.
                            </p>
                            <div className="flex justify-center items-center space-x-8 text-white/80">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white">{accountableFellows.length}</div>
                                    <div className="text-sm">Total Fellows</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Search Bar */}
                    <div className="relative -mt-8 mb-12">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <div className="flex-1 max-w-md">
                                    <div className="relative">
                                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <Input
                                            type="text"
                                            placeholder="Search by name, country, or expertise..."
                                            value={searchQuery}
                                            onChange={handleSearchChange}
                                            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-[#48a4bb]/20 focus:border-[#48a4bb] transition-all duration-300"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 text-sm text-gray-600">
                                    <span className="hidden md:block">
                                        Showing {currentFellows.length} of {filteredFellows.length} fellows
                                    </span>
                                    {searchQuery && (
                                        <Button
                                            variant="ghost"
                                            onClick={() => setSearchQuery("")}
                                            className="text-gray-500 hover:text-gray-700 px-3 py-1 rounded-lg"
                                        >
                                            Clear search ×
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Fellows Grid */}
                    {filteredFellows.length > 0 ? (
                        <div className="pb-20">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                                {currentFellows.map((fellow, index) => (
                                    <div
                                        key={fellow.id}
                                        className="transform hover:scale-105 transition-all duration-300"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <FellowCard fellow={fellow} onClick={handleCardClick} />
                                    </div>
                                ))}
                            </div>

                            {/* Enhanced Pagination */}
                            {totalPages > 1 && (
                                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                                        <div className="text-sm text-gray-600">
                                            Page {currentPage} of {totalPages}
                                        </div>
                                        <div className="flex justify-center items-center space-x-2">
                                            <Button
                                                variant="outline"
                                                onClick={() => paginate(currentPage - 1)}
                                                disabled={currentPage === 1}
                                                className="border-[#48a4bb] text-[#48a4bb] hover:bg-[#48a4bb] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                                            >
                                                Previous
                                            </Button>

                                            <div className="flex space-x-1 max-w-xs overflow-hidden">
                                                {[...Array(Math.min(totalPages, 5))].map((_, index) => {
                                                    let pageNum
                                                    if (totalPages <= 5) {
                                                        pageNum = index + 1
                                                    } else if (currentPage <= 3) {
                                                        pageNum = index + 1
                                                    } else if (currentPage >= totalPages - 2) {
                                                        pageNum = totalPages - 4 + index
                                                    } else {
                                                        pageNum = currentPage - 2 + index
                                                    }

                                                    return (
                                                        <Button
                                                            key={pageNum}
                                                            variant={currentPage === pageNum ? "default" : "outline"}
                                                            onClick={() => paginate(pageNum)}
                                                            className={`w-10 h-10 ${currentPage === pageNum
                                                                ? "bg-[#48a4bb] hover:bg-[#9bc8ce] text-white shadow-lg"
                                                                : "border-[#48a4bb] text-[#48a4bb] hover:bg-[#48a4bb] hover:text-white"
                                                                } transition-all duration-300`}
                                                        >
                                                            {pageNum}
                                                        </Button>
                                                    )
                                                })}
                                            </div>

                                            <Button
                                                variant="outline"
                                                onClick={() => paginate(currentPage + 1)}
                                                disabled={currentPage === totalPages}
                                                className="border-[#48a4bb] text-[#48a4bb] hover:bg-[#48a4bb] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                                            >
                                                Next
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="max-w-md mx-auto">
                                <div className="text-6xl mb-6">🔍</div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">No Fellows Found</h3>
                                <p className="text-gray-600 mb-6">
                                    We couldn&apos;t find any Accountable Adaptation Fellows matching your search criteria.
                                </p>
                                <Button
                                    onClick={() => setSearchQuery("")}
                                    className="bg-[#48a4bb] hover:bg-[#9bc8ce] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                                >
                                    Clear Search
                                </Button>
                            </div>
                        </div>
                    )}
                </div>

                <FellowDetailModal fellow={selectedFellow} isOpen={isModalOpen} onClose={handleCloseModal} />
            </div>
            <ArinFellowsFooter />
        </>
    )
}