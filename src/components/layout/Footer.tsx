'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Artisanal Marketplace</h3>
            <p className="text-sm text-muted-foreground">
              A sophisticated e-commerce platform designed for artisanal products, featuring advanced product categorization, personalized recommendations, and a seamless checkout experience.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products/featured" className="text-sm text-muted-foreground hover:text-foreground">
                  Featured Products
                </Link>
              </li>
              <li>
                <Link href="/products/new" className="text-sm text-muted-foreground hover:text-foreground">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Vendor</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/vendor/register" className="text-sm text-muted-foreground hover:text-foreground">
                  Become a Vendor
                </Link>
              </li>
              <li>
                <Link href="/vendor" className="text-sm text-muted-foreground hover:text-foreground">
                  Vendor Dashboard
                </Link>
              </li>
              <li>
                <Link href="/vendor/help" className="text-sm text-muted-foreground hover:text-foreground">
                  Vendor Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-sm text-muted-foreground hover:text-foreground">
                  Shipping & Returns
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Artisanal Marketplace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
