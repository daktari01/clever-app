import { SignIn } from "@clerk/nextjs";
import AuthShell from "@/components/auth/AuthShell";

export default function SignInPage() {
  return (
      <AuthShell
          title="Welcome Back"
          subtitle="Sign in to continue into Clever Recruitment"
      >
        <SignIn
            routing="path"
            path="/sign-in"
            signUpUrl="/sign-up"
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
