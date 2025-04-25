'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ShoppingCart, User } from 'lucide-react';
import { useCart } from '@/lib/context/CartContext';

export default function Header() {
  // Use null as initial state to prevent hydration mismatch
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  // Get cart state from context
  const { cartCount } = useCart();

  // Create a separate mounted state for cart display
  const [cartMounted, setCartMounted] = useState(false);

  // Only set the state after component is mounted on the client
  useEffect(() => {
    setIsMounted(true);
    setIsLoggedIn(false); // Set your initial state here

    // Set cart mounted state after a small delay to ensure hydration is complete
    const timer = setTimeout(() => {
      setCartMounted(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  // Define old money styles to match the homepage
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

  return (
    <header style={{
      borderBottom: `1px solid ${oldMoneyStyles.colorBrass}`,
      backgroundColor: oldMoneyStyles.colorAgedPaper
    }}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" style={{ color: oldMoneyStyles.colorRich }}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]" style={{
              backgroundColor: oldMoneyStyles.colorAgedPaper,
              borderRight: `1px solid ${oldMoneyStyles.colorBrass}`
            }}>
              <div className="mt-8 mb-6 text-center">
                <div className="inline-block p-2" style={{ border: `1px solid ${oldMoneyStyles.colorGold}` }}>
                  <span className="text-xs uppercase tracking-[0.25em]" style={{
                    color: oldMoneyStyles.colorGold,
                    fontFamily: oldMoneyStyles.fontSerif,
                    letterSpacing: '0.2em'
                  }}>
                    Est. 1897
                  </span>
                </div>
              </div>
              <nav className="flex flex-col gap-4">
                <Link href="/" style={{
                  fontFamily: oldMoneyStyles.fontSerif,
                  color: oldMoneyStyles.colorRich,
                  fontSize: '1.125rem',
                  letterSpacing: '0.05em'
                }}>
                  Home
                </Link>
                <Link href="/products" style={{
                  fontFamily: oldMoneyStyles.fontSerif,
                  color: oldMoneyStyles.colorRich,
                  fontSize: '1.125rem',
                  letterSpacing: '0.05em'
                }}>
                  Collections
                </Link>
                <Link href="/vendor" style={{
                  fontFamily: oldMoneyStyles.fontSerif,
                  color: oldMoneyStyles.colorRich,
                  fontSize: '1.125rem',
                  letterSpacing: '0.05em'
                }}>
                  Artisan Guild
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center">
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <div style={{
                fontFamily: oldMoneyStyles.fontSerif,
                color: oldMoneyStyles.colorMahogany,
                fontSize: '1.35rem',
                letterSpacing: '0.05em',
                fontWeight: 600,
                textShadow: '0.5px 0.5px 0px rgba(212, 175, 55, 0.3)', // Subtle gold shadow for emphasis
                position: 'relative',
                display: 'inline-block',
                padding: '0 4px'
              }}>
                <span style={{
                  position: 'relative',
                  zIndex: 1
                }}>Artisanal Treasures</span>
                <div style={{
                  position: 'absolute',
                  bottom: -2,
                  left: 0,
                  right: 0,
                  height: '1px',
                  background: oldMoneyStyles.colorGold,
                  zIndex: 0
                }}></div>
              </div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/products" style={{
              fontFamily: oldMoneyStyles.fontSerif,
              color: oldMoneyStyles.colorRich,
              fontSize: '0.9rem',
              letterSpacing: '0.05em'
            }}>
              Collections
            </Link>
            <Link href="/vendor" style={{
              fontFamily: oldMoneyStyles.fontSerif,
              color: oldMoneyStyles.colorRich,
              fontSize: '0.9rem',
              letterSpacing: '0.05em'
            }}>
              Artisan Guild
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/cart">
            <Button variant="ghost" size="icon" style={{ color: oldMoneyStyles.colorRich, position: 'relative' }}>
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
              {cartMounted && cartCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-5px',
                  right: '-5px',
                  backgroundColor: oldMoneyStyles.colorGold,
                  color: oldMoneyStyles.colorDeep,
                  borderRadius: '50%',
                  width: '18px',
                  height: '18px',
                  fontSize: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontFamily: oldMoneyStyles.fontSerif
                }}>
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>

          {/* Only render the conditional content after client-side hydration */}
          {isMounted && (
            <>
              {isLoggedIn ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full" style={{
                      border: `1px solid ${oldMoneyStyles.colorBrass}`,
                      padding: '1px'
                    }}>
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" alt="User" />
                        <AvatarFallback style={{
                          backgroundColor: oldMoneyStyles.colorAntiqueCream,
                          color: oldMoneyStyles.colorRich,
                          fontFamily: oldMoneyStyles.fontSerif
                        }}>U</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" style={{
                    backgroundColor: oldMoneyStyles.colorAntiqueCream,
                    border: `1px solid ${oldMoneyStyles.colorBrass}`
                  }}>
                    <DropdownMenuLabel style={{
                      fontFamily: oldMoneyStyles.fontSerif,
                      color: oldMoneyStyles.colorMahogany,
                      letterSpacing: '0.05em'
                    }}>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator style={{ backgroundColor: oldMoneyStyles.colorBrass }} />
                    <DropdownMenuItem asChild>
                      <Link href="/profile" style={{
                        fontFamily: oldMoneyStyles.fontSerif,
                        color: oldMoneyStyles.colorRich
                      }}>Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/orders" style={{
                        fontFamily: oldMoneyStyles.fontSerif,
                        color: oldMoneyStyles.colorRich
                      }}>Orders</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/vendor" style={{
                        fontFamily: oldMoneyStyles.fontSerif,
                        color: oldMoneyStyles.colorRich
                      }}>Artisan Guild</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator style={{ backgroundColor: oldMoneyStyles.colorBrass }} />
                    <DropdownMenuItem onClick={() => setIsLoggedIn(false)} style={{
                      fontFamily: oldMoneyStyles.fontSerif,
                      color: oldMoneyStyles.colorRich
                    }}>
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link href="/auth/login">
                  <Button variant="ghost" size="icon" style={{ color: oldMoneyStyles.colorRich }}>
                    <User className="h-5 w-5" />
                    <span className="sr-only">Login</span>
                  </Button>
                </Link>
              )}
            </>
          )}

          {/* Show a placeholder during server rendering to prevent hydration mismatch */}
          {!isMounted && (
            <Button variant="ghost" size="icon" style={{ color: oldMoneyStyles.colorRich }}>
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
