import { AppHeader } from '@/components/app-header';
import { AppFooter } from '@/components/app-footer';
import { Section } from '@/components/section';
import { ConnectForm } from '@/components/connect-form';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  about,
  education,
  skills,
  projects,
  certifications,
  hobbies,
} from '@/lib/data';
import {
  Award,
  BookOpen,
  Code,
  ExternalLink,
  Gamepad2,
  GraduationCap,
  Languages,
  Rocket,
  Cloud,
  BrainCircuit,
  Database,
  Terminal,
  Cpu,
  Server,
  Code2,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const skillIcons: { [key: string]: React.ElementType } = {
  'Programming Languages': Code2,
  'Web Technologies': Code,
  'Database Technologies': Database,
  'Tools & Platforms': Terminal,
  'Concepts': BrainCircuit,
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <AppHeader />
      <main className="flex-1">
        <Section
          id="about"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <Image
                  src="/profile.jpg"
                  alt="M Manoj Kumar Reddy"
                  width={300}
                  height={300}
                  className="rounded-full shadow-2xl"
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                  M Manoj Kumar Reddy
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  {about}
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="font-headline text-xl flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-primary" />
                    {edu.degree}
                  </CardTitle>
                  <CardDescription>{edu.institution}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{edu.period}</p>
                  <p className="font-medium mt-2">{edu.grade}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Technical Skills">
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, skillList]) => {
                const Icon = skillIcons[category] || Code;
                return (
                  <Card key={category}>
                    <CardHeader>
                      <CardTitle className="font-headline text-xl flex items-center gap-3">
                        <Icon className="w-6 h-6 text-primary" />
                        {category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <Badge key={skill.name} variant="secondary" className="text-sm font-medium px-3 py-1">{skill.name}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
        </Section>
        
        <Section id="projects" title="Projects">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
                <CardHeader>
                  <CardTitle className="font-headline text-xl flex items-center gap-2">
                    <Rocket className="w-5 h-5 text-accent"/>
                    {project.name}
                  </CardTitle>
                  <CardDescription className="font-code text-xs !mt-2">
                    {project.tech.join(' · ')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
                <CardFooter>
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center gap-2 text-sm font-medium"
                    >
                      View Code <ExternalLink className="w-4 h-4" />
                    </Link>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </Section>
        
        <Section id="certifications" title="Certifications">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="flex flex-col transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
                <CardHeader>
                  <CardTitle className="font-headline text-xl flex items-center gap-3">
                    <Award className="w-6 h-6 text-primary" />
                    {cert.name}
                  </CardTitle>
                  <CardDescription>
                    {cert.issuer}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">Issued {cert.date}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-2 text-sm font-medium"
                  >
                    View Certificate <ExternalLink className="w-4 h-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="hobbies" title="Personal Interests">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                <Card>
                    <CardContent className="p-6">
                        <Languages className="w-8 h-8 mx-auto mb-2 text-accent"/>
                        <p className="font-medium">Languages</p>
                        <p className="text-sm text-muted-foreground">{hobbies.languages.join(', ')}</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardContent className="p-6">
                        <Gamepad2 className="w-8 h-8 mx-auto mb-2 text-accent"/>
                        <p className="font-medium">Hobbies</p>
                        <p className="text-sm text-muted-foreground">{hobbies.activities.join(', ')}</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardContent className="p-6">
                        <div className="flex justify-center items-center gap-2">
                          <BrainCircuit className="w-8 h-8 mx-auto mb-2 text-accent"/>
                          <Cloud className="w-8 h-8 mx-auto mb-2 text-accent"/>
                        </div>
                        <p className="font-medium">Interests</p>
                        <p className="text-sm text-muted-foreground">{hobbies.interests.join(', ')}</p>
                    </CardContent>
                </Card>
            </div>
        </Section>

        <Section id="connect" title="Get in Touch">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="font-headline">Connect With Me</CardTitle>
              <CardDescription>
                Have a question or want to work together? Leave your details and I'll get back to you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ConnectForm />
            </CardContent>
          </Card>
        </Section>
      </main>
      <AppFooter />
    </div>
  );
}
