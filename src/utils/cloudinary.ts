// @typescript-eslint / no -var-requires
const cloudinary = require("cloudinary").v2;
// import cloudinary from "cloudinary"
// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.API_KEY_CLOUDINARY,
//     api_secret: process.env.API_SECRET_CLOUDINARY
// });

cloudinary.config({
    cloud_name: 'holderlounge',
    api_key: '165637685419391',
    api_secret: '33mf7BLQcn4wRz4SVZMS5pA4eEs'
});

export async function uploadImage(imageUploaded) {
    // console.log(imageUploaded)
    // cloudinary.uploader.upload(
    //     imageUploaded,
    //     { width: 400, height: 300, crop: "fill", moderation: "webpurify" },
    //     (err, res) => {
    //         if (err) reject(err);
    //         resolve(res);
    //     }
    // );
    await cloudinary.uploader.upload(imageUploaded, 'eocqrwrj');

};

