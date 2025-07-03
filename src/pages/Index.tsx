import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import {
  TrendingUp,
  Search,
  Share2,
  Smartphone,
  BarChart3,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Play,
  Menu,
  X,
  Eye,
  Clock,
  Award,
  Target,
  Zap,
  Globe,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  const services = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "SEO Excellence",
      description:
        "Climb the search rankings with our smart, data-driven SEO strategies and optimized keywords that drive traffic and leads.",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Performance Analytics",
      description:
        "Track your success with real-time insights and detailed reporting, helping you make informed decisions to improve your campaigns.",
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Social Media Growth",
      description:
        "Connect with your audience and build a strong brand presence across all major social platforms to grow your business.",
    },
    {
      icon: <Play className="h-6 w-6" />,
      title: "Video Marketing",
      description:
        "Engage your audience with compelling video content that captures attention and turns viewers into loyal customers.",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Campaigns",
      description:
        "Deliver personalized email marketing strategies that build relationships, engage customers, and drive conversions.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Performance Tracking",
      description:
        "Measure what matters with advanced analytics and conversion tracking tools that show the ROI of every campaign.",
    },
  ];

  const portfolioItems = [
    {
      title: "AIIMS Geriatrics",
      category: "Healthcare • Video Marketing • Social Media Strategy",
      metric: "400% Video Engagement",
      href: "https://brandingpioneers.com/aiims",
      description:
        "We developed a comprehensive video marketing strategy, producing tailored content to engage the older demographic.",
      image: "https://brandingpioneers.com/assets/aiims-bgimg.webp",
      stats: { engagement: "400%", followers: "2x", consultations: "150%" },
    },
    {
      title: "Apollo Indraprastha",
      category: "Healthcare • Digital Footprint",
      metric: "Digital Growth",
      href: "https://brandingpioneers.com/apollo",
      description:
        "Helped Apollo Indraprastha grow its digital footprint and patient base through strategic digital marketing.",
      image: "https://brandingpioneers.com/assets/apollo-img.webp",
      stats: { growth: "200%", visibility: "300%", engagement: "250%" },
    },
    {
      title: "DST Industries",
      category: "Manufacturing • SEO",
      metric: "200% Traffic Increase",
      href: "https://brandingpioneers.com/dst",
      description:
        "Our efforts led to a 200% increase in organic search traffic and improved online visibility.",
      image: "https://brandingpioneers.com/assets/dst-img1.webp",
      stats: { traffic: "200%", leads: "180%", rankings: "Top 10" },
    },
  ];

  const testimonials = [
    {
      name: "Mr. Amit",
      company: "Marketing Head, Allora Dental in Bangalore",
      content:
        "Outstanding results! Our website traffic increased by 400% within 6 months. The team at Branding Pioneers truly understands digital marketing.",
      rating: 5,
      initials: "MA",
    },
    {
      name: "Dr. Inderjeet Kundu",
      company: "Founder, Pratham Diagnostic",
      content:
        "The best digital marketing agency in Gurgaon. Their strategic approach and execution delivered exceptional ROI for our diagnostic center.",
      rating: 5,
      initials: "IK",
    },
    {
      name: "Mr. Raghavendra",
      company: "Founder, Rad Foods",
      content:
        "Professional team, exceptional service, and incredible results. Our online presence has transformed completely.",
      rating: 5,
      initials: "MR",
    },
  ];

  const stats = [
    {
      number: "8+",
      label: "Years In Business",
      icon: <Award className="h-5 w-5" />,
    },
    {
      number: "50+",
      label: "Team Members",
      icon: <Users className="h-5 w-5" />,
    },
    {
      number: "500+",
      label: "Happy Clients",
      icon: <Star className="h-5 w-5" />,
    },
    {
      number: "700+",
      label: "Projects Done",
      icon: <CheckCircle className="h-5 w-5" />,
    },
  ];

  const caseStudyStats = [
    { label: "Successful SEO campaigns", value: "140+" },
    { label: "Digital marketing services", value: "6" },
    { label: "Traffic increase", value: "85%" },
    { label: "Satisfied clients", value: "500+" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <img
                  src="https://brandingpioneers.com/assets/logo.png"
                  alt="Branding Pioneers Logo"
                />
              </div>
              <span className="font-bold text-xl text-foreground">
                Branding Pioneers
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-accent transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-accent transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-accent transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className="text-foreground hover:text-accent transition-colors"
              >
                Our Work
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-foreground hover:text-accent transition-colors"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-accent transition-colors"
              >
                Contact
              </button>
              <Button
                variant="accent"
                size="sm"
                onClick={() => scrollToSection("contact")}
              >
                Get Started
              </Button>
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-background border-t border-border py-4">
              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-left px-4 py-2 text-foreground hover:text-accent"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-left px-4 py-2 text-foreground hover:text-accent"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left px-4 py-2 text-foreground hover:text-accent"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("work")}
                  className="text-left px-4 py-2 text-foreground hover:text-accent"
                >
                  Our Work
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-left px-4 py-2 text-foreground hover:text-accent"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left px-4 py-2 text-foreground hover:text-accent"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 pb-16 px-4 bg-gradient-to-br from-background to-secondary/30"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Badge
                variant="secondary"
                className="text-accent font-semibold border-accent/20"
              >
                #1 Digital Marketing Agency in Gurgaon & Gurugram
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Best Digital Marketing Agency in Gurgaon -
                <span className="text-accent"> Data-Driven Growth</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Leading digital marketing company in Gurgaon delivering
                exceptional results with AI-powered strategies. As the premier
                digital marketing agency in Gurugram, our digital marketing
                services in Gurgaon have helped 500+ clients achieve 350%
                average growth and 45% faster campaign results. Choose the best
                digital marketing agency in Gurgaon for guaranteed ROI.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="cta"
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <a
                  href="https://brandingpioneers.com/testimonials"
                  className="flex items-center text-foreground hover:text-accent transition-colors border-2 border-gray-300 hover:border-teal-500 px-3 rounded-md"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch Our Work
                </a>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-3 bg-card rounded-lg border border-border"
                  >
                    <div className="text-2xl font-bold text-accent">
                      {stat.number}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://brandingpioneers.com/assets/banner.webp"
                alt="Best digital marketing agency in Gurgaon - Branding Pioneers team"
                className="rounded-xl  w-full h-auto"
              />
              <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-lg shadow-lg border border-border">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-accent" />
                  <div>
                    <div className="text-xl font-bold text-accent">+350%</div>
                    <div className="text-xs text-muted-foreground">
                      Avg. Growth
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logo Carousel */}
      <section className="py-8 bg-secondary/20 border-y border-border">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-6">
            <p className="text-sm font-medium text-muted-foreground mb-2">
              Trusted by Leading Brands in Gurgaon & Beyond
            </p>
          </div>
          <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap opacity-60 hover:opacity-80 transition-opacity">
            <div className="flex items-center gap-2 text-lg font-bold text-foreground">
              <img
                src="https://brandingpioneers.com/assets/aiims.webp"
                alt=""
                className="w-full h-14 "
              />
            </div>
            <div className="flex items-center gap-2 text-lg font-bold text-foreground">
              <img
                src="https://brandingpioneers.com/assets/logo.webp"
                alt=""
                className="w-full h-14 "
              />
            </div>
            <div className="flex items-center gap-2 text-lg font-bold text-foreground">
              <img
                src="https://brandingpioneers.com/assets/astrovazar.webp"
                alt=""
                className="w-full h-14 "
              />
            </div>
            <div className="flex items-center gap-2 text-lg font-bold text-foreground">
              <img
                src="https://brandingpioneers.com/assets/aureus-new-logo.webp"
                alt=""
                className="w-full h-14 "
              />
            </div>
            <div className="flex items-center gap-2 text-lg font-bold text-foreground">
              <img
                src="https://brandingpioneers.com/assets/IGEHRC-new-logo.webp"
                alt=""
                className="w-full h-14 "
              />
            </div>
            <div className="flex items-center gap-2 text-lg font-bold text-foreground">
              <img
                src="https://brandingpioneers.com/assets/dst.webp"
                alt=""
                className="w-full h-14 "
              />
            </div>
            <div className="flex items-center gap-2 text-lg font-bold text-foreground">
              <img
                src="https://brandingpioneers.com/assets/influenz-logo.webp"
                alt=""
                className="w-full h-14 "
              />
            </div>
            <div className="flex items-center gap-2 text-lg font-bold text-foreground">
              <img
                src="https://brandingpioneers.com/assets/lifecare-new-logo.webp"
                alt=""
                className="w-full h-14 "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-accent/5 via-background to-accent/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <Badge
              variant="secondary"
              className="text-accent font-semibold border-accent/20 mb-4"
            >
              Excellence in Numbers
            </Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Top Digital Marketing Companies in Gurgaon Choose Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our track record speaks for itself. As the best digital marketing
              company in Gurgaon and leading digital marketing agency in
              Gurugram, we deliver consistent results that drive business growth
              across the region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="relative group ">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 "></div>
                <Card className="relative bg-card/90 backdrop-blur-sm border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden ">
                  <CardContent className="p-3 text-center">
                    <div className="flex flex-row w-fit mx-auto gap-2 items-center">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto  group-hover:bg-accent/20 transition-colors">
                        <div className="text-accent">{stat.icon}</div>
                      </div>
                      <div className="text-3xl font-bold text-accent ">
                        {stat.number}
                      </div>
                    </div>
                    <div className="text-sm font-medium text-foreground">
                      {stat.label}
                    </div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent/50"></div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Card className="bg-gradient-to-r from-accent/5 to-accent/10 border-accent/20 max-w-4xl mx-auto">
              <CardContent className="p-4">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">
                      350%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Average ROI Increase
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">
                      45%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Faster Campaign Results
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">
                      94%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Client Satisfaction Rate
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-card">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <Badge
              variant="secondary"
              className="text-accent font-semibold border-accent/20 mb-4"
            >
              Transform Your Digital Presence
            </Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Top Digital Marketing Services in Gurgaon & Gurugram
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              As the leading digital marketing agency in Gurgaon and top digital
              marketing agency in Gurugram, we provide comprehensive digital
              marketing services including SEO optimization, social media
              marketing, and performance analytics that deliver exceptional
              results for businesses across Gurgaon and Gurugram. Our digital
              marketing company in Gurgaon specializes in data-driven strategies
              that boost ROI and accelerate growth. Trust the best digital
              marketing agency in Gurgaon for your business transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <div className="text-accent">{service.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Explore our offerings
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {caseStudyStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="gurgaon.jpg"
                alt="Branding Pioneers team - Best digital marketing company in Gurgaon"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <Badge
                variant="secondary"
                className="text-accent font-semibold border-accent/20"
              >
                About Branding Pioneers
              </Badge>
              <h2 className="text-3xl font-bold text-foreground">
                Why We're the Best Digital Marketing Company in Gurgaon
              </h2>
              <p className="text-lg text-muted-foreground">
                With 8+ years of experience and 700+ successful projects,
                Branding Pioneers stands as the premier digital marketing agency
                in Gurgaon and leading digital marketing company in Gurgaon. We
                understand the unique challenges of the Gurgaon and Gurugram
                market. As the best digital marketing agency in Gurgaon, we've
                helped 500+ happy clients across various industries achieve
                remarkable digital growth through our proven digital marketing
                agency in Gurugram expertise.
              </p>

              <div className="space-y-4">
                {[
                  "Data-driven strategies that deliver measurable results",
                  "Deep understanding of Gurgaon's business landscape",
                  "Dedicated team of 50+ digital marketing experts",
                  "Transparent reporting and regular performance updates",
                  "ROI-focused approach with guaranteed improvements",
                  "8+ years of proven excellence in digital marketing services",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>

              <Button
                variant="cta"
                size="lg"
                onClick={() => scrollToSection("contact")}
              >
                Start Growing Your Business
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-16 px-4 bg-card">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <Badge
              variant="secondary"
              className="text-accent font-semibold border-accent/20 mb-4"
            >
              Our Work & Case Studies
            </Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Proven Digital Marketing Results for Gurgaon & Gurugram Businesses
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Discover how our top digital marketing agency in Gurgaon and best
              digital marketing agency in Gurgaon has transformed businesses
              with strategic digital marketing campaigns. From healthcare to
              manufacturing, our digital marketing company in Gurgaon and
              digital marketing agency in Gurugram deliver measurable growth and
              exceptional ROI for companies across all industries in the
              Gurgaon-Gurugram region.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {portfolioItems.map((item, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-500 border-border hover:border-accent/30 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.title} - Digital marketing success case study`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    {item.metric}
                  </div>
                  <div className="absolute bg-white hover:bg-teal-100 p-1 px-3 rounded-lg flex flex-row items-center bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <a
                      href={item.href}
                      className="text-foreground text-xs font-semibold "
                    >
                      View Details
                    </a>
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </div>
                </div>
                <CardContent className="p-6 relative">
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-accent font-medium">
                      {item.category}
                    </p>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {Object.entries(item.stats).map(([key, value], i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-br from-accent/5 to-accent/10 p-3 rounded-lg border border-accent/10 text-center group-hover:border-accent/20 transition-all"
                      >
                        <div className="text-lg font-bold text-accent">
                          {value}
                        </div>
                        <div className="text-xs text-muted-foreground capitalize font-medium">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent/70 to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-secondary/30 border-gray-300 border rounded-xl p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  AIIMS Geriatrics - Featured Case Study
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our strategic video marketing efforts resulted in a 400%
                  increase in video engagement and a 2x growth in social media
                  following, helping drive patient consultations and raise
                  awareness.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-card rounded-lg">
                    <div className="text-2xl font-bold text-accent">438.9K</div>
                    <div className="text-sm text-muted-foreground">
                      Monthly Views
                    </div>
                  </div>
                  <div className="text-center p-3 bg-card rounded-lg">
                    <div className="text-2xl font-bold text-accent">
                      6.9K hrs
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Watch Time
                    </div>
                  </div>
                </div>
                <a
                  href="https://brandingpioneers.com/aiims"
                  className="text-accent font-semibold flex items-center hover:underline"
                >
                  View Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
              <div>
                <img
                  src="https://brandingpioneers.com/assets/IGEH.png"
                  alt="AIIMS Geriatrics video marketing results dashboard"
                  className="rounded-lg  w-full h-64 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <Badge
              variant="secondary"
              className="text-accent font-semibold border-accent/20 mb-4"
            >
              What Our Clients Say
            </Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Hear Success Stories from Our Gurgaon Clients
            </h2>
            <p className="text-lg text-muted-foreground">
              Transforming businesses with our digital marketing expertise
              across industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 border-border"
              >
                <CardContent className="p-0">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-6">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <span className="text-accent font-semibold text-sm">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-card">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <Badge
              variant="secondary"
              className="text-accent font-semibold border-accent/20 mb-4"
            >
              Get In Touch
            </Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg text-muted-foreground">
              Contact the best digital marketing agency in Gurgaon and leading
              digital marketing company in Gurgaon for a free consultation and
              custom strategy for your business. Our digital marketing agency in
              Gurugram is ready to transform your brand.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        Our Gurgaon Office
                      </div>
                      <a
                        href="https://maps.app.goo.gl/PEH2kmBmCfemscpEA"
                        className="text-muted-foreground text-sm hover:text-accent transition-colors"
                      >
                        Plot No - 750, 3rd Floor, Phase V, Udyog Vihar, Sector
                        19, Gurugram, Haryana 122016
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        Call Us Today
                      </div>
                      <a
                        href="tel: +91 9811780937"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        +91 9811780937
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        Email Us
                      </div>
                      <a
                        href="mailto:official@brandingpioneers.com"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        official@brandingpioneers.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <img
                src="branding-pioneers.png"
                alt="Branding Pioneers digital marketing agency office in Gurgaon"
                className="rounded-lg object-center shadow-lg w-full h-52 object-cover"
              />
            </div>

            <Card className="p-6 shadow-lg border-border">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-xl text-foreground">
                  Send us a message
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Fill out the form and we'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <form
                accept-charset="UTF-8"
                action="https://app.formester.com/forms/xez2NNYVA/submissions"
                className="space-y-4"
                method="POST"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      placeholder="Your full name"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">
                      Phone Number *
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                      placeholder="Your phone number"
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    placeholder="your.email@company.com"
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">
                    Your Message
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    placeholder="Tell us about your business goals and marketing needs..."
                    rows={4}
                    className="mt-1"
                  />
                </div>
                <input
                  type="hidden"
                  name="location page"
                  value="best-digital-marketing-agency-in-gurgaon"
                ></input>
                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  className="w-full"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-background border-t border-border">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                  <img
                    src="https://brandingpioneers.com/assets/logo.png"
                    alt="footer logo"
                  />
                </div>
                <span className="font-bold text-lg text-foreground">
                  Branding Pioneers
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                Plot No - 750, 3rd Floor, Phase V, Udyog Vihar, Sector 19,
                Gurugram, Haryana 122016
              </p>
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm">+91 9811780937</p>
                <p className="text-muted-foreground text-sm">
                  official@brandingpioneers.com
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Services</h3>
              <div className="space-y-2 flex flex-col">
                <a
                  href="https://brandingpioneers.com/ads-lead-generation"
                  className="text-muted-foreground text-sm hover:text-accent cursor-pointer"
                >
                  Paid Advertising
                </a>
                <a
                  href="https://brandingpioneers.com/seo-services-in-india"
                  className="text-muted-foreground text-sm hover:text-accent cursor-pointer"
                >
                  SEO Optimization
                </a>
                <a
                  href="https://brandingpioneers.com/website-design-services-in-india"
                  className="text-muted-foreground text-sm hover:text-accent cursor-pointer"
                >
                  Web Development
                </a>
                <a
                  href="https://brandingpioneers.com/social-media-marketing-in-india"
                  className="text-muted-foreground text-sm hover:text-accent cursor-pointer"
                >
                  Social Media Marketing
                </a>
                <a
                  href="https://brandingpioneers.com/content-marketing"
                  className="text-muted-foreground text-sm hover:text-accent cursor-pointer"
                >
                  Content Marketing
                </a>
                <a
                  href="https://brandingpioneers.com/whatsapp-email-sms-services-in-india"
                  className="text-muted-foreground text-sm hover:text-accent cursor-pointer"
                >
                  WhatsApp Marketing
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Industries</h3>
              <div className="space-y-2 flex flex-col">
                <a
                  href="https://brandingpioneers.com/main-portfolio"
                  className="text-muted-foreground text-sm hover:text-accent cursor-pointer"
                >
                  E-commerce
                </a>
                <a
                  href="https://brandingpioneers.com/main-portfolio"
                  className="text-muted-foreground text-sm hover:text-accent cursor-pointer"
                >
                  Healthcare
                </a>
                <a
                  href="https://brandingpioneers.com/main-portfolio"
                  className="text-muted-foreground text-sm hover:text-accent cursor-pointer"
                >
                  FinTech
                </a>
                <a
                  href="https://brandingpioneers.com/main-portfolio"
                  className="text-muted-foreground text-sm hover:text-accent cursor-pointer"
                >
                  Education
                </a>
                <a
                  href="https://brandingpioneers.com/main-portfolio"
                  className="text-muted-foreground text-sm hover:text-accent cursor-pointer"
                >
                  Manufacturing
                </a>
                <a
                  href="https://brandingpioneers.com/main-portfolio"
                  className="text-muted-foreground text-sm hover:text-accent cursor-pointer"
                >
                  Startups
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <div className="space-y-2 flex flex-col">
                <a
                  href="https://brandingpioneers.com/about"
                  className="text-muted-foreground text-sm hover:text-accent cursor-pointer"
                >
                  About Us
                </a>
                <a
                  href="https://brandingpioneers.com/teams"
                  className="text-muted-foreground text-sm hover:text-accent cursor-pointer"
                >
                  Our Team
                </a>
                <a
                  href="https://brandingpioneers.com/main-portfolio"
                  className="text-muted-foreground text-sm hover:text-accent cursor-pointer"
                >
                  Case Studies
                </a>
                <a
                  href="https://brandingpioneers.com/career"
                  className="text-muted-foreground text-sm hover:text-accent cursor-pointer"
                >
                  Career
                </a>
                <a
                  href="https://brandingpioneers.com/contact"
                  className="text-muted-foreground text-sm hover:text-accent cursor-pointer"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Branding Pioneers - Best Digital Marketing Agency in
              Gurgaon & Leading Digital Marketing Company in Gurgaon. All rights
              reserved.
            </p>
            {/* <div className="flex gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground"
              >
                Privacy Policy
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground"
              >
                Terms of Service
              </Button>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
