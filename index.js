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
        const { src, text, X, Y, color, fontName, fontSize, shadowStyle, textBackgroundStyle, scale, quality, position, filename, saveFormat, maxSize = 2048, height = 0, width = 0, } = option;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7Ozs7O0dBTUc7QUFDSCwrQ0FBd0U7QUFFeEUsTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLDRCQUFhLENBQUE7QUFDckMsTUFBTSxFQUFFLGtCQUFrQixFQUFFLEdBQUcsb0JBQUssQ0FBQTtBQUVwQyxJQUFZLFFBUVg7QUFSRCxXQUFZLFFBQVE7SUFDbEIsK0JBQW1CLENBQUE7SUFDbkIsbUNBQXVCLENBQUE7SUFDdkIsaUNBQXFCLENBQUE7SUFDckIscUNBQXlCLENBQUE7SUFDekIseUNBQTZCLENBQUE7SUFDN0IsdUNBQTJCLENBQUE7SUFDM0IsNkJBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQVJXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBUW5CO0FBRUQsSUFBWSxrQkFHWDtBQUhELFdBQVksa0JBQWtCO0lBQzVCLDJDQUFxQixDQUFBO0lBQ3JCLDJDQUFxQixDQUFBO0FBQ3ZCLENBQUMsRUFIVyxrQkFBa0IsR0FBbEIsMEJBQWtCLEtBQWxCLDBCQUFrQixRQUc3QjtBQUVELElBQVksV0FJWDtBQUpELFdBQVksV0FBVztJQUNyQiwwQkFBVyxDQUFBO0lBQ1gsMEJBQVcsQ0FBQTtJQUNYLGdDQUFpQixDQUFBO0FBQ25CLENBQUMsRUFKVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUl0QjtBQTJERCxNQUFxQixNQUFNO0lBQ3pCLE1BQU0sQ0FBQyxRQUFRLENBQUUsTUFBc0I7UUFDckMsTUFBTSxFQUNKLEdBQUcsRUFDSCxJQUFJLEVBQ0osQ0FBQyxFQUNELENBQUMsRUFDRCxLQUFLLEVBQ0wsUUFBUSxFQUNSLFFBQVEsRUFDUixXQUFXLEVBQ1gsbUJBQW1CLEVBQ25CLEtBQUssRUFDTCxPQUFPLEVBQ1AsUUFBUSxFQUNSLFFBQVEsRUFDUixVQUFVLEVBQ1YsT0FBTyxHQUFHLElBQUksRUFDZCxNQUFN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