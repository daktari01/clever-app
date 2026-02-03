import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
      <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
        <SignIn
            appearance={{
              elements: {
                rootBox: "w-full max-w-md mx-auto",
                card: "shadow-xl border bg-card",
              },
            }}
            routing="path"
            path="/sign-in"
            signUpUrl="/sign-up"
            forceRedirectUrl="/dashboard"
        />
      </div>
  );
}