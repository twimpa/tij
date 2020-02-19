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
 * public class Roi
 * extends java.lang.Object
 * implements java.lang.Cloneable, java.io.Serializable, java.lang.Iterable&lt;java.awt.Point&gt;
 *
 * A rectangular region of interest and superclass for the other ROI classes. 
 *  * 
 *  * This class implements <code>Iterable&lt;Point&gt;</code> and can thus be
 *  * used to iterate over the contained coordinates. Usage example: 
 *  * <pre> Roi roi = ...;
 *  * for (Point p : roi) {
 *  * // process p
 *  * }
 *  * </pre>
*/

export class Roi {

  /**
   * Creates a  ROI.
   * @constructor
   * 
   * 
   * @author Created by ijdoc2js
   */
  constructor (...args) {
  /**
   * Creates a new rounded rectangular ROI.
   * @constructor
   * 
   * @param {int} x - 
   * @param {int} y - 
   * @param {int} width - 
   * @param {int} height - 
   * @param {int} cornerDiameter - 
   * 
   * @author Created by ijdoc2js
   */
  // constructor (x, y, width, height, cornerDiameter=0) {
  
    /**
   * Creates a new rectangular Roi.
   * @constructor
   * 
   * @param {java.awt.Rectangle} r - 
   * 
   * @author Created by ijdoc2js
   */
  // constructor (r) 

  /**
   * Starts the process of creating a user-defined rectangular Roi,
   * where sx and sy are the starting screen coordinates.
   * @constructor
   * 
   * @param {int} sx - 
   * @param {int} sy - 
   * @param {ImagePlus} imp - 
   * 
   * @author Created by ijdoc2js
   */
  // constructor (sx, sy, imp) 

  /**
   * Starts the process of creating a user-defined rectangular Roi,
   * where sx and sy are the starting screen coordinates.
   * @constructor
   * 
   * @param {int} sx - 
   * @param {int} sy - 
   * @param {ImagePlus} imp - 
   * @param {int} cornerDiameter - 
   * 
   * @author Created by ijdoc2js
   */
  // constructor (sx, sy, imp, cornerDiameter) 

  /**
   * <span class="deprecatedLabel">Deprecated.</span>&nbsp;
   * @constructor
   * 
   * @param {int} x - 
   * @param {int} y - 
   * @param {int} width - 
   * @param {int} height - 
   * @param {ImagePlus} imp - 
   * 
   * @author Created by ijdoc2js
   */
    // constructor (x, y, width, height, imp)


    throw new NotImplementedException("Roi.constructor(..)");
  };


  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get CONSTRUCTING() {
    return 0;
  }

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get MOVING() {
    return 0;
  }

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get RESIZING() {
    return 0;
  }

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get NORMAL() {
    return 0;
  }

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get MOVING_HANDLE() {
    return 0;
  }

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get RECTANGLE() {
    return 0;
  }

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get OVAL() {
    return 0;
  }

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get POLYGON() {
    return 0;
  }

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get FREEROI() {
    return 0;
  }

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get TRACED_ROI() {
    return 0;
  }

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get LINE() {
    return 0;
  }

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get POLYLINE() {
    return 0;
  }

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get FREELINE() {
    return 0;
  }

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get ANGLE() {
    return 0;
  }

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get COMPOSITE() {
    return 0;
  }

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get POINT() {
    return 0;
  }

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get HANDLE_SIZE() {
    return 0;
  }

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get NOT_PASTING() {
    return 0;
  }

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get FERET_ARRAYSIZE() {
    return 0;
  }

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get FERET_ARRAY_POINTOFFSET() {
    return 0;
  }

  /**
   * 
   * @const {Roi}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get previousRoi() {
    return 0;
  }

  /**
   * 
   * @const {java.awt.BasicStroke}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get onePixelWide() {
    return 0;
  }

  /**
   * Set the location of the ROI in image coordinates.
   * 
   * @param {int} x - 
   * @param {int} y - 
   * 
   * @author Created by ijdoc2js
   */
  setLocation(x, y) {
    throw new NotImplementedException("Roi.setLocation(..)");
  };

  /**
   * Set the location of the ROI in image coordinates.
   * 
   * @param {double} x - 
   * @param {double} y - 
   * 
   * @author Created by ijdoc2js
   */
  setLocation(x, y) {
    throw new NotImplementedException("Roi.setLocation(..)");
  };

  /**
   * 
   * @param {ImagePlus} imp - 
   * 
   * @author Created by ijdoc2js
   */
  setImage(imp) {
    throw new NotImplementedException("Roi.setImage(..)");
  };

  /**
   * Returns the ImagePlus associated with this ROI, or null.
   * 
   * @return ImagePlus
   * 
   * @author Created by ijdoc2js
   */
  getImage() {
    throw new NotImplementedException("Roi.getImage(..)");
  };

  /**
   * Returns the ID of the image associated with this ROI.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getImageID() {
    throw new NotImplementedException("Roi.getImageID(..)");
  };

  /**
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getType() {
    throw new NotImplementedException("Roi.getType(..)");
  };

  /**
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getState() {
    throw new NotImplementedException("Roi.getState(..)");
  };

  /**
   * Returns the perimeter length.
   * 
   * @return double
   * 
   * @author Created by ijdoc2js
   */
  getLength() {
    throw new NotImplementedException("Roi.getLength(..)");
  };

  /**
   * Returns Feret's diameter, the greatest distance between 
 * any two points along the ROI boundary.
   * 
   * @return double
   * 
   * @author Created by ijdoc2js
   */
  getFeretsDiameter() {
    throw new NotImplementedException("Roi.getFeretsDiameter(..)");
  };

  /**
   * Returns an array with the following values:
   * <br>[0] "Feret" (maximum caliper width)
   * <br>[1] "FeretAngle" (angle of diameter with maximum caliper width, between 0 and 180 deg)
   * <br>[2] "MinFeret" (minimum caliper width)
   * <br>[3][4] , "FeretX" and "FeretY", the X and Y coordinates of the starting point
   * (leftmost point) of the maximum-caliper-width diameter.
   * <br>[5-7] reserved
   * <br>All these values and point coordinates are in calibrated image coordinates.
   * <p>
   * The following array elements are end points of the maximum and minimum caliper diameter,
   * in unscaled image pixel coordinates:
   * <br>[8][9] "FeretX1", "FeretY1"; unscaled versions of "FeretX" and "FeretY"
   * (subclasses may use any end of the diameter, not necessarily the left one)
   * <br>[10][11] "FeretX2", "FeretY2", end point of the maxium-caliper-width diameter.
   * Both of these points are vertices of the convex hull.
   * <br> The final four array elements are the starting and end points of the minimum caliper width,
   * <br>[12],[13] "MinFeretX", "MinFeretY", and
   * <br>[14],[15] "MinFeretX2", "MinFeretY2". These two pooints are not sorted by x,
   * but the first point point (MinFeretX, MinFeretY) is guaranteed to be a vertex of the convex hull,
   * while second point (MinFeretX2, MinFeretY2) usually is not a vertex point but at a
   * boundary line of the convex hull.</p>
   * 
   * @return double[]
   * 
   * @author Created by ijdoc2js
   */
  getFeretValues() {
    throw new NotImplementedException("Roi.getFeretValues(..)");
  };

  /**
   * Returns the convex hull of this Roi as a Polygon with integer coordinates
   * by rounding the floating-point values.
   * Coordinates of the convex hull are image pixel coordinates.
   * 
   * @return java.awt.Polygon
   * 
   * @author Created by ijdoc2js
   */
  getConvexHull() {
    throw new NotImplementedException("Roi.getConvexHull(..)");
  };

  /**
   * Returns the convex hull of this Roi as a FloatPolygon.
   * Coordinates of the convex hull are image pixel coordinates.
   * 
   * @return FloatPolygon
   * 
   * @author Created by ijdoc2js
   */
  getFloatConvexHull() {
    throw new NotImplementedException("Roi.getFloatConvexHull(..)");
  };

  /**
   * Return this selection's bounding rectangle.
   * 
   * @return java.awt.Rectangle
   * 
   * @author Created by ijdoc2js
   */
  getBounds() {
    throw new NotImplementedException("Roi.getBounds(..)");
  };

  /**
   * Return this selection's bounding rectangle.
   * 
   * @return java.awt.geom.Rectangle2D.Double
   * 
   * @author Created by ijdoc2js
   */
  getFloatBounds() {
    throw new NotImplementedException("Roi.getFloatBounds(..)");
  };

  /**
   * <span class="deprecatedLabel">Deprecated.</span>&nbsp;<span class="deprecationComment">replaced by getBounds()</span>
   * 
   * @deprecated .</span>&nbsp;<span class="deprecationComment">replaced by getBounds()</span>
   * @return java.awt.Rectangle
   * 
   * @author Created by ijdoc2js
   */
  getBoundingRect() {
    throw new NotImplementedException("Roi.getBoundingRect(..)");
  };

  /**
   * Returns the outline of this selection as a Polygon, or 
 * null if this is a straight line selection.
   * 
   * @return java.awt.Polygon
   * 
   * @author Created by ijdoc2js
   */
  getPolygon() {
    throw new NotImplementedException("Roi.getPolygon(..)");
  };

  /**
   * Returns the outline (in image pixel coordinates) as a FloatPolygon
   * 
   * @return FloatPolygon
   * 
   * @author Created by ijdoc2js
   */
  getFloatPolygon() {
    throw new NotImplementedException("Roi.getFloatPolygon(..)");
  };

  /**
   * Returns the outline in image pixel coordinates,
   * where options may include "close" to add a point to close the outline
   * if this is an area roi and the outline is not closed yet.
   * (For ShapeRois, "separate" inserts NaN values between subpaths).
   * 
   * @param {java.lang.String} options - 
   * @return FloatPolygon
   * 
   * @author Created by ijdoc2js
   */
  getFloatPolygon(options) {
    throw new NotImplementedException("Roi.getFloatPolygon(..)");
  };

  /**
   * Returns, as a FloatPolygon, an interpolated version 
   * of this selection that has points spaced 1.0 pixel apart.
   * 
   * @return FloatPolygon
   * 
   * @author Created by ijdoc2js
   */
  getInterpolatedPolygon() {
    throw new NotImplementedException("Roi.getInterpolatedPolygon(..)");
  };

  /**
   * Returns, as a FloatPolygon, an interpolated version of
   * this selection with points spaced 'interval' pixels apart. 
   * If 'smooth' is true, traced and freehand selections are
   * first smoothed using a 3 point running average.
   * 
   * @param {double} interval - 
   * @param {boolean} smooth - 
   * @return FloatPolygon
   * 
   * @author Created by ijdoc2js
   */
  getInterpolatedPolygon(interval, smooth) {
    throw new NotImplementedException("Roi.getInterpolatedPolygon(..)");
  };

  /**
   * Returns the coordinates of the pixels inside this ROI as an array of Points.
   * 
   * @return java.awt.Point[]
   * 
   * @author Created by ijdoc2js
   */
  getContainedPoints() {
    throw new NotImplementedException("Roi.getContainedPoints(..)");
  };

  /**
   * Returns the coordinates of the pixels inside this ROI as a FloatPolygon.
   * 
   * @return FloatPolygon
   * 
   * @author Created by ijdoc2js
   */
  getContainedFloatPoints() {
    throw new NotImplementedException("Roi.getContainedFloatPoints(..)");
  };

  /**
   * <pre> Calculates intersections of a line segment with a circle
   * Author N.Vischer
   * ax, ay, bx, by: points A and B of line segment
   * cx, cy, rad: Circle center and radius.
   * ignoreOutside: if true, ignores intersections outside the line segment A-B
   * Returns an array of 0, 2 or 4 coordinates (for 0, 1, or 2 intersection
   * points). If two intersection points are returned, they are listed in travel
   * direction A-&gt;B
   * </pre>
   * 
   * @param {double} ax - 
   * @param {double} ay - 
   * @param {double} bx - 
   * @param {double} by - 
   * @param {double} cx - 
   * @param {double} cy - 
   * @param {double} rad - 
   * @param {boolean} ignoreOutside - 
   * @return double[]
   * 
   * @author Created by ijdoc2js
   */
  lineCircleIntersection(ax, ay, bx, by, cx, cy, rad, ignoreOutside) {
    throw new NotImplementedException("Roi.lineCircleIntersection(..)");
  };

  /**
   * Returns a copy of this roi. See Thinking is Java by Bruce Eckel
   * (www.eckelobjects.com) for a good description of object cloning.
   * 
   * @return java.lang.Object
   * 
   * @author Created by ijdoc2js
   */
  clone() {
    throw new NotImplementedException("Roi.clone(..)");
  };

  /**
   * Aborts constructing or modifying the roi (called by the ImageJ class on escape)
   * 
   * @param {ImagePlus} imp - 
   * 
   * @author Created by ijdoc2js
   */
  abortModification(imp) {
    throw new NotImplementedException("Roi.abortModification(..)");
  };

  /**
   * Nudge ROI one pixel on arrow key press.
   * 
   * @param {int} key - 
   * 
   * @author Created by ijdoc2js
   */
  nudge(key) {
    throw new NotImplementedException("Roi.nudge(..)");
  };

  /**
   * Nudge lower right corner of rectangular and oval ROIs by
   * one pixel based on arrow key press.
   * 
   * @param {int} key - 
   * 
   * @author Created by ijdoc2js
   */
  nudgeCorner(key) {
    throw new NotImplementedException("Roi.nudgeCorner(..)");
  };

  /**
   * 
   * @param {java.awt.Graphics} g - 
   * 
   * @author Created by ijdoc2js
   */
  draw(g) {
    throw new NotImplementedException("Roi.draw(..)");
  };

  /**
   * 
   * @param {java.awt.Graphics} g - 
   * 
   * @author Created by ijdoc2js
   */
  drawOverlay(g) {
    throw new NotImplementedException("Roi.drawOverlay(..)");
  };

  /**
   * Returns the current handle size.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getHandleSize() {
    throw new NotImplementedException("Roi.getHandleSize(..)");
  };

  /**
   * Sets the current handle size.
   * 
   * @param {int} size - 
   * 
   * @author Created by ijdoc2js
   */
  setHandleSize(size) {
    throw new NotImplementedException("Roi.setHandleSize(..)");
  };

  /**
   * Returns the default handle size.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getDefaultHandleSize() {
    throw new NotImplementedException("Roi.getDefaultHandleSize(..)");
  };

  /**
   * 
   * 
   * @author Created by ijdoc2js
   */
  resetDefaultHandleSize() {
    throw new NotImplementedException("Roi.resetDefaultHandleSize(..)");
  };

  /**
   * <span class="deprecatedLabel">Deprecated.</span>&nbsp;<span class="deprecationComment">replaced by drawPixels(ImageProcessor)</span>
   * 
   * @deprecated .</span>&nbsp;<span class="deprecationComment">replaced by drawPixels(ImageProcessor)</span>
   * 
   * @author Created by ijdoc2js
   */
  drawPixels() {
    throw new NotImplementedException("Roi.drawPixels(..)");
  };

  /**
   * Draws the selection outline on the specified ImageProcessor.
   * 
   * @param {ImageProcessor} ip - 
   * 
   * @author Created by ijdoc2js
   */
  drawPixels(ip) {
    throw new NotImplementedException("Roi.drawPixels(..)");
  };

  /**
   * Returns whether the center of pixel (x,y) is contained in the Roi.
   * The position of a pixel center determines whether a pixel is selected.
   * Points exactly at the left (right) border are considered outside (inside);
   * points exactly on horizontal borders are considered outside (inside) at the border
   * with the lower (higher) y. This convention is opposite to that of the java.awt.Shape class.
   * 
   * @param {int} x - 
   * @param {int} y - 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  contains(x, y) {
    throw new NotImplementedException("Roi.contains(..)");
  };

  /**
   * Returns whether coordinate (x,y) is contained in the Roi.
   * Note that the coordinate (0,0) is the top-left corner of pixel (0,0).
   * Use contains(int, int) to determine whether a given pixel is contained in the Roi.
   * 
   * @param {double} x - 
   * @param {double} y - 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  containsPoint(x, y) {
    throw new NotImplementedException("Roi.containsPoint(..)");
  };

  /**
   * Returns the inverted roi, or null if this is not an area roi or cannot be converted to a ShapeRoi.
   * If imp is not given, assumes a rectangle of size 2e9*2e9 for the boundary.
   * 
   * @param {ImagePlus} imp - 
   * @return Roi
   * 
   * @author Created by ijdoc2js
   */
  getInverse(imp) {
    throw new NotImplementedException("Roi.getInverse(..)");
  };

  /**
   * Returns a handle number if the specified screen coordinates are 
   * inside or near a handle, otherwise returns -1.
   * 
   * @param {int} sx - 
   * @param {int} sy - 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  isHandle(sx, sy) {
    throw new NotImplementedException("Roi.isHandle(..)");
  };

  /**
   * If 'add' is true, adds this selection to the previous one. If 'subtract' is true, subtracts 
   * it from the previous selection. Called by the IJ.doWand() method, and the makeRectangle(), 
   * makeOval(), makePolygon() and makeSelection() macro functions.
   * 
   * @param {boolean} add - 
   * @param {boolean} subtract - 
   * 
   * @author Created by ijdoc2js
   */
  update(add, subtract) {
    throw new NotImplementedException("Roi.update(..)");
  };

  /**
   * 
   * 
   * @author Created by ijdoc2js
   */
  showStatus() {
    throw new NotImplementedException("Roi.showStatus(..)");
  };

  /**
   * Always returns null for rectangular Roi's
   * 
   * @return ImageProcessor
   * 
   * @author Created by ijdoc2js
   */
  getMask() {
    throw new NotImplementedException("Roi.getMask(..)");
  };

  /**
   * 
   * @param {ImagePlus} clipboard - 
   * 
   * @author Created by ijdoc2js
   */
  startPaste(clipboard) {
    throw new NotImplementedException("Roi.startPaste(..)");
  };

  /**
   * 
   * 
   * @author Created by ijdoc2js
   */
  endPaste() {
    throw new NotImplementedException("Roi.endPaste(..)");
  };

  /**
   * 
   * 
   * @author Created by ijdoc2js
   */
  abortPaste() {
    throw new NotImplementedException("Roi.abortPaste(..)");
  };

  /**
   * Returns the default stroke width.
   * 
   * @return double
   * 
   * @author Created by ijdoc2js
   */
  getDefaultStrokeWidth() {
    throw new NotImplementedException("Roi.getDefaultStrokeWidth(..)");
  };

  /**
   * Sets the default stroke width.
   * 
   * @param {double} width - 
   * 
   * @author Created by ijdoc2js
   */
  setDefaultStrokeWidth(width) {
    throw new NotImplementedException("Roi.setDefaultStrokeWidth(..)");
  };

  /**
   * Returns the group value assigned to newly created ROIs.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getDefaultGroup() {
    throw new NotImplementedException("Roi.getDefaultGroup(..)");
  };

  /**
   * Sets the group value assigned to newly created ROIs, and updates default group color.
   * 
   * @param {int} group - 
   * 
   * @author Created by ijdoc2js
   */
  setDefaultGroup(group) {
    throw new NotImplementedException("Roi.setDefaultGroup(..)");
  };

  /**
   * Returns the group attribute of this ROI.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getGroup() {
    throw new NotImplementedException("Roi.getGroup(..)");
  };

  /**
   * Sets the group of this Roi, and updates stroke color accordingly.
   * 
   * @param {int} group - 
   * 
   * @author Created by ijdoc2js
   */
  setGroup(group) {
    throw new NotImplementedException("Roi.setGroup(..)");
  };

  /**
   * Returns the angle in degrees between the specified line and a horizontal line.
   * 
   * @param {int} x1 - 
   * @param {int} y1 - 
   * @param {int} x2 - 
   * @param {int} y2 - 
   * @return double
   * 
   * @author Created by ijdoc2js
   */
  getAngle(x1, y1, x2, y2) {
    throw new NotImplementedException("Roi.getAngle(..)");
  };

  /**
   * Returns the angle in degrees between the specified line and a horizontal line.
   * 
   * @param {double} x1 - 
   * @param {double} y1 - 
   * @param {double} x2 - 
   * @param {double} y2 - 
   * @return double
   * 
   * @author Created by ijdoc2js
   */
  getFloatAngle(x1, y1, x2, y2) {
    throw new NotImplementedException("Roi.getFloatAngle(..)");
  };

  /**
   * Sets the default (global) color used for ROI outlines.
   * 
   * @param {java.awt.Color} c - 
   * 
   * @author Created by ijdoc2js
   */
  setColor(c) {
    throw new NotImplementedException("Roi.setColor(..)");
  };

  /**
   * Returns the default (global) color used for drawing ROI outlines.
   * 
   * @return java.awt.Color
   * 
   * @author Created by ijdoc2js
   */
  getColor() {
    throw new NotImplementedException("Roi.getColor(..)");
  };

  /**
   * Sets the color used by this ROI to draw its outline. This color, if not null, 
   * overrides the global color set by the static get setColor() method.
   * 
   * @param {java.awt.Color} c - 
   * 
   * @author Created by ijdoc2js
   */
  setStrokeColor(c) {
    throw new NotImplementedException("Roi.setStrokeColor(..)");
  };

  /**
   * Returns the the color used to draw the ROI outline or null if the default color is being used.
   * 
   * @return java.awt.Color
   * 
   * @author Created by ijdoc2js
   */
  getStrokeColor() {
    throw new NotImplementedException("Roi.getStrokeColor(..)");
  };

  /**
   * Sets the fill color used to display this ROI, or set to null to display it transparently.
   * 
   * @param {java.awt.Color} color - 
   * 
   * @author Created by ijdoc2js
   */
  setFillColor(color) {
    throw new NotImplementedException("Roi.setFillColor(..)");
  };

  /**
   * Returns the fill color used to display this ROI, or null if it is displayed transparently.
   * 
   * @return java.awt.Color
   * 
   * @author Created by ijdoc2js
   */
  getFillColor() {
    throw new NotImplementedException("Roi.getFillColor(..)");
  };

  /**
   * 
   * @param {java.awt.Color} color - 
   * 
   * @author Created by ijdoc2js
   */
  setDefaultFillColor(color) {
    throw new NotImplementedException("Roi.setDefaultFillColor(..)");
  };

  /**
   * 
   * @return java.awt.Color
   * 
   * @author Created by ijdoc2js
   */
  getDefaultFillColor() {
    throw new NotImplementedException("Roi.getDefaultFillColor(..)");
  };

  /**
   * 
   * @param {boolean} antiAlias - 
   * 
   * @author Created by ijdoc2js
   */
  setAntiAlias(antiAlias) {
    throw new NotImplementedException("Roi.setAntiAlias(..)");
  };

  /**
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  getAntiAlias() {
    throw new NotImplementedException("Roi.getAntiAlias(..)");
  };

  /**
   * Copy the attributes (outline color, fill color, outline width) 
 * of 'roi2' to the this selection.
   * 
   * @param {Roi} roi2 - 
   * 
   * @author Created by ijdoc2js
   */
  copyAttributes(roi2) {
    throw new NotImplementedException("Roi.copyAttributes(..)");
  };

  /**
   * <span class="deprecatedLabel">Deprecated.</span>&nbsp;<span class="deprecationComment">replaced by setStrokeColor()</span>
   * 
   * @deprecated .</span>&nbsp;<span class="deprecationComment">replaced by setStrokeColor()</span>
   * @param {java.awt.Color} c - 
   * 
   * @author Created by ijdoc2js
   */
  setInstanceColor(c) {
    throw new NotImplementedException("Roi.setInstanceColor(..)");
  };

  /**
   * <span class="deprecatedLabel">Deprecated.</span>&nbsp;<span class="deprecationComment">replaced by setStrokeWidth(int)</span>
   * 
   * @deprecated .</span>&nbsp;<span class="deprecationComment">replaced by setStrokeWidth(int)</span>
   * @param {int} width - 
   * 
   * @author Created by ijdoc2js
   */
  setLineWidth(width) {
    throw new NotImplementedException("Roi.setLineWidth(..)");
  };

  /**
   * 
   * @param {float} width - 
   * 
   * @author Created by ijdoc2js
   */
  updateWideLine(width) {
    throw new NotImplementedException("Roi.updateWideLine(..)");
  };

  /**
   * Set 'nonScalable' true to have TextRois in a display 
   * list drawn at a fixed location and size.
   * 
   * @param {boolean} nonScalable - 
   * 
   * @author Created by ijdoc2js
   */
  setNonScalable(nonScalable) {
    throw new NotImplementedException("Roi.setNonScalable(..)");
  };

  /**
   * Sets the width of the line used to draw this ROI. Set
   * the width to 0.0 and the ROI will be drawn using a
   * a 1 pixel stroke width regardless of the magnification.
   * 
   * @param {float} strokeWidth - 
   * 
   * @author Created by ijdoc2js
   */
  setStrokeWidth(strokeWidth) {
    throw new NotImplementedException("Roi.setStrokeWidth(..)");
  };

  /**
   * This is a version of setStrokeWidth() that accepts a double argument.
   * 
   * @param {double} strokeWidth - 
   * 
   * @author Created by ijdoc2js
   */
  setStrokeWidth(strokeWidth) {
    throw new NotImplementedException("Roi.setStrokeWidth(..)");
  };

  /**
   * 
   * @param {double} strokeWidth - 
   * 
   * @author Created by ijdoc2js
   */
  setUnscalableStrokeWidth(strokeWidth) {
    throw new NotImplementedException("Roi.setUnscalableStrokeWidth(..)");
  };

  /**
   * Returns the lineWidth.
   * 
   * @return float
   * 
   * @author Created by ijdoc2js
   */
  getStrokeWidth() {
    throw new NotImplementedException("Roi.getStrokeWidth(..)");
  };

  /**
   * Sets the Stroke used to draw this ROI.
   * 
   * @param {java.awt.BasicStroke} stroke - 
   * 
   * @author Created by ijdoc2js
   */
  setStroke(stroke) {
    throw new NotImplementedException("Roi.setStroke(..)");
  };

  /**
   * Returns the Stroke used to draw this ROI, or null if no Stroke is used.
   * 
   * @return java.awt.BasicStroke
   * 
   * @author Created by ijdoc2js
   */
  getStroke() {
    throw new NotImplementedException("Roi.getStroke(..)");
  };

  /**
   * Returns 'true' if the stroke width is scaled as images are zoomed.
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  getScaleStrokeWidth() {
    throw new NotImplementedException("Roi.getScaleStrokeWidth(..)");
  };

  /**
   * Returns the name of this ROI, or null.
   * 
   * @return java.lang.String
   * 
   * @author Created by ijdoc2js
   */
  getName() {
    throw new NotImplementedException("Roi.getName(..)");
  };

  /**
   * Sets the name of this ROI.
   * 
   * @param {java.lang.String} name - 
   * 
   * @author Created by ijdoc2js
   */
  setName(name) {
    throw new NotImplementedException("Roi.setName(..)");
  };

  /**
   * Sets the Paste transfer mode.
   * 
   * @param {int} transferMode - 
   * 
   * @author Created by ijdoc2js
   */
  setPasteMode(transferMode) {
    throw new NotImplementedException("Roi.setPasteMode(..)");
  };

  /**
   * Sets the rounded rectangle corner diameter (pixels).
   * 
   * @param {int} cornerDiameter - 
   * 
   * @author Created by ijdoc2js
   */
  setCornerDiameter(cornerDiameter) {
    throw new NotImplementedException("Roi.setCornerDiameter(..)");
  };

  /**
   * Returns the rounded rectangle corner diameter (pixels).
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getCornerDiameter() {
    throw new NotImplementedException("Roi.getCornerDiameter(..)");
  };

  /**
   * Obsolete; replaced by setCornerDiameter().
   * 
   * @param {int} cornerDiameter - 
   * 
   * @author Created by ijdoc2js
   */
  setRoundRectArcSize(cornerDiameter) {
    throw new NotImplementedException("Roi.setRoundRectArcSize(..)");
  };

  /**
   * Obsolete; replaced by getCornerDiameter().
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getRoundRectArcSize() {
    throw new NotImplementedException("Roi.getRoundRectArcSize(..)");
  };

  /**
   * Sets the stack position (image number) of this ROI. In an overlay, this
   * ROI is only displayed when the stack is at the specified position.
   * Set to zero to have the ROI displayed on all images in the stack.
   * 
   * @param {int} n - 
   * 
   * @author Created by ijdoc2js
   */
  setPosition(n) {
    throw new NotImplementedException("Roi.setPosition(..)");
  };

  /**
   * Returns the stack position (image number) of this ROI, or
 * zero if the ROI is not associated with a particular stack image.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getPosition() {
    throw new NotImplementedException("Roi.getPosition(..)");
  };

  /**
   * Sets the hyperstack position of this ROI. In an overlay, this
   * ROI is only displayed when the hyperstack is at the specified position.
   * 
   * @param {int} channel - 
   * @param {int} slice - 
   * @param {int} frame - 
   * 
   * @author Created by ijdoc2js
   */
  setPosition(channel, slice, frame) {
    throw new NotImplementedException("Roi.setPosition(..)");
  };

  /**
   * Returns 'true' if setPosition(C,Z,T) has been called.
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  hasHyperStackPosition() {
    throw new NotImplementedException("Roi.hasHyperStackPosition(..)");
  };

  /**
   * Sets the position of this ROI based on the stack position of the specified image.
   * 
   * @param {ImagePlus} imp - 
   * 
   * @author Created by ijdoc2js
   */
  setPosition(imp) {
    throw new NotImplementedException("Roi.setPosition(..)");
  };

  /**
   * Returns the channel position of this ROI, or zero
   * if this ROI is not associated with a particular channel.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getCPosition() {
    throw new NotImplementedException("Roi.getCPosition(..)");
  };

  /**
   * Returns the slice position of this ROI, or zero
   * if this ROI is not associated with a particular slice.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getZPosition() {
    throw new NotImplementedException("Roi.getZPosition(..)");
  };

  /**
   * Returns the frame position of this ROI, or zero
 * if this ROI is not associated with a particular frame.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getTPosition() {
    throw new NotImplementedException("Roi.getTPosition(..)");
  };

  /**
   * 
   * @param {Overlay} overlay - 
   * 
   * @author Created by ijdoc2js
   */
  setPrototypeOverlay(overlay) {
    throw new NotImplementedException("Roi.setPrototypeOverlay(..)");
  };

  /**
   * 
   * @return Overlay
   * 
   * @author Created by ijdoc2js
   */
  getPrototypeOverlay() {
    throw new NotImplementedException("Roi.getPrototypeOverlay(..)");
  };

  /**
   * Returns the current paste transfer mode, or NOT_PASTING (-1)
 * if no paste operation is in progress.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getPasteMode() {
    throw new NotImplementedException("Roi.getPasteMode(..)");
  };

  /**
   * Returns the current paste transfer mode.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getCurrentPasteMode() {
    throw new NotImplementedException("Roi.getCurrentPasteMode(..)");
  };

  /**
   * Returns 'true' if this is an area selection.
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  isArea() {
    throw new NotImplementedException("Roi.isArea(..)");
  };

  /**
   * Returns 'true' if this is a line selection.
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  isLine() {
    throw new NotImplementedException("Roi.isLine(..)");
  };

  /**
   * Returns 'true' if this is an ROI primarily used from drawing
 * (e.g., TextRoi or Arrow).
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  isDrawingTool() {
    throw new NotImplementedException("Roi.isDrawingTool(..)");
  };

  /**
   * Convenience method that converts Roi type to a human-readable form.
   * 
   * @return java.lang.String
   * 
   * @author Created by ijdoc2js
   */
  getTypeAsString() {
    throw new NotImplementedException("Roi.getTypeAsString(..)");
  };

  /**
   * Returns true if this ROI is currently displayed on an image.
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  isVisible() {
    throw new NotImplementedException("Roi.isVisible(..)");
  };

  /**
   * Returns true if this is a slection that supports sub-pixel resolution.
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  subPixelResolution() {
    throw new NotImplementedException("Roi.subPixelResolution(..)");
  };

  /**
   * Returns true if this is a PolygonRoi that supports sub-pixel 
 * resolution and polygons are drawn on zoomed images offset
 * down and to the right by 0.5 pixels..
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  getDrawOffset() {
    throw new NotImplementedException("Roi.getDrawOffset(..)");
  };

  /**
   * 
   * @param {boolean} drawOffset - 
   * 
   * @author Created by ijdoc2js
   */
  setDrawOffset(drawOffset) {
    throw new NotImplementedException("Roi.setDrawOffset(..)");
  };

  /**
   * 
   * @param {boolean} ignoreClipRect - 
   * 
   * @author Created by ijdoc2js
   */
  setIgnoreClipRect(ignoreClipRect) {
    throw new NotImplementedException("Roi.setIgnoreClipRect(..)");
  };

  /**
   * Returns 'true' if this ROI is displayed and is also in an overlay.
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  isActiveOverlayRoi() {
    throw new NotImplementedException("Roi.isActiveOverlayRoi(..)");
  };

  /**
   * Checks whether two rectangles are equal.
   * 
   * @param {java.lang.Object} obj - 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  equals(obj) {
    throw new NotImplementedException("Roi.equals(..)");
  };

  /**
   * Converts a float array to an int array using truncation.
   * 
   * @param {float[]} arr - 
   * @return int[]
   * 
   * @author Created by ijdoc2js
   */
  toInt(arr) {
    throw new NotImplementedException("Roi.toInt(..)");
  };

  /**
   * 
   * @param {float[]} arr - 
   * @param {int[]} arr2 - 
   * @param {int} size - 
   * @return int[]
   * 
   * @author Created by ijdoc2js
   */
  toInt(arr, arr2, size) {
    throw new NotImplementedException("Roi.toInt(..)");
  };

  /**
   * Converts a float array to an int array using rounding.
   * 
   * @param {float[]} arr - 
   * @return int[]
   * 
   * @author Created by ijdoc2js
   */
  toIntR(arr) {
    throw new NotImplementedException("Roi.toIntR(..)");
  };

  /**
   * Converts an int array to a float array.
   * 
   * @param {int[]} arr - 
   * @return float[]
   * 
   * @author Created by ijdoc2js
   */
  toFloat(arr) {
    throw new NotImplementedException("Roi.toFloat(..)");
  };

  /**
   * Returns whether a number is an integer
   * 
   * @param {double} x - 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  isInteger(x) {
    throw new NotImplementedException("Roi.isInteger(..)");
  };

  /**
   * 
   * @param {java.lang.String} key - 
   * @param {java.lang.String} value - 
   * 
   * @author Created by ijdoc2js
   */
  setProperty(key, value) {
    throw new NotImplementedException("Roi.setProperty(..)");
  };

  /**
   * 
   * @param {java.lang.String} property - 
   * @return java.lang.String
   * 
   * @author Created by ijdoc2js
   */
  getProperty(property) {
    throw new NotImplementedException("Roi.getProperty(..)");
  };

  /**
   * 
   * @param {java.lang.String} properties - 
   * 
   * @author Created by ijdoc2js
   */
  setProperties(properties) {
    throw new NotImplementedException("Roi.setProperties(..)");
  };

  /**
   * 
   * @return java.lang.String
   * 
   * @author Created by ijdoc2js
   */
  getProperties() {
    throw new NotImplementedException("Roi.getProperties(..)");
  };

  /**
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getPropertyCount() {
    throw new NotImplementedException("Roi.getPropertyCount(..)");
  };

  /**
   * 
   * @return java.lang.String
   * 
   * @author Created by ijdoc2js
   */
  toString() {
    throw new NotImplementedException("Roi.toString(..)");
  };

  /**
   * Deprecated
   * 
   * @deprecated d
   * 
   * @author Created by ijdoc2js
   */
  temporarilyHide() {
    throw new NotImplementedException("Roi.temporarilyHide(..)");
  };

  /**
   * 
   * @param {java.awt.event.MouseEvent} e - 
   * 
   * @author Created by ijdoc2js
   */
  mouseDragged(e) {
    throw new NotImplementedException("Roi.mouseDragged(..)");
  };

  /**
   * 
   * @param {java.awt.event.MouseEvent} e - 
   * 
   * @author Created by ijdoc2js
   */
  mouseMoved(e) {
    throw new NotImplementedException("Roi.mouseMoved(..)");
  };

  /**
   * 
   * @param {java.awt.event.MouseEvent} e - 
   * 
   * @author Created by ijdoc2js
   */
  mouseReleased(e) {
    throw new NotImplementedException("Roi.mouseReleased(..)");
  };

  /**
   * 
   * @return double
   * 
   * @author Created by ijdoc2js
   */
  getXBase() {
    throw new NotImplementedException("Roi.getXBase(..)");
  };

  /**
   * 
   * @return double
   * 
   * @author Created by ijdoc2js
   */
  getYBase() {
    throw new NotImplementedException("Roi.getYBase(..)");
  };

  /**
   * 
   * @return double
   * 
   * @author Created by ijdoc2js
   */
  getFloatWidth() {
    throw new NotImplementedException("Roi.getFloatWidth(..)");
  };

  /**
   * 
   * @return double
   * 
   * @author Created by ijdoc2js
   */
  getFloatHeight() {
    throw new NotImplementedException("Roi.getFloatHeight(..)");
  };

  /**
   * Overridden by PolygonRoi (angle between first two points), TextRoi (text angle) and Line (line angle).
   * 
   * @return double
   * 
   * @author Created by ijdoc2js
   */
  getAngle() {
    throw new NotImplementedException("Roi.getAngle(..)");
  };

  /**
   * 
   * 
   * @author Created by ijdoc2js
   */
  enableSubPixelResolution() {
    throw new NotImplementedException("Roi.enableSubPixelResolution(..)");
  };

  /**
   * 
   * @param {boolean} isCursor - 
   * 
   * @author Created by ijdoc2js
   */
  setIsCursor(isCursor) {
    throw new NotImplementedException("Roi.setIsCursor(..)");
  };

  /**
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  isCursor() {
    throw new NotImplementedException("Roi.isCursor(..)");
  };

  /**
   * 
   * @return java.lang.String
   * 
   * @author Created by ijdoc2js
   */
  getDebugInfo() {
    throw new NotImplementedException("Roi.getDebugInfo(..)");
  };

  /**
   * 
   * @return ImageStatistics
   * 
   * @author Created by ijdoc2js
   */
  getStatistics() {
    throw new NotImplementedException("Roi.getStatistics(..)");
  };

  /**
   * 
   * @return FloatPolygon
   * 
   * @author Created by ijdoc2js
   */
  getRotationCenter() {
    throw new NotImplementedException("Roi.getRotationCenter(..)");
  };

  /**
   * 
   * @param {double} x - 
   * @param {double} y - 
   * 
   * @author Created by ijdoc2js
   */
  setRotationCenter(x, y) {
    throw new NotImplementedException("Roi.setRotationCenter(..)");
  };

  /**
   * Returns the number of points in this selection; equivalent to getFloatPolygon().npoints.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  size() {
    throw new NotImplementedException("Roi.size(..)");
  };

  /**
   * 
   * @return double[]
   * 
   * @author Created by ijdoc2js
   */
  getContourCentroid() {
    throw new NotImplementedException("Roi.getContourCentroid(..)");
  };

  /**
   * Obsolete, replaced by Roi.convertLineToArea()
   * 
   * @deprecated .</span>&nbsp;
   * @return Roi
   * 
   * @author Created by ijdoc2js
   */
  convertToPolygon() {
    throw new NotImplementedException("Roi.convertToPolygon(..)");
  };

  /**
   * Converts a line selection into an area (polygon or composite) selection.<br>
 * Author: Michael Schmid
   * 
   * @param {Roi} line - 
   * @return Roi
   * 
   * @author Created by ijdoc2js
   */
  convertLineToArea(line) {
    throw new NotImplementedException("Roi.convertLineToArea(..)");
  };

  /**
   * Returns a hashcode for this Roi that typically changes 
   * if it is moved, even though it is still the same object.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getHashCode() {
    throw new NotImplementedException("Roi.getHashCode(..)");
  };

  /**
   * 
   * @param {double} scale - 
   * 
   * @author Created by ijdoc2js
   */
  setFlattenScale(scale) {
    throw new NotImplementedException("Roi.setFlattenScale(..)");
  };

  /**
   * 
   * @param {int} id - 
   * 
   * @author Created by ijdoc2js
   */
  notifyListeners(id) {
    throw new NotImplementedException("Roi.notifyListeners(..)");
  };

  /**
   * 
   * @param {RoiListener} listener - 
   * 
   * @author Created by ijdoc2js
   */
  addRoiListener(listener) {
    throw new NotImplementedException("Roi.addRoiListener(..)");
  };

  /**
   * 
   * @param {RoiListener} listener - 
   * 
   * @author Created by ijdoc2js
   */
  removeRoiListener(listener) {
    throw new NotImplementedException("Roi.removeRoiListener(..)");
  };

  /**
   * Required by the <code>Iterable</code> interface.
   * Use to iterate over the contained coordinates. Usage example: 
   * <pre> for (Point p : roi) {
   * // process p
   * }
   * </pre>
   * Author: Wilhelm Burger
   * 
   * @return java.util.Iterator&lt;java.awt.Point&gt;
   * 
   * @author Created by ijdoc2js
   */
  iterator() {
    throw new NotImplementedException("Roi.iterator(..)");
  };

} // End of class Roi

