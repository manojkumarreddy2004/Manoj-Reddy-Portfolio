
'use client';

import Link from 'next/link';
import { Github, Linkedin, Code, Video, FileText, ChevronDown } from 'lucide-react';
import { socialLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState, useEffect } from 'react';

export function AppHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certs' },
    { href: '#connect', label: 'Connect' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-lg border-b' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-headline font-bold text-xl tracking-tight">
          M Manoj Kumar Reddy
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
           <div className="hidden sm:flex items-center gap-1">
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
           </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>
                My Resume
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="https://drive.google.com/file/d/1aRFz4dxdP349UO6wUm8zFXwizDdvBZah/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Video className="mr-2 h-4 w-4" />
                  <span>Video Resume</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="https://drive.google.com/file/d/1Yxynmx4tdIHweIp5AW-oZIcutHQi1ult/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  <span>Resume (PDF)</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
