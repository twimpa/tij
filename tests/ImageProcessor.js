/*
 *  tij: Tiny ImageJ API
 *  Copyright (C) 2020  Jean-Christophe Taveau.
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
 * 
 */


'use strict';

function test32() {
  // Row-first
  const pix = [1,2,3,4,5,6,7,8,10];

  let ip = new FloatProcessor(3,3);
  for (let i=0; i < pix.length; i++) {
    ip.setf(i,pix[i]);
  }
  let imp= new ImagePlus("test32",ip);
  //imp.show();
  return ip;
}

function test8() {
  // Row-first
  const pix = [1,2,3,4,5,6,7,8,9];

  let ip = new ByteProcessor(3,3);
  for (let i=0; i < pix.length; i++) {
    ip.setf(i,pix[i]);
  }
  let imp= new ImagePlus("test8",ip);
  //imp.show();
  return ip;
}

function test16() {
  // Row-first
  const pix = [1,2,3,4,5,6,7,8,9];

  let ip = new ShortProcessor(3,3);
  for (let i=0; i < pix.length; i++) {
    ip.setf(i,pix[i]);
  }
  let imp= new ImagePlus("test16",ip);
  //imp.show();
  return ip;
}

function testRGB() {
  // Row-first
  const pix = [1,2,3,4,5,6,7,8,9];

  let ip = new ColorProcessor(3,3);
  for (let i=0; i < pix.length; i++) {
    ip.setf(i,pix[i]);
  }
  let imp= new ImagePlus("testRGB",ip);
  //imp.show();
  return ip;
}

function toArray2D(pixels,w,h) {
  let result = '';
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      result += pixels[x][y].toString();
    }
  }
  return result;
}

describe('ImageProcessor', function () {
    describe('sqr() => ', function () {
      it('Should do a square transformation on the value of the image,(8bit)', function () {
        let Process8 = test8();
        Process8.sqr();
        let ProcArray = Process8.getFloatArray();
        let result = toArray2D(ProcArray, 3, 3);
        expect(result).toBe('149162536496481');
      });

      it('Should do a square transformation on the value of the image,(16bit)', function () {
        let Process16 = test16();
        Process16.sqr();
        let ProcArray = Process16.getFloatArray();
        let result = toArray2D(ProcArray, 3, 3);
        expect(result).toBe('149162536496481');
      });

      it('Should do a square transformation on the value of the image,(32bit)', function () {
        let Process32 = test32();
        Process32.sqr();
        let ProcArray = Process32.getFloatArray();
        let result = toArray2D(ProcArray, 3, 3);
        expect(result).toBe('1491625364964100');
      });

      it('Should do a square transformation on the value of the image,(RGB)', function () {
        let ProcessRGB = testRGB();
        ProcessRGB.sqr();
        let ProcArray = ProcessRGB.getFloatArray();
        let result = toArray2D(ProcArray, 3,3);
        expect(result).toBe('-16777215-16777212-16777207-16777200-16777191-16777180-16777167-16777152-16777135');
      });
    });

    describe('sqrt() => ', function () {
      it('Should do a square root transformation on the value of the image,(8bit)', function () {
        let Process8 = test8();
        Process8.sqrt();
        let ProcArray = Process8.getFloatArray();
        let result = toArray2D(ProcArray, 3, 3);
        expect(result).toBe('111222223');
      });

      it('Should do a square root transformation on the value of the image,(16bit)', function () {
        let Process16 = test16();
        Process16.sqrt();
        let ProcArray = Process16.getFloatArray();
        let result = toArray2D(ProcArray, 3, 3);
        expect(result).toBe('111222223');
      });

      it('Should do a square root transformation on the value of the image,(32bit)', function () {
        let Process32 = test32();
        Process32.sqrt();
        let ProcArray = Process32.getFloatArray();
        let result = toArray2D(ProcArray, 3, 3);
        expect(result).toBe('11.41421353816986081.732050776481628422.23606801033022.44948983192443852.64575123786926272.82842707633972173.1622776985168457');
      });

      it('Should do a square root transformation on the value of the image,(RGB)', function () {
        let ProcessRGB = testRGB();
        ProcessRGB.sqrt();
        let ProcArray = ProcessRGB.getFloatArray();
        let result = toArray2D(ProcArray, 3,3);
        expect(result).toBe('-16777215-16777215-16777215-16777214-16777214-16777214-16777214-16777214-16777213');
      });
    });

    describe('xor => ', function () {
      it('Should return an image after a exclusive OR operation,(8bit)', function () {
        let Process8 = test8();
        Process8.xor(10);
        let ProcArray = Process8.getFloatArray();
        let result = toArray2D(ProcArray, 3, 3);
        expect(result).toBe('11891415121323');
      });

      it('Should return an image after a exclusive OR operation,(16bit)', function () {
        let Process16 = test16();
        Process16.xor(10);
        let ProcArray = Process16.getFloatArray();
        let result = toArray2D(ProcArray, 3, 3);
        expect(result).toBe('11891415121323');
      });

      it('Should return an image after a exclusive OR operation,(32bit)', function () {
        let Process32 = test32();
        Process32.xor(10);
        let ProcArray = Process32.getFloatArray();
        let result = toArray2D(ProcArray, 3, 3);
        expect(result).toBe('1234567810');
      });

      it('Should return an image after a exclusive OR operation,(RGB)', function () {
        let ProcessRGB = testRGB();
        ProcessRGB.xor(10);
        let ProcArray = ProcessRGB.getFloatArray();
        let result = toArray2D(ProcArray, 3,3);
        expect(result).toBe('-16119285-16119288-16119287-16119282-16119281-16119284-16119283-16119294-16119293');
      });
    });
   
    describe('translate => ', function () {
      it('Should moves the image or selection vertically or horizontally by a specified number of pixels,(8bit)', function () {
        let Process8 = test8();
        Process8.translate(1,1);
        let ProcArray = Process8.getFloatArray();
        let result = toArray2D(ProcArray, 3, 3);
        expect(result).toBe('000012045');
      });

      it('Should moves the image or selection vertically or horizontally by a specified number of pixels,(16bit)', function () {
        let Process16 = test16();
        Process16.translate(1,1);
        let ProcArray = Process16.getFloatArray();
        let result = toArray2D(ProcArray, 3, 3);
        expect(result).toBe('000012045');
      });

      it('Should moves the image or selection vertically or horizontally by a specified number of pixels,(32bit)', function () {
        let Process32 = test32();
        Process32.translate(1,1);
        let ProcArray = Process32.getFloatArray();
        let result = toArray2D(ProcArray, 3, 3);
        expect(result).toBe('000012045');
      });

      it('Should moves the image or selection vertically or horizontally by a specified number of pixels,(RGB)', function () {
        let ProcessRGB = testRGB();
        ProcessRGB.translate(1,1);
        let ProcArray = ProcessRGB.getFloatArray();
        let result = toArray2D(ProcArray, 3,3);
        expect(result).toBe('000012045');
      });
    });

   describe('threshold => ', function () {
    it('Should sets pixels less than or equal to level to 0 and all other pixels to 255.,(8bit)', function () {
      let Process8 = test8();
      Process8.threshold(5);
      let ProcArray = Process8.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('00000255255255255');
    });

    it('Should sets pixels less than or equal to level to 0 and all other pixels to 255, (16bit)', function () {
      let Process16 = test16();
      Process16.threshold(5);
      let ProcArray = Process16.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('00000255255255255');
    });
  });

  describe('swapPixelArrays => ', function () {
    it('Should swaps the pixel and snapshot (undo) buffers,(8bit)', function () {
      let newpix = [];
      let Process8 = test8();
      Process8.snapshot();
      Process8.set(newpix);
      Process8.swapPixelArrays();
      let ProcArray = Process8.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('123456789');
    });

    it('Should swaps the pixel and snapshot (undo) buffers,(16bit)', function () {
      let newpix = [];
      let Process16 = test16();
      Process16.snapshot();
      Process16.set(newpix);
      Process16.swapPixelArrays();
      let ProcArray = Process16.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('123456789');
    });

    it('Should swaps the pixel and snapshot (undo) buffers,(32bit)', function () {
      let newpix = [];
      let Process32 = test32();
      Process32.snapshot();
      Process32.set(newpix);
      Process32.swapPixelArrays();
      let ProcArray = Process32.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('1234567810');
    });

    it('Should swaps the pixel and snapshot (undo) buffers,(RGB)', function () {
      let newpix = [];
      let ProcessRGB = testRGB();
      ProcessRGB.snapshot();
      ProcessRGB.set(newpix);
      ProcessRGB.swapPixelArrays();
      let ProcArray = ProcessRGB.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('123456789');
    });
  });

  describe('subtract => ', function () {
    it('Should subtract an int value to all the pixels,(8bit)', function () {
      let Process8 = test8();
      Process8.subtract(2);
      let ProcArray = Process8.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('001234567');
    });

    it('Should subtract an int value to all the pixels,(16bit)', function () {
      let Process16 = test16();
      Process16.subtract(2);
      let ProcArray = Process16.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('001234567');
    });

    it('Should subtract an int value to all the pixels,(32bit)', function () {
      let Process32 = test32();
      Process32.subtract(2);
      let ProcArray = Process32.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('-101234568');
    });

    it('Should subtract an int value to all the pixels,(RGB)', function () {
      let ProcessRGB = testRGB();
      ProcessRGB.subtract(2);
      let ProcArray = ProcessRGB.getFloatArray();
      let result = toArray2D(ProcArray, 3,3);
      expect(result).toBe('-16777216-16777216-16777215-16777214-16777213-16777212-16777211-16777210-16777209');
    });
  });

  describe('reset => ', function () {
    it('Should restores pixels from the snapshot buffer,(8bit)', function () {
      let newpix = [];
      let Process8 = test8();
      Process8.snapshot();
      Process8.set(newpix);
      Process8.reset();
      let ProcArray = Process8.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('123456789');
    });

    it('Should restores pixels from the snapshot buffer,(16bit)', function () {
      let newpix = [];
      let Process16 = test16();
      Process16.snapshot();
      Process16.set(newpix);
      Process16.reset();
      let ProcArray = Process16.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('123456789');
    });

    it('Should restores pixels from the snapshot buffer,(32bit)', function () {
      let newpix = [];
      let Process32 = test32();
      Process32.snapshot();
      Process32.set(newpix);
      Process32.reset();
      let ProcArray = Process32.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('1234567810');
    });

    it('Should restores pixels from the snapshot buffer,(RGB)', function () {
      let newpix = [];
      let ProcessRGB = testRGB();
      ProcessRGB.snapshot();
      ProcessRGB.set(newpix);
      ProcessRGB.reset();
      let ProcArray = ProcessRGB.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('123456789');
    });
  });

  describe('smooth => ', function () {
    it('Should replaces each pixel with the 3x3 neighborhood mean,(8bit)', function () {
      let Process8 = test8();
      Process8.smooth();
      let ProcArray = Process8.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('234456678');
    });

    it('Should replaces each pixel with the 3x3 neighborhood mean,(16bit)', function () {
      let Process16 = test16();
      Process16.smooth();
      let ProcArray = Process16.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('234456678');
    });

    it('Should replaces each pixel with the 3x3 neighborhood mean,(32bit)', function () {
      let Process32 = test32();
      Process32.smooth();
      let ProcArray = Process32.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('2.333333253860473633.66666674613952644.3333334922790535.1111111640930185.8888888359069826.3333334922790537.2222223281860358.111111640930176');
    });

    it('Should replaces each pixel with the 3x3 neighborhood mean,(RGB)', function () {
      let ProcessRGB = testRGB();
      ProcessRGB.smooth();
      let ProcArray = ProcessRGB.getFloatArray();
      let result = toArray2D(ProcArray, 3,3);
      expect(result).toBe('-16777214-16777213-16777212-16777212-16777211-16777210-16777210-16777209-16777208');
    });
  });

  describe('sharpen => ', function () {
    it('Should return a sharpened image or ROI using a 3x3 convolution kernel,(8bit)', function () {
      let Process8 = test8();
      Process8.sharpen();
      let ProcArray = Process8.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('00235791012');
    });

    it('Should return a sharpened image or ROI using a 3x3 convolution kernel,(16bit)', function () {
      let Process16 = test16();
      Process16.sharpen();
      let ProcArray = Process16.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('00235791012');
    });

    it('Should return a sharpened image or ROI using a 3x3 convolution kernel,(32bit)', function () {
      let Process32 = test32();
      Process32.sharpen();
      let ProcArray = Process32.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('-2-0.251.53.254.756.258.59.7514.25');
    });

    it('Should return a sharpened image or ROI using a 3x3 convolution kernel,(RGB)', function () {
      let ProcessRGB = testRGB();
      ProcessRGB.sharpen();
      let ProcArray = ProcessRGB.getFloatArray();
      let result = toArray2D(ProcArray, 3,3);
      expect(result).toBe('1234-167772116789');
    });
  });

  describe('snapshot => ', function () {
    it('Should makes a copy of this image\'s pixel data ,(8bit)', function () {
      let Process8 = test8();
      Process8.snapshot();
      let result = Process8.getSnapshotPixels();
      if (result != null) {
        result = 'OK';
      }
      expect(result).toBe('OK');
    });

    it('Should makes a copy of this image\'s pixel data,(16bit)', function () {
      let Process16 = test16();
      Process16.snapshot();
      let result = Process16.getSnapshotPixels();
      if (result != null) {
        result = 'OK';
      }
      expect(result).toBe('OK');
    });

    it('Should makes a copy of this image\'s pixel data,(32bit)', function () {
      let Process32 = test32();
      Process32.snapshot();
      let result = Process32.getSnapshotPixels();
      if (result != null) {
        result = 'OK';
      }
      expect(result).toBe('OK');
    });

    it('Should makes a copy of this image\'s pixel data,(RGB)', function () {
      let ProcessRGB = testRGB();
      ProcessRGB.snapshot();
      let result = ProcessRGB.getSnapshotPixels();
      if (result != null) {
        result = 'OK';
      }
      expect(result).toBe('OK');
    }); 
  });

  describe('setRoi => ', function () {
    it('Should defines a rectangular region of interest and sets the mask to null,(8bit)', function () {
      let Process8 = test8();
      Process8.setRoi(0,1,3,1);
      Process8.fill();
      let ProcArray = Process8.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('123000789');
    });

    it('Should defines a rectangular region of interest and sets the mask to null,(16bit)', function () {
      let Process16 = test16();
      Process16.setRoi(0,1,3,1);
      Process16.fill();
      let ProcArray = Process16.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('123000789');
    });

    it('Should defines a rectangular region of interest and sets the mask to null,(32bit)', function () {
      let Process32 = test32();
      Process32.setRoi(0,1,3,1);
      Process32.fill();
      let ProcArray = Process32.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('1233.4028234663852886e+383.4028234663852886e+383.4028234663852886e+387810');
    });

    it('Should defines a rectangular region of interest and sets the mask to null,(RGB)', function () {
      let ProcessRGB = testRGB();
      ProcessRGB.setRoi(0,1,3,1);
      ProcessRGB.fill();
      let ProcArray = ProcessRGB.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('123-16777216-16777216-16777216789');
    }); 
  });

  describe('createMask => ', function () {
    it('Returns a binary mask, or null if a threshold is not set or this is an RGB image,(8bit)', function () {
      let Process8 = test8();
      Process8.setAutoThreshold("Huang dark");
      let result = Process8.createMask();
      if (result != null) {
        result = 'Non null';
      }
      expect(result).toBe('Non null');
    });

    it('Returns a binary mask, or null if a threshold is not set or this is an RGB image,(16bit)', function () {
      let Process16 = test16();
      Process16.setAutoThreshold("Huang dark");
      let result = Process16.createMask();
      if (result != null) {
        result = 'Non null';
      }
      expect(result).toBe('Non null');
    });

    it('Returns a binary mask, or null if a threshold is not set or this is an RGB image,(32bit)', function () {
      let Process32 = test32();
      Process32.setAutoThreshold("Huang dark");
      let result = Process32.createMask();
      if (result != null) {
        result = 'Non null';
      }
      expect(result).toBe('Non null');
    });

    it('Returns a binary mask, or null if a threshold is not set or this is an RGB image, (RGB)', function () {
      let ProcessRGB = testRGB();
      ProcessRGB.setAutoThreshold("Huang dark");
      let result = ProcessRGB.createMask();
      if (result != null) {
        result = 'Non null';
      }
      else {
        result = 'null';
        }
      expect(result).toBe('null');
    }); 
  });

  
  describe('getLine => ', function () {
    it('Should returns an array containing the pixel values along the line starting at (x1,y1) and ending at (x2,y2),(8bit)', function () {
      let Process8 = test8();
      let ligne = Process8.getLine(0,0,0,2);
      let un = ligne[0].toString(); let deux= ligne[1].toString(); let trois= ligne[2].toString();
      let result = un+deux+trois;
      expect(result).toBe('147');
    });

    it('Should returns an array containing the pixel values along the line starting at (x1,y1) and ending at (x2,y2),(16bit)', function () {
      let Process16 = test16();
      let ligne = Process16.getLine(0,0,0,2);
      let un = ligne[0].toString(); let deux= ligne[1].toString(); let trois= ligne[2].toString();
      let result = un+deux+trois;
      expect(result).toBe('147');
    });

    it('Should returns an array containing the pixel values along the line starting at (x1,y1) and ending at (x2,y2),(32bit)', function () {
      let Process32 = test32();
      let ligne = Process32.getLine(0,0,0,2);
      let un = ligne[0].toString(); let deux= ligne[1].toString(); let trois= ligne[2].toString();
      let result = un+deux+trois;
      expect(result).toBe('147');
    });

    it('Should returns an array containing the pixel values along the line starting at (x1,y1) and ending at (x2,y2),(RGB)', function () {
      let ProcessRGB = testRGB();
      let ligne = ProcessRGB.getLine(0,0,0,2);
      let un = ligne[0].toString(); let deux= ligne[1].toString(); let trois= ligne[2].toString();
      let result = un+deux+trois;
      expect(result).toBe('0.33333334326744081.33333337306976322.3333332538604736');
    }); 
  });


  describe('getIntArray => ', function () {
    it('Should returns a copy of the pixel data as a 2D int array,(8bit)', function () {
      let Process8 = test8();
      let intArray=Process8.getIntArray();
      let result = toArray2D(intArray, 3, 3);
      expect(result).toBe('123456789');
    });

    it('Should returns a copy of the pixel data as a 2D int array, (16bit)', function () {
      let Process16 = test16();
      let intArray=Process16.getIntArray();
      let result = toArray2D(intArray, 3, 3);
      expect(result).toBe('123456789');
    });

    it('Should returns a copy of the pixel data as a 2D int array, (32bit)', function () {
      let Process32 = test32();
      let intArray=Process32.getIntArray();
      let result = toArray2D(intArray, 3, 3);
      expect(result).toBe('106535321610737418241077936128108213043210842275841086324736108842188810905190401092616192');
    });

    it('Should returns a copy of the pixel data as a 2D int array, (RGB)', function () {
      let ProcessRGB = testRGB();
      let intArray=ProcessRGB.getIntArray();
      let result = toArray2D(intArray, 3, 3);
      expect(result).toBe('123456789');
    }); 
  });

  describe('getFloatArray => ', function () {
    it('Should returns a copy of the pixel data as a 2D float array,(8bit)', function () {
      let Process8 = test8();
      let floatArray=Process8.getFloatArray();
      let result = toArray2D(floatArray, 3, 3);
      expect(result).toBe('123456789');
    });

    it('Should returns a copy of the pixel data as a 2D float array, (16bit)', function () {
      let Process16 = test16();
      let floatArray=Process16.getFloatArray();
      let result = toArray2D(floatArray, 3, 3);
      expect(result).toBe('123456789');
    });

    it('Should returns a copy of the pixel data as a 2D float array, (32bit)', function () {
      let Process32 = test32();
      let floatArray=Process32.getFloatArray();
      let result = toArray2D(floatArray, 3, 3);
      expect(result).toBe('1234567810');
    });

    it('Should returns a copy of the pixel data as a 2D float array, (RGB)', function () {
      let ProcessRGB = testRGB();
      let floatArray=ProcessRGB.getFloatArray();
      let result = toArray2D(floatArray, 3, 3);
      expect(result).toBe('123456789');
    }); 
  });


  describe('OR => ', function () {
    it('Should make Binary OR of each pixel in the image or ROI with value, (8bit)', function () {
      let Process8 = test8();
      Process8.or(5);
      let ProcArray = Process8.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('57755771313');
    });

    it('Should make Binary OR of each pixel in the image or ROI with value, (16bit)', function () {
      let Process16 = test16();
      Process16.or(5);
      let ProcArray = Process16.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('57755771313');
    });

    it('Should make Binary OR of each pixel in the image or ROI with value, (32bit)', function () {
      let Process32 = test32();
      Process32.or(5);
      let ProcArray = Process32.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('1234567810');
    });

    it('Should make Binary OR of each pixel in the image or ROI with value,(RGB)', function () {
      let ProcessRGB = testRGB();
      ProcessRGB.or(5);
      let ProcArray = ProcessRGB.getFloatArray();
      let result = toArray2D(ProcArray, 3,3);
      expect(result).toBe('-16448251-16448249-16448249-16448251-16448251-16448249-16448249-16448243-16448243');
    });
  });

  describe('setColor (int) => ', function () {
    it('Should sets the default fill or draw value,(8bit)', function () {
      let Process8 = test8();
      Process8.setRoi(0,1,3,1);
      Process8.setColor(100);
      Process8.fill();
      let ProcArray = Process8.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('123100100100789');
    });

    it('Should sets the default fill/draw value,(16bit)', function () {
      let Process16 = test16();
      Process16.setRoi(0,1,3,1);
      Process16.setColor(100);
      Process16.fill();
      let ProcArray = Process16.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('123100100100789');
    });

    it('Should sets the default fill/draw value,(32bit)', function () {
      let Process32 = test32();
      Process32.setRoi(0,1,3,1);
      Process32.setColor(100);
      Process32.fill();
      let ProcArray = Process32.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('1231001001007810');
    });

    it('Should sets the default fill/draw value,(RGB)', function () {
      let ProcessRGB = testRGB();
      ProcessRGB.setRoi(0,1,3,1);
      ProcessRGB.setColor(100);
      ProcessRGB.fill();
      let ProcArray = ProcessRGB.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('123100100100789');
    }); 
  });

  describe('setColor (double) => ', function () {
    it('Should sets the default fill or draw value,(8bit)', function () {
      let Process8 = test8();
      Process8.setRoi(0,1,3,1);
      Process8.setColor(51.5);
      Process8.fill();
      let ProcArray = Process8.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('123515151789');
    });

    it('Should sets the default fill/draw value,(16bit)', function () {
      let Process16 = test16();
      Process16.setRoi(0,1,3,1);
      Process16.setColor(51.5);
      Process16.fill();
      let ProcArray = Process16.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('123515151789');
    });

    it('Should sets the default fill/draw value,(32bit)', function () {
      let Process32 = test32();
      Process32.setRoi(0,1,3,1);
      Process32.setColor(51.5);
      Process32.fill();
      let ProcArray = Process32.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('12351.551.551.57810');
    });

    it('Should sets the default fill/draw value,(RGB)', function () {
      let ProcessRGB = testRGB();
      ProcessRGB.setRoi(0,1,3,1);
      ProcessRGB.setColor(51.5);
      ProcessRGB.fill();
      let ProcArray = ProcessRGB.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('123515151789');
    }); 
  });

  describe('setColor (color) => ', function () {
    it('Should sets the default fill or draw value,(8bit)', function () {
      let Process8 = test8();
      Process8.setRoi(0,1,3,1);
      Process8.setColor(0xff0000);
      Process8.fill();
      let ProcArray = Process8.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('123255255255789');
    });

    it('Should sets the default fill/draw value,(16bit)', function () {
      let Process16 = test16();
      Process16.setRoi(0,1,3,1);
      Process16.setColor(0xff0000);
      Process16.fill();
      let ProcArray = Process16.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('123655356553565535789');
    });

    it('Should sets the default fill/draw value,(32bit)', function () {
      let Process32 = test32();
      Process32.setRoi(0,1,3,1);
      Process32.setColor(0xff0000);
      Process32.fill();
      let ProcArray = Process32.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('1231671168016711680167116807810');
    });

    it('Should sets the default fill/draw value,(RGB)', function () {
      let ProcessRGB = testRGB();
      ProcessRGB.setRoi(0,1,3,1);
      ProcessRGB.setColor(0xff0000);
      ProcessRGB.fill();
      let ProcArray = ProcessRGB.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('123167116801671168016711680789');
    }); 
  });

  describe('setAutoThreshold (method) => ', function () {
    it('Should Automatically sets the lower and upper threshold levels, where method must be pre-recorded,(8bit)', function () {
      let Process8 = test8();
      Process8.setAutoThreshold("Huang dark");
      let mask= Process8.createMask();
      let img2 = new ImagePlus("mask", mask);
      let Process2 = img2.getProcessor();
      let ProcArray = Process2.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('0000255255255255255');
    });

    it('Should Automatically sets the lower and upper threshold levels, where method must be pre-recorded,(16bit)', function () {
      let Process16 = test16();
      Process16.setAutoThreshold("Huang dark");
      let mask= Process16.createMask();
      let img2 = new ImagePlus("mask", mask);
      let Process2 = img2.getProcessor();
      let ProcArray = Process2.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('0000255255255255255');
    });

    it('Should Automatically sets the lower and upper threshold levels, where method must be pre-recorded,(32bit)', function () {
      let Process32 = test32();
      Process32.setAutoThreshold("Huang dark");
      let mask= Process32.createMask();
      let img2 = new ImagePlus("mask", mask);
      let Process2 = img2.getProcessor();
      let ProcArray = Process2.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('00000255255255255');
    });
  });

  describe('setAutoThreshold (method, boolean, int) => ', function () {
    it('Should Automatically sets the lower and upper threshold levels, where method must be pre-recorded,(8bit)', function () {
      let Process8 = test8();
      Process8.setAutoThreshold("Default",  false, 0);
      let mask= Process8.createMask();
      let img2 = new ImagePlus("mask", mask);
      let Process2 = img2.getProcessor();
      let ProcArray = Process2.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('25525525525500000');
    });

    it('Should Automatically sets the lower and upper threshold levels, where method must be pre-recorded,(16bit)', function () {
      let Process16 = test16();
      Process16.setAutoThreshold("Default",  false, 0);
      let mask= Process16.createMask();
      let img2 = new ImagePlus("mask", mask);
      let Process2 = img2.getProcessor();
      let ProcArray = Process2.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('2552552552552550000');
    });

    it('Should Automatically sets the lower and upper threshold levels, where method must be pre-recorded,(32bit)', function () {
      let Process32 = test32();
      Process32.setAutoThreshold("Default",  false, 0);
      let mask= Process32.createMask();
      let img2 = new ImagePlus("mask", mask);
      let Process2 = img2.getProcessor();
      let ProcArray = Process2.getFloatArray();
      let result = toArray2D(ProcArray, 3, 3);
      expect(result).toBe('25525525525500000');
    });
  });

});

TUNIT.stats();