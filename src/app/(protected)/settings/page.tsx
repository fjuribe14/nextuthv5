import { auth } from "@/auth";

export default async function SettingsPage() {
  const session = await auth();

  return (
    <div className="container mx-auto flex flex-col gap-4 items-center justify-center">
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
