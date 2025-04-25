'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function VendorDashboard() {
  // Mock data for vendor dashboard
  const [vendorData, setVendorData] = useState({
    name: 'Artisan Ceramics',
    totalSales: 12489.99,
    totalOrders: 156,
    averageRating: 4.8,
    totalReviews: 124,
    products: 18,
    pendingOrders: 5,
    recentSales: [
      {
        id: 'ORD-1234',
        date: '2023-04-22',
        customer: 'John Doe',
        amount: 79.99,
        status: 'Delivered',
        product: 'Handcrafted Ceramic Vase'
      },
      {
        id: 'ORD-1235',
        date: '2023-04-21',
        customer: 'Jane Smith',
        amount: 159.98,
        status: 'Shipped',
        product: 'Handcrafted Ceramic Vase (2)'
      },
      {
        id: 'ORD-1236',
        date: '2023-04-20',
        customer: 'Robert Johnson',
        amount: 79.99,
        status: 'Processing',
        product: 'Handcrafted Ceramic Vase'
      },
      {
        id: 'ORD-1237',
        date: '2023-04-19',
        customer: 'Emily Davis',
        amount: 79.99,
        status: 'Delivered',
        product: 'Handcrafted Ceramic Vase'
      },
      {
        id: 'ORD-1238',
        date: '2023-04-18',
        customer: 'Michael Wilson',
        amount: 79.99,
        status: 'Delivered',
        product: 'Handcrafted Ceramic Vase'
      }
    ],
    topProducts: [
      {
        id: 1,
        name: 'Handcrafted Ceramic Vase',
        price: 79.99,
        image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?q=80&w=500&auto=format&fit=crop',
        sales: 42,
        revenue: 3359.58
      },
      {
        id: 2,
        name: 'Ceramic Coffee Mug',
        price: 22.99,
        image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=500&auto=format&fit=crop',
        sales: 38,
        revenue: 873.62
      },
      {
        id: 3,
        name: 'Ceramic Dinner Plate Set',
        price: 119.99,
        image: 'https://images.unsplash.com/photo-1603199506016-b9a594b593c0?q=80&w=500&auto=format&fit=crop',
        sales: 24,
        revenue: 2879.76
      }
    ]
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Vendor Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, {vendorData.name}
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2">
          <Button asChild>
            <Link href="/vendor/products/new">Add New Product</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/vendor/settings">Settings</Link>
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Sales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${vendorData.totalSales.toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              From {vendorData.totalOrders} orders
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Products
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{vendorData.products}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {vendorData.pendingOrders} pending orders
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Average Rating
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold flex items-center">
              {vendorData.averageRating}
              <span className="text-yellow-500 ml-1">★</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              From {vendorData.totalReviews} reviews
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Conversion Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.6%</div>
            <p className="text-xs text-muted-foreground mt-1">
              +0.8% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Top Products */}
      <h2 className="text-xl font-bold mb-4">Top Selling Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {vendorData.topProducts.map((product) => (
          <Card key={product.id}>
            <CardContent className="p-0">
              <div className="flex">
                <div className="relative h-24 w-24 shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium line-clamp-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    ${product.price}
                  </p>
                  <div className="flex justify-between">
                    <span className="text-xs text-muted-foreground">
                      {product.sales} sold
                    </span>
                    <span className="text-xs font-medium">
                      ${product.revenue.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Orders */}
      <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
      <Card className="mb-8">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4 font-medium">Order ID</th>
                <th className="text-left p-4 font-medium">Date</th>
                <th className="text-left p-4 font-medium">Customer</th>
                <th className="text-left p-4 font-medium">Product</th>
                <th className="text-left p-4 font-medium">Amount</th>
                <th className="text-left p-4 font-medium">Status</th>
                <th className="text-left p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {vendorData.recentSales.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="p-4">{order.id}</td>
                  <td className="p-4">{order.date}</td>
                  <td className="p-4">{order.customer}</td>
                  <td className="p-4">{order.product}</td>
                  <td className="p-4">${order.amount.toFixed(2)}</td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        order.status === 'Delivered'
                          ? 'bg-green-100 text-green-800'
                          : order.status === 'Shipped'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/vendor/orders/${order.id}`}>View</Link>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="flex justify-center">
        <Button variant="outline" asChild>
          <Link href="/vendor/orders">View All Orders</Link>
        </Button>
      </div>
    </div>
  );
}
