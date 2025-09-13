import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Brain, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-learning flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            <Brain className="w-4 h-4" />
            AI-Powered Learning Platform
          </div>
          
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
              Adaptive
              <span className="bg-gradient-hero bg-clip-text text-transparent"> Learning</span>
              <br />Management
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Personalize your learning journey with AI-powered assessments, document processing, 
              and intelligent recommendations tailored to your unique learning patterns.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-card">
              <BookOpen className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">Smart Content</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-card">
              <Brain className="w-6 h-6 text-accent" />
              <span className="text-sm font-medium">AI Assessments</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-card">
              <TrendingUp className="w-6 h-6 text-success" />
              <span className="text-sm font-medium">Progress Analytics</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="relative">
          <div className="relative z-10">
            <img 
              src={heroImage} 
              alt="Adaptive Learning Platform Interface"
              className="w-full rounded-2xl shadow-glow"
            />
          </div>
          
          {/* Floating Cards */}
          <div className="absolute -top-4 -left-4 bg-card p-4 rounded-xl shadow-elegant animate-bounce">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span className="text-sm font-medium">95% Success Rate</span>
            </div>
          </div>
          
          <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-xl shadow-elegant animate-bounce delay-300">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-sm font-medium">AI-Powered</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;