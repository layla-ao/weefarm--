
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, BarChart2, Package, Percent, Users, Globe, CreditCard, AlertTriangle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button variant="outline">
          <ArrowUpRight className="mr-2 h-4 w-4" />
          View Website
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Visits</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,350</div>
            <p className="text-xs text-muted-foreground">
              +12.5% from last month
            </p>
            <Progress className="mt-3" value={65} />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">124</div>
            <p className="text-xs text-muted-foreground">
              +7 products added this month
            </p>
            <Progress className="mt-3" value={45} />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <Percent className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2%</div>
            <p className="text-xs text-muted-foreground">
              +0.5% from last month
            </p>
            <Progress className="mt-3" value={32} />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">573</div>
            <p className="text-xs text-muted-foreground">
              +18 users this week
            </p>
            <Progress className="mt-3" value={78} />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Traffic Overview</CardTitle>
            <CardDescription>
              Monthly website visitor statistics
            </CardDescription>
          </CardHeader>
          <CardContent className="px-2">
            <div className="h-[240px] flex items-center justify-center text-muted-foreground">
              <BarChart2 className="h-16 w-16 opacity-50" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Subscription Status</CardTitle>
            <CardDescription>
              Your current plan and usage
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-4">
              <CreditCard className="h-8 w-8 text-primary" />
              <div>
                <p className="text-sm font-medium">Premium Plan</p>
                <p className="text-xs text-muted-foreground">Next billing on Sept 1, 2025</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm">Product Listings</p>
                  <p className="text-sm font-medium">124/250</p>
                </div>
                <Progress value={49} />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm">Storage</p>
                  <p className="text-sm font-medium">6.5GB/10GB</p>
                </div>
                <Progress value={65} />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm">API Calls</p>
                  <p className="text-sm font-medium">15K/50K</p>
                </div>
                <Progress value={30} />
              </div>
            </div>
            
            <Button variant="outline" className="w-full mt-6">
              Manage Subscription
            </Button>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest updates and actions on your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Package className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">New Product Added</p>
                  <p className="text-xs text-muted-foreground">
                    You added "Organic Tomatoes" to your product listings
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    2 hours ago
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <CreditCard className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Subscription Payment</p>
                  <p className="text-xs text-muted-foreground">
                    Your monthly subscription payment was processed successfully
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Yesterday
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <AlertTriangle className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Security Alert</p>
                  <p className="text-xs text-muted-foreground">
                    A new device was used to sign in to your account
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    3 days ago
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
