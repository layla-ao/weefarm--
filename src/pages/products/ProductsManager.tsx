
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
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Eye, 
  FileEdit, 
  Filter, 
  GridIcon, 
  Image, 
  LayoutList, 
  MoreVertical, 
  Package, 
  Plus, 
  Search, 
  Tag, 
  Trash2, 
  Upload
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  stock: number;
  status: "In Stock" | "Low Stock" | "Out of Stock";
  image: string;
}

export default function ProductsManager() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);
  
  // Sample products
  const products: Product[] = [
    { 
      id: 1, 
      name: "Organic Tomatoes", 
      category: "Vegetables", 
      price: "$4.99", 
      stock: 250, 
      status: "In Stock",
      image: "https://images.unsplash.com/photo-1546750520-d0b05fcb9f03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRvbWF0b2VzfGVufDB8fDB8fHww"
    },
    { 
      id: 2, 
      name: "Fresh Carrots", 
      category: "Vegetables", 
      price: "$3.49", 
      stock: 180, 
      status: "In Stock",
      image: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2Fycm90c3xlbnwwfHwwfHx8MA%3D%3D"
    },
    { 
      id: 3, 
      name: "Strawberry Pack", 
      category: "Fruits", 
      price: "$5.99", 
      stock: 75, 
      status: "Low Stock",
      image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RyYXdiZXJyeXxlbnwwfHwwfHx8MA%3D%3D"
    },
    { 
      id: 4, 
      name: "Organic Honey", 
      category: "Honey & Sweeteners", 
      price: "$8.99", 
      stock: 120, 
      status: "In Stock",
      image: "https://images.unsplash.com/photo-1471943311424-646960669fbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG9uZXl8ZW58MHx8MHx8fDA%3D"
    },
    { 
      id: 5, 
      name: "Farm Fresh Eggs", 
      category: "Dairy & Eggs", 
      price: "$6.49", 
      stock: 0, 
      status: "Out of Stock",
      image: "https://images.unsplash.com/photo-1569127959161-2b1297b2d9a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWdnc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    { 
      id: 6, 
      name: "Organic Apples", 
      category: "Fruits", 
      price: "$4.29", 
      stock: 230, 
      status: "In Stock",
      image: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGVzfGVufDB8fDB8fHww"
    },
  ];
  
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Product Management</h1>
        <Dialog open={isAddProductOpen} onOpenChange={setIsAddProductOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Product
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[800px]">
            <DialogHeader>
              <DialogTitle>Add New Product</DialogTitle>
              <DialogDescription>
                Create a new product to list on your website and marketplace.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="product-name">Product Name</Label>
                  <Input id="product-name" placeholder="Enter product name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="product-category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vegetables">Vegetables</SelectItem>
                      <SelectItem value="fruits">Fruits</SelectItem>
                      <SelectItem value="dairy">Dairy & Eggs</SelectItem>
                      <SelectItem value="honey">Honey & Sweeteners</SelectItem>
                      <SelectItem value="grains">Grains & Cereals</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="product-price">Price ($)</Label>
                  <Input id="product-price" type="number" step="0.01" placeholder="0.00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="product-stock">Stock Quantity</Label>
                  <Input id="product-stock" type="number" placeholder="0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="product-sku">SKU</Label>
                  <Input id="product-sku" placeholder="Enter SKU" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="product-description">Description</Label>
                <Textarea id="product-description" placeholder="Enter product description" className="min-h-[100px]" />
              </div>
              
              <div className="space-y-2">
                <Label>Product Images</Label>
                <div className="border-2 border-dashed rounded-md p-6 text-center">
                  <Image className="h-8 w-8 mx-auto text-muted-foreground" />
                  <div className="mt-2">
                    <Button variant="secondary" size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Images
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    PNG, JPG or GIF up to 5MB
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="marketplace-sync">Sync to Marketplace</Label>
                    <Switch id="marketplace-sync" defaultChecked />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Make this product available on the Weefarm marketplace
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="featured">Featured Product</Label>
                    <Switch id="featured" />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Highlight this product on your website
                  </p>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddProductOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsAddProductOpen(false)}>
                Add Product
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <Tabs defaultValue="all" className="mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
          <TabsList>
            <TabsTrigger value="all">All Products</TabsTrigger>
            <TabsTrigger value="in-stock">In Stock</TabsTrigger>
            <TabsTrigger value="low-stock">Low Stock</TabsTrigger>
            <TabsTrigger value="out-of-stock">Out of Stock</TabsTrigger>
          </TabsList>
          
          <div className="flex items-center gap-2">
            <div className="relative w-60">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full pl-8"
              />
            </div>
            
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            
            <div className="flex rounded-md border">
              <Button 
                variant="ghost" 
                size="icon" 
                className={`rounded-r-none ${view === 'grid' ? 'bg-muted' : ''}`}
                onClick={() => setView("grid")}
              >
                <GridIcon className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className={`rounded-l-none ${view === 'list' ? 'bg-muted' : ''}`}
                onClick={() => setView("list")}
              >
                <LayoutList className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      
        <TabsContent value="all">
          {view === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge 
                        className={
                          product.status === "In Stock" 
                            ? "bg-green-100 text-green-800 hover:bg-green-100 border-0" 
                            : product.status === "Low Stock"
                              ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100 border-0"
                              : "bg-red-100 text-red-800 hover:bg-red-100 border-0"
                        }
                      >
                        {product.status}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs font-normal mb-2">
                        {product.category}
                      </Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
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
                            <Eye className="mr-2 h-4 w-4" />
                            View
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Tag className="mr-2 h-4 w-4" />
                            Change Category
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <h3 className="font-medium text-lg">{product.name}</h3>
                    <p className="text-lg font-bold text-primary mt-1">{product.price}</p>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-sm text-muted-foreground">Stock: {product.stock}</p>
                      <Button variant="outline" size="sm">
                        <FileEdit className="h-3.5 w-3.5 mr-1" />
                        Edit
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded overflow-hidden">
                            <img 
                              src={product.image} 
                              alt={product.name} 
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <span className="font-medium">{product.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell className="font-medium">{product.price}</TableCell>
                      <TableCell>{product.stock}</TableCell>
                      <TableCell>
                        <Badge 
                          className={
                            product.status === "In Stock" 
                              ? "bg-green-100 text-green-800 hover:bg-green-100 border-0" 
                              : product.status === "Low Stock"
                                ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100 border-0"
                                : "bg-red-100 text-red-800 hover:bg-red-100 border-0"
                          }
                        >
                          {product.status}
                        </Badge>
                      </TableCell>
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
                              <Eye className="mr-2 h-4 w-4" />
                              View
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Tag className="mr-2 h-4 w-4" />
                              Change Category
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
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="in-stock">
          {/* Filtered products view for in-stock items */}
          <div className="flex items-center justify-center p-8 text-muted-foreground">
            <Package className="h-16 w-16 opacity-50" />
          </div>
        </TabsContent>
        
        <TabsContent value="low-stock">
          {/* Filtered products view for low-stock items */}
          <div className="flex items-center justify-center p-8 text-muted-foreground">
            <Package className="h-16 w-16 opacity-50" />
          </div>
        </TabsContent>
        
        <TabsContent value="out-of-stock">
          {/* Filtered products view for out-of-stock items */}
          <div className="flex items-center justify-center p-8 text-muted-foreground">
            <Package className="h-16 w-16 opacity-50" />
          </div>
        </TabsContent>
      </Tabs>
      
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Marketplace Integration</CardTitle>
          <CardDescription>
            Manage how your products sync with the Weefarm marketplace
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <div className="flex-1 p-4 border rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Switch id="auto-sync" defaultChecked />
                <Label htmlFor="auto-sync">Auto Sync New Products</Label>
              </div>
              <p className="text-sm text-muted-foreground">
                Automatically add all new products to the Weefarm marketplace
              </p>
            </div>
            
            <div className="flex-1 p-4 border rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Switch id="sync-inventory" defaultChecked />
                <Label htmlFor="sync-inventory">Sync Inventory Levels</Label>
              </div>
              <p className="text-sm text-muted-foreground">
                Keep inventory levels in sync with the marketplace
              </p>
            </div>
            
            <div className="flex-1 p-4 border rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Switch id="sync-pricing" defaultChecked />
                <Label htmlFor="sync-pricing">Sync Pricing</Label>
              </div>
              <p className="text-sm text-muted-foreground">
                Keep product pricing in sync with the marketplace
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t pt-6">
          <div className="flex justify-between items-center w-full">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">6 of 6</span> products synced to marketplace
            </p>
            <Button variant="outline">
              Sync All Products
            </Button>
          </div>
        </CardFooter>
      </Card>
    </DashboardLayout>
  );
}
