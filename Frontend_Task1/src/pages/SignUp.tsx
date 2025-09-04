import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import AuthLayout from "@/components/auth/AuthLayout";
import SocialButtons from "@/components/auth/SocialButtons";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agreeToTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log("Sign up:", formData);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <AuthLayout>
      <div className="grid lg:grid-cols-3 gap-0 rounded-3xl overflow-hidden shadow-auth animate-fade-in">
        {/* Sign In Preview (Desktop) */}
        <Card className="hidden lg:block border-0 rounded-none lg:rounded-l-3xl bg-gradient-card backdrop-blur-sm animate-scale-in">
          <CardContent className="p-8 h-full flex flex-col justify-center">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-card animate-float">
                  <span className="text-3xl text-primary-foreground">✚</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Already a Member?</h3>
              <p className="text-muted-foreground mb-8 text-lg">Sign in to access your account</p>
              <Link to="/signin">
                <Button className="bg-gradient-button hover:bg-gradient-button-hover text-primary-foreground rounded-xl px-8 py-3 font-semibold shadow-button hover:shadow-button-hover transition-all duration-300 transform hover:scale-105">
                  Sign In
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Welcome Section */}
        <div className="hidden lg:flex bg-gradient-welcome items-center justify-center text-center text-auth-welcome-foreground p-8 relative overflow-hidden animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>Start New Journey!</h2>
            <p className="mb-8 text-xl opacity-90 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              Already have an account?
            </p>
            <Link to="/signin">
              <Button
                variant="outline"
                className="border-2 border-auth-welcome-foreground text-auth-welcome-foreground hover:bg-auth-welcome-foreground hover:text-auth-welcome rounded-xl px-10 py-3 font-semibold transition-all duration-300 transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: '0.6s' }}
              >
                Sign In
              </Button>
            </Link>
          </div>
          {/* Enhanced Background pattern */}
          <div className="absolute inset-0">
            <div className="w-full h-full opacity-20" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3Ccircle cx='0' cy='20' r='3'/%3E%3Ccircle cx='40' cy='20' r='3'/%3E%3Ccircle cx='20' cy='0' r='3'/%3E%3Ccircle cx='20' cy='40' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
        </div>

        {/* Sign Up Form */}
        <Card className="border-0 rounded-none lg:rounded-r-3xl bg-gradient-card backdrop-blur-sm animate-scale-in" style={{ animationDelay: '0.3s' }}>
          <CardHeader className="text-center pt-8 pb-6">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-button animate-float">
                <span className="text-3xl text-primary-foreground">✚</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">Create Account</h1>
            <SocialButtons />
          </CardHeader>
          
          <CardContent className="px-8 pb-8">
            <div className="text-center mb-6">
              <span className="text-sm text-muted-foreground">or use your email for registration:</span>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Label htmlFor="name" className="text-sm font-semibold">Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="rounded-xl border-2 border-border bg-input/50 backdrop-blur-sm focus:border-primary transition-all duration-300 hover:border-primary/50"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <Label htmlFor="email" className="text-sm font-semibold">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="rounded-xl border-2 border-border bg-input/50 backdrop-blur-sm focus:border-primary transition-all duration-300 hover:border-primary/50"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <Label htmlFor="password" className="text-sm font-semibold">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="rounded-xl border-2 border-border bg-input/50 backdrop-blur-sm focus:border-primary transition-all duration-300 hover:border-primary/50"
                  placeholder="Create a strong password"
                  required
                />
              </div>

              <div className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: '0.7s' }}>
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => handleInputChange("agreeToTerms", !!checked)}
                  className="rounded-md"
                />
                <Label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                  I agree to the Terms and Conditions
                </Label>
              </div>
              
              <Button
                type="submit"
                disabled={!formData.agreeToTerms}
                className="w-full bg-gradient-button hover:bg-gradient-button-hover text-primary-foreground rounded-xl font-semibold py-3 shadow-button hover:shadow-button-hover transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:transform-none animate-fade-in"
                style={{ animationDelay: '0.8s' }}
              >
                Sign Up
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Sign In Preview (Mobile) */}
        <div className="lg:hidden bg-gradient-card p-6 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-sm text-muted-foreground mb-4">Already have an account?</p>
          <Link to="/signin">
            <Button variant="outline" className="rounded-xl px-6 py-2 transition-all duration-300 hover:scale-105">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUp;