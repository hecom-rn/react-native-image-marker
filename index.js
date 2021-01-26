"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageFormat = exports.TextBackgroundType = exports.Position = void 0;
/*
 * @Author: JimmyDaddy
 * @Date: 2017-09-14 10:40:09
 * @Last Modified by: JimmyDaddy
 * @Last Modified time: 2019-10-09 16:59:00
 * @Description
 */
const react_native_1 = require("react-native");
const { ImageMarker } = react_native_1.NativeModules;
const { resolveAssetSource } = react_native_1.Image;
var Position;
(function (Position) {
    Position["topLeft"] = "topLeft";
    Position["topCenter"] = "topCenter";
    Position["topRight"] = "topRight";
    Position["bottomLeft"] = "bottomLeft";
    Position["bottomCenter"] = "bottomCenter";
    Position["bottomRight"] = "bottomRight";
    Position["center"] = "center";
})(Position = exports.Position || (exports.Position = {}));
var TextBackgroundType;
(function (TextBackgroundType) {
    TextBackgroundType["stretchX"] = "stretchX";
    TextBackgroundType["stretchY"] = "stretchY";
})(TextBackgroundType = exports.TextBackgroundType || (exports.TextBackgroundType = {}));
var ImageFormat;
(function (ImageFormat) {
    ImageFormat["png"] = "png";
    ImageFormat["jpg"] = "jpg";
    ImageFormat["base64"] = "base64";
})(ImageFormat = exports.ImageFormat || (exports.ImageFormat = {}));
class Marker {
    static markText(option) {
        const { src, text, X, Y, color, fontName, fontSize, shadowStyle, textBackgroundStyle, scale, quality, position, filename, saveFormat, maxSize = 2048, height, width, } = option;
        if (!src) {
            throw new Error('please set image!');
        }
        let srcObj = resolveAssetSource(src);
        if (!srcObj) {
            srcObj = {
                uri: src,
                __packager_asset: false
            };
        }
        let mShadowStyle = shadowStyle || {};
        let mTextBackgroundStyle = textBackgroundStyle || {};
        if (!position) {
            return ImageMarker.addText(srcObj, text, X, Y, color, fontName, fontSize, mShadowStyle, mTextBackgroundStyle, scale, quality, filename, saveFormat, maxSize, width, height);
        }
        else {
            return ImageMarker.addTextByPostion(srcObj, text, position, color, fontName, fontSize, mShadowStyle, mTextBackgroundStyle, scale, quality, filename, saveFormat, maxSize, width, height);
        }
    }
    static markImage(option) {
        const { src, markerSrc, X, Y, markerScale, scale, quality, position, filename, saveFormat, maxSize = 2048, } = option;
        if (!src) {
            throw new Error('please set image!');
        }
        if (!markerSrc) {
            throw new Error('please set mark image!');
        }
        let srcObj = resolveAssetSource(src);
        if (!srcObj) {
            srcObj = {
                uri: src,
                __packager_asset: false
            };
        }
        let markerObj = resolveAssetSource(markerSrc);
        if (!markerObj) {
            markerObj = {
                uri: markerSrc,
                __packager_asset: false
            };
        }
        if (!position) {
            return ImageMarker.markWithImage(srcObj, markerObj, X, Y, scale, markerScale, quality, filename, saveFormat, maxSize);
        }
        else {
            return ImageMarker.markWithImageByPosition(srcObj, markerObj, position, scale, markerScale, quality, filename, saveFormat, maxSize);
        }
    }
    static readPictureDegree(src) {
        let srcObj = resolveAssetSource(src);
        if (!srcObj) {
            srcObj = {
                uri: src,
                __packager_asset: false
            };
        }
        return ImageMarker.readPictureDegree(srcObj);
    }
}
exports.default = Marker;

