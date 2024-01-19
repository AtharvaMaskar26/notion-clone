"use client"

import { Spinner } from "@/components/Spinner"
// Importing shadcn components
import { Button } from "@/components/ui/button"
import { SignInButton } from "@clerk/clerk-react"
import { useConvexAuth } from "convex/react"

// Importing Icons
import { ArrowRight } from "lucide-react"

import Link from "next/link"

export const Heading = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();

    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl">
                Your Ideas, Documents & Plan. Unified. Welcome to <span className="underline">Jotion</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Jotion is the connected workspace where <br />
                better, faster work happens
            </h3>
            {
                isLoading && (
                    <div className="w-full flex items-center justify-center">
                        <Spinner
                            size="lg"
                        />
                    </div>
                )
            }
            {
                isAuthenticated && !isLoading && (
                    <Button asChild>
                        <Link
                            href="/documents"
                        >
                        Enter Notion
                        <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                    </Button>
                )
            }
            {
                !isAuthenticated && !isLoading && (
                    <SignInButton>
                        <Button>
                            Get Jotion for Free
                            <ArrowRight
                                className="h-4 w-4"
                            />
                        </Button>
                    </SignInButton>
                )
            }
        </div>
    )
}