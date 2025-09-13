import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Clock, CheckCircle, Play, BarChart3 } from "lucide-react";

const AssessmentSection = () => {
  const assessments = [
    {
      title: "Machine Learning Basics",
      type: "Multiple Choice",
      questions: 15,
      duration: "20 min",
      difficulty: "Beginner",
      status: "Available",
      score: null,
    },
    {
      title: "Data Structures Quiz",
      type: "Mixed Format",
      questions: 12,
      duration: "15 min",
      difficulty: "Intermediate",
      status: "Completed",
      score: 85,
    },
    {
      title: "Algorithm Analysis",
      type: "Long Form",
      questions: 8,
      duration: "30 min",
      difficulty: "Advanced",
      status: "In Progress",
      score: null,
    },
  ];

  const questionTypes = [
    { type: "Multiple Choice", icon: CheckCircle, description: "Traditional MCQ format" },
    { type: "Fill in the Blank", icon: Brain, description: "Test recall and understanding" },
    { type: "Essay Questions", icon: Brain, description: "Assess deep comprehension" },
    { type: "Code Challenges", icon: Play, description: "Programming assessments" },
  ];

  return (
    <section id="assessments" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-foreground">AI-Generated Assessments</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Automatically generated questions tailored to your learning materials and progress
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Assessment List */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-foreground">Your Assessments</h3>
              <Button variant="hero">
                <Brain className="w-4 h-4" />
                Generate New Assessment
              </Button>
            </div>

            {assessments.map((assessment, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-start gap-3">
                        <h4 className="text-lg font-semibold text-foreground">{assessment.title}</h4>
                        <Badge 
                          variant={assessment.status === "Completed" ? "default" : assessment.status === "In Progress" ? "secondary" : "outline"}
                          className="ml-auto"
                        >
                          {assessment.status}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Brain className="w-4 h-4" />
                          {assessment.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <CheckCircle className="w-4 h-4" />
                          {assessment.questions} questions
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {assessment.duration}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Badge variant="outline">{assessment.difficulty}</Badge>
                        {assessment.score && (
                          <div className="flex items-center gap-1 text-success">
                            <BarChart3 className="w-4 h-4" />
                            Score: {assessment.score}%
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="ml-4">
                      {assessment.status === "Available" && (
                        <Button variant="default">Start Assessment</Button>
                      )}
                      {assessment.status === "In Progress" && (
                        <Button variant="accent">Continue</Button>
                      )}
                      {assessment.status === "Completed" && (
                        <Button variant="outline">Review Results</Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Question Types */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  Question Types
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {questionTypes.map((type, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <type.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground text-sm">{type.type}</h4>
                      <p className="text-xs text-muted-foreground">{type.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-card bg-gradient-learning">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <Brain className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">AI-Powered Generation</h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Our AI analyzes your uploaded content to create relevant, challenging assessments
                  </p>
                </div>
                <Button variant="accent" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentSection;