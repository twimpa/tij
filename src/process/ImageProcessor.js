/*
 *  tij: Tiny ImageJ API in JavaScript
 *  Copyright (C) 2017  Jean-Christophe Taveau.
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
 * public abstract class ImageProcessor
 * extends java.lang.Object
 * implements java.lang.Cloneable
 *
 * This abstract class is the superclass for classes that process
 *  * the four data types (byte, short, float and RGB) supported by ImageJ.
 *  * An ImageProcessor contains the pixel data of a 2D image and
 *  * some basic methods to manipulate it.
*/

export class ImageProcessor {
  /**
   * @constructor
   * 
   * 
   * @author Created by ijdoc2js
   */
  constructor () {
    throw "Not Implemented - ImageProcessor.ImageProcessor(..)";
  };

  /**
   * Value of pixels included in masks.
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get BLACK() {
    return 0;
  }

  /**
   * Value returned by getMinThreshold() when thresholding is not enabled.
   * 
   * @const {double}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get NO_THRESHOLD() {
    return 0;
  }

  /**
   * Left justify text.
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static getLEFT_JUSTIFY() {
    return 0;
  }

  /**
   * Center justify text.
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get CENTER_JUSTIFY() {
    return 0;
  }

  /**
   * Right justify text.
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get RIGHT_JUSTIFY() {
    return 0;
  }

  /**
   * Isodata thresholding method
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get ISODATA() {
    return 0;
  }

  /**
   * Modified isodata method used in Image/Adjust/Threshold tool
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get ISODATA2() {
    return 0;
  }

  /**
   * Interpolation methods
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get NEAREST_NEIGHBOR() {
    return 0;
  }

  /**
   * Interpolation methods
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get NONE() {
    return 0;
  }

  /**
   * Interpolation methods
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get BILINEAR() {
    return 0;
  }

  /**
   * Interpolation methods
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get BICUBIC() {
    return 0;
  }

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get BLUR_MORE() {
    return 0;
  }

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get FIND_EDGES() {
    return 0;
  }

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get MEDIAN_FILTER() {
    return 0;
  }

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get MIN() {
    return 0;
  }

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get MAX() {
    return 0;
  }

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get CONVOLVE() {
    return 0;
  }

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get RED_LUT() {
    return 0;
  }

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get BLACK_AND_WHITE_LUT() {
    return 0;
  }

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get NO_LUT_UPDATE() {
    return 0;
  }

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get OVER_UNDER_LUT() {
    return 0;
  }

  /**
   * Returns the width of this image in pixels.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getWidth() {
    throw "Not Implemented - ImageProcessor.getWidth(..)";
  };

  /**
   * Returns the height of this image in pixels.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getHeight() {
    throw "Not Implemented - ImageProcessor.getHeight(..)";
  };

  /**
   * Returns the bit depth, 8, 16, 24 (RGB) or 32. RGB images actually use 32 bits per pixel.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getBitDepth() {
    throw "Not Implemented - ImageProcessor.getBitDepth(..)";
  };

  /**
   * Returns this processor's color model. For non-RGB processors,
 * this is the base lookup table (LUT), not the one that may have
 * been modified by setMinAndMax() or setThreshold().
   * 
   * @return java.awt.image.ColorModel
   * 
   * @author Created by ijdoc2js
   */
  getColorModel() {
    throw "Not Implemented - ImageProcessor.getColorModel(..)";
  };

  /**
   * Returns the current color model, which may have
 * been modified by setMinAndMax() or setThreshold().
   * 
   * @return java.awt.image.ColorModel
   * 
   * @author Created by ijdoc2js
   */
  getCurrentColorModel() {
    throw "Not Implemented - ImageProcessor.getCurrentColorModel(..)";
  };

  /**
   * Sets the color model. Must be an IndexColorModel (aka LUT)
 * for all processors except the ColorProcessor.
   * 
   * @param {java.awt.image.ColorModel} cm - 
   * 
   * @author Created by ijdoc2js
   */
  setColorModel(cm) {
    throw "Not Implemented - ImageProcessor.setColorModel(..)";
  };

  /**
   * 
   * @return LUT
   * 
   * @author Created by ijdoc2js
   */
  getLut() {
    throw "Not Implemented - ImageProcessor.getLut(..)";
  };

  /**
   * 
   * @param {LUT} lut - 
   * 
   * @author Created by ijdoc2js
   */
  setLut(lut) {
    throw "Not Implemented - ImageProcessor.setLut(..)";
  };

  /**
   * Inverts the values in this image's LUT (indexed color model).
 * Does nothing if this is a ColorProcessor.
   * 
   * 
   * @author Created by ijdoc2js
   */
  invertLut() {
    throw "Not Implemented - ImageProcessor.invertLut(..)";
  };

  /**
   * Returns the LUT index that's the best match for this color.
   * 
   * @param {java.awt.Color} c - 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getBestIndex(c) {
    throw "Not Implemented - ImageProcessor.getBestIndex(..)";
  };

  /**
   * Returns true if this image uses an inverting LUT
 * that displays zero as white and 255 as black.
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  isInvertedLut() {
    throw "Not Implemented - ImageProcessor.isInvertedLut(..)";
  };

  /**
   * Returns 'true' if this is an image with a grayscale LUT or an
 * RGB image with identical red, green and blue channels.
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  isGrayscale() {
    throw "Not Implemented - ImageProcessor.isGrayscale(..)";
  };

  /**
   * Returns true if this image uses a color LUT.
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  isColorLut() {
    throw "Not Implemented - ImageProcessor.isColorLut(..)";
  };

  /**
   * Returns true if this image uses a pseudocolor or grayscale LUT,
 * in other words, is this an image that can be filtered.
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  isPseudoColorLut() {
    throw "Not Implemented - ImageProcessor.isPseudoColorLut(..)";
  };

  /**
   * Returns true if the image is using the default grayscale LUT.
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  isDefaultLut() {
    throw "Not Implemented - ImageProcessor.isDefaultLut(..)";
  };

  /**
   * Sets the default fill/draw value to the pixel
 * value closest to the specified color.
   * 
   * @param {java.awt.Color} color - 
   * 
   * @author Created by ijdoc2js
   */
  setColor(color) {
    throw "Not Implemented - ImageProcessor.setColor(..)";
  };

  /**
   * Sets the default fill/draw value.
   * 
   * @param {int} value - 
   * 
   * @author Created by ijdoc2js
   */
  setColor(value) {
    throw "Not Implemented - ImageProcessor.setColor(..)";
  };

  /**
   * Sets the default fill/draw value.
   * 
   * @param {double} value - 
   * 
   * @author Created by ijdoc2js
   */
  setColor(value) {
    throw "Not Implemented - ImageProcessor.setColor(..)";
  };

  /**
   * Sets the default fill/draw value.
   * 
   * @param {double} value - 
   * 
   * @author Created by ijdoc2js
   */
  setValue(value) {
    throw "Not Implemented - ImageProcessor.setValue(..)";
  };

  /**
   * Returns 'true' if the fill/draw value has been set.
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  fillValueSet() {
    throw "Not Implemented - ImageProcessor.fillValueSet(..)";
  };

  /**
   * Sets the background fill value used by the rotate() and scale() methods.
   * 
   * @param {double} value - 
   * 
   * @author Created by ijdoc2js
   */
  setBackgroundValue(value) {
    throw "Not Implemented - ImageProcessor.setBackgroundValue(..)";
  };

  /**
   * Returns the background fill value.
   * 
   * @return double
   * 
   * @author Created by ijdoc2js
   */
  getBackgroundValue() {
    throw "Not Implemented - ImageProcessor.getBackgroundValue(..)";
  };

  /**
   * Returns the smallest displayed pixel value.
   * 
   * @return double
   * 
   * @author Created by ijdoc2js
   */
  getMin() {
    throw "Not Implemented - ImageProcessor.getMin(..)";
  };

  /**
   * Returns the largest displayed pixel value.
   * 
   * @return double
   * 
   * @author Created by ijdoc2js
   */
  getMax() {
    throw "Not Implemented - ImageProcessor.getMax(..)";
  };

  /**
   * This image will be displayed by mapping pixel values in the
 * range min-max to screen values in the range 0-255. For
 * byte images, this mapping is done by updating the LUT. For
 * short and float images, it's done by generating 8-bit AWT
 * images. For RGB images, it's done by changing the pixel values.
 * With signed 16-bit images, use IJ.setMinAndMax(imp,min,max).
   * 
   * @param {double} min - 
   * @param {double} max - 
   * 
   * @author Created by ijdoc2js
   */
  setMinAndMax(min, max) {
    throw "Not Implemented - ImageProcessor.setMinAndMax(..)";
  };

  /**
   * For short and float images, recalculates the min and max
 * image values needed to correctly display the image. For
 * ByteProcessors, resets the LUT.
   * 
   * 
   * @author Created by ijdoc2js
   */
  resetMinAndMax() {
    throw "Not Implemented - ImageProcessor.resetMinAndMax(..)";
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
    throw "Not Implemented - ImageProcessor.setThreshold(..)";
  };

  /**
   * Automatically sets the lower and upper threshold levels, where 'method'
 * must be "Default", "Huang", "Intermodes", "IsoData", "IJ_IsoData", "Li",
 * "MaxEntropy", "Mean", "MinError", "Minimum", "Moments", "Otsu",
 * "Percentile", "RenyiEntropy", "Shanbhag", "Triangle" or "Yen". The
 * 'method' string may also include the keywords 'dark' (dark background)
 * 'red' (red LUT, the default), 'b&amp;w' (black and white LUT), 'over/under' (over/under LUT) or
 * 'no-lut' (no LUT changes), for example "Huang dark b&amp;w". The display range
 * of 16-bit and 32-bit images is not reset if the 'method' string contains 'no-reset'.
   * 
   * @param {java.lang.String} method - 
   * 
   * @author Created by ijdoc2js
   */
  setAutoThreshold(method) {
    throw "Not Implemented - ImageProcessor.setAutoThreshold(..)";
  };

  /**
   * 
   * @param {java.lang.String} mString - 
   * @param {boolean} darkBackground - 
   * @param {int} lutUpdate - 
   * 
   * @author Created by ijdoc2js
   */
  setAutoThreshold(mString, darkBackground, lutUpdate) {
    throw "Not Implemented - ImageProcessor.setAutoThreshold(..)";
  };

  /**
   * 
   * @param {AutoThresholder.Method} method - 
   * @param {boolean} darkBackground - 
   * 
   * @author Created by ijdoc2js
   */
  setAutoThreshold(method, darkBackground) {
    throw "Not Implemented - ImageProcessor.setAutoThreshold(..)";
  };

  /**
   * 
   * @param {AutoThresholder.Method} method - 
   * @param {boolean} darkBackground - 
   * @param {int} lutUpdate - 
   * 
   * @author Created by ijdoc2js
   */
  setAutoThreshold(method, darkBackground, lutUpdate) {
    throw "Not Implemented - ImageProcessor.setAutoThreshold(..)";
  };

  /**
   * Automatically sets the lower and upper threshold levels, where 'method'
 * must be ISODATA or ISODATA2 and 'lutUpdate' must be RED_LUT,
 * BLACK_AND_WHITE_LUT, OVER_UNDER_LUT or NO_LUT_UPDATE.
   * 
   * @param {int} method - 
   * @param {int} lutUpdate - 
   * 
   * @author Created by ijdoc2js
   */
  setAutoThreshold(method, lutUpdate) {
    throw "Not Implemented - ImageProcessor.setAutoThreshold(..)";
  };

  /**
   * Set the threshold using a 0-255 range. For 16-bit and 32-bit images,
 * this range is taken as relative with respect to the range between the
 * current display min and max, but lower=0 and upper=255 are set to the
 * full-range limits of 16-bit images and -/+1e30 for float images.
   * 
   * @param {double} lower - 
   * @param {double} upper - 
   * @param {int} lutUpdate - 
   * 
   * @author Created by ijdoc2js
   */
  scaleAndSetThreshold(lower, upper, lutUpdate) {
    throw "Not Implemented - ImageProcessor.scaleAndSetThreshold(..)";
  };

  /**
   * Disables thresholding.
   * 
   * 
   * @author Created by ijdoc2js
   */
  resetThreshold() {
    throw "Not Implemented - ImageProcessor.resetThreshold(..)";
  };

  /**
   * Returns the lower threshold level. Returns NO_THRESHOLD
 * if thresholding is not enabled.
   * 
   * @return double
   * 
   * @author Created by ijdoc2js
   */
  getMinThreshold() {
    throw "Not Implemented - ImageProcessor.getMinThreshold(..)";
  };

  /**
   * Returns the upper threshold level.
   * 
   * @return double
   * 
   * @author Created by ijdoc2js
   */
  getMaxThreshold() {
    throw "Not Implemented - ImageProcessor.getMaxThreshold(..)";
  };

  /**
   * Returns the LUT update mode, which can be RED_LUT, BLACK_AND_WHITE_LUT,
 * OVER_UNDER_LUT or NO_LUT_UPDATE.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getLutUpdateMode() {
    throw "Not Implemented - ImageProcessor.getLutUpdateMode(..)";
  };

  /**
   * 
   * 
   * @author Created by ijdoc2js
   */
  setBinaryThreshold() {
    throw "Not Implemented - ImageProcessor.setBinaryThreshold(..)";
  };

  /**
   * Resets the threshold if minThreshold=maxThreshold and lutUpdateMode=NO_LUT_UPDATE.
 * This removes the invisible threshold set by the MakeBinary and Convert to Mask commands.
   * 
   * 
   * @author Created by ijdoc2js
   */
  resetBinaryThreshold() {
    throw "Not Implemented - ImageProcessor.resetBinaryThreshold(..)";
  };

  /**
   * Defines a rectangular region of interest and sets the mask
 * to null if this ROI is not the same size as the previous one.
   * 
   * @param {java.awt.Rectangle} roi - 
   * 
   * @author Created by ijdoc2js
   */
  setRoi(roi) {
    throw "Not Implemented - ImageProcessor.setRoi(..)";
  };

  /**
   * Defines a rectangular region of interest and sets the mask to
 * null if this ROI is not the same size as the previous one.
   * 
   * @param {int} x - 
   * @param {int} y - 
   * @param {int} rwidth - 
   * @param {int} rheight - 
   * 
   * @author Created by ijdoc2js
   */
  setRoi(x, y, rwidth, rheight) {
    throw "Not Implemented - ImageProcessor.setRoi(..)";
  };

  /**
   * Defines a non-rectangular region of interest that will consist of a
 * rectangular ROI and a mask. After processing, call <code>reset(mask)</code>
 * to restore non-masked pixels. Here is an example:
 * <pre> ip.setRoi(new OvalRoi(50, 50, 100, 50));
 * ip.fill();
 * ip.reset(ip.getMask());
 * </pre>
 * The example assumes <code>snapshot()</code> has been called, which is the case
 * for code executed in the <code>run()</code> method of plugins that implement the
 * <code>PlugInFilter</code> interface.
   * 
   * @param {Roi} roi - 
   * 
   * @author Created by ijdoc2js
   */
  setRoi(roi) {
    throw "Not Implemented - ImageProcessor.setRoi(..)";
  };

  /**
   * Defines a polygonal region of interest that will consist of a
 * rectangular ROI and a mask. After processing, call <code>reset(mask)</code>
 * to restore non-masked pixels. Here is an example:
 * <pre> Polygon p = new Polygon();
 * p.addPoint(50, 0); p.addPoint(100, 100); p.addPoint(0, 100);
 * ip.setRoi(triangle);
 * ip.invert();
 * ip.reset(ip.getMask());
 * </pre>
 * The example assumes <code>snapshot()</code> has been called, which is the case
 * for code executed in the <code>run()</code> method of plugins that implement the
 * <code>PlugInFilter</code> interface.
   * 
   * @param {java.awt.Polygon} roi - 
   * 
   * @author Created by ijdoc2js
   */
  setRoi(roi) {
    throw "Not Implemented - ImageProcessor.setRoi(..)";
  };

  /**
   * Sets the ROI (Region of Interest) and clipping rectangle to the entire image.
   * 
   * 
   * @author Created by ijdoc2js
   */
  resetRoi() {
    throw "Not Implemented - ImageProcessor.resetRoi(..)";
  };

  /**
   * Returns a Rectangle that represents the current
 * region of interest.
   * 
   * @return java.awt.Rectangle
   * 
   * @author Created by ijdoc2js
   */
  getRoi() {
    throw "Not Implemented - ImageProcessor.getRoi(..)";
  };

  /**
   * Defines a byte mask that limits processing to an
 * irregular ROI. Background pixels in the mask have
 * a value of zero.
   * 
   * @param {ImageProcessor} mask - 
   * 
   * @author Created by ijdoc2js
   */
  setMask(mask) {
    throw "Not Implemented - ImageProcessor.setMask(..)";
  };

  /**
   * For images with irregular ROIs, returns a mask, otherwise,
 * returns null. Pixels outside the mask have a value of zero.
   * 
   * @return ImageProcessor
   * 
   * @author Created by ijdoc2js
   */
  getMask() {
    throw "Not Implemented - ImageProcessor.getMask(..)";
  };

  /**
   * Returns a reference to the mask pixel array, or null if there is no mask.
   * 
   * @return byte[]
   * 
   * @author Created by ijdoc2js
   */
  getMaskArray() {
    throw "Not Implemented - ImageProcessor.getMaskArray(..)";
  };

  /**
   * Assigns a progress bar to this processor. Set 'pb' to
 * null to disable the progress bar.
   * 
   * @param {ProgressBar} pb - 
   * 
   * @author Created by ijdoc2js
   */
  setProgressBar(pb) {
    throw "Not Implemented - ImageProcessor.setProgressBar(..)";
  };

  /**
   * This method has been replaced by setInterpolationMethod().
   * 
   * @param {boolean} interpolate - 
   * 
   * @author Created by ijdoc2js
   */
  setInterpolate(interpolate) {
    throw "Not Implemented - ImageProcessor.setInterpolate(..)";
  };

  /**
   * Use this method to set the interpolation method (NONE,
 * BILINEAR or BICUBIC) used by scale(), resize() and rotate().
   * 
   * @param {int} method - 
   * 
   * @author Created by ijdoc2js
   */
  setInterpolationMethod(method) {
    throw "Not Implemented - ImageProcessor.setInterpolationMethod(..)";
  };

  /**
   * Returns the current interpolation method (NONE, BILINEAR or BICUBIC).
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getInterpolationMethod() {
    throw "Not Implemented - ImageProcessor.getInterpolationMethod(..)";
  };

  /**
   * 
   * @return java.lang.String[]
   * 
   * @author Created by ijdoc2js
   */
  getInterpolationMethods() {
    throw "Not Implemented - ImageProcessor.getInterpolationMethods(..)";
  };

  /**
   * Returns the value of the interpolate field.
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  getInterpolate() {
    throw "Not Implemented - ImageProcessor.getInterpolate(..)";
  };

  /**
   * <span class="deprecatedLabel">Deprecated.</span>&nbsp;
   * 
   * @deprecated .</span>&nbsp;
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  isKillable() {
    throw "Not Implemented - ImageProcessor.isKillable(..)";
  };

  /**
   * Returns an array containing the pixel values along the
 * line starting at (x1,y1) and ending at (x2,y2). Pixel
 * values are sampled using getInterpolatedValue(double,double)
 * if interpolatiion is enabled or getPixelValue(int,int) if it is not.
 * For byte and short images, returns calibrated values if a
 * calibration table has been set using setCalibrationTable().
 * The length of the returned array, minus one, is approximately
 * equal to the length of the line.
   * 
   * @param {double} x1 - 
   * @param {double} y1 - 
   * @param {double} x2 - 
   * @param {double} y2 - 
   * @return double[]
   * 
   * @author Created by ijdoc2js
   */
  getLine(x1, y1, x2, y2) {
    throw "Not Implemented - ImageProcessor.getLine(..)";
  };

  /**
   * Returns the pixel values along the horizontal line starting at (x,y).
   * 
   * @param {int} x - 
   * @param {int} y - 
   * @param {int[]} data - 
   * @param {int} length - 
   * 
   * @author Created by ijdoc2js
   */
  getRow(x, y, data, length) {
    throw "Not Implemented - ImageProcessor.getRow(..)";
  };

  /**
   * Returns the pixel values along the horizontal line starting at (x,y).
   * 
   * @param {int} x - 
   * @param {int} y - 
   * @param {float[]} data - 
   * @param {int} length - 
   * @return float[]
   * 
   * @author Created by ijdoc2js
   */
  getRow(x, y, data, length) {
    throw "Not Implemented - ImageProcessor.getRow(..)";
  };

  /**
   * Returns the pixel values down the column starting at (x,y).
   * 
   * @param {int} x - 
   * @param {int} y - 
   * @param {int[]} data - 
   * @param {int} length - 
   * 
   * @author Created by ijdoc2js
   */
  getColumn(x, y, data, length) {
    throw "Not Implemented - ImageProcessor.getColumn(..)";
  };

  /**
   * Inserts the pixels contained in 'data' into a
 * horizontal line starting at (x,y).
   * 
   * @param {int} x - 
   * @param {int} y - 
   * @param {int[]} data - 
   * @param {int} length - 
   * 
   * @author Created by ijdoc2js
   */
  putRow(x, y, data, length) {
    throw "Not Implemented - ImageProcessor.putRow(..)";
  };

  /**
   * Inserts the pixels contained in 'data' into a
 * horizontal line starting at (x,y).
   * 
   * @param {int} x - 
   * @param {int} y - 
   * @param {float[]} data - 
   * @param {int} length - 
   * 
   * @author Created by ijdoc2js
   */
  putRow(x, y, data, length) {
    throw "Not Implemented - ImageProcessor.putRow(..)";
  };

  /**
   * Inserts the pixels contained in 'data' into a
 * column starting at (x,y).
   * 
   * @param {int} x - 
   * @param {int} y - 
   * @param {int[]} data - 
   * @param {int} length - 
   * 
   * @author Created by ijdoc2js
   */
  putColumn(x, y, data, length) {
    throw "Not Implemented - ImageProcessor.putColumn(..)";
  };

  /**
   * Sets the current drawing location.
   * 
   * @param {int} x - 
   * @param {int} y - 
   * 
   * @author Created by ijdoc2js
   */
  moveTo(x, y) {
    throw "Not Implemented - ImageProcessor.moveTo(..)";
  };

  /**
   * Sets the line width used by lineTo() and drawDot().
   * 
   * @param {int} width - 
   * 
   * @author Created by ijdoc2js
   */
  setLineWidth(width) {
    throw "Not Implemented - ImageProcessor.setLineWidth(..)";
  };

  /**
   * Returns the current line width.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getLineWidth() {
    throw "Not Implemented - ImageProcessor.getLineWidth(..)";
  };

  /**
   * Draws a line from the current drawing location to (x2,y2).
   * 
   * @param {int} x2 - 
   * @param {int} y2 - 
   * 
   * @author Created by ijdoc2js
   */
  lineTo(x2, y2) {
    throw "Not Implemented - ImageProcessor.lineTo(..)";
  };

  /**
   * Draws a line from (x1,y1) to (x2,y2).
   * 
   * @param {int} x1 - 
   * @param {int} y1 - 
   * @param {int} x2 - 
   * @param {int} y2 - 
   * 
   * @author Created by ijdoc2js
   */
  drawLine(x1, y1, x2, y2) {
    throw "Not Implemented - ImageProcessor.drawLine(..)";
  };

  /**
   * 
   * @param {int} x1 - 
   * @param {int} y1 - 
   * @param {int} x2 - 
   * @param {int} y2 - 
   * 
   * @author Created by ijdoc2js
   */
  drawLine4(x1, y1, x2, y2) {
    throw "Not Implemented - ImageProcessor.drawLine4(..)";
  };

  /**
   * Draws a rectangle.
   * 
   * @param {int} x - 
   * @param {int} y - 
   * @param {int} width - 
   * @param {int} height - 
   * 
   * @author Created by ijdoc2js
   */
  drawRect(x, y, width, height) {
    throw "Not Implemented - ImageProcessor.drawRect(..)";
  };

  /**
   * Fills a rectangle.
   * 
   * @param {int} x - 
   * @param {int} y - 
   * @param {int} width - 
   * @param {int} height - 
   * 
   * @author Created by ijdoc2js
   */
  fillRect(x, y, width, height) {
    throw "Not Implemented - ImageProcessor.fillRect(..)";
  };

  /**
   * Draws an elliptical shape.
   * 
   * @param {int} x - 
   * @param {int} y - 
   * @param {int} width - 
   * @param {int} height - 
   * 
   * @author Created by ijdoc2js
   */
  drawOval(x, y, width, height) {
    throw "Not Implemented - ImageProcessor.drawOval(..)";
  };

  /**
   * Fills an elliptical shape.
   * 
   * @param {int} x - 
   * @param {int} y - 
   * @param {int} width - 
   * @param {int} height - 
   * 
   * @author Created by ijdoc2js
   */
  fillOval(x, y, width, height) {
    throw "Not Implemented - ImageProcessor.fillOval(..)";
  };

  /**
   * Draws a polygon.
   * 
   * @param {java.awt.Polygon} p - 
   * 
   * @author Created by ijdoc2js
   */
  drawPolygon(p) {
    throw "Not Implemented - ImageProcessor.drawPolygon(..)";
  };

  /**
   * Fills a polygon.
   * 
   * @param {java.awt.Polygon} p - 
   * 
   * @author Created by ijdoc2js
   */
  fillPolygon(p) {
    throw "Not Implemented - ImageProcessor.fillPolygon(..)";
  };

  /**
   * <span class="deprecatedLabel">Deprecated.</span>&nbsp;
   * 
   * @deprecated .</span>&nbsp;
   * @param {int} x - 
   * @param {int} y - 
   * 
   * @author Created by ijdoc2js
   */
  drawDot2(x, y) {
    throw "Not Implemented - ImageProcessor.drawDot2(..)";
  };

  /**
   * Draws a dot using the current line width and fill/draw value.
   * 
   * @param {int} xcenter - 
   * @param {int} ycenter - 
   * 
   * @author Created by ijdoc2js
   */
  drawDot(xcenter, ycenter) {
    throw "Not Implemented - ImageProcessor.drawDot(..)";
  };

  /**
   * Draws a string at the current drawing location using the current fill/draw value.
 * Draws multiple lines if the string contains newline characters.
 * The current x coordinate is the left/center/right end of the string for
 * left/center/right justification.
 * The current y coordinate determines the bottommost position of the string,
 * including the descent of the font (i.e., characters reaching below the baseline)
 * For multi-line strings, the y coordinate applies to the first line.
 * The y of the drawing position is incremented by the height of one text line,
 * i.e. points at the drawing position for the next text line
   * 
   * @param {java.lang.String} s - 
   * 
   * @author Created by ijdoc2js
   */
  drawString(s) {
    throw "Not Implemented - ImageProcessor.drawString(..)";
  };

  /**
   * Draws a string at the specified location using the current fill/draw value.
 * Draws multiple lines if the string contains newline characters.
 * The x coordinate is the left/center/right end of the string for left/center/right
 * justification.
 * The y coordinate determines the bottommost position of the string,
 * including the descent of the font (i.e., characters reaching below the baseline)
 * For multi-line strings, the y coordinate applies to the first line.
   * 
   * @param {java.lang.String} s - 
   * @param {int} x - 
   * @param {int} y - 
   * 
   * @author Created by ijdoc2js
   */
  drawString(s, x, y) {
    throw "Not Implemented - ImageProcessor.drawString(..)";
  };

  /**
   * Draws a string at the specified location with a filled background.
 * A JavaScript example is available at
 * http://imagej.nih.gov/ij/macros/js/DrawTextWithBackground.js
   * 
   * @param {java.lang.String} s - 
   * @param {int} x - 
   * @param {int} y - 
   * @param {java.awt.Color} background - 
   * 
   * @author Created by ijdoc2js
   */
  drawString(s, x, y, background) {
    throw "Not Implemented - ImageProcessor.drawString(..)";
  };

  /**
   * Sets the justification used by drawString(), where <code>justification</code>
 * is CENTER_JUSTIFY, RIGHT_JUSTIFY or LEFT_JUSTIFY. The default is LEFT_JUSTIFY.
   * 
   * @param {int} justification - 
   * 
   * @author Created by ijdoc2js
   */
  setJustification(justification) {
    throw "Not Implemented - ImageProcessor.setJustification(..)";
  };

  /**
   * Sets the font used by drawString().
   * 
   * @param {java.awt.Font} font - 
   * 
   * @author Created by ijdoc2js
   */
  setFont(font) {
    throw "Not Implemented - ImageProcessor.setFont(..)";
  };

  /**
   * Sets the size of the font used by drawString().
   * 
   * @param {int} size - 
   * 
   * @author Created by ijdoc2js
   */
  setFontSize(size) {
    throw "Not Implemented - ImageProcessor.setFontSize(..)";
  };

  /**
   * Specifies whether or not text is drawn using antialiasing. Antialiased
 * test requires an 8 bit or RGB image. Antialiasing does not
 * work with 8-bit images that are not using 0-255 display range.
   * 
   * @param {boolean} antialiasedText - 
   * 
   * @author Created by ijdoc2js
   */
  setAntialiasedText(antialiasedText) {
    throw "Not Implemented - ImageProcessor.setAntialiasedText(..)";
  };

  /**
   * Returns the width in pixels of the specified string, including any background
 * space (whitespace) between the x drawing coordinate and the string, not necessarily
 * including all whitespace at the right.
   * 
   * @param {java.lang.String} s - 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getStringWidth(s) {
    throw "Not Implemented - ImageProcessor.getStringWidth(..)";
  };

  /**
   * Returns a rectangle enclosing the pixels affected by drawString
 * assuming it is drawn at (x=0, y=0). As drawString draws above the drawing location,
 * the y coordinate of the rectangle is negative.
   * 
   * @param {java.lang.String} s - 
   * @return java.awt.Rectangle
   * 
   * @author Created by ijdoc2js
   */
  getStringBounds(s) {
    throw "Not Implemented - ImageProcessor.getStringBounds(..)";
  };

  /**
   * Returns the current font.
   * 
   * @return java.awt.Font
   * 
   * @author Created by ijdoc2js
   */
  getFont() {
    throw "Not Implemented - ImageProcessor.getFont(..)";
  };

  /**
   * Returns the current FontMetrics.
   * 
   * @return java.awt.FontMetrics
   * 
   * @author Created by ijdoc2js
   */
  getFontMetrics() {
    throw "Not Implemented - ImageProcessor.getFontMetrics(..)";
  };

  /**
   * Replaces each pixel with the 3x3 neighborhood mean.
   * 
   * 
   * @author Created by ijdoc2js
   */
  smooth() {
    throw "Not Implemented - ImageProcessor.smooth(..)";
  };

  /**
   * Sharpens the image or ROI using a 3x3 convolution kernel.
   * 
   * 
   * @author Created by ijdoc2js
   */
  sharpen() {
    throw "Not Implemented - ImageProcessor.sharpen(..)";
  };

  /**
   * Finds edges in the image or ROI using a Sobel operator.
   * 
   * 
   * @author Created by ijdoc2js
   */
  findEdges() {
    throw "Not Implemented - ImageProcessor.findEdges(..)";
  };

  /**
   * Flips the image or ROI vertically.
   * 
   * 
   * @author Created by ijdoc2js
   */
  flipVertical() {
    throw "Not Implemented - ImageProcessor.flipVertical(..)";
  };

  /**
   * Flips the image or ROI horizontally.
   * 
   * 
   * @author Created by ijdoc2js
   */
  flipHorizontal() {
    throw "Not Implemented - ImageProcessor.flipHorizontal(..)";
  };

  /**
   * Rotates the entire image 90 degrees clockwise. Returns
 * a new ImageProcessor that represents the rotated image.
   * 
   * @return ImageProcessor
   * 
   * @author Created by ijdoc2js
   */
  rotateRight() {
    throw "Not Implemented - ImageProcessor.rotateRight(..)";
  };

  /**
   * Rotates the entire image 90 degrees counter-clockwise. Returns
 * a new ImageProcessor that represents the rotated image.
   * 
   * @return ImageProcessor
   * 
   * @author Created by ijdoc2js
   */
  rotateLeft() {
    throw "Not Implemented - ImageProcessor.rotateLeft(..)";
  };

  /**
   * Inserts the image contained in 'ip' at (xloc, yloc).
   * 
   * @param {ImageProcessor} ip - 
   * @param {int} xloc - 
   * @param {int} yloc - 
   * 
   * @author Created by ijdoc2js
   */
  insert(ip, xloc, yloc) {
    throw "Not Implemented - ImageProcessor.insert(..)";
  };

  /**
   * Returns a string containing information about this ImageProcessor.
   * 
   * @return java.lang.String
   * 
   * @author Created by ijdoc2js
   */
  toString() {
    throw "Not Implemented - ImageProcessor.toString(..)";
  };

  /**
   * Fills the image or ROI bounding rectangle with the current fill/draw value. Use
 * fill(Roi) or fill(ip.getMask()) to fill non-rectangular selections.
   * 
   * 
   * @author Created by ijdoc2js
   */
  fill() {
    throw "Not Implemented - ImageProcessor.fill(..)";
  };

  /**
   * Fills pixels that are within the ROI bounding rectangle and part of
 * the mask (i.e. pixels that have a value=BLACK in the mask array).
 * Use ip.getMask() to acquire the mask.
 * Throws and IllegalArgumentException if the mask is null or
 * the size of the mask is not the same as the size of the ROI.
   * 
   * @param {ImageProcessor} mask - 
   * 
   * @author Created by ijdoc2js
   */
  fill(mask) {
    throw "Not Implemented - ImageProcessor.fill(..)";
  };

  /**
   * Fills the ROI with the current fill/draw value.
   * 
   * @param {Roi} roi - 
   * 
   * @author Created by ijdoc2js
   */
  fill(roi) {
    throw "Not Implemented - ImageProcessor.fill(..)";
  };

  /**
   * Fills outside an Roi.
   * 
   * @param {Roi} roi - 
   * 
   * @author Created by ijdoc2js
   */
  fillOutside(roi) {
    throw "Not Implemented - ImageProcessor.fillOutside(..)";
  };

  /**
   * Draws the specified ROI on this image using the line
 * width and color defined by ip.setLineWidth() and ip.setColor().
   * 
   * @param {Roi} roi - 
   * 
   * @author Created by ijdoc2js
   */
  draw(roi) {
    throw "Not Implemented - ImageProcessor.draw(..)";
  };

  /**
   * Draws the specified ROI on this image using the stroke
 * width, stroke color and fill color defined by roi.setStrokeWidth,
 * roi.setStrokeColor() and roi.setFillColor(). Works with RGB
 * images. Does not work with 16-bit and float images.
   * 
   * @param {Roi} roi - 
   * 
   * @author Created by ijdoc2js
   */
  drawRoi(roi) {
    throw "Not Implemented - ImageProcessor.drawRoi(..)";
  };

  /**
   * Draws the specified Overlay on this image. Works best
 * with RGB images. Does not work with 16-bit and float
 * images. Requires Java 1.6.
   * 
   * @param {Overlay} overlay - 
   * 
   * @author Created by ijdoc2js
   */
  drawOverlay(overlay) {
    throw "Not Implemented - ImageProcessor.drawOverlay(..)";
  };

  /**
   * Set a lookup table used by getPixelValue(), getLine() and
 * convertToFloat() to calibrate pixel values. The length of
 * the table must be 256 for byte images and 65536 for short
 * images. RGB and float processors do not do calibration.
   * 
   * @param {float[]} cTable - 
   * 
   * @author Created by ijdoc2js
   */
  setCalibrationTable(cTable) {
    throw "Not Implemented - ImageProcessor.setCalibrationTable(..)";
  };

  /**
   * Returns the calibration table or null.
   * 
   * @return float[]
   * 
   * @author Created by ijdoc2js
   */
  getCalibrationTable() {
    throw "Not Implemented - ImageProcessor.getCalibrationTable(..)";
  };

  /**
   * Set the number of bins to be used for histograms of float images.
   * 
   * @param {int} size - 
   * 
   * @author Created by ijdoc2js
   */
  setHistogramSize(size) {
    throw "Not Implemented - ImageProcessor.setHistogramSize(..)";
  };

  /**
   * Returns the number of float image histogram bins. The bin
 * count is fixed at 256 for the other three data types.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getHistogramSize() {
    throw "Not Implemented - ImageProcessor.getHistogramSize(..)";
  };

  /**
   * Set the range used for histograms of float images. The image range is
 * used if both <code>histMin</code> and <code>histMax</code> are zero.
   * 
   * @param {double} histMin - 
   * @param {double} histMax - 
   * 
   * @author Created by ijdoc2js
   */
  setHistogramRange(histMin, histMax) {
    throw "Not Implemented - ImageProcessor.setHistogramRange(..)";
  };

  /**
   * Returns the minimum histogram value used for histograms of float images.
   * 
   * @return double
   * 
   * @author Created by ijdoc2js
   */
  getHistogramMin() {
    throw "Not Implemented - ImageProcessor.getHistogramMin(..)";
  };

  /**
   * Returns the maximum histogram value used for histograms of float images.
   * 
   * @return double
   * 
   * @author Created by ijdoc2js
   */
  getHistogramMax() {
    throw "Not Implemented - ImageProcessor.getHistogramMax(..)";
  };

  /**
   * Returns a reference to this image's pixel array. The
 * array type (byte[], short[], float[] or int[]) varies
 * depending on the image type.
   * 
   * @return java.lang.Object
   * 
   * @author Created by ijdoc2js
   */
  getPixels() {
    throw "Not Implemented - ImageProcessor.getPixels(..)";
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
    throw "Not Implemented - ImageProcessor.getPixelsCopy(..)";
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
    throw "Not Implemented - ImageProcessor.getPixel(..)";
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
    throw "Not Implemented - ImageProcessor.get(..)";
  };

  /**
   * 
   * @param {int} index - 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  get(index) {
    throw "Not Implemented - ImageProcessor.get(..)";
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
    throw "Not Implemented - ImageProcessor.set(..)";
  };

  /**
   * 
   * @param {int} index - 
   * @param {int} value - 
   * 
   * @author Created by ijdoc2js
   */
  set(index, value) {
    throw "Not Implemented - ImageProcessor.set(..)";
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
    throw "Not Implemented - ImageProcessor.getf(..)";
  };

  /**
   * 
   * @param {int} index - 
   * @return float
   * 
   * @author Created by ijdoc2js
   */
  getf(index) {
    throw "Not Implemented - ImageProcessor.getf(..)";
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
    throw "Not Implemented - ImageProcessor.setf(..)";
  };

  /**
   * 
   * @param {int} index - 
   * @param {float} value - 
   * 
   * @author Created by ijdoc2js
   */
  setf(index, value) {
    throw "Not Implemented - ImageProcessor.setf(..)";
  };

  /**
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getPixelCount() {
    throw "Not Implemented - ImageProcessor.getPixelCount(..)";
  };

  /**
   * Returns a copy of the pixel data as a 2D int array with
 * dimensions [x=0..width-1][y=0..height-1]. With RGB
 * images, the returned values are in packed ARGB format.
 * With float images, the returned values must be converted
 * to float using Float.intBitsToFloat().
   * 
   * @return int[][]
   * 
   * @author Created by ijdoc2js
   */
  getIntArray() {
    throw "Not Implemented - ImageProcessor.getIntArray(..)";
  };

  /**
   * Replaces the pixel data with contents of the specified 2D int array.
   * 
   * @param {int[][]} a - 
   * 
   * @author Created by ijdoc2js
   */
  setIntArray(a) {
    throw "Not Implemented - ImageProcessor.setIntArray(..)";
  };

  /**
   * Returns a copy of the pixel data as a 2D float
 * array with dimensions [x=0..width-1][y=0..height-1].
   * 
   * @return float[][]
   * 
   * @author Created by ijdoc2js
   */
  getFloatArray() {
    throw "Not Implemented - ImageProcessor.getFloatArray(..)";
  };

  /**
   * Replaces the pixel data with contents of the specified 2D float array.
   * 
   * @param {float[][]} a - 
   * 
   * @author Created by ijdoc2js
   */
  setFloatArray(a) {
    throw "Not Implemented - ImageProcessor.setFloatArray(..)";
  };

  /**
   * Experimental
   * 
   * @param {int} x - 
   * @param {int} y - 
   * @param {double[][]} arr - 
   * 
   * @author Created by ijdoc2js
   */
  getNeighborhood(x, y, arr) {
    throw "Not Implemented - ImageProcessor.getNeighborhood(..)";
  };

  /**
   * Returns the samples for the pixel at (x,y) in an int array.
 * RGB pixels have three samples, all others have one.
 * Returns zeros if the the coordinates are not in bounds.
 * iArray is an optional preallocated array.
   * 
   * @param {int} x - 
   * @param {int} y - 
   * @param {int[]} iArray - 
   * @return int[]
   * 
   * @author Created by ijdoc2js
   */
  getPixel(x, y, iArray) {
    throw "Not Implemented - ImageProcessor.getPixel(..)";
  };

  /**
   * Sets a pixel in the image using an int array of samples.
 * RGB pixels have three samples, all others have one.
   * 
   * @param {int} x - 
   * @param {int} y - 
   * @param {int[]} iArray - 
   * 
   * @author Created by ijdoc2js
   */
  putPixel(x, y, iArray) {
    throw "Not Implemented - ImageProcessor.putPixel(..)";
  };

  /**
   * Uses the current interpolation method (bilinear or bicubic)
 * to find the pixel value at real coordinates (x,y).
   * 
   * @param {double} x - 
   * @param {double} y - 
   * @return double
   * 
   * @author Created by ijdoc2js
   */
  getInterpolatedPixel(x, y) {
    throw "Not Implemented - ImageProcessor.getInterpolatedPixel(..)";
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
    throw "Not Implemented - ImageProcessor.getPixelInterpolated(..)";
  };

  /**
   * Uses bilinear interpolation to find the pixel value at real coordinates (x,y).
 * Returns zero if the (x, y) is not inside the image.
   * 
   * @param {double} x - 
   * @param {double} y - 
   * @return double
   * 
   * @author Created by ijdoc2js
   */
  getInterpolatedValue(x, y) {
    throw "Not Implemented - ImageProcessor.getInterpolatedValue(..)";
  };

  /**
   * This method is from Chapter 16 of "Digital Image Processing:
 * An Algorithmic Introduction Using Java" by Burger and Burge
 * (http://www.imagingbook.com/).
   * 
   * @param {double} x0 - 
   * @param {double} y0 - 
   * @param {ImageProcessor} ip2 - 
   * @return double
   * 
   * @author Created by ijdoc2js
   */
  getBicubicInterpolatedPixel(x0, y0, ip2) {
    throw "Not Implemented - ImageProcessor.getBicubicInterpolatedPixel(..)";
  };

  /**
   * 
   * @param {double} x - 
   * @return double
   * 
   * @author Created by ijdoc2js
   */
  cubic(x) {
    throw "Not Implemented - ImageProcessor.cubic(..)";
  };

  /**
   * Stores the specified value at (x,y). Does
 * nothing if (x,y) is outside the image boundary.
 * For 8-bit and 16-bit images, out of range values
 * are clamped. For RGB images, the
 * argb values are packed in 'value'. For float images,
 * 'value' is expected to be a float converted to an int
 * using Float.floatToIntBits().
   * 
   * @param {int} x - 
   * @param {int} y - 
   * @param {int} value - 
   * 
   * @author Created by ijdoc2js
   */
  putPixel(x, y, value) {
    throw "Not Implemented - ImageProcessor.putPixel(..)";
  };

  /**
   * Returns the value of the pixel at <i>(x,y)</i>, a calibrated
 * value from 8-bit and 16-bit images, an intensity value
 * from RGB images and a double value from 32-bit images.
 * This is an alias for getPixelValue(x,y).
   * 
   * @param {int} x - 
   * @param {int} y - 
   * @return double
   * 
   * @author Created by ijdoc2js
   */
  getValue(x, y) {
    throw "Not Implemented - ImageProcessor.getValue(..)";
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
    throw "Not Implemented - ImageProcessor.getPixelValue(..)";
  };

  /**
   * Stores the specified value at (x,y).
   * 
   * @param {int} x - 
   * @param {int} y - 
   * @param {double} value - 
   * 
   * @author Created by ijdoc2js
   */
  putPixelValue(x, y, value) {
    throw "Not Implemented - ImageProcessor.putPixelValue(..)";
  };

  /**
   * Sets the pixel at (x,y) to the current fill/draw value.
   * 
   * @param {int} x - 
   * @param {int} y - 
   * 
   * @author Created by ijdoc2js
   */
  drawPixel(x, y) {
    throw "Not Implemented - ImageProcessor.drawPixel(..)";
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
    throw "Not Implemented - ImageProcessor.setPixels(..)";
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
    throw "Not Implemented - ImageProcessor.copyBits(..)";
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
    throw "Not Implemented - ImageProcessor.applyTable(..)";
  };

  /**
   * Inverts the image or ROI.
   * 
   * 
   * @author Created by ijdoc2js
   */
  invert() {
    throw "Not Implemented - ImageProcessor.invert(..)";
  };

  /**
   * Adds 'value' to each pixel in the image or ROI.
   * 
   * @param {int} value - 
   * 
   * @author Created by ijdoc2js
   */
  add(value) {
    throw "Not Implemented - ImageProcessor.add(..)";
  };

  /**
   * Adds 'value' to each pixel in the image or ROI.
   * 
   * @param {double} value - 
   * 
   * @author Created by ijdoc2js
   */
  add(value) {
    throw "Not Implemented - ImageProcessor.add(..)";
  };

  /**
   * Subtracts 'value' from each pixel in the image or ROI.
   * 
   * @param {double} value - 
   * 
   * @author Created by ijdoc2js
   */
  subtract(value) {
    throw "Not Implemented - ImageProcessor.subtract(..)";
  };

  /**
   * Multiplies each pixel in the image or ROI by 'value'.
   * 
   * @param {double} value - 
   * 
   * @author Created by ijdoc2js
   */
  multiply(value) {
    throw "Not Implemented - ImageProcessor.multiply(..)";
  };

  /**
   * Assigns 'value' to each pixel in the image or ROI.
   * 
   * @param {double} value - 
   * 
   * @author Created by ijdoc2js
   */
  set(value) {
    throw "Not Implemented - ImageProcessor.set(..)";
  };

  /**
   * Binary AND of each pixel in the image or ROI with 'value'.
   * 
   * @param {int} value - 
   * 
   * @author Created by ijdoc2js
   */
  and(value) {
    throw "Not Implemented - ImageProcessor.and(..)";
  };

  /**
   * Binary OR of each pixel in the image or ROI with 'value'.
   * 
   * @param {int} value - 
   * 
   * @author Created by ijdoc2js
   */
  or(value) {
    throw "Not Implemented - ImageProcessor.or(..)";
  };

  /**
   * Binary exclusive OR of each pixel in the image or ROI with 'value'.
   * 
   * @param {int} value - 
   * 
   * @author Created by ijdoc2js
   */
  xor(value) {
    throw "Not Implemented - ImageProcessor.xor(..)";
  };

  /**
   * Performs gamma correction of the image or ROI.
   * 
   * @param {double} value - 
   * 
   * @author Created by ijdoc2js
   */
  gamma(value) {
    throw "Not Implemented - ImageProcessor.gamma(..)";
  };

  /**
   * Does a natural logarithmic (base e) transform of the image or ROI.
   * 
   * 
   * @author Created by ijdoc2js
   */
  log() {
    throw "Not Implemented - ImageProcessor.log(..)";
  };

  /**
   * Does a natural logarithmic (base e) transform of the image or ROI.
   * 
   * 
   * @author Created by ijdoc2js
   */
  ln() {
    throw "Not Implemented - ImageProcessor.ln(..)";
  };

  /**
   * Performs a exponential transform on the image or ROI.
   * 
   * 
   * @author Created by ijdoc2js
   */
  exp() {
    throw "Not Implemented - ImageProcessor.exp(..)";
  };

  /**
   * Performs a square transform on the image or ROI.
   * 
   * 
   * @author Created by ijdoc2js
   */
  sqr() {
    throw "Not Implemented - ImageProcessor.sqr(..)";
  };

  /**
   * Performs a square root transform on the image or ROI.
   * 
   * 
   * @author Created by ijdoc2js
   */
  sqrt() {
    throw "Not Implemented - ImageProcessor.sqrt(..)";
  };

  /**
   * If this is a 32-bit or signed 16-bit image, performs an
 * absolute value transform, otherwise does nothing.
   * 
   * 
   * @author Created by ijdoc2js
   */
  abs() {
    throw "Not Implemented - ImageProcessor.abs(..)";
  };

  /**
   * Pixels less than 'value' are set to 'value'.
   * 
   * @param {double} value - 
   * 
   * @author Created by ijdoc2js
   */
  min(value) {
    throw "Not Implemented - ImageProcessor.min(..)";
  };

  /**
   * Pixels greater than 'value' are set to 'value'.
   * 
   * @param {double} value - 
   * 
   * @author Created by ijdoc2js
   */
  max(value) {
    throw "Not Implemented - ImageProcessor.max(..)";
  };

  /**
   * Returns a copy of this image is the form of an AWT Image.
   * 
   * @return java.awt.Image
   * 
   * @author Created by ijdoc2js
   */
  createImage() {
    throw "Not Implemented - ImageProcessor.createImage(..)";
  };

  /**
   * Returns this image as a BufferedImage.
   * 
   * @return java.awt.image.BufferedImage
   * 
   * @author Created by ijdoc2js
   */
  getBufferedImage() {
    throw "Not Implemented - ImageProcessor.getBufferedImage(..)";
  };

  /**
   * Returns a new, blank processor with the specified width and height.
   * 
   * @param {int} width - 
   * @param {int} height - 
   * @return ImageProcessor
   * 
   * @author Created by ijdoc2js
   */
  createProcessor(width, height) {
    throw "Not Implemented - ImageProcessor.createProcessor(..)";
  };

  /**
   * Makes a copy of this image's pixel data that can be
 * later restored using reset() or reset(mask).
   * 
   * 
   * @author Created by ijdoc2js
   */
  snapshot() {
    throw "Not Implemented - ImageProcessor.snapshot(..)";
  };

  /**
   * Restores the pixel data from the snapshot (undo) buffer.
   * 
   * 
   * @author Created by ijdoc2js
   */
  reset() {
    throw "Not Implemented - ImageProcessor.reset(..)";
  };

  /**
   * Swaps the pixel and snapshot (undo) buffers.
   * 
   * 
   * @author Created by ijdoc2js
   */
  swapPixelArrays() {
    throw "Not Implemented - ImageProcessor.swapPixelArrays(..)";
  };

  /**
   * Restores pixels from the snapshot buffer that are
 * within the rectangular roi but not part of the mask.
   * 
   * @param {ImageProcessor} mask - 
   * 
   * @author Created by ijdoc2js
   */
  reset(mask) {
    throw "Not Implemented - ImageProcessor.reset(..)";
  };

  /**
   * Sets a new pixel array for the snapshot (undo) buffer.
   * 
   * @param {java.lang.Object} pixels - 
   * 
   * @author Created by ijdoc2js
   */
  setSnapshotPixels(pixels) {
    throw "Not Implemented - ImageProcessor.setSnapshotPixels(..)";
  };

  /**
   * Returns a reference to the snapshot (undo) buffer, or null.
   * 
   * @return java.lang.Object
   * 
   * @author Created by ijdoc2js
   */
  getSnapshotPixels() {
    throw "Not Implemented - ImageProcessor.getSnapshotPixels(..)";
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
    throw "Not Implemented - ImageProcessor.convolve3x3(..)";
  };

  /**
   * A 3x3 filter operation, where the argument (BLUR_MORE, FIND_EDGES,
 * MEDIAN_FILTER, MIN or MAX) determines the filter type.
   * 
   * @param {int} type - 
   * 
   * @author Created by ijdoc2js
   */
  filter(type) {
    throw "Not Implemented - ImageProcessor.filter(..)";
  };

  /**
   * A 3x3 median filter. Requires 8-bit or RGB image.
   * 
   * 
   * @author Created by ijdoc2js
   */
  medianFilter() {
    throw "Not Implemented - ImageProcessor.medianFilter(..)";
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
    throw "Not Implemented - ImageProcessor.noise(..)";
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
    throw "Not Implemented - ImageProcessor.crop(..)";
  };

  /**
   * Sets pixels less than or equal to level to 0 and all other
   * pixels to 255. Only works with 8-bit and 16-bit images.
   * 
   * @param {int} level - 
   * 
   * @author Created by ijdoc2js
   */
  threshold(level) {
    throw "Not Implemented - ImageProcessor.threshold(..)";
  };

  /**
   * Returns a duplicate of this image.
   * 
   * @return ImageProcessor
   * 
   * @author Created by ijdoc2js
   */
  duplicate() {
    throw "Not Implemented - ImageProcessor.duplicate(..)";
  };

  /**
   * Scales the image by the specified factors. Does not
   * change the image size.
   * 
   * @param {double} xScale - 
   * @param {double} yScale - 
   * 
   * @author Created by ijdoc2js
   */
  scale(xScale, yScale) {
    throw "Not Implemented - ImageProcessor.scale(..)";
  };

  /**
   * Returns a new ImageProcessor containing a scaled copy of this image or ROI.
   * 
   * @param {int} dstWidth - 
   * @param {int} dstHeight - 
   * @return ImageProcessor
   * 
   * @author Created by ijdoc2js
   */
  resize(dstWidth, dstHeight) {
    throw "Not Implemented - ImageProcessor.resize(..)";
  };

  /**
   * Returns a new ImageProcessor containing a scaled copy
   * of this image or ROI, with the aspect ratio maintained.
   * 
   * @param {int} dstWidth - 
   * @return ImageProcessor
   * 
   * @author Created by ijdoc2js
   */
  resize(dstWidth) {
    throw "Not Implemented - ImageProcessor.resize(..)";
  };

  /**
   * Returns a new ImageProcessor containing a scaled copy of this image or ROI.
   * 
   * @param {int} dstWidth - 
   * @param {int} dstHeight - 
   * @param {boolean} useAverging - 
   * @return ImageProcessor
   * 
   * @author Created by ijdoc2js
   */
  resize(dstWidth, dstHeight, useAverging) {
    throw "Not Implemented - ImageProcessor.resize(..)";
  };

  /**
   * Returns a copy of this image that has been reduced in size using binning.
   * 
   * @param {int} shrinkFactor - 
   * @return ImageProcessor
   * 
   * @author Created by ijdoc2js
   */
  bin(shrinkFactor) {
    throw "Not Implemented - ImageProcessor.bin(..)";
  };

  /**
   * Rotates the image or selection 'angle' degrees clockwise.
   * 
   * @param {double} angle - 
   * 
   * @author Created by ijdoc2js
   */
  rotate(angle) {
    throw "Not Implemented - ImageProcessor.rotate(..)";
  };

  /**
   * Moves the image or selection vertically or horizontally by a specified
   * number of pixels. Positive x values move the image or selection to the
   * right, negative values move it to the left. Positive y values move the
   * image or selection down, negative values move it up.
   * 
   * @param {double} xOffset - 
   * @param {double} yOffset - 
   * 
   * @author Created by ijdoc2js
   */
  translate(xOffset, yOffset) {
    throw "Not Implemented - ImageProcessor.translate(..)";
  };

  /**
   * <span class="deprecatedLabel">Deprecated.</span>&nbsp;<span class="deprecationComment">replaced by translate(x,y)</span>
   * 
   * @deprecated .</span>&nbsp;<span class="deprecationComment">replaced by translate(x,y)</span>
   * @param {int} xOffset - 
   * @param {int} yOffset - 
   * @param {boolean} eraseBackground - 
   * 
   * @author Created by ijdoc2js
   */
  translate(xOffset, yOffset, eraseBackground) {
    throw "Not Implemented - ImageProcessor.translate(..)";
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
    throw "Not Implemented - ImageProcessor.getHistogram(..)";
  };

  /**
   * Returns the histogram of the image or ROI, using the specified number of bins.
   * 
   * @param {int} nBins - 
   * @return int[]
   * 
   * @author Created by ijdoc2js
   */
  getHistogram(nBins) {
    throw "Not Implemented - ImageProcessor.getHistogram(..)";
  };

  /**
   * Erodes the image or ROI using a 3x3 maximum filter. Requires 8-bit or RGB image.
   * 
   * 
   * @author Created by ijdoc2js
   */
  erode() {
    throw "Not Implemented - ImageProcessor.erode(..)";
  };

  /**
   * Dilates the image or ROI using a 3x3 minimum filter. Requires 8-bit or RGB image.
   * 
   * 
   * @author Created by ijdoc2js
   */
  dilate() {
    throw "Not Implemented - ImageProcessor.dilate(..)";
  };

  /**
   * For 16 and 32 bit processors, set 'lutAnimation' true
   * to have createImage() use the cached 8-bit version
   * of the image.
   * 
   * @param {boolean} lutAnimation - 
   * 
   * @author Created by ijdoc2js
   */
  setLutAnimation(lutAnimation) {
    throw "Not Implemented - ImageProcessor.setLutAnimation(..)";
  };

  /**
   * Returns an 8-bit version of this image as a ByteProcessor.
   * 
   * @param {boolean} doScaling - 
   * @return ImageProcessor
   * 
   * @author Created by ijdoc2js
   */
  convertToByte(doScaling) {
    throw "Not Implemented - ImageProcessor.convertToByte(..)";
  };

  /**
   * Returns a 16-bit version of this image as a ShortProcessor.
   * 
   * @param {boolean} doScaling - 
   * @return ImageProcessor
   * 
   * @author Created by ijdoc2js
   */
  convertToShort(doScaling) {
    throw "Not Implemented - ImageProcessor.convertToShort(..)";
  };

  /**
   * Returns a 32-bit float version of this image as a FloatProcessor.
 * For byte and short images, converts using a calibration function
 * if a calibration table has been set using setCalibrationTable().
   * 
   * @return ImageProcessor
   * 
   * @author Created by ijdoc2js
   */
  convertToFloat() {
    throw "Not Implemented - ImageProcessor.convertToFloat(..)";
  };

  /**
   * Returns an RGB version of this image as a ColorProcessor.
   * 
   * @return ImageProcessor
   * 
   * @author Created by ijdoc2js
   */
  convertToRGB() {
    throw "Not Implemented - ImageProcessor.convertToRGB(..)";
  };

  /**
   * Returns an 8-bit version of this image as a ByteProcessor. 16-bit and 32-bit
 * pixel data are scaled from min-max to 0-255.
   * 
   * @return ByteProcessor
   * 
   * @author Created by ijdoc2js
   */
  convertToByteProcessor() {
    throw "Not Implemented - ImageProcessor.convertToByteProcessor(..)";
  };

  /**
   * Returns an 8-bit version of this image as a ByteProcessor. 16-bit and 32-bit
 * pixel data are scaled from min-max to 0-255 if 'scale' is true.
   * 
   * @param {boolean} scale - 
   * @return ByteProcessor
   * 
   * @author Created by ijdoc2js
   */
  convertToByteProcessor(scale) {
    throw "Not Implemented - ImageProcessor.convertToByteProcessor(..)";
  };

  /**
   * Returns a 16-bit version of this image as a ShortProcessor. 32-bit
 * pixel data are scaled from min-max to 0-255.
   * 
   * @return ShortProcessor
   * 
   * @author Created by ijdoc2js
   */
  convertToShortProcessor() {
    throw "Not Implemented - ImageProcessor.convertToShortProcessor(..)";
  };

  /**
   * Returns a 16-bit version of this image as a ShortProcessor. 32-bit
 * pixel data are scaled from min-max to 0-255 if 'scale' is true.
   * 
   * @param {boolean} scale - 
   * @return ShortProcessor
   * 
   * @author Created by ijdoc2js
   */
  convertToShortProcessor(scale) {
    throw "Not Implemented - ImageProcessor.convertToShortProcessor(..)";
  };

  /**
   * Returns a 32-bit float version of this image as a FloatProcessor.
 * For byte and short images, converts using a calibration function
 * if a calibration table has been set using setCalibrationTable().
   * 
   * @return FloatProcessor
   * 
   * @author Created by ijdoc2js
   */
  convertToFloatProcessor() {
    throw "Not Implemented - ImageProcessor.convertToFloatProcessor(..)";
  };

  /**
   * Returns an RGB version of this image as a ColorProcessor.
   * 
   * @return ColorProcessor
   * 
   * @author Created by ijdoc2js
   */
  convertToColorProcessor() {
    throw "Not Implemented - ImageProcessor.convertToColorProcessor(..)";
  };

  /**
   * Performs a convolution operation using the specified kernel.
 * KernelWidth and kernelHeight must be odd.
   * 
   * @param {float[]} kernel - 
   * @param {int} kernelWidth - 
   * @param {int} kernelHeight - 
   * 
   * @author Created by ijdoc2js
   */
  convolve(kernel, kernelWidth, kernelHeight) {
    throw "Not Implemented - ImageProcessor.convolve(..)";
  };

  /**
   * Converts the image to binary using an automatically determined threshold.
 * For byte and short images, converts to binary using an automatically determined
 * threshold. For RGB images, converts each channel to binary. For
 * float images, does nothing.
   * 
   * 
   * @author Created by ijdoc2js
   */
  autoThreshold() {
    throw "Not Implemented - ImageProcessor.autoThreshold(..)";
  };

  /**
   * Returns a pixel value (threshold) that can be used to divide the image into objects
   * and background. It does this by taking a test threshold and computing the average
   * of the pixels at or below the threshold and pixels above. It then computes the average
   * of those two, increments the threshold, and repeats the process. Incrementing stops
   * when the threshold is larger than the composite average. That is, threshold = (average
   * background + average objects)/2. This description was posted to the ImageJ mailing
   * list by Jordan Bevic.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getAutoThreshold() {
    throw "Not Implemented - ImageProcessor.getAutoThreshold(..)";
  };

  /**
   * This is a version of getAutoThreshold() that uses a histogram passed as an argument.
   * 
   * @param {int[]} histogram - 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getAutoThreshold(histogram) {
    throw "Not Implemented - ImageProcessor.getAutoThreshold(..)";
  };

  /**
   * Updates the clipping rectangle used by lineTo(), drawLine(), drawDot() and drawPixel().
   * The clipping rectangle is reset by passing a null argument or by calling resetRoi().
   * 
   * @param {java.awt.Rectangle} clipRect - 
   * 
   * @author Created by ijdoc2js
   */
  setClipRect(clipRect) {
    throw "Not Implemented - ImageProcessor.setClipRect(..)";
  };

  /**
   * Returns the default grayscale IndexColorModel.
   * 
   * @return java.awt.image.IndexColorModel
   * 
   * @author Created by ijdoc2js
   */
  getDefaultColorModel() {
    throw "Not Implemented - ImageProcessor.getDefaultColorModel(..)";
  };

  /**
   * The getPixelsCopy() method returns a reference to the
 * snapshot buffer if it is not null and 'snapshotCopyMode' is true.
   * 
   * @param {boolean} b - 
   * 
   * @author Created by ijdoc2js
   */
  setSnapshotCopyMode(b) {
    throw "Not Implemented - ImageProcessor.setSnapshotCopyMode(..)";
  };

  /**
   * Returns the number of color channels in the image. The color channels can be
   * accessed by toFloat(channelNumber, fp) and written by setPixels(channelNumber, fp).
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getNChannels() {
    throw "Not Implemented - ImageProcessor.getNChannels(..)";
  };

  /**
   * Returns a FloatProcessor with the image or one color channel thereof.
   * The roi and mask are also set for the FloatProcessor.
   * 
   * @param {int} channelNumber - 
   * @param {FloatProcessor} fp - 
   * @return FloatProcessor
   * 
   * @author Created by ijdoc2js
   */
  toFloat(channelNumber, fp) {
    throw "Not Implemented - ImageProcessor.toFloat(..)";
  };

  /**
   * Sets the pixels (of one color channel for RGB images) from a FloatProcessor.
   * 
   * @param {int} channelNumber - 
   * @param {FloatProcessor} fp - 
   * 
   * @author Created by ijdoc2js
   */
  setPixels(channelNumber, fp) {
    throw "Not Implemented - ImageProcessor.setPixels(..)";
  };

  /**
   * Returns the minimum possible pixel value.
   * 
   * @return double
   * 
   * @author Created by ijdoc2js
   */
  minValue() {
    throw "Not Implemented - ImageProcessor.minValue(..)";
  };

  /**
   * Returns the maximum possible pixel value.
   * 
   * @return double
   * 
   * @author Created by ijdoc2js
   */
  maxValue() {
    throw "Not Implemented - ImageProcessor.maxValue(..)";
  };

  /**
   * CompositeImage calls this method to generate an updated color image.
   * 
   * @param {int[]} rgbPixels - 
   * @param {int} channel - 
   * 
   * @author Created by ijdoc2js
   */
  updateComposite(rgbPixels, channel) {
    throw "Not Implemented - ImageProcessor.updateComposite(..)";
  };

  /**
   * Sets the upper Over/Under threshold color. Can be called from a macro,
 * e.g., call("ij.process.ImageProcessor.setOverColor", 0,255,255).
   * 
   * @param {int} red - 
   * @param {int} green - 
   * @param {int} blue - 
   * 
   * @author Created by ijdoc2js
   */
  setOverColor(red, green, blue) {
    throw "Not Implemented - ImageProcessor.setOverColor(..)";
  };

  /**
   * Set the lower Over/Under thresholding color.
   * 
   * @param {int} red - 
   * @param {int} green - 
   * @param {int} blue - 
   * 
   * @author Created by ijdoc2js
   */
  setUnderColor(red, green, blue) {
    throw "Not Implemented - ImageProcessor.setUnderColor(..)";
  };

  /**
   * Returns 'true' if this is a binary image (8-bit-image with only 0 and 255).
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  isBinary() {
    throw "Not Implemented - ImageProcessor.isBinary(..)";
  };

  /**
   * Returns 'true' if this is a signed 16-bit image.
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  isSigned16Bit() {
    throw "Not Implemented - ImageProcessor.isSigned16Bit(..)";
  };

  /**
   * 
   * @param {boolean} b - 
   * 
   * @author Created by ijdoc2js
   */
  setUseBicubic(b) {
    throw "Not Implemented - ImageProcessor.setUseBicubic(..)";
  };

  /**
   * Calculates and returns uncalibrated statistics for this image or ROI,
 * including histogram, area, mean, min and max, standard deviation,
 * and mode. Use the setRoi(Roi) method to limit statistics to
 * a non-rectangular area.
   * 
   * @return ImageStatistics
   * 
   * @author Created by ijdoc2js
   */
  getStats() {
    throw "Not Implemented - ImageProcessor.getStats(..)";
  };

  /**
   * Calculates and returns complete uncalibrated (raw)
 * statistics for this image or ROI but it is up to 70 times
 * slower than getStats(). Use the setRoi(Roi) method to
 * limit statistics to a non-rectangular area.
   * 
   * @return ImageStatistics
   * 
   * @author Created by ijdoc2js
   */
  getStatistics() {
    throw "Not Implemented - ImageProcessor.getStatistics(..)";
  };

  /**
   * Blurs the image by convolving with a Gaussian function.
   * 
   * @param {double} sigma - 
   * 
   * @author Created by ijdoc2js
   */
  blurGaussian(sigma) {
    throw "Not Implemented - ImageProcessor.blurGaussian(..)";
  };

  /**
   * Uses the Process/Math/Macro command to apply macro code to this image.
   * 
   * @param {java.lang.String} macro - 
   * 
   * @author Created by ijdoc2js
   */
  applyMacro(macro) {
    throw "Not Implemented - ImageProcessor.applyMacro(..)";
  };

  /**
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getSliceNumber() {
    throw "Not Implemented - ImageProcessor.getSliceNumber(..)";
  };

  /**
   * PlugInFilterRunner uses this method to set the slice number.
   * 
   * @param {int} slice - 
   * 
   * @author Created by ijdoc2js
   */
  setSliceNumber(slice) {
    throw "Not Implemented - ImageProcessor.setSliceNumber(..)";
  };

  /**
   * Returns a shallow copy of this ImageProcessor, where this
   * image and the copy share pixel data. Use the duplicate() method
   * to create a copy that does not share the pixel data.
   * 
   * @return java.lang.Object
   * 
   * @author Created by ijdoc2js
   */
  clone() {
    throw "Not Implemented - ImageProcessor.clone(..)";
  };

  /**
   * This method is used to display virtual stack overlays.
   * 
   * @param {Overlay} overlay - 
   * 
   * @author Created by ijdoc2js
   */
  setOverlay(overlay) {
    throw "Not Implemented - ImageProcessor.setOverlay(..)";
  };

  /**
   * 
   * @return Overlay
   * 
   * @author Created by ijdoc2js
   */
  getOverlay() {
    throw "Not Implemented - ImageProcessor.getOverlay(..)";
  };

  /**
   * 
   * @param {double} randomSeed - 
   * 
   * @author Created by ijdoc2js
   */
  setRandomSeed(randomSeed) {
    throw "Not Implemented - ImageProcessor.setRandomSeed(..)";
  };

  /**
   * Returns a binary mask, or null if a threshold is not set or this is an RGB image.
   * 
   * @return ByteProcessor
   * 
   * @author Created by ijdoc2js
   */
  createMask() {
    throw "Not Implemented - ImageProcessor.createMask(..)";
  };

} // End of class ImageProcessor

