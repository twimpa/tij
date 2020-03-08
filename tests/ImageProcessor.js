'use strict';

describe('ImageProcessor', function(){

    describe('#getWidth()', function(){
        it('should return the width of this image in pixels', function(){
            let imp = IJ.createImage("Image",520,256,1,24);  
            const result = imp.getWidth();
            expect(result).toBe(520);
            imp.show();
        });
    }); 

    describe('#getHeight()', function(){
        it('should return the height of this image in pixels', function(){
            let imp = IJ.createImage("Image",520,256,1,24);  
            const result = imp.getHeight();
            expect(result).toBe(256);
            imp.show();
        });
    }); 

    describe('#getStringWidth()', function(){
        it('should return the width in pixels of the specified string, including any background space (whitespace) between the x drawing coordinate and the string, not necessarily including all whitespace at the right', function(){
            let imp = IJ.createImage("String", "16-bit", 400, 200, 1);
            let ip = imp.getProcessor();
            imp.setProcessor(ip);
            ip.setColor(Color.black);
            let x=123; 
            let y=45;
            let str = ip.drawString("Image", x,y,Color.white);
            const strW = ip.getStringWidth(str);
            expect(strW).toBe(63);            
            imp.show();
        });
    }); 

    describe('#getMin()', function(){
        it('should return the smallest displayed pixel value', function(){
            let imp = IJ.getImage(); 
            let ip = IJ.getProcessor();
            imp.setProcessor(ip);
            let set = ip.setMinAndMax(3,234);
            const result = ip.getMin();
            expect(result).toBe(3);
            imp.show();
        });
    }); 

    describe('#getMax()', function(){
        it('should return the largest displayed pixel value', function(){
            let imp = IJ.getImage(); 
            let ip = IJ.getProcessor();
            imp.setProcessor(ip);
            let set = ip.setMinAndMax(3,234);
            const result = ip.getMax();
            expect(result).toBe(234);
            imp.show();
        });
    }); 

    describe('#setMinAndMax()', function(){
        it('this image will be displayed by mapping pixel values in the range min-max to screen values in the range 0-255', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor();
            imp.setProcessor(ip);
            let set = ip.setMinAndMax(12,234);
            let testMin = ip.getMin();
            let testMax = ip.getMax();
            IJ.log(testMax);
            expect(testMin).toBe(12);
            expect(testMax).toBe(234);
            imp.show();
        });
    }); 

  
    describe('#getHistogramSize()', function(){
        it('should return the number of float image histogram bins', function(){
            let imp = IJ.getImage();  
            let ip = imp.getProcessor();
            imp.setProcessor(ip);
            const result = ip.getHistogramSize();
            expect(result).toBe(256);
            imp.show();
        });
    }); 

    describe('#getPixelCount()', function(){
        it('should return the result of width*height', function(){
            let width = 400;
            let height = 200;
            let imp = IJ.createImage("String", "16-bit", width, height, 1);
            let ip = imp.getProcessor();
            imp.setProcessor(ip);
            const result = ip.getPixelCount();
            expect(result).toBe(width*height);
            imp.show();
        });
    }); 


    describe('#getValue()', function(){
        it('should return the value of the pixel at (x,y)', function(){
            let imp = IJ.getImage();  
            let ip = imp.getProcessor();
            imp.setProcessor(ip);
            let putPixel = ip.putPixel(591,435,255);
            const result = ip.getValue(591,435);
            IJ.log(result);
            expect(result).toBe(255);
            imp.show();
        });
    }); 


    describe('#minValue()', function(){
        it('should return the minimum pixel value = 0 for 8-bit, 16-bits & RGB images ', function(){
            let imp = IJ.getImage();  
            let ip = imp.getProcessor();
            imp.setProcessor(ip);
            const result = ip.minValue();
            expect(result).toBe(0);
            imp.show();
                     
        it('should return the minimum pixel value = 0 for 32-bit', function(){
            let imp = IJ.getImage();  
            let ip = imp.getProcessor();
            imp.setProcessor(ip);
            const result = ip.minValue();
            expect(result).toBe(1.401298464324817e-45);
            imp.show();
        }); 
        });
    }); 

    describe('#maxValue()', function(){
        it('should return the maximum value = 255 for 8-bit & RGB images', function(){
            let imp = IJ.getImage();  
            let ip = imp.getProcessor();
            imp.setProcessor(ip);
            const result = ip.maxValue();
            expect(result).toBe(255);
            imp.show();
        
        it('should return the maximum value = 65535 for 16-bit images', function(){
            let imp = IJ.getImage();  
            let ip = imp.getProcessor();
            imp.setProcessor(ip);
            const result = ip.maxValue();
            expect(result).toBe(65535);
            imp.show();
        
        it('should return the maximum value = 3.4028234663852886e+38 for 32-bit images', function(){
            let imp = IJ.getImage();  
            let ip = imp.getProcessor();
            imp.setProcessor(ip);
            const result = ip.maxValue();
            expect(result).toBe(3.4028234663852886e+38);
            imp.show();
        });
        });
        });
    }); 

    describe('#getLineWidth()', function(){
        it('should return the current line width', function(){
            let imp = IJ.getImage();  
            let ip = imp.getProcessor();
            imp.setProcessor(ip);
            ip.setLineWidth(28);
            const result = ip.getLineWidth();
            expect(result).toBe(28);
            imp.show();
        });
    }); 

    describe('#invertLut()', function(){
        it('should invert the values in this images LUT. Does nothing if this is a ColorProcessor', function(){
            let imp = IJ.getImage();  
            let ip = imp.getProcessor();
            imp.setProcessor(ip);
            ip.invertLut();
            const result = ip.isInvertedLut();
            expect(result).toBe(true);
            imp.show();
        });
    }); 

    describe('#isInvertLutedLut()', function(){
        it('should return true if this image uses an inverting LUT that displays 0 as white and 255 as black.', function(){
            let imp = IJ.getImage();  
            let ip = imp.getProcessor();
            imp.setProcessor(ip);
            ip.putPixel(23,56,0);
            const result = ip.isInvertedLut();
            expect(result).toBe(true);
            imp.show();
        });
    }); 


    describe('#isBinary()', function(){
        it('should return true if this is a binary image (8-bit-image with only 0 and 255)', function(){
            let imp = IJ.getImage();  
            let ip = imp.getProcessor();
            imp.setProcessor(ip);
            const result = ip.isBinary();
            expect(result).toBe(true);
            imp.show();
        });
    }); 

    describe('#getNChannels()', function(){
        it('should return the number of color channels = 1 for grayscale images', function(){
            let imp = IJ.getImage();  
            let ip = imp.getProcessor();
            imp.setProcessor(ip);
            const result = ip.getNChannels();
            expect(result).toBe(1);
            imp.show();
        
        it('should return 3 for RGB images', function(){
            let imp = IJ.getImage();  
            let ip = imp.getProcessor();
            imp.setProcessor(ip);
            const result = ip.getNChannels();
            expect(result).toBe(3);
            imp.show();
        });
        });
    }); 

    describe('#getBitDepth()', function(){
        it('should return 8 if pixels is instance of byte[]', function(){
            let imp =  IJ.getImage();
            let ip = imp.getProcessor();
            imp.setProcessor(ip);
            const result = ip.getBitDepth();
            expect(result).toBe(8);
            imp.show(); 

        it('should return 16 if pixels is instance of short[]', function(){
            let imp =  IJ.getImage();
            let ip = imp.getProcessor();
            imp.setProcessor(ip);
            const result = ip.getBitDepth();
            expect(result).toBe(16);
            imp.show(); 

        it('should return 24 if pixels is instance of int[]', function(){
            let imp =  IJ.getImage();
            let ip = imp.getProcessor();
            imp.setProcessor(ip);
            const result = ip.getBitDepth();
            expect(result).toBe(24);
            imp.show(); 
    
        it('should return 32 if pixels is instance of float[]', function(){
            let imp =  IJ.getImage();
            let ip = imp.getProcessor();
            imp.setProcessor(ip);
            const result = ip.getBitDepth();
            expect(result).toBe(32);
            imp.show();
        });
        });
        });    
        }); 
    }); 

    describe('#getStatistics()', function(){
        it('calculates and returns complete uncalibrated (raw) statistics for this image or ROI but it is up to 70 times slower than getStats().', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor();
            let ip2 = ip.createProcessor(256,256)
            const result = ip2.getStatistics();
            expect(result).toEqual("stats[count=65536, mean=0.0, min=0.0, max=0.0]")
        });
    });

    describe('#getStats()', function(){
        it('calculates and returns uncalibrated statistics for this image or ROI, including histogram, area, mean, min and max, standard deviation, and mode.', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor();
            let ip2 = ip.createProcessor(256,256)
            const result = ip2.getStats();
            expect(result).toEqual("stats[count=65536, mean=0.0, min=0.0, max=0.0]")
            imp.show();
        });
    }); 

    describe('#setValue(double value)', function(){
        it('should set the default fill/draw value.', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor();
            imp.setProcessor(ip);
            ip.setValue(18.893);
            const result = ip.fillValueSet();
            expect(result).toBe(true);
            imp.show();
        }); 
    }); 

    describe('#fillValueSet()', function(){
        it('should return true if the fill/draw value has been set', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor();
            imp.setProcessor(ip);
            ip.setValue(9.353);
            const result = ip.fillValueSet();
            expect(result).toBe(true);
            imp.show();
        }); 
    }); 

    describe('#setSliceNumber(int value)', function(){
        it('PlugInFilterRunner uses this method to set the slice number and return 1 if sliceNumber<1', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor();
            imp.setProcessor(ip);
            ip.setSliceNumber(0);
            const result = ip.getSliceNumber();
            expect(result).toBe(1);
            imp.show();

        it('set the slice number and return sliceNumber if sliceNumber>=1', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor();
            imp.setProcessor(ip);
            ip.setSliceNumber(2);
            const result = ip.getSliceNumber();
            expect(result).toBe(2);
            imp.show();
        });
        });
    }); 

    describe('#getSliceNumber()', function(){
        it('return 1 if sliceNumber<1', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor();
            imp.setProcessor(ip);
            ip.setSliceNumber(0);
            const result = ip.getSliceNumber();
            expect(result).toBe(1);
            imp.show();

        it('return sliceNumber if sliceNumber>=1', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor();
            imp.setProcessor(ip);
            ip.setSliceNumber(2);
            const result = ip.getSliceNumber();
            expect(result).toBe(2);
            imp.show();
        });
        });
    }); 

    describe('#setRoi(Roi roi)', function(){
        it('should set the lower and upper threshold levels', function(){
            let imp = IJ.getImage();
            let roi = new Roi(50,50,150,150);
            let ip = imp.getProcessor();
            ip.setRoi(roi);
            const result = ip.getRoi();
            IJ.log(result);
            expect(result).toEqual("java.awt.Rectangle[x=50,y=50,width=150,height=150]");
            imp.show();
        });
    }); 
   
    describe('#setFont(int size)', function(){
        it('should set the font used by drawString()', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor();
            imp.setProcessor(ip);
            ip.setColor(Color.black);
            ip.setFont(new Font("Monospaced",Font.PLAIN,16));
            let x = 123;
            let y = 45;
            let drawstr = ip.drawString("IMAGE PROJECT", x, y,Color.white);
            const result = ip.getFont();
            expect(result).toEqual("java.awt.Font[family=Monospaced,name=Monospaced,style=plain,size=16]");
            imp.show();
        });
    }); 


    describe('#getFont()', function(){
        it('should return the current font', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor();
            imp.setProcessor(ip);
            ip.setColor(Color.black)
            ip.setFont(new Font("SansSerif",Font.PLAIN,12));
            let x = 123;
            let y = 45;
            let drawstr = ip.drawString("ImageJ project", x, y,Color.white);
            const result = ip.getFont();
            expect(result).toEqual("java.awt.Font[family=SansSerif,name=SansSerif,style=plain,size=12]");
            imp.show();
        });
    }); 
    
    describe('#setFontSize(int size)', function(){
        it('should set the size of the font used by drawString()', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor();
            imp.setProcessor(ip);
            ip.setColor(Color.black);
            ip.setFont(new Font("SansSerif",Font.PLAIN,12));
            ip.setFontSize(9);
            let x = 123;
            let y = 45;
            let drawstr = ip.drawString("ImageJ project", x, y,Color.white);
            const result = ip.getFont();
            IJ.log(result);
            expect(result).toEqual("java.awt.Font[family=SansSerif,name=SansSerif,style=plain,size=9]");
            imp.show();
        });
    }); 

    describe('#toString()', function(){
        it('returns a string containing information about this ImageProcessor', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor();
            let ip2 = ip.createProcessor(256,256)
            imp.setProcessor(ip2);
            const result = ip2.getStatistics().toString();
            expect(result).toEqual("stats[count=65536, mean=0.0, min=0.0, max=0.0]")
            imp.show();
        });
    }); 
    
    describe('#convertToRGB()', function(){
        it('should return an RGB version of this image as a ColorProcessor', function(){
            let imp = IJ.getImage();  
            let ip = imp.getProcessor().convertToRGB();
            imp.setProcessor(ip);
            const result = ip.getNChannels();
            expect(result).toBe(3);
            imp.show();
        });
    }); 
    
    describe('#isSigned16Bit()', function(){
        it('should return true if this is a signed 16-bit image', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor();
            imp.setProcessor(ip);
            const result = ip.isSigned16Bit();
            expect(result).toBe(true);
            imp.show();
        });
    }); 

    describe('#invert()', function(){
        it('should invert the image or ROI', function(){
            //let imp = IJ.createImage("Invert", "8-bit white", 256, 256, 1);
            let imp = IJ.getImage();
            let ip = imp.getProcessor();
            imp.setProcessor(ip);
            let getPixel1 = ip.getValue(25,52);            
            ip.invert();
            let getPixel2 = ip.getValue(25,52);
            ip.invert();
            let getPixel3 = ip.getValue(25,52);
            ip.invert();
            let getPixel4 = ip.getValue(25,52);
            expect(getPixel1).toBe(getPixel3);
            expect(getPixel2).toBe(getPixel4);
            imp.show();
        });
    }); 
    
    describe('#getLutUpdateMode()', function(){
        it('should returns the LUT update mode, which can be RED_LUT, BLACK_AND_WHITE_LUT, OVER_UNDER_LUT or NO_LUT_UPDATE', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor();
            imp.setProcessor(ip);
            let set = ip.setThreshold(4,120,0);
            let result = ip.getLutUpdateMode();
            expect(result).toBe(0);
            imp.show();
        });
    }); 

    describe('#setHistogramRange()', function(){
        it('should set the range used for histograms of float images.', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor().convertToFloatProcessor();
            imp.setProcessor(ip);
            ip.setHistogramRange(24,155);
            let getMin = ip.getHistogramMin();
            let getMax = ip.getHistogramMax();
            expect(getMin).toBe(24);
            expect(getMax).toBe(155);        
            imp.show();    
        }); 
    });

    describe('#setHistogramSize(int size)', function(){
        it('should set the range used for histograms of float images.', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor().convertToFloatProcessor();
            imp.setProcessor(ip);
            ip.setHistogramSize(244);
            let result = ip.getHistogramSize();
            expect(result).toBe(244);
            imp.show();
        }); 
    });

    describe('#getHistogramSize(int size)', function(){
        it('should return the number of float image histogram bins. The bin count is fixed at 256 for the other three data types', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor().convertToFloatProcessor();
            imp.setProcessor(ip);
            let result = ip.getHistogramSize();
            expect(result).toBe(256);
            imp.show();
        }); 
    });

    describe('#getHistogramMin()', function(){
        it('should return the minimum histogram value used for histograms of float images', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor();
            imp.setProcessor(ip);
            let set = ip.setHistogramRange(3,255);
            let result = ip.getHistogramMin();
            expect(result).toBe(3);
            imp.show();
        }); 
    });

    describe('#getHistogramMax()', function(){
        it('should return the maximum histogram value used for histograms of float images', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor().convertToFloatProcessor();
            imp.setProcessor(ip);
            let set = ip.setHistogramRange(3,238);
            let result = ip.getHistogramMax();
            expect(result).toBe(238);
            imp.show();
        });
    });
    

    describe('set(double value)', function(){
        it('should assign value to each pixel in the image or ROI', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor();
            imp.setProcessor(ip);
            let set = ip.set(3);
            let get = ip.getPixelValue(23,55);
            let get1 = ip.getPixelValue(200,50);
            let get2 = ip.getPixelValue(300,200);
            expect(get).toBe(3);
            expect(get1).toBe(3);
            expect(get2).toBe(3);
            imp.show();
        });
    });

    describe('#setBinaryThreshold()', function(){
        it('set the threshold levels of an 8-bit image', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor().convertToByte(false);
            ip.setBinaryThreshold();
            let getMin = ip.getMinThreshold();
            let getMax = ip.getMaxThreshold(); 
            let getLut = ip.getLutUpdateMode(); 
            expect(getMin).toBe(0);
            expect(getMax).toBe(0);
            expect(getLut).toBe(2);
            imp.show();
        });
    }); 


    describe('#resetBinaryThreshold()', function(){
        it('reset the threshold if minThreshold=maxThreshold and lutUpdateMode=NO_LUT_UPDATE. This removes the invisible threshold set by the MakeBinary and Convert to Mask commands', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor().convertToByte(false);
            let set = ip.resetBinaryThreshold();
            let getMin = ip.getMinThreshold();
            let getMax = ip.getMaxThreshold(); 
            let getLut = ip.getLutUpdateMode();
            expect(getMin).toBe(-808080);
            expect(getMax).toBe(-808080);
            expect(getLut).toBe(0);
            imp.show();
        });
    }); 
    
    describe('#setThreshold(double minThreshold, double maxThreshold, int lutUpdate))', function(){
        it('should set the lower and upper threshold levels', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor().convertToByte(false);
            let set = ip.setThreshold(4.55,120.55,3);
            let getMin = ip.getMinThreshold();
            let getMax = ip.getMaxThreshold();
            let getLut = ip.getLutUpdateMode();
            let scale = ip.isGrayscale();
            expect(getMin).toBe(4.55);
            expect(getMax).toBe(120.55);
            expect(getLut).toBe(3);
            expect(scale).toBe(true);
        });
    });

    describe('#isDefaultLut()', function(){
        it('should retrun false for ColorProcessor', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor().convertToRGB();
            let scale = ip.isDefaultLut();
            expect(scale).toBe(false);
        });
        it('should return true if the image is using the default grayscale LUT (case of ByteProcessor)', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor().convertToByteProcessor();
            let scale = ip.isDefaultLut();
            expect(scale).toBe(true);
        });
    });

    describe('#getMinThreshold()', function(){
        it('should return the lower threshold level', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor();
            let getMin = ip.getMinThreshold();
            IJ.log(getMin);
            expect(getMin).toBe(-808080);
        });
    });

    describe('#getMaxThreshold()', function(){
        it('should return the upper threshold level', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor();
            let getMax = ip.getMaxThreshold();
            expect(getMax).toBe(-808080);
        });
    });

    describe('#setLineWidth()', function(){
        it('should set the line width used by lineTo() and drawDot()', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor();
            let setLine = ip.setLineWidth(2);
            let getLine = ip.getLineWidth();
            expect(getLine).toBe(2);
        });
    });

    describe('#resetThreshold()', function(){
        it('should disable thresholding', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor().convertToByte(false);
            let set = ip.setThreshold(14.55,25.55,0);
            let reset = ip.resetThreshold();
            let getMinThreshold = ip.getMinThreshold();
            let getMaxThreshold = ip.getMaxThreshold();
            expect(getMinThreshold).toBe(-808080);
        });
    });

    describe('#setBackgroundValue(double value)', function(){
        it('set the background fill value used by the rotate() and scale() methods', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor();
            imp.setProcessor(ip);
            let set = ip.setBackgroundValue(255); 
            let result = ip.getBackgroundValue();
            IJ.log(result);
            expect(result).toBe(255);
            imp.show();
        });
    }); 

    describe('autoThreshold()', function(){
        it('convert the image to binary using an automatically determined threshold. For byte and short images, convert to binary using an automatically determined threshold. For RGB images, convert each channel to binary. For float images, does nothing', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor();
            imp.setProcessor(ip);
            ip.autoThreshold();
            let getMin = ip.getMinThreshold();
            let getMax = ip.getMaxThreshold();
            expect(getMin).toBe(-808080);
            expect(getMax).toBe(-808080);            
        });
    });
    

    describe('#putPixelValue(int x, int y, double value)', function(){
        it('should store the specified value at (x,y)', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor();
            ip.putPixelValue(25,52,146);
            let result = ip.getValue(25,52);
            expect(result).toBe(146);
        });
    });

    describe('#getPixel(int x, int y)', function(){
        it('should return the value of the pixel at (x,y)', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor();
            ip.putPixel(25,52,146);
            let result = ip.getPixel(25,52);
            expect(result).toBe(146);
        });
    });


    describe('#putPixel(int x, int y, int value)', function(){
        it('should store the specified value at (x,y) for 8-bit, 16-bit images', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor();
            ip.putPixel(25,52,146);
            let result = ip.getValue(25,52);
            expect(result).toBe(146);
        });

        it('should store the specified value at (x,y) for float images', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor();
            ip.putPixel(25,52,98);
            let result = Float.floatToIntBits(ip.getValue(25,52));
            expect(result).toBe(98);
        });

        it('should store the specified value at (x,y) for RGB-image', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor();
            ip.putPixel(25,52,146);
            let getPixel = ip.getValue(25,52);
            let result = parseInt(getPixel);
            IJ.log(result);
            expect(result).toBe(parseInt(146/3));
        });
    }); 

    describe('#getPixelValue(int x, int y)', function(){
        it('returns the value of the pixel at (x,y)', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor();
            ip.putPixelValue(25,52,146);
            let result = ip.getPixelValue(25,52);
            IJ.log(result);
            expect(result).toBe(146);
        });
    }); 

    describe('#set(int x, int y, int value)', function(){
        it('should store the specified value at (x,y) for 8-bit, 16-bit images', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor();
            ip.set(25,52,146);
            let result = ip.getValue(25,52);
            expect(result).toBe(146);
        });

        it('should store the specified value at (x,y) for float images', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor();
            ip.set(25,52,98);
            let result = Float.floatToIntBits(ip.getValue(25,52));
            expect(result).toBe(98);
        });

        it('should store the specified value at (x,y) for RGB-image', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor();
            ip.set(25,52,146);
            let getPixel = ip.getValue(25,52);
            let result = parseInt(getPixel);
            IJ.log(result);
            expect(result).toBe(parseInt(146/3));
        });
    }); 

    describe('#get(int x, int y)', function(){
        it('this is a faster version of getPixel() that does not do bounds checking', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor();
            let put = ip.putPixel(12,24,145);
            let get = ip.get(12,24);
            expect(get).toBe(145);
            imp.show();
        });
    }); 

    describe('#set(int index, int value)', function(){
        it('set the value at a specified index', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor();
            let set = ip.set(2,53);
            let result = ip.get(2);
            expect(result).toBe(53);
            imp.show();
        });
    }); 

    describe('#get(int index)', function(){
        it('get the value at a specifiec index', function(){
            let imp = IJ.getImage();
            let ip = imp.getProcessor();
            let set = ip.set(15,54);
            let result = ip.get(15);
            expect(result).toBe(54);
            imp.show();
        });
    }); 

    
    
    

});
TUNIT.stats(); 