import { SignUp } from "@clerk/nextjs";
import AuthShell from "@/components/auth/AuthShell";

export default function SignUpPage() {
  return (
      <AuthShell
          title="Join Clever"
          subtitle="Create your account and start hiring smarter"
      >
        <SignUp
            routing="path"
            path="/sign-up"
            signInUrl="/sign-in"
            forceRedirectUrl="/dashboard"
            appearance={{
              elements: {
                card: "clerk-card",
                formFieldInput: "clerk-input",
                formButtonPrimary: "clerk-button",
                socialButtonsBlockButton: "clerk-social-btn",
                footerActionLink: "clerk-link",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
              },
            }}
        />
      </AuthShell>
  );
}
