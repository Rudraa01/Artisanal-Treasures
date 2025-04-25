import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Custom styles for old money aesthetic
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
  colorAgedPaper: "#E8DFC9", // Slightly darker parchment for background
  colorAntiqueCream: "#F5F2E3", // Lighter cream color for contrast
};

export default function Home() {
  // Mock featured products
  const featuredProducts = [
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
    }
  ];

  // Mock categories
  const categories = [
    { id: 1, name: "Home Decor", count: 124 },
    { id: 2, name: "Kitchen", count: 87 },
    { id: 3, name: "Bath & Body", count: 56 },
    { id: 4, name: "Jewelry", count: 93 },
    { id: 5, name: "Art", count: 112 },
    { id: 6, name: "Clothing", count: 78 }
  ];

  return (
    <div className="container mx-auto px-4 py-8" style={{ backgroundColor: oldMoneyStyles.colorAgedPaper }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden mb-16 border-8 border-double" style={{ borderColor: oldMoneyStyles.colorBrass }}>
        <div className="absolute inset-0 bg-gradient-to-r z-10" style={{
          backgroundImage: `linear-gradient(to right, ${oldMoneyStyles.colorDeep}CC, ${oldMoneyStyles.colorMahogany}99)`
        }}></div>
        <Image
          src="https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?q=80&w=2070&auto=format&fit=crop"
          alt="Artisanal Marketplace"
          width={1920}
          height={600}
          className="object-cover w-full h-[550px]"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 z-20">
          <div className="mb-2" style={{ color: oldMoneyStyles.colorGold }}>
            <span className="text-sm uppercase tracking-[0.25em]">Est. 1897</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4" style={{
            fontFamily: oldMoneyStyles.fontSerif,
            color: oldMoneyStyles.colorIvory,
            fontWeight: 400,
            letterSpacing: '0.02em',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            Timeless Artisanal <br /> Treasures
          </h1>
          <div className="w-24 h-1 mb-6" style={{ backgroundColor: oldMoneyStyles.colorGold }}></div>
          <p className="text-lg md:text-xl mb-8 max-w-xl" style={{
            color: oldMoneyStyles.colorAntique,
            fontFamily: oldMoneyStyles.fontSerif,
            fontStyle: 'italic'
          }}>
            Exquisite handcrafted pieces from master artisans across generations.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" style={{
              backgroundColor: oldMoneyStyles.colorGold,
              color: oldMoneyStyles.colorDeep,
              fontFamily: oldMoneyStyles.fontSerif,
              border: 'none'
            }}>
              <Link href="/products">Explore Collection</Link>
            </Button>
            <Button asChild variant="outline" size="lg" style={{
              borderColor: oldMoneyStyles.colorGold,
              color: oldMoneyStyles.colorIvory,
              fontFamily: oldMoneyStyles.fontSerif,
              backgroundColor: 'transparent'
            }}>
              <Link href="/vendor/register">Join Our Artisans</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mb-16">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-2xl md:text-3xl mb-3" style={{
            fontFamily: oldMoneyStyles.fontSerif,
            color: oldMoneyStyles.colorMahogany,
            fontWeight: 400,
            letterSpacing: '0.05em'
          }}>
            Distinguished Collection
          </h2>
          <div className="w-16 h-0.5 mb-4" style={{ backgroundColor: oldMoneyStyles.colorGold }}></div>
          <p className="text-sm max-w-xl" style={{
            color: oldMoneyStyles.colorRich,
            fontFamily: oldMoneyStyles.fontSerif
          }}>
            Each piece in our collection is meticulously crafted with time-honored techniques and exceptional materials
          </p>
          <Link
            href="/products"
            className="mt-4 text-sm font-medium flex items-center gap-1 hover:opacity-80 transition-opacity"
            style={{ color: oldMoneyStyles.colorGold }}
          >
            View Complete Collection <span className="text-xs">→</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden border-0 shadow-none"
              style={{ backgroundColor: 'transparent' }}
            >
              <div className="relative h-64 mb-4 overflow-hidden" style={{
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
              <CardContent className="p-0">
                <div className="flex flex-col items-center text-center">
                  <h3 className="mb-1 line-clamp-1" style={{
                    fontFamily: oldMoneyStyles.fontSerif,
                    color: oldMoneyStyles.colorRich,
                    fontWeight: 500
                  }}>
                    {product.name}
                  </h3>
                  <p className="text-sm mb-2" style={{
                    color: oldMoneyStyles.colorMahogany,
                    fontFamily: oldMoneyStyles.fontSerif,
                    fontStyle: 'italic'
                  }}>
                    {product.vendor}
                  </p>
                  <p className="mb-4" style={{
                    fontFamily: oldMoneyStyles.fontSerif,
                    color: oldMoneyStyles.colorGold,
                    fontWeight: 600
                  }}>
                    ${product.price}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    style={{
                      borderColor: oldMoneyStyles.colorBrass,
                      color: oldMoneyStyles.colorRich,
                      fontFamily: oldMoneyStyles.fontSerif,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      fontSize: '0.75rem'
                    }}
                  >
                    <Link href={`/products/${product.id}`}>View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mb-20 px-4 py-12" style={{
        backgroundColor: oldMoneyStyles.colorDeep,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${oldMoneyStyles.colorGold.substring(1)}' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}>
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-2xl md:text-3xl mb-3" style={{
            fontFamily: oldMoneyStyles.fontSerif,
            color: oldMoneyStyles.colorIvory,
            fontWeight: 400,
            letterSpacing: '0.05em'
          }}>
            Curated Categories
          </h2>
          <div className="w-16 h-0.5 mb-4" style={{ backgroundColor: oldMoneyStyles.colorGold }}></div>
          <p className="text-sm max-w-xl" style={{
            color: oldMoneyStyles.colorAntique,
            fontFamily: oldMoneyStyles.fontSerif
          }}>
            Explore our carefully selected collections of exceptional craftsmanship
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.name}`}
              className="group"
            >
              <div className="p-6 text-center transition-all" style={{
                border: `1px solid ${oldMoneyStyles.colorGold}`,
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(2px)'
              }}>
                <h3 className="mb-1" style={{
                  fontFamily: oldMoneyStyles.fontSerif,
                  color: oldMoneyStyles.colorIvory,
                  fontWeight: 400,
                  letterSpacing: '0.05em'
                }}>{category.name}</h3>
                <p className="text-sm" style={{
                  color: oldMoneyStyles.colorGold,
                  fontFamily: oldMoneyStyles.fontSerif
                }}>{category.count} pieces</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Vendor CTA */}
      <section className="p-12 md:p-16 relative overflow-hidden" style={{
        borderTop: `1px solid ${oldMoneyStyles.colorBrass}`,
        borderBottom: `1px solid ${oldMoneyStyles.colorBrass}`,
        backgroundColor: oldMoneyStyles.colorRich
      }}>
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=2070&auto=format&fit=crop"
            alt="Artisan background"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 p-2" style={{ border: `1px solid ${oldMoneyStyles.colorGold}` }}>
            <span className="text-xs uppercase tracking-[0.25em]" style={{
              color: oldMoneyStyles.colorGold,
              fontFamily: oldMoneyStyles.fontSerif,
              letterSpacing: '0.2em'
            }}>
              Guild of Artisans
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl mb-4" style={{
            fontFamily: oldMoneyStyles.fontSerif,
            color: oldMoneyStyles.colorIvory,
            fontWeight: 400,
            letterSpacing: '0.05em'
          }}>
            Master Craftsmen & Artisans
          </h2>
          <div className="w-16 h-0.5 mx-auto mb-6" style={{ backgroundColor: oldMoneyStyles.colorGold }}></div>
          <p className="text-lg mb-10" style={{
            color: oldMoneyStyles.colorAntique,
            fontFamily: oldMoneyStyles.fontSerif,
            lineHeight: 1.7
          }}>
            Join our distinguished guild of master artisans. Present your exceptional creations to discerning collectors and connoisseurs worldwide. Benefit from our heritage of excellence and tradition.
          </p>
          <Button
            asChild
            size="lg"
            style={{
              backgroundColor: 'transparent',
              border: `2px solid ${oldMoneyStyles.colorGold}`,
              color: oldMoneyStyles.colorGold,
              fontFamily: oldMoneyStyles.fontSerif,
              padding: '1.5rem 2.5rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}
          >
            <Link href="/vendor/register">Request Membership</Link>
          </Button>
        </div>
      </section>

      {/* Footer Ornament */}
      <div className="flex justify-center my-16">
        <div style={{ color: oldMoneyStyles.colorGold }}>
          <svg width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 15H40M80 15H120M60 0V30M50 15H70" stroke="currentColor" strokeWidth="1"/>
            <circle cx="60" cy="15" r="5" stroke="currentColor" strokeWidth="1" fill="none"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
