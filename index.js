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
        const { src, text, X, Y, color, fontName, fontSize, shadowStyle, textBackgroundStyle, scale, quality, position, filename, saveFormat, maxSize = 2048, } = option;
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
            return ImageMarker.addText(srcObj, text, X, Y, color, fontName, fontSize, mShadowStyle, mTextBackgroundStyle, scale, quality, filename, saveFormat, maxSize);
        }
        else {
            return ImageMarker.addTextByPostion(srcObj, text, position, color, fontName, fontSize, mShadowStyle, mTextBackgroundStyle, scale, quality, filename, saveFormat, maxSize);
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
}
exports.default = Marker;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7Ozs7O0dBTUc7QUFDSCwrQ0FBd0U7QUFFeEUsTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLDRCQUFhLENBQUE7QUFDckMsTUFBTSxFQUFFLGtCQUFrQixFQUFFLEdBQUcsb0JBQUssQ0FBQTtBQUVwQyxJQUFZLFFBUVg7QUFSRCxXQUFZLFFBQVE7SUFDbEIsK0JBQW1CLENBQUE7SUFDbkIsbUNBQXVCLENBQUE7SUFDdkIsaUNBQXFCLENBQUE7SUFDckIscUNBQXlCLENBQUE7SUFDekIseUNBQTZCLENBQUE7SUFDN0IsdUNBQTJCLENBQUE7SUFDM0IsNkJBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQVJXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBUW5CO0FBRUQsSUFBWSxrQkFHWDtBQUhELFdBQVksa0JBQWtCO0lBQzVCLDJDQUFxQixDQUFBO0lBQ3JCLDJDQUFxQixDQUFBO0FBQ3ZCLENBQUMsRUFIVyxrQkFBa0IsR0FBbEIsMEJBQWtCLEtBQWxCLDBCQUFrQixRQUc3QjtBQUVELElBQVksV0FJWDtBQUpELFdBQVksV0FBVztJQUNyQiwwQkFBVyxDQUFBO0lBQ1gsMEJBQVcsQ0FBQTtJQUNYLGdDQUFpQixDQUFBO0FBQ25CLENBQUMsRUFKVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUl0QjtBQXlERCxNQUFxQixNQUFNO0lBQ3pCLE1BQU0sQ0FBQyxRQUFRLENBQUUsTUFBc0I7UUFDckMsTUFBTSxFQUNKLEdBQUcsRUFDSCxJQUFJLEVBQ0osQ0FBQyxFQUNELENBQUMsRUFDRCxLQUFLLEVBQ0wsUUFBUSxFQUNSLFFBQVEsRUFDUixXQUFXLEVBQ1gsbUJBQW1CLEVBQ25CLEtBQUssRUFDTCxPQUFPLEVBQ1AsUUFBUSxFQUNSLFFBQVEsRUFDUixVQUFVLEVBQ1YsT0FBTyxHQUFHLElBQUksR0FDZixHQUFH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