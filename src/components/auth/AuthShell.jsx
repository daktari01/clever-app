export default function AuthShell({ title, subtitle, children }) {
  return (
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 px-6">

        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        </div>

        <div className="w-full max-w-md">

          <div className="mb-6 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {title}
            </h1>

            <p className="mt-2 text-sm text-muted-foreground">
              {subtitle}
            </p>
          </div>

          <div className="flex justify-center">
            {children}
          </div>
        </div>
      </div>
  );
}
