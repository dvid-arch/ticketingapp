export const uploadImage = async (file) => {
    if (!file) throw new Error('No file provided for upload');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

    try {
        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/upload`,
            {
                method: 'POST',
                body: formData,
            }
        );

        const data = await response.json();

        if (!data.secure_url) {
            throw new Error('Image upload failed: ' + JSON.stringify(data));
        }

        return data;
    } catch (error) {
        console.error('Error during image upload:', error);
        throw error;
    }
};
