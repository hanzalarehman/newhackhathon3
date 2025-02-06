  import axios from 'axios';
  import { client } from './sanityClient.js';

  async function uploadImageToSanity(imageUrl: string): Promise<string> {

    try {
      // Fetch the image from the URL and convert it to a buffer
      const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
      const buffer = Buffer.from(response.data);

      // Upload the image to Sanity
      const asset = await client.assets.upload('image', buffer, {
        filename: imageUrl.split('/').pop(), // Extract the filename from URL
      });

      // Debugging: Log the asset returned by Sanity
      console.log('Image uploaded successfully:', asset);

      return asset._id; // Return the uploaded image asset reference ID
    } catch (error) {
      console.error('❌ Failed to upload image:', imageUrl, error);
      throw error;
    }
  }

  async function importData() {
      try {
        // Fetch data from external API
        const response = await axios.get('https://template-0-beta.vercel.app/api/product');
        const products = response.data;
interface ProductData{
  _type: string;
  id: any;
  _id: string; 
  name: any;
  imagePath: any;
  price: number;
  description: any;
  discountPercentage: any;
  isFeaturedProduct: any;
  stockLevel: any;
  category: any;
}
        // Iterate over the products
        for (const product of products) {
          let imageRef = '';

          // Upload image and get asset reference if it exists
          if (product.image) {
            imageRef = await uploadImageToSanity(product.image);
          }

          const sanityProduct:ProductData = {
            _type: 'product',
            id: product.id,
            _id: product.id,
            name: product.name,
            imagePath: product.imagePath,
            price: parseFloat(product.price),
            description: product.description,
            discountPercentage: product.discountPercentage,
            isFeaturedProduct: product.isFeaturedProduct,
            stockLevel: product.stockLevel,
            category: product.category,
    
          };

          // Log the product before attempting to upload it to Sanity
          console.log('Uploading product:', sanityProduct);

          // Import data into Sanity
          await client.createOrReplace(

            sanityProduct
          );
          console.log(`✅ Imported product: ${sanityProduct.name}`);
        }

        console.log('✅ Data import completed!');
      } catch (error) {
        console.error('❌ Error importing data:', error);
      }
  }

  importData();
  // skleByN584WDe1ngJgKSIuzXgOdJUgnR908vL2amRxWQmBfRFHkk6YDhVLwQWV6EUw4mhfUjZmCBtliLbhY7T1pVm9bTUyRktgOngtbr4exwsnJ6duHGvby3PuuoP67pDRWbocFO0Zo65qD0vn7vDfBxCQZgzuVLNdKwkULR5wBBF3gR68gt