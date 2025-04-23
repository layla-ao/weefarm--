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
import axios from "axios"; 

export function NewInvoiceDialog() {
  const [formData, setFormData] = useState({
    clientName: "",
    amount: "",
    dueDate: "",
    status: "",  // Changement de description à status
  });
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Génération du numéro de facture côté client
    const invoiceNumber = `INV-${Math.floor(1000 + Math.random() * 9000)}`;
  
    // Ajout du numéro de facture dans les données
    const formDataWithNumber = { ...formData, invoiceNumber };
  
    try {
      // Envoi des données au backend via une requête POST
      const response = await axios.post("http://localhost:5000/api/invoices", formDataWithNumber);
      console.log("Réponse du serveur:", response.data);
  
      toast({
        title: "Facture créée",
        description: `Facture créée pour ${formData.clientName}`,
      });
  
      // Réinitialiser les champs du formulaire après la soumission
      setFormData({
        clientName: "",
        amount: "",
        dueDate: "",
        status: "",
        description: "",
      });
    } catch (error) {
      console.error("Erreur lors de la création de la facture:", error.response || error);
      toast({
        title: "Erreur",
        description: `Une erreur est survenue lors de la création de la facture. ${error.response ? error.response.data.message : ''}`,
        variant: "destructive",
      });
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
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
  <Label htmlFor="invoiceNumber">Numéro de Facture</Label>
  <Input
    id="invoiceNumber"
    name="invoiceNumber"
    placeholder="Numéro de facture"
    value={formData.invoiceNumber}
    onChange={handleChange}
    required
  />
</div>

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
              <Label htmlFor="status">Statut</Label>
              <select
    id="status"
    name="status"
    value={formData.status}
    onChange={handleChange}
    required
  >
    <option value="pending">En attente</option>
    <option value="paid">Payée</option>
    <option value="overdue">En retard</option>
  </select>
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
