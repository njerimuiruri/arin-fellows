'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FileText, Users, Calendar, MapPin, DollarSign, BookOpen, ArrowRight, Globe, Award, Clock, Target, Lightbulb, ExternalLink, Download, Mail } from 'lucide-react';
import ARINNavbar from '@/components/navbar/navbar';
import ArinFellowsFooter from '@/components/footer/footer';

export default function AccountableAdaptationPage() {
    const handleBackClick = () => {
        window.location.href = '/mini-grants';
    };

    const handleEmailClick = (email) => {
        window.location.href = `mailto:${email}`;
    };

    return (
        <>
            <ARINNavbar />
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
                <div className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900 text-white overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-500/10 to-teal-400/20"></div>
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl animate-pulse"></div>
                            <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
                            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-teal-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
                        </div>
                    </div>

                    <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <Button
                                variant="ghost"
                                onClick={handleBackClick}
                                className="mb-8 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-full px-8 py-2"
                            >
                                ← Back to Mini-grants
                            </Button>

                            <div className="mb-8">
                                <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                                    <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
                                        Accountable Adaptation
                                    </span>
                                    <span className="block text-3xl lg:text-4xl text-cyan-300 mt-2">
                                        Fellowship
                                    </span>
                                </h1>
                            </div>

                            <div className="max-w-4xl mx-auto mb-12">
                                <p className="text-xl lg:text-2xl text-white/90 leading-relaxed font-light">
                                    A mini-grants programme for early to mid-career researchers from the Global South focusing on accountability mechanisms for climate change adaptation in Africa.
                                </p>
                            </div>

                            <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
                                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                                    <DollarSign className="w-6 h-6 text-cyan-300" />
                                    <div>
                                        <div className="text-lg font-semibold text-white">GBP 4,500</div>
                                        <div className="text-sm text-white/70">Maximum Grant</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                                    <Award className="w-6 h-6 text-cyan-300" />
                                    <div>
                                        <div className="text-lg font-semibold text-white">8 Grants</div>
                                        <div className="text-sm text-white/70">Available</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                                    <Calendar className="w-6 h-6 text-cyan-300" />
                                    <div>
                                        <div className="text-lg font-semibold text-white">Jan 1, 2025</div>
                                        <div className="text-sm text-white/70">Deadline</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    {/* Post Info */}
                    <div className="mb-8 text-center">
                        <div className="inline-flex items-center space-x-4 text-gray-600 bg-white/50 backdrop-blur-sm rounded-full px-6 py-3">
                            <span>Posted on November 18, 2024</span>
                            <span>•</span>
                            <span>Categories: MG</span>
                            <span>•</span>
                            <span>No comments yet</span>
                        </div>
                    </div>

                    {/* Background Section */}
                    <div className="mb-20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                                    <FileText className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">Background</h2>
                            </div>
                            <div className="text-gray-700 leading-relaxed space-y-4">
                                <p>
                                    The Accountable Adaptation Initiative is launching a mini-grants programme. The programme is open to early to mid-career researchers from the Global South either based at African Universities and/or researchers working on topics focusing on adaptation in Africa. The programme is being run by the Africa Research and Impact Network (ARIN) and University College London (UCL). We are offering up to eight small grants for research into novel accountability mechanisms relating to climate change adaptation in Africa. The maximum grant size available is GBP 4,500.
                                </p>
                                <p>
                                    Researchers will design and implement projects with overall responsibility for the research and grant management with the support of an academic mentor. ARIN and UCL will provide ongoing support, opportunities for networking and an in-person write shop to develop a publication. The projects will explore specific examples of improving accountability for adaptation in Africa.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Application Process and Deadline */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">Application process</h2>
                            </div>
                            <div className="text-gray-700 leading-relaxed space-y-4">
                                <p>
                                    Complete applications should be sent to{' '}
                                    <button
                                        onClick={() => handleEmailClick('E.akinyi@arin-africa.org')}
                                        className="font-semibold text-purple-600 hover:text-purple-700 underline transition-colors duration-200"
                                    >
                                        E.akinyi@arin-africa.org
                                    </button>{' '}
                                    and{' '}
                                    <button
                                        onClick={() => handleEmailClick('irdr.accountableadaptation@ucl.ac.uk')}
                                        className="font-semibold text-purple-600 hover:text-purple-700 underline transition-colors duration-200"
                                    >
                                        irdr.accountableadaptation@ucl.ac.uk
                                    </button>
                                    , copying{' '}
                                    <button
                                        onClick={() => handleEmailClick('e.kowenje@arin-africa.org')}
                                        className="font-semibold text-purple-600 hover:text-purple-700 underline transition-colors duration-200"
                                    >
                                        e.kowenje@arin-africa.org
                                    </button>
                                    . The applications should be sent by Wednesday 1st January 2025.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mr-4">
                                    <Clock className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">Application deadline</h2>
                            </div>
                            <div className="text-center">
                                <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-2xl p-6 border border-red-200/50">
                                    <div className="text-4xl font-bold text-red-600 mb-2">1st January 2025</div>
                                    <div className="text-gray-600 text-lg">Wednesday</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Application Requirements */}
                    <div className="mb-20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mr-4">
                                    <FileText className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">Applications should include:</h2>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Written proposal of no more than 2 pages;",
                                    "Short indicative budget detailing direct costs if needed;",
                                    "Proof of academic qualifications;",
                                    "Two letters of recommendation;",
                                    "CV and letter of motivation"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                                        <p className="text-gray-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Review Criteria */}
                    <div className="mb-20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4">
                                    <Target className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">Applications will be reviewed against the following criteria:</h2>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Originality and contribution;",
                                    "Feasibility of proposed work;",
                                    "Alignment with Accountable Adaptation dimensions of accountability (figure 1);",
                                    "Track record and motivation of applicant."
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-3 flex-shrink-0"></div>
                                        <p className="text-gray-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Documents */}
                    <div className="mb-20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                                    <Download className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">Please download the relevant documents below:</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    {
                                        name: "Concept Note",
                                        url: "https://www.arin-africa.org/wp-content/uploads/2024/11/Accountable-Adaptation-Fellow_Call-for-proposals_NOV20.pdf"
                                    },
                                    {
                                        name: "Person Specification",
                                        url: "https://www.arin-africa.org/wp-content/uploads/2024/11/Accountable-Adaptation-Fellow_Call-for-proposals_NOV20.pdf"
                                    },
                                    {
                                        name: "Research Proposal Guidance",
                                        url: "https://www.arin-africa.org/wp-content/uploads/2024/11/Accountable-Adaptation-Fellow_Call-for-proposals_NOV20.pdf"
                                    }
                                ].map((doc, index) => (
                                    <div
                                        key={index}
                                        className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-200/50 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                                        onClick={() => window.open(doc.url, '_blank')}
                                    >
                                        <div className="flex items-center justify-between">
                                            <h3 className="font-semibold text-gray-800 group-hover:text-cyan-600 transition-colors duration-300">{doc.name}</h3>
                                            <ExternalLink className="w-5 h-5 text-cyan-500 group-hover:text-cyan-600 transition-colors duration-300" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact and Timeline */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mr-4">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">Contact</h2>
                            </div>
                            <div className="text-gray-700 leading-relaxed">
                                <p className="mb-4">
                                    If you have any further clarifications, you can get in touch with{' '}
                                    <button
                                        onClick={() => handleEmailClick('E.akinyi@arin-africa.org')}
                                        className="font-semibold text-emerald-600 hover:text-emerald-700 underline transition-colors duration-200"
                                    >
                                        E.akinyi@arin-africa.org
                                    </button>{' '}
                                    and{' '}
                                    <button
                                        onClick={() => handleEmailClick('irdr.accountableadaptation@ucl.ac.uk')}
                                        className="font-semibold text-emerald-600 hover:text-emerald-700 underline transition-colors duration-200"
                                    >
                                        irdr.accountableadaptation@ucl.ac.uk
                                    </button>
                                </p>
                            </div>
                        </div>

                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-4">
                                    <Calendar className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">Timeline</h2>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 border border-orange-200/50">
                                    <div className="font-semibold text-gray-800 mb-1">Friday 17th January 2025</div>
                                    <p className="text-gray-700 text-sm">Successful applicants will be notified.</p>
                                </div>
                                <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-4 border border-red-200/50">
                                    <div className="font-semibold text-gray-800 mb-1">Friday 31st January 2025</div>
                                    <p className="text-gray-700 text-sm">Re-submission deadline for successful applicants with feedback.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-16">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <div className="text-gray-700 leading-relaxed space-y-4">
                                <p>
                                    Successful applicants will be notified by <strong>Friday 17th January 2025</strong>. Successful applicants will receive written feedback on their proposed research design and budget, where necessary, and invited to re-submit reflecting any changes by <strong>Friday 31st January 2025.</strong>
                                </p>
                                <p>
                                    Please note that unsuccessful applicants will not receive individual feedback.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ArinFellowsFooter />
        </>
    );
}