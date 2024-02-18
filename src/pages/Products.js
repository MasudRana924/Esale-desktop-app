
import { useState } from 'react';
import ProductModal from '../ProductModal';
const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '1',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '89',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '5',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
]
function Products() {
  const [open, setOpen] = useState(false);
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);

  const handleOpen = (productId) => {
    const index = products.findIndex((p) => p.id === productId);
    setSelectedProductIndex(index);
    setOpen(true);
    console.log(productId);
  };

  const handleClose = () => {
    setSelectedProductIndex(null);
    setOpen(false);
  };

  const handleNext = () => {
    setSelectedProductIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrevious = () => {
    setSelectedProductIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };
  return (
    <div className="w-full md:w-3/4 mx-auto">
      <div className="bg-white ">
        <div className="w-full mx-auto p-8">
          <h2 className="text-xl text-red-500 text-start ">Products</h2>

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product, index) => (

              <div>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">$ {product.price}</p>
                <button
                  className="btn h-9 w-3/4 bg-black border border-black rounded-lg text-white"
                  onClick={() => handleOpen(product.id)}
                >
                 Quick View
                </button>
              </div>

            ))}
          </div>
        </div>
      </div>
      <ProductModal open={open} handleClose={handleClose} selectedProductIndex={selectedProductIndex}
      handleNext={handleNext}
      handlePrevious={handlePrevious}
      products={products}
      ></ProductModal>
    </div>
  );
}

export default Products;
