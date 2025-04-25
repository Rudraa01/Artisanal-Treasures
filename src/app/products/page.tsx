import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Products | Artisanal Marketplace",
  description: "Browse our collection of handcrafted artisanal products",
};

export default function ProductsPage() {
  // Mock products data
  const products = [
    {
      id: 1,
      name: "Handcrafted Ceramic Vase",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?q=80&w=500&auto=format&fit=crop",
      vendor: "Artisan Ceramics",
      category: "Home Decor"
    },
    {
      id: 2,
      name: "Wooden Cutting Board",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1583396796390-1c56c20040f0?q=80&w=500&auto=format&fit=crop",
      vendor: "Woodland Crafts",
      category: "Kitchen"
    },
    {
      id: 3,
      name: "Hand-Woven Basket",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1595254771206-5c0f4a40d5e8?q=80&w=500&auto=format&fit=crop",
      vendor: "Weaving Traditions",
      category: "Home Decor"
    },
    {
      id: 4,
      name: "Artisanal Soap Set",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?q=80&w=500&auto=format&fit=crop",
      vendor: "Natural Essentials",
      category: "Bath & Body"
    },
    {
      id: 5,
      name: "Handmade Leather Wallet",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=500&auto=format&fit=crop",
      vendor: "Leather Artisans",
      category: "Accessories"
    },
    {
      id: 6,
      name: "Macramé Wall Hanging",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1622227056993-6e7f88420855?q=80&w=500&auto=format&fit=crop",
      vendor: "Fiber Arts Studio",
      category: "Home Decor"
    },
    {
      id: 7,
      name: "Hand-Poured Soy Candle",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1603006905393-c279c4320be5?q=80&w=500&auto=format&fit=crop",
      vendor: "Candlelight Crafts",
      category: "Home Decor"
    },
    {
      id: 8,
      name: "Ceramic Coffee Mug",
      price: 22.99,
      image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=500&auto=format&fit=crop",
      vendor: "Artisan Ceramics",
      category: "Kitchen"
    }
  ];

  // Mock categories
  const categories = [
    { id: 1, name: "All Categories", count: 550 },
    { id: 2, name: "Home Decor", count: 124 },
    { id: 3, name: "Kitchen", count: 87 },
    { id: 4, name: "Bath & Body", count: 56 },
    { id: 5, name: "Jewelry", count: 93 },
    { id: 6, name: "Art", count: 112 },
    { id: 7, name: "Clothing", count: 78 }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 shrink-0">
          <div className="sticky top-20">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link 
                    href={`/products?category=${category.name}`}
                    className="flex justify-between items-center py-2 px-3 rounded-md hover:bg-stone-100"
                  >
                    <span>{category.name}</span>
                    <span className="text-sm text-muted-foreground">{category.count}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Price Range</h2>
              {/* Price range filter would go here */}
              <div className="py-2">
                <p className="text-sm text-muted-foreground">Filter by price coming soon</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold">All Products</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <select className="text-sm border rounded-md px-2 py-1">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium line-clamp-1">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">{product.vendor}</p>
                    </div>
                    <p className="font-semibold">${product.price}</p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xs px-2 py-1 bg-stone-100 rounded-full">
                      {product.category}
                    </span>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/products/${product.id}`}>View</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" className="bg-stone-100">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
