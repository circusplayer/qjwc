import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Package, Phone, Mail, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useProduct } from '@/hooks/useProducts';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { data: product, isLoading, error } = useProduct(slug || '');

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container py-8">
          <div className="animate-pulse">
            <div className="h-6 w-32 bg-muted rounded mb-8" />
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="aspect-square bg-muted rounded-xl" />
              <div className="space-y-4">
                <div className="h-8 w-3/4 bg-muted rounded" />
                <div className="h-6 w-1/4 bg-muted rounded" />
                <div className="h-24 bg-muted rounded" />
                <div className="h-12 w-1/2 bg-muted rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container py-16">
          <div className="text-center">
            <Package className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
            <h1 className="font-display text-2xl font-bold mb-2">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The product you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/products">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const category = product.categories as { id: string; name: string; slug: string } | null;

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="container py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/products" className="text-muted-foreground hover:text-foreground transition-colors">
              Products
            </Link>
            {category && (
              <>
                <span className="text-muted-foreground">/</span>
                <Link 
                  to={`/products?category=${category.slug}`} 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {category.name}
                </Link>
              </>
            )}
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-secondary rounded-xl overflow-hidden relative">
              {product.image_url ? (
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Package className="h-24 w-24 text-muted-foreground/30" />
                </div>
              )}
              <Badge
                variant={product.status === 'available' ? 'default' : 'secondary'}
                className="absolute top-4 right-4 text-sm"
              >
                {product.status === 'available' ? 'In Stock' : 'Out of Stock'}
              </Badge>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {category && (
              <Link to={`/products?category=${category.slug}`}>
                <Badge variant="outline" className="hover:bg-secondary transition-colors">
                  {category.name}
                </Badge>
              </Link>
            )}

            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
                {product.name}
              </h1>
              
              {product.price ? (
                <p className="text-3xl font-bold text-primary">
                  ₱{Number(product.price).toLocaleString('en-PH', { minimumFractionDigits: 2 })}
                </p>
              ) : (
                <p className="text-xl text-muted-foreground">Contact us for pricing</p>
              )}
            </div>

            {product.description && (
              <div>
                <h2 className="font-display font-semibold text-lg mb-2">Description</h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {product.description}
                </p>
              </div>
            )}

            {/* Product Specifications */}
            <Card className="border-none shadow-soft">
              <CardContent className="pt-6">
                <h2 className="font-display font-semibold text-lg mb-4">Product Details</h2>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Availability</span>
                    <span className="font-medium">
                      {product.status === 'available' ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Stock Quantity</span>
                    <span className="font-medium">{product.stock_quantity} units</span>
                  </div>
                  {category && (
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">Category</span>
                      <span className="font-medium">{category.name}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Premium quality materials</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Fast delivery to CALABARZON & Metro Manila</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Bulk order discounts available</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                asChild 
                className="flex-1 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Link to="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Request a Quote
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="flex-1 hover:scale-105 transition-all duration-300"
              >
                <a href="tel:09150998094">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Back to Products */}
        <div className="mt-12 pt-8 border-t border-border">
          <Button variant="ghost" asChild>
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Products
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
