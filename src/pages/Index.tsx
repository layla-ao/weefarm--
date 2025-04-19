
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ChevronRight, Leaf } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="h-8 w-8 text-violet-600" />
          <span className="font-bold text-2xl text-violet-900">Weefarm</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline" className="font-medium">
              Log in
            </Button>
          </Link>
          <Link to="/register">
            <Button className="font-medium">
              Sign up
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-violet-900 leading-tight">
            Your Agriculture Business, <br />
            <span className="text-violet-600">Made Simple</span>
          </h1>
          <p className="text-xl text-violet-800/80 leading-relaxed">
            Create an interactive showcase website for your agricultural company with our easy-to-use CMS platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/register">
              <Button size="lg" className="font-medium">
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg" className="font-medium">
                Explore the Demo
              </Button>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybSUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D" 
            alt="Agriculture CMS Platform" 
            className="rounded-lg shadow-xl w-full object-cover"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-violet-900 mb-4">
            Everything Your Agricultural Business Needs
          </h2>
          <p className="text-xl text-violet-700/70 max-w-3xl mx-auto">
            Our all-in-one platform helps you manage your agricultural website and marketplace presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-violet-100">
              <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-violet-900 mb-2">{feature.title}</h3>
              <p className="text-violet-700/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-violet-900 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-violet-700/70 max-w-3xl mx-auto">
            Have any questions or concerns? We're here to help!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="What is your concern about?" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                placeholder="Please describe your issue or question" 
                className="min-h-[150px]"
              />
            </div>
            <Button type="submit" className="w-full bg-violet-500 hover:bg-violet-600">
              Send Message
            </Button>
          </form>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-violet-600 py-16 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Agricultural Business?
          </h2>
          <p className="text-xl text-violet-100 max-w-3xl mx-auto mb-8">
            Join Weefarm today and take your agricultural business to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="font-medium">
                Get Started Now
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 font-medium">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-violet-900 text-violet-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-8 lg:mb-0">
              <Leaf className="h-8 w-8 text-violet-300" />
              <span className="font-bold text-2xl text-white">Weefarm</span>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <a href="#" className="hover:text-white transition-colors">About</a>
              <a href="#" className="hover:text-white transition-colors">Features</a>
              <a href="#" className="hover:text-white transition-colors">Pricing</a>
              <a href="#" className="hover:text-white transition-colors">Blog</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
          <div className="border-t border-violet-800 mt-8 pt-8 text-center text-sm">
            <p>© 2025 Weefarm. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Features data
const features = [
  {
    title: "Content Management",
    description: "Easily add, edit, and organize your agricultural website content with our intuitive CMS.",
    icon: <Leaf className="h-6 w-6 text-violet-600" />,
  },
  {
    title: "Marketplace Integration",
    description: "Automatically sync your products with Weefarm marketplace to expand your reach.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-violet-600"><circle cx="7.5" cy="10.5" r="4.5"/><path d="M7.5 6a4.5 4.5 0 0 0 0 9h9a4.5 4.5 0 1 0 0-9h-4.5"/></svg>,
  },
  {
    title: "Website Customization",
    description: "Choose from professional themes and customize to match your agricultural brand.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-violet-600"><path d="M21 7v6h-6"/><path d="M3 17V7.5L9 4l6 3.5v11l-6 3.5Z"/><path d="M3 7.5 9 11l6-3.5"/><line x1="9" x2="9" y1="11" y2="18"/></svg>,
  },
  {
    title: "Subscription Management",
    description: "Easily manage your subscription plans, payments, and features access.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-violet-600"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>,
  },
  {
    title: "User Management",
    description: "Control access levels for different team members and collaborators.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-violet-600"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
  {
    title: "Analytics & Reporting",
    description: "Gain insights into your website traffic, product performance, and user behavior.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-violet-600"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>,
  },
];

export default Index;
