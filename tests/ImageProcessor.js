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

  describe('add(int) => ', function () {
    it('should add value to each pixel in the image or ROI', function () {
       let t8 = test8();
       t8.add(100);
       const result = t8.get(0,1);
       expect(result).toBe(104);
    });
    it('should add value to each pixel in the image or ROI', function () {
       let t16 = test16();
       t16.add(100);
       const result = t16.get(0,1);
       expect(result).toBe(104);
    });
    it('should add value to each pixel in the image or ROI', function () {
       let t32 = test32();
       t32.add(100);
       const result = t32.get(0,1);
       expect(result).toBe(1120927744);
    });
    it('should add value to each pixel in the image or ROI', function () {
       let tRGB = testRGB();
       tRGB.add(100);
       const result = tRGB.get(0,1);
       expect(result).toBe(-10197912);
    });
 });

 describe('add(double value) => ', function () {
    it('should add value to each pixel in the image or ROI', function () {
       let t8 = test8();
       t8.add(100.5);
       const result = t8.get(0,1);
       expect(result).toBe(104);
    });
    it('should add value to each pixel in the image or ROI', function () {
       let t16 = test16();
       t16.add(100.5);
       const result = t16.get(0,1);
       expect(result).toBe(104);
    });
    it('should add value to each pixel in the image or ROI', function () {
       let t32 = test32();
       t32.add(100.5);
       const result = t32.get(0,1);
       expect(result).toBe(1120993280);
    });
    it('should add value to each pixel in the image or ROI', function () {
       let tRGB = testRGB();
       tRGB.add(100.5);
       const result = tRGB.get(0,1);
       expect(result).toBe(-10197912);
    });
 });

 describe('add(double value) => ', function () {
    it('should add value to each pixel in the image or ROI', function () {
       let t8 = test8();
       t8.and(1);
       const result = t8.get(0,1);
       expect(result).toBe(0);
    });
    it('should add value to each pixel in the image or ROI', function () {
       let t16 = test16();
       t16.and(1);
       const result = t16.get(0,1);
       expect(result).toBe(0);
    });
    it('should add value to each pixel in the image or ROI', function () {
       let t32 = test32();
       t32.and(1);
       const result = t32.get(0,1);
       expect(result).toBe(1082130432);
    });
    it('should add value to each pixel in the image or ROI', function () {
       let tRGB = testRGB();
       tRGB.and(1);
       const result = tRGB.get(0,1);
       expect(result).toBe(-16777216);
    });
 });

 describe('bin(int shrinkFactor) => ImageProcessor ', function () {
    it('Should return a copy of this image that has been reduced in size using binning', function () {
       let t8 = test8();
       let image_shrink = t8.bin(2);
       const result = image_shrink.getHeight();
       expect(result).toBe(1);
    });
    it('Should return a copy of this image that has been reduced in size using binning', function () {
       let t16 = test16();
       let image_shrink = t16.bin(2);
       const result = image_shrink.getHeight();
       expect(result).toBe(1);
    });
    it('Should return a copy of this image that has been reduced in size using binning', function () {
       let t32 = test32();
       let image_shrink = t32.bin(2);
       const result = image_shrink.getHeight();
       expect(result).toBe(1);
    });
    it('Should return a copy of this image that has been reduced in size using binning', function () {
       let tRGB = testRGB();
       let image_shrink = tRGB.bin(2);
       const result = image_shrink.getHeight();
       expect(result).toBe(1);
    });
 });

 describe('clone() => Object ', function () {
    it('Should return a shallow copy of this ImageProcessor, where this image and the copy share pixel data', function () {
       let t8 = test8();
       let image_clone = t8.clone();
       expect(image_clone.getPixels()).toEqual(t8.getPixels());
    });
    it('Should return a shallow copy of this ImageProcessor, where this image and the copy share pixel data', function () {
       let t16 = test16();
       let image_clone = t16.clone();
       expect(image_clone.getPixels()).toEqual(t16.getPixels());
    });
    it('Should return a shallow copy of this ImageProcessor, where this image and the copy share pixel data', function () {
       let t32 = test32();
       let image_clone = t32.clone();
       expect(image_clone.getPixels()).toEqual(t32.getPixels());
    });
    it('Should return a shallow copy of this ImageProcessor, where this image and the copy share pixel data', function () {
       let tRGB = testRGB();
       let image_clone = tRGB.clone();
       expect(image_clone.getPixels()).toEqual(tRGB.getPixels());
    });
 });


 describe('convertToByte(boolean doScaling) => ImageProcessor ', function () {
    it('Should return an 8-bit version of this image as a ByteProcessor', function () {
       let t16 = test16();
       let image_8 = t16.convertToByte(true);
       const result = image_8.getBitDepth();
       expect(result).toBe(8);
    });
    it('Should return an 8-bit version of this image as a ByteProcessor', function () {
       let t32 = test32();
       let image_8 = t32.convertToByte(true);
       const result = image_8.getBitDepth();
       expect(result).toBe(8);
    });
    it('Should return an 8-bit version of this image as a ByteProcessor', function () {
       let tRGB = testRGB();
       let image_8 = tRGB.convertToByte(true);
       const result = image_8.getBitDepth();
       expect(result).toBe(8);
    });
 });


 describe('convertToByteProcessor() => ByteProcessor ', function () {
    it('Should return an 8-bit version of this image as a ByteProcessor', function () {
       let t16 = test16();
       let image_8 = t16.convertToByteProcessor();
       const result = image_8.getBitDepth();
       expect(result).toBe(8);
    });
    it('Should return an 8-bit version of this image as a ByteProcessor', function () {
       let t32 = test32();
       let image_8 = t32.convertToByteProcessor();
       const result = image_8.getBitDepth();
       expect(result).toBe(8);
    });
    it('Should return an 8-bit version of this image as a ByteProcessor', function () {
       let tRGB = testRGB();
       let image_8 = tRGB.convertToByteProcessor();
       const result = image_8.getBitDepth();
       expect(result).toBe(8);
    });
 });


 describe('convertToColor() => ColorProcessor ', function () {
    it('Should return an RGB version of this image as a ColorProcessor', function () {
       let t16 = test16();
       let image_color = t16.convertToColorProcessor();
       const result = image_color.getBitDepth();
       expect(result).toBe(24);
    });
    it('Should return an RGB version of this image as a ColorProcessor', function () {
       let t32 = test32();
       let image_color = t32.convertToColorProcessor();
       const result = image_color.getBitDepth();
       expect(result).toBe(24);
    });
    it('Should return an RGB version of this image as a ColorProcessor', function () {
       let t8 = test8();
       let image_color = t8.convertToColorProcessor();
       const result = image_color.getBitDepth();
       expect(result).toBe(24);
    });
 });


 describe('convertToRGB() => ImageProcessor ', function () {
    it('Should return an RGB version of this image as a ColorProcessor', function () {
       let t16 = test16();
       let image_color = t16.convertToRGB();
       const result = image_color.getBitDepth();
       expect(result).toBe(24);
    });
    it('Should return an RGB version of this image as a ColorProcessor', function () {
       let t32 = test32();
       let image_color = t32.convertToRGB();
       const result = image_color.getBitDepth();
       expect(result).toBe(24);
    });
    it('Should return an RGB version of this image as a ColorProcessor', function () {
       let t8 = test8();
       let image_color = t8.convertToRGB();
       const result = image_color.getBitDepth();
       expect(result).toBe(24);
    });
 });

 describe('convertToFloat() => ImageProcessor ', function () {
    it('Should return a 32-bit version of this image as a FloatProcessor', function () {
       let t16 = test16();
       let image_32 = t16.convertToFloat();
       const result = image_32.getBitDepth();
       expect(result).toBe(32);
    });
    it('Should return a 32-bit version of this image as a FloatProcessor', function () {
       let tRGB = testRGB();
       let image_32 = tRGB.convertToFloat();
       const result = image_32.getBitDepth();
       expect(result).toBe(32);
    });
    it('Should return a 32-bit version of this image as a FloatProcessor', function () {
       let t8 = test8();
       let image_32 = t8.convertToFloat();
       const result = image_32.getBitDepth();
       expect(result).toBe(32);
    });
 });


 describe('convertToFloatProcessor() => FloatProcessor ', function () {
    it('Should return a 32-bit version of this image as a FloatProcessor', function () {
       let t16 = test16();
       let image_32 = t16.convertToFloatProcessor();
       const result = image_32.getBitDepth();
       expect(result).toBe(32);
    });
    it('Should return a 32-bit version of this image as a FloatProcessor', function () {
       let tRGB = testRGB();
       let image_32 = tRGB.convertToFloatProcessor();
       const result = image_32.getBitDepth();
       expect(result).toBe(32);
    });
    it('Should return a 32-bit version of this image as a FloatProcessor', function () {
       let t8 = test8();
       let image_32 = t8.convertToFloatProcessor();
       const result = image_32.getBitDepth();
       expect(result).toBe(32);
    });
 });

 describe('convertToShortProcessor() => ShortProcessor ', function () {
    it('Should return a 16-bit version of this image as a FloatProcessor', function () {
       let t8 = test8();
       let image_16 = t8.convertToShortProcessor();
       const result = image_16.getBitDepth();
       expect(result).toBe(16);
    });
    it('Should return a 16-bit version of this image as a FloatProcessor', function () {
       let tRGB = testRGB();
       let image_16 = tRGB.convertToShortProcessor();
       const result = image_16.getBitDepth();
       expect(result).toBe(16);
    });
    it('Should return a 16-bit version of this image as a FloatProcessor', function () {
       let t32 = test8();
       let image_16 = t32.convertToShortProcessor();
       const result = image_16.getBitDepth();
       expect(result).toBe(16);
    });
 });

 describe('convertToShort() => ShortProcessor ', function () {
    it('Should return a 16-bit version of this image as a FloatProcessor', function () {
       let t8 = test8();
       let image_16 = t8.convertToShort(true);
       const result = image_16.getBitDepth();
       expect(result).toBe(16);
    });
    it('Should return a 16-bit version of this image as a FloatProcessor', function () {
       let tRGB = testRGB();
       let image_16 = tRGB.convertToShort(true);
       const result = image_16.getBitDepth();
       expect(result).toBe(16);
    });
    it('Should return a 16-bit version of this image as a FloatProcessor', function () {
       let t32 = test32();
       let image_16 = t32.convertToShort(true);
       const result = image_16.getBitDepth();
       expect(result).toBe(16);
    });
 });

 describe('convolve(float[] kernel, int kernelWidth, int kernelHeight) => ', function () {
    it('Should perform a convolution operation using the specified kernel', function () {
       let t8 = test8();
       t8.convolve([
          -1, -1, -1,
          -1, 3, -1,
          -1, -1, -1,],3,3);
       const result = t8.get(0,1);
       expect(result).toBe(5);
    });
    it('Should perform a convolution operation using the specified kernel', function () {
       let t16 = test16();
       t16.convolve([
          -1, -1, -1,
          -1, 3, -1,
          -1, -1, -1,],3,3);
       const result = t16.get(0,1);
       expect(result).toBe(5);
    });
    it('Should perform a convolution operation using the specified kernel', function () {
       let t32 = test32();
       t32.convolve([
          -1, -1, -1,
          -1, 3, -1,
          -1, -1, -1,],3,3);
       const result = t32.get(0,1);
       expect(result).toBe(1083388723);
    });
    it('Should perform a convolution operation using the specified kernel', function () {
       let tRGB = testRGB();
       tRGB.convolve([
          -1, -1, -1,
          -1, 3, -1,
          -1, -1, -1,],3,3);
       const result = tRGB.get(0,1);
       expect(result).toBe(-16777211);
    });
 });


 describe('convolve3x3(int[] kernel) => ', function () {
    it('Should convolve the image or ROI with the specified 3x3 integer convolution kernel', function () {
       let t8 = test8();
       t8.convolve3x3([
          -1, -1, -1,
          -1, 3, -1,
          -1, -1, -1,]);
       const result = t8.get(0,1);
       expect(result).toBe(5);
    });
    it('Should convolve the image or ROI with the specified 3x3 integer convolution kernel', function () {
       let t16 = test16();
       t16.convolve3x3([
          -1, -1, -1,
          -1, 3, -1,
          -1, -1, -1,]);
       const result = t16.get(0,1);
       expect(result).toBe(5);
    });
    it('Should convolve the image or ROI with the specified 3x3 integer convolution kernel', function () {
       let t32 = test32();
       t32.convolve3x3([
          -1, -1, -1,
          -1, 3, -1,
          -1, -1, -1,]);
       const result = t32.get(0,1);
       expect(result).toBe(1083388723);
    });
    it('Should convolve the image or ROI with the specified 3x3 integer convolution kernel', function () {
       let tRGB = testRGB();
       tRGB.convolve3x3([
          -1, -1, -1,
          -1, 3, -1,
          -1, -1, -1,]);
       const result = tRGB.get(0,1);
       expect(result).toBe(4);
    });
 });


 describe('createProcessor(int width, int height) => ImageProcessor', function () {
    it('Should return a new, blank processor with the specified width and height', function () {
       let t8 = test8();
       let image_new = t8.createProcessor(2,2);
       const result = image_new.getHeight();
       expect(result).toBe(2);
    });
    it('Should return a new, blank processor with the specified width and height', function () {
       let t16 = test16();
       let image_new = t16.createProcessor(2,2);
       const result = image_new.getHeight();
       expect(result).toBe(2);
    });
    it('Should return a new, blank processor with the specified width and height', function () {
       let t32 = test32();
       let image_new = t32.createProcessor(2,2);
       const result = image_new.getHeight();
       expect(result).toBe(2);
    });
    it('Should return a new, blank processor with the specified width and height', function () {
       let tRGB = testRGB();
       let image_new = tRGB.createProcessor(2,2);
       const result = image_new.getHeight();
       expect(result).toBe(2);
    });
 });



 describe('crop() => ImageProcessor', function () {
    it('Should return a new processor containing an image that corresponds to the current ROI', function () {
       let t8 = test8();
       t8.setRoi(0,0,2,2);
       let image_crop = t8.crop();
       const result = image_crop.getHeight();
       expect(result).toBe(2);
    });
    it('Should return a new processor containing an image that corresponds to the current ROI', function () {
       let t16 = test16();
       t16.setRoi(0,0,2,2);
       let image_crop = t16.crop();
       const result = image_crop.getHeight();
       expect(result).toBe(2);
    });
    it('Should return a new processor containing an image that corresponds to the current ROI', function () {
       let t32 = test32();
       t32.setRoi(0,0,2,2);
       let image_crop = t32.crop();
       const result = image_crop.getHeight();
       expect(result).toBe(2);
    });
    it('Should return a new processor containing an image that corresponds to the current ROI', function () {
       let tRGB = testRGB();
       tRGB.setRoi(0,0,2,2);
       let image_crop = tRGB.crop();
       const result = image_crop.getHeight();
       expect(result).toBe(2);
    });
 });

 describe('dilate() => ImageProcessor', function () {
    it('Should dilate the image or ROI using a 3x3 minimum filter', function () {
       let t8 = test8();
       t8.dilate();
       const result = t8.get(0,1);
       expect(result).toBe(1);
    });
    it('Should dilate the image or ROI using a 3x3 minimum filter', function () {
       let t16 = test16();
       t16.dilate();
       const result = t16.get(0,1);
       expect(result).toBe(4);
    });
    it('Should dilate the image or ROI using a 3x3 minimum filter', function () {
       let t32 = test32();
       t32.dilate();
       const result = t32.get(0,1);
       expect(result).toBe(1082130432);
    });
    it('Should dilate the image or ROI using a 3x3 minimum filter', function () {
       let tRGB = testRGB();
       tRGB.dilate();
       const result = tRGB.get(0,1);
       expect(result).toBe(-16777215);
    });
 });

 describe('draw(Roi roi) => ', function () {
    it('Should draw the specified ROI on this image using the line width and color defined by ip.setLineWidth() and ip.setColor()', function () {
       let t8 = test8();
       let roi = new Roi(1,1,1,1);
       t8.draw(roi);
       const result = t8.get(2,2);
       expect(result).toBe(0);
    });
    it('Should draw the specified ROI on this image using the line width and color defined by ip.setLineWidth() and ip.setColor()', function () {
       let t16 = test16();
       let roi = new Roi(1,1,1,1);
       t16.draw(roi);
       const result = t16.get(2,2);
       expect(result).toBe(0);
    });
    it('Should draw the specified ROI on this image using the line width and color defined by ip.setLineWidth() and ip.setColor()', function () {
       let t32 = test32();
       let roi = new Roi(1,1,1,1);
       t32.draw(roi);
       const result = t32.get(2,2);
       expect(result).toBe(2139095039);
    });
    it('Should draw the specified ROI on this image using the line width and color defined by ip.setLineWidth() and ip.setColor()', function () {
       let tRGB = testRGB();
       let roi = new Roi(1,1,1,1)
       tRGB.draw(roi);
       const result = tRGB.get(2,2);
       expect(result).toBe(-16777216);
    });
 });

 describe('drawDot(int xcenter, int ycenter) => ', function () {
    it('Should draw a dot using the current line width and fill/draw value', function () {
       let t8 = test8();
       t8.drawDot(1,1);
       const result = t8.get(1,1);
       expect(result).toBe(0);
    });
    it('Should draw a dot using the current line width and fill/draw value', function () {
       let t16 = test16();
       t16.drawDot(1,1);
       const result = t16.get(1,1);
       expect(result).toBe(0);
    });
    it('Should draw a dot using the current line width and fill/draw value', function () {
       let t32 = test32();
       t32.drawDot(1,1);
       const result = t32.get(1,1);
       expect(result).toBe(2139095039);
    });
    it('Should draw a dot using the current line width and fill/draw value', function () {
       let tRGB = testRGB();
       tRGB.drawDot(1,1);
       const result = tRGB.get(1,1);
       expect(result).toBe(-16777216);
    });
 });

 describe('drawLine(int x1, int y1, int x2, int y2) => ', function () {
    it('Should draw a line from (x1,y1) to (x2,y2)', function () {
       let t8 = test8();
       t8.drawLine(1,1,2,2);
       let pixels = t8.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("123406780");
    });
    it('Should draw a line from (x1,y1) to (x2,y2)', function () {
       let t16 = test16();
       t16.drawLine(1,1,2,2);
       let pixels = t16.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("123406780");
    });
    it('Should draw a line from (x1,y1) to (x2,y2)', function () {
       let t32 = test32();
       t32.drawLine(1,1,2,2);
       let pixels = t32.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("12343.4028234663852886e+386783.4028234663852886e+38");
    });
    it('Should draw a line from (x1,y1) to (x2,y2)', function () {
       let tRGB = testRGB();
       tRGB.drawLine(1,1,2,2);
       let pixels = tRGB.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("1234-16777216678-16777216");
    });
 });

 describe('drawOval(int x, int y, int width, int height) => ', function () {
    it('Should draw an elliptical shape', function () {
       let t8 = test8();
       t8.drawOval(1,1,1,1);
       let pixels = t8.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("123400700");
    });
    it('Should draw an elliptical shape', function () {
       let t16 = test16();
       t16.drawOval(1,1,1,1);
       let pixels = t16.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("123400700");
    });
    it('Should draw an elliptical shape', function () {
       let t32 = test32();
       t32.drawOval(1,1,1,1);
       let pixels = t32.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("12343.4028234663852886e+383.4028234663852886e+3873.4028234663852886e+383.4028234663852886e+38");
    });
    it('Should draw an elliptical shape', function () {
       let tRGB = testRGB();
       tRGB.drawOval(1,1,1,1);
       let pixels = tRGB.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("1234-16777216-167772167-16777216-16777216");
    });
 });

 describe('drawRect(int x, int y, int width, int height) => ', function () {
    it('Should draw a rectangle', function () {
       let t8 = test8();
       t8.drawRect(0,1,2,2);
       let pixels = t8.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("123006009");
    });
    it('Should draw a rectangle', function () {
       let t16 = test16();
       t16.drawRect(0,1,2,2);
       let pixels = t16.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("123006009");
    });
    it('Should draw a rectangle', function () {
       let t32 = test32();
       t32.drawRect(0,1,2,2);
       let pixels = t32.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("1233.4028234663852886e+383.4028234663852886e+3863.4028234663852886e+383.4028234663852886e+3810");
    });
    it('Should draw a rectangle', function () {
       let tRGB = testRGB();
       tRGB.drawRect(0,1,2,2);
       let pixels = tRGB.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("123-16777216-167772166-16777216-167772169");
    });
 });

 describe('drawPolygon(Polygon p) => ', function () {
    it('Should draw a polygon', function () {
       let t8 = test8();
       let pol = new Polygon([0,1,2],[0,0,0],3);      
       t8.drawPolygon(pol);
       let pixels = t8.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("000456789");
    });
    it('Should draw a polygon', function () {
       let t16 = test16();
       let pol = new Polygon([0,1,2],[0,0,0],3); 
       t16.drawPolygon(pol);
       let pixels = t16.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("000456789");
    });
    it('Should draw a polygon', function () {
       let t32 = test32();
       let pol = new Polygon([0,1,2],[0,0,0],3); 
       t32.drawPolygon(pol);
       let pixels = t32.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("3.4028234663852886e+383.4028234663852886e+383.4028234663852886e+384567810");
    });
    it('Should draw a polygon', function () {
       let tRGB = testRGB();
       let pol = new Polygon([0,1,2],[0,0,0],3); 
       tRGB.drawPolygon(pol);
       let pixels = tRGB.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("-16777216-16777216-16777216456789");
    });
 });

 describe('drawRoi(Roi roi) => ', function () {
    it('Should draw the specified ROI on this image using the stroke width, stroke color and fill color defined by roi.setStrokeWidth, roi.setStrokeColor() and roi.setFillColor()', function () {
       let t8 = test8();
       let roi = new Roi(1,1,1,1)
       t8.drawRoi(roi);
       let pixels = t8.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("12342262267226226");
    });
    it('Should draw the specified ROI on this image using the line width and color defined by ip.setLineWidth() and ip.setColor()', function () {
       let t16 = test16();
       let roi = new Roi(1,1,1,1)
       t16.drawRoi(roi);
       let pixels = t16.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("123456789");
    });
    it('Should draw the specified ROI on this image using the line width and color defined by ip.setLineWidth() and ip.setColor()', function () {
       let t32 = test32();
       let roi = new Roi(1,1,1,1)
       t32.drawRoi(roi);
       let pixels = t32.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("1234567810");
    });
    it('Should draw the specified ROI on this image using the line width and color defined by ip.setLineWidth() and ip.setColor()', function () {
       let tRGB = testRGB();
       let roi = new Roi(1,1,1,1)
       tRGB.drawRoi(roi);
       let pixels = tRGB.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("1234-256-2567-256-256");
    });
 });

 describe('duplicate() => ImageProcessor ', function () {
    it('Should return a duplicate of this image', function () {
       let t8 = test8();
       let image_duplicate = t8.duplicate();
       let pixels = image_duplicate.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("123456789");
    });
    it('Should return a duplicate of this image', function () {
       let t16 = test16();
       let image_duplicate = t16.duplicate();
       let pixels = image_duplicate.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("123456789");
    });
    it('Should return a duplicate of this image', function () {
       let t32 = test32();
       let image_duplicate = t32.duplicate();
       let pixels = image_duplicate.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("1234567810");
    });
    it('Should return a duplicate of this image', function () {
       let tRGB = testRGB();
       let image_duplicate = tRGB.duplicate();
       let pixels = image_duplicate.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("123456789");
    });
 });

 describe('erode() => ', function () {
    it('Should erode the image or ROI using a 3x3 maximum filter', function () {
       let t8 = test8();
       t8.erode();
       let pixels = t8.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("566899899");
    });
    it('Should erode the image or ROI using a 3x3 maximum filter', function () {
       let t16 = test16();
       t16.erode();
       let pixels = t16.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("123456789");
    });
    it('Should erode the image or ROI using a 3x3 maximum filter', function () {
       let t32 = test32();
       t32.erode();
       let pixels = t32.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("1234567810");
    });
    it('Should erode the image or ROI using a 3x3 maximum filter', function () {
       let tRGB = testRGB();
       tRGB.erode();
       let pixels = tRGB.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("-16777211-16777210-16777210-16777208-16777207-16777207-16777208-16777207-16777207");
    });
 });

 describe('exp() => ', function () {
    it('Should perform a exponential transform on the image or ROI', function () {
       let t8 = test8();
       t8.exp();
       let pixels = t8.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("111111111");
    });
    it('Should perform a exponential transform on the image or ROI', function () {
       let t16 = test16();
       t16.exp();
       let pixels = t16.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("112234579");
    });
    it('Should perform a exponential transform on the image or ROI', function () {
       let t32 = test32();
       t32.exp();
       let pixels = t32.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("2.71828174591064457.38905620574951220.0855369567871154.598148345947266148.4131622314453403.42880249023441096.63317871093752980.958007812522026.46484375");
    });
    it('Should perform a exponential transform on the image or ROI', function () {
       let tRGB = testRGB();
       tRGB.exp();
       let pixels = tRGB.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("-16711423-16711423-16711423-16711423-16711423-16711423-16711423-16711423-16711423");
    });
 });

 describe('fill() => ', function () {
    it('Should fill the image or ROI bounding rectangle with the current fill/draw value', function () {
       let t8 = test8();
       t8.fill();
       let pixels = t8.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("000000000");
    });
    it('Should fill the image or ROI bounding rectangle with the current fill/draw value', function () {
       let t16 = test16();
       t16.fill();
       let pixels = t16.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("000000000");
    });
    it('Should fill the image or ROI bounding rectangle with the current fill/draw value', function () {
       let t32 = test32();
       t32.fill();
       let pixels = t32.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("3.4028234663852886e+383.4028234663852886e+383.4028234663852886e+383.4028234663852886e+383.4028234663852886e+383.4028234663852886e+383.4028234663852886e+383.4028234663852886e+383.4028234663852886e+38");
    });
    it('Should fill the image or ROI bounding rectangle with the current fill/draw value', function () {
       let tRGB = testRGB();
       tRGB.fill();
       let pixels = tRGB.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("-16777216-16777216-16777216-16777216-16777216-16777216-16777216-16777216-16777216");
    });
 });

 describe('fill(Roi roi) => ', function () {
    it('Should fill the ROI with the current fill/draw value', function () {
       let t8 = test8();
       let roi = new Roi(1,1,1,1);
       t8.fill(roi);
       const result = t8.get(1,1);
       expect(result).toBe(0);
    });
    it('Should fill the ROI with the current fill/draw value', function () {
       let t16 = test16();
       let roi = new Roi(1,1,1,1);
       t16.fill(roi);
       const result = t16.get(1,1);
       expect(result).toBe(0);
    });
    it('Should fill the ROI with the current fill/draw value', function () {
       let t32 = test32();
       let roi = new Roi(1,1,1,1);
       t32.fill(roi);
       const result = t32.get(1,1);
       expect(result).toBe(2139095039);
    });
    it('Should fill the ROI with the current fill/draw value', function () {
       let tRGB = testRGB();
       let roi = new Roi(1,1,1,1);
       tRGB.fill(roi);
       const result = tRGB.get(1,1);
       expect(result).toBe(-16777216);
    });
 });

 describe('fillOval(int x, int y, int width, int height) => ', function () {
    it('Should fill an elliptical shape', function () {
       let t8 = test8();
       t8.fillOval(0,0,2,2);
       let pixels = t8.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("003006789");
    });
    it('Should fill an elliptical shape', function () {
       let t16 = test16();
       t16.fillOval(0,0,2,2);
       let pixels = t16.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("003006789");
    });
    it('Should fill an elliptical shape', function () {
       let t32 = test32();
       t32.fillOval(0,0,2,2);
       let pixels = t32.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("3.4028234663852886e+383.4028234663852886e+3833.4028234663852886e+383.4028234663852886e+3867810");
    });
    it('Should fill an elliptical shape', function () {
       let tRGB = testRGB();
       tRGB.fillOval(0,0,2,2);
       let pixels = tRGB.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("-16777216-167772163-16777216-167772166789");
    });
 });

 describe('fillOutside(Roi roi) => ', function () {
    it('Should fill outside an Roi', function () {
       let t8 = test8();
       let roi = new Roi(1,1,1,1);
       t8.fillOutside(roi);
       let pixels = t8.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("000050000");
    });
    it('Should fill outside an Roi', function () {
       let t16 = test16();
       let roi = new Roi(1,1,1,1);
       t16.fillOutside(roi);
       let pixels = t16.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("000050000");
    });
    it('Should fill outside an Roi', function () {
       let t32 = test32();
       let roi = new Roi(1,1,1,1);
       t32.fillOutside(roi);
       let pixels = t32.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("3.4028234663852886e+383.4028234663852886e+383.4028234663852886e+383.4028234663852886e+3853.4028234663852886e+383.4028234663852886e+383.4028234663852886e+383.4028234663852886e+38");
    });
    it('Should fill outside an Roi', function () {
       let tRGB = testRGB();
       let roi = new Roi(1,1,1,1);
       tRGB.fillOutside(roi);
       let pixels = tRGB.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("-16777216-16777216-16777216-167772165-16777216-16777216-16777216-16777216");
    });
 });

 describe('fillRect(int x, int y, int width, int height) => ', function () {
    it('Should fill a rectangle', function () {
       let t8 = test8();
       t8.fillRect(0,0,2,2);
       let pixels = t8.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("003006789");
    });
    it('Should fill a rectangle', function () {
       let t16 = test16();
       t16.fillRect(0,0,2,2);
       let pixels = t16.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("003006789");
    });
    it('Should fill a rectangle', function () {
       let t32 = test32();
       t32.fillRect(0,0,2,2);
       let pixels = t32.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("3.4028234663852886e+383.4028234663852886e+3833.4028234663852886e+383.4028234663852886e+3867810");
    });
    it('Should fill a rectangle', function () {
       let tRGB = testRGB();
       tRGB.fillRect(0,0,2,2);
       let pixels = tRGB.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("-16777216-167772163-16777216-167772166789");
    });
 });

 describe('filter(int type) => ', function () {
    it('A 3x3 filter operation, where the argument (BLUR_MORE, FIND_EDGES, MEDIAN_FILTER, MIN or MAX) determines the filter type', function () {
       let t8 = test8();
       t8.filter(2);
       let pixels = t8.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("000050000");
    });
    it('A 3x3 filter operation, where the argument (BLUR_MORE, FIND_EDGES, MEDIAN_FILTER, MIN or MAX) determines the filter type', function () {
       let t16 = test16();
       t16.filter(2);
       let pixels = t16.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("123456789");
    });
    it('A 3x3 filter operation, where the argument (BLUR_MORE, FIND_EDGES, MEDIAN_FILTER, MIN or MAX) determines the filter type', function () {
       let t32 = test32();
       t32.filter(1);
       let pixels = t32.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("12.64911079406738314.42220497131347712.64911079406738324.33105087280273426.57065963745117227.45906066894531212.64911079406738317.02938652038574216.552946090698242");
    });
    it('A 3x3 filter operation, where the argument (BLUR_MORE, FIND_EDGES, MEDIAN_FILTER, MIN or MAX) determines the filter type', function () {
       let tRGB = testRGB();
       tRGB.filter(2);
       let pixels = tRGB.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("-16777216-16777216-16777216-16777216-16777211-16777216-16777216-16777216-16777216");
    });
 });

 describe('findEdges() => ', function () {
    it('Should find edges in the image or ROI using a Sobel operator', function () {
       let t8 = test8();
       t8.findEdges();
       let pixels = t8.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toEqual("121412242524121412");
    });
    it('Should find edges in the image or ROI using a Sobel operator', function () {
       let t16 = test16();
       t16.findEdges();
       let pixels = t16.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toEqual("121412242524121412");
    });
    it('Should find edges in the image or ROI using a Sobel operator', function () {
       let t32 = test32();
       t32.findEdges();
       let pixels = t32.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toEqual("12.64911079406738314.42220497131347712.64911079406738324.33105087280273426.57065963745117227.45906066894531212.64911079406738317.02938652038574216.552946090698242");
    });
    it('Should find edges in the image or ROI using a Sobel operator', function () {
       let tRGB = testRGB();
       tRGB.findEdges();
       let pixels = tRGB.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toEqual("-16777204-16777202-16777204-16777192-16777191-16777192-16777204-16777202-16777204");
    });
 });

 describe('gamma(double value) => ', function () {
    it('Should perform gamma correction of the image or ROI', function () {
       let t8 = test8();
       t8.gamma(3);
       let pixels = t8.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("000000000");
    });
    it('Should perform gamma correction of the image or ROI', function () {
       let t16 = test16();
       t16.gamma(3);
       let pixels = t16.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("111122469");
    });
    it('Should perform gamma correction of the image or ROI', function () {
       let t32 = test32();
       t32.gamma(3);
       let pixels = t32.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("1827641252163435121000");
    });
    it('Should perform gamma correction of the image or ROI', function () {
       let tRGB = testRGB();
       tRGB.gamma(3);
       let pixels = tRGB.getFloatArray();
       const result = toArray2D(pixels,3,3);
       expect(result).toBe("-16777216-16777216-16777216-16777216-16777216-16777216-16777216-16777216-16777216");
    });
 });

 describe('getAutoThreshold() => int', function () {
    it('Should return a pixel value (threshold) that can be used to divide the image into objects and background', function () {
       let t8 = test8();
       const result = t8.getAutoThreshold();
       expect(result).toBe(4);
    });
    it('Should return a pixel value (threshold) that can be used to divide the image into objects and background', function () {
       let t16 = test16();
       const result = t16.getAutoThreshold();
       expect(result).toBe(4);
    });
    it('Should return a pixel value (threshold) that can be used to divide the image into objects and background', function () {
       let t32 = test32();
       const result = t32.getAutoThreshold();
       expect(result).toBe(106);
    });
    it('Should return a pixel value (threshold) that can be used to divide the image into objects and background', function () {
       let tRGB = testRGB();
       const result = tRGB.getAutoThreshold();
       expect(result).toBe(2);
    });
 });

 
 describe('getAutoThreshold(int[] histogram) => int', function () {
    it('This is a version of getAutoThreshold() that uses a histogram passed as an argument', function () {
       let t8 = test8();
       let hist = t8.getHistogram();
       const result = t8.getAutoThreshold(hist);
       expect(result).toBe(4);
    });
    it('This is a version of getAutoThreshold() that uses a histogram passed as an argument', function () {
       let t16 = test16();
       let hist = t16.getHistogram();
       const result = t16.getAutoThreshold(hist);
       expect(result).toBe(4);
    });
    it('This is a version of getAutoThreshold() that uses a histogram passed as an argument', function () {
       let t32 = test32();
       let hist = t32.getHistogram();
       const result = t32.getAutoThreshold(hist);
       expect(result).toBe(106);
    });
    it('This is a version of getAutoThreshold() that uses a histogram passed as an argument', function () {
       let tRGB = testRGB();
       let hist = tRGB.getHistogram();
       const result = tRGB.getAutoThreshold(hist);
       expect(result).toBe(2);
    });
 });

 describe('getBackgroundValue() => ', function () {
    it('Should return the background fill value', function () {
       let t8 = test8();
       const result = t8.getBackgroundValue();
       expect(result).toBe(255);
    });
    it('Should return the background fill value', function () {
       let t16 = test16();
       const result = t16.getBackgroundValue();
       expect(result).toBe(0);
    });
    it('Should return the background fill value', function () {
       let t32 = test32();
       const result = t32.getBackgroundValue();
       expect(result).toBe(0);
    });
    it('Should return the background fill value', function () {
       let tRGB = testRGB();
       const result = tRGB.getBackgroundValue();
       expect(result).toBe(-1);
    });
 });

 describe('getBestIndex(Color c) => ', function () {
    it('Should return the LUT index thats the best match for this color', function () {
       let t8 = test8();
       const result = t8.getBestIndex(Color.RED);
       expect(result).toBe(85);
    });
 });

 describe('getColorModel() => ColorModel', function () {
    it('Should return this processors color model', function () {
       let t8 = test8();
       const result = t8.getColorModel().toString().slice(0,50);
       expect(result).toBe("IndexColorModel: #pixelBits = 8 numComponents = 3 ");
    });
    it('Should return this processors color model', function () {
       let t16 = test16();
       const result = t16.getColorModel().toString().slice(0,50);
       expect(result).toBe("IndexColorModel: #pixelBits = 8 numComponents = 3 ");
    });
    it('Should return this processors color model', function () {
       let t32 = test32();
       const result = t32.getColorModel().toString().slice(0,50);
       expect(result).toBe("IndexColorModel: #pixelBits = 8 numComponents = 3 ");
    });
    it('Should return this processors color model', function () {
       let tRGB = testRGB();
       const result = tRGB.getColorModel().toString();
       expect(result).toBe("DirectColorModel: rmask=ff0000 gmask=ff00 bmask=ff amask=0");
    });
 });

 describe('getColorModel() => IndexColorModel', function () {
    it('Should return the default grayscale IndexColorModel', function () {
       let t8 = test8();
       const result = t8.getDefaultColorModel().toString().slice(0,50);
       IJ.log(result)
       expect(result).toBe("IndexColorModel: #pixelBits = 8 numComponents = 3 ");
    });
 });

 describe('getf(int) => ', function () {
    it('should return the value of the pixel at the index as a float', function () {
       let t8 = test8();
       t8.add(2.5);
       const result = t8.getf(2);
       expect(result).toBe(5);
    });
    it('should return the value of the pixel at the index as a float', function () {
       let t16 = test16();
       t16.add(2.5);
       const result = t16.getf(2);
       expect(result).toBe(5);
    });
    it('should return the value of the pixel at the index as a float', function () {
       let t32 = test32();
       t32.add(2.5);
       const result = t32.getf(2);
       expect(result).toBe(5.5);
    });
    it('should return the value of the pixel at the index as a float', function () {
       let tRGB = testRGB();
       tRGB.add(2.5);
       const result = tRGB.getf(2,0);
       expect(result).toBe(-16645627);
    });
 });

 describe('getf(int x, int y) => ', function () {
    it('should return the value of the pixel at (x,y) as a float', function () {
       let t8 = test8();
       t8.add(2.5);
       const result = t8.getf(2,0);
       expect(result).toBe(5);
    });
    it('should return the value of the pixel at (x,y) as a float', function () {
       let t16 = test16();
       t16.add(2.5);
       const result = t16.getf(2,0);
       expect(result).toBe(5);
    });
    it('should return the value of the pixel at (x,y) as a float', function () {
       let t32 = test32();
       t32.add(2.5);
       const result = t32.getf(2,0);
       expect(result).toBe(5.5);
    });
    it('should return the value of the pixel at (x,y) as a float', function () {
       let tRGB = testRGB();
       tRGB.add(2.5);
       const result = tRGB.getf(2);
       expect(result).toBe(-16645627);
    });
 });

 describe('getFontMetrics() => ', function () {
    it('Should return the current FontMetrics', function () {
       let t8 = test8();
       const result = t8.getFontMetrics().toString();
       expect(result).toBe("sun.font.FontDesignMetrics[font=java.awt.Font[family=SansSerif,name=SansSerif,style=plain,size=12]ascent=12, descent=3, height=15]");
    });
 });

   describe('#getWidth()', function(){
      it('should return the width of the 8-bit image in pixels', function(){
         let imp8 = test8();
         const result = imp8.getWidth();
         expect(result).toBe(3);
         });


      it('should return the width of the 16-bit image in pixels', function(){
         let imp16 = test16();
         const result = imp16.getWidth();
         expect(result).toBe(3);
         });

      it('should return the width of the 32-bit image in pixels', function(){
         let imp32 = test32();
         const result = imp32.getWidth();
         expect(result).toBe(3);
         });

      it('should return the width of the RGB image in pixels', function(){
         let impRGB = testRGB();
         const result = impRGB.getWidth();
         expect(result).toBe(3);
      });
   });

   describe('#getHeight()', function(){
      it('should return the height of the 8-bit image in pixels', function(){
         let imp8 = test8();
         const result = imp8.getHeight();
         expect(result).toBe(3);
      });

      it('should return the height of the 16-bit image in pixels', function(){
         let imp16 = test16();
         const result = imp16.getHeight();
         expect(result).toBe(3);
      });

      it('should return the height of the 32-bit image in pixels', function(){
         let imp32 = test32();
         const result = imp32.getHeight();
         expect(result).toBe(3);
      });

      it('should return the height of the RGB image in pixels', function(){
         let impRGB = testRGB();
         const result = impRGB.getHeight();
         expect(result).toBe(3);
      });
   }); 

   describe('#invertLut()', function(){
      it('should invert the values in the 8-bit images LUT. Does nothing if this is a ColorProcessor', function(){
         let imp8 = test8();
         imp8.invertLut();
         const result = imp8.isInvertedLut();
         expect(result).toBe(true);
      });

      it('should invert the values in the 16-bit images LUT. Does nothing if this is a ColorProcessor', function(){
         let imp16 = test8();
         imp16.invertLut();
         const result = imp16.isInvertedLut();
         expect(result).toBe(true);
      });

      it('should invert the values in the 32-bit images LUT. Does nothing if this is a ColorProcessor', function(){
         let imp32 = test32();
         imp32.invertLut();
         const result = imp32.isInvertedLut();
         expect(result).toBe(true);
      }); 

      it('Does nothing if this is a ColorProcessor', function(){
         let impRGB = testRGB();
         impRGB.invertLut();
         const result = impRGB.isInvertedLut();
         expect(result).toBe(false);
      });
   });

   describe('#isInvertLutedLut()', function(){
      it('should return false if the 8-bit image does not use an inverting LUT that displays 0 as white and 255 as black.', function(){
         let imp8 = test8();
         const result = imp8.isInvertedLut();
         expect(result).toBe(false);
      });
      it('should return true if the 8-bit image uses an inverting LUT that displays 0 as white and 255 as black.', function(){
         let imp8 = test8();
         imp8.invertLut();
         const result = imp8.isInvertedLut();
         expect(result).toBe(true);
      });

      it('should return false if the 16-bit image does not use an inverting LUT that displays 0 as white and 255 as black.', function(){
         let imp16 = test16();
         const result = imp16.isInvertedLut();
         expect(result).toBe(false);
      });
      it('should return true if the 16-bit image uses an inverting LUT that displays 0 as white and 255 as black.', function(){
         let imp16 = test16();
         imp16.invertLut();
         const result = imp16.isInvertedLut();
         expect(result).toBe(true);
      });

      it('should return false if the 32-bit image does not use an inverting LUT that displays 0 as white and 255 as black.', function(){
         let imp32 = test32();
         const result = imp32.isInvertedLut();
         expect(result).toBe(false);
      });
      it('should return true if the 32-bit image uses an inverting LUT that displays 0 as white and 255 as black.', function(){
         let imp32 = test32();
         imp32.invertLut();
         const result = imp32.isInvertedLut();
         expect(result).toBe(true);
      });

      it('Does nothing if this is a ColorProcessor', function(){
         let impRGB = testRGB();
         const result = impRGB.isInvertedLut();
         expect(result).toBe(false);
      });
      it('Does nothing if this is a ColorProcessor', function(){
         let impRGB = testRGB();
         impRGB.invertLut();
         const result = impRGB.isInvertedLut();
         expect(result).toBe(false);
      });
   }); 

   describe('#isBinary()', function(){
      it('should return true if this is a binary image (8-bit-image with only 0 and 255)', function(){
         let imp8 = test8();
         imp8.autoThreshold();
         const result = imp8.isBinary();
         expect(result).toBe(true);
      });
      it('should return false if this is not a binary image (8-bit-image with only 0 and 255)', function(){
         let imp8 = test8();
         const result = imp8.isBinary();
         expect(result).toBe(false);
      });

      it('should return false if this is not a binary image (8-bit-image with only 0 and 255)', function(){
         let imp16 = test16();
         const result = imp16.isBinary();
         expect(result).toBe(false);
      });

      it('should return false if this is not a binary image (8-bit-image with only 0 and 255)', function(){
         let imp32 = test32();
         const result = imp32.isBinary();
         expect(result).toBe(false);
      });

      it('should return false if this is not a binary image (8-bit-image with only 0 and 255)', function(){
         let impRGB = testRGB();
         const result = impRGB.isBinary();
         expect(result).toBe(false);
      });
   }); 

   describe('#getNChannels()', function(){
      it('should return the number of color channels = 1 for grayscale images', function(){
         let imp8 = test8();
         const result = imp8.getNChannels();
         expect(result).toBe(1);
      });
      
      it('should return the number of color channels = 1 for grayscale images', function(){
         let imp16 = test16();
         const result = imp16.getNChannels();
         expect(result).toBe(1);
      });

      it('should return the number of color channels = 1 for grayscale images', function(){
         let imp32 = test32();
         const result = imp32.getNChannels();
         expect(result).toBe(1);
      });

      it('should return 3 for RGB images', function(){
         let impRGB= testRGB();
         const result = impRGB.getNChannels();
         expect(result).toBe(3);
      });        
   }); 

   describe('#getBitDepth()', function(){
      it('should return 8 if pixels is instance of byte[]', function(){
         let imp8 =  test8();
         const result = imp8.getBitDepth();
         expect(result).toBe(8);
      });

      it('should return 16 if pixels is instance of short[]', function(){
         let imp16 =  test16();
         const result = imp16.getBitDepth();
         expect(result).toBe(16);
      });

      it('should return 32 if pixels is instance of float[]', function(){
         let imp32 =  test32();
         const result = imp32.getBitDepth();
         expect(result).toBe(32);
      });

      it('should return 24 for RGB image', function(){
         let impRGB =  testRGB();
         const result = impRGB.getBitDepth();
         expect(result).toBe(24);
      });
   });

   describe('#setSliceNumber(int value)', function(){
      it('For 8-bit image, PlugInFilterRunner uses this method to set the slice number and return 1 if sliceNumber<1', function(){
         let imp8 = test8();
         imp8.setSliceNumber(0);
         const result = imp8.getSliceNumber();
         expect(result).toBe(1);
      }); 
      it('For 8-bit image, set the slice number and return sliceNumber if sliceNumber>=1', function(){
         let imp8 = test8();
         imp8.setSliceNumber(2);
         const result = imp8.getSliceNumber();
         expect(result).toBe(2);
      }); 

      it('For 16-bit image, PlugInFilterRunner uses this method to set the slice number and return 1 if sliceNumber<1', function(){
         let imp16 = test16();
         imp16.setSliceNumber(0);
         const result = imp16.getSliceNumber();
         expect(result).toBe(1);
      }); 
      it('For 16-bit image, set the slice number and return sliceNumber if sliceNumber>=1', function(){
         let imp16 = test16();
         imp16.setSliceNumber(2);
         const result = imp16.getSliceNumber();
         expect(result).toBe(2);
      }); 

      it('For 32-bit image, PlugInFilterRunner uses this method to set the slice number and return 1 if sliceNumber<1', function(){
         let imp32 = test32();
         imp32.setSliceNumber(0);
         const result = imp32.getSliceNumber();
         expect(result).toBe(1);
      });
      it('For 32-bit image, set the slice number and return sliceNumber if sliceNumber>=1', function(){
         let imp32 = test32();
         imp32.setSliceNumber(2);
         const result = imp32.getSliceNumber();
         expect(result).toBe(2);
      });
      
      it('For RGB image, PlugInFilterRunner uses this method to set the slice number and return 1 if sliceNumber<1', function(){
         let impRGB = testRGB();
         impRGB.setSliceNumber(0);
         const result = impRGB.getSliceNumber();
         expect(result).toBe(1);
      }); 
      it('For RGB image, set the slice number and return sliceNumber if sliceNumber>=1', function(){
         let impRGB = testRGB();
         impRGB.setSliceNumber(2);
         const result = impRGB.getSliceNumber();
         expect(result).toBe(2);
      }); 
   }); 

   describe('#getSliceNumber()', function(){
      it('should return 1 if sliceNumber<1 for 8-bit image', function(){
         let imp8 = test8();
         imp8.setSliceNumber(0);
         const result = imp8.getSliceNumber();
         expect(result).toBe(1);
      });
      it('should return sliceNumber if sliceNumber>=1 for 8-bit image', function(){
         let imp8 = test8();
         imp8.setSliceNumber(2);
         const result = imp8.getSliceNumber();
         expect(result).toBe(2);
      });

      it('should return 1 if sliceNumber<1 for 16-bit image', function(){
         let imp16 = test16();
         imp16.setSliceNumber(0);
         const result = imp16.getSliceNumber();
         expect(result).toBe(1);
      });
      it('should return sliceNumber if sliceNumber>=1 for 16-bit image', function(){
         let imp16 = test16();
         imp16.setSliceNumber(2);
         const result = imp16.getSliceNumber();
         expect(result).toBe(2);
      });

      it('should return 1 if sliceNumber<1 for 32-bit image', function(){
         let imp32 = test32();
         imp32.setSliceNumber(0);
         const result = imp32.getSliceNumber();
         expect(result).toBe(1);
      });
      it('should return sliceNumber if sliceNumber>=1 for 32-bit image', function(){
         let imp32 = test32();
         imp32.setSliceNumber(2);
         const result = imp32.getSliceNumber();
         expect(result).toBe(2);
      });

      it('should return 1 if sliceNumber<1 for RGB image', function(){
         let impRGB = testRGB();
         impRGB.setSliceNumber(0);
         const result = impRGB.getSliceNumber();
         expect(result).toBe(1);
      });
      it('should return sliceNumber if sliceNumber>=1 for RGB image', function(){
         let impRGB = testRGB();
         impRGB.setSliceNumber(2);
         const result = impRGB.getSliceNumber();
         expect(result).toBe(2);
      });
   }); 

   describe('#getLutUpdateMode()', function(){
      it('for 8-bit image, should returns the LUT update mode, which can be RED_LUT, BLACK_AND_WHITE_LUT, OVER_UNDER_LUT or NO_LUT_UPDATE', function(){
         let imp8 = test8();
         imp8.setThreshold(4,120,0);
         const result = imp8.getLutUpdateMode();
         expect(result).toBe(0);
      });
      it('for 16-bit image, should returns the LUT update mode, which can be RED_LUT, BLACK_AND_WHITE_LUT, OVER_UNDER_LUT or NO_LUT_UPDATE', function(){
         let imp16 = test16();
         imp16.setThreshold(4,120,0);
         const result = imp16.getLutUpdateMode();
         expect(result).toBe(0);
      });
      it('for 32-bit image, should returns the LUT update mode, which can be RED_LUT, BLACK_AND_WHITE_LUT, OVER_UNDER_LUT or NO_LUT_UPDATE', function(){
         let imp32 = test32();
         imp32.setThreshold(4,120,0);
         const result = imp32.getLutUpdateMode();
         expect(result).toBe(0);
      });
      it('for RGB image, should returns the LUT update mode, which can be RED_LUT, BLACK_AND_WHITE_LUT, OVER_UNDER_LUT or NO_LUT_UPDATE', function(){
         let impRGB = testRGB();
         impRGB.setThreshold(4,120,0);
         const result = impRGB.getLutUpdateMode();
         expect(result).toBe(0);
      });    
   }); 

   describe('#isSigned16Bit()', function(){
      it('should return true if this is a signed 16-bit image', function(){
         let imp16 = test16();
         const result = imp16.isSigned16Bit();
         expect(result).toBe(false);
      });
   }); 

   describe('#setHistogramRange()', function(){
      it('should set the range used for histograms of float images.', function(){
         let imp32 = test32();
         imp32.setHistogramRange(24,155);
         const getMin = imp32.getHistogramMin();
         const getMax = imp32.getHistogramMax();
         expect(getMin).toBe(24);
         expect(getMax).toBe(155);        
      }); 
   });

   describe('#setHistogramSize(int size)', function(){
      it('should set the range used for histograms of float images.', function(){
         let imp32 = test32();
         imp32.setHistogramSize(244);
         const result = imp32.getHistogramSize();
         expect(result).toBe(244);
      }); 
   });

   describe('#getHistogramSize(int size)', function(){
      it('should return the number of float image histogram bins. The bin count is fixed at 256 for the other three data types', function(){
         let imp32 = test32();
         const result = imp32.getHistogramSize();
         expect(result).toBe(256);
      }); 
   });

   describe('#getHistogramMin()', function(){
      it('should return the minimum histogram value used for histograms of float images', function(){
         let imp32 = test32();
         imp32.setHistogramRange(3,255);
         const result = imp32.getHistogramMin();
         expect(result).toBe(3);
      }); 
   });

   describe('#getHistogramMax()', function(){
      it('should return the maximum histogram value used for histograms of float images', function(){
         let imp32 = test32();
         imp32.setHistogramRange(3,238);
         const result = imp32.getHistogramMax();
         expect(result).toBe(238);
      });
   });

   describe('set(double value)', function(){
      it('should assign value to each pixel in the 8-bit image or ROI', function(){
         let imp8 = test8();
         imp8.set(8);
         let arrayf = imp8.getFloatArray();
         const result = toArray2D(arrayf, 3, 3);
         expect(result).toBe('888888888');
      });

      it('should assign value to each pixel in the 16-bit image or ROI', function(){
         let imp16 = test16();
         imp16.set(8);
         let arrayf = imp16.getFloatArray();
         const result = toArray2D(arrayf, 3, 3);
         expect(result).toBe('888888888');
      });

      it('should assign value to each pixel in the 32-bit image or ROI', function(){
         let imp32 = test8();
         imp32.set(8);
         let arrayf = imp32.getFloatArray();
         const result = toArray2D(arrayf, 3, 3);
         expect(result).toBe('888888888');
      });

      it('should assign value to each pixel in the RGB image or ROI', function(){
         let impRGB = testRGB();
         impRGB.set(8);
         let arrayf = impRGB.getFloatArray();
         const result = toArray2D(arrayf, 3, 3);
         IJ.log(result);
         expect(result).toBe('-16250872-16250872-16250872-16250872-16250872-16250872-16250872-16250872-16250872');
      });
   });

   describe('#setBinaryThreshold()', function(){
      it('set the threshold levels of an 8-bit image', function(){
         let imp8 = test8();
         imp8.setBinaryThreshold();
         let getMin = imp8.getMinThreshold();
         let getMax = imp8.getMaxThreshold(); 
         expect(getMin).toBe(0);
         expect(getMax).toBe(0);
      });
   }); 

   describe('#resetBinaryThreshold()', function(){
      it('reset the threshold if minThreshold=maxThreshold and lutUpdateMode=NO_LUT_UPDATE. This removes the invisible threshold set by the MakeBinary and Convert to Mask commands', function(){
         let imp8 = test8();
         imp8.resetBinaryThreshold();
         let getMin = imp8.getMinThreshold();
         let getMax = imp8.getMaxThreshold(); 
         let getLut = imp8.getLutUpdateMode();
         expect(getMin).toBe(-808080);
         expect(getMax).toBe(-808080);
         expect(getLut).toBe(0);
      });
   }); 

   describe('#setThreshold(double minThreshold, double maxThreshold, int lutUpdate))', function(){
      it('should set the lower and upper threshold levels for 8-bit image', function(){
         let imp8 = test8();
         imp8.setThreshold(4.55,120.55,3);
         let getMin = imp8.getMinThreshold();
         let getMax = imp8.getMaxThreshold();
         let getLut = imp8.getLutUpdateMode();
         expect(getMin).toBe(4.55);
         expect(getMax).toBe(120.55);
         expect(getLut).toBe(3);
      });
      
      it('should set the lower and upper threshold levels for 16-bit image', function(){
         let imp16 = test16();
         let ip = imp16.convertToByte(false);
         let set = ip.setThreshold(4.55,120.55,3);
         let getMin = ip.getMinThreshold();
         let getMax = ip.getMaxThreshold();
         let getLut = ip.getLutUpdateMode();
         expect(getMin).toBe(4.55);
         expect(getMax).toBe(120.55);
         expect(getLut).toBe(3);
      });

      it('should set the lower and upper threshold levels for 32-bit image', function(){
         let imp32 = test32();
         let ip = imp32.convertToByte(false);
         let set = ip.setThreshold(4.55,120.55,3);
         let getMin = ip.getMinThreshold();
         let getMax = ip.getMaxThreshold();
         let getLut = ip.getLutUpdateMode();
         expect(getMin).toBe(4.55);
         expect(getMax).toBe(120.55);
         expect(getLut).toBe(3);
      });

      it('should set the lower and upper threshold levels for RGB image', function(){
         let impRGB = testRGB();
         let ip = impRGB.convertToByte(false);
         let set = ip.setThreshold(4.55,120.55,3);
         let getMin = ip.getMinThreshold();
         let getMax = ip.getMaxThreshold();
         let getLut = ip.getLutUpdateMode();
         expect(getMin).toBe(4.55);
         expect(getMax).toBe(120.55);
         expect(getLut).toBe(3);
      });
   });

   describe('#isDefaultLut()', function(){
      it('should return false for ColorProcessor', function(){
         let impRGB = testRGB();
         const scale = impRGB.isDefaultLut();
         expect(scale).toBe(false);
      });

      it('should return true if the image is using the default grayscale LUT (case of ByteProcessor)', function(){
         let imp8= test8();
         const scale = imp8.isDefaultLut();
         expect(scale).toBe(true);
      });

      it('should return true if the image is using the default grayscale LUT (case of ByteProcessor)', function(){
         let imp16= test16();
         const scale = imp16.isDefaultLut();
         expect(scale).toBe(true);
      });

      it('should return true if the image is using the default grayscale LUT (case of ByteProcessor)', function(){
         let imp32= test32();
         const scale = imp32.isDefaultLut();
         expect(scale).toBe(true);
      });
   });

   describe('#getMinThreshold()', function(){
      it('should return the lower threshold level for 8-bit image', function(){
         let imp8 = test8();
         const result = imp8.getMinThreshold();
         expect(result).toBe(-808080);
      });
   
      it('should return the lower threshold level for 16-bit image', function(){
         let imp16 = test16();
         let ip = imp16.convertToByte(false);
         const result = ip.getMinThreshold();
         expect(result).toBe(-808080);
      });
   
      it('should return the lower threshold level for 32-bit image', function(){
         let imp32 = test32();
         let ip = imp32.convertToByte(false);
         const result = ip.getMinThreshold();
         expect(result).toBe(-808080);
      });
   
      it('should return the lower threshold level for RGB image', function(){
         let impRGB = testRGB();
         let ip = impRGB.convertToByte(false);
         const result = ip.getMinThreshold();
         expect(result).toBe(-808080);
      });
   });
   
   describe('#getMaxThreshold()', function(){
      it('should return the upper threshold level for 8-bit image', function(){
         let imp8 = test8();
         const result = imp8.getMaxThreshold();
         expect(result).toBe(-808080);
      });
   
      it('should return the upper threshold level for 16-bit image', function(){
         let imp16 = test16();
         let ip = imp16.convertToByte(false);
         const result = ip.getMaxThreshold();
         expect(result).toBe(-808080);
      });
   
      it('should return the upper threshold level for 32-bit image', function(){
         let imp32 = test32();
         let ip = imp32.convertToByte(false);
         const result = ip.getMaxThreshold();
         expect(result).toBe(-808080);
      });
   
      it('should return the upper threshold level for RGB image', function(){
         let impRGB = testRGB();
         let ip = impRGB.convertToByte(false);
         const result = ip.getMaxThreshold();
         expect(result).toBe(-808080);
      });
   });

   describe('#setLineWidth()', function(){
      it('should set the line width used by lineTo() and drawDot() for 8-bit image', function(){
         let imp8= test8();
         imp8.setLineWidth(2);
         const result = imp8.getLineWidth();
         expect(result).toBe(2);
      });

      it('should set the line width used by lineTo() and drawDot() for 16-bit image', function(){
         let imp16= test16();
         imp16.setLineWidth(2);
         const result = imp16.getLineWidth();
         expect(result).toBe(2);
      });

      it('should set the line width used by lineTo() and drawDot() for 32-bit image', function(){
         let imp32= test32();
         imp32.setLineWidth(2);
         const result = imp32.getLineWidth();
         expect(result).toBe(2);
      });

      it('should set the line width used by lineTo() and drawDot() for RGB image', function(){
         let impRGB= testRGB();
         impRGB.setLineWidth(2);
         const result = impRGB.getLineWidth();
         expect(result).toBe(2);
      });
   });

   describe('#resetThreshold()', function(){
      it('should disable thresholding for 8-bit image', function(){
         let imp8 = test8();
         imp8.setThreshold(14.55,25.55,1);
         imp8.resetThreshold();
         const getMinThreshold = imp8.getMinThreshold();
         expect(getMinThreshold).toBe(-808080.0);
      });

      it('should disable thresholding for 16-bit image', function(){
         let imp16 = test16();
         let ip = imp16.convertToByte(false)
         ip.setThreshold(14.55,25.55,1);
         ip.resetThreshold();
         const getMinThreshold = ip.getMinThreshold();
         expect(getMinThreshold).toBe(-808080.0);
      });

      it('should disable thresholding for 32-bit image', function(){
         let imp32 = test32();
         let ip = imp32.convertToByte(false)
         ip.setThreshold(14.55,25.55,1);
         ip.resetThreshold();
         const getMinThreshold = ip.getMinThreshold();
         expect(getMinThreshold).toBe(-808080.0);
      });

      it('should disable thresholding for RGB image', function(){
         let impRGB = testRGB();
         let ip = impRGB.convertToByte(false)
         ip.setThreshold(14.55,25.55,1);
         ip.resetThreshold();
         const getMinThreshold = ip.getMinThreshold();
         expect(getMinThreshold).toBe(-808080.0);
      });
   });

   describe('autoThreshold()', function(){
      it('convert the image to binary using an automatically determined threshold. For byte and short images, convert to binary using an automatically determined threshold. For RGB images, convert each channel to binary. For float images, does nothing', function(){
         let imp8 = test8();
         imp8.autoThreshold();
         let getMin = imp8.getMinThreshold();
         let getMax = imp8.getMaxThreshold();
         expect(getMin).toBe(-808080);
         expect(getMax).toBe(-808080);            
      });
      it('convert the image to binary using an automatically determined threshold. For byte and short images, convert to binary using an automatically determined threshold. For RGB images, convert each channel to binary. For float images, does nothing', function(){
         let imp16 = test16();
         imp16.autoThreshold();
         let getMin = imp16.getMinThreshold();
         let getMax = imp16.getMaxThreshold();
         expect(getMin).toBe(-808080);
         expect(getMax).toBe(-808080);            
      });
   });

   describe('#putPixelValue(int x, int y, double value)', function(){
      it('should store the specified value at (x,y) for 8-bit image', function(){
         let imp8 = test8();
         imp8.putPixelValue(2,2,146);
         let result = imp8.getPixelValue(2,2);
         expect(result).toBe(146);
      });

      it('should store the specified value at (x,y) for 16-bit image', function(){
         let imp16 = test16();
         imp16.putPixelValue(1,1,146);
         let result = imp16.getPixelValue(1,1);
         expect(result).toBe(146);
      });

      it('should store the specified value at (x,y) for 32-bit image', function(){
         let imp32 = test32();
         imp32.putPixelValue(2,2,146);
         let result = imp32.getPixelValue(2,2);
         expect(result).toBe(146);
      });

      it('should store the specified value at (x,y) for RGB image', function(){
         let impRGB = testRGB();
         impRGB.putPixelValue(1,1,146);
         let result = impRGB.getPixelValue(1,1);
         expect(result).toBe(146);
      });
   });

   describe('#getPixel(int x, int y)', function(){
      it('should return zero if either the x or y coodinate is out of range for 8-bit image', function(){
         let imp8= test8();
         const result = imp8.getPixel(25,52);
         expect(result).toBe(0);
      });

      it('should return zero if either the x or y coodinate is out of range for 16-bit image', function(){
         let imp16= test16();
         const result = imp16.getPixel(25,52);
         expect(result).toBe(0);
      });

      it('should return zero if either the x or y coodinate is out of range for 32-bit image', function(){
         let imp32= test32();
         const result = imp32.getPixel(25,52);
         expect(result).toBe(0);
      });

      it('should return zero if either the x or y coodinate is out of range for RGB image', function(){
         let imp32= test32();
         const result = imp32.getPixel(25,52);
         expect(result).toBe(0);
      });

      it('should return the value of the pixel at (x,y). Use getValue(x,y) to get calibrated values from 8-bit images.', function(){
         let imp8 = test8();
         const result = imp8.getPixel(2,2);
         expect(result).toBe(9);
      });

      it('should return the value of the pixel at (x,y). Use getValue(x,y) to get calibrated values from 16-bit images.', function(){
         let imp16 = test16();
         const result = imp16.getPixel(2,2);
         expect(result).toBe(9);
      });

      it('should return the value of the pixel at (x,y). For float images, the value must be converted using Float.intBitsToFloat()', function(){
         let imp32 = test32();
         let getPixel = imp32.getPixel(2,2);
         let arrayf = imp32.getFloatArray();
         const result = toArray2D(arrayf, 3, 3);
         expect(result).toBe('1234567810');
      });

      it('should return the value of the pixel at (x,y). For float images, the value must be converted using Float.intBitsToFloat()', function(){
         let impRGB = testRGB();
         const result = impRGB.getPixel(2,2);
         expect(result).toBe(9);
      });        
   });

   describe('#getMin()', function(){
      it('should return the smallest displayed pixel value of the 8-bit image', function(){
         let imp8= test8();
         const result = imp8.getMin();
         expect(result).toBe(0);
      });

      it('should return the smallest displayed pixel value of the 16-bit image', function(){
      let imp16= test16();
      const result = imp16.getMin();
      expect(result).toBe(1);
      });

      it('should return the smallest displayed pixel value of the 32-bit image', function(){
      let imp32= test32();
      const result = imp32.getMin();
      expect(result).toBe(1);
      });

      it('should return the smallest displayed pixel value of the RGB image', function(){
      let impRGB= testRGB();
      const result = impRGB.getMin();
      expect(result).toBe(0);
      });
   }); 

   describe('#getMax()', function(){
      it('should return the largest displayed pixel value of the 8-bit image', function(){
      let imp8 = test8(); 
      const result = imp8.getMax();
      expect(result).toBe(255);
      });

      it('should return the largest displayed pixel value of the 16-bit image', function(){
      let imp16 = test16(); 
      const result = imp16.getMax();
      expect(result).toBe(9);
      });

      it('should return the largest displayed pixel value of the 32-bit image', function(){
      let imp32 = test32(); 
      const result = imp32.getMax();
      expect(result).toBe(10);
      });

      it('should return the largest displayed pixel value of the RGB image', function(){
      let impRGB = testRGB(); 
      const result = impRGB.getMax();
      expect(result).toBe(255);
      });
   });      

   describe('#setMinAndMax()', function(){
      it('the 8-bit image will be displayed by mapping pixel values in the range min-max to screen values in the range 0-255', function(){
      let imp8 = test8();
      imp8.setMinAndMax(12,234);
      let testMin = imp8.getMin();
      let testMax = imp8.getMax();
      expect(testMin).toBe(12);
      expect(testMax).toBe(234);
      });

      it('the 16-bit image will be displayed by mapping pixel values in the range min-max to screen values in the range 0-255', function(){
      let imp16 = test16();
      imp16.setMinAndMax(12,234);
      let testMin = imp16.getMin();
      let testMax = imp16.getMax();
      expect(testMin).toBe(12);
      expect(testMax).toBe(234);
      });

      it('the 32-bit image will be displayed by mapping pixel values in the range min-max to screen values in the range 0-255', function(){
      let imp32 = test8();
      imp32.setMinAndMax(12,234);
      let testMin = imp32.getMin();
      let testMax = imp32.getMax();
      expect(testMin).toBe(12);
      expect(testMax).toBe(234);
      });

      it('the RGB image will be displayed by mapping pixel values in the range min-max to screen values in the range 0-255', function(){
      let impRGB = testRGB();
      impRGB.setMinAndMax(12,234);
      let testMin = impRGB.getMin();
      let testMax = impRGB.getMax();
      expect(testMin).toBe(12);
      expect(testMax).toBe(234);
      });
   }); 

   describe('#minValue()', function(){
      it('should return the minimum possible pixel value of 8-bit image', function(){
         let imp8 = test8();  
         const result = imp8.minValue();
         expect(result).toBe(0);
      });
                  
      it('should return the minimum possible pixel value of 16-bit image', function(){
         let imp16 = test16();  
         const result = imp16.minValue();
         expect(result).toBe(0);
      });

      it('should return the minimum possible pixel value of 32-bit image', function(){
      let imp32 = test32();  
      const result = imp32.minValue();
      expect(result).toBe(1.401298464324817e-45);
      });

      it('should return the minimum possible pixel value of RGB image', function(){
      let impRGB = testRGB();  
      const result = impRGB.minValue();
      expect(result).toBe(0);
      });
   }); 

   describe('#maxValue()', function(){
      it('should return the maximum possible pixel value of 8-bit image', function(){
         let imp8 = test8();  
         const result = imp8.maxValue();
         expect(result).toBe(255);
      });
                  
      it('should return the maximum possible pixel value of 16-bit image', function(){
         let imp16 = test16();  
         const result = imp16.maxValue();
         expect(result).toBe(65535);
      });

      it('should return the maximum possible pixel value of 32-bit image', function(){
      let imp32 = test32();  
      const result = imp32.maxValue();
      expect(result).toBe(3.4028234663852886e+38);
      });

      it('should return the maximum possible pixel value of RGB image', function(){
      let impRGB = testRGB();  
      const result = impRGB.maxValue();
      expect(result).toBe(255);
      });
   }); 

   describe('#getLineWidth()', function(){
      it('should return the current line width of the 8-bit image', function(){
      let imp8 = test8();  
      const result = imp8.getLineWidth();
      expect(result).toBe(1);
      });
   
      it('should return the current line width of the 16-bit image', function(){
      let imp16 = test16();  
      const result = imp16.getLineWidth();
      expect(result).toBe(1);
      });
   
      it('should return the current line width of the 32-bit image', function(){
      let imp32 = test32();  
      const result = imp32.getLineWidth();
      expect(result).toBe(1);
      });

      it('should return the current line width of the RGB image', function(){
      let impRGB = testRGB();  
      const result = impRGB.getLineWidth();
      expect(result).toBe(1);
      });
   }); 

   describe('#setValue(double value)', function(){
      it('should set the default fill/draw value of the 8-bit image', function(){
      let imp8 = test8();
      imp8.setValue(18);
      imp8.fill()
      const result = imp8.getPixelValue(0,0);
      expect(result).toBe(18);
      }); 

      it('should set the default fill/draw value of the 16-bit image', function(){
      let imp16 = test16();
      imp16.setValue(16);
      imp16.fill()
      const result = imp16.getPixelValue(0,0);
      IJ.log(result);
      expect(result).toBe(16);
      }); 
   
      it('should set the default fill/draw value of the 32-bit image', function(){
      let imp32 = test32();
      imp32.setValue(18.200000762939453);
      imp32.fill()
      const result = imp32.getPixelValue(0,0);
      IJ.log(result);
      expect(result).toBe(18.200000762939453);
      }); 

      it('should set the default fill/draw value of the RGB image', function(){
      let impRGB = testRGB();
      impRGB.setValue(24);
      impRGB.fill()
      const result = impRGB.getPixelValue(0,0);
      expect(result).toBe(8);
      }); 
   }); 

   describe('#setBackgroundValue(double value)', function(){
      it('set the background fill value used by the rotate() and scale() methods', function(){
      let imp8 = test8();
      let set = imp8.setBackgroundValue(243); 
      let result = imp8.getBackgroundValue();
      expect(result).toBe(243);
      });

      it('set the background fill value used by the rotate() and scale() methods', function(){
      let imp16 = test16();
      let set = imp16.setBackgroundValue(0); 
      let result = imp16.getBackgroundValue();
      IJ.log(result);
      expect(result).toBe(0);
      });

      it('set the background fill value used by the rotate() and scale() methods', function(){
      let imp32 = test32();
      let set = imp32.setBackgroundValue(0); 
      let result = imp32.getBackgroundValue();
      expect(result).toBe(0);
      });

      it('set the background fill value used by the rotate() and scale() methods', function(){
      let impRGB = testRGB();
      let set = impRGB.setBackgroundValue(143); 
      let result = impRGB.getBackgroundValue();
      expect(result).toBe(143);
      });
   });

   describe('#getPixelValue(int x, int y)', function(){
      it('returns the value of the pixel at (x,y) of the 8-bit image', function(){
         let imp8 = test8();
         const result = imp8.getPixelValue(0,0);
         IJ.log(result);
         expect(result).toBe(1);
      });

      it('returns the value of the pixel at (x,y) of the 16-bit image', function(){
      let imp16 = test16();
      const result = imp16.getPixelValue(1,1);
      IJ.log(result);
      expect(result).toBe(5);
      });

      it('returns the value of the pixel at (x,y) of the 32-bit image', function(){
      let imp32 = test32();
      const result = imp32.getPixelValue(2,2);
      IJ.log(result);
      expect(result).toBe(10);
      });

      it('For RGB images, returns the luminance value', function(){
      let impRGB = test32();
      const result = impRGB.getPixelValue(3,3);
      IJ.log(result);
      expect(result).toBe(0);
      });
   }); 

   describe('#set(int x, int y, int value)', function(){
      it('should store the specified value at (x,y) for 8-bit image', function(){
      let imp8 = test8();
      imp8.set(0,0,2);
      let result = imp8.getPixelValue(0,0);
      expect(result).toBe(2);
      });

      it('should store the specified value at (x,y) for 16-bit image', function(){
      let imp16 = test16();
      imp16.set(1,1,3);
      let result = imp16.getPixelValue(1,1);
      expect(result).toBe(3);
      });

      it('should store the specified value at (x,y) for 32-bit image', function(){
      let imp32 = test32();
      imp32.set(2,2,4);
      let result = imp32.getPixelValue(2,2);
      expect(result).toBe(5.605193857299268e-45);
      });

      it('should store the specified value at (x,y) for RGB image', function(){
      let impRGB = testRGB();
      impRGB.set(0,0,3);
      let result = impRGB.getPixelValue(0,0);
      expect(result).toBe(1);
      });
   }); 

   describe('#get(int x, int y)', function(){
      it('this is a faster version of getPixel() that does not do bounds checking (for 8-bit image)', function(){
      let imp8 = test8();
      const result = imp8.get(0,0);
      expect(result).toBe(1);
      });

      it('this is a faster version of getPixel() that does not do bounds checking (for 16-bit image)', function(){
      let imp16 = test16();
      const result = imp16.get(1,1);
      expect(result).toBe(5);
      });

      it('this is a faster version of getPixel() that does not do bounds checking (for 32-bit image)', function(){
      let imp32 = test32();
      const result = imp32.get(0,1);
      IJ.log(result);
      expect(result).toBe(1082130432);
      });

      it('this is a faster version of getPixel() that does not do bounds checking (for RGB image)', function(){
      let impRGB = testRGB();
      const result = impRGB.get(0,2);
      IJ.log(result);
      expect(result).toBe(7);
      });
   }); 

   describe('#set(int index, int value)', function(){
      it('set the value at a specified index of the 8-bit image', function(){
         let imp8 = test8();
         let set = imp8.set(2,53);
         const result = imp8.get(2);
         expect(result).toBe(53);
      });

      it('set the value at a specified index of the 16-bit image', function(){
      let imp16 = test16();
      let set = imp16.set(0,232);
      const result = imp16.get(0);
      expect(result).toBe(232);
      });

      it('set the value at a specified index of the 32-bit image', function(){
      let imp32 = test32();
      let set = imp32.set(1,23);
      const result = imp32.get(1);
      expect(result).toBe(23);
      });

      it('set the value at a specified index of the RGB image', function(){
      let impRGB = testRGB();
      let set = impRGB.set(0,10);
      const result = impRGB.get(0);
      expect(result).toBe(10);
      });
   });    

   describe('#get(int index)', function(){
      it('get the value at a specifiec index of the 8-bit image', function(){
      let imp8 = test8();
      const result = imp8.get(0);
      expect(result).toBe(1);
      });

      it('get the value at a specifiec index of the 16-bit image', function(){
      let imp16 = test16();
      const result = imp16.get(1);
      expect(result).toBe(2);
      });

      it('get the value at a specifiec index of the 32-bit image', function(){
      let imp32 = test32();
      const result = imp32.get(2);
      expect(result).toBe(1077936128);
      });

      it('get the value at a specifiec index of the RGB image', function(){
      let impRGB = testRGB();
      const result = impRGB.get(3);
      expect(result).toBe(4);
      });
   }); 

   describe('#getStatistics()', function(){
      it('calculates and returns complete uncalibrated (raw) statistics for the 8-bit image or ROI but it is up to 70 times slower than getStats().', function(){
         let imp8 = test8();
         const result = imp8.getStatistics();
         expect(result).toEqual("stats[count=9, mean=5.0, min=1.0, max=9.0]")
      });

      it('calculates and returns complete uncalibrated (raw) statistics for the 16-bit image or ROI but it is up to 70 times slower than getStats().', function(){
      let imp16 = test16();
      const result = imp16.getStatistics();
      expect(result).toEqual("stats[count=9, mean=5.0, min=1.0, max=9.0]")
      });

      it('calculates and returns complete uncalibrated (raw) statistics for the 32-bit image or ROI but it is up to 70 times slower than getStats().', function(){
      let imp32 = test32();
      const result = imp32.getStatistics();
      IJ.log(result);
      expect(result).toEqual("stats[count=9, mean=5.111111111111111, min=1.0, max=10.0]")
      });

      it('calculates and returns complete uncalibrated (raw) statistics for the RGB image or ROI but it is up to 70 times slower than getStats().', function(){
      let impRGB = testRGB();
      const result = impRGB.getStatistics();
      IJ.log(result);
      expect(result).toEqual("stats[count=9, mean=1.6666666666666667, min=0.0, max=3.0]")
      });
   });

   describe('#getStats()', function(){
      it('calculates and returns uncalibrated statistics for the 8-bit image or ROI, including histogram, area, mean, min and max, standard deviation, and mode.', function(){
         let imp8 = test8();
         const result = imp8.getStats();
         expect(result).toEqual("stats[count=9, mean=5.0, min=1.0, max=9.0]")
      });

      it('calculates and returns uncalibrated statistics for the 16-bit image or ROI, including histogram, area, mean, min and max, standard deviation, and mode.', function(){
      let imp16 = test16();
      const result = imp16.getStats();
      expect(result).toEqual("stats[count=9, mean=5.0, min=1.0, max=9.0]")
      });

      it('calculates and returns uncalibrated statistics for the 32-bit image or ROI, including histogram, area, mean, min and max, standard deviation, and mode.', function(){
      let imp32 = test32();
      const result = imp32.getStats();
      expect(result).toEqual("stats[count=9, mean=5.111111111111111, min=1.0, max=10.0]")
      });

      it('calculates and returns uncalibrated statistics for the RGB image or ROI, including histogram, area, mean, min and max, standard deviation, and mode.', function(){
      let impRGB = testRGB();
      const result = impRGB.getStats();
      expect(result).toEqual("stats[count=9, mean=1.6666666666666667, min=0.0, max=3.0]")
      });
   }); 

   describe('#setRoi(Roi roi)', function(){
      it('(for 8-bit image) should define a non-rectangular region of interest that will consist of a rectangular ROI and a mask.', function(){
      let imp8 = test8();
      let roi = new OvalRoi(1,1,2,2);
      imp8.setRoi(roi);
      const result = imp8.getRoi();
      expect(result).toEqual("java.awt.Rectangle[x=1,y=1,width=2,height=2]");
      });

      it('(for 16-bit image) should define a non-rectangular region of interest that will consist of a rectangular ROI and a mask.', function(){
      let imp16 = test16();
      let roi = new OvalRoi(1,1,2,2);
      imp16.setRoi(roi);
      const result = imp16.getRoi();
      expect(result).toEqual("java.awt.Rectangle[x=1,y=1,width=2,height=2]");
      });

      it('(for 32-bit image) should define a non-rectangular region of interest that will consist of a rectangular ROI and a mask.', function(){
      let imp32 = test32();
      let roi = new OvalRoi(1,1,2,2);
      imp32.setRoi(roi);
      const result = imp32.getRoi();
      expect(result).toEqual("java.awt.Rectangle[x=1,y=1,width=2,height=2]");
      });

      it('(for RGB image) should define a non-rectangular region of interest that will consist of a rectangular ROI and a mask.', function(){
      let impRGB = testRGB();
      let roi = new OvalRoi(1,1,2,2);
      impRGB.setRoi(roi);
      const result = impRGB.getRoi();
      expect(result).toEqual("java.awt.Rectangle[x=1,y=1,width=2,height=2]");
      });
   }); 

   describe('#toString()', function(){
      it('returns a string containing information about the 8-bit image', function(){
         let imp8 = test8();
         const result = imp8.getPixel(0,0).toString();
         expect(result).toBe('1');
      });

      it('returns a string containing information about the 16-bit image', function(){
      let imp16 = test16();
      const result = imp16.getPixel(1,1).toString();
      expect(result).toBe('5');
      });

      it('returns a string containing information about the 32-bit image', function(){
      let imp32 = test32();
      const result = imp32.getWidth().toString();
      expect(result).toBe('3');
      });

      it('returns a string containing information about the RGB image', function(){
      let imp32 = test32();
      const result = imp32.getHeight().toString();
      expect(result).toBe('3');
      });
   }); 

   describe('#setFont(java.awt.Font font)', function(){
      it('should set the font used by drawString() for the 8-bit image', function(){
      let imp8 = test8();
      imp8.setColor(0);
      imp8.setFont(new Font("Monospaced",Font.PLAIN,16));
      let x = 1;
      let y = 1;
      let drawstr = imp8.drawString("IMAGE PROJECT", x, y, Color.white);
      const result = imp8.getFont();
      expect(result).toEqual("java.awt.Font[family=Monospaced,name=Monospaced,style=plain,size=16]");
      });

      it('should set the font used by drawString() for the 16-bit image', function(){
      let imp16 = test16();
      imp16.setColor(0);
      imp16.setFont(new Font("Monospaced",Font.PLAIN,16));
      let x = 1;
      let y = 1;
      let drawstr = imp16.drawString("IMAGE PROJECT", x, y, Color.white);
      const result = imp16.getFont();
      expect(result).toEqual("java.awt.Font[family=Monospaced,name=Monospaced,style=plain,size=16]");
      });

      it('should set the font used by drawString() for the 32-bit image', function(){
      let imp32 = test32();
      imp32.setColor(0);
      imp32.setFont(new Font("Monospaced",Font.PLAIN,16));
      let x = 1;
      let y = 1;
      let drawstr = imp32.drawString("IMAGE PROJECT", x, y, Color.white);
      const result = imp32.getFont();
      expect(result).toEqual("java.awt.Font[family=Monospaced,name=Monospaced,style=plain,size=16]");
      });

      it('should set the font used by drawString() for the RGB image', function(){
      let impRGB = testRGB();
      impRGB.setColor(0);
      impRGB.setFont(new Font("Monospaced",Font.PLAIN,16));
      let x = 1;
      let y = 1;
      let drawstr = impRGB.drawString("IMAGE PROJECT", x, y, Color.white);
      const result = impRGB.getFont();
      expect(result).toEqual("java.awt.Font[family=Monospaced,name=Monospaced,style=plain,size=16]");
      });
   }); 

   describe('#getFont()', function(){
      it('should return the current font for the 8-bit image', function(){
      let imp8 = test8();
         imp8.setColor(0);
         let drawstr = imp8.drawString("IMAGE PROJECT", 1, 0, Color.white);
         const result = imp8.getFont();
         IJ.log(result);
         expect(result).toEqual("java.awt.Font[family=SansSerif,name=SansSerif,style=plain,size=12]");
      });

      it('should return the current font for the 16-bit image', function(){
      let imp16 = test16();
         imp16.setColor(0);
         let drawstr = imp16.drawString("IMAGE PROJECT", 1, 0, Color.white);
         const result = imp16.getFont();
         IJ.log(result);
         expect(result).toEqual("java.awt.Font[family=SansSerif,name=SansSerif,style=plain,size=12]");
      });

      it('should return the current font for the 32-bit image', function(){
      let imp32= test32();
         imp32.setColor(0);
         let drawstr = imp32.drawString("IMAGE PROJECT", 1, 0, Color.white);
         const result = imp32.getFont();
         IJ.log(result);
         expect(result).toEqual("java.awt.Font[family=SansSerif,name=SansSerif,style=plain,size=12]");
      });

      it('should return the current font for the RGB image', function(){
      let impRGB = testRGB();
         impRGB.setColor(0);
         let drawstr = impRGB.drawString("IMAGE PROJECT", 1, 0, Color.white);
         const result = impRGB.getFont();
         IJ.log(result);
         expect(result).toEqual("java.awt.Font[family=SansSerif,name=SansSerif,style=plain,size=12]");
      });
   }); 

   describe('#putPixel(int x, int y, int value)', function(){
      it('should store the specified value at (x,y) for 8-bit image', function(){
      let imp8 = test8();
      imp8.putPixel(0,0,146);
      let result = imp8.get(0,0);
      expect(result).toBe(146);
      });

      it('should store the specified value at (x,y) for 16 image', function(){
      let imp16 = test16();
      imp16.putPixel(0,1,120);
      let result = imp16.get(0,1);
      expect(result).toBe(120);
      });

      it('should store the specified value at (x,y) for 32 image', function(){
      let imp32 = test32();
      imp32.putPixel(1,1,3);
      let result = imp32.get(0,1);
      expect(result).toBe(1082130432);
      });

      it('should store the specified value at (x,y) for RGB-image', function(){
      let impRGB = testRGB();
      impRGB.putPixel(2,2,60);
      let result = impRGB.get(2,2);
      expect(result).toBe(60);
      });
   }); 

   describe('#getPixelCount()', function(){
      it('should return the result of width*height of the 8-bit image', function(){
         let imp8 = test8();
         const result = imp8.getPixelCount();
         expect(result).toBe(9);
      });

      it('should return the result of width*height of the 16-bit image', function(){
      let imp16 = test16();
      const result = imp16.getPixelCount();
      expect(result).toBe(9);
      });

      it('should return the result of width*height of the 32-bit image', function(){
      let imp32 = test32();
      const result = imp32.getPixelCount();
      expect(result).toBe(9);
      });

      it('should return the result of width*height of the RGB-bit image', function(){
      let impRGB = testRGB();
      const result = impRGB.getPixelCount();
      expect(result).toBe(9);
      });
   }); 

});

TUNIT.stats();
