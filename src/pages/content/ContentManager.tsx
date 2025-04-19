
import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Image, 
  MoreVertical, 
  Plus, 
  Search, 
  Trash2,
  FileEdit,
  FileCog,
  Copy
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";

export default function ContentManager() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  
  // Sample content items
  const contentItems = [
    { id: 1, title: "About Us Page", type: "Page", status: "Published", lastModified: "2025-04-10", author: "Admin" },
    { id: 2, title: "Sustainable Farming", type: "Blog Post", status: "Draft", lastModified: "2025-04-08", author: "Editor" },
    { id: 3, title: "Our Services", type: "Page", status: "Published", lastModified: "2025-04-05", author: "Admin" },
    { id: 4, title: "Latest Products", type: "Page", status: "Published", lastModified: "2025-04-01", author: "Admin" },
    { id: 5, title: "Seasonal Farm Tips", type: "Blog Post", status: "Published", lastModified: "2025-03-28", author: "Editor" },
  ];
  
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Content Management</h1>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create Content
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[800px]">
            <DialogHeader>
              <DialogTitle>Create New Content</DialogTitle>
              <DialogDescription>
                Add new content to your website. Fill out the form and click create when you're done.
              </DialogDescription>
            </DialogHeader>
            <Tabs defaultValue="page">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="page">
                  <FileText className="mr-2 h-4 w-4" />
                  Page
                </TabsTrigger>
                <TabsTrigger value="blog">
                  <FileEdit className="mr-2 h-4 w-4" />
                  Blog Post
                </TabsTrigger>
                <TabsTrigger value="custom">
                  <FileCog className="mr-2 h-4 w-4" />
                  Custom
                </TabsTrigger>
              </TabsList>
              <TabsContent value="page" className="mt-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="page-title">Page Title</Label>
                  <Input id="page-title" placeholder="Enter page title" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="page-slug">URL Slug</Label>
                  <Input id="page-slug" placeholder="Enter URL slug" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="page-content">Page Content</Label>
                  <Textarea id="page-content" placeholder="Enter page content" className="min-h-[200px]" />
                </div>
                <div className="space-y-2">
                  <Label>Featured Image</Label>
                  <div className="border-2 border-dashed rounded-md p-6 text-center">
                    <Image className="h-8 w-8 mx-auto text-muted-foreground" />
                    <div className="mt-2">
                      <Button variant="secondary" size="sm">Upload Image</Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      PNG, JPG or GIF up to 5MB
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="blog" className="mt-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="blog-title">Blog Title</Label>
                  <Input id="blog-title" placeholder="Enter blog title" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="blog-slug">URL Slug</Label>
                  <Input id="blog-slug" placeholder="Enter URL slug" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="blog-category">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Categories</SelectLabel>
                          <SelectItem value="farming">Farming Tips</SelectItem>
                          <SelectItem value="sustainability">Sustainability</SelectItem>
                          <SelectItem value="products">Products</SelectItem>
                          <SelectItem value="news">News</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="blog-tags">Tags</Label>
                    <Input id="blog-tags" placeholder="Enter tags, separated by commas" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="blog-content">Blog Content</Label>
                  <Textarea id="blog-content" placeholder="Enter blog content" className="min-h-[200px]" />
                </div>
              </TabsContent>
              <TabsContent value="custom" className="mt-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="custom-title">Title</Label>
                  <Input id="custom-title" placeholder="Enter title" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="custom-type">Content Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select content type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Content Types</SelectLabel>
                        <SelectItem value="faq">FAQ</SelectItem>
                        <SelectItem value="testimonial">Testimonial</SelectItem>
                        <SelectItem value="slideshow">Slideshow</SelectItem>
                        <SelectItem value="gallery">Gallery</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="custom-content">Content</Label>
                  <Textarea id="custom-content" placeholder="Enter content" className="min-h-[150px]" />
                </div>
              </TabsContent>
            </Tabs>
            <DialogFooter className="mt-4">
              <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                Cancel
              </Button>
              <Button 
                onClick={() => {
                  // Handle create content
                  setIsCreateDialogOpen(false);
                }}
              >
                Create
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Content Library</CardTitle>
          <CardDescription>
            Manage all your website content in one place
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="relative w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search content..."
                  className="w-full pl-8"
                />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All types</SelectItem>
                  <SelectItem value="page">Page</SelectItem>
                  <SelectItem value="blog">Blog Post</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all-status">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-status">All status</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Modified</TableHead>
                <TableHead>Author</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contentItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      item.status === "Published" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {item.status}
                    </span>
                  </TableCell>
                  <TableCell>{item.lastModified}</TableCell>
                  <TableCell>{item.author}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <FileEdit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Copy className="mr-2 h-4 w-4" />
                          Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Showing 5 of 5 items
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" disabled>
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </DashboardLayout>
  );
}
