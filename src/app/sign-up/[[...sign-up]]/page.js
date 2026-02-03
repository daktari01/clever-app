import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
      <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
        <SignUp
            appearance={{
              elements: {
                rootBox: "w-full max-w-md mx-auto",
                card: "shadow-xl border bg-card",
              },
            }}
            routing="path"
            path="/sign-up"
            signInUrl="/sign-in"
            forceRedirectUrl="/dashboard"
        />
      </div>
  );
}