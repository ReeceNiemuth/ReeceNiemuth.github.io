/* Kinetic Minimalism with Architectural Precision - Dark Theme
 * Design: Dark grey background, light text, smooth gradients, motion-driven interactions
 * Typography: Syne (display), Manrope (body), IBM Plex Mono (technical)
 * Color: Dark grey bg, light text, muted crimson accents
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ExternalLink,
  Star,
  GitBranch
} from "lucide-react";
import { useEffect, useState } from "react";

interface GitHubRepo {
  name: string;
  description: string;
  url: string;
  stars: number;
  language: string;
}

export default function Home() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch GitHub repos for the portfolio
    fetch('https://api.github.com/users/reeceniemuth/repos?sort=stars&per_page=6')
      .then(res => res.json())
      .then(data => {
        const filtered = data
          .filter((repo: any) => repo.name.toLowerCase().includes('cyber') || repo.name.toLowerCase().includes('security') || repo.stargazers_count > 0)
          .slice(0, 6)
          .map((repo: any) => ({
            name: repo.name,
            description: repo.description || 'No description available',
            url: repo.html_url,
            stars: repo.stargazers_count,
            language: repo.language || 'N/A'
          }));
        setRepos(filtered);
      })
      .catch(err => console.error('Failed to fetch repos:', err))
      .finally(() => setLoading(false));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-lg font-bold transition-kinetic hover:text-primary flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded-sm"></div>
              <span className="hidden sm:inline">Reece</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm transition-kinetic hover:text-primary">About</a>
              <a href="#experience" className="text-sm transition-kinetic hover:text-primary">Experience</a>
              <a href="#education" className="text-sm transition-kinetic hover:text-primary">Education</a>
              <a href="#projects" className="text-sm transition-kinetic hover:text-primary">Portfolio</a>
              <a href="#certifications" className="text-sm transition-kinetic hover:text-primary">Certifications</a>
              <a href="#contact" className="text-sm transition-kinetic hover:text-primary">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Gradient Background */}
      <section 
        className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/80"></div>
        
        {/* Subtle animated accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="section-tag">Hi, my name is</div>
                <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight">
                  Reece<br />Niemuth
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                  Cybersecurity Professional
                </h2>
              </div>
              
              <p className="text-lg md:text-xl max-w-lg leading-relaxed text-muted-foreground">
                I build and secure cloud and on-prem systems by combining security engineering, 
                automation, and risk management to deliver scalable, defensible security architectures.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-4">
                <Button 
                  size="lg" 
                  className="transition-kinetic hover:scale-105 hover-glow"
                  asChild
                >
                  <a href="#contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Get In Touch
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="transition-kinetic hover:scale-105"
                  asChild
                >
                  <a href="#" download>
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="transition-kinetic hover:scale-105"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/reeceniemuth" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="transition-kinetic hover:scale-105"
                  asChild
                >
                  <a href="https://github.com/reeceniemuth" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>

            {/* Right: Professional Image */}
            <div className="relative hidden md:block">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Decorative border with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-primary/20 rounded-full blur-xl"></div>
                
                {/* Image container */}
                <div className="relative bg-card rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663362630040/ySxgkdzAseMOJJmt.png"
                    alt="Reece Niemuth"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="hairline-rule"></div>

      {/* About Section */}
      <section id="about" className="py-24 fade-on-scroll">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <div className="mb-4"></div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            </div>
            <div className="md:col-span-7 space-y-6 text-muted-foreground">
              <p>
                I've been a computer nerd my whole life. Started tinkering with old tower PCs in my grandfather's garage, 
                built gaming rigs with friends, got into robotics and electronics in high school. After serving in the 
                Marine Corps as an engineer focused on electronics, I discovered cybersecurity through all the "cyber warfare" 
                talk happening in the military. It clicked immediately: a field that combined my love for technology, 
                protecting critical systems, and the constant hunt for better tools and solutions.
              </p>
              <p>
                Now I work as a <strong className="text-foreground">Technical Information System Security Officer (ISSO)</strong> and 
                hybrid cybersecurity professional, specializing in <strong className="text-foreground">DoD RMF, JSIG, NIST SP 800-53, 
                and STIGs</strong> across SAP and classified environments. I blend risk management and compliance with hands-on 
                engineering, building automation, dashboards, and security tooling using Python, PowerShell, Bash, Splunk, Nessus, 
                SCAP, and OpenSCAP. My goal is to translate dense security requirements into practical, code-driven solutions that 
                actually make people's lives easier.
              </p>
              <p>
                What gets me out of bed is hearing someone say, <em>"This is great, this will save us so much time."</em> I love 
                the relentless pace of this field, the endless stack of knowledge to master, and the challenge of staying ahead 
                of the next big tool or threat. Right now, I'm pursuing my <strong className="text-foreground">Doctorate in 
                Cybersecurity Analytics</strong> while building passion projects in AI-assisted security tooling and federal 
                compliance automation.
              </p>
              <p>
                When I'm not working, I'm in my homelab running the "Patriot Command Operations System (PCOS)" — a fully 
                documented environment where I practice the entire system lifecycle per NIST and RMF without risking production systems.
              </p>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-6 text-foreground">Core Competencies</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "RMF", "NIST 800-53", "JSIG", "STIG",
                    "AWS Security", "Python", "PowerShell", "Bash",
                    "Splunk", "Nessus", "SCAP", "OpenSCAP",
                    "Linux", "Automation", "AI/ML"
                  ].map((skill) => (
                    <div 
                      key={skill}
                      className="flex items-center gap-2 p-3 border border-border rounded transition-kinetic hover:border-primary hover:bg-primary/5"
                    >
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span className="section-tag">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="hairline-rule"></div>

      {/* Professional Experience Section */}
      <section id="experience" className="py-24 fade-on-scroll">
        <div className="container">
          <div className="mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Professional Experience</h2>
          
          <Tabs defaultValue="lockheed" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto gap-2 bg-transparent">
              <TabsTrigger 
                value="lockheed" 
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-kinetic h-auto py-4 px-6 text-left justify-start border border-border data-[state=active]:border-primary"
              >
                <div>
                  <div className="font-bold">Lockheed Martin</div>
                  <div className="text-xs opacity-70">2025 - Present</div>
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="aws" 
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-kinetic h-auto py-4 px-6 text-left justify-start border border-border data-[state=active]:border-primary"
              >
                <div>
                  <div className="font-bold">Amazon Web Services</div>
                  <div className="text-xs opacity-70">2023 - 2025</div>
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="voxai" 
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-kinetic h-auto py-4 px-6 text-left justify-start border border-border data-[state=active]:border-primary"
              >
                <div>
                  <div className="font-bold">Voxai Solutions Inc.</div>
                  <div className="text-xs opacity-70">2022 - 2023</div>
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="usmc" 
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-kinetic h-auto py-4 px-6 text-left justify-start border border-border data-[state=active]:border-primary"
              >
                <div>
                  <div className="font-bold">United States Marine Corps</div>
                  <div className="text-xs opacity-70">2018 - 2022</div>
                </div>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="lockheed" className="mt-8">
              <Card className="p-8 border-2 transition-kinetic hover-glow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Information System Security Officer Technical II</h3>
                    <a 
                      href="https://www.lockheedmartin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      Lockheed Martin <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 md:mt-0 md:text-right">
                    <div className="font-semibold">2025 – Present</div>
                    <div>Grand Prairie, TX</div>
                  </div>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Orchestrating RMF/JSIG accreditation and end-to-end continuous monitoring for Special Access Programs (SAP)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Executing STIG hardening across Windows, Linux, and network platforms, ensuring full DoD compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Automated audit workflows with Splunk, Qmulos, and Nessus, slashing manual review by 40%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Partnering with ISSM leadership to maintain ATO readiness and rapidly remediate vulnerabilities</span>
                  </li>
                </ul>
              </Card>
            </TabsContent>
            
            <TabsContent value="aws" className="mt-8">
              <Card className="p-8 border-2 transition-kinetic hover-glow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Information Security Specialist (Trust & Safety)</h3>
                    <a 
                      href="https://aws.amazon.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      Amazon Web Services <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 md:mt-0 md:text-right">
                    <div className="font-semibold">2023 – 2025</div>
                    <div>Remote</div>
                  </div>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Protected 25+ AWS service lines, proactively mitigating 3,000+ threats through advanced log analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Developed automation scripts in Python, Bash, and Java, streamlining incident handling and boosting team efficiency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Oversaw 10,000+ global abuse cases, cutting response times by 23% and raising customer trust scores</span>
                  </li>
                </ul>
              </Card>
            </TabsContent>
            
            <TabsContent value="voxai" className="mt-8">
              <Card className="p-8 border-2 transition-kinetic hover-glow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Cloud Network Operations Analyst</h3>
                    <a 
                      href="https://voxaisolutions.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      Voxai Solutions Inc. <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 md:mt-0 md:text-right">
                    <div className="font-semibold">2023</div>
                    <div>Coppell, TX</div>
                  </div>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Engineered ServiceNow integrations with third-party monitoring & incident response platforms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Delivered 24/7 on-call support, safeguarding uptime and reliability of enterprise networks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Authored network baselines, SOPs, and training playbooks, standardizing team operations and reducing escalations</span>
                  </li>
                </ul>
              </Card>
            </TabsContent>
            
            <TabsContent value="usmc" className="mt-8">
              <Card className="p-8 border-2 transition-kinetic hover-glow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Sergeant / Section Lead (MOS 1161)</h3>
                    <div className="text-primary">United States Marine Corps</div>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 md:mt-0 md:text-right">
                    <div className="font-semibold">2018 – 2022</div>
                    <div>NC & Okinawa</div>
                  </div>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Directed technical teams in six global military operations, enforcing strict cybersecurity and mission protocols</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Achieved top 1% graduate status at the USMC Non-Commissioned Officer Course for ethical leadership</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Mentored and developed junior Marines, driving mission readiness and system efficiency improvements</span>
                  </li>
                </ul>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <div className="hairline-rule"></div>

      {/* Education Section */}
      <section 
        id="education" 
        className="py-24 fade-on-scroll relative"
      >
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/20"></div>
        
        <div className="container relative z-10">
          <div className="mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Education</h2>
          
          <div className="space-y-6">
            <Card className="p-8 border-2 transition-kinetic hover:border-primary hover-glow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Doctor of Engineering (D.Eng.) in Cybersecurity Analytics</h3>
                  <a 
                    href="https://www.gwu.edu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    George Washington University <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  Expected December 2027
                </div>
              </div>
              <p className="text-muted-foreground">
                Conducting original, applied research on business-impacting cybersecurity problems, with emphasis on 
                automation and AI/ML-enabled security products, federal compliance optimization, and modernizing outdated 
                practices across secure, classified, and national security environments.
              </p>
            </Card>

            <Card className="p-8 border-2 transition-kinetic hover:border-primary hover-glow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Master of Business Administration (MBA), IT Management</h3>
                  <a 
                    href="https://www.wgu.edu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Western Governors University <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground">
                Focused on enterprise IT operations, governance, and executive decision-making, strengthening business 
                acumen and strategic leadership to complement military leadership experience.
              </p>
            </Card>

            <Card className="p-8 border-2 transition-kinetic hover:border-primary hover-glow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Bachelor of Science (B.S.), Cybersecurity and Information Assurance</h3>
                  <a 
                    href="https://www.wgu.edu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Western Governors University <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground">
                Broad, hands-on curriculum spanning AI/ML concepts, data analytics, cloud security, networking, digital 
                forensics, penetration testing, and CTF-based adversarial thinking.
              </p>
            </Card>

            <Card className="p-8 border-2 transition-kinetic hover:border-primary hover-glow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Undergraduate Coursework, Computer Science</h3>
                  <a 
                    href="https://www.tcu.edu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Texas Christian University <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground">
                Completed two years of CS coursework including assembly-level programming, data structures, and Java, 
                building a strong foundation in low-level systems and algorithms.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <div className="hairline-rule"></div>

      {/* Cyber Portfolio Section with GitHub Repos */}
      <section id="projects" className="py-24 fade-on-scroll">
        <div className="container">
          <div className="mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Cyber Engineering Portfolio</h2>
          
          {/* Featured Portfolio Card */}
          <a 
            href="https://github.com/ReeceNiemuth/Cyber-Engineering-Portfolio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group transition-kinetic mb-12"
          >
            <Card className="relative overflow-hidden border-2 transition-kinetic hover:border-primary hover:shadow-2xl cursor-pointer h-80">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-8 md:p-12">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 rounded border border-primary/50 mb-4 group-hover:bg-primary/30 transition-kinetic">
                    <Github className="h-4 w-4 text-primary" />
                    <span className="section-tag text-xs">GitHub Repository</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-muted-foreground text-lg">
                      Comprehensive collection of cybersecurity projects, tools, and documentation showcasing hands-on security engineering,
                      compliance automation, and infrastructure hardening across RMF, NIST, and federal standards.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                    <span className="font-bold">Explore on GitHub</span>
                    <ExternalLink className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </Card>
          </a>

          {/* GitHub Repos Grid */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Recent Projects</h3>
            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <Card key={i} className="p-6 border-2 animate-pulse">
                    <div className="h-6 bg-muted rounded mb-4"></div>
                    <div className="h-4 bg-muted rounded mb-4"></div>
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                  </Card>
                ))}
              </div>
            ) : repos.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {repos.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="h-full p-6 border-2 transition-kinetic hover:border-primary hover:bg-card/80 cursor-pointer hover-glow">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold group-hover:text-primary transition-kinetic flex-1">
                          {repo.name}
                        </h4>
                        <div className="flex items-center gap-1 text-primary text-sm">
                          <Star className="h-4 w-4 fill-current" />
                          {repo.stars}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {repo.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="section-tag text-xs">{repo.language}</span>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-kinetic" />
                      </div>
                    </Card>
                  </a>
                ))}
              </div>
            ) : (
              <Card className="p-8 border-2 text-center text-muted-foreground">
                <p>Unable to load projects. Visit your GitHub profile directly.</p>
              </Card>
            )}
          </div>
        </div>
      </section>

      <div className="hairline-rule"></div>

      <div className="hairline-rule"></div>

      {/* Skills & Tools Expertise Section */}
      <section id="skills" className="py-24 fade-on-scroll">
        <div className="container">
          <div className="mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Skills & Tools Expertise</h2>
          
          <div className="space-y-12">
            {/* Programming & Scripting */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span>👨‍💻</span>
                <span>Programming & Scripting</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Python', 'PowerShell', 'Bash', 'Java', 'C', 'Node.js', 'Go'].map((skill) => (
                  <div key={skill} className="px-4 py-2 bg-card border border-primary/30 rounded-lg text-sm font-medium transition-kinetic hover:border-primary hover:bg-primary/10 hover-glow">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Operating Systems & Virtualization */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span>💻</span>
                <span>Operating Systems & Virtualization</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Linux', 'Windows', 'VMware', 'Hyper-V'].map((skill) => (
                  <div key={skill} className="px-4 py-2 bg-card border border-primary/30 rounded-lg text-sm font-medium transition-kinetic hover:border-primary hover:bg-primary/10 hover-glow">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Security Tools & Frameworks */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span>🛡️</span>
                <span>Security Tools & Frameworks</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Splunk', 'Nessus', 'Qmulos', 'DISA STIG', 'NIST RMF', 'JSIG'].map((skill) => (
                  <div key={skill} className="px-4 py-2 bg-card border border-primary/30 rounded-lg text-sm font-medium transition-kinetic hover:border-primary hover:bg-primary/10 hover-glow">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Cloud Platforms */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span>☁️</span>
                <span>Cloud Platforms</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {['AWS', 'Azure', 'GCP'].map((skill) => (
                  <div key={skill} className="px-4 py-2 bg-card border border-primary/30 rounded-lg text-sm font-medium transition-kinetic hover:border-primary hover:bg-primary/10 hover-glow">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* DevOps & Other Tools */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span>⚙️</span>
                <span>DevOps & Other Tools</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Git', 'Docker', 'Ansible', 'Markdown', 'ServiceNow', 'Terraform'].map((skill) => (
                  <div key={skill} className="px-4 py-2 bg-card border border-primary/30 rounded-lg text-sm font-medium transition-kinetic hover:border-primary hover:bg-primary/10 hover-glow">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="hairline-rule"></div>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 fade-on-scroll">
        <div className="container">
          <div className="mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Certifications</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "CISSP-ISSEP", full: "Information Systems Security Engineering Professional", org: "(ISC)²" },
              { name: "CISSP", full: "Certified Information Systems Security Professional", org: "(ISC)²" },
              { name: "CCSP", full: "Certified Cloud Security Professional", org: "(ISC)²" },
              { name: "SSCP", full: "Systems Security Certified Practitioner", org: "(ISC)²" },
              { name: "CompTIA SecurityX", full: "Advanced Security Practitioner (formerly CASP+)", org: "CompTIA" },
              { name: "CompTIA PenTest+", full: "Penetration Testing Certification", org: "CompTIA" },
              { name: "CompTIA CySA+", full: "Cybersecurity Analyst Certification", org: "CompTIA" },
              { name: "CompTIA Security+", full: "Core Cybersecurity Certification", org: "CompTIA" },
              { name: "CompTIA Network+", full: "Networking Concepts and Operations", org: "CompTIA" },
              { name: "CompTIA A+", full: "IT Fundamentals & Technical Support", org: "CompTIA" },
              { name: "CompTIA Project+", full: "IT Project Management Certification", org: "CompTIA" },
              { name: "ITIL 4 Foundation", full: "IT Infrastructure Library v4", org: "AXELOS" },
              { name: "Genesys Cloud Professional", full: "Genesys Cloud CX Platform Certification", org: "Genesys" },
              { name: "Linux Essentials", full: "Linux Fundamentals", org: "LPI" },
              { name: "Splunk Core Certified Power User", full: "Splunk Core Certified Power User", org: "Splunk" }
            ].map((cert) => (
              <Card 
                key={cert.name}
                className="p-6 border-2 transition-kinetic hover:border-primary group cursor-pointer hover-glow"
              >
                <div className="font-bold text-lg mb-1 group-hover:text-primary transition-kinetic">
                  {cert.name}
                </div>
                <div className="text-sm text-muted-foreground mb-2">{cert.full}</div>
                <div className="section-tag text-xs">{cert.org}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="hairline-rule"></div>

      {/* Contact Section */}
      <section 
        id="contact" 
        className="py-24 fade-on-scroll relative"
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-background to-background"></div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Feel free to reach out! Whether you have a question about cybersecurity, want to collaborate on a project, 
              or just want to connect.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="transition-kinetic hover:scale-105 hover-glow"
                asChild
              >
                <a href="mailto:reece@reeceniemuth.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Me
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="transition-kinetic hover:scale-105"
                asChild
              >
                <a href="https://github.com/reeceniemuth" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="transition-kinetic hover:scale-105"
                asChild
              >
                <a href="https://www.linkedin.com/in/reeceniemuth" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="section-tag">
              © 2026 Reece Niemuth. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a 
                href="https://github.com/reeceniemuth" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-kinetic"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/reeceniemuth" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-kinetic"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:reece@reeceniemuth.com"
                className="text-muted-foreground hover:text-primary transition-kinetic"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
