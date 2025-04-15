import { useProductActions } from '../hooks/useProducts';
import { useImageActions } from '../hooks/useImages'
import { toast } from '../utils/toast'; // función para mostrar toast
import { confirmDelete } from '../utils/confirmDelete'; // función para confirmar eliminación
import { CreateOptions, ImageInput, newProduct, Product, ProductInput } from '../types';

export const useProductHandlers = () => {
  const { deleteProduct, updateProduct, createProduct, importProducts } = useProductActions();
  const { createImage } = useImageActions();

  const handleDelete = async (id: string) => {
    const confirm = await confirmDelete("Estás seguro de eliminar éste Producto?"); // función reusable
    if (!confirm) return;

    try {
      await deleteProduct(id);
      toast('Producto eliminado con éxito', 'warning');
    } catch (err) {
      toast('Error al eliminar producto', 'error');
      console.error(err);
    }
  };

  const handleUpdate = async (product: Product) => {
    // Validaciones antes de enviar
    if (!product.ref || product.ref.trim() === "") {
      toast("La referencia no puede estar vacía.", "error");
      return product;
    }
    if (product.ean && (typeof product.ean !== "string" || !/^\d{13}$/.test(product.ean.trim()))) {
      toast("El EAN debe contener exactamente 13 dígitos numéricos o estar vacío.", "error",);
      return product;
    }
    const priceValue = product.price;
    if (isNaN(priceValue) || priceValue < 0) {
      toast("El precio debe ser un numero válido y no negativo.", "error");
      return product;
    }

    const input: ProductInput = {
      ref: product.ref,
      price: product.price,
      ean: product.ean,
      descripcion: product.descripcion || null,
      brandId: product.brand?.id ? product.brand.id : null,
      subcategoryId: product.subcategory?.id ? product.subcategory.id : null,
      imageId: product.image?.id ? product.image.id : null

    };

    try {
      await updateProduct(product.id, input);
      toast('Producto actualizado', 'success');
      return product; // Retorna el producto actualizado
    } catch (err) {
      toast('Error al actualizar', 'error');
      console.error(err);
    }
  };

  const handleCreate = async ( newProduct: newProduct, {onSuccess, onError }: CreateOptions) => {
    try {
      let imageId = null;

      // Si hay URL de imagen, primero la creamos
      if (newProduct.imageUrl) {
        const input: ImageInput = { url: newProduct.imageUrl }
        const imageResponse = await createImage(input);
        imageId = imageResponse.data.createImage.id;
      }

      const input: ProductInput = {
        ref: newProduct.ref,
        ean: newProduct.ean,
        price: typeof newProduct.price === 'string' ? parseFloat(newProduct.price) || 0 : newProduct.price || 0,
        descripcion: newProduct.descripcion || null,
        brandId: newProduct.brandId || null,
        subcategoryId: newProduct.subcategoryId || null,
        imageId: imageId, // Asigna la imagen creada al producto
      };

      await createProduct(input);

      toast("Producto creado correctamente","success");
      onSuccess?.();
    } catch (error: any) {
      console.error("Error al crear producto:", error);
      toast("Error al crear producto","error");
      onError?.();
    }
  }

  const handleImport = async (data: ProductInput[], {onSuccess, onError }: CreateOptions) => {
    try {
      await importProducts(data);
      toast(`${data.length} Productos importados correctamente` ,"success");
      onSuccess?.();
    } catch (error) {
      console.error("Error al importar productos:", error);
      toast("Error al importar productos","error");
      onError?.();
    }
  }

  return {
    handleDelete,
    handleUpdate,
    handleCreate,
    handleImport,
  };
};
