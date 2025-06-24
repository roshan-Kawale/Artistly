import { ArtistOnboardingForm } from "@/components/onboard/artist-onboarding-form"

export default function OnboardPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Join Artistly</h1>
        <p className="text-muted-foreground">Create your artist profile and start receiving booking requests</p>
      </div>
      <ArtistOnboardingForm />
    </div>
  )
}