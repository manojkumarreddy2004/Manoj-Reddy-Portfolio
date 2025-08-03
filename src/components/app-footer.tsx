import Link from "next/link"
import { Github, Linkedin, Code } from "lucide-react"
import { socialLinks } from "@/lib/data"
import { Button } from "@/components/ui/button"

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
                <Code className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}
