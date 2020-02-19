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
   * Constructs an uninitialized ImagePlus.
   * @constructor
   * 
   * 
   * @author Created by ijdoc2js
   */
  constructor () {
    throw new NotImplementedException("ImagePlus.ImagePlus(..)");
  };

  /**
   * Constructs an ImagePlus from an Image or BufferedImage. The first
 * argument will be used as the title of the window that displays the image.
 * Throws an IllegalStateException if an error occurs while loading the image.
   * @constructor
   * 
   * @param {java.lang.String} title - 
   * @param {java.awt.Image} image - 
   * 
   * @author Created by ijdoc2js
   */
  constructor (title, image) {
    throw new NotImplementedException("ImagePlus.ImagePlus(..)");
  };

  /**
   * Constructs an ImagePlus from an ImageProcessor.
   * @constructor
   * 
   * @param {java.lang.String} title - 
   * @param {ImageProcessor} ip - 
   * 
   * @author Created by ijdoc2js
   */
  constructor (title, ip) {
    throw new NotImplementedException("ImagePlus.ImagePlus(..)");
  };

  /**
   * Constructs an ImagePlus from a TIFF, BMP, DICOM, FITS,
   * PGM, GIF or JPRG specified by a path or from a TIFF, DICOM,
   * GIF or JPEG specified by a URL.
   * @constructor
   * 
   * @param {java.lang.String} pathOrURL - 
   * 
   * @author Created by ijdoc2js
   */
  constructor (pathOrURL) {
    throw new NotImplementedException("ImagePlus.ImagePlus(..)");
  };

  /**
   * Constructs an ImagePlus from a stack.
   * @constructor
   * 
   * @param {java.lang.String} title - 
   * @param {ImageStack} stack - 
   * 
   * @author Created by ijdoc2js
   */
  constructor (title, stack) {
    throw new NotImplementedException("ImagePlus.ImagePlus(..)");
  };

  /**
   * 8-bit grayscale (unsigned)
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static GRAY8 = 0;

  /**
   * 16-bit grayscale (unsigned)
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static GRAY16 = 0;

  /**
   * 32-bit floating-point grayscale
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static GRAY32 = 0;

  /**
   * 8-bit indexed color
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static COLOR_256 = 0;

  /**
   * 32-bit RGB color
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static COLOR_RGB = 0;

  /**
   * Title of image used by Flatten command
   * 
   * @const {java.lang.String}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static flattenTitle = 0;

  /**
   * True if any changes have been made to this image.
   * 
   * @const {boolean}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static changes = 0;

  /**
   * 
   * @const {boolean}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static setIJMenuBar = 0;

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
    throw new NotImplementedException("ImagePlus.lock(..)");
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
    throw new NotImplementedException("ImagePlus.lockSilently(..)");
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
    throw new NotImplementedException("ImagePlus.unlock(..)");
  };

  /**
   * Returns 'true' if the image is locked.
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  isLocked() {
    throw new NotImplementedException("ImagePlus.isLocked(..)");
  };

  /**
   * Returns 'true' if the image was locked on another thread.
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  isLockedByAnotherThread() {
    throw new NotImplementedException("ImagePlus.isLockedByAnotherThread(..)");
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
    throw new NotImplementedException("ImagePlus.draw(..)");
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
    throw new NotImplementedException("ImagePlus.draw(..)");
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
    throw new NotImplementedException("ImagePlus.updateAndDraw(..)");
  };

  /**
   * Use to update the image when the underlying virtual stack changes.
   * 
   * 
   * @author Created by ijdoc2js
   */
  updateVirtualSlice() {
    throw new NotImplementedException("ImagePlus.updateVirtualSlice(..)");
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
    throw new NotImplementedException("ImagePlus.setDisplayMode(..)");
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
    throw new NotImplementedException("ImagePlus.getDisplayMode(..)");
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
    throw new NotImplementedException("ImagePlus.setActiveChannels(..)");
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
    throw new NotImplementedException("ImagePlus.updateChannelAndDraw(..)");
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
    throw new NotImplementedException("ImagePlus.getChannelProcessor(..)");
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
    throw new NotImplementedException("ImagePlus.getLuts(..)");
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
    throw new NotImplementedException("ImagePlus.repaintWindow(..)");
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
    throw new NotImplementedException("ImagePlus.updateAndRepaintWindow(..)");
  };

  /**
   * ImageCanvas.paint() calls this method when the
 * ImageProcessor has generated a new image.
   * 
   * 
   * @author Created by ijdoc2js
   */
  updateImage() {
    throw new NotImplementedException("ImagePlus.updateImage(..)");
  };

  /**
   * Closes the window, if any, that is displaying this image.
   * 
   * 
   * @author Created by ijdoc2js
   */
  hide() {
    throw new NotImplementedException("ImagePlus.hide(..)");
  };

  /**
   * Closes this image and sets the ImageProcessor to null. To avoid the
 * "Save changes?" dialog, first set the public 'changes' variable to false.
   * 
   * 
   * @author Created by ijdoc2js
   */
  close() {
    throw new NotImplementedException("ImagePlus.close(..)");
  };

  /**
   * Opens a window to display this image and clears the status bar.
   * 
   * 
   * @author Created by ijdoc2js
   */
  show() {
    throw new NotImplementedException("ImagePlus.show(..)");
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
    throw new NotImplementedException("ImagePlus.show(..)");
  };

  /**
   * Called by ImageWindow.windowActivated().
   * 
   * 
   * @author Created by ijdoc2js
   */
  setActivated() {
    throw new NotImplementedException("ImagePlus.setActivated(..)");
  };

  /**
   * Returns this image as a AWT image.
   * 
   * @return java.awt.Image
   * 
   * @author Created by ijdoc2js
   */
  getImage() {
    throw new NotImplementedException("ImagePlus.getImage(..)");
  };

  /**
   * Returns a copy of this image as an 8-bit or RGB BufferedImage.
   * 
   * @return java.awt.image.BufferedImage
   * 
   * @author Created by ijdoc2js
   */
  getBufferedImage() {
    throw new NotImplementedException("ImagePlus.getBufferedImage(..)");
  };

  /**
   * Returns this image's unique numeric ID.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getID() {
    throw new NotImplementedException("ImagePlus.getID(..)");
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
    throw new NotImplementedException("ImagePlus.setImage(..)");
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
    throw new NotImplementedException("ImagePlus.setImage(..)");
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
    throw new NotImplementedException("ImagePlus.setProcessor(..)");
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
    throw new NotImplementedException("ImagePlus.setProcessor(..)");
  };

  /**
   * Replaces the image with the specified stack and updates the display.
   * 
   * @param {ImageStack} stack - 
   * 
   * @author Created by ijdoc2js
   */
  setStack(stack) {
    throw new NotImplementedException("ImagePlus.setStack(..)");
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
    throw new NotImplementedException("ImagePlus.setStack(..)");
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
    throw new NotImplementedException("ImagePlus.setStack(..)");
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
    throw new NotImplementedException("ImagePlus.setFileInfo(..)");
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
    throw new NotImplementedException("ImagePlus.getWindow(..)");
  };

  /**
   * Returns true if this image is currently being displayed in a window.
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  isVisible() {
    throw new NotImplementedException("ImagePlus.isVisible(..)");
  };

  /**
   * This method should only be called from an ImageWindow.
   * 
   * @param {ImageWindow} win - 
   * 
   * @author Created by ijdoc2js
   */
  setWindow(win) {
    throw new NotImplementedException("ImagePlus.setWindow(..)");
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
    throw new NotImplementedException("ImagePlus.getCanvas(..)");
  };

  /**
   * Sets current foreground color.
   * 
   * @param {java.awt.Color} c - 
   * 
   * @author Created by ijdoc2js
   */
  setColor(c) {
    throw new NotImplementedException("ImagePlus.setColor(..)");
  };

  /**
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  isProcessor() {
    throw new NotImplementedException("ImagePlus.isProcessor(..)");
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
    throw new NotImplementedException("ImagePlus.getProcessor(..)");
  };

  /**
   * Frees RAM by setting the snapshot (undo) buffer in
 * the current ImageProcessor to null.
   * 
   * 
   * @author Created by ijdoc2js
   */
  trimProcessor() {
    throw new NotImplementedException("ImagePlus.trimProcessor(..)");
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
    throw new NotImplementedException("ImagePlus.getMask(..)");
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
    throw new NotImplementedException("ImagePlus.createRoiMask(..)");
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
    throw new NotImplementedException("ImagePlus.createThresholdMask(..)");
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
    throw new NotImplementedException("ImagePlus.getStatistics(..)");
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
    throw new NotImplementedException("ImagePlus.getAllStatistics(..)");
  };

  /**
   * 
   * @return ImageStatistics
   * 
   * @author Created by ijdoc2js
   */
  getRawStatistics() {
    throw new NotImplementedException("ImagePlus.getRawStatistics(..)");
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
    throw new NotImplementedException("ImagePlus.getStatistics(..)");
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
    throw new NotImplementedException("ImagePlus.getStatistics(..)");
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
    throw new NotImplementedException("ImagePlus.getStatistics(..)");
  };

  /**
   * Returns the image name.
   * 
   * @return java.lang.String
   * 
   * @author Created by ijdoc2js
   */
  getTitle() {
    throw new NotImplementedException("ImagePlus.getTitle(..)");
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
    throw new NotImplementedException("ImagePlus.getShortTitle(..)");
  };

  /**
   * Sets the image name.
   * 
   * @param {java.lang.String} title - 
   * 
   * @author Created by ijdoc2js
   */
  setTitle(title) {
    throw new NotImplementedException("ImagePlus.setTitle(..)");
  };

  /**
   * Returns the width of this image in pixels.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getWidth() {
    throw new NotImplementedException("ImagePlus.getWidth(..)");
  };

  /**
   * Returns the height of this image in pixels.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getHeight() {
    throw new NotImplementedException("ImagePlus.getHeight(..)");
  };

  /**
   * Returns the size of this image in bytes.
   * 
   * @return double
   * 
   * @author Created by ijdoc2js
   */
  getSizeInBytes() {
    throw new NotImplementedException("ImagePlus.getSizeInBytes(..)");
  };

  /**
   * If this is a stack, returns the number of slices, else returns 1.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getStackSize() {
    throw new NotImplementedException("ImagePlus.getStackSize(..)");
  };

  /**
   * If this is a stack, returns the actual number of images in the stack, else returns 1.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getImageStackSize() {
    throw new NotImplementedException("ImagePlus.getImageStackSize(..)");
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
    throw new NotImplementedException("ImagePlus.setDimensions(..)");
  };

  /**
   * Returns 'true' if this image is a hyperstack.
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  isHyperStack() {
    throw new NotImplementedException("ImagePlus.isHyperStack(..)");
  };

  /**
   * Returns the number of dimensions (2, 3, 4 or 5).
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getNDimensions() {
    throw new NotImplementedException("ImagePlus.getNDimensions(..)");
  };

  /**
   * Returns 'true' if this is a hyperstack currently being displayed in a StackWindow.
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  isDisplayedHyperStack() {
    throw new NotImplementedException("ImagePlus.isDisplayedHyperStack(..)");
  };

  /**
   * Returns the number of channels.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getNChannels() {
    throw new NotImplementedException("ImagePlus.getNChannels(..)");
  };

  /**
   * Returns the image depth (number of z-slices).
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getNSlices() {
    throw new NotImplementedException("ImagePlus.getNSlices(..)");
  };

  /**
   * Returns the number of frames (time-points).
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getNFrames() {
    throw new NotImplementedException("ImagePlus.getNFrames(..)");
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
    throw new NotImplementedException("ImagePlus.getDimensions(..)");
  };

  /**
   * 
   * @param {boolean} varify - 
   * @return int[]
   * 
   * @author Created by ijdoc2js
   */
  getDimensions(varify) {
    throw new NotImplementedException("ImagePlus.getDimensions(..)");
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
    throw new NotImplementedException("ImagePlus.getType(..)");
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
    throw new NotImplementedException("ImagePlus.getBitDepth(..)");
  };

  /**
   * Returns the number of bytes per pixel.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getBytesPerPixel() {
    throw new NotImplementedException("ImagePlus.getBytesPerPixel(..)");
  };

  /**
   * 
   * 
   * @author Created by ijdoc2js
   */
  setTypeToColor256() {
    throw new NotImplementedException("ImagePlus.setTypeToColor256(..)");
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
    throw new NotImplementedException("ImagePlus.getStringProperty(..)");
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
    throw new NotImplementedException("ImagePlus.getNumericProperty(..)");
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
    throw new NotImplementedException("ImagePlus.getProp(..)");
  };

  /**
   * Returns the "Info" property string, or null if it is not found.
   * 
   * @return java.lang.String
   * 
   * @author Created by ijdoc2js
   */
  getInfoProperty() {
    throw new NotImplementedException("ImagePlus.getInfoProperty(..)");
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
    throw new NotImplementedException("ImagePlus.getProperty(..)");
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
    throw new NotImplementedException("ImagePlus.setProperty(..)");
  };

  /**
   * Returns this image's Properties. May return null.
   * 
   * @return java.util.Properties
   * 
   * @author Created by ijdoc2js
   */
  getProperties() {
    throw new NotImplementedException("ImagePlus.getProperties(..)");
  };

  /**
   * Creates a LookUpTable object that corresponds to this image.
   * 
   * @return LookUpTable
   * 
   * @author Created by ijdoc2js
   */
  createLut() {
    throw new NotImplementedException("ImagePlus.createLut(..)");
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
    throw new NotImplementedException("ImagePlus.isInvertedLut(..)");
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
    throw new NotImplementedException("ImagePlus.getPixel(..)");
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
    throw new NotImplementedException("ImagePlus.createEmptyStack(..)");
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
    throw new NotImplementedException("ImagePlus.getStack(..)");
  };

  /**
   * Returns the base image stack.
   * 
   * @return ImageStack
   * 
   * @author Created by ijdoc2js
   */
  getImageStack() {
    throw new NotImplementedException("ImagePlus.getImageStack(..)");
  };

  /**
   * Returns the current stack index (one-based) or 1 if this is a single image.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getCurrentSlice() {
    throw new NotImplementedException("ImagePlus.getCurrentSlice(..)");
  };

  /**
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getChannel() {
    throw new NotImplementedException("ImagePlus.getChannel(..)");
  };

  /**
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getSlice() {
    throw new NotImplementedException("ImagePlus.getSlice(..)");
  };

  /**
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getFrame() {
    throw new NotImplementedException("ImagePlus.getFrame(..)");
  };

  /**
   * 
   * 
   * @author Created by ijdoc2js
   */
  killStack() {
    throw new NotImplementedException("ImagePlus.killStack(..)");
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
    throw new NotImplementedException("ImagePlus.setPosition(..)");
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
    throw new NotImplementedException("ImagePlus.setPositionWithoutUpdate(..)");
  };

  /**
   * Sets the hyperstack channel position (one based).
   * 
   * @param {int} channel - 
   * 
   * @author Created by ijdoc2js
   */
  setC(channel) {
    throw new NotImplementedException("ImagePlus.setC(..)");
  };

  /**
   * Sets the hyperstack slice position (one based).
   * 
   * @param {int} slice - 
   * 
   * @author Created by ijdoc2js
   */
  setZ(slice) {
    throw new NotImplementedException("ImagePlus.setZ(..)");
  };

  /**
   * Sets the hyperstack frame position (one based).
   * 
   * @param {int} frame - 
   * 
   * @author Created by ijdoc2js
   */
  setT(frame) {
    throw new NotImplementedException("ImagePlus.setT(..)");
  };

  /**
   * Returns the current hyperstack channel position.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getC() {
    throw new NotImplementedException("ImagePlus.getC(..)");
  };

  /**
   * Returns the current hyperstack slice position.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getZ() {
    throw new NotImplementedException("ImagePlus.getZ(..)");
  };

  /**
   * Returns the current hyperstack frame position.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getT() {
    throw new NotImplementedException("ImagePlus.getT(..)");
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
    throw new NotImplementedException("ImagePlus.getStackIndex(..)");
  };

  /**
   * 
   * 
   * @author Created by ijdoc2js
   */
  resetStack() {
    throw new NotImplementedException("ImagePlus.resetStack(..)");
  };

  /**
   * Set the current hyperstack position based on the stack index 'n' (one-based).
   * 
   * @param {int} n - 
   * 
   * @author Created by ijdoc2js
   */
  setPosition(n) {
    throw new NotImplementedException("ImagePlus.setPosition(..)");
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
    throw new NotImplementedException("ImagePlus.convertIndexToPosition(..)");
  };

  /**
   * 
 * <ul class="navList">
 * <li><a href="../ij/ImageListener.html" title="interface in ij"><span class="typeNameLink">Prev&nbsp;Class</span></a></li>
 * <li><a href="../ij/ImageStack.html" title="class in ij"><span class="typeNameLink">Next&nbsp;Class</span></a></li>
 * </ul>
 * <ul class="navList">
 * <li><a href="../index.html?ij/ImagePlus.html" target="_top">Frames</a></li>
 * <li><a href="ImagePlus.html" target="_top">No&nbsp;Frames</a></li>
 * </ul>
 * <ul class="navList" id="allclasses_navbar_bottom">
 * <li><a href="../allclasses-noframe.html">All&nbsp;Classes</a></li>
 * </ul>
 * <div>
 * <script type="text/javascript"><!--
 * allClassesLink = document.getElementById("allclasses_navbar_bottom");
 * if(window==top) {
 * allClassesLink.style.display = "block";
 * }
 * else {
 * allClassesLink.style.display = "none";
 * }
 * //-->
 * </script>
 * </div>
 * <div>
 * <ul class="subNavList">
 * <li>Summary:&nbsp;</li>
 * <li>Nested&nbsp;|&nbsp;</li>
 * <li><a href="#field.summary">Field</a>&nbsp;|&nbsp;</li>
 * <li><a href="#constructor.summary">Constr</a>&nbsp;|&nbsp;</li>
 * <li><a href="#method.summary">Method</a></li>
 * </ul>
 * <ul class="subNavList">
 * <li>Detail:&nbsp;</li>
 * <li><a href="#field.detail">Field</a>&nbsp;|&nbsp;</li>
 * <li><a href="#constructor.detail">Constr</a>&nbsp;|&nbsp;</li>
 * <li><a href="#method.detail">Method</a></li>
 * </ul>
 * </div>
 * <a name="skip.navbar.bottom">
 * 
 * <!-- --></a>
   * 
   * @deprecated navbar.bottom">
 * 
 * <!-- --></a>
 * <div class="skipNav"><a href="#skip.navbar.bottom" title="Skip navigation links">Skip navigation links</a></div>
 * <a name="navbar.bottom.firstrow">
 * 
 * <!-- --></a>
 * <ul class="navList" title="Navigation">
 * <li><a href="../overview-summary.html">Overview</a></li>
 * <li><a href="package-summary.html">Package</a></li>
 * <li class="navBarCell1Rev">Class</li>
 * <li><a href="class-use/ImagePlus.html">Use</a></li>
 * <li><a href="package-tree.html">Tree</a></li>
 * <li><a href="../deprecated-list.html">Deprecated</a></li>
 * <li><a href="../index-all.html">Index</a></li>
 * <li><a href="../help-doc.html">Help</a></li>
 * </ul>
 * 
   * @param {int} n - 
   * 
   * @author Created by ijdoc2js
   */
  setSlice(n) {
    throw new NotImplementedException("ImagePlus.setSlice(..)");
  };

  /**
   * Displays the specified stack image (1
 * 
 * 
 * <a name="getRoi--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>getRoi</h4>
 * <pre>public&nbsp;<a href="../ij/gui/Roi.html" title="class in ij.gui">Roi</a>&nbsp;getRoi()</pre>
 * <div class="block">Returns the current selection, or null if there is no selection.</div>
 * </li>
 * </ul>
 * <a name="setRoi-ij.gui.Roi-">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>setRoi</h4>
 * <pre>public&nbsp;void&nbsp;setRoi(<a href="../ij/gui/Roi.html" title="class in ij.gui">Roi</a>&nbsp;newRoi)</pre>
 * <div class="block">Assigns the specified ROI to this image and displays it. Any existing
 * ROI is deleted if <code>roi</code> is null or its width or height is zero.</div>
 * </li>
 * </ul>
 * <a name="setRoi-ij.gui.Roi-boolean-">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>setRoi</h4>
 * <pre>public&nbsp;void&nbsp;setRoi(<a href="../ij/gui/Roi.html" title="class in ij.gui">Roi</a>&nbsp;newRoi,
 * boolean&nbsp;updateDisplay)</pre>
 * <div class="block">Assigns 'newRoi' to this image and displays it if 'updateDisplay' is true.</div>
 * </li>
 * </ul>
 * <a name="setRoi-int-int-int-int-">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>setRoi</h4>
 * <pre>public&nbsp;void&nbsp;setRoi(int&nbsp;x,
 * int&nbsp;y,
 * int&nbsp;width,
 * int&nbsp;height)</pre>
 * <div class="block">Creates a rectangular selection.</div>
 * </li>
 * </ul>
 * <a name="setRoi-java.awt.Rectangle-">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>setRoi</h4>
 * <pre>public&nbsp;void&nbsp;setRoi(java.awt.Rectangle&nbsp;r)</pre>
 * <div class="block">Creates a rectangular selection.</div>
 * </li>
 * </ul>
 * <a name="createNewRoi-int-int-">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>createNewRoi</h4>
 * <pre>public&nbsp;void&nbsp;createNewRoi(int&nbsp;sx,
 * int&nbsp;sy)</pre>
 * <div class="block">Starts the process of creating a new selection, where sx and sy are the
 * starting screen coordinates. The selection type is determined by which tool in
 * the tool bar is active. The user interactively sets the selection size and shape.</div>
 * </li>
 * </ul>
 * <a name="deleteRoi--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>deleteRoi</h4>
 * <pre>public&nbsp;void&nbsp;deleteRoi()</pre>
 * <div class="block">Deletes the current region of interest. Makes a copy of the ROI
 * so it can be recovered by Edit/Selection/Restore Selection.</div>
 * </li>
 * </ul>
 * <a name="okToDeleteRoi--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>okToDeleteRoi</h4>
 * <pre>public&nbsp;boolean&nbsp;okToDeleteRoi()</pre>
 * </li>
 * </ul>
 * <a name="killRoi--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>killRoi</h4>
 * <pre>public&nbsp;void&nbsp;killRoi()</pre>
 * <div class="block">Deletes the current region of interest.</div>
 * </li>
 * </ul>
 * <a name="saveRoi--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>saveRoi</h4>
 * <pre>public&nbsp;void&nbsp;saveRoi()</pre>
 * </li>
 * </ul>
 * <a name="restoreRoi--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>restoreRoi</h4>
 * <pre>public&nbsp;void&nbsp;restoreRoi()</pre>
 * </li>
 * </ul>
 * <a name="revert--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>revert</h4>
 * <pre>public&nbsp;void&nbsp;revert()</pre>
 * <div class="block">Implements the File/Revert command.</div>
 * </li>
 * </ul>
 * <a name="getFileInfo--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>getFileInfo</h4>
 * <pre>public&nbsp;<a href="../ij/io/FileInfo.html" title="class in ij.io">FileInfo</a>&nbsp;getFileInfo()</pre>
 * <div class="block">Returns a FileInfo object containing information, including the
 * pixel array, needed to save this image. Use getOriginalFileInfo()
 * to get a copy of the FileInfo object used to open the image.</div>
 * <dl>
 * <dt><span class="seeLabel">See Also:</span></dt>
 * <dd><a href="../ij/io/FileInfo.html" title="class in ij.io"><code>FileInfo</code></a>, 
 * <a href="../ij/ImagePlus.html#getOriginalFileInfo--"><code>getOriginalFileInfo()</code></a>, 
 * <a href="../ij/ImagePlus.html#setFileInfo-ij.io.FileInfo-"><code>setFileInfo(ij.io.FileInfo)</code></a></dd>
 * </dl>
 * </li>
 * </ul>
 * <a name="getOriginalFileInfo--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>getOriginalFileInfo</h4>
 * <pre>public&nbsp;<a href="../ij/io/FileInfo.html" title="class in ij.io">FileInfo</a>&nbsp;getOriginalFileInfo()</pre>
 * <div class="block">Returns the FileInfo object that was used to open this image.
 * Returns null for images created using the File/New command.</div>
 * <dl>
 * <dt><span class="seeLabel">See Also:</span></dt>
 * <dd><a href="../ij/io/FileInfo.html" title="class in ij.io"><code>FileInfo</code></a>, 
 * <a href="../ij/ImagePlus.html#getFileInfo--"><code>getFileInfo()</code></a></dd>
 * </dl>
 * </li>
 * </ul>
 * <a name="imageUpdate-java.awt.Image-int-int-int-int-int-">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>imageUpdate</h4>
 * <pre>public&nbsp;boolean&nbsp;imageUpdate(java.awt.Image&nbsp;img,
 * int&nbsp;flags,
 * int&nbsp;x,
 * int&nbsp;y,
 * int&nbsp;w,
 * int&nbsp;h)</pre>
 * <div class="block">Used by ImagePlus to monitor loading of images.</div>
 * <dl>
 * <dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
 * <dd><code>imageUpdate</code>&nbsp;in interface&nbsp;<code>java.awt.image.ImageObserver</code></dd>
 * </dl>
 * </li>
 * </ul>
 * <a name="flush--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>flush</h4>
 * <pre>public&nbsp;void&nbsp;flush()</pre>
 * <div class="block">Sets the ImageProcessor, Roi, AWT Image and stack image
 * arrays to null. Does nothing if the image is locked.</div>
 * </li>
 * </ul>
 * <a name="setIgnoreFlush-boolean-">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>setIgnoreFlush</h4>
 * <pre>public&nbsp;void&nbsp;setIgnoreFlush(boolean&nbsp;ignoreFlush)</pre>
 * </li>
 * </ul>
 * <a name="duplicate--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>duplicate</h4>
 * <pre>public&nbsp;<a href="../ij/ImagePlus.html" title="class in ij">ImagePlus</a>&nbsp;duplicate()</pre>
 * <div class="block">Returns a copy of this image or stack.</div>
 * <dl>
 * <dt><span class="seeLabel">See Also:</span></dt>
 * <dd><a href="../ij/ImagePlus.html#crop--"><code>crop()</code></a>, 
 * <a href="../ij/plugin/Duplicator.html#run-java.lang.String-"><code>Duplicator.run(java.lang.String)</code></a></dd>
 * </dl>
 * </li>
 * </ul>
 * <a name="crop--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>crop</h4>
 * <pre>public&nbsp;<a href="../ij/ImagePlus.html" title="class in ij">ImagePlus</a>&nbsp;crop()</pre>
 * <div class="block">Returns a copy this image or stack slice, cropped if there is an ROI.</div>
 * <dl>
 * <dt><span class="seeLabel">See Also:</span></dt>
 * <dd><a href="../ij/ImagePlus.html#duplicate--"><code>duplicate()</code></a>, 
 * <a href="../ij/plugin/Duplicator.html#crop-ij.ImagePlus-"><code>Duplicator.crop(ij.ImagePlus)</code></a></dd>
 * </dl>
 * </li>
 * </ul>
 * <a name="crop-java.lang.String-">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>crop</h4>
 * <pre>public&nbsp;<a href="../ij/ImagePlus.html" title="class in ij">ImagePlus</a>&nbsp;crop(java.lang.String&nbsp;options)</pre>
 * <div class="block">Returns a cropped copy this image or stack, where 'options'
 * can be "stack", "slice" or a range (e.g., "20-30").</div>
 * <dl>
 * <dt><span class="seeLabel">See Also:</span></dt>
 * <dd><a href="../ij/ImagePlus.html#duplicate--"><code>duplicate()</code></a>, 
 * <a href="../ij/ImagePlus.html#crop--"><code>crop()</code></a>, 
 * <a href="../ij/plugin/Duplicator.html#crop-ij.ImagePlus-"><code>Duplicator.crop(ij.ImagePlus)</code></a></dd>
 * </dl>
 * </li>
 * </ul>
 * <a name="createImagePlus--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>createImagePlus</h4>
 * <pre>public&nbsp;<a href="../ij/ImagePlus.html" title="class in ij">ImagePlus</a>&nbsp;createImagePlus()</pre>
 * <div class="block">Returns a new ImagePlus with this image's attributes
 * (e.g. spatial scale), but no image.</div>
 * </li>
 * </ul>
 * <a name="createHyperStack-java.lang.String-int-int-int-int-">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>createHyperStack</h4>
 * <pre>public&nbsp;<a href="../ij/ImagePlus.html" title="class in ij">ImagePlus</a>&nbsp;createHyperStack(java.lang.String&nbsp;title,
 * int&nbsp;channels,
 * int&nbsp;slices,
 * int&nbsp;frames,
 * int&nbsp;bitDepth)</pre>
 * <div class="block">This method has been replaced by IJ.createHyperStack().</div>
 * </li>
 * </ul>
 * <a name="copyScale-ij.ImagePlus-">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>copyScale</h4>
 * <pre>public&nbsp;void&nbsp;copyScale(<a href="../ij/ImagePlus.html" title="class in ij">ImagePlus</a>&nbsp;imp)</pre>
 * <div class="block">Copies the calibration of the specified image to this image.</div>
 * </li>
 * </ul>
 * <a name="copyAttributes-ij.ImagePlus-">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>copyAttributes</h4>
 * <pre>public&nbsp;void&nbsp;copyAttributes(<a href="../ij/ImagePlus.html" title="class in ij">ImagePlus</a>&nbsp;imp)</pre>
 * <div class="block">Copies attributes (name, ID, calibration, path, plot) of the specified image to this image.</div>
 * </li>
 * </ul>
 * <a name="startTiming--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>startTiming</h4>
 * <pre>public&nbsp;void&nbsp;startTiming()</pre>
 * <div class="block">Calls System.currentTimeMillis() to save the current
 * time so it can be retrieved later using getStartTime()
 * to calculate the elapsed time of an operation.</div>
 * </li>
 * </ul>
 * <a name="getStartTime--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>getStartTime</h4>
 * <pre>public&nbsp;long&nbsp;getStartTime()</pre>
 * <div class="block">Returns the time in milliseconds when
 * startTiming() was last called.</div>
 * </li>
 * </ul>
 * <a name="getCalibration--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>getCalibration</h4>
 * <pre>public&nbsp;<a href="../ij/measure/Calibration.html" title="class in ij.measure">Calibration</a>&nbsp;getCalibration()</pre>
 * <div class="block">Returns this image's calibration.</div>
 * </li>
 * </ul>
 * <a name="setCalibration-ij.measure.Calibration-">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>setCalibration</h4>
 * <pre>public&nbsp;void&nbsp;setCalibration(<a href="../ij/measure/Calibration.html" title="class in ij.measure">Calibration</a>&nbsp;cal)</pre>
 * <div class="block">Sets this image's calibration.</div>
 * </li>
 * </ul>
 * <a name="setGlobalCalibration-ij.measure.Calibration-">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>setGlobalCalibration</h4>
 * <pre>public&nbsp;void&nbsp;setGlobalCalibration(<a href="../ij/measure/Calibration.html" title="class in ij.measure">Calibration</a>&nbsp;global)</pre>
 * <div class="block">Sets the system-wide calibration.</div>
 * </li>
 * </ul>
 * <a name="getGlobalCalibration--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>getGlobalCalibration</h4>
 * <pre>public&nbsp;<a href="../ij/measure/Calibration.html" title="class in ij.measure">Calibration</a>&nbsp;getGlobalCalibration()</pre>
 * <div class="block">Returns the system-wide calibration, or null.</div>
 * </li>
 * </ul>
 * <a name="getStaticGlobalCalibration--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>getStaticGlobalCalibration</h4>
 * <pre>public static&nbsp;<a href="../ij/measure/Calibration.html" title="class in ij.measure">Calibration</a>&nbsp;getStaticGlobalCalibration()</pre>
 * <div class="block">This is a version of getGlobalCalibration() that can be called from a static context.</div>
 * </li>
 * </ul>
 * <a name="getLocalCalibration--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>getLocalCalibration</h4>
 * <pre>public&nbsp;<a href="../ij/measure/Calibration.html" title="class in ij.measure">Calibration</a>&nbsp;getLocalCalibration()</pre>
 * <div class="block">Returns this image's local calibration, ignoring
 * the "Global" calibration flag.</div>
 * </li>
 * </ul>
 * <a name="setIgnoreGlobalCalibration-boolean-">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>setIgnoreGlobalCalibration</h4>
 * <pre>public&nbsp;void&nbsp;setIgnoreGlobalCalibration(boolean&nbsp;ignoreGlobalCalibration)</pre>
 * </li>
 * </ul>
 * <a name="mouseMoved-int-int-">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>mouseMoved</h4>
 * <pre>public&nbsp;void&nbsp;mouseMoved(int&nbsp;x,
 * int&nbsp;y)</pre>
 * <div class="block">Displays the cursor coordinates and pixel value in the status bar.
 * Called by ImageCanvas when the mouse moves.</div>
 * </li>
 * </ul>
 * <a name="updateStatusbarValue--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>updateStatusbarValue</h4>
 * <pre>public&nbsp;void&nbsp;updateStatusbarValue()</pre>
 * <div class="block">Redisplays the (x,y) coordinates and pixel value (which may
 * have changed) in the status bar. Called by the Next Slice and
 * Previous Slice commands to update the z-coordinate and pixel value.</div>
 * </li>
 * </ul>
 * <a name="getLocationAsString-int-int-">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>getLocationAsString</h4>
 * <pre>public&nbsp;java.lang.String&nbsp;getLocationAsString(int&nbsp;x,
 * int&nbsp;y)</pre>
 * <div class="block">Converts the current cursor location to a string.</div>
 * </li>
 * </ul>
 * <a name="copy--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>copy</h4>
 * <pre>public&nbsp;void&nbsp;copy()</pre>
 * <div class="block">Copies the contents of the current selection, or the entire
 * image if there is no selection, to the internal clipboard.</div>
 * </li>
 * </ul>
 * <a name="copy-boolean-">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>copy</h4>
 * <pre>public&nbsp;void&nbsp;copy(boolean&nbsp;cut)</pre>
 * <div class="block">Copies the contents of the current selection to the internal clipboard.
 * Copies the entire image if there is no selection. Also clears
 * the selection if <code>cut</code> is true.</div>
 * </li>
 * </ul>
 * <a name="paste--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>paste</h4>
 * <pre>public&nbsp;void&nbsp;paste()</pre>
 * <div class="block">Inserts the contents of the internal clipboard into the active image. If there
 * is a selection the same size as the image on the clipboard, the image is inserted
 * into that selection, otherwise the selection is inserted into the center of the image.</div>
 * </li>
 * </ul>
 * <a name="getClipboard--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>getClipboard</h4>
 * <pre>public static&nbsp;<a href="../ij/ImagePlus.html" title="class in ij">ImagePlus</a>&nbsp;getClipboard()</pre>
 * <div class="block">Returns the internal clipboard or null if the internal clipboard is empty.</div>
 * </li>
 * </ul>
 * <a name="resetClipboard--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>resetClipboard</h4>
 * <pre>public static&nbsp;void&nbsp;resetClipboard()</pre>
 * <div class="block">Clears the internal clipboard.</div>
 * </li>
 * </ul>
 * <a name="notifyListeners-int-">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>notifyListeners</h4>
 * <pre>protected&nbsp;void&nbsp;notifyListeners(int&nbsp;id)</pre>
 * </li>
 * </ul>
 * <a name="addImageListener-ij.ImageListener-">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>addImageListener</h4>
 * <pre>public static&nbsp;void&nbsp;addImageListener(<a href="../ij/ImageListener.html" title="interface in ij">ImageListener</a>&nbsp;listener)</pre>
 * </li>
 * </ul>
 * <a name="removeImageListener-ij.ImageListener-">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>removeImageListener</h4>
 * <pre>public static&nbsp;void&nbsp;removeImageListener(<a href="../ij/ImageListener.html" title="interface in ij">ImageListener</a>&nbsp;listener)</pre>
 * </li>
 * </ul>
 * <a name="logImageListeners--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>logImageListeners</h4>
 * <pre>public static&nbsp;void&nbsp;logImageListeners()</pre>
 * <div class="block">For debug purposes, writes all registered (and possibly,
 * forgotten) ImageListeners to the log window</div>
 * </li>
 * </ul>
 * <a name="setOpenAsHyperStack-boolean-">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>setOpenAsHyperStack</h4>
 * <pre>public&nbsp;void&nbsp;setOpenAsHyperStack(boolean&nbsp;openAsHyperStack)</pre>
 * </li>
 * </ul>
 * <a name="getOpenAsHyperStack--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>getOpenAsHyperStack</h4>
 * <pre>public&nbsp;boolean&nbsp;getOpenAsHyperStack()</pre>
 * </li>
 * </ul>
 * <a name="isComposite--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>isComposite</h4>
 * <pre>public&nbsp;boolean&nbsp;isComposite()</pre>
 * <div class="block">Returns true if this is a CompositeImage.</div>
 * </li>
 * </ul>
 * <a name="getCompositeMode--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>getCompositeMode</h4>
 * <pre>public&nbsp;int&nbsp;getCompositeMode()</pre>
 * <div class="block">Returns the display mode (IJ.COMPOSITE, IJ.COLOR
 * or IJ.GRAYSCALE) if this is a CompositeImage, otherwise returns -1.</div>
 * </li>
 * </ul>
 * <a name="setDisplayRange-double-double-">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>setDisplayRange</h4>
 * <pre>public&nbsp;void&nbsp;setDisplayRange(double&nbsp;min,
 * double&nbsp;max)</pre>
 * <div class="block">Sets the display range of the current channel. With non-composite
 * images it is identical to ip.setMinAndMax(min, max).</div>
 * </li>
 * </ul>
 * <a name="getDisplayRangeMin--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>getDisplayRangeMin</h4>
 * <pre>public&nbsp;double&nbsp;getDisplayRangeMin()</pre>
 * </li>
 * </ul>
 * <a name="getDisplayRangeMax--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>getDisplayRangeMax</h4>
 * <pre>public&nbsp;double&nbsp;getDisplayRangeMax()</pre>
 * </li>
 * </ul>
 * <a name="setDisplayRange-double-double-int-">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>setDisplayRange</h4>
 * <pre>public&nbsp;void&nbsp;setDisplayRange(double&nbsp;min,
 * double&nbsp;max,
 * int&nbsp;channels)</pre>
 * <div class="block">Sets the display range of specified channels in an RGB image, where 4=red,
 * 2=green, 1=blue, 6=red+green, etc. With non-RGB images, this method is
 * identical to setDisplayRange(min, max). This method is used by the
 * Image/Adjust/Color Balance tool .</div>
 * </li>
 * </ul>
 * <a name="resetDisplayRange--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>resetDisplayRange</h4>
 * <pre>public&nbsp;void&nbsp;resetDisplayRange()</pre>
 * </li>
 * </ul>
 * <a name="isThreshold--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>isThreshold</h4>
 * <pre>public&nbsp;boolean&nbsp;isThreshold()</pre>
 * <div class="block">Returns 'true' if this image is thresholded.</div>
 * </li>
 * </ul>
 * <a name="setDefault16bitRange-int-">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>setDefault16bitRange</h4>
 * <pre>public static&nbsp;void&nbsp;setDefault16bitRange(int&nbsp;bitDepth)</pre>
 * <div class="block">Set the default 16-bit display range, where 'bitDepth' must be 0 (auto-scaling),
 * 8 (0-255), 10 (0-1023), 12 (0-4095, 14 (0-16383), 15 (0-32767) or 16 (0-65535).</div>
 * </li>
 * </ul>
 * <a name="getDefault16bitRange--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>getDefault16bitRange</h4>
 * <pre>public static&nbsp;int&nbsp;getDefault16bitRange()</pre>
 * <div class="block">Returns the default 16-bit display range, 0 (auto-scaling), 8, 10, 12, 14, 15 or 16.</div>
 * </li>
 * </ul>
 * <a name="updatePosition-int-int-int-">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>updatePosition</h4>
 * <pre>public&nbsp;void&nbsp;updatePosition(int&nbsp;c,
 * int&nbsp;z,
 * int&nbsp;t)</pre>
 * </li>
 * </ul>
 * <a name="flatten--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>flatten</h4>
 * <pre>public&nbsp;<a href="../ij/ImagePlus.html" title="class in ij">ImagePlus</a>&nbsp;flatten()</pre>
 * <div class="block">Returns a "flattened" version of this image, in RGB format.</div>
 * </li>
 * </ul>
 * <a name="flattenStack--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>flattenStack</h4>
 * <pre>public&nbsp;void&nbsp;flattenStack()</pre>
 * <div class="block">Flattens all slices of this stack or HyperStack.<br></div>
 * <dl>
 * <dt><span class="throwsLabel">Throws:</span></dt>
 * <dd><code>java.lang.UnsupportedOperationException</code> - if this image<br>
 * does not have an overlay and the RoiManager overlay is null<br>
 * or Java version is less than 1.6.
 * Copied from OverlayCommands and modified by Marcel Boeglin
 * on 2014.01.08 to work with HyperStacks.</dd>
 * </dl>
 * </li>
 * </ul>
 * <a name="setLut-ij.process.LUT-">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>setLut</h4>
 * <pre>public&nbsp;void&nbsp;setLut(<a href="../ij/process/LUT.html" title="class in ij.process">LUT</a>&nbsp;lut)</pre>
 * <div class="block">Assigns a LUT (lookup table) to this image.</div>
 * <dl>
 * <dt><span class="seeLabel">See Also:</span></dt>
 * <dd><a href="../ij/io/Opener.html#openLut-java.lang.String-"><code>Opener.openLut(java.lang.String)</code></a></dd>
 * </dl>
 * </li>
 * </ul>
 * <a name="setOverlay-ij.gui.Overlay-">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>setOverlay</h4>
 * <pre>public&nbsp;void&nbsp;setOverlay(<a href="../ij/gui/Overlay.html" title="class in ij.gui">Overlay</a>&nbsp;overlay)</pre>
 * <div class="block">Installs a list of ROIs that will be drawn on this image as a non-destructive overlay.</div>
 * <dl>
 * <dt><span class="seeLabel">See Also:</span></dt>
 * <dd><a href="../ij/gui/Roi.html#setStrokeColor-java.awt.Color-"><code>Roi.setStrokeColor(java.awt.Color)</code></a>, 
 * <a href="../ij/gui/Roi.html#setStrokeWidth-float-"><code>Roi.setStrokeWidth(float)</code></a>, 
 * <a href="../ij/gui/Roi.html#setFillColor-java.awt.Color-"><code>Roi.setFillColor(java.awt.Color)</code></a>, 
 * <a href="../ij/gui/Roi.html#setLocation-int-int-"><code>Roi.setLocation(int, int)</code></a>, 
 * <a href="../ij/gui/Roi.html#setNonScalable-boolean-"><code>Roi.setNonScalable(boolean)</code></a></dd>
 * </dl>
 * </li>
 * </ul>
 * <a name="setOverlay-java.awt.Shape-java.awt.Color-java.awt.BasicStroke-">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>setOverlay</h4>
 * <pre>public&nbsp;void&nbsp;setOverlay(java.awt.Shape&nbsp;shape,
 * java.awt.Color&nbsp;color,
 * java.awt.BasicStroke&nbsp;stroke)</pre>
 * <div class="block">Creates an Overlay from the specified Shape, Color
 * and BasicStroke, and assigns it to this image.</div>
 * <dl>
 * <dt><span class="seeLabel">See Also:</span></dt>
 * <dd><a href="../ij/ImagePlus.html#setOverlay-ij.gui.Overlay-"><code>setOverlay(ij.gui.Overlay)</code></a>, 
 * <a href="../ij/gui/Roi.html#setStrokeColor-java.awt.Color-"><code>Roi.setStrokeColor(java.awt.Color)</code></a>, 
 * <a href="../ij/gui/Roi.html#setStrokeWidth-float-"><code>Roi.setStrokeWidth(float)</code></a></dd>
 * </dl>
 * </li>
 * </ul>
 * <a name="setOverlay-ij.gui.Roi-java.awt.Color-int-java.awt.Color-">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>setOverlay</h4>
 * <pre>public&nbsp;void&nbsp;setOverlay(<a href="../ij/gui/Roi.html" title="class in ij.gui">Roi</a>&nbsp;roi,
 * java.awt.Color&nbsp;strokeColor,
 * int&nbsp;strokeWidth,
 * java.awt.Color&nbsp;fillColor)</pre>
 * <div class="block">Creates an Overlay from the specified ROI, and assigns it to this image.</div>
 * <dl>
 * <dt><span class="seeLabel">See Also:</span></dt>
 * <dd><a href="../ij/ImagePlus.html#setOverlay-ij.gui.Overlay-"><code>setOverlay(ij.gui.Overlay)</code></a></dd>
 * </dl>
 * </li>
 * </ul>
 * <a name="getOverlay--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>getOverlay</h4>
 * <pre>public&nbsp;<a href="../ij/gui/Overlay.html" title="class in ij.gui">Overlay</a>&nbsp;getOverlay()</pre>
 * <div class="block">Returns the current overly, or null if this image does not have an overlay.</div>
 * </li>
 * </ul>
 * <a name="setHideOverlay-boolean-">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>setHideOverlay</h4>
 * <pre>public&nbsp;void&nbsp;setHideOverlay(boolean&nbsp;hide)</pre>
 * </li>
 * </ul>
 * <a name="getHideOverlay--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>getHideOverlay</h4>
 * <pre>public&nbsp;boolean&nbsp;getHideOverlay()</pre>
 * </li>
 * </ul>
 * <a name="setAntialiasRendering-boolean-">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>setAntialiasRendering</h4>
 * <pre>public&nbsp;void&nbsp;setAntialiasRendering(boolean&nbsp;antialiasRendering)</pre>
 * <div class="block">Enable/disable use of antialiasing by the flatten() method.</div>
 * </li>
 * </ul>
 * <a name="clone--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>clone</h4>
 * <pre>public&nbsp;java.lang.Object&nbsp;clone()</pre>
 * <div class="block">Returns a shallow copy of this ImagePlus.</div>
 * <dl>
 * <dt><span class="overrideSpecifyLabel">Overrides:</span></dt>
 * <dd><code>clone</code>&nbsp;in class&nbsp;<code>java.lang.Object</code></dd>
 * </dl>
 * </li>
 * </ul>
 * <a name="plotHistogram--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>plotHistogram</h4>
 * <pre>public&nbsp;<a href="../ij/gui/PlotWindow.html" title="class in ij.gui">PlotWindow</a>&nbsp;plotHistogram()</pre>
 * <div class="block">Plots a 256 bin histogram of this image and returns the PlotWindow.</div>
 * </li>
 * </ul>
 * <a name="plotHistogram-int-">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>plotHistogram</h4>
 * <pre>public&nbsp;<a href="../ij/gui/PlotWindow.html" title="class in ij.gui">PlotWindow</a>&nbsp;plotHistogram(int&nbsp;bins)</pre>
 * <div class="block">Plots a histogram of this image using the specified
 * number of bins and returns the PlotWindow.</div>
 * </li>
 * </ul>
 * <a name="toString--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>toString</h4>
 * <pre>public&nbsp;java.lang.String&nbsp;toString()</pre>
 * <dl>
 * <dt><span class="overrideSpecifyLabel">Overrides:</span></dt>
 * <dd><code>toString</code>&nbsp;in class&nbsp;<code>java.lang.Object</code></dd>
 * </dl>
 * </li>
 * </ul>
 * <a name="setIJMenuBar-boolean-">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>setIJMenuBar</h4>
 * <pre>public&nbsp;void&nbsp;setIJMenuBar(boolean&nbsp;b)</pre>
 * </li>
 * </ul>
 * <a name="setIJMenuBar--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>setIJMenuBar</h4>
 * <pre>public&nbsp;boolean&nbsp;setIJMenuBar()</pre>
 * </li>
 * </ul>
 * <a name="isStack--">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>isStack</h4>
 * <pre>public&nbsp;boolean&nbsp;isStack()</pre>
 * </li>
 * </ul>
 * <a name="setPlot-ij.gui.Plot-">
 * 
 * <!-- --></a>
 * <ul class="blockList">
 * <li class="blockList">
 * <h4>setPlot</h4>
 * <pre>public&nbsp;void&nbsp;setPlot(<a href="../ij/gui/Plot.html" title="class in ij.gui">Plot</a>&nbsp;plot)</pre>
 * </li>
 * </ul>
 * <a name="getPlot--">
 * 
 * <!-- --></a>
 * <ul class="blockListLast">
 * <li class="blockList">
 * <h4>getPlot</h4>
 * <pre>public&nbsp;<a href="../ij/gui/Plot.html" title="class in ij.gui">Plot</a>&nbsp;getPlot()</pre>
 * </li>
 * </ul>
 * 
 * 
 * 
 * 
 * 
   * 
   * @param {int} n - 
   * 
   * @author Created by ijdoc2js
   */
  setSliceWithoutUpdate(n) {
    throw new NotImplementedException("ImagePlus.setSliceWithoutUpdate(..)");
  };

  /**
   * Returns the current selection, or null if there is no selection.
   * 
   * @return Roi
   * 
   * @author Created by ijdoc2js
   */
  getRoi() {
    throw new NotImplementedException("ImagePlus.getRoi(..)");
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
    throw new NotImplementedException("ImagePlus.setRoi(..)");
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
    throw new NotImplementedException("ImagePlus.setRoi(..)");
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
    throw new NotImplementedException("ImagePlus.setRoi(..)");
  };

  /**
   * Creates a rectangular selection.
   * 
   * @param {java.awt.Rectangle} r - 
   * 
   * @author Created by ijdoc2js
   */
  setRoi(r) {
    throw new NotImplementedException("ImagePlus.setRoi(..)");
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
    throw new NotImplementedException("ImagePlus.createNewRoi(..)");
  };

  /**
   * Deletes the current region of interest. Makes a copy of the ROI
 * so it can be recovered by Edit/Selection/Restore Selection.
   * 
   * 
   * @author Created by ijdoc2js
   */
  deleteRoi() {
    throw new NotImplementedException("ImagePlus.deleteRoi(..)");
  };

  /**
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  okToDeleteRoi() {
    throw new NotImplementedException("ImagePlus.okToDeleteRoi(..)");
  };

  /**
   * Deletes the current region of interest.
   * 
   * 
   * @author Created by ijdoc2js
   */
  killRoi() {
    throw new NotImplementedException("ImagePlus.killRoi(..)");
  };

  /**
   * 
   * 
   * @author Created by ijdoc2js
   */
  saveRoi() {
    throw new NotImplementedException("ImagePlus.saveRoi(..)");
  };

  /**
   * 
   * 
   * @author Created by ijdoc2js
   */
  restoreRoi() {
    throw new NotImplementedException("ImagePlus.restoreRoi(..)");
  };

  /**
   * Implements the File/Revert command.
   * 
   * 
   * @author Created by ijdoc2js
   */
  revert() {
    throw new NotImplementedException("ImagePlus.revert(..)");
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
    throw new NotImplementedException("ImagePlus.getFileInfo(..)");
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
    throw new NotImplementedException("ImagePlus.getOriginalFileInfo(..)");
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
    throw new NotImplementedException("ImagePlus.imageUpdate(..)");
  };

  /**
   * Sets the ImageProcessor, Roi, AWT Image and stack image
 * arrays to null. Does nothing if the image is locked.
   * 
   * 
   * @author Created by ijdoc2js
   */
  flush() {
    throw new NotImplementedException("ImagePlus.flush(..)");
  };

  /**
   * 
   * @param {boolean} ignoreFlush - 
   * 
   * @author Created by ijdoc2js
   */
  setIgnoreFlush(ignoreFlush) {
    throw new NotImplementedException("ImagePlus.setIgnoreFlush(..)");
  };

  /**
   * Returns a copy of this image or stack.
   * 
   * @return ImagePlus
   * 
   * @author Created by ijdoc2js
   */
  duplicate() {
    throw new NotImplementedException("ImagePlus.duplicate(..)");
  };

  /**
   * Returns a copy this image or stack slice, cropped if there is an ROI.
   * 
   * @return ImagePlus
   * 
   * @author Created by ijdoc2js
   */
  crop() {
    throw new NotImplementedException("ImagePlus.crop(..)");
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
    throw new NotImplementedException("ImagePlus.crop(..)");
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
    throw new NotImplementedException("ImagePlus.createImagePlus(..)");
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
    throw new NotImplementedException("ImagePlus.createHyperStack(..)");
  };

  /**
   * Copies the calibration of the specified image to this image.
   * 
   * @param {ImagePlus} imp - 
   * 
   * @author Created by ijdoc2js
   */
  copyScale(imp) {
    throw new NotImplementedException("ImagePlus.copyScale(..)");
  };

  /**
   * Copies attributes (name, ID, calibration, path, plot) of the specified image to this image.
   * 
   * @param {ImagePlus} imp - 
   * 
   * @author Created by ijdoc2js
   */
  copyAttributes(imp) {
    throw new NotImplementedException("ImagePlus.copyAttributes(..)");
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
    throw new NotImplementedException("ImagePlus.startTiming(..)");
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
    throw new NotImplementedException("ImagePlus.getStartTime(..)");
  };

  /**
   * Returns this image's calibration.
   * 
   * @return Calibration
   * 
   * @author Created by ijdoc2js
   */
  getCalibration() {
    throw new NotImplementedException("ImagePlus.getCalibration(..)");
  };

  /**
   * Sets this image's calibration.
   * 
   * @param {Calibration} cal - 
   * 
   * @author Created by ijdoc2js
   */
  setCalibration(cal) {
    throw new NotImplementedException("ImagePlus.setCalibration(..)");
  };

  /**
   * Sets the system-wide calibration.
   * 
   * @param {Calibration} global - 
   * 
   * @author Created by ijdoc2js
   */
  setGlobalCalibration(global) {
    throw new NotImplementedException("ImagePlus.setGlobalCalibration(..)");
  };

  /**
   * Returns the system-wide calibration, or null.
   * 
   * @return Calibration
   * 
   * @author Created by ijdoc2js
   */
  getGlobalCalibration() {
    throw new NotImplementedException("ImagePlus.getGlobalCalibration(..)");
  };

  /**
   * This is a version of getGlobalCalibration() that can be called from a static context.
   * 
   * @return Calibration
   * 
   * @author Created by ijdoc2js
   */
  getStaticGlobalCalibration() {
    throw new NotImplementedException("ImagePlus.getStaticGlobalCalibration(..)");
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
    throw new NotImplementedException("ImagePlus.getLocalCalibration(..)");
  };

  /**
   * 
   * @param {boolean} ignoreGlobalCalibration - 
   * 
   * @author Created by ijdoc2js
   */
  setIgnoreGlobalCalibration(ignoreGlobalCalibration) {
    throw new NotImplementedException("ImagePlus.setIgnoreGlobalCalibration(..)");
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
    throw new NotImplementedException("ImagePlus.mouseMoved(..)");
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
    throw new NotImplementedException("ImagePlus.updateStatusbarValue(..)");
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
    throw new NotImplementedException("ImagePlus.getLocationAsString(..)");
  };

  /**
   * Copies the contents of the current selection, or the entire
 * image if there is no selection, to the internal clipboard.
   * 
   * 
   * @author Created by ijdoc2js
   */
  copy() {
    throw new NotImplementedException("ImagePlus.copy(..)");
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
    throw new NotImplementedException("ImagePlus.copy(..)");
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
    throw new NotImplementedException("ImagePlus.paste(..)");
  };

  /**
   * Returns the internal clipboard or null if the internal clipboard is empty.
   * 
   * @return ImagePlus
   * 
   * @author Created by ijdoc2js
   */
  getClipboard() {
    throw new NotImplementedException("ImagePlus.getClipboard(..)");
  };

  /**
   * Clears the internal clipboard.
   * 
   * 
   * @author Created by ijdoc2js
   */
  resetClipboard() {
    throw new NotImplementedException("ImagePlus.resetClipboard(..)");
  };

  /**
   * 
   * @param {ImageListener} listener - 
   * 
   * @author Created by ijdoc2js
   */
  addImageListener(listener) {
    throw new NotImplementedException("ImagePlus.addImageListener(..)");
  };

  /**
   * 
   * @param {ImageListener} listener - 
   * 
   * @author Created by ijdoc2js
   */
  removeImageListener(listener) {
    throw new NotImplementedException("ImagePlus.removeImageListener(..)");
  };

  /**
   * For debug purposes, writes all registered (and possibly,
 * forgotten) ImageListeners to the log window
   * 
   * 
   * @author Created by ijdoc2js
   */
  logImageListeners() {
    throw new NotImplementedException("ImagePlus.logImageListeners(..)");
  };

  /**
   * 
   * @param {boolean} openAsHyperStack - 
   * 
   * @author Created by ijdoc2js
   */
  setOpenAsHyperStack(openAsHyperStack) {
    throw new NotImplementedException("ImagePlus.setOpenAsHyperStack(..)");
  };

  /**
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  getOpenAsHyperStack() {
    throw new NotImplementedException("ImagePlus.getOpenAsHyperStack(..)");
  };

  /**
   * Returns true if this is a CompositeImage.
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  isComposite() {
    throw new NotImplementedException("ImagePlus.isComposite(..)");
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
    throw new NotImplementedException("ImagePlus.getCompositeMode(..)");
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
    throw new NotImplementedException("ImagePlus.setDisplayRange(..)");
  };

  /**
   * 
   * @return double
   * 
   * @author Created by ijdoc2js
   */
  getDisplayRangeMin() {
    throw new NotImplementedException("ImagePlus.getDisplayRangeMin(..)");
  };

  /**
   * 
   * @return double
   * 
   * @author Created by ijdoc2js
   */
  getDisplayRangeMax() {
    throw new NotImplementedException("ImagePlus.getDisplayRangeMax(..)");
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
    throw new NotImplementedException("ImagePlus.setDisplayRange(..)");
  };

  /**
   * 
   * 
   * @author Created by ijdoc2js
   */
  resetDisplayRange() {
    throw new NotImplementedException("ImagePlus.resetDisplayRange(..)");
  };

  /**
   * Returns 'true' if this image is thresholded.
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  isThreshold() {
    throw new NotImplementedException("ImagePlus.isThreshold(..)");
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
    throw new NotImplementedException("ImagePlus.setDefault16bitRange(..)");
  };

  /**
   * Returns the default 16-bit display range, 0 (auto-scaling), 8, 10, 12, 14, 15 or 16.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getDefault16bitRange() {
    throw new NotImplementedException("ImagePlus.getDefault16bitRange(..)");
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
    throw new NotImplementedException("ImagePlus.updatePosition(..)");
  };

  /**
   * Returns a "flattened" version of this image, in RGB format.
   * 
   * @return ImagePlus
   * 
   * @author Created by ijdoc2js
   */
  flatten() {
    throw new NotImplementedException("ImagePlus.flatten(..)");
  };

  /**
   * Flattens all slices of this stack or HyperStack.<br>
   * 
   * 
   * @author Created by ijdoc2js
   */
  flattenStack() {
    throw new NotImplementedException("ImagePlus.flattenStack(..)");
  };

  /**
   * Assigns a LUT (lookup table) to this image.
   * 
   * @param {LUT} lut - 
   * 
   * @author Created by ijdoc2js
   */
  setLut(lut) {
    throw new NotImplementedException("ImagePlus.setLut(..)");
  };

  /**
   * Installs a list of ROIs that will be drawn on this image as a non-destructive overlay.
   * 
   * @param {Overlay} overlay - 
   * 
   * @author Created by ijdoc2js
   */
  setOverlay(overlay) {
    throw new NotImplementedException("ImagePlus.setOverlay(..)");
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
    throw new NotImplementedException("ImagePlus.setOverlay(..)");
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
    throw new NotImplementedException("ImagePlus.setOverlay(..)");
  };

  /**
   * Returns the current overly, or null if this image does not have an overlay.
   * 
   * @return Overlay
   * 
   * @author Created by ijdoc2js
   */
  getOverlay() {
    throw new NotImplementedException("ImagePlus.getOverlay(..)");
  };

  /**
   * 
   * @param {boolean} hide - 
   * 
   * @author Created by ijdoc2js
   */
  setHideOverlay(hide) {
    throw new NotImplementedException("ImagePlus.setHideOverlay(..)");
  };

  /**
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  getHideOverlay() {
    throw new NotImplementedException("ImagePlus.getHideOverlay(..)");
  };

  /**
   * Enable/disable use of antialiasing by the flatten() method.
   * 
   * @param {boolean} antialiasRendering - 
   * 
   * @author Created by ijdoc2js
   */
  setAntialiasRendering(antialiasRendering) {
    throw new NotImplementedException("ImagePlus.setAntialiasRendering(..)");
  };

  /**
   * Returns a shallow copy of this ImagePlus.
   * 
   * @return java.lang.Object
   * 
   * @author Created by ijdoc2js
   */
  clone() {
    throw new NotImplementedException("ImagePlus.clone(..)");
  };

  /**
   * Plots a 256 bin histogram of this image and returns the PlotWindow.
   * 
   * @return PlotWindow
   * 
   * @author Created by ijdoc2js
   */
  plotHistogram() {
    throw new NotImplementedException("ImagePlus.plotHistogram(..)");
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
    throw new NotImplementedException("ImagePlus.plotHistogram(..)");
  };

  /**
   * 
   * @return java.lang.String
   * 
   * @author Created by ijdoc2js
   */
  toString() {
    throw new NotImplementedException("ImagePlus.toString(..)");
  };

  /**
   * 
   * @param {boolean} b - 
   * 
   * @author Created by ijdoc2js
   */
  setIJMenuBar(b) {
    throw new NotImplementedException("ImagePlus.setIJMenuBar(..)");
  };

  /**
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  setIJMenuBar() {
    throw new NotImplementedException("ImagePlus.setIJMenuBar(..)");
  };

  /**
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  isStack() {
    throw new NotImplementedException("ImagePlus.isStack(..)");
  };

  /**
   * 
   * @param {Plot} plot - 
   * 
   * @author Created by ijdoc2js
   */
  setPlot(plot) {
    throw new NotImplementedException("ImagePlus.setPlot(..)");
  };

  /**
   * 
   * @return Plot
   * 
   * @author Created by ijdoc2js
   */
  getPlot() {
    throw new NotImplementedException("ImagePlus.getPlot(..)");
  };

} // End of class ImagePlus
