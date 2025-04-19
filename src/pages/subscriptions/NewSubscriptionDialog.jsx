
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusCircle } from "lucide-react";

export function NewSubscriptionDialog() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="default" 
          className="bg-violet-500 hover:bg-violet-600 text-white"
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New Subscription
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Subscription</DialogTitle>
          <DialogDescription>
            Create a new subscription plan for clients
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Client Name</Label>
              <Input id="name" placeholder="Enter client name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="plan">Subscription Plan</Label>
              <Input id="plan" placeholder="Enter plan type" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="amount">Amount</Label>
              <Input id="amount" type="number" placeholder="Enter amount" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="startDate">Start Date</Label>
              <Input id="startDate" type="date" />
            </div>
          </div>
          <div className="flex justify-end">
            <Button type="submit" className="bg-violet-500 hover:bg-violet-600">
              Create Subscription
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}