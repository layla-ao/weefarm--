import React from 'react';
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Check, 
  CreditCard, 
  Download, 
  HistoryIcon,
  InfoIcon,
  ShieldCheck,
  Star,
  Zap,
  PlusCircle
} from "lucide-react";

import { NewSubscriptionDialog } from "./NewSubscriptionDialog";
export default function SubscriptionsManager() {
  // Sample invoice data
  const invoices = [
    { id: "INV-001", date: "Apr 1, 2025", amount: "$99.00", status: "Paid" },
    { id: "INV-002", date: "Mar 1, 2025", amount: "$99.00", status: "Paid" },
    { id: "INV-003", date: "Feb 1, 2025", amount: "$79.00", status: "Paid" },
    { id: "INV-004", date: "Jan 1, 2025", amount: "$79.00", status: "Paid" },
    { id: "INV-005", date: "Dec 1, 2024", amount: "$79.00", status: "Paid" },
  ];
  
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Subscription Management</h1>
        <div className="flex items-center space-x-4">
          <Button variant="outline">
            <CreditCard className="mr-2 h-4 w-4" />
            Update Payment Method
          </Button>
      
            <NewSubscriptionDialog />
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-7">
        <Card className="md:col-span-4">
          <CardHeader>
            <CardTitle>Current Plan</CardTitle>
            <CardDescription>
              Manage your subscription plan and billing details
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center p-4 border rounded-lg bg-violet-50 dark:bg-violet-900/20 mb-6">
              <div className="flex-1">
                <div className="flex items-center mb-1">
                  <h3 className="text-lg font-bold">Premium Plan</h3>
                  <Badge className="ml-2 bg-violet-500 hover:bg-violet-600">Active</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Monthly subscription</p>
                <p className="font-medium">$99.00/month</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground mb-1">Next billing on</p>
                <p className="font-medium">May 1, 2025</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Your Plan Includes:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    <span>Unlimited website pages</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    <span>Up to 250 product listings</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    <span>10GB storage for images and documents</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    <span>Direct marketplace integration</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    <span>Premium support</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <Button variant="default">
                  Upgrade Plan
                </Button>
                <Button variant="outline">
                  Cancel Subscription
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Billing Information</CardTitle>
            <CardDescription>
              Your payment method and billing details
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium mb-2">Payment Method</h3>
                <div className="flex items-center p-3 border rounded-lg">
                  <CreditCard className="h-10 w-10 text-muted-foreground mr-3" />
                  <div>
                    <p className="font-medium">•••• •••• •••• 4242</p>
                    <p className="text-xs text-muted-foreground">Expires 12/2027</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Billing Address</h3>
                <div className="p-3 border rounded-lg">
                  <p className="font-medium">Farm Fresh Co.</p>
                  <p className="text-sm text-muted-foreground">John Smith</p>
                  <p className="text-sm text-muted-foreground">1234 Harvest Lane</p>
                  <p className="text-sm text-muted-foreground">Farmsville, CA 94107</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <Button variant="outline" size="sm" className="w-full">
                  Update Billing
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  Download Receipt
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-6">
        <Tabs defaultValue="plans">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="plans">
              <Star className="mr-2 h-4 w-4" />
              Available Plans
            </TabsTrigger>
            <TabsTrigger value="history">
              <HistoryIcon className="mr-2 h-4 w-4" />
              Billing History
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="plans">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-2 border-primary relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold">
                  CURRENT
                </div>
                <CardHeader className="pb-2">
                  <CardTitle>Premium</CardTitle>
                  <CardDescription>
                    For established agricultural businesses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">$99</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-500 translate-y-1" />
                      <span>Unlimited website pages</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-500 translate-y-1" />
                      <span>Up to 250 product listings</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-500 translate-y-1" />
                      <span>10GB storage for media</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-500 translate-y-1" />
                      <span>Direct marketplace integration</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-500 translate-y-1" />
                      <span>Premium support</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-500 translate-y-1" />
                      <span>Analytics dashboard</span>
                    </li>
                  </ul>
                  
                  <Button className="w-full" disabled>
                    Current Plan
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Basic</CardTitle>
                  <CardDescription>
                    For small agricultural businesses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">$49</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-500 translate-y-1" />
                      <span>Up to 10 website pages</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-500 translate-y-1" />
                      <span>Up to 50 product listings</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-500 translate-y-1" />
                      <span>2GB storage for media</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-500 translate-y-1" />
                      <span>Basic marketplace integration</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-500 translate-y-1" />
                      <span>Email support</span>
                    </li>
                  </ul>
                  
                  <Button variant="outline" className="w-full">
                    Downgrade
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>
                    For large agricultural operations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">$199</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-500 translate-y-1" />
                      <span>Unlimited website pages</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-500 translate-y-1" />
                      <span>Unlimited product listings</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-500 translate-y-1" />
                      <span>50GB storage for media</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-500 translate-y-1" />
                      <span>Advanced marketplace features</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-500 translate-y-1" />
                      <span>24/7 priority support</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-500 translate-y-1" />
                      <span>Custom integrations</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-500 translate-y-1" />
                      <span>Dedicated account manager</span>
                    </li>
                  </ul>
                  
                  <Button className="w-full">
                    Upgrade
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Billing History</CardTitle>
                <CardDescription>
                  View your past invoices and payment history
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Download</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {invoices.map((invoice) => (
                      <TableRow key={invoice.id}>
                        <TableCell className="font-medium">{invoice.id}</TableCell>
                        <TableCell>{invoice.date}</TableCell>
                        <TableCell>{invoice.amount}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100 border-green-200">
                            {invoice.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon">
                            <Download className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
