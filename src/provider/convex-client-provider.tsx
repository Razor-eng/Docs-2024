"use client";

import { Authenticated, AuthLoading, ConvexReactClient, Unauthenticated } from "convex/react";
import { ReactNode } from "react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ClerkProvider, SignIn, useAuth } from "@clerk/clerk-react";
import { FullscreenLoader } from "@/components/fullscreen-loader";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
const CLERK_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!;

export function ConvexClientProvider({ children }: { children: ReactNode }) {
    return (
        <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
            <ConvexProviderWithClerk
                useAuth={useAuth}
                client={convex}
            >
                <AuthLoading>
                    <FullscreenLoader />
                </AuthLoading>
                <Unauthenticated>
                    <div className="flex flex-col items-center justify-center min-h-screen">
                        <SignIn routing="hash" />
                    </div>
                </Unauthenticated>
                <Authenticated>
                    {children}
                </Authenticated>
            </ConvexProviderWithClerk>
        </ClerkProvider>
    )
}