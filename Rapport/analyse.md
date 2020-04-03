#1. Analyse (pour le rapport)

## 1.1 Objectifs

### 1.2. Les classes
#### 1.2.1. ResultsTable :  
#### 1.2.2. ImageProcessor :  
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
