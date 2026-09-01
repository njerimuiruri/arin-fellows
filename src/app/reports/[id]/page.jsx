"use client"

import { ArrowLeft, Calendar, User, Tag, ExternalLink, Share2 } from "lucide-react"
import { reports } from "../../../../data/reports/reports"
import Link from "next/link"
import { notFound } from "next/navigation"
import Image from "next/image"
import ARINNavbar from "@/components/navbar/navbar"
import ArinFellowsFooter from "@/components/footer/footer"

export default function ReportDetailPage({ params }) {
    const report = reports.find((r) => r.id === Number.parseInt(params.id))

    if (!report) {
        notFound()
    }

    return (
        <>
            <ARINNavbar />
            <div className="min-h-screen bg-white">

                {/* Header */}
                <div className="border-b border-gray-200 border-t-2 border-t-[#14234d]">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                        <Link href="/reports" className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#14234d] transition-colors mb-3">
                            <ArrowLeft className="w-3.5 h-3.5" /> Back to Reports
                        </Link>

                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-[#14234d]/10 text-[#14234d]">
                                {report.category}
                            </span>
                            {report.tags?.slice(0, 3).map((tag, i) => (
                                <span key={i} className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full text-xs">
                                    <Tag className="w-2.5 h-2.5" />{tag}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-2xl md:text-3xl font-extrabold text-[#14234d] leading-tight">
                            {report.title}
                        </h1>
                        {report.subtitle && (
                            <p className="mt-1 text-gray-500 text-sm">{report.subtitle}</p>
                        )}

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-gray-500">
                            {report.date && (
                                <span className="flex items-center gap-1.5">
                                    <Calendar className="w-3.5 h-3.5 text-gray-400" /> {report.date}
                                </span>
                            )}
                            {report.author && (
                                <span className="flex items-center gap-1.5">
                                    <User className="w-3.5 h-3.5 text-gray-400" /> {report.author}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="grid md:grid-cols-[260px_1fr] gap-6 items-start">

                        {/* Cover image */}
                        <div className="rounded-xl border border-gray-200 overflow-hidden bg-white">
                            <Image
                                src={report.image}
                                alt={report.title}
                                width={0}
                                height={0}
                                sizes="(max-width: 768px) 100vw, 260px"
                                className="w-full h-auto block"
                                priority
                            />
                        </div>

                        {/* Introduction */}
                        <div className="rounded-xl border border-gray-200 p-5 md:p-6">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="w-1 h-4 rounded-full bg-[#14234d]" />
                                <h2 className="text-sm font-bold text-[#14234d] uppercase tracking-wide">Introduction</h2>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-[15px]">
                                {report.introduction}
                            </p>

                            <div className="mt-4 flex flex-wrap items-center gap-2.5">
                                <a
                                    href={report.pdfLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#14234d] hover:bg-[#1a2f5f] rounded-lg transition-colors"
                                >
                                    <ExternalLink className="w-4 h-4" /> Read More
                                </a>
                                <button
                                    onClick={() => typeof navigator !== 'undefined' && navigator.clipboard.writeText(window.location.href)}
                                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    <Share2 className="w-4 h-4" /> Share
                                </button>
                            </div>
                            <p className="mt-2 text-xs text-gray-400">Opens the full report (PDF) in a new tab.</p>
                        </div>
                    </div>

                    <div className="mt-6">
                        <Link href="/reports" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#14234d] font-medium transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Back to Reports
                        </Link>
                    </div>
                </div>
            </div>
            <ArinFellowsFooter />
        </>
    )
}
