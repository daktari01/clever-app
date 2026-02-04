import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 p-8 relative overflow-hidden">

        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        </div>

        <Card className="rounded-2xl border border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-md p-12 text-center max-w-md">
          <CardHeader>
            <CardTitle className="text-6xl font-extrabold text-blue-600 dark:text-blue-400 mb-4">
              404
            </CardTitle>
            <p className="text-lg text-muted-foreground mb-6">
              Oops! The page you’re looking for doesn’t exist.
            </p>
          </CardHeader>

          <CardContent className="flex flex-col gap-4">
            <Link href="/dashboard">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Go Back Home
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">
              Or check the URL for typos
            </p>
          </CardContent>
        </Card>
      </div>
  );
}
