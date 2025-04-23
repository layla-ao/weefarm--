import { useState, useEffect } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Upload, Trash2 } from "lucide-react"; // Ajoutez l'icône de suppression
import { NewInvoiceDialog } from "./NewInvoiceDialog";
import axios from "axios";
import { format } from "date-fns";  // Importation de la fonction de formatage

export default function InvoicesManager() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/invoices");
        setInvoices(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des factures:", error);
      }
    };

    fetchInvoices();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/invoices/${id}`);
      console.log("Réponse du serveur:", response.data);

      // Mise à jour de l'état pour retirer la facture supprimée
      setInvoices((prevInvoices) => prevInvoices.filter((invoice) => invoice._id !== id));

    } catch (error) {
      console.error("Erreur lors de la suppression de la facture:", error);
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Fichier téléchargé:", file.name);
    }
  };

  const exampleInvoices = [
    { id: 1, number: "INV-001", client: "Organic Farms", amount: "$299", date: "2025-04-17", status: "Paid" },
    { id: 2, number: "INV-002", client: "Green Valley", amount: "$199", date: "2025-04-16", status: "Pending" },
  ];

  const invoicesToDisplay = invoices.length > 0 ? invoices : exampleInvoices;

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Invoices Management</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Input
              type="file"
              onChange={handleFileUpload}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload">
              <Button variant="outline" className="cursor-pointer">
                <Upload className="mr-2 h-4 w-4" />
                Import Invoices
              </Button>
            </label>
          </div>
          <NewInvoiceDialog />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Invoices</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice Number</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead> {/* Colonne des actions */}
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoicesToDisplay.length > 0 ? (
                invoicesToDisplay.map((invoice) => (
                  <TableRow key={invoice._id}> {/* Utilisez _id comme clé */}
                    <TableCell>{invoice.invoiceNumber || "N/A"}</TableCell>
                    <TableCell>{invoice.clientName || "N/A"}</TableCell>
                    <TableCell>{invoice.amount || "N/A"}</TableCell>
                    <TableCell>
                      {invoice.dueDate ? format(new Date(invoice.dueDate), 'dd-MM-yyyy') : "N/A"}
                    </TableCell>
                    <TableCell>{invoice.status || "N/A"}</TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        onClick={() => handleDelete(invoice._id)} // Appeler handleDelete avec l'ID
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Supprimer
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center">
                    Aucune facture trouvée
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
