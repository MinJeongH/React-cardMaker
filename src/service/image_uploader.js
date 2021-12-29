import axios from "axios";

class ImageUploader {
    async upload(file) {
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'a5b4t7jp');
        const result = await axios.post(
            'https://api.cloudinary.com/v1_1/drsduokgq/image/upload',data).then(result => result.data);
        return await result;
    }
}

export default ImageUploader;