
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import { 
  AlertCircle, 
  Contact, 
  EyeIcon, 
  Globe, 
  Home, 
  Image, 
  Laptop, 
  Layout, 
  Palette, 
  Save, 
  SettingsIcon,
  Smartphone,
  Type,
  Upload
} from "lucide-react";

export default function WebsiteCustomizer() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Website Customization</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <EyeIcon className="mr-2 h-4 w-4" />
            Preview
          </Button>
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Website Settings</CardTitle>
              <CardDescription>
                Customize your website appearance and content
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="general">
                  <AccordionTrigger className="px-4 py-2">
                    <div className="flex items-center">
                      <SettingsIcon className="h-4 w-4 mr-2" />
                      General
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="site-title">Site Title</Label>
                        <Input id="site-title" defaultValue="Farm Fresh Co." />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="site-description">Site Description</Label>
                        <Textarea id="site-description" defaultValue="Quality agricultural products direct from our farm to your table." />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="site-url">Site URL</Label>
                        <Input id="site-url" defaultValue="https://farmfreshco.weefarm.com" />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="appearance">
                  <AccordionTrigger className="px-4 py-2">
                    <div className="flex items-center">
                      <Palette className="h-4 w-4 mr-2" />
                      Appearance
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Theme</Label>
                        <Select defaultValue="modern-farm">
                          <SelectTrigger>
                            <SelectValue placeholder="Select theme" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="modern-farm">Modern Farm</SelectItem>
                            <SelectItem value="rustic">Rustic</SelectItem>
                            <SelectItem value="eco-friendly">Eco-Friendly</SelectItem>
                            <SelectItem value="minimal">Minimal</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Color Scheme</Label>
                        <div className="grid grid-cols-5 gap-2">
                          <div className="h-10 w-10 rounded-full bg-violet-500 ring-2 ring-offset-2 ring-violet-500 cursor-pointer" />
                          <div className="h-10 w-10 rounded-full bg-green-500 cursor-pointer" />
                          <div className="h-10 w-10 rounded-full bg-blue-500 cursor-pointer" />
                          <div className="h-10 w-10 rounded-full bg-amber-500 cursor-pointer" />
                          <div className="h-10 w-10 rounded-full bg-red-500 cursor-pointer" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="font-family">Font Family</Label>
                        <Select defaultValue="inter">
                          <SelectTrigger id="font-family">
                            <SelectValue placeholder="Select font" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="inter">Inter</SelectItem>
                            <SelectItem value="roboto">Roboto</SelectItem>
                            <SelectItem value="poppins">Poppins</SelectItem>
                            <SelectItem value="lora">Lora</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="layout">
                  <AccordionTrigger className="px-4 py-2">
                    <div className="flex items-center">
                      <Layout className="h-4 w-4 mr-2" />
                      Layout
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Header Style</Label>
                        <Select defaultValue="centered">
                          <SelectTrigger>
                            <SelectValue placeholder="Select header style" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="centered">Centered</SelectItem>
                            <SelectItem value="left-aligned">Left Aligned</SelectItem>
                            <SelectItem value="transparent">Transparent</SelectItem>
                            <SelectItem value="sticky">Sticky</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Footer Style</Label>
                        <Select defaultValue="standard">
                          <SelectTrigger>
                            <SelectValue placeholder="Select footer style" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="standard">Standard</SelectItem>
                            <SelectItem value="minimal">Minimal</SelectItem>
                            <SelectItem value="expanded">Expanded</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="show-sidebar" />
                        <Label htmlFor="show-sidebar">Show Sidebar</Label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="pages">
                  <AccordionTrigger className="px-4 py-2">
                    <div className="flex items-center">
                      <Home className="h-4 w-4 mr-2" />
                      Pages
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start">
                        <Home className="mr-2 h-4 w-4" />
                        Home Page
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Globe className="mr-2 h-4 w-4" />
                        About Us
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Contact className="mr-2 h-4 w-4" />
                        Contact
                      </Button>
                      <Button variant="secondary" size="sm" className="w-full mt-2">
                        Manage All Pages
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="images">
                  <AccordionTrigger className="px-4 py-2">
                    <div className="flex items-center">
                      <Image className="h-4 w-4 mr-2" />
                      Images
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Logo</Label>
                        <div className="border rounded-md p-4 text-center">
                          <div className="h-16 w-16 mx-auto bg-violet-100 rounded-md flex items-center justify-center mb-2">
                            <Image className="h-8 w-8 text-violet-500" />
                          </div>
                          <Button variant="secondary" size="sm">
                            <Upload className="h-3.5 w-3.5 mr-1" />
                            Upload Logo
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Favicon</Label>
                        <div className="border rounded-md p-4 text-center">
                          <div className="h-8 w-8 mx-auto bg-violet-100 rounded-md flex items-center justify-center mb-2">
                            <Image className="h-4 w-4 text-violet-500" />
                          </div>
                          <Button variant="secondary" size="sm">
                            <Upload className="h-3.5 w-3.5 mr-1" />
                            Upload Favicon
                          </Button>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
        
        <div className="md:col-span-4">
          <Tabs defaultValue="desktop">
            <div className="flex justify-between items-center mb-4">
              <TabsList>
                <TabsTrigger value="desktop">
                  <Laptop className="h-4 w-4 mr-2" />
                  Desktop
                </TabsTrigger>
                <TabsTrigger value="tablet">
                  <Laptop className="h-4 w-4 mr-2" />
                  Tablet
                </TabsTrigger>
                <TabsTrigger value="mobile">
                  <Smartphone className="h-4 w-4 mr-2" />
                  Mobile
                </TabsTrigger>
              </TabsList>
              
              <div className="flex items-center text-sm text-muted-foreground">
                <AlertCircle className="h-4 w-4 mr-1" />
                Changes will be previewed here
              </div>
            </div>
            
            <Card>
              <TabsContent value="desktop" className="mt-0">
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden border-b border-border">
                  <div className="h-8 bg-background border-b border-border flex items-center px-4">
                    <div className="flex items-center space-x-1">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
                    </div>
                    <div className="mx-auto h-5 w-80 bg-muted-foreground/20 rounded-full" />
                  </div>
                  <div className="p-4 h-full">
                    <div className="rounded-lg h-14 bg-background border border-border flex items-center px-4 mb-4">
                      <div className="w-32 h-8 bg-violet-100 rounded flex items-center justify-center">
                        <Type className="h-4 w-4 text-violet-500" />
                      </div>
                      <div className="ml-auto flex items-center space-x-2">
                        <div className="w-16 h-6 bg-muted-foreground/10 rounded" />
                        <div className="w-16 h-6 bg-muted-foreground/10 rounded" />
                        <div className="w-16 h-6 bg-muted-foreground/10 rounded" />
                        <div className="w-16 h-6 bg-muted-foreground/10 rounded" />
                        <div className="w-24 h-8 bg-violet-500 rounded" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 h-[calc(100%-56px)]">
                      <div className="rounded-lg h-full bg-muted-foreground/10 flex items-center justify-center text-6xl font-thin text-muted-foreground">
                        Hero
                      </div>
                      <div className="space-y-4">
                        <div className="bg-muted-foreground/10 h-24 rounded-lg" />
                        <div className="bg-muted-foreground/10 h-24 rounded-lg" />
                        <div className="bg-muted-foreground/10 h-24 rounded-lg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center text-sm text-muted-foreground">
                  The preview shows how your website will appear to visitors
                </div>
              </TabsContent>
              
              <TabsContent value="tablet" className="mt-0">
                <div className="max-w-md mx-auto aspect-[3/4] bg-muted rounded-t-lg overflow-hidden border-b border-border">
                  <div className="h-8 bg-background border-b border-border flex items-center px-4">
                    <div className="flex items-center space-x-1">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
                    </div>
                    <div className="mx-auto h-5 w-48 bg-muted-foreground/20 rounded-full" />
                  </div>
                  <div className="p-4 h-full">
                    <div className="rounded-lg h-14 bg-background border border-border flex items-center justify-between px-4 mb-4">
                      <div className="w-24 h-8 bg-violet-100 rounded flex items-center justify-center">
                        <Type className="h-4 w-4 text-violet-500" />
                      </div>
                      <div className="h-6 w-6 bg-muted-foreground/10 rounded-md" />
                    </div>
                    
                    <div className="space-y-4 h-[calc(100%-56px)]">
                      <div className="rounded-lg h-1/3 bg-muted-foreground/10 flex items-center justify-center text-4xl font-thin text-muted-foreground">
                        Hero
                      </div>
                      <div className="space-y-4 h-2/3">
                        <div className="bg-muted-foreground/10 h-24 rounded-lg" />
                        <div className="bg-muted-foreground/10 h-24 rounded-lg" />
                        <div className="bg-muted-foreground/10 h-24 rounded-lg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center text-sm text-muted-foreground">
                  Tablet view preview
                </div>
              </TabsContent>
              
              <TabsContent value="mobile" className="mt-0">
                <div className="max-w-[250px] mx-auto aspect-[9/16] bg-muted rounded-t-lg overflow-hidden border-b border-border">
                  <div className="h-6 bg-background border-b border-border flex items-center px-2">
                    <div className="flex items-center space-x-1">
                      <div className="h-2 w-2 rounded-full bg-red-500" />
                      <div className="h-2 w-2 rounded-full bg-yellow-500" />
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                    </div>
                    <div className="mx-auto h-4 w-24 bg-muted-foreground/20 rounded-full" />
                  </div>
                  <div className="p-2 h-full">
                    <div className="rounded-lg h-10 bg-background border border-border flex items-center justify-between px-2 mb-2">
                      <div className="w-16 h-6 bg-violet-100 rounded flex items-center justify-center">
                        <Type className="h-3 w-3 text-violet-500" />
                      </div>
                      <div className="h-5 w-5 bg-muted-foreground/10 rounded-md" />
                    </div>
                    
                    <div className="space-y-2 h-[calc(100%-40px)]">
                      <div className="rounded-lg h-1/3 bg-muted-foreground/10 flex items-center justify-center text-2xl font-thin text-muted-foreground">
                        Hero
                      </div>
                      <div className="space-y-2 h-2/3">
                        <div className="bg-muted-foreground/10 h-16 rounded-lg" />
                        <div className="bg-muted-foreground/10 h-16 rounded-lg" />
                        <div className="bg-muted-foreground/10 h-16 rounded-lg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center text-sm text-muted-foreground">
                  Mobile view preview
                </div>
              </TabsContent>
            </Card>
          </Tabs>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
              <CardDescription>
                Optimize your website for search engines
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="meta-title">Meta Title</Label>
                  <Input id="meta-title" defaultValue="Farm Fresh Co. | Organic Agricultural Products" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="meta-description">Meta Description</Label>
                  <Textarea 
                    id="meta-description" 
                    defaultValue="Farm Fresh Co. offers high-quality organic agricultural products directly from our farm to your table. Explore our range of fresh produce, dairy, and more."
                  />
                  <p className="text-xs text-muted-foreground">
                    155 of 160 characters used
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="meta-keywords">Meta Keywords</Label>
                  <Input 
                    id="meta-keywords" 
                    defaultValue="organic farm, fresh produce, agricultural products, farm to table, organic vegetables"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="generate-sitemap">Generate Sitemap</Label>
                      <Switch id="generate-sitemap" defaultChecked />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Automatically create and update XML sitemap
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="robots-txt">Enable Robots.txt</Label>
                      <Switch id="robots-txt" defaultChecked />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Control search engine crawlers
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-6">
              <Button>Save SEO Settings</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
