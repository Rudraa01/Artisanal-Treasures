'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { useCart } from '@/lib/context/CartContext';

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

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();
  const [mounted, setMounted] = useState(false);

  // Handle hydration mismatch with a slight delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  // Estimated shipping and tax
  const shipping = cartItems.length > 0 ? 12.99 : 0;
  const tax = cartTotal * 0.08; // 8% tax rate
  const total = cartTotal + shipping + tax;

  if (!mounted) {
    return (
      <div className="container mx-auto px-4 py-8" style={{ backgroundColor: oldMoneyStyles.colorAntiqueCream }}>
        <p style={{ fontFamily: oldMoneyStyles.fontSerif, color: oldMoneyStyles.colorRich }}>Loading cart...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8" style={{
      backgroundColor: oldMoneyStyles.colorAntiqueCream,
      minHeight: 'calc(100vh - 64px - 200px)' // Adjust based on header and footer height
    }}>
      <h1 style={{
        fontFamily: oldMoneyStyles.fontSerif,
        color: oldMoneyStyles.colorMahogany,
        fontSize: '2rem',
        fontWeight: 500,
        marginBottom: '2rem',
        letterSpacing: '0.05em',
        borderBottom: `1px solid ${oldMoneyStyles.colorBrass}`,
        paddingBottom: '0.5rem'
      }}>Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <h2 style={{
            fontFamily: oldMoneyStyles.fontSerif,
            color: oldMoneyStyles.colorRich,
            fontSize: '1.2rem',
            marginBottom: '1rem'
          }}>Your cart is empty</h2>
          <p style={{
            fontFamily: oldMoneyStyles.fontSerif,
            color: oldMoneyStyles.colorRich,
            marginBottom: '2rem'
          }}>
            Looks like you haven't added any items to your cart yet.
          </p>
          <Button
            asChild
            style={{
              backgroundColor: oldMoneyStyles.colorGold,
              color: oldMoneyStyles.colorDeep,
              fontFamily: oldMoneyStyles.fontSerif,
              border: 'none',
              letterSpacing: '0.05em'
            }}
          >
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div style={{
              border: `1px solid ${oldMoneyStyles.colorBrass}`,
              backgroundColor: oldMoneyStyles.colorAntiqueCream,
              overflow: 'hidden'
            }}>
              <div style={{
                backgroundColor: oldMoneyStyles.colorAgedPaper,
                padding: '1rem 1.5rem',
                borderBottom: `1px solid ${oldMoneyStyles.colorBrass}`
              }}>
                <h2 style={{
                  fontFamily: oldMoneyStyles.fontSerif,
                  color: oldMoneyStyles.colorMahogany,
                  fontWeight: 500
                }}>Cart Items ({cartItems.length})</h2>
              </div>
              <ul>
                {cartItems.map((item, index) => (
                  <li
                    key={item.id}
                    style={{
                      padding: '1rem 1.5rem',
                      borderBottom: index !== cartItems.length - 1 ? `1px solid ${oldMoneyStyles.colorBrass}` : 'none'
                    }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <div className="relative h-24 w-24 shrink-0" style={{
                      border: `1px solid ${oldMoneyStyles.colorBrass}`,
                      overflow: 'hidden'
                    }}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between">
                        <div>
                          <h3 style={{
                            fontFamily: oldMoneyStyles.fontSerif,
                            color: oldMoneyStyles.colorRich,
                            fontWeight: 500
                          }}>{item.name}</h3>
                          <p style={{
                            fontFamily: oldMoneyStyles.fontSerif,
                            color: oldMoneyStyles.colorMahogany,
                            fontStyle: 'italic',
                            fontSize: '0.9rem'
                          }}>
                            {item.vendor}
                          </p>
                        </div>
                        <p style={{
                          fontFamily: oldMoneyStyles.fontSerif,
                          color: oldMoneyStyles.colorGold,
                          fontWeight: 600,
                          marginTop: '0.25rem'
                        }}>
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center">
                          <span style={{
                            fontFamily: oldMoneyStyles.fontSerif,
                            color: oldMoneyStyles.colorMahogany,
                            marginRight: '8px'
                          }}>Qty:</span>
                          <div className="flex items-center border" style={{ borderColor: oldMoneyStyles.colorBrass }}>
                            <button
                              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              className="px-2 py-0.5"
                              style={{
                                color: oldMoneyStyles.colorRich,
                                backgroundColor: oldMoneyStyles.colorAntiqueCream
                              }}
                            >
                              -
                            </button>
                            <span
                              className="px-3 py-0.5"
                              style={{
                                fontFamily: oldMoneyStyles.fontSerif,
                                color: oldMoneyStyles.colorRich,
                                fontWeight: 500
                              }}
                            >
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-2 py-0.5"
                              style={{
                                color: oldMoneyStyles.colorRich,
                                backgroundColor: oldMoneyStyles.colorAntiqueCream
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          style={{
                            color: oldMoneyStyles.colorRich,
                            fontFamily: oldMoneyStyles.fontSerif
                          }}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div style={{
              border: `1px solid ${oldMoneyStyles.colorBrass}`,
              backgroundColor: oldMoneyStyles.colorAntiqueCream,
              overflow: 'hidden',
              position: 'sticky',
              top: '5rem'
            }}>
              <div style={{
                backgroundColor: oldMoneyStyles.colorAgedPaper,
                padding: '1rem 1.5rem',
                borderBottom: `1px solid ${oldMoneyStyles.colorBrass}`
              }}>
                <h2 style={{
                  fontFamily: oldMoneyStyles.fontSerif,
                  color: oldMoneyStyles.colorMahogany,
                  fontWeight: 500
                }}>Order Summary</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span style={{
                      fontFamily: oldMoneyStyles.fontSerif,
                      color: oldMoneyStyles.colorRich
                    }}>Subtotal</span>
                    <span style={{
                      fontFamily: oldMoneyStyles.fontSerif,
                      color: oldMoneyStyles.colorRich,
                      fontWeight: 500
                    }}>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{
                      fontFamily: oldMoneyStyles.fontSerif,
                      color: oldMoneyStyles.colorRich
                    }}>Shipping</span>
                    <span style={{
                      fontFamily: oldMoneyStyles.fontSerif,
                      color: oldMoneyStyles.colorRich,
                      fontWeight: 500
                    }}>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{
                      fontFamily: oldMoneyStyles.fontSerif,
                      color: oldMoneyStyles.colorRich
                    }}>Tax</span>
                    <span style={{
                      fontFamily: oldMoneyStyles.fontSerif,
                      color: oldMoneyStyles.colorRich,
                      fontWeight: 500
                    }}>${tax.toFixed(2)}</span>
                  </div>
                  <div style={{
                    borderTop: `1px solid ${oldMoneyStyles.colorBrass}`,
                    paddingTop: '1rem'
                  }} className="flex justify-between">
                    <span style={{
                      fontFamily: oldMoneyStyles.fontSerif,
                      color: oldMoneyStyles.colorMahogany,
                      fontSize: '1.1rem',
                      fontWeight: 500
                    }}>Total</span>
                    <span style={{
                      fontFamily: oldMoneyStyles.fontSerif,
                      color: oldMoneyStyles.colorGold,
                      fontSize: '1.1rem',
                      fontWeight: 600
                    }}>${total.toFixed(2)}</span>
                  </div>
                </div>

                <Button
                  className="w-full mt-6"
                  style={{
                    backgroundColor: oldMoneyStyles.colorGold,
                    color: oldMoneyStyles.colorDeep,
                    fontFamily: oldMoneyStyles.fontSerif,
                    border: 'none',
                    letterSpacing: '0.05em',
                    padding: '1.25rem'
                  }}
                >
                  Proceed to Checkout
                </Button>

                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full" style={{ borderTop: `1px solid ${oldMoneyStyles.colorBrass}` }} />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span style={{
                        backgroundColor: oldMoneyStyles.colorAntiqueCream,
                        padding: '0 0.5rem',
                        color: oldMoneyStyles.colorRich,
                        fontFamily: oldMoneyStyles.fontSerif
                      }}>
                        or
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full mt-4"
                    asChild
                    style={{
                      borderColor: oldMoneyStyles.colorBrass,
                      color: oldMoneyStyles.colorRich,
                      fontFamily: oldMoneyStyles.fontSerif,
                      backgroundColor: 'transparent',
                      letterSpacing: '0.05em'
                    }}
                  >
                    <Link href="/products">Continue Shopping</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
