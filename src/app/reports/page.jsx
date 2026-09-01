"use client"

import { ArrowRight, Calendar, User, FileText, ExternalLink } from "lucide-react"
import { reports } from "../../../data/reports/reports"
import Link from "next/link"
import Image from "next/image"
import ARINNavbar from "@/components/navbar/navbar"
import ArinFellowsFooter from "@/components/footer/footer"

export default function ReportsPage() {
    return (
        <>
            <ARINNavbar />
            <div className="min-h-screen bg-white">

                {/* Header */}
                <div className="border-b border-gray-200 border-t-2 border-t-[#14234d]">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full text-xs font-semibold bg-[#14234d]/10 text-[#14234d]">
                            <FileText className="w-3.5 h-3.5" /> Reports
                        </span>
                        <h1 className="mt-2 text-2xl md:text-3xl font-extrabold text-[#14234d] leading-tight">
                            ARIN Reports
                        </h1>
                        <p className="mt-1 text-gray-500 text-sm max-w-2xl">
                            In-depth research reports from the Africa Research and Impact Network and its fellows.
                        </p>
                    </div>
                </div>

                {/* Reports list */}
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-4">
                    {reports.map((report) => (
                        <article
                            key={report.id}
                            className="group grid sm:grid-cols-[220px_1fr] gap-0 rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-[#14234d]/20 transition-all duration-300"
                        >
                            {/* Cover */}
                            <Link href={`/reports/${report.id}`} className="relative block aspect-[16/10] sm:aspect-auto bg-gray-100 overflow-hidden">
                                <Image
                                    src={report.image}
                                    alt={report.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, 220px"
                                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                                />
                            </Link>

                            {/* Body */}
                            <div className="p-5 flex flex-col">
                                <div className="flex items-center gap-2 mb-2 flex-wrap">
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-[#14234d]/10 text-[#14234d]">
                                        {report.category}
                                    </span>
                                    {report.tags?.slice(0, 2).map((tag, i) => (
                                        <span key={i} className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-gray-100 text-gray-500">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <Link href={`/reports/${report.id}`}>
                                    <h2 className="text-lg md:text-xl font-bold text-[#14234d] leading-snug group-hover:text-[#1a2f5f] transition-colors">
                                        {report.title}
                                    </h2>
                                </Link>
                                {report.subtitle && (
                                    <p className="mt-0.5 text-sm text-gray-500">{report.subtitle}</p>
                                )}

                                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-gray-500">
                                    {report.date && (
                                        <span className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5 text-gray-400" /> {report.date}
                                        </span>
                                    )}
                                    {report.author && (
                                        <span className="flex items-center gap-1.5">
                                            <User className="w-3.5 h-3.5 text-gray-400" />
                                            <span className="line-clamp-1">{report.author}</span>
                                        </span>
                                    )}
                                </div>

                                <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">
                                    {report.introduction}
                                </p>

                                <div className="mt-4 flex items-center gap-2.5">
                                    <Link
                                        href={`/reports/${report.id}`}
                                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-sm font-semibold text-white bg-[#14234d] hover:bg-[#1a2f5f] rounded-lg transition-colors"
                                    >
                                        Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                    </Link>
                                    <a
                                        href={report.pdfLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-[#14234d] transition-colors"
                                    >
                                        <ExternalLink className="w-3.5 h-3.5" /> Open PDF
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            <ArinFellowsFooter />
        </>
    )
}
