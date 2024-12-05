import Link from "next/link";
import { auth, signOut, signIn } from "../../../auth";
import { BadgePlus, LogOut, LucideOctagon } from "lucide-react";
//import Image from "next/image";
//import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = async () => {
  // ? Server rendered component
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <LucideOctagon fill="red" size={32} /> <span className="text-red-500 font-bold text-xl">PROJECT PULSE</span>
          {/* <Image src="/logo.png" alt="logo" width={144} height={30} /> */}
        </Link>

        <div className="flex items-center gap-5 text-black">
          {
            session && session?.user ? (
              <>
                <Link href="/startup/create">
                  <span className="max-sm:hidden">Create</span>
                  <BadgePlus className="size-6 sm:hidden" />
                </Link>

                <form
                  action={async () => {
                    "use server"; // * Server rendered component
                    await signOut({ redirectTo: "/" });
                  }}
                >
                  <button type="submit">
                    <span className="max-sm:hidden">Logout</span>
                    <LogOut className="size-6 sm:hidden text-red-500" />
                  </button>
                </form>
                <Link href={`/user/${session?.user?.id}`}>
                  <span>{session?.user?.name}</span>
                  {/* 
                <Avatar className="size-10">
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                  />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
                */}
                </Link>
              </>
            ) : (
              <form
                action={async () => {
                  "use server"; // * Server rendered component
                  await signIn("github");
                }}
              >
                <button type="submit">Login</button>
              </form>
            )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;