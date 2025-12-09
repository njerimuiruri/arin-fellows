"use client"

import { Card, CardContent } from "@/components/ui/card"
import { User, Plus } from "lucide-react"
import Image from "next/image"

export default function FellowCard({ fellow, onClick }) {
    const handleClick = () => {
        onClick(fellow)
    }

    return (
        <Card
            className="group w-full max-w-lg mx-auto bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:-translate-y-3 border-0 overflow-hidden hover:bg-gradient-to-br hover:from-white hover:to-gray-50"
            onClick={handleClick}
        >
            <CardContent className="p-0 relative">
                <div className="relative w-full pt-8 pb-4">
                    <div className="relative w-48 h-48 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-[#48a4bb] to-[#030f41] ring-4 ring-white shadow-xl group-hover:ring-[#48a4bb]/20 transition-all duration-500 group-hover:scale-110">
                        <Image
                            src={fellow.image || "/placeholder.svg?height=192&width=192&query=professional headshot"}
                            alt={fellow.name}
                            width={192}
                            height={192}
                            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                            onError={(e) => {
                                e.target.style.display = "none"
                                e.target.nextElementSibling.style.display = "flex"
                            }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#48a4bb] to-[#030f41] hidden">
                            <User className="w-16 h-16 text-white opacity-70" />
                        </div>
                    </div>

                    <div className="absolute top-8 right-8 w-8 h-8 bg-[#48a4bb] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100 shadow-lg">
                        <Plus className="w-4 h-4 text-white" />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
