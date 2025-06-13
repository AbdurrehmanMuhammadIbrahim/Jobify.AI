import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { isAuthenticated, signOut } from "@/lib/actions/auth.action";
import { Button } from "@/components/ui/button";

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");
  

  return (
    <div className="root-layout">
      <nav className="flex">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="MockMate Logo" width={38} height={32} />
          <h2 className="text-primary-100">Jobify.ai</h2>
        </Link>

        <Button className="btn-primary ml-auto" onClick={signOut}>
          Logout
          </Button>
         

      </nav>

      {children}
    </div>
  );
};

export default Layout;