import { Dialog, DialogContent } from "@/components/ui/dialog"
import Image from "next/image"

export default function FellowDetailModal({ fellow, isOpen, onClose }) {
    if (!fellow) return null

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="space-y-6">
                    {/* Fellow Image */}
                    <div className="flex justify-center">
                        <div className="relative w-48 h-48 overflow-hidden rounded-full bg-gray-100">
                            <Image
                                src={fellow.image || "/placeholder.svg?height=192&width=192&query=professional headshot"}
                                alt={fellow.name}
                                width={192}
                                height={192}
                                className="w-full h-full object-cover object-center"
                                onError={(e) => {
                                    e.target.src = "/placeholder.svg?key=8on07"
                                }}
                            />
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
