
import React from 'react';

const ProductList = ({ products = [], onEdit, onDelete }) => {
  if (!Array.isArray(products) || products.length === 0) {
    return <p className="text-gray-500">No products available.</p>;
  }

  return (
    <div>
      <h2 className="text-2xl mb-4">Product List</h2>
      <table className="w-full table-auto min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="border whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
            <th className="border whitespace-nowrap px-4 py-2 font-medium text-gray-900">Description</th>
            <th className="border whitespace-nowrap px-4 py-2 font-medium text-gray-900">Price</th>
            <th className="border whitespace-nowrap px-4 py-2 font-medium text-gray-900">Quantity</th>
            <th className="border whitespace-nowrap px-4 py-2 font-medium text-gray-900">Category</th>
            {/* <th className="border whitespace-nowrap px-4 py-2 font-medium text-gray-900">Image URL</th> */}
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product._id}>
              <td className="border whitespace-nowrap px-4 py-2 font-medium text-gray-900">{product.name}</td>
              <td className="border whitespace-nowrap px-4 py-2 font-medium text-gray-900">{product.description}</td>
              <td className="border whitespace-nowrap px-4 py-2 font-medium text-gray-900">${product.price}</td>
              <td className="border whitespace-nowrap px-4 py-2 font-medium text-gray-900">{product.quantityInStock}</td>
              <td className="border whitespace-nowrap px-4 py-2 font-medium text-gray-900">{product.category}</td>
              {/* <td className="border whitespace-nowrap px-4 py-2 font-medium text-gray-900">{product.imageUrl}</td> */}
              <td className="whitespace-nowrap px-4 py-2">
                <button
                  onClick={() => onEdit(product)}
                  className="inline-block rounded bg-indigo-600 px-4 py-2 mx-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(product._id)}
                  className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
