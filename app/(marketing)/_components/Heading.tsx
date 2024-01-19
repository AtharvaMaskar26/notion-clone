"use client"

// Importing shadcn components
import { Button } from "@/components/ui/button"

// Importing Icons
import { ArrowRight } from "lucide-react"

export const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl">
                Your Ideas, Documents & Plan. Unified. Welcome to <span className="underline">Jotion</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Jotion is the connected workspace where <br />
                better, faster work happens
            </h3>
            <Button>
                Enter Notion
                <ArrowRight />
            </Button>
        </div>
    )
}