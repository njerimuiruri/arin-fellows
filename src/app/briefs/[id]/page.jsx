"use client"
import { ArrowLeft, Calendar, User, Clock, Share2, Tag, FileText, Download, ExternalLink } from "lucide-react"
import { briefs } from "../../../../data/brief/brief"
import Link from "next/link"
import { notFound } from "next/navigation"
import Image from "next/image"
import ARINNavbar from "@/components/navbar/navbar"
import ArinFellowsFooter from "@/components/footer/footer"

export default function BriefDetailPage({ params }) {
    const brief = briefs.find((b) => b.id === Number.parseInt(params.id))

    if (!brief) {
        notFound()
    }

    const getCategoryBadgeColor = (category) => {
        const map = {
            'Briefs': 'bg-blue-100 text-blue-800',
            'Friday Reviews': 'bg-emerald-100 text-emerald-800',
            'Energy': 'bg-amber-100 text-amber-800',
            'Governance': 'bg-purple-100 text-purple-800',
            'Biodiversity': 'bg-green-100 text-green-800',
            'Health': 'bg-rose-100 text-rose-800',
            'Agriculture': 'bg-lime-100 text-lime-800',
        }
        return map[category] || 'bg-gray-100 text-gray-700'
    }

    return (
        <>
            <ARINNavbar />
            <div className="min-h-screen bg-gray-50">

                {/* Compact header */}
                <div className="bg-white border-b border-gray-200 border-t-4 border-t-blue-600 shrink-0">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                        <Link href="/friday-reviews" className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-blue-600 transition-colors mb-3">
                            <ArrowLeft className="w-3.5 h-3.5" /> Back to Friday Reviews
                        </Link>

                        <div className="flex items-start justify-between gap-4 flex-wrap">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getCategoryBadgeColor(brief.category)}`}>
                                        {brief.category}
                                    </span>
                                    {brief.tags?.slice(0, 2).map((tag, i) => (
                                        <span key={i} className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full text-xs">
                                            <Tag className="w-2.5 h-2.5" />{tag}
                                        </span>
                                    ))}
                                </div>
                                <h1 className="text-lg font-bold text-blue-900 leading-snug line-clamp-2">
                                    {brief.title}
                                </h1>
                            </div>

                            {/* Action buttons — always visible */}
                            <div className="flex items-center gap-2 shrink-0">
                                {brief.fullBriefLink && (
                                    <a
                                        href={brief.fullBriefLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                                    >
                                        <Download className="w-3.5 h-3.5" /> Download PDF
                                    </a>
                                )}
                                <button
                                    onClick={() => typeof navigator !== 'undefined' && navigator.clipboard.writeText(window.location.href)}
                                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    <Share2 className="w-3.5 h-3.5" /> Share
                                </button>
                            </div>
                        </div>

                        {/* Meta row */}
                        <div className="flex flex-wrap gap-x-5 gap-y-1 mt-3 text-xs text-gray-500">
                            {brief.date && (
                                <span className="flex items-center gap-1.5">
                                    <Calendar className="w-3.5 h-3.5 text-blue-400" /> {brief.date}
                                </span>
                            )}
                            {brief.author && (
                                <span className="flex items-center gap-1.5">
                                    <User className="w-3.5 h-3.5 text-blue-400" />
                                    <span className="line-clamp-1 max-w-sm">{brief.author}</span>
                                </span>
                            )}
                            {brief.presentationDate && (
                                <span className="flex items-center gap-1.5">
                                    <Clock className="w-3.5 h-3.5 text-blue-400" /> Presented: {brief.presentationDate}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Document content */}
                <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-5">
                    {brief.image ? (
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                            <Image
                                src={brief.image}
                                alt={brief.title}
                                width={0}
                                height={0}
                                sizes="(max-width: 896px) 100vw, 896px"
                                className="w-full h-auto block"
                                priority
                            />
                        </div>
                    ) : (
                        <div className="bg-white rounded-xl border border-gray-200 p-6">
                            <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                                {brief.briefPreview || brief.shortDescription || 'No content available.'}
                            </div>
                        </div>
                    )}
                </div>

                {/* Navigation footer */}
                <div className="bg-white border-t border-gray-200 shrink-0">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4 flex-wrap">
                        <Link href="/friday-reviews" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-600 font-medium transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Back to Friday Reviews
                        </Link>
                        <div className="flex items-center gap-2">
                            {/* Prev brief */}
                            {brief.id > 1 && (
                                <Link href={`/briefs/${brief.id - 1}`}>
                                    <button className="px-3 py-2 text-xs font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                        ← Previous
                                    </button>
                                </Link>
                            )}
                            {/* Next brief */}
                            {brief.id < briefs.length && (
                                <Link href={`/briefs/${brief.id + 1}`}>
                                    <button className="px-3 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                                        Next →
                                    </button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <ArinFellowsFooter />
        </>
    )
}
