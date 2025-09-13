import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Star, Clock, BookOpen, Target, ArrowRight, Brain, TrendingUp } from "lucide-react";

const RecommendationsSection = () => {
  const recommendations = [
    {
      title: "Review Linear Algebra Fundamentals",
      type: "Study Topic",
      priority: "High",
      reason: "Struggling with ML algorithms that require matrix operations",
      estimatedTime: "2-3 hours",
      icon: BookOpen,
      action: "Start Review",
    },
    {
      title: "Practice Coding Interviews",
      type: "Skill Building",
      priority: "Medium",
      reason: "Upcoming assessment in algorithm implementation",
      estimatedTime: "1 hour daily",
      icon: Target,
      action: "Begin Practice",
    },
    {
      title: "Take a Break",
      type: "Wellness",
      priority: "High",
      reason: "You've been studying for 4 hours straight",
      estimatedTime: "15-30 minutes",
      icon: Clock,
      action: "Take Break",
    },
  ];

  const studyPlans = [
    {
      title: "Machine Learning Mastery",
      duration: "4 weeks",
      difficulty: "Advanced",
      progress: 35,
      topics: ["Neural Networks", "Deep Learning", "Model Optimization"],
      nextSession: "Today, 2:00 PM",
    },
    {
      title: "Data Structures Bootcamp", 
      duration: "2 weeks",
      difficulty: "Intermediate",
      progress: 78,
      topics: ["Trees", "Graphs", "Hash Tables"],
      nextSession: "Tomorrow, 10:00 AM",
    },
  ];

  const learningTips = [
    { tip: "Use spaced repetition for better retention", match: 92 },
    { tip: "Study in 25-minute focused sessions", match: 85 },
    { tip: "Practice active recall with flashcards", match: 78 },
    { tip: "Teach concepts to solidify understanding", match: 88 },
  ];

  return (
    <section id="recommendations" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-foreground">Personalized Recommendations</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI-powered suggestions tailored to your learning patterns and goals
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Smart Recommendations */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">Smart Recommendations</h3>
            </div>

            {recommendations.map((rec, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      rec.priority === "High" ? "bg-destructive/10" : "bg-warning/10"
                    }`}>
                      <rec.icon className={`w-6 h-6 ${
                        rec.priority === "High" ? "text-destructive" : "text-warning"
                      }`} />
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-foreground text-lg">{rec.title}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline">{rec.type}</Badge>
                            <Badge variant={rec.priority === "High" ? "destructive" : "secondary"}>
                              {rec.priority} Priority
                            </Badge>
                          </div>
                        </div>
                        <Button variant={rec.priority === "High" ? "default" : "outline"}>
                          {rec.action}
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                      
                      <p className="text-muted-foreground">{rec.reason}</p>
                      
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        Estimated time: {rec.estimatedTime}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Study Plans */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Recommended Study Plans</h3>
              
              {studyPlans.map((plan, index) => (
                <Card key={index} className="shadow-card mb-4">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-foreground text-lg">{plan.title}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline">{plan.duration}</Badge>
                          <Badge variant="secondary">{plan.difficulty}</Badge>
                        </div>
                      </div>
                      <Button variant="hero">Continue Plan</Button>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="text-foreground font-medium">{plan.progress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${plan.progress}%` }}
                        ></div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mt-3">
                        {plan.topics.map((topic, i) => (
                          <Badge key={i} variant="outline" className="text-xs">{topic}</Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-1 text-sm text-primary">
                        <Clock className="w-4 h-4" />
                        Next session: {plan.nextSession}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Learning Tips & Insights */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-accent" />
                  Learning Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {learningTips.map((tip, index) => (
                  <div key={index} className="p-3 rounded-lg bg-learning-card">
                    <div className="flex items-start justify-between mb-2">
                      <p className="text-sm text-foreground font-medium">{tip.tip}</p>
                      <div className="flex items-center gap-1 text-xs text-accent">
                        <Star className="w-3 h-3" />
                        {tip.match}%
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1">
                      <div 
                        className="bg-accent h-1 rounded-full transition-all duration-300"
                        style={{ width: `${tip.match}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-card bg-gradient-learning">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Performance Boost</h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Following AI recommendations has improved learning efficiency by 34%
                  </p>
                </div>
                <div className="text-2xl font-bold text-primary">+34%</div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6 space-y-4">
                <div className="text-center">
                  <h4 className="font-semibold text-foreground mb-2">Weekly Learning Goal</h4>
                  <div className="text-3xl font-bold text-accent">85%</div>
                  <p className="text-sm text-muted-foreground">Complete</p>
                </div>
                
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-gradient-accent h-3 rounded-full transition-all duration-500" style={{ width: "85%" }}></div>
                </div>
                
                <div className="text-center text-sm text-muted-foreground">
                  2.5 hours remaining to reach your goal
                </div>
                
                <Button variant="accent" className="w-full">
                  Continue Learning
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;