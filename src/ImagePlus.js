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
 * public class ImagePlus
 * extends java.lang.Object
 * implements java.awt.image.ImageObserver, Measurements, java.lang.Cloneable
 *
 * An ImagePlus contain an ImageProcessor (2D image) or an ImageStack (3D, 4D or 5D image).
 *  * It also includes metadata (spatial calibration and possibly the directory/file where
 *  * it was read from). The ImageProcessor contains the pixel data (8-bit, 16-bit, float or RGB)
 *  * of the 2D image and some basic methods to manipulate it. An ImageStack is essentually
 *  * a list ImageProcessors of same type and size.
*/

'use strict';

export class ImagePlus {
  /**
   * Constructs an ImagePlus.
   * @constructor
   * 
   * @param {String} title - or path_to_url
   * @param {java.awt.Image} data - can be a `ImageProcessor` or a  ImageStack`

   * @author Created by ijdoc2js
   */
  constructor (title="None", data=null) {
    throw "Not Implemented - ImagePlus.ImagePlus(..)";
  };



  /**
   * 8-bit grayscale (unsigned)
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get GRAY8() {
    return 8;
  }

  /**
   * 16-bit grayscale (unsigned)
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get GRAY16() {
    return 16;
  }

  /**
   * 32-bit floating-point grayscale
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get GRAY32() {
    return 32;
  }

  /**
   * 8-bit indexed color
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get COLOR_256() {
    return 256;
  }

  /**
   * 32-bit RGB color
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get COLOR_RGB() {
    return 24;
  }

  /**
   * Title of image used by Flatten command
   * 
   * @const {java.lang.String}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get flattenTitle() {
    return 0;
  }

  /**
   * True if any changes have been made to this image.
   * 
   * @const {boolean}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get changes() {
    return 0;
  }

  /**
   * 
   * @const {boolean}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get setIJMenuBar() {
    return 0;
  }

  /**
   * Locks the image so other threads can test to see if it is in use.
 * One thread can lock an image multiple times, then it has to unlock
 * it as many times until it is unlocked. This allows nested locking
 * within a thread.
 * Returns true if the image was successfully locked.
 * Beeps, displays a message in the status bar, and returns
 * false if the image is already locked by another thread.
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  lock() {
    throw "Not Implemented - ImagePlus.lock(..)";
  };

  /**
   * Similar to lock, but doesn't beep and display an error
 * message if the attempt to lock the image fails.
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  lockSilently() {
    throw "Not Implemented - ImagePlus.lockSilently(..)";
  };

  /**
   * Unlocks the image.
 * In case the image had been locked several times by the current thread,
 * it gets unlocked only after as many unlock operations as there were
 * previous lock operations.
   * 
   * 
   * @author Created by ijdoc2js
   */
  unlock() {
    throw "Not Implemented - ImagePlus.unlock(..)";
  };

  /**
   * Returns 'true' if the image is locked.
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  isLocked() {
    throw "Not Implemented - ImagePlus.isLocked(..)";
  };

  /**
   * Returns 'true' if the image was locked on another thread.
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  isLockedByAnotherThread() {
    throw "Not Implemented - ImagePlus.isLockedByAnotherThread(..)";
  };

  /**
   * Draws the image. If there is an ROI, its
 * outline is also displayed. Does nothing if there
 * is no window associated with this image (i.e. show()
 * has not been called).
   * 
   * 
   * @author Created by ijdoc2js
   */
  draw() {
    throw "Not Implemented - ImagePlus.draw(..)";
  };

  /**
   * Draws image and roi outline using a clip rect.
   * 
   * @param {int} x - 
   * @param {int} y - 
   * @param {int} width - 
   * @param {int} height - 
   * 
   * @author Created by ijdoc2js
   */
  draw(x, y, width, height) {
    throw "Not Implemented - ImagePlus.draw(..)";
  };

  /**
   * Updates this image from the pixel data in its
 * associated ImageProcessor, then displays it. Does
 * nothing if there is no window associated with
 * this image (i.e. show() has not been called).
   * 
   * 
   * @author Created by ijdoc2js
   */
  updateAndDraw() {
    throw "Not Implemented - ImagePlus.updateAndDraw(..)";
  };

  /**
   * Use to update the image when the underlying virtual stack changes.
   * 
   * 
   * @author Created by ijdoc2js
   */
  updateVirtualSlice() {
    throw "Not Implemented - ImagePlus.updateVirtualSlice(..)";
  };

  /**
   * Sets the display mode of composite color images, where 'mode'
 * should be IJ.COMPOSITE, IJ.COLOR or IJ.GRAYSCALE.
   * 
   * @param {int} mode - 
   * 
   * @author Created by ijdoc2js
   */
  setDisplayMode(mode) {
    throw "Not Implemented - ImagePlus.setDisplayMode(..)";
  };

  /**
   * Returns the display mode (IJ.COMPOSITE, IJ.COLOR
 * or IJ.GRAYSCALE) if this is a composite color
 * image, or 0 if it not.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getDisplayMode() {
    throw "Not Implemented - ImagePlus.getDisplayMode(..)";
  };

  /**
   * Controls which channels in a composite color image are displayed,
 * where 'channels' is a list of ones and zeros that specify the channels to
 * display. For example, "101" causes channels 1 and 3 to be displayed.
   * 
   * @param {java.lang.String} channels - 
   * 
   * @author Created by ijdoc2js
   */
  setActiveChannels(channels) {
    throw "Not Implemented - ImagePlus.setActiveChannels(..)";
  };

  /**
   * Updates this image from the pixel data in its
 * associated ImageProcessor, then displays it.
 * The CompositeImage class overrides this method
 * to only update the current channel.
   * 
   * 
   * @author Created by ijdoc2js
   */
  updateChannelAndDraw() {
    throw "Not Implemented - ImagePlus.updateChannelAndDraw(..)";
  };

  /**
   * Returns a reference to the current ImageProcessor. The
 * CompositeImage class overrides this method to return
 * the processor associated with the current channel.
   * 
   * @return ImageProcessor
   * 
   * @author Created by ijdoc2js
   */
  getChannelProcessor() {
    throw "Not Implemented - ImagePlus.getChannelProcessor(..)";
  };

  /**
   * Returns an array containing the lookup tables used by this image,
 * one per channel, or an empty array if this is an RGB image.
   * 
   * @return LUT[]
   * 
   * @author Created by ijdoc2js
   */
  getLuts() {
    throw "Not Implemented - ImagePlus.getLuts(..)";
  };

  /**
   * Calls draw to draw the image and also repaints the
 * image window to force the information displayed above
 * the image (dimension, type, size) to be updated.
   * 
   * 
   * @author Created by ijdoc2js
   */
  repaintWindow() {
    throw "Not Implemented - ImagePlus.repaintWindow(..)";
  };

  /**
   * Calls updateAndDraw to update from the pixel data
 * and draw the image, and also repaints the image
 * window to force the information displayed above
 * the image (dimension, type, size) to be updated.
   * 
   * 
   * @author Created by ijdoc2js
   */
  updateAndRepaintWindow() {
    throw "Not Implemented - ImagePlus.updateAndRepaintWindow(..)";
  };

  /**
   * ImageCanvas.paint() calls this method when the
 * ImageProcessor has generated a new image.
   * 
   * 
   * @author Created by ijdoc2js
   */
  updateImage() {
    throw "Not Implemented - ImagePlus.updateImage(..)";
  };

  /**
   * Closes the window, if any, that is displaying this image.
   * 
   * 
   * @author Created by ijdoc2js
   */
  hide() {
    throw "Not Implemented - ImagePlus.hide(..)";
  };

  /**
   * Closes this image and sets the ImageProcessor to null. To avoid the
 * "Save changes?" dialog, first set the public 'changes' variable to false.
   * 
   * 
   * @author Created by ijdoc2js
   */
  close() {
    throw "Not Implemented - ImagePlus.close(..)";
  };

  /**
   * Opens a window to display this image and clears the status bar.
   * 
   * 
   * @author Created by ijdoc2js
   */
  show() {
    throw "Not Implemented - ImagePlus.show(..)";
  };

  /**
   * Opens a window to display this image and displays
 * 'statusMessage' in the status bar.
   * 
   * @param {java.lang.String} statusMessage - 
   * 
   * @author Created by ijdoc2js
   */
  show(statusMessage) {
    throw "Not Implemented - ImagePlus.show(..)";
  };

  /**
   * Called by ImageWindow.windowActivated().
   * 
   * 
   * @author Created by ijdoc2js
   */
  setActivated() {
    throw "Not Implemented - ImagePlus.setActivated(..)";
  };

  /**
   * Returns this image as a AWT image.
   * 
   * @return java.awt.Image
   * 
   * @author Created by ijdoc2js
   */
  getImage() {
    throw "Not Implemented - ImagePlus.getImage(..)";
  };

  /**
   * Returns a copy of this image as an 8-bit or RGB BufferedImage.
   * 
   * @return java.awt.image.BufferedImage
   * 
   * @author Created by ijdoc2js
   */
  getBufferedImage() {
    throw "Not Implemented - ImagePlus.getBufferedImage(..)";
  };

  /**
   * Returns this image's unique numeric ID.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getID() {
    throw "Not Implemented - ImagePlus.getID(..)";
  };

  /**
   * Replaces the image, if any, with the one specified.
 * Throws an IllegalStateException if an error occurs
 * while loading the image.
   * 
   * @param {java.awt.Image} image - 
   * 
   * @author Created by ijdoc2js
   */
  setImage(image) {
    throw "Not Implemented - ImagePlus.setImage(..)";
  };

  /**
   * Replaces this image with the specified ImagePlus. May
 * not work as expected if 'imp' is a CompositeImage
 * and this image is not.
   * 
   * @param {ImagePlus} imp - 
   * 
   * @author Created by ijdoc2js
   */
  setImage(imp) {
    throw "Not Implemented - ImagePlus.setImage(..)";
  };

  /**
   * Replaces the ImageProcessor with the one specified and updates the
 * display. With stacks, the ImageProcessor must be the same type as the
 * other images in the stack and it must be the same width and height.
   * 
   * @param {ImageProcessor} ip - 
   * 
   * @author Created by ijdoc2js
   */
  setProcessor(ip) {
    throw "Not Implemented - ImagePlus.setProcessor(..)";
  };

  /**
   * Replaces the ImageProcessor with the one specified and updates the display. With
 * stacks, the ImageProcessor must be the same type as other images in the stack and
 * it must be the same width and height. Set 'title' to null to leave the title unchanged.
   * 
   * @param {java.lang.String} title - 
   * @param {ImageProcessor} ip - 
   * 
   * @author Created by ijdoc2js
   */
  setProcessor(title, ip) {
    throw "Not Implemented - ImagePlus.setProcessor(..)";
  };

  /**
   * Replaces the image with the specified stack and updates the display.
   * 
   * @param {ImageStack} stack - 
   * 
   * @author Created by ijdoc2js
   */
  setStack(stack) {
    throw "Not Implemented - ImagePlus.setStack(..)";
  };

  /**
   * Replaces the image with the specified stack and updates
 * the display. Set 'title' to null to leave the title unchanged.
   * 
   * @param {java.lang.String} title - 
   * @param {ImageStack} newStack - 
   * 
   * @author Created by ijdoc2js
   */
  setStack(title, newStack) {
    throw "Not Implemented - ImagePlus.setStack(..)";
  };

  /**
   * 
   * @param {ImageStack} newStack - 
   * @param {int} channels - 
   * @param {int} slices - 
   * @param {int} frames - 
   * 
   * @author Created by ijdoc2js
   */
  setStack(newStack, channels, slices, frames) {
    throw "Not Implemented - ImagePlus.setStack(..)";
  };

  /**
   * Saves this image's FileInfo so it can be later
 * retieved using getOriginalFileInfo().
   * 
   * @param {FileInfo} fi - 
   * 
   * @author Created by ijdoc2js
   */
  setFileInfo(fi) {
    throw "Not Implemented - ImagePlus.setFileInfo(..)";
  };

  /**
   * Returns the ImageWindow that is being used to display
 * this image. Returns null if show() has not be called
 * or the ImageWindow has been closed.
   * 
   * @return ImageWindow
   * 
   * @author Created by ijdoc2js
   */
  getWindow() {
    throw "Not Implemented - ImagePlus.getWindow(..)";
  };

  /**
   * Returns true if this image is currently being displayed in a window.
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  isVisible() {
    throw "Not Implemented - ImagePlus.isVisible(..)";
  };

  /**
   * This method should only be called from an ImageWindow.
   * 
   * @param {ImageWindow} win - 
   * 
   * @author Created by ijdoc2js
   */
  setWindow(win) {
    throw "Not Implemented - ImagePlus.setWindow(..)";
  };

  /**
   * Returns the ImageCanvas being used to
 * display this image, or null.
   * 
   * @return ImageCanvas
   * 
   * @author Created by ijdoc2js
   */
  getCanvas() {
    throw "Not Implemented - ImagePlus.getCanvas(..)";
  };

  /**
   * Sets current foreground color.
   * 
   * @param {java.awt.Color} c - 
   * 
   * @author Created by ijdoc2js
   */
  setColor(c) {
    throw "Not Implemented - ImagePlus.setColor(..)";
  };

  /**
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  isProcessor() {
    throw "Not Implemented - ImagePlus.isProcessor(..)";
  };

  /**
   * Returns a reference to the current ImageProcessor. If there
 * is no ImageProcessor, it creates one. Returns null if this
 * ImagePlus contains no ImageProcessor and no AWT Image.
 * Sets the line width to the current line width and sets the
 * calibration table if the image is density calibrated.
   * 
   * @return ImageProcessor
   * 
   * @author Created by ijdoc2js
   */
  getProcessor() {
    throw "Not Implemented - ImagePlus.getProcessor(..)";
  };

  /**
   * Frees RAM by setting the snapshot (undo) buffer in
 * the current ImageProcessor to null.
   * 
   * 
   * @author Created by ijdoc2js
   */
  trimProcessor() {
    throw "Not Implemented - ImagePlus.trimProcessor(..)";
  };

  /**
   * For images with irregular ROIs, returns a byte mask, otherwise, returns
 * null. Mask pixels have a non-zero value.and the dimensions of the
 * mask are equal to the width and height of the ROI.
   * 
   * @return ImageProcessor
   * 
   * @author Created by ijdoc2js
   */
  getMask() {
    throw "Not Implemented - ImagePlus.getMask(..)";
  };

  /**
   * Returns an 8-bit binary (foreground=255, background=0)
 * ROI or overlay mask that has the same dimensions
 * as this image. Creates an ROI mask If the image has both
 * both an ROI and an overlay. Set the threshold of the mask to 255.
   * 
   * @return ByteProcessor
   * 
   * @author Created by ijdoc2js
   */
  createRoiMask() {
    throw "Not Implemented - ImagePlus.createRoiMask(..)";
  };

  /**
   * Returns an 8-bit binary threshold mask
 * (foreground=255, background=0)
 * that has the same dimensions as this image.
 * The threshold of the mask is set to 255.
   * 
   * @return ByteProcessor
   * 
   * @author Created by ijdoc2js
   */
  createThresholdMask() {
    throw "Not Implemented - ImagePlus.createThresholdMask(..)";
  };

  /**
   * Get calibrated statistics for this image or ROI, including
 * histogram, area, mean, min and max, standard
 * deviation and mode.
 * This code demonstrates how to get the area, mean
 * max and median of the current image or selection:
 * <pre> imp = IJ.getImage();
 * stats = imp.getStatistics();
 * IJ.log("Area: "+stats.area);
 * IJ.log("Mean: "+stats.mean);
 * IJ.log("Max: "+stats.max);
 * </pre>
   * 
   * @return ImageStatistics
   * 
   * @author Created by ijdoc2js
   */
  getStatistics() {
    throw "Not Implemented - ImagePlus.getStatistics(..)";
  };

  /**
   * This method returns complete calibrated statistics for this
 * image or ROI (with "Limit to threshold"), but it is up to 70 times
 * slower than getStatistics().
   * 
   * @return ImageStatistics
   * 
   * @author Created by ijdoc2js
   */
  getAllStatistics() {
    throw "Not Implemented - ImagePlus.getAllStatistics(..)";
  };

  /**
   * 
   * @return ImageStatistics
   * 
   * @author Created by ijdoc2js
   */
  getRawStatistics() {
    throw "Not Implemented - ImagePlus.getRawStatistics(..)";
  };

  /**
   * Returns an ImageStatistics object generated using the
 * specified measurement options.
   * 
   * @param {int} mOptions - 
   * @return ImageStatistics
   * 
   * @author Created by ijdoc2js
   */
  getStatistics(mOptions) {
    throw "Not Implemented - ImagePlus.getStatistics(..)";
  };

  /**
   * Returns an ImageStatistics object generated using the
 * specified measurement options and histogram bin count.
   * 
   * @param {int} mOptions - 
   * @param {int} nBins - 
   * @return ImageStatistics
   * 
   * @author Created by ijdoc2js
   */
  getStatistics(mOptions, nBins) {
    throw "Not Implemented - ImagePlus.getStatistics(..)";
  };

  /**
   * Returns an ImageStatistics object generated using the
 * specified measurement options, histogram bin count
 * and histogram range.
   * 
   * @param {int} mOptions - 
   * @param {int} nBins - 
   * @param {double} histMin - 
   * @param {double} histMax - 
   * @return ImageStatistics
   * 
   * @author Created by ijdoc2js
   */
  getStatistics(mOptions, nBins, histMin, histMax) {
    throw "Not Implemented - ImagePlus.getStatistics(..)";
  };

  /**
   * Returns the image name.
   * 
   * @return java.lang.String
   * 
   * @author Created by ijdoc2js
   */
  getTitle() {
    throw "Not Implemented - ImagePlus.getTitle(..)";
  };

  /**
   * If the image title is a file name, returns the name
   * without the extension and with spaces removed,
   * otherwise returns the title shortened to the first space.
   * 
   * @return java.lang.String
   * 
   * @author Created by ijdoc2js
   */
  getShortTitle() {
    throw "Not Implemented - ImagePlus.getShortTitle(..)";
  };

  /**
   * Sets the image name.
   * 
   * @param {java.lang.String} title - 
   * 
   * @author Created by ijdoc2js
   */
  setTitle(title) {
    throw "Not Implemented - ImagePlus.setTitle(..)";
  };

  /**
   * Returns the width of this image in pixels.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getWidth() {
    throw "Not Implemented - ImagePlus.getWidth(..)";
  };

  /**
   * Returns the height of this image in pixels.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getHeight() {
    throw "Not Implemented - ImagePlus.getHeight(..)";
  };

  /**
   * Returns the size of this image in bytes.
   * 
   * @return double
   * 
   * @author Created by ijdoc2js
   */
  getSizeInBytes() {
    throw "Not Implemented - ImagePlus.getSizeInBytes(..)";
  };

  /**
   * If this is a stack, returns the number of slices, else returns 1.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getStackSize() {
    throw "Not Implemented - ImagePlus.getStackSize(..)";
  };

  /**
   * If this is a stack, returns the actual number of images in the stack, else returns 1.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getImageStackSize() {
    throw "Not Implemented - ImagePlus.getImageStackSize(..)";
  };

  /**
   * Sets the 3rd, 4th and 5th dimensions, where
 * <code>nChannels</code>*<code>nSlices</code>*<code>nFrames</code>
 * must be equal to the stack size.
   * 
   * @param {int} nChannels - 
   * @param {int} nSlices - 
   * @param {int} nFrames - 
   * 
   * @author Created by ijdoc2js
   */
  setDimensions(nChannels, nSlices, nFrames) {
    throw "Not Implemented - ImagePlus.setDimensions(..)";
  };

  /**
   * Returns 'true' if this image is a hyperstack.
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  isHyperStack() {
    throw "Not Implemented - ImagePlus.isHyperStack(..)";
  };

  /**
   * Returns the number of dimensions (2, 3, 4 or 5).
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getNDimensions() {
    throw "Not Implemented - ImagePlus.getNDimensions(..)";
  };

  /**
   * Returns 'true' if this is a hyperstack currently being displayed in a StackWindow.
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  isDisplayedHyperStack() {
    throw "Not Implemented - ImagePlus.isDisplayedHyperStack(..)";
  };

  /**
   * Returns the number of channels.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getNChannels() {
    throw "Not Implemented - ImagePlus.getNChannels(..)";
  };

  /**
   * Returns the image depth (number of z-slices).
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getNSlices() {
    throw "Not Implemented - ImagePlus.getNSlices(..)";
  };

  /**
   * Returns the number of frames (time-points).
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getNFrames() {
    throw "Not Implemented - ImagePlus.getNFrames(..)";
  };

  /**
   * Returns the dimensions of this image (width, height, nChannels,
 * nSlices, nFrames) as a 5 element int array.
   * 
   * @return int[]
   * 
   * @author Created by ijdoc2js
   */
  getDimensions() {
    throw "Not Implemented - ImagePlus.getDimensions(..)";
  };

  /**
   * 
   * @param {boolean} varify - 
   * @return int[]
   * 
   * @author Created by ijdoc2js
   */
  getDimensions(varify) {
    throw "Not Implemented - ImagePlus.getDimensions(..)";
  };

  /**
   * Returns the current image type (ImagePlus.GRAY8, ImagePlus.GRAY16,
 * ImagePlus.GRAY32, ImagePlus.COLOR_256 or ImagePlus.COLOR_RGB).
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getType() {
    throw "Not Implemented - ImagePlus.getType(..)";
  };

  /**
   * Returns the bit depth, 8, 16, 24 (RGB) or 32, or 0 if the bit depth
 * is unknown. RGB images actually use 32 bits per pixel.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getBitDepth() {
    throw "Not Implemented - ImagePlus.getBitDepth(..)";
  };

  /**
   * Returns the number of bytes per pixel.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getBytesPerPixel() {
    throw "Not Implemented - ImagePlus.getBytesPerPixel(..)";
  };

  /**
   * 
   * 
   * @author Created by ijdoc2js
   */
  setTypeToColor256() {
    throw "Not Implemented - ImagePlus.setTypeToColor256(..)";
  };

  /**
   * Returns the string value from the "Info" property string
 * associated with 'key', or null if the key is not found.
 * Works with DICOM tags and Bio-Formats metadata.
   * 
   * @param {java.lang.String} key - 
   * @return java.lang.String
   * 
   * @author Created by ijdoc2js
   */
  getStringProperty(key) {
    throw "Not Implemented - ImagePlus.getStringProperty(..)";
  };

  /**
   * Returns the numeric value from the "Info" property string
 * associated with 'key', or NaN if the key is not found or the
 * value associated with the key is not numeric. Works with
 * DICOM tags and Bio-Formats metadata.
   * 
   * @param {java.lang.String} key - 
   * @return double
   * 
   * @author Created by ijdoc2js
   */
  getNumericProperty(key) {
    throw "Not Implemented - ImagePlus.getNumericProperty(..)";
  };

  /**
   * <span class="deprecatedLabel">Deprecated.</span>&nbsp;
   * 
   * @deprecated .</span>&nbsp;
   * @param {java.lang.String} key - 
   * @return java.lang.String
   * 
   * @author Created by ijdoc2js
   */
  getProp(key) {
    throw "Not Implemented - ImagePlus.getProp(..)";
  };

  /**
   * Returns the "Info" property string, or null if it is not found.
   * 
   * @return java.lang.String
   * 
   * @author Created by ijdoc2js
   */
  getInfoProperty() {
    throw "Not Implemented - ImagePlus.getInfoProperty(..)";
  };

  /**
   * Returns the property associated with 'key', or null if it is not found.
   * 
   * @param {java.lang.String} key - 
   * @return java.lang.Object
   * 
   * @author Created by ijdoc2js
   */
  getProperty(key) {
    throw "Not Implemented - ImagePlus.getProperty(..)";
  };

  /**
   * Adds a key-value pair to this image's properties. The key
 * is removed from the properties table if value is null.
   * 
   * @param {java.lang.String} key - 
   * @param {java.lang.Object} value - 
   * 
   * @author Created by ijdoc2js
   */
  setProperty(key, value) {
    throw "Not Implemented - ImagePlus.setProperty(..)";
  };

  /**
   * Returns this image's Properties. May return null.
   * 
   * @return java.util.Properties
   * 
   * @author Created by ijdoc2js
   */
  getProperties() {
    throw "Not Implemented - ImagePlus.getProperties(..)";
  };

  /**
   * Creates a LookUpTable object that corresponds to this image.
   * 
   * @return LookUpTable
   * 
   * @author Created by ijdoc2js
   */
  createLut() {
    throw "Not Implemented - ImagePlus.createLut(..)";
  };

  /**
   * Returns true is this image uses an inverting LUT that
 * displays zero as white and 255 as black.
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  isInvertedLut() {
    throw "Not Implemented - ImagePlus.isInvertedLut(..)";
  };

  /**
   * Returns the pixel value at (x,y) as a 4 element array. Grayscale values
 * are retuned in the first element. RGB values are returned in the first
 * 3 elements. For indexed color images, the RGB values are returned in the
 * first 3 three elements and the index (0-255) is returned in the last.
   * 
   * @param {int} x - 
   * @param {int} y - 
   * @return int[]
   * 
   * @author Created by ijdoc2js
   */
  getPixel(x, y) {
    throw "Not Implemented - ImagePlus.getPixel(..)";
  };

  /**
   * Returns an empty image stack that has the same
 * width, height and color table as this image.
   * 
   * @return ImageStack
   * 
   * @author Created by ijdoc2js
   */
  createEmptyStack() {
    throw "Not Implemented - ImagePlus.createEmptyStack(..)";
  };

  /**
   * Returns the image stack. The stack may have only
 * one slice. After adding or removing slices, call
 * <code>setStack()</code> to update the image and
 * the window that is displaying it.
   * 
   * @return ImageStack
   * 
   * @author Created by ijdoc2js
   */
  getStack() {
    throw "Not Implemented - ImagePlus.getStack(..)";
  };

  /**
   * Returns the base image stack.
   * 
   * @return ImageStack
   * 
   * @author Created by ijdoc2js
   */
  getImageStack() {
    throw "Not Implemented - ImagePlus.getImageStack(..)";
  };

  /**
   * Returns the current stack index (one-based) or 1 if this is a single image.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getCurrentSlice() {
    throw "Not Implemented - ImagePlus.getCurrentSlice(..)";
  };

  /**
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getChannel() {
    throw "Not Implemented - ImagePlus.getChannel(..)";
  };

  /**
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getSlice() {
    throw "Not Implemented - ImagePlus.getSlice(..)";
  };

  /**
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getFrame() {
    throw "Not Implemented - ImagePlus.getFrame(..)";
  };

  /**
   * 
   * 
   * @author Created by ijdoc2js
   */
  killStack() {
    throw "Not Implemented - ImagePlus.killStack(..)";
  };

  /**
   * Sets the current hyperstack position and updates the display,
 * where 'channel', 'slice' and 'frame' are one-based indexes.
   * 
   * @param {int} channel - 
   * @param {int} slice - 
   * @param {int} frame - 
   * 
   * @author Created by ijdoc2js
   */
  setPosition(channel, slice, frame) {
    throw "Not Implemented - ImagePlus.setPosition(..)";
  };

  /**
   * Sets the current hyperstack position without updating the display,
 * where 'channel', 'slice' and 'frame' are one-based indexes.
   * 
   * @param {int} channel - 
   * @param {int} slice - 
   * @param {int} frame - 
   * 
   * @author Created by ijdoc2js
   */
  setPositionWithoutUpdate(channel, slice, frame) {
    throw "Not Implemented - ImagePlus.setPositionWithoutUpdate(..)";
  };

  /**
   * Sets the hyperstack channel position (one based).
   * 
   * @param {int} channel - 
   * 
   * @author Created by ijdoc2js
   */
  setC(channel) {
    throw "Not Implemented - ImagePlus.setC(..)";
  };

  /**
   * Sets the hyperstack slice position (one based).
   * 
   * @param {int} slice - 
   * 
   * @author Created by ijdoc2js
   */
  setZ(slice) {
    throw "Not Implemented - ImagePlus.setZ(..)";
  };

  /**
   * Sets the hyperstack frame position (one based).
   * 
   * @param {int} frame - 
   * 
   * @author Created by ijdoc2js
   */
  setT(frame) {
    throw "Not Implemented - ImagePlus.setT(..)";
  };

  /**
   * Returns the current hyperstack channel position.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getC() {
    throw "Not Implemented - ImagePlus.getC(..)";
  };

  /**
   * Returns the current hyperstack slice position.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getZ() {
    throw "Not Implemented - ImagePlus.getZ(..)";
  };

  /**
   * Returns the current hyperstack frame position.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getT() {
    throw "Not Implemented - ImagePlus.getT(..)";
  };

  /**
   * Returns that stack index (one-based) corresponding to the specified position.
   * 
   * @param {int} channel - 
   * @param {int} slice - 
   * @param {int} frame - 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getStackIndex(channel, slice, frame) {
    throw "Not Implemented - ImagePlus.getStackIndex(..)";
  };

  /**
   * 
   * 
   * @author Created by ijdoc2js
   */
  resetStack() {
    throw "Not Implemented - ImagePlus.resetStack(..)";
  };

  /**
   * Set the current hyperstack position based on the stack index 'n' (one-based).
   * 
   * @param {int} n - 
   * 
   * @author Created by ijdoc2js
   */
  setPosition(n) {
    throw "Not Implemented - ImagePlus.setPosition(..)";
  };

  /**
   * Converts the stack index 'n' (one-based) into a hyperstack position (channel, slice, frame).
   * 
   * @param {int} n - 
   * @return int[]
   * 
   * @author Created by ijdoc2js
   */
  convertIndexToPosition(n) {
    throw "Not Implemented - ImagePlus.convertIndexToPosition(..)";
  };

  /**
   * 
   * 
   * @param {int} n - 
   * 
   * @author Created by ijdoc2js
   */
  setSlice(n) {
    throw "Not Implemented - ImagePlus.setSlice(..)";
  };

  /**
   * Displays the specified stack image (1
   * 
   * 
   * @param {int} n - 
   * 
   * @author Created by ijdoc2js
   */
  setSliceWithoutUpdate(n) {
    throw "Not Implemented - ImagePlus.setSliceWithoutUpdate(..)";
  };

  /**
   * Returns the current selection, or null if there is no selection.
   * 
   * @return Roi
   * 
   * @author Created by ijdoc2js
   */
  getRoi() {
    throw "Not Implemented - ImagePlus.getRoi(..)";
  };

  /**
   * Assigns the specified ROI to this image and displays it. Any existing
 * ROI is deleted if <code>roi</code> is null or its width or height is zero.
   * 
   * @param {Roi} newRoi - 
   * 
   * @author Created by ijdoc2js
   */
  setRoi(newRoi) {
    throw "Not Implemented - ImagePlus.setRoi(..)";
  };

  /**
   * Assigns 'newRoi' to this image and displays it if 'updateDisplay' is true.
   * 
   * @param {Roi} newRoi - 
   * @param {boolean} updateDisplay - 
   * 
   * @author Created by ijdoc2js
   */
  setRoi(newRoi, updateDisplay) {
    throw "Not Implemented - ImagePlus.setRoi(..)";
  };

  /**
   * Creates a rectangular selection.
   * 
   * @param {int} x - 
   * @param {int} y - 
   * @param {int} width - 
   * @param {int} height - 
   * 
   * @author Created by ijdoc2js
   */
  setRoi(x, y, width, height) {
    throw "Not Implemented - ImagePlus.setRoi(..)";
  };

  /**
   * Creates a rectangular selection.
   * 
   * @param {java.awt.Rectangle} r - 
   * 
   * @author Created by ijdoc2js
   */
  setRoi(r) {
    throw "Not Implemented - ImagePlus.setRoi(..)";
  };

  /**
   * Starts the process of creating a new selection, where sx and sy are the
 * starting screen coordinates. The selection type is determined by which tool in
 * the tool bar is active. The user interactively sets the selection size and shape.
   * 
   * @param {int} sx - 
   * @param {int} sy - 
   * 
   * @author Created by ijdoc2js
   */
  createNewRoi(sx, sy) {
    throw "Not Implemented - ImagePlus.createNewRoi(..)";
  };

  /**
   * Deletes the current region of interest. Makes a copy of the ROI
 * so it can be recovered by Edit/Selection/Restore Selection.
   * 
   * 
   * @author Created by ijdoc2js
   */
  deleteRoi() {
    throw "Not Implemented - ImagePlus.deleteRoi(..)";
  };

  /**
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  okToDeleteRoi() {
    throw "Not Implemented - ImagePlus.okToDeleteRoi(..)";
  };

  /**
   * Deletes the current region of interest.
   * 
   * 
   * @author Created by ijdoc2js
   */
  killRoi() {
    throw "Not Implemented - ImagePlus.killRoi(..)";
  };

  /**
   * 
   * 
   * @author Created by ijdoc2js
   */
  saveRoi() {
    throw "Not Implemented - ImagePlus.saveRoi(..)";
  };

  /**
   * 
   * 
   * @author Created by ijdoc2js
   */
  restoreRoi() {
    throw "Not Implemented - ImagePlus.restoreRoi(..)";
  };

  /**
   * Implements the File/Revert command.
   * 
   * 
   * @author Created by ijdoc2js
   */
  revert() {
    throw "Not Implemented - ImagePlus.revert(..)";
  };

  /**
   * Returns a FileInfo object containing information, including the
 * pixel array, needed to save this image. Use getOriginalFileInfo()
 * to get a copy of the FileInfo object used to open the image.
   * 
   * @return FileInfo
   * 
   * @author Created by ijdoc2js
   */
  getFileInfo() {
    throw "Not Implemented - ImagePlus.getFileInfo(..)";
  };

  /**
   * Returns the FileInfo object that was used to open this image.
 * Returns null for images created using the File/New command.
   * 
   * @return FileInfo
   * 
   * @author Created by ijdoc2js
   */
  getOriginalFileInfo() {
    throw "Not Implemented - ImagePlus.getOriginalFileInfo(..)";
  };

  /**
   * Used by ImagePlus to monitor loading of images.
   * 
   * @param {java.awt.Image} img - 
   * @param {int} flags - 
   * @param {int} x - 
   * @param {int} y - 
   * @param {int} w - 
   * @param {int} h - 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  imageUpdate(img, flags, x, y, w, h) {
    throw "Not Implemented - ImagePlus.imageUpdate(..)";
  };

  /**
   * Sets the ImageProcessor, Roi, AWT Image and stack image
 * arrays to null. Does nothing if the image is locked.
   * 
   * 
   * @author Created by ijdoc2js
   */
  flush() {
    throw "Not Implemented - ImagePlus.flush(..)";
  };

  /**
   * 
   * @param {boolean} ignoreFlush - 
   * 
   * @author Created by ijdoc2js
   */
  setIgnoreFlush(ignoreFlush) {
    throw "Not Implemented - ImagePlus.setIgnoreFlush(..)";
  };

  /**
   * Returns a copy of this image or stack.
   * 
   * @return ImagePlus
   * 
   * @author Created by ijdoc2js
   */
  duplicate() {
    throw "Not Implemented - ImagePlus.duplicate(..)";
  };

  /**
   * Returns a copy this image or stack slice, cropped if there is an ROI.
   * 
   * @return ImagePlus
   * 
   * @author Created by ijdoc2js
   */
  crop() {
    throw "Not Implemented - ImagePlus.crop(..)";
  };

  /**
   * Returns a cropped copy this image or stack, where 'options'
 * can be "stack", "slice" or a range (e.g., "20-30").
   * 
   * @param {java.lang.String} options - 
   * @return ImagePlus
   * 
   * @author Created by ijdoc2js
   */
  crop(options) {
    throw "Not Implemented - ImagePlus.crop(..)";
  };

  /**
   * Returns a new ImagePlus with this image's attributes
 * (e.g. spatial scale), but no image.
   * 
   * @return ImagePlus
   * 
   * @author Created by ijdoc2js
   */
  createImagePlus() {
    throw "Not Implemented - ImagePlus.createImagePlus(..)";
  };

  /**
   * This method has been replaced by IJ.createHyperStack().
   * 
   * @param {java.lang.String} title - 
   * @param {int} channels - 
   * @param {int} slices - 
   * @param {int} frames - 
   * @param {int} bitDepth - 
   * @return ImagePlus
   * 
   * @author Created by ijdoc2js
   */
  createHyperStack(title, channels, slices, frames, bitDepth) {
    throw "Not Implemented - ImagePlus.createHyperStack(..)";
  };

  /**
   * Copies the calibration of the specified image to this image.
   * 
   * @param {ImagePlus} imp - 
   * 
   * @author Created by ijdoc2js
   */
  copyScale(imp) {
    throw "Not Implemented - ImagePlus.copyScale(..)";
  };

  /**
   * Copies attributes (name, ID, calibration, path, plot) of the specified image to this image.
   * 
   * @param {ImagePlus} imp - 
   * 
   * @author Created by ijdoc2js
   */
  copyAttributes(imp) {
    throw "Not Implemented - ImagePlus.copyAttributes(..)";
  };

  /**
   * Calls System.currentTimeMillis() to save the current
 * time so it can be retrieved later using getStartTime()
 * to calculate the elapsed time of an operation.
   * 
   * 
   * @author Created by ijdoc2js
   */
  startTiming() {
    throw "Not Implemented - ImagePlus.startTiming(..)";
  };

  /**
   * Returns the time in milliseconds when
 * startTiming() was last called.
   * 
   * @return long
   * 
   * @author Created by ijdoc2js
   */
  getStartTime() {
    throw "Not Implemented - ImagePlus.getStartTime(..)";
  };

  /**
   * Returns this image's calibration.
   * 
   * @return Calibration
   * 
   * @author Created by ijdoc2js
   */
  getCalibration() {
    throw "Not Implemented - ImagePlus.getCalibration(..)";
  };

  /**
   * Sets this image's calibration.
   * 
   * @param {Calibration} cal - 
   * 
   * @author Created by ijdoc2js
   */
  setCalibration(cal) {
    throw "Not Implemented - ImagePlus.setCalibration(..)";
  };

  /**
   * Sets the system-wide calibration.
   * 
   * @param {Calibration} global - 
   * 
   * @author Created by ijdoc2js
   */
  setGlobalCalibration(global) {
    throw "Not Implemented - ImagePlus.setGlobalCalibration(..)";
  };

  /**
   * Returns the system-wide calibration, or null.
   * 
   * @return Calibration
   * 
   * @author Created by ijdoc2js
   */
  getGlobalCalibration() {
    throw "Not Implemented - ImagePlus.getGlobalCalibration(..)";
  };

  /**
   * This is a version of getGlobalCalibration() that can be called from a static get context.
   * 
   * @return Calibration
   * 
   * @author Created by ijdoc2js
   */
  getStaticGlobalCalibration() {
    throw "Not Implemented - ImagePlus.getStaticGlobalCalibration(..)";
  };

  /**
   * Returns this image's local calibration, ignoring
 * the "Global" calibration flag.
   * 
   * @return Calibration
   * 
   * @author Created by ijdoc2js
   */
  getLocalCalibration() {
    throw "Not Implemented - ImagePlus.getLocalCalibration(..)";
  };

  /**
   * 
   * @param {boolean} ignoreGlobalCalibration - 
   * 
   * @author Created by ijdoc2js
   */
  setIgnoreGlobalCalibration(ignoreGlobalCalibration) {
    throw "Not Implemented - ImagePlus.setIgnoreGlobalCalibration(..)";
  };

  /**
   * Displays the cursor coordinates and pixel value in the status bar.
 * Called by ImageCanvas when the mouse moves.
   * 
   * @param {int} x - 
   * @param {int} y - 
   * 
   * @author Created by ijdoc2js
   */
  mouseMoved(x, y) {
    throw "Not Implemented - ImagePlus.mouseMoved(..)";
  };

  /**
   * Redisplays the (x,y) coordinates and pixel value (which may
 * have changed) in the status bar. Called by the Next Slice and
 * Previous Slice commands to update the z-coordinate and pixel value.
   * 
   * 
   * @author Created by ijdoc2js
   */
  updateStatusbarValue() {
    throw "Not Implemented - ImagePlus.updateStatusbarValue(..)";
  };

  /**
   * Converts the current cursor location to a string.
   * 
   * @param {int} x - 
   * @param {int} y - 
   * @return java.lang.String
   * 
   * @author Created by ijdoc2js
   */
  getLocationAsString(x, y) {
    throw "Not Implemented - ImagePlus.getLocationAsString(..)";
  };

  /**
   * Copies the contents of the current selection, or the entire
 * image if there is no selection, to the internal clipboard.
   * 
   * 
   * @author Created by ijdoc2js
   */
  copy() {
    throw "Not Implemented - ImagePlus.copy(..)";
  };

  /**
   * Copies the contents of the current selection to the internal clipboard.
 * Copies the entire image if there is no selection. Also clears
 * the selection if <code>cut</code> is true.
   * 
   * @param {boolean} cut - 
   * 
   * @author Created by ijdoc2js
   */
  copy(cut) {
    throw "Not Implemented - ImagePlus.copy(..)";
  };

  /**
   * Inserts the contents of the internal clipboard into the active image. If there
 * is a selection the same size as the image on the clipboard, the image is inserted
 * into that selection, otherwise the selection is inserted into the center of the image.
   * 
   * 
   * @author Created by ijdoc2js
   */
  paste() {
    throw "Not Implemented - ImagePlus.paste(..)";
  };

  /**
   * Returns the internal clipboard or null if the internal clipboard is empty.
   * 
   * @return ImagePlus
   * 
   * @author Created by ijdoc2js
   */
  getClipboard() {
    throw "Not Implemented - ImagePlus.getClipboard(..)";
  };

  /**
   * Clears the internal clipboard.
   * 
   * 
   * @author Created by ijdoc2js
   */
  resetClipboard() {
    throw "Not Implemented - ImagePlus.resetClipboard(..)";
  };

  /**
   * 
   * @param {ImageListener} listener - 
   * 
   * @author Created by ijdoc2js
   */
  addImageListener(listener) {
    throw "Not Implemented - ImagePlus.addImageListener(..)";
  };

  /**
   * 
   * @param {ImageListener} listener - 
   * 
   * @author Created by ijdoc2js
   */
  removeImageListener(listener) {
    throw "Not Implemented - ImagePlus.removeImageListener(..)";
  };

  /**
   * For debug purposes, writes all registered (and possibly,
 * forgotten) ImageListeners to the log window
   * 
   * 
   * @author Created by ijdoc2js
   */
  logImageListeners() {
    throw "Not Implemented - ImagePlus.logImageListeners(..)";
  };

  /**
   * 
   * @param {boolean} openAsHyperStack - 
   * 
   * @author Created by ijdoc2js
   */
  setOpenAsHyperStack(openAsHyperStack) {
    throw "Not Implemented - ImagePlus.setOpenAsHyperStack(..)";
  };

  /**
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  getOpenAsHyperStack() {
    throw "Not Implemented - ImagePlus.getOpenAsHyperStack(..)";
  };

  /**
   * Returns true if this is a CompositeImage.
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  isComposite() {
    throw "Not Implemented - ImagePlus.isComposite(..)";
  };

  /**
   * Returns the display mode (IJ.COMPOSITE, IJ.COLOR
 * or IJ.GRAYSCALE) if this is a CompositeImage, otherwise returns -1.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getCompositeMode() {
    throw "Not Implemented - ImagePlus.getCompositeMode(..)";
  };

  /**
   * Sets the display range of the current channel. With non-composite
 * images it is identical to ip.setMinAndMax(min, max).
   * 
   * @param {double} min - 
   * @param {double} max - 
   * 
   * @author Created by ijdoc2js
   */
  setDisplayRange(min, max) {
    throw "Not Implemented - ImagePlus.setDisplayRange(..)";
  };

  /**
   * 
   * @return double
   * 
   * @author Created by ijdoc2js
   */
  getDisplayRangeMin() {
    throw "Not Implemented - ImagePlus.getDisplayRangeMin(..)";
  };

  /**
   * 
   * @return double
   * 
   * @author Created by ijdoc2js
   */
  getDisplayRangeMax() {
    throw "Not Implemented - ImagePlus.getDisplayRangeMax(..)";
  };

  /**
   * Sets the display range of specified channels in an RGB image, where 4=red,
 * 2=green, 1=blue, 6=red+green, etc. With non-RGB images, this method is
 * identical to setDisplayRange(min, max). This method is used by the
 * Image/Adjust/Color Balance tool .
   * 
   * @param {double} min - 
   * @param {double} max - 
   * @param {int} channels - 
   * 
   * @author Created by ijdoc2js
   */
  setDisplayRange(min, max, channels) {
    throw "Not Implemented - ImagePlus.setDisplayRange(..)";
  };

  /**
   * 
   * 
   * @author Created by ijdoc2js
   */
  resetDisplayRange() {
    throw "Not Implemented - ImagePlus.resetDisplayRange(..)";
  };

  /**
   * Returns 'true' if this image is thresholded.
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  isThreshold() {
    throw "Not Implemented - ImagePlus.isThreshold(..)";
  };

  /**
   * Set the default 16-bit display range, where 'bitDepth' must be 0 (auto-scaling),
 * 8 (0-255), 10 (0-1023), 12 (0-4095, 14 (0-16383), 15 (0-32767) or 16 (0-65535).
   * 
   * @param {int} bitDepth - 
   * 
   * @author Created by ijdoc2js
   */
  setDefault16bitRange(bitDepth) {
    throw "Not Implemented - ImagePlus.setDefault16bitRange(..)";
  };

  /**
   * Returns the default 16-bit display range, 0 (auto-scaling), 8, 10, 12, 14, 15 or 16.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getDefault16bitRange() {
    throw "Not Implemented - ImagePlus.getDefault16bitRange(..)";
  };

  /**
   * 
   * @param {int} c - 
   * @param {int} z - 
   * @param {int} t - 
   * 
   * @author Created by ijdoc2js
   */
  updatePosition(c, z, t) {
    throw "Not Implemented - ImagePlus.updatePosition(..)";
  };

  /**
   * Returns a "flattened" version of this image, in RGB format.
   * 
   * @return ImagePlus
   * 
   * @author Created by ijdoc2js
   */
  flatten() {
    throw "Not Implemented - ImagePlus.flatten(..)";
  };

  /**
   * Flattens all slices of this stack or HyperStack.<br>
   * 
   * 
   * @author Created by ijdoc2js
   */
  flattenStack() {
    throw "Not Implemented - ImagePlus.flattenStack(..)";
  };

  /**
   * Assigns a LUT (lookup table) to this image.
   * 
   * @param {LUT} lut - 
   * 
   * @author Created by ijdoc2js
   */
  setLut(lut) {
    throw "Not Implemented - ImagePlus.setLut(..)";
  };

  /**
   * Installs a list of ROIs that will be drawn on this image as a non-destructive overlay.
   * 
   * @param {Overlay} overlay - 
   * 
   * @author Created by ijdoc2js
   */
  setOverlay(overlay) {
    throw "Not Implemented - ImagePlus.setOverlay(..)";
  };

  /**
   * Creates an Overlay from the specified Shape, Color
 * and BasicStroke, and assigns it to this image.
   * 
   * @param {java.awt.Shape} shape - 
   * @param {java.awt.Color} color - 
   * @param {java.awt.BasicStroke} stroke - 
   * 
   * @author Created by ijdoc2js
   */
  setOverlay(shape, color, stroke) {
    throw "Not Implemented - ImagePlus.setOverlay(..)";
  };

  /**
   * Creates an Overlay from the specified ROI, and assigns it to this image.
   * 
   * @param {Roi} roi - 
   * @param {java.awt.Color} strokeColor - 
   * @param {int} strokeWidth - 
   * @param {java.awt.Color} fillColor - 
   * 
   * @author Created by ijdoc2js
   */
  setOverlay(roi, strokeColor, strokeWidth, fillColor) {
    throw "Not Implemented - ImagePlus.setOverlay(..)";
  };

  /**
   * Returns the current overly, or null if this image does not have an overlay.
   * 
   * @return Overlay
   * 
   * @author Created by ijdoc2js
   */
  getOverlay() {
    throw "Not Implemented - ImagePlus.getOverlay(..)";
  };

  /**
   * 
   * @param {boolean} hide - 
   * 
   * @author Created by ijdoc2js
   */
  setHideOverlay(hide) {
    throw "Not Implemented - ImagePlus.setHideOverlay(..)";
  };

  /**
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  getHideOverlay() {
    throw "Not Implemented - ImagePlus.getHideOverlay(..)";
  };

  /**
   * Enable/disable use of antialiasing by the flatten() method.
   * 
   * @param {boolean} antialiasRendering - 
   * 
   * @author Created by ijdoc2js
   */
  setAntialiasRendering(antialiasRendering) {
    throw "Not Implemented - ImagePlus.setAntialiasRendering(..)";
  };

  /**
   * Returns a shallow copy of this ImagePlus.
   * 
   * @return java.lang.Object
   * 
   * @author Created by ijdoc2js
   */
  clone() {
    throw "Not Implemented - ImagePlus.clone(..)";
  };

  /**
   * Plots a 256 bin histogram of this image and returns the PlotWindow.
   * 
   * @return PlotWindow
   * 
   * @author Created by ijdoc2js
   */
  plotHistogram() {
    throw "Not Implemented - ImagePlus.plotHistogram(..)";
  };

  /**
   * Plots a histogram of this image using the specified
 * number of bins and returns the PlotWindow.
   * 
   * @param {int} bins - 
   * @return PlotWindow
   * 
   * @author Created by ijdoc2js
   */
  plotHistogram(bins) {
    throw "Not Implemented - ImagePlus.plotHistogram(..)";
  };

  /**
   * 
   * @return java.lang.String
   * 
   * @author Created by ijdoc2js
   */
  toString() {
    throw "Not Implemented - ImagePlus.toString(..)";
  };

  /**
   * 
   * @param {boolean} b - 
   * 
   * @author Created by ijdoc2js
   */
  setIJMenuBar(b) {
    throw "Not Implemented - ImagePlus.setIJMenuBar(..)";
  };

  /**
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  setIJMenuBar() {
    throw "Not Implemented - ImagePlus.setIJMenuBar(..)";
  };

  /**
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  isStack() {
    throw "Not Implemented - ImagePlus.isStack(..)";
  };

  /**
   * 
   * @param {Plot} plot - 
   * 
   * @author Created by ijdoc2js
   */
  setPlot(plot) {
    throw "Not Implemented - ImagePlus.setPlot(..)";
  };

  /**
   * 
   * @return Plot
   * 
   * @author Created by ijdoc2js
   */
  getPlot() {
    throw "Not Implemented - ImagePlus.getPlot(..)";
  };

} // End of class ImagePlus
