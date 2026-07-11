import Link from "next/link";
import { Mail } from "lucide-react";
import { RobotHero } from "@/components/ui/robot-hero";

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <RobotHero backgroundText="CHASEMASTER">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
          <div className="border-t border-black/10 pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-black/70 font-medium">
              © {new Date().getFullYear()} ChaseMaster. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-black/70 font-medium">
              <span>Made with ❤️ in India</span>
            </div>
          </div>
        </div>
      </RobotHero>
    </footer>
  );
}
