
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
import { FileText } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function NewInvoiceDialog() {
  const [formData, setFormData] = useState({
    clientName: "",
    amount: "",
    dueDate: "",
    description: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically save the invoice data
    console.log("New invoice data:", formData);
    toast({
      title: "Facture créée",
      description: `Facture créée pour ${formData.clientName}`,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-violet-500 hover:bg-violet-600">
          <FileText className="mr-2 h-4 w-4" />
          Nouvelle Facture
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Créer une nouvelle facture</DialogTitle>
          <DialogDescription>
            Remplissez les informations pour créer une nouvelle facture
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="clientName">Nom du client</Label>
              <Input
                id="clientName"
                name="clientName"
                placeholder="Entrez le nom du client"
                value={formData.clientName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="amount">Montant</Label>
              <Input
                id="amount"
                name="amount"
                type="number"
                placeholder="Entrez le montant"
                value={formData.amount}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="dueDate">Date d'échéance</Label>
              <Input
                id="dueDate"
                name="dueDate"
                type="date"
                value={formData.dueDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                name="description"
                placeholder="Description de la facture"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button type="submit" className="bg-violet-500 hover:bg-violet-600">
              Créer la facture
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}