"use client"
// Importing Custom hooks
import { useScrollTop } from "@/hooks/use-scroll-top"

import { ModeToggle } from "@/components/mode-toggle";

// Importing Shadcn component
import { cn } from "@/lib/utils";

// Importing Marketing Components
import { Logo } from "./Logo";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/Spinner";

import Link from "next/link";

export const Navbar = () => {
    const scrolled = useScrollTop();
    const {
        isAuthenticated,
        isLoading
    } = useConvexAuth();

    return (
        <div className={cn(
            "z-50 bg-background dark:bg-[#1f1f1f] fixed top-0 flex items-cetner w-full p-6",
            scrolled && "border-b shadow-sm"
        )}>
            <Logo />
            <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
                {
                    isLoading && (
                        <Spinner />
                    )
                }
                {
                    !isAuthenticated && !isLoading && (
                        <>
                            <SignInButton>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                >
                                    Log In
                                </Button>
                            </SignInButton>
                            <SignInButton>
                                <Button
                                    size="sm"
                                >
                                    Get Jotion Free
                                </Button>
                            </SignInButton>
                        </>

                    )
                }
                {
                    isAuthenticated && !isLoading && (
                        <>
                            <Button
                                variant="ghost"
                                size="sm"
                                asChild
                            >
                                <Link
                                    href="/documents"
                                >
                                    Enter Jotion
                                </Link>
                            </Button>
                            <UserButton
                                afterSignOutUrl="/"
                            />
                        </>
                    )
                }
                <ModeToggle />
            </div>
        </div>
    )
} 