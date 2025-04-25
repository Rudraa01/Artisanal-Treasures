import ProductDetail from "./ProductDetail";

// This would normally come from a database
const getProductById = (id: string) => {
  const products = [
    {
      id: "1",
      name: "Handcrafted Ceramic Vase",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?q=80&w=500&auto=format&fit=crop",
      vendor: "Artisan Ceramics",
      category: "Home Decor",
      description: "This beautiful handcrafted ceramic vase is made with traditional techniques passed down through generations. Each piece is unique with subtle variations in glaze and form, making it a perfect centerpiece for your home.",
      dimensions: "8\" x 4\" x 4\"",
      weight: "2.5 lbs",
      materials: ["Clay", "Ceramic glaze"],
      care: "Hand wash only. Not dishwasher safe.",
      shipping: "Ships within 3-5 business days",
      vendorInfo: {
        name: "Artisan Ceramics",
        location: "Portland, OR",
        rating: 4.8,
        reviews: 124,
        since: 2018
      }
    }
  ];

  return products.find(product => product.id === id) || products[0];
};

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);

  return {
    title: `${product.name} | Artisanal Marketplace`,
    description: product.description.substring(0, 160),
  };
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);

  // Mock related products
  const relatedProducts = [
    {
      id: "2",
      name: "Wooden Cutting Board",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1583396796390-1c56c20040f0?q=80&w=500&auto=format&fit=crop",
      vendor: "Woodland Crafts",
      category: "Kitchen"
    },
    {
      id: "3",
      name: "Hand-Woven Basket",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1595254771206-5c0f4a40d5e8?q=80&w=500&auto=format&fit=crop",
      vendor: "Weaving Traditions",
      category: "Home Decor"
    },
    {
      id: "6",
      name: "Macramé Wall Hanging",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1622227056993-6e7f88420855?q=80&w=500&auto=format&fit=crop",
      vendor: "Fiber Arts Studio",
      category: "Home Decor"
    }
  ];

  return <ProductDetail product={product} relatedProducts={relatedProducts} />;
}
