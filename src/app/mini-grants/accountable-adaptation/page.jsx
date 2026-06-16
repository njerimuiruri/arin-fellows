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
            <div className="min-h-screen bg-white">
                <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

                    <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <Button
                                variant="ghost"
                                onClick={handleBackClick}
                                className="mb-6 text-white/60 hover:text-white hover:bg-white/5 border border-white/10 transition-all duration-300 rounded-lg px-6 py-2"
                            >
                                ← Back to Mini-grants
                            </Button>

                            <div className="mb-4">
                                <h1 className="text-4xl lg:text-5xl font-extrabold mb-3 leading-tight tracking-tight">
                                    <span className="text-white">Accountable Adaptation</span>
                                    <span className="block text-2xl lg:text-3xl text-slate-300 mt-2">Fellowship</span>
                                </h1>
                            </div>

                            <div className="max-w-3xl mx-auto mb-8">
                                <p className="text-lg text-white/70 leading-relaxed">
                                    A mini-grants programme for early to mid-career researchers from the Global South focusing on accountability mechanisms for climate change adaptation in Africa.
                                </p>
                            </div>

                            <div className="flex flex-wrap justify-center items-center gap-4 text-white/80">
                                <div className="flex items-center space-x-3 bg-white/10 border border-white/10 rounded-lg px-5 py-2.5">
                                    <DollarSign className="w-5 h-5 text-white/60" />
                                    <div>
                                        <div className="text-base font-semibold text-white">GBP 4,500</div>
                                        <div className="text-xs text-white/50">Maximum Grant</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 bg-white/10 border border-white/10 rounded-lg px-5 py-2.5">
                                    <Award className="w-5 h-5 text-white/60" />
                                    <div>
                                        <div className="text-base font-semibold text-white">8 Grants</div>
                                        <div className="text-xs text-white/50">Available</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 bg-white/10 border border-white/10 rounded-lg px-5 py-2.5">
                                    <Calendar className="w-5 h-5 text-white/60" />
                                    <div>
                                        <div className="text-base font-semibold text-white">Jan 1, 2025</div>
                                        <div className="text-xs text-white/50">Deadline</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    {/* Post Info */}
                    <div className="mb-8 text-center">
                        <div className="inline-flex items-center space-x-4 text-gray-600 bg-slate-100 rounded-lg px-6 py-3">
                            <span>Posted on November 18, 2024</span>
                            <span>•</span>
                            <span>Categories: MG</span>
                            <span>•</span>
                            <span>No comments yet</span>
                        </div>
                    </div>

                    {/* Background Section */}
                    <div className="mb-8">
                        <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-200">
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center mr-4">
                                    <FileText className="w-5 h-5 text-slate-700" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">Background</h2>
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-200">
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center mr-4">
                                    <Mail className="w-5 h-5 text-slate-700" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">Application process</h2>
                            </div>
                            <div className="text-gray-700 leading-relaxed space-y-4">
                                <p>
                                    Complete applications should be sent to{' '}
                                    <button
                                        onClick={() => handleEmailClick('E.akinyi@arin-africa.org')}
                                        className="font-semibold text-slate-800 hover:text-slate-900 underline transition-colors duration-200"
                                    >
                                        E.akinyi@arin-africa.org
                                    </button>{' '}
                                    and{' '}
                                    <button
                                        onClick={() => handleEmailClick('irdr.accountableadaptation@ucl.ac.uk')}
                                        className="font-semibold text-slate-800 hover:text-slate-900 underline transition-colors duration-200"
                                    >
                                        irdr.accountableadaptation@ucl.ac.uk
                                    </button>
                                    , copying{' '}
                                    <button
                                        onClick={() => handleEmailClick('e.kowenje@arin-africa.org')}
                                        className="font-semibold text-slate-800 hover:text-slate-900 underline transition-colors duration-200"
                                    >
                                        e.kowenje@arin-africa.org
                                    </button>
                                    . The applications should be sent by Wednesday 1st January 2025.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-200">
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center mr-4">
                                    <Clock className="w-5 h-5 text-slate-700" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">Application deadline</h2>
                            </div>
                            <div className="text-center">
                                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                                    <div className="text-4xl font-bold text-slate-800 mb-2">1st January 2025</div>
                                    <div className="text-gray-500 text-lg">Wednesday</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Application Requirements */}
                    <div className="mb-8">
                        <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-200">
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center mr-4">
                                    <FileText className="w-5 h-5 text-slate-700" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">Applications should include:</h2>
                            </div>
                            <div className="space-y-3">
                                {[
                                    "Written proposal of no more than 2 pages;",
                                    "Short indicative budget detailing direct costs if needed;",
                                    "Proof of academic qualifications;",
                                    "Two letters of recommendation;",
                                    "CV and letter of motivation"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2.5 flex-shrink-0"></div>
                                        <p className="text-gray-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Review Criteria */}
                    <div className="mb-8">
                        <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-200">
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center mr-4">
                                    <Target className="w-5 h-5 text-slate-700" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">Applications will be reviewed against the following criteria:</h2>
                            </div>
                            <div className="space-y-3">
                                {[
                                    "Originality and contribution;",
                                    "Feasibility of proposed work;",
                                    "Alignment with Accountable Adaptation dimensions of accountability (figure 1);",
                                    "Track record and motivation of applicant."
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2.5 flex-shrink-0"></div>
                                        <p className="text-gray-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Documents */}
                    <div className="mb-8">
                        <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-200">
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center mr-4">
                                    <Download className="w-5 h-5 text-slate-700" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">Please download the relevant documents below:</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                                        className="bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all duration-200 cursor-pointer group"
                                        onClick={() => window.open(doc.url, '_blank')}
                                    >
                                        <div className="flex items-center justify-between">
                                            <h3 className="font-semibold text-gray-800 group-hover:text-slate-900">{doc.name}</h3>
                                            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-600" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact and Timeline */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-200">
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center mr-4">
                                    <Mail className="w-5 h-5 text-slate-700" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">Contact</h2>
                            </div>
                            <div className="text-gray-700 leading-relaxed">
                                <p className="mb-4">
                                    If you have any further clarifications, you can get in touch with{' '}
                                    <button
                                        onClick={() => handleEmailClick('E.akinyi@arin-africa.org')}
                                        className="font-semibold text-slate-800 hover:text-slate-900 underline transition-colors duration-200"
                                    >
                                        E.akinyi@arin-africa.org
                                    </button>{' '}
                                    and{' '}
                                    <button
                                        onClick={() => handleEmailClick('irdr.accountableadaptation@ucl.ac.uk')}
                                        className="font-semibold text-slate-800 hover:text-slate-900 underline transition-colors duration-200"
                                    >
                                        irdr.accountableadaptation@ucl.ac.uk
                                    </button>
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-200">
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center mr-4">
                                    <Calendar className="w-5 h-5 text-slate-700" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">Timeline</h2>
                            </div>
                            <div className="space-y-3">
                                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                                    <div className="font-semibold text-gray-800 mb-1">Friday 17th January 2025</div>
                                    <p className="text-gray-600 text-sm">Successful applicants will be notified.</p>
                                </div>
                                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                                    <div className="font-semibold text-gray-800 mb-1">Friday 31st January 2025</div>
                                    <p className="text-gray-600 text-sm">Re-submission deadline for successful applicants with feedback.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-200">
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