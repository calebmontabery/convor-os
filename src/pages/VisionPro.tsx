import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, Users, DollarSign, MessageCircle, Plus, Eye } from "lucide-react";

export default function VisionPro() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Eye className="w-8 h-8 text-primary" />
            VisionPro
          </h1>
          <p className="text-muted-foreground">Define your vision, goals, and strategy foundation</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          New Vision Plan
        </Button>
      </div>

      {/* Quick Setup Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Target className="w-5 h-5 text-primary" />
              Goals & KPIs
            </CardTitle>
            <CardDescription>Define measurable objectives</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">Set Goals</Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Users className="w-5 h-5 text-primary" />
              Target Audience
            </CardTitle>
            <CardDescription>Define your ideal customers</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">Define ICP</Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <DollarSign className="w-5 h-5 text-primary" />
              Offers & Products
            </CardTitle>
            <CardDescription>What you're promoting</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">Add Offers</Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <MessageCircle className="w-5 h-5 text-primary" />
              Brand Voice
            </CardTitle>
            <CardDescription>Your unique communication style</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">Define Voice</Button>
          </CardContent>
        </Card>
      </div>

      {/* Vision Templates */}
      <Card>
        <CardHeader>
          <CardTitle>Strategy Templates</CardTitle>
          <CardDescription>Start with proven frameworks for your industry</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "SaaS Growth",
                description: "Product-led growth strategy for software companies",
                pillars: ["Product Education", "Case Studies", "Feature Updates"],
                badge: "Popular"
              },
              {
                title: "E-commerce Brand",
                description: "Brand awareness and conversion strategy for online stores",
                pillars: ["Product Showcases", "Customer Stories", "Behind-the-Scenes"],
                badge: "New"
              },
              {
                title: "Service Business",
                description: "Authority building for consultants and agencies",
                pillars: ["Thought Leadership", "Process Insights", "Client Results"],
                badge: "Trending"
              }
            ].map((template, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{template.title}</CardTitle>
                    <Badge variant="secondary">{template.badge}</Badge>
                  </div>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium mb-2">Content Pillars:</p>
                      <div className="flex flex-wrap gap-1">
                        {template.pillars.map((pillar, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {pillar}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Use Template
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Strategy Assistant */}
      <Card className="glass-effect">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-r from-primary to-primary/70 flex items-center justify-center">
              <span className="text-xs text-primary-foreground font-bold">AI</span>
            </div>
            Strategy Assistant
          </CardTitle>
          <CardDescription>
            Get personalized strategy recommendations based on your goals and industry
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-sm">
                <strong>AI Insight:</strong> Based on your SaaS industry selection, consider focusing on 
                product education content with a 60-30-10 split: tutorials, case studies, and company updates.
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Generate Content Pillars</Button>
              <Button variant="outline" size="sm">Suggest Posting Schedule</Button>
              <Button variant="outline" size="sm">Competitor Analysis</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}