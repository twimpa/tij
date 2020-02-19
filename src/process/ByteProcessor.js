/*
 *  tij: Tiny ImageJ API in JavaScript
 *  Copyright (C) 2017-2020  Jean-Christophe Taveau.
 *
 *  This file is part of tij
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with tij.  If not, see <http://www.gnu.org/licenses/>.
 *
 *
 * Authors:
 * Jean-Christophe Taveau
 */


/**
 * public class ByteProcessor
 * extends ImageProcessor
 *
 * This is an 8-bit image and methods that operate on that image. Based on the ImageProcessor class
 * from "KickAss Java Programming" by Tonny Espeset.
 */

export class ByteProcessor extends ImageProcessor {
  /**
   * Creates a ByteProcessor from a TIC - Tiny Image Core - Image.
   * @constructor
   * 
   * @param {java.awt.Image} img - 
   * 
   * @author Created by ijdoc2js
   */
  constructor (...args) {
    // TODO
    /**
     * Creates a ByteProcessor from a TIC - Tiny Image Core - Image.
     * @constructor
     * 
     * @param {java.awt.Image} img - 
     * 
     * @author Created by ijdoc2js
     */
    // constructor(img)
    
    /**
     * Creates a ByteProcessor from a pixel array and IndexColorModel.
     * @constructor
     * 
     * @param {int} width - 
     * @param {int} height - 
     * @param {byte[]} pixels - 
     * @param {java.awt.image.ColorModel} cm - 
     * 
     * @author Created by ijdoc2js
     */
    // constructor (width, height, pixels=null, cm=undefined)
    
    /**
     * Creates a ByteProcessor from a TYPE_BYTE_GRAY BufferedImage.
     * @constructor
     * 
     * @param {java.awt.image.BufferedImage} bi - 
     * 
     * @author Created by ijdoc2js
     */
    // constructor(bufferedImage)

    /**
     * Creates a ByteProcessor from an ImageProcessor. 16-bit and 32-bit
     * pixel data are scaled from min-max to 0-255 if 'scale' is true.
     * @constructor
     * 
     * @param {ImageProcessor} ip - 
     * @param {boolean} scale - 
     * 
     * @author Created by ijdoc2js
     */
    // constructor (ip, scale)
    
    throw new NotImplementedException("ByteProcessor.constructor(..)");
  };


  /**
   * Returns a copy of this image in the form of an AWT Image.
   * 
   * @return java.awt.Image
   * 
   * @author Created by ijdoc2js
   */
  createImage() {
    throw new NotImplementedException("ByteProcessor.createImage(..)");
  };

  /**
   * Returns this image as a BufferedImage.
   * 
   * @return java.awt.image.BufferedImage
   * 
   * @author Created by ijdoc2js
   */
  getBufferedImage() {
    throw new NotImplementedException("ByteProcessor.getBufferedImage(..)");
  };

  /**
   * Returns a new, blank ByteProcessor with the specified width and height.
   * 
   * @param {int} width - 
   * @param {int} height - 
   * @return ImageProcessor
   * 
   * @author Created by ijdoc2js
   */
  createProcessor(width, height) {
    throw new NotImplementedException("ByteProcessor.createProcessor(..)");
  };

  /**
   * Returns a new processor containing an image
 * that corresponds to the current ROI.
   * 
   * @return ImageProcessor
   * 
   * @author Created by ijdoc2js
   */
  crop() {
    throw new NotImplementedException("ByteProcessor.crop(..)");
  };

  /**
   * Returns a duplicate of this image.
   * 
   * @return ImageProcessor
   * 
   * @author Created by ijdoc2js
   */
  duplicate() {
    throw new NotImplementedException("ByteProcessor.duplicate(..)");
  };

  /**
   * Make a snapshot of the current image.
   * 
   * 
   * @author Created by ijdoc2js
   */
  snapshot() {
    throw new NotImplementedException("ByteProcessor.snapshot(..)");
  };

  /**
   * Reset the image from snapshot.
   * 
   * 
   * @author Created by ijdoc2js
   */
  reset() {
    throw new NotImplementedException("ByteProcessor.reset(..)");
  };

  /**
   * Swaps the pixel and snapshot (undo) arrays.
   * 
   * 
   * @author Created by ijdoc2js
   */
  swapPixelArrays() {
    throw new NotImplementedException("ByteProcessor.swapPixelArrays(..)");
  };

  /**
   * Restore pixels that are within roi but not part of mask.
   * 
   * @param {ImageProcessor} mask - 
   * 
   * @author Created by ijdoc2js
   */
  reset(mask) {
    throw new NotImplementedException("ByteProcessor.reset(..)");
  };

  /**
   * Sets a new pixel array for the snapshot (undo) buffer.
   * 
   * @param {java.lang.Object} pixels - 
   * 
   * @author Created by ijdoc2js
   */
  setSnapshotPixels(pixels) {
    throw new NotImplementedException("ByteProcessor.setSnapshotPixels(..)");
  };

  /**
   * Returns a reference to the snapshot (undo) buffer, or null.
   * 
   * @return java.lang.Object
   * 
   * @author Created by ijdoc2js
   */
  getSnapshotPixels() {
    throw new NotImplementedException("ByteProcessor.getSnapshotPixels(..)");
  };

  /**
   * Sets pixels that are within roi and part of the mask to the foreground
 * color. Does nothing if the mask is not the same size as the ROI.
   * 
   * @param {ImageProcessor} mask - 
   * 
   * @author Created by ijdoc2js
   */
  fill(mask) {
    throw new NotImplementedException("ByteProcessor.fill(..)");
  };

  /**
   * Returns the value of the pixel at (x,y). For RGB images, the
 * argb values are packed in an int. For float images, the
 * the value must be converted using Float.intBitsToFloat().
 * Returns zero if either the x or y coodinate is out of range.
 * Use <i>getValue(x,y)</i> to get calibrated values from
 * 8-bit and 16-bit images, to get intensity values from RGB
 * images and to get float values from 32-bit images.
   * 
   * @param {int} x - 
   * @param {int} y - 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getPixel(x, y) {
    throw new NotImplementedException("ByteProcessor.getPixel(..)");
  };

  /**
   * This is a faster version of getPixel() that does not do bounds checking.
   * 
   * @param {int} x - 
   * @param {int} y - 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  get(x, y) {
    throw new NotImplementedException("ByteProcessor.get(..)");
  };

  /**
   * This is a faster version of putPixel() that does not clip
 * out of range values and does not do bounds checking.
   * 
   * @param {int} x - 
   * @param {int} y - 
   * @param {int} value - 
   * 
   * @author Created by ijdoc2js
   */
  set(x, y, value) {
    throw new NotImplementedException("ByteProcessor.set(..)");
  };

  /**
   * 
   * @param {int} index - 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  get(index) {
    throw new NotImplementedException("ByteProcessor.get(..)");
  };

  /**
   * 
   * @param {int} index - 
   * @param {int} value - 
   * 
   * @author Created by ijdoc2js
   */
  set(index, value) {
    throw new NotImplementedException("ByteProcessor.set(..)");
  };

  /**
   * Returns the value of the pixel at (x,y) as a float. Faster
 * than getPixelValue() because no bounds checking is done.
   * 
   * @param {int} x - 
   * @param {int} y - 
   * @return float
   * 
   * @author Created by ijdoc2js
   */
  getf(x, y) {
    throw new NotImplementedException("ByteProcessor.getf(..)");
  };

  /**
   * Sets the value of the pixel at (x,y) to 'value'. Does no bounds
 * checking or clamping, making it faster than putPixel(). Due to the lack
 * of bounds checking, (x,y) coordinates outside the image may cause
 * an exception. Due to the lack of clamping, values outside the 0-255
 * range (for byte) or 0-65535 range (for short) are not handled correctly.
   * 
   * @param {int} x - 
   * @param {int} y - 
   * @param {float} value - 
   * 
   * @author Created by ijdoc2js
   */
  setf(x, y, value) {
    throw new NotImplementedException("ByteProcessor.setf(..)");
  };

  /**
   * 
   * @param {int} index - 
   * @return float
   * 
   * @author Created by ijdoc2js
   */
  getf(index) {
    throw new NotImplementedException("ByteProcessor.getf(..)");
  };

  /**
   * 
   * @param {int} index - 
   * @param {float} value - 
   * 
   * @author Created by ijdoc2js
   */
  setf(index, value) {
    throw new NotImplementedException("ByteProcessor.setf(..)");
  };

  /**
   * Uses the current interpolation method (BILINEAR or BICUBIC) 
 * to calculate the pixel value at real coordinates (x,y).
   * 
   * @param {double} x - 
   * @param {double} y - 
   * @return double
   * 
   * @author Created by ijdoc2js
   */
  getInterpolatedPixel(x, y) {
    throw new NotImplementedException("ByteProcessor.getInterpolatedPixel(..)");
  };

  /**
   * Uses the current interpolation method to find the pixel value at real coordinates (x,y).
 * For RGB images, the argb values are packed in an int. For float images,
 * the value must be converted using Float.intBitsToFloat(). Returns zero
 * if the (x, y) is not inside the image.
   * 
   * @param {double} x - 
   * @param {double} y - 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getPixelInterpolated(x, y) {
    throw new NotImplementedException("ByteProcessor.getPixelInterpolated(..)");
  };

  /**
   * Returns the value of the pixel at (x,y). For byte and short
 * images, returns a calibrated value if a calibration table
 * has been set using setCalibraionTable(). For RGB images,
 * returns the luminance value.
   * 
   * @param {int} x - 
   * @param {int} y - 
   * @return float
   * 
   * @author Created by ijdoc2js
   */
  getPixelValue(x, y) {
    throw new NotImplementedException("ByteProcessor.getPixelValue(..)");
  };

  /**
   * Sets the foreground drawing color.
   * 
   * @param {java.awt.Color} color - 
   * 
   * @author Created by ijdoc2js
   */
  setColor(color) {
    throw new NotImplementedException("ByteProcessor.setColor(..)");
  };

  /**
   * 
   * @param {double} value - 
   * 
   * @author Created by ijdoc2js
   */
  setValue(value) {
    throw new NotImplementedException("ByteProcessor.setValue(..)");
  };

  /**
   * Sets the background fill value, where 0
   * 
   * @param {double} value - 
   * 
   * @author Created by ijdoc2js
   */
  setBackgroundValue(value) {
    throw new NotImplementedException("ByteProcessor.setBackgroundValue(..)");
  };

  /**
   * Returns the background fill value.
   * 
   * @return double
   * 
   * @author Created by ijdoc2js
   */
  getBackgroundValue() {
    throw new NotImplementedException("ByteProcessor.getBackgroundValue(..)");
  };

  /**
   * Stores the specified real value at (x,y). Does
 * nothing if (x,y) is outside the image boundary.
 * Values outside the range 0-255 are clamped.
   * 
   * @param {int} x - 
   * @param {int} y - 
   * @param {double} value - 
   * 
   * @author Created by ijdoc2js
   */
  putPixelValue(x, y, value) {
    throw new NotImplementedException("ByteProcessor.putPixelValue(..)");
  };

  /**
   * Stores the specified value at (x,y). Does
 * nothing if (x,y) is outside the image boundary.
 * Values outside the range 0-255 are clamped.
   * 
   * @param {int} x - 
   * @param {int} y - 
   * @param {int} value - 
   * 
   * @author Created by ijdoc2js
   */
  putPixel(x, y, value) {
    throw new NotImplementedException("ByteProcessor.putPixel(..)");
  };

  /**
   * Draws a pixel in the current foreground color.
   * 
   * @param {int} x - 
   * @param {int} y - 
   * 
   * @author Created by ijdoc2js
   */
  drawPixel(x, y) {
    throw new NotImplementedException("ByteProcessor.drawPixel(..)");
  };

  /**
   * Returns a reference to the byte array containing this image's
 * pixel data. To avoid sign extension, the pixel values must be
 * accessed using a mask (e.g. int i = pixels[j]&amp;0xff).
   * 
   * @return java.lang.Object
   * 
   * @author Created by ijdoc2js
   */
  getPixels() {
    throw new NotImplementedException("ByteProcessor.getPixels(..)");
  };

  /**
   * Returns a copy of the pixel data. Or returns a reference to the
 * snapshot buffer if it is not null and 'snapshotCopyMode' is true.
   * 
   * @return java.lang.Object
   * 
   * @author Created by ijdoc2js
   */
  getPixelsCopy() {
    throw new NotImplementedException("ByteProcessor.getPixelsCopy(..)");
  };

  /**
   * Sets a new pixel array for the image. The length of the array must be equal to width*height.
 * Use setSnapshotPixels(null) to clear the snapshot buffer.
   * 
   * @param {java.lang.Object} pixels - 
   * 
   * @author Created by ijdoc2js
   */
  setPixels(pixels) {
    throw new NotImplementedException("ByteProcessor.setPixels(..)");
  };

  /**
   * Returns the smallest displayed pixel value.
   * 
   * @return double
   * 
   * @author Created by ijdoc2js
   */
  getMin() {
    throw new NotImplementedException("ByteProcessor.getMin(..)");
  };

  /**
   * Returns the largest displayed pixel value.
   * 
   * @return double
   * 
   * @author Created by ijdoc2js
   */
  getMax() {
    throw new NotImplementedException("ByteProcessor.getMax(..)");
  };

  /**
   * Maps the entries in this image's LUT from min-max to 0-255.
   * 
   * @param {double} min - 
   * @param {double} max - 
   * 
   * @author Created by ijdoc2js
   */
  setMinAndMax(min, max) {
    throw new NotImplementedException("ByteProcessor.setMinAndMax(..)");
  };

  /**
   * Resets this image's LUT.
   * 
   * 
   * @author Created by ijdoc2js
   */
  resetMinAndMax() {
    throw new NotImplementedException("ByteProcessor.resetMinAndMax(..)");
  };

  /**
   * Sets the lower and upper threshold levels. The 'lutUpdate' argument
   * can be RED_LUT, BLACK_AND_WHITE_LUT, OVER_UNDER_LUT or NO_LUT_UPDATE.
   * Thresholding of RGB images is not supported.
   * 
   * @param {double} minThreshold - 
   * @param {double} maxThreshold - 
   * @param {int} lutUpdate - 
   * 
   * @author Created by ijdoc2js
   */
  setThreshold(minThreshold, maxThreshold, lutUpdate) {
    throw new NotImplementedException("ByteProcessor.setThreshold(..)");
  };

  /**
   * Copies the image contained in 'ip' to (xloc, yloc) using one of
 * the transfer modes defined in the Blitter interface.
   * 
   * @param {ImageProcessor} ip - 
   * @param {int} xloc - 
   * @param {int} yloc - 
   * @param {int} mode - 
   * 
   * @author Created by ijdoc2js
   */
  copyBits(ip, xloc, yloc, mode) {
    throw new NotImplementedException("ByteProcessor.copyBits(..)");
  };

  /**
   * Transforms the image or ROI using a lookup table. The
 * length of the table must be 256 for byte images and
 * 65536 for short images. RGB and float images are not
 * supported.
   * 
   * @param {int[]} lut - 
   * 
   * @author Created by ijdoc2js
   */
  applyTable(lut) {
    throw new NotImplementedException("ByteProcessor.applyTable(..)");
  };

  /**
   * Convolves the image or ROI with the specified
 * 3x3 integer convolution kernel.
   * 
   * @param {int[]} kernel - 
   * 
   * @author Created by ijdoc2js
   */
  convolve3x3(kernel) {
    throw new NotImplementedException("ByteProcessor.convolve3x3(..)");
  };

  /**
   * Filters using a 3x3 neighborhood. The p1, p2, etc variables, which
 * contain the values of the pixels in the neighborhood, are arranged
 * as follows:
 * <pre> p1 p2 p3
 * p4 p5 p6
 * p7 p8 p9
 * </pre>
   * 
   * @param {int} type - 
   * 
   * @author Created by ijdoc2js
   */
  filter(type) {
    throw new NotImplementedException("ByteProcessor.filter(..)");
  };

  /**
   * Erodes the image or ROI using a 3x3 maximum filter. Requires 8-bit or RGB image.
   * 
   * 
   * @author Created by ijdoc2js
   */
  erode() {
    throw new NotImplementedException("ByteProcessor.erode(..)");
  };

  /**
   * Dilates the image or ROI using a 3x3 minimum filter. Requires 8-bit or RGB image.
   * 
   * 
   * @author Created by ijdoc2js
   */
  dilate() {
    throw new NotImplementedException("ByteProcessor.dilate(..)");
  };

  /**
   * 
   * @param {int} count - 
   * @param {int} background - 
   * 
   * @author Created by ijdoc2js
   */
  erode(count, background) {
    throw new NotImplementedException("ByteProcessor.erode(..)");
  };

  /**
   * 
   * @param {int} count - 
   * @param {int} background - 
   * 
   * @author Created by ijdoc2js
   */
  dilate(count, background) {
    throw new NotImplementedException("ByteProcessor.dilate(..)");
  };

  /**
   * 
   * 
   * @author Created by ijdoc2js
   */
  outline() {
    throw new NotImplementedException("ByteProcessor.outline(..)");
  };

  /**
   * 
   * 
   * @author Created by ijdoc2js
   */
  skeletonize() {
    throw new NotImplementedException("ByteProcessor.skeletonize(..)");
  };

  /**
   * A 3x3 median filter. Requires 8-bit or RGB image.
   * 
   * 
   * @author Created by ijdoc2js
   */
  medianFilter() {
    throw new NotImplementedException("ByteProcessor.medianFilter(..)");
  };

  /**
   * Adds pseudorandom, Gaussian ("normally") distributed values, with
 * mean 0.0 and the specified standard deviation, to this image or ROI.
   * 
   * @param {double} standardDeviation - 
   * 
   * @author Created by ijdoc2js
   */
  noise(standardDeviation) {
    throw new NotImplementedException("ByteProcessor.noise(..)");
  };

  /**
   * Scales the image or selection using the specified scale factors.
   * 
   * @param {double} xScale - 
   * @param {double} yScale - 
   * 
   * @author Created by ijdoc2js
   */
  scale(xScale, yScale) {
    throw new NotImplementedException("ByteProcessor.scale(..)");
  };

  /**
   * Creates a new ByteProcessor containing a scaled copy of this image or selection.
   * 
   * @param {int} dstWidth - 
   * @param {int} dstHeight - 
   * @return ImageProcessor
   * 
   * @author Created by ijdoc2js
   */
  resize(dstWidth, dstHeight) {
    throw new NotImplementedException("ByteProcessor.resize(..)");
  };

  /**
   * Rotates the image or ROI 'angle' degrees clockwise.
   * 
   * @param {double} angle - 
   * 
   * @author Created by ijdoc2js
   */
  rotate(angle) {
    throw new NotImplementedException("ByteProcessor.rotate(..)");
  };

  /**
   * Flips the image or ROI vertically.
   * 
   * 
   * @author Created by ijdoc2js
   */
  flipVertical() {
    throw new NotImplementedException("ByteProcessor.flipVertical(..)");
  };

  /**
   * Returns the histogram of the image or ROI. Returns
   * a luminosity histogram for RGB images and null
   * for float images.
   * <p>
   * For 8-bit and 16-bit images, returns an array with one entry for each possible
   * value that a pixel can have, from 0 to 255 (8-bit image) or 0-65535 (16-bit image).
   * Thus, the array size is 256 or 65536, and the bin width in uncalibrated units is 1.
   * </p><p>
   * For RGB images, the brightness is evaluated using the color weights (which would result in a
   * float value) and rounded to an int. This gives 256 bins. FloatProcessor.getHistogram is not
   * implemented (returns null).</p>
   * 
   * @return int[]
   * 
   * @author Created by ijdoc2js
   */
  getHistogram() {
    throw new NotImplementedException("ByteProcessor.getHistogram(..)");
  };

  /**
   * 
   * @param {ImageProcessor} mask - 
   * @return int[]
   * 
   * @author Created by ijdoc2js
   */
  getHistogram(mask) {
    throw new NotImplementedException("ByteProcessor.getHistogram(..)");
  };

  /**
   * Sets pixels less than or equal to level to 0 and all other pixels to 255.
   * 
   * @param {int} level - 
   * 
   * @author Created by ijdoc2js
   */
  threshold(level) {
    throw new NotImplementedException("ByteProcessor.threshold(..)");
  };

  /**
   * 
   * 
   * @author Created by ijdoc2js
   */
  applyLut() {
    throw new NotImplementedException("ByteProcessor.applyLut(..)");
  };

  /**
   * Performs a convolution operation using the specified kernel.
   * 
   * @param {float[]} kernel - 
   * @param {int} kernelWidth - 
   * @param {int} kernelHeight - 
   * 
   * @author Created by ijdoc2js
   */
  convolve(kernel, kernelWidth, kernelHeight) {
    throw new NotImplementedException("ByteProcessor.convolve(..)");
  };

  /**
   * 
   * @return FloatProcessor[]
   * 
   * @author Created by ijdoc2js
   */
  toFloatProcessors() {
    throw new NotImplementedException("ByteProcessor.toFloatProcessors(..)");
  };

  /**
   * 
   * @param {FloatProcessor[]} fp - 
   * 
   * @author Created by ijdoc2js
   */
  setFromFloatProcessors(fp) {
    throw new NotImplementedException("ByteProcessor.setFromFloatProcessors(..)");
  };

  /**
   * 
   * @return float[][]
   * 
   * @author Created by ijdoc2js
   */
  toFloatArrays() {
    throw new NotImplementedException("ByteProcessor.toFloatArrays(..)");
  };

  /**
   * 
   * @param {float[][]} arrays - 
   * 
   * @author Created by ijdoc2js
   */
  setFromFloatArrays(arrays) {
    throw new NotImplementedException("ByteProcessor.setFromFloatArrays(..)");
  };

  /**
   * Returns a FloatProcessor with the same image, no scaling or calibration
 * (pixel values 0 to 255).
 * The roi, mask, lut (ColorModel), threshold, min&amp;max are
 * also set for the FloatProcessor
   * 
   * @param {int} channelNumber - 
   * @param {FloatProcessor} fp - 
   * @return FloatProcessor
   * 
   * @author Created by ijdoc2js
   */
  toFloat(channelNumber, fp) {
    throw new NotImplementedException("ByteProcessor.toFloat(..)");
  };

  /**
   * Sets the pixels from a FloatProcessor, no scaling.
 * Also the min&amp;max values are taken from the FloatProcessor.
   * 
   * @param {int} channelNumber - 
   * @param {FloatProcessor} fp - 
   * 
   * @author Created by ijdoc2js
   */
  setPixels(channelNumber, fp) {
    throw new NotImplementedException("ByteProcessor.setPixels(..)");
  };

  /**
   * Returns 'true' if this is a binary image (8-bit-image with only 0 and 255).
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  isBinary() {
    throw new NotImplementedException("ByteProcessor.isBinary(..)");
  };

  /**
   * Returns the bit depth, 8, 16, 24 (RGB) or 32. RGB images actually use 32 bits per pixel.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getBitDepth() {
    throw new NotImplementedException("ByteProcessor.getBitDepth(..)");
  };

  /**
   * Returns a binary mask, or null if a threshold is not set.
   * 
   * @return ByteProcessor
   * 
   * @author Created by ijdoc2js
   */
  createMask() {
    throw new NotImplementedException("ByteProcessor.createMask(..)");
  };

} // End of class ByteProcessor

