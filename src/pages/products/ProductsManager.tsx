import { useState, useEffect } from "react"; 
import axios from "axios";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Trash2 } from "lucide-react";

// URL du backend Express
const backendUrl = "http://localhost:5000/api/products";

export default function ProductsManager() {
  const [view, setView] = useState("grid");
  const [products, setProducts] = useState([]);
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    description: "",
    status: "In Stock", // Ajout du statut par défaut
    image: null, // Initialiser l'image à null
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Indicateur pour désactiver le bouton d'ajout pendant la soumission

  // Charger les produits depuis le backend
  const fetchProducts = async () => {
    try {
      const response = await axios.get(backendUrl);
      console.log("Fetched products:", response.data);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddProduct = async () => {
    // Validation des champs
    if (!newProduct.name || !newProduct.category || !newProduct.price || !newProduct.stock || !newProduct.description) {
      alert("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true); // Désactiver le bouton pendant l'envoi des données

    const formData = new FormData();
    formData.append("name", newProduct.name);
    formData.append("category", newProduct.category);
    formData.append("price", newProduct.price);
    formData.append("stock", newProduct.stock);
    formData.append("description", newProduct.description);
    formData.append("status", newProduct.status);

    if (newProduct.image) {
      formData.append("image", newProduct.image); // Ajouter l'image
    }

    // Afficher les données envoyées avant d'envoyer la requête
    console.log("Form data to send:", formData);

    try {
      // Appeler le backend pour ajouter le produit avec l'image
      const response = await axios.post(backendUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Product added:", response.data); // Afficher la réponse du serveur
      setIsSubmitting(false); // Réactiver le bouton une fois la soumission terminée
      setIsAddProductOpen(false);
      fetchProducts(); // Mettre à jour la liste des produits après l'ajout
    } catch (error) {
      console.error("Error adding product:", error);
      setIsSubmitting(false); // Réactiver le bouton même si l'ajout échoue
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`${backendUrl}/${productId}`);
      fetchProducts(); // Mettre à jour la liste des produits après la suppression
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleFileChange = (e) => {
    setNewProduct({
      ...newProduct,
      image: e.target.files[0], // Mise à jour de l'image sélectionnée
    });
  };

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
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="product-name">Product Name</Label>
                  <Input
                    id="product-name"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    placeholder="Enter product name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="product-category">Category</Label>
                  <Select
                    onValueChange={(value) => setNewProduct({ ...newProduct, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vegetables">Vegetables</SelectItem>
                      <SelectItem value="fruits">Fruits</SelectItem>
                      <SelectItem value="dairy">Dairy & Eggs</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="product-price">Price ($)</Label>
                  <Input
                    id="product-price"
                    type="number"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    step="0.01"
                    placeholder="0.00"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="product-stock">Stock Quantity</Label>
                  <Input
                    id="product-stock"
                    type="number"
                    value={newProduct.stock}
                    onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                    placeholder="0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="product-description">Description</Label>
                  <Input
                    id="product-description"
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                    placeholder="Enter description"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="product-image">Product Image</Label>
                <Input
                  id="product-image"
                  type="file"
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddProductOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddProduct} disabled={isSubmitting}>
                {isSubmitting ? "Adding..." : "Add Product"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product._id} className="overflow-hidden">
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              {product.image && (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto"
                  
                  
                />
              )}
              <Badge>{product.category}</Badge>
              <p>${product.price}</p>
              <p>Stock: {product.stock}</p>
              <Button onClick={() => handleDeleteProduct(product._id)} variant="destructive">
                <Trash2 className="h-4 w-4" />
                Delete
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
}
