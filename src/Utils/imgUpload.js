import axios from "axios";

export const ImageUpload = async (image) => {
  console.log(image);

  const formData = new FormData();
  formData.append("image", image);
  console.log(formData);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,

    formData
  );

  return data.data.display_url;
};
