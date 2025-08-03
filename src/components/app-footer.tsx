import Link from "next/link"
import { Github, Linkedin, Code } from "lucide-react"
import { socialLinks } from "@/lib/data"
import { Button } from "@/components/ui/button"

const HackerRankIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <title>HackerRank</title>
      <path d="M12.012 24a12 12 0 1 1 0-24 12 12 0 0 1 0 24zM9.162 15.607V12.55h-2.313v3.057h2.313zm5.701 0V12.55h-2.313v3.057h2.313zM9.09 11.463h2.52V8.41H9.09v6.04h2.52v-2.977h.072v2.977h2.52V8.41h-2.52v2.977h-.072V8.41H9.09z" />
    </svg>
  );

export function AppFooter() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} M Manoj Kumar Reddy. All Rights Reserved.
        </p>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href={socialLinks.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
              <Code className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href={socialLinks.hackerrank} target="_blank" rel="noopener noreferrer" aria-label="HackerRank">
                <HackerRankIcon className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}
