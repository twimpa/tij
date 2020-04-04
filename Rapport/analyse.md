#1. Analyse (pour le rapport) (Relecture non faite pour les fautes d'orthographe).

> Possible plan
> 1. Objectifs.  
> 1.1. Les objectifs.  
> 1.2. Les classes.  
> 1.2.1. ResultsTable :  
> 1.2.2. ImageProcessor :  
> 1.2.3. ImagePlus :  
> 1.2.4. IJ :   
> 2. Architecture du programme.  
> 3. Besoins.  
> 3.1. Les besoins non-fonctionnels.  
> 3.2. Les besoins fonctionnels.   

## 1.1 Objectifs

### 1.2. Les classes
#### 1.2.1. ResultsTable :  
La première classe s'appelle **ResultsTable**. Cette classe contient des méthodes qui permettent le traitement des données sous forme de tableau. Ces tableaux peuvent contenir des informations liés aux données des images tel que la distribution des pixels et il est donc intéressant de pouvoir les créer et les manipuler. Les méthodes implémentées permettront de créer un tableau vide, de charger un tableau, d'y ajouter ou supprimer des lignes ou colonnes, d'y ajouter ou enlever des valeurs, d'obtenir ou changer les noms des colonnes et rangées, d'obtenir les valeurs des lignes et rangées ou d'obtenir le titre et la taille du tableau.


Pour cette classe nous implanterons 26 méthodes qui permettront de lire et écrire dans des tableaux:

+ **addValue** prend en argument le nom d'une colonne ou l'index d'une colonne ainsi qu'une valeur à ajouter dans la table et permet d'ajouter cette valeur dans la colonne choisie. Si la colonne spécifiée n'existe pas elle sera créée. Elle s'utilise de cette manière :

       let table = new ResultsTable(10);
       table.addValue(0,10);
       
+ **addColumns** ne prend pas d'argument et permet d'ajouter une colonne à un tableau. Cette colonne sera nommé automatiquement selon son index (C1, C2, etc). 

       let table = new ResultsTable(10);
       table.addColumn();

+ **addLabel** prend en argument une chaîne de caractères et l'ajoute comme label de la dernière rangée du tableau.

       let table = new ResultsTable(10);
       table.addLabel('A');
       
+ **deleteColumn** prend en argument une chaîne de caractères et supprime la colonne qui a comme nom cette chaîne.

       let table = new ResultsTable(10);
       table.addValue('A',10);
       table.deleteColumn('A');
       
+ **deleteRow** prend en argument l'index d'une rangée du tableau et supprime cette rangée.

       let table = new ResultsTable(10);
       table.deleteRow(0);
       
+ **deleteRows** se comporte de la même manière que deleteRows mais permet de supprimer plusieurs rangées.

       let table = new ResultsTable(10);
       table.deleteRows(0,1);

+ **getColumnHeading** prend en argument l'index d'une colonne et retourne le nom de cette colonne.

       let table = new ResultsTable(10);
       table.getColumnHeading(0);

+ **getColumnHeadings** ne prend pas d'argument et retourne la liste de tous les noms de colonnes du tableau sous la forme d'une chaîne de caractères séparée par des virgules ou des tabulations.

       let table = new ResultsTable(10);
       table.addColumn();
       table.getColumnHeadings();
       
+ **getColumn** prend en argument l'index d'une colonne et renvoie une copie de cette colonne dans un tableau de valeur de type float.

       let table = new ResultsTable(10);
       table.getColumn(0);

+ **getColumnIndex** prend en argument le nom d'une colonne et retourne l'index de cette colonne.

       let table = new ResultsTable(10);
       table.getColumnIndex('A');
       
+ **getHeadings**  ne prend pas d'argument et retourne la liste de tous les noms de colonnes du tableau sous la forme d'un tableau de chaîne de caractères.

        let table = new ResultsTable(10);
        table.addColumn();
        table.getColumnHeadings();
        
+ **getLabel** prend en argument l'index d'une rangée et retourne le label de cette rangée.

       let table = new ResultsTable(10);
       table.getLabel(0);

+ **getValueAsDouble** prend en argument l'index d'une colonne et d'une rangée existantes et retourne la valeur se trouvant à cet emplacement sous la forme d'un double.

       let table = new ResultsTable(10);
       table.getValueAsDouble(0,0);

+ **getValue** prend en argument l'index d'une colonne et d'une rangée existantes et retourne la valeur se trouvant à cet emplacement sous la forme d'un entier. 

       let table = new ResultsTable(10);
       table.getValue(0,0);
       
+ **getStringValue** prend en argument l'index ou le nom d'une colonne et d'une rangée existantes et retourne la valeur se trouvant à cet emplacement sous la forme d'une chaîne de caractères.

       let table = new ResultsTable(10);
       table.getStringValue(0,0);

+ **getTitle** retourne le nom du tableau.

       let table = new ResultsTable(10);
       table.getTitle(0,0);

+ **setLabel** prend en argument une chaîne de caractères et l'index d'une rangée et ajoute cette chaîne de caractères comme label de la rangée.

       let table = new ResultsTable(10);
       table.setLabel('A',0);
       
+ **setValue** prend en argument l'index ou le nom d'une colonne, l'index d'une rangée ainsi qu'une valeur sous forme de double ou de chaîne de caractères et ajoute cette valeur à l'emplacement spécifié.

       let table = new ResultsTable(10);
       table.setValue(0,0,10);
       
+ **size** ne prend pas d'argument et retourne le nombre de rangée du tableau.

       let table = new ResultsTable(10);
       table.size();

#### 1.2.2. ImageProcessor :  

La deuxième classe s’appelle **ImageProcessor**. Cette classe abstraite est la superclasse des classes qui traitent les quatre types de données (byte, short, float et RGB) pris en charge par ImageJ. Un ImageProcessor contient les données de pixels d’une image 2D et quelques méthodes de base pour la manipuler. Il existe quatre sous-classes différentes de la classe ImageProcessor, qui sont liées aux différents types d’images :

+ **ByteProcessor** qui regroupera les images 8-bits et binaires.
+ **ShortProcessor** pour les images 16-bits.
+ **FloatProcessor** pour les images dites flottantes (32-bits).
+ **ColorProcessor** pour les images couleurs (RGB).

Pour cette classe, on va implanter 40 méthodes qui portent des fonctionnalités différentes :

+ **add**, ce sera la première méthode. Elle prendra en argument un valeur du type (**int**) ou du type (**double**). Cela nous permet d’ajouter une valeur à chaque pixel de l’image ou du ROI. La partie code suivant vous montrer comment utiliser cette méthode :

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.add(2); // ou ip.add(3.5)
       
+ **bin**, prendra en argument une valeur entière du facteur de rétrécissement. Cela renvoie une copie d’une image dont la taille a été réduite à l’aide du groupement des données par classe (binning).

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.bin(2);

Gaussian blur est un type de filtre de bruit d’une image qui utilise une fonction gaussienne qui exprime également la distribution normale dans les statistiques pour calculer la transformation à appliquer à chaque pixel de l’image. Le paramètre Sigma influence la forme de la distribution gaussienne. Une valeur Sigma plus petite crée une distribution étroite avec une grande valeur maximale. Une valeur Sigma plus grande crée une distribution plate et large. Le filtre Sigma est également identifié comme un filtre de voisinage. Il remplace la valeur d’intensité du pixel actuel par la moyenne de toutes les valeurs d’intensité dont la distance est inférieure à Sigma par rapport à la valeur d’intensité actuelle. La valeur Sigma définit donc l’intervalle d’intensité dans lequel les pixels du voisinage sont censés se trouver.

+ **blurGaussian**, prendra en argument une valeur double de sigma. Cette méthode rend flou une image en convoluant avec une fonction gaussienne.

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.blurGaussian(2.5);
       
+ **clone**, ne prend aucun arguement et renverra une copie superficielle de ce ImageProcessor où cette image et la copie partagent des données de pixels. La méthode duplicate() est ensuite utilisé pour créer une copie qui ne partage pas les données de pixels.

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.clone();
       
+ **createMask**, ne prend aucun argument et renverra un masque binaire ou null si aucun seuil n’est défini ou s’il s’agit d’une image RGB. 

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.setAutoThreshold("Huang dark");
       ip.createMask();
       
+ **convertToByte**, prend en argument une valeur booléene qui indique si les données de pixels 16 bits et 32 bits sont mises à l’échelle de min-max à 0-255 et renverra une version 8 bits de cette image en tant que ByteProcessor. 

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.convertToByte();
       
+ **draw**, prend en argument une instance de la classe Roi. Cette méthode est utilisée pour dessiner une région d’intérêt rectangulaire spécifiée sur une image en utilisant la largeur et la couleur de trait et la couleur de remplissage définies par roi.setStrokeWidth(), roi.setStrokeColor () et roi.setFillColor (). Cette méthode fonctionne avec des images RGB et à l’inverse, elle ne fonctionne pas avec des images de 16 bits et du type float. 

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       let roi = new Roi(1,1,1,1);
       ip.draw(roi);
       
+ **drawOval**, prend en argument des coordonnées x et y (**int**) du centre d’un oval, sa largeur (**int**) et sa longueur (**int**). On utilise cette méthode afin de dessiner une forme elliptique. 

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.drawOval(1,1,1,1);
       
+ **drawRoi**, prend en argument une instance de la classe Roi. Cela permet de dessiner une région d’intérêt rectangulaire spécifiée sur une image en utilisant la largeur et la couleur de trait et la couleur de remplissage définies par roi.setStrokeWidth(), roi.setStrokeColor() et roi.setFillColor(). Cette méthode fonctionne avec des images RGB et ne fonctionne pas avec des images de 16 bits et du type float. 

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       let roi = new Roi(1,1,1,1);
       ip.drawRoi(roi);
       
+ **duplicate**, ne prend aucun argument et renverra un double de cette image.  

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.duplicate();
     
+ **erode**, ne prend aucun argument. Cela est nécessaire pour éroder une image de 8 bits ou de type RGB ou le ROI à l’aide d’un filtre maximum 3x3.

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.erode();
       
+ **fill**, ne prend aucun argument et est utilisée pour remplit une image ou un rectangle de délimitation de la classe ROI avec la valeur de remplissage / dessin actuelle. Les méthodes fill(Roi) ou fill(ip.getMask ()) sont recomandées pour remplir les sélections non rectangulaires. 

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.fill();
       
+ **fillOval**, prend en argument des coordonnées x, y du centre d’un oval, sa largeur et sa longueur. Cela permet de remplir une forme elliptique.

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.fillOval(0,0,2,2);
       
+ **fillValueSet**, ne prend aucun argument et renverra «vrai» si la valeur de remplissage / tirage a été définie.   

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.fillValueSet();
       
+ **getBitDepth**, ne prend aucun argument et renverra la profondeur de bits : 8, 16, 24 (RGB) ou 32. Des images RGB utilisent actuellement 32 bits par pixel.      

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.getBitDepth();
       
+ **getColumn**, prend en argument une position de départ x (**int**) et une position final y (**int**) de la colonne que l’on souhaite obtenir, une liste de données entières (**int[] data**) et la longueur de cette liste (**int**). Cette méthode reverra des valeurs des pixels dans la colonne à partir de (x, y).

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.getColumn(int x, int y, int[] data, int length);
       
+ **getf**, prend en argument des coordonnées x (**int**) et y (**int**) d’un pixel et reverra sa valeur sous forme **float**. Cette méthode est
plus rapide que **getPixelValue ()** car aucune vérification des limites n’est effectuée.   

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.getf(2,5);
       
+ **getf**, prend en argument la position du pixel souhaité obtenir (**int**) et renverra sa valeur sous forme entier (**int**).

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.getf(2);
       
+ **getHistogram**, ne prend aucun argument et renverra l’histogramme de l’image ou du ROI. Cette méthode renverra aussi un histogramme de luminosité pour des images de RGB et nulle pour des images de type float. Pour des images 8 bits et 16 bits, elle renverra un tableau avec une entrée pour chaque valeur possible qu’un pixel peut avoir, de 0 à 255 (image 8 bits) ou 0-65535 (image 16 bits). Ainsi, la taille du tableau est 256 ou 65536, et la largeur du bin en unités non calibrées est 1. Pour des images RGB, la luminosité est évaluée à l’aide des poids de couleur (ce qui entraînerait une valeur float) et arrondie à un int. Cela donne 256 bins. FloatProcessor.getHistogram n’est pas implémenté (retourne null).   

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.getHistogram();
       
+ **getHistogram**, prend en argument le nombre bin spécifié et l’utilise pour renvoyer l’histogramme d’une image ou du ROI.

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.getHistogram(256);
      
+ **getIntArray**, ne prend aucun argument et renverra une copie des données de pixels sous forme de tableau int 2D avec les dimensions [x = 0..width-1] [y = 0..height-1]. Pour des images RGB, des valeurs renvoyées sont au format ARGB compressé. Pour des images float, des valeurs renvoyées doivent être converties en float à l’aide de Float.intBitsToFloat().  

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.getIntArray();
       
+ **getLine**, prend en argument des valeurs sous forme double des coordonnées de la position du départ (x1,y1) et des coordonnées de la position final (x2,y2) et renverra un tableau contenant les valeurs de pixels le long de la ligne commençant à (x1, y1) et se terminant à (x2, y2). Des valeurs des pixels sont échantillonnées à l’aide de getInterpolatedValue (double, double) si l’interpolation est activée ou getPixelValue(int, int) dans le cas contraire. Pour des images de byte et short, cela renverra des valeurs calibrées si une table de calibrage a été définie à l’aide de setCalibrationTable(). La longueur du tableau retourné, moins un, est
approximativement égale à la longueur de la ligne.   

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.getLine(0,0,0,2);
       
++ **getPixel**, prend en argument des coordonnées x et y int du pixel souhaité obtenu et sa valeur. Pour des images RGB, des valeurs argb sont regroupées dans un int. Pour des images du type float, la valeur doit être convertie à l’aide de Float.intBitsToFloat (). Cela renverra zéro si des coordonnées x ou y est hors de limites. getValue (x, y) est recommandé pour obtenir des valeurs calibrées à partir des images 8 bits et 16 bits afin d’obtenir des valeurs d’intensité à partir des images RGB et des valeurs float à partir des images 32 bits.  

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.getPixel(3,2);
       
++ **getRow**, prend en argument des coordonnées x et y int, un tableau des données du type float et la longueur de ce tableau int. Cela renverra des valeurs des pixels le long de la ligne horizontale à partir de (x, y). 

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.getRow(int x, int y, float[] data, int length);

++ **getHeight**, ne prend aucun argument et renverra la hauteur d’une image en pixels.

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.getHeight();
       
++ **getWidth**, ne prend aucun argument et renverra la largeur d’une image en pixels.    

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.getWidth();
       
++ **isBinary**, ne prend aucun argument et renverra «vrai» s’il s’agit d’une image binaire (image 8 bits avec seulement 0 et 255).   

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.isBinary();
       
++ **multiply**, prend en argument une valeur de type double et est utilisé pour le but de multiplier chaque pixel d’une image ou du ROI par «valeur».

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.multiply(2.5);
       
++ **putPixel**, prend en argument des coordonnées x et y et une valeur du type int et utilisée pour stocker une valeur spécifiée à (x, y). Cette méthode ne fait rien si (x, y) est en dehors de la limite de l’image. Pour des images 8 bits et 16 bits, des valeurs hors de limites sont bloquées. Pour des images RGB, les valeurs argb sont regroupées dans «valeur». Pour des images float, la «valeur» devrait être un float converti en entier à l’aide de Float.floatToIntBits(). 

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.putPixel(2,3,5);
       
++ **set**, prend en argument des coordonnées x et y et une valeur entière. Il s’agit d’une version plus rapide de putPixel () qui n’écrase pas les valeurs hors du rang et ne vérifie pas les limites.   

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.set(2,3,5);
       
++ **set**, prend en argument l’indice int et une valeur entière. Cela permet de définir une valeur spécifiéé à une position précisée. 

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.set(2,3);

++ **setAutoThreshold**, prend en argument la méthode définie le seuil de AutoThresholder.Method, une valeur booléenne pour le darkBackground et une valeur de lutUpdate int. Cela permet de définir automatiquement les niveaux de seuil inférieur et supérieur, où ’méthode’ doit être ISODATA ou ISODATA2 et ’lutUpdate’ doit être RED LUT, BLACK AND WHITE LUT, OVER UNDER LUT ou NO LUT UPDATE.

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.setAutoThreshold("Default", false, 0);
       
++ **setColor**, prend en argument une valeur double et permet de définir la valeur de remplissage / dessin par défaut.
       
       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.setColor(123.67);
       
++ **setColor**, prend en argument une valeur int et permet de définir la valeur de remplissage / dessin par défaut. 

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.setColor(125);
       
++ **setColor**, prend en argument le java.awt.Color color et permet de définir la valeur de remplissage / dessin par défaut sur la valeur de pixel la plus proche de la couleur spécifiée.     

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.setColor(java.awt.Color color);
       
++ **setPixels**, prend en argument le java.lang.Object pixels des pixels et définira un nouveau tableau de pixels pour une image. La longueur du tableau doit être égale à largeur * hauteur. setSnapshotPixels (null) est ensuite utilisée pour effacer le snapshot buffer. 

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.setColor(java.lang.Object pixels);
       
++ **setRoi**, , prend en argument le roi de java.awt.Rectangle et cela permet de définira une région d’intérêt rectangulaire et définira le masque = null si ce ROI n’est pas de la même taille que le précédent.    

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.setRoi(java.awt.Rectangle roi);
       
++ **setRoi**, prend en argument des coordonnées x et y du Roi (int), sa largeur (int) et sa longueur. Cela permet de définira une région d’intérêt rectangulaire et définira le masque = null si ce ROI n’est pas de la même taille que le précédent.

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.setRoi(int x, int y, int rwidth, int rheight);
       
++ **setRoi**, prend en argument le roi de la classe Roi et cela permet de définir une région d’intérêt non rectangulaire qui consistera en un ROI rectangulaire et un masque. Après le traitement, on appelle le reset(mask) pour restaurer les pixels non masqués.

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       ip.setRoi(new OvalRoi(50, 50, 100, 50);
       ip.fill();
       ip.reset(ip.getMask());
       
++ **setRoi**, prend en argument le roi de java.awt.Polygon. Cette méthode définira une région polygonale d’intérêt qui consistera en un ROI rectangulaire et un masque. Après le traitement, on appelle le reset(mask) pour restaurer les pixels non masqués.      

       let imp = IJ.openImage ("http://imagej.nih.gov/ij/images/blobs.gif");
       let ip = imp.getProcessor();
       let p = new Polygon();
       p.addPoint(50,0); 
       p.addPoint(100, 100);
       p.addPoint(0, 100);
       ip.setRoi(triangle);
       ip.invert();
       ip.reset(ip.getMask());
       
#### 1.2.3. ImagePlus :
#### 1.2.4  IJ :
Cette dernière classe nommée **IJ** sera principalement utilitaire, elle contiendra des méthodes et fonctions qui n'ont pas un rôle dans la manipulation d'image à proprement parler. On y retrouvera des fonctionnalités essentielles au commencement d'un travail et à sa fin. C'est en effet grâce à cette classe qu'il sera possible d'ouvrir ou fermer un fichier, de créer une 
nouvelle image ou encore lancer un script. Plusieurs de ses méthodes seront donc interdépendantes et se baseront sur d'autres
classes, principalement **ImagePlus** ou **ImageProcessor**. 


Comme expliqué plus haut, il sera possible de **créer une image** à partir de cette classe et cela de deux manières différentes. Nous allons implanter deux méthodes qui auront presque le même fonctionnement avec des résultats légèrement différents :  


 + **createImage** ce sera la première méthode. Elle prendra en argument le **titre** de l'image (**string**), la **largeur** en pixels (**int**), la **hauteur** en pixel (**int**), la **profondeur** de celle-ci (**int**) ou plus simplement le nombre de stacks et enfin le **type** de l'image (8-bit, 16-bit, 32-bit ou RGB) (**int**). Une image avec les arguments fournis sera créée, toutefois celle-ci ne sera pas directement visible sur le navigateur. Pour la visualiser, il faudra rajouter une ligne de code faisant appelle à la méthode **show()** de la classe **ImagePlus** (voir exemple ci-dessous). Cette méthode est en lien avec la classe **ImagePlus**.
 
       let a = IJ.createImage (string titre, int largeur, int hauteur, int depth, int type);  
       a.show();
      
+ **newImage** , est la seconde méthode possible, elle prend en argument les mêmes éléments que createImage à une exception près : le **titre** (**string**), le **type** de l'image (**string**), la **largeur** en pixels (**int**), la **hauteur** en pixel (**int**) et la **profondeur** (**int**). Cela retournera une image avec les caractéristiques demandées, celle-ci apparaîtra directement à l'écran sans qu'une étape supplémentaire ne soit nécessaire. Les pixels de l'image créée auront pour valeur **255** donnant ainsi un **background blanc**. Cette méthode est en lien avec la classe **ImagePlus**. Ce sera cette méthode qui sera appelé lors de l'utilisation de l'onglet new dans le menu (input -> new).  


      IJ.newImage (string titre, string type, int largeur, int hauteur, int depth);  
    
    
Si l'on ne souhaite pas créer une image de toutes pièces, il sera possible d'**ouvrir une image** (**/!/** uniquement une image) déjà existante sur notre ordinateur/ dossiers personnels. Pour cela, il y aura aussi deux possibilités. Une se faisant exclusivement via l'interface web de notre application et une autre utilisable directement dans un script.  


+ **OpenImage** la première ne prend aucun argument et sera accessible dans le menu via le **bouton upload** file et ouvrira directement notre image dans l'interface dans la section **input**.  

+ **openImage()**, la deuxième méthode prendra en argument **un string** contenant le chemin absolu de l'image sur notre ordinateur, elle pourra donc être utilisé via un script. L'image s'affichera une nouvelle fois dans la section **input**


        openImage("/home/alice/Images/file.png"); 


**TWIMPA** est principalement un outil de manipulation d'images, toutefois il est possible d'ouvrir d'autres types de fichiers. Le but principal étant aussi de pouvoir faire tourner de script assez simples dedans. Pour cela, des méthodes différentes de celles présentées précédemment, mais suivant le même principe seront ajoutées. Il sera donc possible d'ouvrir dans la partie **input** des fichiers **.csv** par exemple, où même d'afficher des **scripts**. Nous n'ajouterons pas cependant une fonction d'édition pour les scripts. Ces 2 méthodes seront nommées **open**.  

+ **open ()**, prendra en argument **un string** contenant le chemin absolu du fichier sur notre ordinateur, elle pourra donc être utilisé via un script.

        open("/home/alice/Images/file.csv"); 
        
Afin de pouvoir manipuler une image, notamment à travers un script nous avons besoin pour cela de stocker et récupérer les informations que celle-ci contient : ses pixels et les valeurs qui leur sont associées par exemple. Pour cela nous avons besoin de deux éléments : l'**image** et le **processor** qui lui est associé. Pour cela, nous avons choisi d'implanter une méthode pour chaque objet.  

+ **getImage**, ne prend aucun argument et renverra **une référence à l'image active** et ses stacks, ainsi que toutes les informations qui lui sont liées (taille, nombres de pixels, type etc). Si jamais il n'y a aucune image ouverte, un message d'erreur sera affiché pour prévenir l'utilisateur. Cette méthode est étroitement liée à la classe **ImagePlus**.

        open("/home/alice/Images/file.png");
        let a = IJ.getImage();
        
+ **getProcessor**, encore une fois, cette méthode ne prend aucun argument. Elle va retourner l'image active ou les staks en tant qu'**imageProcessor** et retourne un message d'erreur si aucune image n'est ouverte. Cela va nous donner un accès direct aux données algébriques d'une image. Cette méthode dépend fortement des deux classes **ImageProcessor** et **ImagePlus**.


        let img = open("/home/alice/Images/file.png");
        let ip = img.getProcessor();

Comme la possibilité de pouvoir faire **tourner de petits scripts** fait partie des buts principaux de cette application. Un bouton run permettra de faire tourner ces scripts directement dans l'interface. Il sera relié à une méthode nommée **run** qui prendra en **argument un string** (soit un nom de commande ou de script).     

        IJ.run("command"); 


Afin de vérifier que les différentes étapes d'un script marchent, une petite console sera disponible en bas à gauche de l'écran. Elle servira à afficher les erreurs, mais aussi les **print** faits dans le script à travers la méthode **log** qui prendra un string en argument.


        IJ.log("Hello World");

Il sera possible de stopper tous processus avec la méthode **exit** ne prenant aucun argument.

#### Architecture du programme.


Les codes développés dans ce projet constituent seulement un module pour un programme plus grand, celui-ci sera plus tard lié à d'autres afin de créer une application/logiciel web : **TWIMPA**. TWIMPA (**Tiny Web ImageJ Processing and Analysis Main**) sera un logiciel web qui rendra accessible toutes où du moins une majeure partie des fonctionnalités d'un logiciel de manipulation d'images : **IMAGEJ** via un navigateur web. L'architecture générale de celui-ci se présentera dans un premier temps sur **3 niveaux (modules)** comme présenté dans la *fig. 1*, interdépendants les uns des autres ce qui peut présenter un certains nombres de risques et d'inconvénients pour la stabilité de l'application. Et **1 bas-niveau** qui forme l'**API** où l'on retrouve le **CPU** qui permettra d'effectuer les **opérations vectorielles** de base en JS et sera principalement utilisé par le **TAG** et le **GPU** qui servira aux opérations graphiques (par pixel) de **TIC**. C'est pour cela, qu'une seconde architecture que l'on peut dire optimisée a été pensée (*voir fig 2.*) en se présentant sur seulement 2 niveaux (modules) et 1 bas-niveau qu'est l'API. Les modules étant plus indépendants les uns des autres garantissant une certaine pérennité de chacun.

![Interface](https://zupimages.net/up/20/14/quv7.jpg)

*fig 1. Architecture Générale de TWIMPA.*


![Interface_optimisée](https://zupimages.net/up/20/14/jezv.jpg)
*fig 2. Architecture optimisée de TWIMPA.*


On retrouve différents modules aux fonctions distinctes :
+ **TIJ** : (Tiny ImageJ Interface) 
+ **TIC** : (TWIMPA ImageJ Core) 
+ **TUI** : (TWIMPA Utilisateur Interface) 
+ **TML** : (TWIMPA Machine Learning) 
+ **TAG** : (TWIMPA Advanced Graphics) 
Certains modules ont déjà été développés par des étudiants les années précédentes et nous ont été fournis comme TIC. 


Cette année dans notre projet, nous allons développer la partie TIJ de TWIMPA qui contiendra les différentes méthodes composant les 4 classes que nous avons décidé d’implanter avec le langage **javascript** sur le schéma une cinquième classe est présente, car c'est une classe qu'il est envisagé d'implanter dans le futur. L’architecture de ce module sera assez simple, nous allons créer un fichier par classe contenant les méthodes correspondantes à chacune. On utilisera un module indépendant Webpack pour faciliter l’organisation du programme. 

![Interface_optimisée](https://zupimages.net/up/20/14/hp5u.png)
*Fig 3 : Organisation de TIJ.*
