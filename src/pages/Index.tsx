import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import UploadSection from "@/components/UploadSection";
import AssessmentSection from "@/components/AssessmentSection";
import AnalyticsSection from "@/components/AnalyticsSection";
import RecommendationsSection from "@/components/RecommendationsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <UploadSection />
        <AssessmentSection />
        <AnalyticsSection />
        <RecommendationsSection />
        
        {/* Footer */}
        <footer className="bg-card border-t border-border py-12">
          <div className="container mx-auto px-6 lg:px-8 text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">L</span>
              </div>
              <span className="text-xl font-bold text-foreground">LearnAI</span>
            </div>
            <p className="text-muted-foreground max-w-md mx-auto">
              Empowering learners with AI-driven personalized education experiences
            </p>
            <div className="text-sm text-muted-foreground">
              © 2024 LearnAI. Built with modern web technologies.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;