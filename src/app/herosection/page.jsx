'use client';
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, BookOpen, ArrowRight, Award, Globe, Leaf } from "lucide-react"

export default function MultiFellowshipHero() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }
    };

    return (
        <>
            <div className="relative min-h-[85vh] overflow-hidden">

                <div className="absolute inset-0 bg-[#030f41]/80 z-15"></div>
                <div className="absolute inset-0 opacity-20 z-10">
                    <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-[#9bc8ce] blur-3xl animate-pulse"></div>
                    <div className="absolute top-40 right-32 w-24 h-24 rounded-full bg-[#48a4bb] blur-2xl animate-pulse delay-1000"></div>
                    <div className="absolute bottom-32 left-1/3 w-40 h-40 rounded-full bg-[#9bc8ce] blur-3xl animate-pulse delay-2000"></div>
                </div>

                <div className="relative z-20 container mx-auto px-6 py-12 min-h-[85vh] flex items-center">
                    <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                        <div className="space-y-8 order-1 lg:order-1">
                            <div className="space-y-6">
                                <div className="inline-flex items-center space-x-2 bg-[#9bc8ce]/10 rounded-full px-4 py-2 border border-[#9bc8ce]/20 backdrop-blur-sm">
                                    <div className="w-2 h-2 rounded-full bg-[#9bc8ce] animate-pulse"></div>
                                    <p className="text-[#9bc8ce] text-sm font-medium tracking-wide">
                                        Africa Research & Impact Network
                                    </p>
                                </div>

                                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                                    Empowering
                                    <br />
                                    <span className="text-[#48a4bb] bg-gradient-to-r from-[#48a4bb] to-[#9bc8ce] bg-clip-text text-transparent animate-pulse">
                                        AFRICAN RESEARCHERS
                                    </span>
                                </h1>

                                <p className="text-[#9bc8ce] text-lg leading-relaxed max-w-lg opacity-90">
                                    Discover our diverse community of fellows from SDG, ARIN, and Accountable Adaptation programs,
                                    driving transformative research across 38+ Sub-Saharan African countries.
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    <div className="flex items-center space-x-2 bg-blue-500/20 rounded-full px-3 py-2 border border-blue-400/30">
                                        <Globe className="w-4 h-4 text-blue-400" />
                                        <span className="text-blue-300 text-sm font-medium">SDG Fellows</span>
                                    </div>
                                    <div className="flex items-center space-x-2 bg-purple-500/20 rounded-full px-3 py-2 border border-purple-400/30">
                                        <Award className="w-4 h-4 text-purple-400" />
                                        <span className="text-purple-300 text-sm font-medium">ARIN Fellows</span>
                                    </div>
                                    <div className="flex items-center space-x-2 bg-green-500/20 rounded-full px-3 py-2 border border-green-400/30">
                                        <Leaf className="w-4 h-4 text-green-400" />
                                        <span className="text-green-300 text-sm font-medium">Adaptation Fellows</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4">

                                <Button
                                    size="lg"
                                    variant="outline"
                                    onClick={() => scrollToSection('fellowship-activities')}
                                    className="border-2 border-[#9bc8ce] text-[#9bc8ce] hover:bg-[#9bc8ce] hover:text-[#030f41] font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 bg-transparent hover:shadow-lg cursor-pointer"
                                >
                                    Explore Fellows Activities
                                </Button>
                                <Button
                                    size="lg"
                                    onClick={() => scrollToSection('fellows-overview')}
                                    className="group bg-[#48a4bb] hover:bg-[#9bc8ce] text-white font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                                >
                                    EXPLORE FELLOWS
                                    <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </Button>
                            </div>
                        </div>

                        <div className="relative flex justify-center lg:justify-end order-2 lg:order-2">
                            <div className="relative group">
                                <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px] transform transition-transform duration-700 hover:scale-105">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#48a4bb]/30 to-[#9bc8ce]/30 blur-xl animate-pulse"></div>

                                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:shadow-[0_0_50px_rgba(72,164,187,0.5)]">
                                        <Image
                                            src="/img/africa-fellows.jpg"
                                            alt="African Fellowship Network - SDG, ARIN & Adaptation Fellows"
                                            fill
                                            className="object-contain transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>

                                    <div className="absolute -top-4 -right-4 w-6 h-6 rounded-full bg-[#9bc8ce] animate-bounce"></div>
                                    <div className="absolute -bottom-6 -left-6 w-8 h-8 rounded-full bg-[#48a4bb] opacity-70 animate-bounce delay-500"></div>
                                    <div className="absolute top-1/4 -left-3 w-4 h-4 rounded-full bg-[#9bc8ce] animate-ping"></div>
                                </div>

                                <div className="absolute top-4 right-4 transform transition-transform duration-300 hover:scale-110">
                                    <div className="bg-[#48a4bb]/90 backdrop-blur-sm rounded-full p-3 border border-[#9bc8ce]/20 shadow-lg">
                                        <div className="flex items-center space-x-2">
                                            <Users className="w-4 h-4 text-white animate-pulse" />
                                            <span className="text-white text-sm font-semibold">200+</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute top-1/3 -right-8 space-y-2">
                                    <div className="bg-blue-500/80 backdrop-blur-sm rounded-lg p-2 border border-blue-400/30 shadow-lg">
                                        <Globe className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="bg-purple-500/80 backdrop-blur-sm rounded-lg p-2 border border-purple-400/30 shadow-lg">
                                        <Award className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="bg-green-500/80 backdrop-blur-sm rounded-lg p-2 border border-green-400/30 shadow-lg">
                                        <Leaf className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 right-8 z-30">
                    <Card className="bg-gradient-to-br from-orange-500 to-orange-600 backdrop-blur-sm border-0 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(251,146,60,0.6)]">
                        <CardContent className="p-6 text-center">
                            <div className="flex items-center justify-center mb-3">
                                <Award className="w-8 h-8 text-white mr-2 animate-pulse" />
                                <BookOpen className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-white">
                                <p className="text-xs font-medium mb-1 opacity-90">FELLOWSHIP PROGRAMS</p>
                                <p className="text-xs opacity-90 mb-2">SPANNING ACROSS</p>
                                <p className="text-3xl font-bold mb-1">38+</p>
                                <p className="text-xs opacity-80">COUNTRIES</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-blue-400 animate-ping"></div>
                <div className="absolute bottom-1/3 left-1/4 w-3 h-3 rounded-full bg-purple-400 animate-pulse"></div>
                <div className="absolute top-1/2 right-1/3 w-1 h-1 rounded-full bg-green-400 animate-bounce"></div>
            </div>
        </>
    )
}