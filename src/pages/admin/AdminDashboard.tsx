import { Package, FolderOpen, TrendingUp, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useProducts } from '@/hooks/useProducts';
import { useCategories } from '@/hooks/useCategories';

export default function AdminDashboard() {
  const { data: products, isLoading: productsLoading } = useProducts();
  const { data: categories, isLoading: categoriesLoading } = useCategories();

  const totalProducts = products?.length || 0;
  const totalCategories = categories?.length || 0;
  const inStockProducts = products?.filter(p => p.status === 'available').length || 0;
  const outOfStockProducts = products?.filter(p => p.status === 'out_of_stock').length || 0;

  const stats = [
    {
      title: 'Total Products',
      value: totalProducts,
      icon: Package,
      description: 'Products in catalog',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      title: 'Categories',
      value: totalCategories,
      icon: FolderOpen,
      description: 'Product categories',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      title: 'In Stock',
      value: inStockProducts,
      icon: TrendingUp,
      description: 'Available products',
      color: 'text-success',
      bgColor: 'bg-success/10',
    },
    {
      title: 'Out of Stock',
      value: outOfStockProducts,
      icon: AlertTriangle,
      description: 'Needs restocking',
      color: 'text-warning',
      bgColor: 'bg-warning/10',
    },
  ];

  const isLoading = productsLoading || categoriesLoading;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to the QJWC Admin Dashboard</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="border-none shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`${stat.bgColor} p-2 rounded-lg`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="h-8 w-16 bg-muted animate-pulse rounded" />
              ) : (
                <div className="text-3xl font-bold font-display">{stat.value}</div>
              )}
              <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card className="border-none shadow-soft">
        <CardHeader>
          <CardTitle className="font-display">Recent Products</CardTitle>
        </CardHeader>
        <CardContent>
          {productsLoading ? (
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-12 bg-muted animate-pulse rounded" />
              ))}
            </div>
          ) : products && products.length > 0 ? (
            <div className="space-y-3">
              {products.slice(0, 5).map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-3 bg-secondary rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                      {product.image_url ? (
                        <img
                          src={product.image_url}
                          alt={product.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <Package className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {(product.categories as any)?.name || 'Uncategorized'}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      product.status === 'available'
                        ? 'bg-success/10 text-success'
                        : 'bg-warning/10 text-warning'
                    }`}
                  >
                    {product.status === 'available' ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <Package className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>No products yet. Add your first product!</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
