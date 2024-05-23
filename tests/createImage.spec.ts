import { createImage } from "../src/factory/createImage"
import { Image } from "../src/model/Image";

describe("CreateImage Factory Pattern test", () => {
    it("Factory Pattern", () => {
        const image = createImage('JPG');

        expect(image).toBeInstanceOf(Image);
    })
})