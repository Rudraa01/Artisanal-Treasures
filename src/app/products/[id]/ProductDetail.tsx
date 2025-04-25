'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/context/CartContext";
import { toast } from "sonner";

// Define the old money styles
const oldMoneyStyles = {
  fontSerif: "Garamond, Baskerville, 'Times New Roman', serif",
  colorGold: "#D4AF37",
  colorBrass: "#B5A642",
  colorAntique: "#F0E6D2",
  colorRich: "#5C4033",
  colorDeep: "#2F1B25",
  colorIvory: "#FFFFF0",
  colorParchment: "#F1E9D2",
  colorMahogany: "#4E2728",
  colorAgedPaper: "#E8DFC9",
  colorAntiqueCream: "#F5F2E3",
};

type ProductDetailProps = {
  product: any;
  relatedProducts: any[];
};

export default function ProductDetail({ product, relatedProducts }: ProductDetailProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [mounted, setMounted] = useState(false);

  // Handle hydration mismatch
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      vendor: product.vendorInfo.name,
      category: product.category
    }, quantity);
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  // Show a simple loading state if not mounted yet
  if (!mounted) {
    return (
      <div className="container mx-auto px-4 py-8" style={{ backgroundColor: oldMoneyStyles.colorAntiqueCream }}>
        <p style={{ fontFamily: oldMoneyStyles.fontSerif, color: oldMoneyStyles.colorRich }}>Loading product...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link href="/products" className="text-sm hover:underline flex items-center gap-1" style={{
          fontFamily: oldMoneyStyles.fontSerif,
          color: oldMoneyStyles.colorRich
        }}>
          ← Back to Collections
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Product Image */}
        <div className="relative h-[400px] md:h-[500px] overflow-hidden" style={{
          border: `1px solid ${oldMoneyStyles.colorBrass}`,
          padding: '8px',
          backgroundColor: oldMoneyStyles.colorAntiqueCream
        }}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Product Details */}
        <div>
          <div className="mb-6">
            <h1 className="text-3xl mb-2" style={{
              fontFamily: oldMoneyStyles.fontSerif,
              color: oldMoneyStyles.colorMahogany,
              fontWeight: 500,
              letterSpacing: '0.02em'
            }}>{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <Link href={`/vendor/${product.vendorInfo.name}`} style={{
                fontFamily: oldMoneyStyles.fontSerif,
                color: oldMoneyStyles.colorRich,
                fontStyle: 'italic',
                fontSize: '0.9rem'
              }}>
                {product.vendorInfo.name}
              </Link>
              <span style={{
                color: oldMoneyStyles.colorBrass,
                fontSize: '0.9rem'
              }}>• {product.vendorInfo.location}</span>
            </div>
            <p style={{
              fontFamily: oldMoneyStyles.fontSerif,
              color: oldMoneyStyles.colorGold,
              fontSize: '1.5rem',
              fontWeight: 600
            }}>${product.price}</p>
          </div>

          <div className="mb-6">
            <p style={{
              fontFamily: oldMoneyStyles.fontSerif,
              color: oldMoneyStyles.colorRich,
              lineHeight: 1.6
            }} className="mb-4">{product.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h3 style={{
                  fontFamily: oldMoneyStyles.fontSerif,
                  color: oldMoneyStyles.colorMahogany,
                  fontWeight: 500
                }} className="text-sm mb-1">Dimensions</h3>
                <p style={{
                  fontFamily: oldMoneyStyles.fontSerif,
                  color: oldMoneyStyles.colorRich
                }} className="text-sm">{product.dimensions}</p>
              </div>
              <div>
                <h3 style={{
                  fontFamily: oldMoneyStyles.fontSerif,
                  color: oldMoneyStyles.colorMahogany,
                  fontWeight: 500
                }} className="text-sm mb-1">Weight</h3>
                <p style={{
                  fontFamily: oldMoneyStyles.fontSerif,
                  color: oldMoneyStyles.colorRich
                }} className="text-sm">{product.weight}</p>
              </div>
              <div>
                <h3 style={{
                  fontFamily: oldMoneyStyles.fontSerif,
                  color: oldMoneyStyles.colorMahogany,
                  fontWeight: 500
                }} className="text-sm mb-1">Materials</h3>
                <p style={{
                  fontFamily: oldMoneyStyles.fontSerif,
                  color: oldMoneyStyles.colorRich
                }} className="text-sm">{product.materials.join(", ")}</p>
              </div>
              <div>
                <h3 style={{
                  fontFamily: oldMoneyStyles.fontSerif,
                  color: oldMoneyStyles.colorMahogany,
                  fontWeight: 500
                }} className="text-sm mb-1">Care</h3>
                <p style={{
                  fontFamily: oldMoneyStyles.fontSerif,
                  color: oldMoneyStyles.colorRich
                }} className="text-sm">{product.care}</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 style={{
                fontFamily: oldMoneyStyles.fontSerif,
                color: oldMoneyStyles.colorMahogany,
                fontWeight: 500
              }} className="text-sm mb-1">Shipping</h3>
              <p style={{
                fontFamily: oldMoneyStyles.fontSerif,
                color: oldMoneyStyles.colorRich
              }} className="text-sm">{product.shipping}</p>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center mb-4">
            <span style={{
              fontFamily: oldMoneyStyles.fontSerif,
              color: oldMoneyStyles.colorMahogany,
              marginRight: '12px'
            }}>Quantity:</span>
            <div className="flex items-center border" style={{ borderColor: oldMoneyStyles.colorBrass }}>
              <button
                onClick={decrementQuantity}
                className="px-3 py-1"
                style={{
                  color: oldMoneyStyles.colorRich,
                  backgroundColor: oldMoneyStyles.colorAntiqueCream
                }}
              >
                -
              </button>
              <span
                className="px-4 py-1"
                style={{
                  fontFamily: oldMoneyStyles.fontSerif,
                  color: oldMoneyStyles.colorRich,
                  fontWeight: 500
                }}
              >
                {quantity}
              </span>
              <button
                onClick={incrementQuantity}
                className="px-3 py-1"
                style={{
                  color: oldMoneyStyles.colorRich,
                  backgroundColor: oldMoneyStyles.colorAntiqueCream
                }}
              >
                +
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              size="lg"
              className="flex-1"
              onClick={handleAddToCart}
              style={{
                backgroundColor: oldMoneyStyles.colorGold,
                color: oldMoneyStyles.colorDeep,
                fontFamily: oldMoneyStyles.fontSerif,
                border: 'none',
                letterSpacing: '0.05em'
              }}
            >
              Add to Cart
            </Button>
            <Button
              variant="outline"
              size="lg"
              style={{
                borderColor: oldMoneyStyles.colorBrass,
                color: oldMoneyStyles.colorRich,
                fontFamily: oldMoneyStyles.fontSerif,
                backgroundColor: 'transparent',
                letterSpacing: '0.05em'
              }}
            >
              Save for Later
            </Button>
          </div>

          <div className="mt-8 pt-8" style={{ borderTop: `1px solid ${oldMoneyStyles.colorBrass}` }}>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <span style={{
                  fontFamily: oldMoneyStyles.fontSerif,
                  color: oldMoneyStyles.colorRich,
                  fontWeight: 600,
                  fontSize: '1.1rem'
                }}>{product.vendorInfo.rating}</span>
                <span style={{ color: oldMoneyStyles.colorGold }} className="ml-1">★</span>
              </div>
              <span style={{
                fontFamily: oldMoneyStyles.fontSerif,
                color: oldMoneyStyles.colorRich,
                fontSize: '0.9rem'
              }}>
                {product.vendorInfo.reviews} reviews
              </span>
              <span style={{
                fontFamily: oldMoneyStyles.fontSerif,
                color: oldMoneyStyles.colorRich,
                fontSize: '0.9rem'
              }}>
                Selling since {product.vendorInfo.since}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mb-16">
        <h2 style={{
          fontFamily: oldMoneyStyles.fontSerif,
          color: oldMoneyStyles.colorMahogany,
          fontWeight: 500,
          letterSpacing: '0.02em',
          marginBottom: '1.5rem',
          fontSize: '1.5rem'
        }}>You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct.id} style={{
              border: `1px solid ${oldMoneyStyles.colorBrass}`,
              backgroundColor: oldMoneyStyles.colorAntiqueCream,
              overflow: 'hidden'
            }}>
              <div className="relative h-64">
                <Image
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 style={{
                      fontFamily: oldMoneyStyles.fontSerif,
                      color: oldMoneyStyles.colorRich,
                      fontWeight: 500
                    }}>{relatedProduct.name}</h3>
                    <p style={{
                      fontFamily: oldMoneyStyles.fontSerif,
                      color: oldMoneyStyles.colorMahogany,
                      fontStyle: 'italic',
                      fontSize: '0.9rem'
                    }}>{relatedProduct.vendor}</p>
                  </div>
                  <p style={{
                    fontFamily: oldMoneyStyles.fontSerif,
                    color: oldMoneyStyles.colorGold,
                    fontWeight: 600
                  }}>${relatedProduct.price}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span style={{
                    fontFamily: oldMoneyStyles.fontSerif,
                    color: oldMoneyStyles.colorRich,
                    fontSize: '0.75rem',
                    padding: '0.25rem 0.5rem',
                    backgroundColor: oldMoneyStyles.colorAgedPaper,
                    borderRadius: '9999px'
                  }}>
                    {relatedProduct.category}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    style={{
                      borderColor: oldMoneyStyles.colorBrass,
                      color: oldMoneyStyles.colorRich,
                      fontFamily: oldMoneyStyles.fontSerif,
                      backgroundColor: 'transparent',
                      fontSize: '0.75rem'
                    }}
                  >
                    <Link href={`/products/${relatedProduct.id}`}>View</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
