import { MenubarProtected } from "@/components/(protected)/menubar-protected";

export default function layoutProtected({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen max-w-[100vw] flex flex-col gap-8">
      <MenubarProtected />

      {children}
    </div>
  );
}
