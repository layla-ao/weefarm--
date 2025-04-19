
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
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
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  Key, 
  Lock, 
  Mail, 
  MoreVertical, 
  Plus, 
  Search, 
  Shield, 
  User, 
  UserCog, 
  UserPlus, 
  XCircle
} from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";

interface UserData {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Inactive";
  lastLogin: string;
}

export default function UsersManager() {
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  
  // Sample users data
  const users: UserData[] = [
    { id: 1, name: "John Smith", email: "john@farmfreshco.com", role: "Admin", status: "Active", lastLogin: "Today, 9:30 AM" },
    { id: 2, name: "Sarah Johnson", email: "sarah@farmfreshco.com", role: "Editor", status: "Active", lastLogin: "Yesterday, 3:15 PM" },
    { id: 3, name: "Michael Brown", email: "michael@farmfreshco.com", role: "Editor", status: "Active", lastLogin: "Apr 10, 2025, 11:42 AM" },
    { id: 4, name: "Emily Davis", email: "emily@farmfreshco.com", role: "Viewer", status: "Inactive", lastLogin: "Mar 28, 2025, 2:05 PM" },
    { id: 5, name: "David Wilson", email: "david@farmfreshco.com", role: "Viewer", status: "Active", lastLogin: "Apr 12, 2025, 10:30 AM" },
  ];
  
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">User Management</h1>
        <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
          <DialogTrigger asChild>
            <Button>
              <UserPlus className="mr-2 h-4 w-4" />
              Add User
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New User</DialogTitle>
              <DialogDescription>
                Invite a new user to your organization
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter email address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Administrator</SelectItem>
                    <SelectItem value="editor">Editor</SelectItem>
                    <SelectItem value="viewer">Viewer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Temporary Password</Label>
                <Input id="password" type="password" placeholder="Enter temporary password" />
                <p className="text-xs text-muted-foreground">
                  User will be prompted to change this on first login
                </p>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddUserOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsAddUserOpen(false)}>
                Add User
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Users</CardTitle>
          <CardDescription>
            Manage user access and permissions for your organization
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="relative w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search users..."
                  className="w-full pl-8"
                />
              </div>
              <Select defaultValue="all-roles">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All roles" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-roles">All roles</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="editor">Editor</SelectItem>
                  <SelectItem value="viewer">Viewer</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all-status">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-status">All status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-violet-100 flex items-center justify-center">
                        <User className="h-5 w-5 text-violet-600" />
                      </div>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-muted-foreground">{user.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={user.role === "Admin" ? "default" : "outline"}>
                      {user.role === "Admin" && <Shield className="mr-1 h-3 w-3" />}
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {user.status === "Active" ? (
                        <>
                          <CheckCircle2 className="mr-1 h-4 w-4 text-green-500" />
                          <span className="text-green-600 dark:text-green-500">Active</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="mr-1 h-4 w-4 text-gray-400" />
                          <span className="text-gray-500">Inactive</span>
                        </>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{user.lastLogin}</TableCell>
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
                          <UserCog className="mr-2 h-4 w-4" />
                          Edit User
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Lock className="mr-2 h-4 w-4" />
                          Reset Password
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Key className="mr-2 h-4 w-4" />
                          Change Permissions
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {user.status === "Active" ? (
                          <DropdownMenuItem>
                            <XCircle className="mr-2 h-4 w-4" />
                            Deactivate
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem>
                            <CheckCircle2 className="mr-2 h-4 w-4" />
                            Activate
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-6">
          <div className="text-sm text-muted-foreground">
            Showing 5 of 5 users
          </div>
          <div className="space-x-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" disabled>
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
      
      <div className="grid gap-6 mt-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Role Permissions</CardTitle>
            <CardDescription>
              Configure access levels for each user role
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-primary" />
                  <h3 className="font-medium">Administrator</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Full access to all features and settings
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <UserCog className="h-5 w-5 mr-2 text-primary" />
                  <h3 className="font-medium">Editor</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Can create and edit content, but cannot access system settings
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <User className="h-5 w-5 mr-2 text-primary" />
                  <h3 className="font-medium">Viewer</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Can only view content, no editing capabilities
                </p>
              </div>
            </div>
            <Button variant="outline" className="mt-4 w-full">
              Edit Role Permissions
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>User Activity</CardTitle>
            <CardDescription>
              Recent user actions and login activity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="h-8 w-8 rounded-full bg-violet-100 flex items-center justify-center mt-0.5">
                  <User className="h-4 w-4 text-violet-600" />
                </div>
                <div>
                  <p className="text-sm">
                    <span className="font-medium">John Smith</span> updated product listings
                  </p>
                  <p className="text-xs text-muted-foreground">Today, 9:45 AM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="h-8 w-8 rounded-full bg-violet-100 flex items-center justify-center mt-0.5">
                  <User className="h-4 w-4 text-violet-600" />
                </div>
                <div>
                  <p className="text-sm">
                    <span className="font-medium">Sarah Johnson</span> modified website theme
                  </p>
                  <p className="text-xs text-muted-foreground">Yesterday, 4:30 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="h-8 w-8 rounded-full bg-violet-100 flex items-center justify-center mt-0.5">
                  <User className="h-4 w-4 text-violet-600" />
                </div>
                <div>
                  <p className="text-sm">
                    <span className="font-medium">Michael Brown</span> added new blog post
                  </p>
                  <p className="text-xs text-muted-foreground">Apr 10, 2025, 2:15 PM</p>
                </div>
              </div>
            </div>
            <Button variant="outline" className="mt-4 w-full">
              View All Activity
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
