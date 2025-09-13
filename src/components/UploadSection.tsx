import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, FileText, FileImage, FileVideo, CheckCircle } from "lucide-react";
import { useState } from "react";

const UploadSection = () => {
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const handleFileUpload = (fileName: string) => {
    setUploadedFiles(prev => [...prev, fileName]);
  };

  const supportedFormats = [
    { icon: FileText, label: "PDF Documents", description: "Textbooks, papers, notes" },
    { icon: FileText, label: "Text Files", description: "TXT, DOC, DOCX formats" },
    { icon: FileImage, label: "Images", description: "Diagrams, charts, slides" },
    { icon: FileVideo, label: "Audio/Video", description: "Lectures, presentations" },
  ];

  return (
    <section id="upload" className="py-20 bg-learning-bg">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-foreground">Upload Learning Content</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upload your educational materials and let our AI process them for personalized learning experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Area */}
          <Card className="shadow-card hover:shadow-elegant transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="w-5 h-5 text-primary" />
                Document Upload
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center space-y-4 hover:border-primary/50 transition-colors cursor-pointer group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <Upload className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-medium text-foreground">Drop files here or click to upload</p>
                  <p className="text-muted-foreground">Support for PDF, DOC, TXT, images and audio files</p>
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => handleFileUpload("sample-textbook.pdf")}
                  className="mt-4"
                >
                  Choose Files
                </Button>
              </div>

              {/* Uploaded Files */}
              {uploadedFiles.length > 0 && (
                <div className="mt-6 space-y-2">
                  <h4 className="font-medium text-foreground">Uploaded Files:</h4>
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-success/10 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-sm text-foreground">{file}</span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Supported Formats */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Supported File Types</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {supportedFormats.map((format, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <format.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{format.label}</h4>
                      <p className="text-sm text-muted-foreground">{format.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-learning-card rounded-lg border border-border">
                <h4 className="font-medium text-foreground mb-2">AI Processing Features:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Automatic content extraction and analysis</li>
                  <li>• Key concept identification</li>
                  <li>• Question generation from content</li>
                  <li>• Learning objective mapping</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Note */}
        <div className="mt-8 p-6 bg-warning/10 border border-warning/20 rounded-lg text-center">
          <p className="text-warning-foreground">
            <strong>Note:</strong> To enable full document processing and backend functionality, 
            this platform requires integration with Supabase for file storage and AI processing capabilities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;