import type React from "react"
import Link from "next/link"
import {
  Mail,
  Github,
  Linkedin,
  FileText,
  ExternalLink,
  ArrowRight,
  Code,
  Award,
  BookOpen,
  Heart,
  Star,
  Calendar,
  MapPin,
  User,
  Zap,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navbar with glassmorphism effect */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl tracking-tight">
            <span className="text-gradient">Hojiev</span>Makhmud
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#about" className="nav-link text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#education" className="nav-link text-sm font-medium transition-colors hover:text-primary">
              Education
            </Link>
            <Link href="#skills" className="nav-link text-sm font-medium transition-colors hover:text-primary">
              Skills
            </Link>
            <Link href="#projects" className="nav-link text-sm font-medium transition-colors hover:text-primary">
              Projects
            </Link>
            <Link href="#contact" className="nav-link text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button
            size="sm"
            className="hidden md:flex bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-md"
          >
            <Link href="#contact">Get in touch</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section with animated gradient */}
        <section
          id="about"
          className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-r from-blue-100 via-blue-50 to-white bg-[length:400%_400%] animate-gradient-x"
        >
          <div className="absolute inset-0 -z-10 opacity-30">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                  <path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(0,0,255,0.05)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          <div className="container relative z-10">
            <div className="flex flex-col gap-12 md:flex-row md:items-center">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-600 shadow-sm">
                  <span className="flex items-center gap-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    Available for new opportunities
                  </span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Hi, I'm <span className="text-gradient">Hojiev Makhmud</span>
                </h1>
                <p className="max-w-[600px] text-xl text-gray-600">
                  A passionate [your profession/field] with a focus on [your specialization]. I'm dedicated to creating
                  impactful solutions that make a difference.
                </p>
                <div className="flex gap-4">
                  <Button
                    size="lg"
                    className="group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg"
                  >
                    <Link href="#contact" className="inline-flex items-center gap-2">
                      Get in touch
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-blue-200 hover:bg-blue-50 shadow-sm">
                    <Link href="#projects" className="inline-flex items-center gap-2">
                      View Projects
                    </Link>
                  </Button>
                </div>
                <div className="flex gap-6 pt-4">
                  <Link
                    href="mailto:your.email@example.com"
                    className="social-icon text-gray-500 transition-colors hover:text-primary"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                  <Link
                    href="https://github.com/yourusername"
                    className="social-icon text-gray-500 transition-colors hover:text-primary"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://linkedin.com/in/yourusername"
                    className="social-icon text-gray-500 transition-colors hover:text-primary"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
        </section>

        {/* Bio Section with stylish layout */}
        <section className="py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gradient">About Me</h2>
              <div className="h-1 w-20 mx-auto bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  I am a [your profession] with [X years] of experience in [your field]. My passion for [your interest]
                  started when [brief story about how you got interested in your field].
                </p>
                <p>
                  My professional goals include [mention 2-3 goals], and I'm particularly interested in [mention your
                  interests related to your field].
                </p>
                <p>
                  Outside of work, I enjoy [mention 2-3 personal interests or hobbies] which help me maintain a balanced
                  lifestyle and bring fresh perspectives to my professional work.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="card-hover-effect flex flex-col items-center p-6 rounded-xl bg-white shadow-md border border-blue-50">
                  <div className="mb-3 rounded-full bg-blue-50 p-3">
                    <User className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-medium">Passionate</h3>
                </div>
                <div className="card-hover-effect flex flex-col items-center p-6 rounded-xl bg-white shadow-md border border-blue-50">
                  <div className="mb-3 rounded-full bg-blue-50 p-3">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-medium">Creative</h3>
                </div>
                <div className="card-hover-effect flex flex-col items-center p-6 rounded-xl bg-white shadow-md border border-blue-50">
                  <div className="mb-3 rounded-full bg-blue-50 p-3">
                    <Code className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-medium">Technical</h3>
                </div>
                <div className="card-hover-effect flex flex-col items-center p-6 rounded-xl bg-white shadow-md border border-blue-50">
                  <div className="mb-3 rounded-full bg-blue-50 p-3">
                    <Heart className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-medium">Dedicated</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section with timeline */}
        <section id="education" className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gradient">Education</h2>
              <div className="mt-3 h-1 w-20 mx-auto bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
            </div>
            <div className="relative mx-auto max-w-4xl">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-blue-200"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                <div className="relative md:ml-auto md:w-1/2 md:pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:-left-2.5 top-0 h-5 w-5 rounded-full border-4 border-white bg-blue-500 shadow-md"></div>

                  <Card className="card-hover-effect overflow-hidden transition-all border-none shadow-lg bg-white">
                    <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-blue-600 to-blue-400"></div>
                    <CardContent className="p-6">
                      <div>
                        <div className="mb-2 text-sm font-medium text-blue-600 flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          20XX - 20XX
                        </div>
                        <h3 className="text-xl font-bold">Degree Name</h3>
                        <p className="text-gray-500 flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          University Name, Location
                        </p>
                        <p className="mt-2 text-gray-600">
                          Brief description of your studies, major, and any notable achievements during your time at
                          this institution.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative md:mr-auto md:w-1/2 md:pr-12">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-auto md:-right-2.5 top-0 h-5 w-5 rounded-full border-4 border-white bg-blue-500 shadow-md"></div>

                  <Card className="card-hover-effect overflow-hidden transition-all border-none shadow-lg bg-white">
                    <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-blue-600 to-blue-400"></div>
                    <CardContent className="p-6">
                      <div>
                        <div className="mb-2 text-sm font-medium text-blue-600 flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          Month 20XX
                        </div>
                        <h3 className="text-xl font-bold">Certificate/Course Name</h3>
                        <p className="text-gray-500 flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          Institution/Platform
                        </p>
                        <p className="mt-2 text-gray-600">
                          Brief description of what you learned and how it contributed to your skills.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section with animated bars */}
        <section id="skills" className="py-20 bg-blue-50">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gradient">Skills</h2>
              <div className="mt-3 h-1 w-20 mx-auto bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
            </div>
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-12 md:grid-cols-2">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
                  <h3 className="mb-6 text-xl font-bold flex items-center gap-2">
                    <Code className="h-5 w-5 text-blue-600" />
                    Hard Skills
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <div className="mb-2 flex justify-between">
                        <span className="font-medium">Skill 1</span>
                        <span className="text-sm text-gray-500">90%</span>
                      </div>
                      <div className="skill-progress-bar" style={{ "--progress": "0.9" } as React.CSSProperties}>
                        <div className="h-full w-[90%] rounded-full bg-gradient-to-r from-blue-600 to-blue-400"></div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 flex justify-between">
                        <span className="font-medium">Skill 2</span>
                        <span className="text-sm text-gray-500">85%</span>
                      </div>
                      <div className="skill-progress-bar" style={{ "--progress": "0.85" } as React.CSSProperties}>
                        <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-blue-600 to-blue-400"></div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 flex justify-between">
                        <span className="font-medium">Skill 3</span>
                        <span className="text-sm text-gray-500">80%</span>
                      </div>
                      <div className="skill-progress-bar" style={{ "--progress": "0.8" } as React.CSSProperties}>
                        <div className="h-full w-[80%] rounded-full bg-gradient-to-r from-blue-600 to-blue-400"></div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 flex justify-between">
                        <span className="font-medium">Skill 4</span>
                        <span className="text-sm text-gray-500">75%</span>
                      </div>
                      <div className="skill-progress-bar" style={{ "--progress": "0.75" } as React.CSSProperties}>
                        <div className="h-full w-[75%] rounded-full bg-gradient-to-r from-blue-600 to-blue-400"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
                  <h3 className="mb-6 text-xl font-bold flex items-center gap-2">
                    <User className="h-5 w-5 text-blue-600" />
                    Soft Skills
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="card-hover-effect flex flex-col items-center rounded-lg border border-blue-100 bg-blue-50 p-4 text-center shadow-sm">
                      <div className="mb-2 rounded-full bg-white p-3 shadow-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6 text-blue-600"
                        >
                          <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                          <path d="M16 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                          <path d="M8 16a6 6 0 0 0 12 0" />
                          <path d="M16 7a9 9 0 0 0-8 0" />
                          <path d="M12 20v-4" />
                        </svg>
                      </div>
                      <h4 className="font-medium">Communication</h4>
                    </div>
                    <div className="card-hover-effect flex flex-col items-center rounded-lg border border-blue-100 bg-blue-50 p-4 text-center shadow-sm">
                      <div className="mb-2 rounded-full bg-white p-3 shadow-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6 text-blue-600"
                        >
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </div>
                      <h4 className="font-medium">Teamwork</h4>
                    </div>
                    <div className="card-hover-effect flex flex-col items-center rounded-lg border border-blue-100 bg-blue-50 p-4 text-center shadow-sm">
                      <div className="mb-2 rounded-full bg-white p-3 shadow-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6 text-blue-600"
                        >
                          <path d="M2 9.5V4a2 2 0 0 1 2-2h3.5" />
                          <path d="M2 14.5V20a2 2 0 0 0 2 2h3.5" />
                          <path d="M22 9.5V4a2 2 0 0 0-2-2h-3.5" />
                          <path d="M22 14.5V20a2 2 0 0 1-2 2h-3.5" />
                          <path d="M9.5 2h5" />
                          <path d="M9.5 22h5" />
                          <path d="M14.5 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                          <path d="m13.75 14.5-.75.75a2.5 2.5 0 0 1-3.5 0l-.75-.75" />
                          <path d="M7.75 10.75 7 10a2.5 2.5 0 0 1 0-3.5l.75-.75" />
                          <path d="m16.25 10.75.75-.75a2.5 2.5 0 0 0 0-3.5l-.75-.75" />
                        </svg>
                      </div>
                      <h4 className="font-medium">Problem Solving</h4>
                    </div>
                    <div className="card-hover-effect flex flex-col items-center rounded-lg border border-blue-100 bg-blue-50 p-4 text-center shadow-sm">
                      <div className="mb-2 rounded-full bg-white p-3 shadow-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6 text-blue-600"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                      </div>
                      <h4 className="font-medium">Time Management</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section with stylish cards */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gradient">Achievements</h2>
              <div className="mt-3 h-1 w-20 mx-auto bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
            </div>
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-8 md:grid-cols-3">
                <Card className="card-hover-effect group overflow-hidden border-none bg-gradient-to-br from-white to-blue-50 shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-md">
                      <Award className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">Achievement Title</h3>
                    <p className="text-sm text-gray-500">Awarded by Organization, 20XX</p>
                    <div className="mt-2 text-gray-600">
                      Brief description of the achievement and why it's significant.
                    </div>
                  </CardContent>
                </Card>
                <Card className="card-hover-effect group overflow-hidden border-none bg-gradient-to-br from-white to-blue-50 shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-md">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">Certificate Name</h3>
                    <p className="text-sm text-gray-500">Issued by Organization, 20XX</p>
                    <div className="mt-2 text-gray-600">
                      Brief description of what this certification represents and how you earned it.
                    </div>
                  </CardContent>
                </Card>
                <Card className="card-hover-effect group overflow-hidden border-none bg-gradient-to-br from-white to-blue-50 shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-md">
                      <Star className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">Recognition Title</h3>
                    <p className="text-sm text-gray-500">Recognized by Organization, 20XX</p>
                    <div className="mt-2 text-gray-600">
                      Brief description of why you were recognized and what it means to you.
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section with hover effects */}
        <section id="projects" className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gradient">Projects & Work Samples</h2>
              <div className="mt-3 h-1 w-20 mx-auto bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
            </div>
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="project-card group shadow-lg">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Project 1"
                    className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="project-card-content">
                    <h3 className="text-xl font-bold text-white">Project Name</h3>
                    <p className="mt-2 text-white/80">
                      Description of the project, your role, technologies used, and outcomes achieved.
                    </p>
                    <div className="mt-4 flex gap-3">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white text-black hover:bg-white/90 shadow-md"
                        asChild
                      >
                        <Link href="#" className="inline-flex items-center gap-1">
                          <ExternalLink className="h-4 w-4" />
                          View Project
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="project-card group shadow-lg">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Project 2"
                    className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="project-card-content">
                    <h3 className="text-xl font-bold text-white">Project Name</h3>
                    <p className="mt-2 text-white/80">
                      Description of the project, your role, technologies used, and outcomes achieved.
                    </p>
                    <div className="mt-4 flex gap-3">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white text-black hover:bg-white/90 shadow-md"
                        asChild
                      >
                        <Link href="#" className="inline-flex items-center gap-1">
                          <ExternalLink className="h-4 w-4" />
                          View Project
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="project-card group shadow-lg">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Project 3"
                    className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="project-card-content">
                    <h3 className="text-xl font-bold text-white">Project Name</h3>
                    <p className="mt-2 text-white/80">
                      Description of the project, your role, technologies used, and outcomes achieved.
                    </p>
                    <div className="mt-4 flex gap-3">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white text-black hover:bg-white/90 shadow-md"
                        asChild
                      >
                        <Link href="#" className="inline-flex items-center gap-1">
                          <ExternalLink className="h-4 w-4" />
                          View Project
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="project-card group shadow-lg">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Project 4"
                    className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="project-card-content">
                    <h3 className="text-xl font-bold text-white">Project Name</h3>
                    <p className="mt-2 text-white/80">
                      Description of the project, your role, technologies used, and outcomes achieved.
                    </p>
                    <div className="mt-4 flex gap-3">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white text-black hover:bg-white/90 shadow-md"
                        asChild
                      >
                        <Link href="#" className="inline-flex items-center gap-1">
                          <ExternalLink className="h-4 w-4" />
                          View Project
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Extracurricular Activities Section with modern cards */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gradient">
                Extracurricular Activities & Volunteering
              </h2>
              <div className="mt-3 h-1 w-20 mx-auto bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
            </div>
            <div className="mx-auto max-w-4xl">
              <div className="space-y-8">
                <Card className="card-hover-effect overflow-hidden transition-all border-blue-100 shadow-lg">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="bg-blue-50 p-6 md:w-1/3">
                        <div className="text-lg font-bold text-blue-600">20XX - 20XX</div>
                        <div className="text-gray-500 flex items-center gap-1 mt-1">
                          <MapPin className="h-4 w-4" />
                          Location
                        </div>
                      </div>
                      <div className="p-6 md:w-2/3">
                        <h3 className="text-xl font-bold">Activity/Organization Name</h3>
                        <p className="text-blue-600">Your Role</p>
                        <p className="mt-2 text-gray-600">
                          Description of your involvement, responsibilities, and what you learned or contributed.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="card-hover-effect overflow-hidden transition-all border-blue-100 shadow-lg">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="bg-blue-50 p-6 md:w-1/3">
                        <div className="text-lg font-bold text-blue-600">20XX - Present</div>
                        <div className="text-gray-500 flex items-center gap-1 mt-1">
                          <MapPin className="h-4 w-4" />
                          Location
                        </div>
                      </div>
                      <div className="p-6 md:w-2/3">
                        <h3 className="text-xl font-bold">Volunteer Initiative</h3>
                        <p className="text-blue-600">Your Role</p>
                        <p className="mt-2 text-gray-600">
                          Description of the initiative, your contributions, and the impact made.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Recommendations Section with testimonial style */}
        <section className="py-20 bg-blue-50">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gradient">Letters of Recommendation</h2>
              <div className="mt-3 h-1 w-20 mx-auto bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
            </div>
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-8 md:grid-cols-2">
                <Card className="testimonial-card relative overflow-hidden border-none bg-white shadow-lg">
                  <CardContent className="p-8">
                    <div className="relative z-10">
                      <p className="mb-6 italic text-gray-600">
                        "Brief quote from the recommendation letter that highlights your strengths and achievements."
                      </p>
                      <div className="flex items-center gap-4">
                        <Avatar className="border-2 border-blue-100 shadow-sm">
                          <AvatarFallback className="bg-blue-100 text-blue-600">RN</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-bold">Recommender Name</h3>
                          <p className="text-sm text-gray-500">Position, Organization</p>
                        </div>
                      </div>
                      <Button variant="link" className="mt-4 p-0 text-blue-600" asChild>
                        <Link href="#" className="inline-flex items-center gap-1">
                          <FileText className="h-4 w-4" />
                          View Full Letter
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="testimonial-card relative overflow-hidden border-none bg-white shadow-lg">
                  <CardContent className="p-8">
                    <div className="relative z-10">
                      <p className="mb-6 italic text-gray-600">
                        "Brief quote from the recommendation letter that highlights your strengths and achievements."
                      </p>
                      <div className="flex items-center gap-4">
                        <Avatar className="border-2 border-blue-100 shadow-sm">
                          <AvatarFallback className="bg-blue-100 text-blue-600">RN</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-bold">Recommender Name</h3>
                          <p className="text-sm text-gray-500">Position, Organization</p>
                        </div>
                      </div>
                      <Button variant="link" className="mt-4 p-0 text-blue-600" asChild>
                        <Link href="#" className="inline-flex items-center gap-1">
                          <FileText className="h-4 w-4" />
                          View Full Letter
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section with modern design */}
        <section id="contact" className="relative py-20 bg-white">
          <div className="absolute inset-0 -z-10 opacity-30">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="contact-grid" width="8" height="8" patternUnits="userSpaceOnUse">
                  <path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(0,0,255,0.05)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#contact-grid)" />
            </svg>
          </div>
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gradient">Get in Touch</h2>
              <div className="mt-3 h-1 w-20 mx-auto bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
            </div>
            <div className="mx-auto max-w-4xl">
              <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-xl">
                <div className="grid md:grid-cols-2">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-8 text-white">
                    <h3 className="text-2xl font-bold">Contact Information</h3>
                    <p className="mt-2 text-blue-100">
                      Feel free to reach out to me for opportunities, collaborations, or just to say hello!
                    </p>
                    <div className="mt-8 space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 shadow-inner">
                          <Mail className="h-5 w-5" />
                        </div>
                        <span>your.email@example.com</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 shadow-inner">
                          <Linkedin className="h-5 w-5" />
                        </div>
                        <Link href="https://linkedin.com/in/yourusername" className="hover:underline">
                          linkedin.com/in/yourusername
                        </Link>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 shadow-inner">
                          <Github className="h-5 w-5" />
                        </div>
                        <Link href="https://github.com/yourusername" className="hover:underline">
                          github.com/yourusername
                        </Link>
                      </div>
                    </div>
                    <div className="mt-12">
                      <h4 className="text-lg font-bold">Connect with me</h4>
                      <div className="mt-4 flex gap-4">
                        <Link
                          href="mailto:your.email@example.com"
                          className="rounded-full bg-white/10 p-3 transition-colors hover:bg-white/20"
                        >
                          <Mail className="h-5 w-5" />
                          <span className="sr-only">Email</span>
                        </Link>
                        <Link
                          href="https://github.com/yourusername"
                          className="rounded-full bg-white/10 p-3 transition-colors hover:bg-white/20"
                        >
                          <Github className="h-5 w-5" />
                          <span className="sr-only">GitHub</span>
                        </Link>
                        <Link
                          href="https://linkedin.com/in/yourusername"
                          className="rounded-full bg-white/10 p-3 transition-colors hover:bg-white/20"
                        >
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 contact-form">
                    <h3 className="text-2xl font-bold">Send Me a Message</h3>
                    <form className="mt-6 space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <input
                          id="name"
                          className="w-full rounded-md border border-blue-200 bg-blue-50/50 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full rounded-md border border-blue-200 bg-blue-50/50 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <input
                          id="subject"
                          className="w-full rounded-md border border-blue-200 bg-blue-50/50 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <textarea
                          id="message"
                          className="w-full rounded-md border border-blue-200 bg-blue-50/50 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                          placeholder="Your message"
                          rows={5}
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-md"
                      >
                        Send Message
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-blue-100 py-8 bg-blue-50">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Hojiev Makhmud. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="mailto:your.email@example.com"
              className="social-icon text-gray-500 transition-colors hover:text-blue-600"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
            <Link
              href="https://github.com/yourusername"
              className="social-icon text-gray-500 transition-colors hover:text-blue-600"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/yourusername"
              className="social-icon text-gray-500 transition-colors hover:text-blue-600"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

