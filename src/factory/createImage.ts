import { v4 as uuidv4 } from 'uuid';
import { PNGImage } from "../model/PNGImage";
import { JPGImage } from "../model/JPGImage";
import { GIFImage } from "../model/GIFImage";

export function createImage(type: string) {
    const supportedImageTypes: { [key: string]: any } = {
        'PNG' : PNGImage,
        'JPG': JPGImage,
        'GIF': GIFImage
    }
    const imageType = supportedImageTypes[type.toUpperCase()];

    if (!imageType) {
        console.error(`Unsupported image type: ${type}`);
        return null;
    }

    const id = uuidv4()
    return new imageType(id)
}