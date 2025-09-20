import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Eye, 
  Lightbulb, 
  Calendar, 
  Film, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  Star,
  Users,
  Zap,
  Target,
  TrendingUp,
  Play
} from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm fixed w-full top-0 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">C</span>
            </div>
            <h1 className="text-xl font-bold convor-brand">Convor</h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm hover:text-primary transition-colors">Features</a>
            <a href="#pricing" className="text-sm hover:text-primary transition-colors">Pricing</a>
            <a href="#testimonials" className="text-sm hover:text-primary transition-colors">Reviews</a>
            <Button variant="outline" size="sm">Sign In</Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            <Zap className="w-3 h-3 mr-1" />
            The Content Operating System
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
  <span className="convor-brand text-4xl md:text-5xl">
    The content operating system
  </span>
  <br />
  <span className="convor-brand">
    that turns vision into results.
  </span>
</h1>
        
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
           Plan smarter, create faster, and grow bigger with Convor’s 5‑stage content OS.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 bg-gradient-to-br from-primary/30 to-primary/60 rounded-full border-2 border-background flex items-center justify-center">
                    <span className="text-xs font-medium">{i}</span>
                  </div>
                ))}
              </div>
              <span>2,500+ creators</span>
            </div>
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
              <span>4.9/5 rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">5-Stage Content Operating System</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From vision to results. Every stage optimized for maximum conversion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "VisionPro",
                subtitle: "Vision & Goals",
                description: "Define business goals, KPIs, ICPs, and brand voice. AI strategy prompts guide your positioning and content pillars.",
                features: ["Goal Templates", "AI Strategy Assistant", "ICP Definition", "Brand Voice Builder"]
              },
              {
                icon: Lightbulb,
                title: "PrePro",
                subtitle: "Pre-Production",
                description: "Idea banks, frameworks, and AI-powered content planning. Never run out of content ideas again.",
                features: ["Idea Banks", "Content Frameworks", "AI Prompt Composer", "Multi-format Planning"]
              },
              {
                icon: Calendar,
                title: "ProDay",
                subtitle: "Production",
                description: "Kanban workflow with task timers, dependencies, and AI structure guidance. Stay organized and on-track.",
                features: ["Kanban Boards", "Task Dependencies", "Time Tracking", "Asset Management"]
              },
              {
                icon: Film,
                title: "PostPro",
                subtitle: "Post-Production",
                description: "Editing pipeline and repurposing recipes. Turn one piece of content into multiple formats automatically.",
                features: ["Editing Pipeline", "Repurposing Recipes", "AI Optimization", "Multi-platform Export"]
              },
              {
                icon: BarChart3,
                title: "FlowPro",
                subtitle: "Distribution & Analytics",
                description: "Scheduler, performance dashboards, and AI insights. Optimize everything for maximum ROI.",
                features: ["Multi-platform Scheduler", "Advanced Analytics", "Trend Detection", "ROI Tracking"]
              },
              {
                icon: Users,
                title: "Community",
                subtitle: "Social Layer",
                description: "Connect with other creators, share templates, and stay accountable. Success is better together.",
                features: ["Creator Network", "Template Marketplace", "Progress Sharing", "Peer Accountability"]
              }
            ].map((feature, index) => (
              <Card key={index} className="glass-effect hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                      <Badge variant="outline" className="text-xs">{feature.subtitle}</Badge>
                    </div>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground">
              Start free, scale as you grow. No hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Free",
                price: "0",
                description: "Perfect for getting started",
                features: [
                  "1 workspace",
                  "1 active project", 
                  "VisionPro + PrePro basic",
                  "Manual analytics import",
                  "Community access",
                  "Limited storage (1GB)"
                ],
                button: "Start Free",
                popular: false
              },
              {
                name: "Pro",
                price: "29",
                description: "For serious content creators",
                features: [
                  "Unlimited projects",
                  "Full 5-stage workflow", 
                  "Advanced analytics",
                  "AI assistant",
                  "Template marketplace",
                  "50GB storage",
                  "Priority support"
                ],
                button: "Start Pro Trial",
                popular: true
              },
              {
                name: "Premium",
                price: "99",
                description: "For teams and agencies",
                features: [
                  "Everything in Pro",
                  "AI-assisted drafting",
                  "Team permissions",
                  "Advanced integrations",
                  "White-label options",
                  "500GB storage",
                  "Dedicated support"
                ],
                button: "Contact Sales",
                popular: false
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-primary shadow-lg scale-105' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.button}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Loved by Content Creators</h2>
            <p className="text-xl text-muted-foreground">
              See what our community is saying about Convor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "SaaS Founder",
                content: "Convor transformed how we approach content. From scattered tools to one unified system. Our conversion rate increased 340% in 3 months.",
                rating: 5
              },
              {
                name: "Marcus Rodriguez",
                role: "Marketing Agency Owner",
                content: "The AI strategy assistant is game-changing. It helped us identify content gaps we never knew existed. Now we're more strategic than ever.",
                rating: 5
              },
              {
                name: "Emily Foster",
                role: "Content Creator",
                content: "Finally, a tool that understands the full content lifecycle. The community features keep me motivated and accountable.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="glass-effect">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/30 to-primary/60 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium">{testimonial.name[0]}</span>
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Content Strategy?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of creators who've already made the switch to Convor. 
            Start your free trial today - no credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Schedule Demo
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            Free 14-day trial • Cancel anytime • No setup fees
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 bg-muted/20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">C</span>
              </div>
              <span className="font-bold convor-brand">Convor</span>
            </div>
            
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Support</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="text-center text-sm text-muted-foreground mt-8 pt-8 border-t border-border">
            © 2024 Convor. All rights reserved. Create. Convert. Convor.
          </div>
        </div>
      </footer>
    </div>
  );
}
