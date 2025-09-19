import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Eye, 
  Lightbulb, 
  Calendar, 
  Film, 
  BarChart3, 
  TrendingUp,
  Target,
  Clock,
  Plus
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Your content operating system overview</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          New Content Plan
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              +2 from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Content Published</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-muted-foreground">
              +18% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45.2K</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.4%</div>
            <p className="text-xs text-muted-foreground">
              +0.8% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Active Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Active Content Plans</CardTitle>
            <CardDescription>Projects currently in progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: "Q4 Product Launch", stage: "PostPro", progress: 75, icon: Film },
              { name: "Brand Awareness Campaign", stage: "ProDay", progress: 45, icon: Calendar },
              { name: "Holiday Content Series", stage: "PrePro", progress: 30, icon: Lightbulb }
            ].map((project, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <project.icon className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{project.name}</p>
                    <Badge variant="outline">{project.stage}</Badge>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>
                <span className="text-sm text-muted-foreground">{project.progress}%</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates across your projects</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { action: "Completed video editing", project: "Q4 Product Launch", time: "2 hours ago" },
              { action: "Added new content ideas", project: "Brand Campaign", time: "4 hours ago" },
              { action: "Scheduled posts", project: "Holiday Series", time: "1 day ago" },
              { action: "Analytics review", project: "Summer Campaign", time: "2 days ago" }
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.project}</p>
                </div>
                <span className="text-xs text-muted-foreground flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {activity.time}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Jump into your workflow</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { title: "Set Goals", subtitle: "VisionPro", icon: Eye, href: "/vision" },
              { title: "Brainstorm Ideas", subtitle: "PrePro", icon: Lightbulb, href: "/prepro" },
              { title: "Plan Tasks", subtitle: "ProDay", icon: Calendar, href: "/proday" },
              { title: "Edit Content", subtitle: "PostPro", icon: Film, href: "/postpro" },
              { title: "View Analytics", subtitle: "FlowPro", icon: BarChart3, href: "/flowpro" }
            ].map((action, index) => (
              <Button 
                key={index} 
                variant="outline" 
                className="h-20 flex-col gap-2 hover:bg-primary hover:text-primary-foreground"
              >
                <action.icon className="w-5 h-5" />
                <div className="text-center">
                  <div className="text-sm font-medium">{action.title}</div>
                  <div className="text-xs opacity-80">{action.subtitle}</div>
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}