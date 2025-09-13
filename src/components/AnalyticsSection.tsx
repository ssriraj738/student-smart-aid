import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Target, Clock, Brain, Award, BarChart3, Calendar } from "lucide-react";

const AnalyticsSection = () => {
  const stats = [
    { label: "Overall Progress", value: "78%", change: "+12%", trend: "up", icon: TrendingUp },
    { label: "Study Streak", value: "15 days", change: "+3 days", trend: "up", icon: Calendar },
    { label: "Average Score", value: "85%", change: "+8%", trend: "up", icon: Award },
    { label: "Time Spent", value: "24.5h", change: "-2h", trend: "down", icon: Clock },
  ];

  const subjects = [
    { name: "Machine Learning", progress: 85, score: 92, time: "8.5h", difficulty: "Advanced" },
    { name: "Data Structures", progress: 70, score: 78, time: "6.2h", difficulty: "Intermediate" },
    { name: "Algorithms", progress: 45, score: 65, time: "4.8h", difficulty: "Beginner" },
    { name: "Statistics", progress: 90, score: 88, time: "5.1h", difficulty: "Intermediate" },
  ];

  const learningPatterns = [
    { pattern: "Visual Learner", strength: 85, description: "Responds well to diagrams and charts" },
    { pattern: "Sequential Learning", strength: 72, description: "Prefers step-by-step approaches" },
    { pattern: "Active Practice", strength: 68, description: "Benefits from hands-on exercises" },
    { pattern: "Spaced Repetition", strength: 90, description: "Retention improves with review cycles" },
  ];

  return (
    <section id="analytics" className="py-20 bg-learning-bg">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-foreground">Learning Analytics</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track your progress, identify strengths, and discover personalized learning insights
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <div className={`flex items-center gap-1 text-sm ${
                      stat.trend === "up" ? "text-success" : "text-destructive"
                    }`}>
                      {stat.trend === "up" ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <TrendingDown className="w-4 h-4" />
                      )}
                      {stat.change}
                    </div>
                  </div>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    stat.trend === "up" ? "bg-success/10" : "bg-destructive/10"
                  }`}>
                    <stat.icon className={`w-6 h-6 ${
                      stat.trend === "up" ? "text-success" : "text-destructive"
                    }`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Subject Progress */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Subject Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {subjects.map((subject, index) => (
                <div key={index} className="space-y-3 p-4 rounded-lg bg-learning-card">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-foreground">{subject.name}</h4>
                      <Badge variant="outline" className="mt-1">{subject.difficulty}</Badge>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div>Score: {subject.score}%</div>
                      <div>{subject.time}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="text-foreground font-medium">{subject.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${subject.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Learning Patterns */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-accent" />
                Learning Patterns
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {learningPatterns.map((pattern, index) => (
                <div key={index} className="space-y-3 p-4 rounded-lg bg-learning-card">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium text-foreground">{pattern.pattern}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{pattern.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-accent">{pattern.strength}%</div>
                      <div className="text-xs text-muted-foreground">Match</div>
                    </div>
                  </div>
                  
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-accent h-2 rounded-full transition-all duration-500"
                      style={{ width: `${pattern.strength}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Performance Insights */}
        <Card className="mt-8 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Performance Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-lg bg-success/10 border border-success/20">
                <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-success" />
                </div>
                <h4 className="font-semibold text-success">Strength: Problem Solving</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  You excel at breaking down complex problems into manageable steps
                </p>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-warning/10 border border-warning/20">
                <div className="w-12 h-12 bg-warning/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-warning" />
                </div>
                <h4 className="font-semibold text-warning">Area for Growth: Time Management</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Consider using pomodoro technique for better focus
                </p>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-primary">Learning Style: Visual</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Incorporate more diagrams and visual aids in your study sessions
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AnalyticsSection;