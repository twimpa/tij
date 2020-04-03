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
      
+ **newImage** , est la seconde méthode possible, elle prend en argument les mêmes éléments que createImage à une exception près : le \textbf{titre} (\textbf{string}), le \textbf{type} de l'image (\textbf{string}), la \textbf{largeur} en pixels (\textbf{int}), la \textbf{hauteur} en pixel (\textbf{int}) et la \textbf{profondeur} (\textbf{int}). Cela retournera une image avec les caractéristiques demandées, celle-ci apparaîtra directement à l'écran sans qu'une étape supplémentaire ne soit nécessaire. Les pixels de l'image créée auront pour valeur \textbf{255} donnant ainsi un \textbf{background blanc}. Cette méthode est en lien avec la classe \textbf{ImagePlus}. Ce sera cette méthode qui sera appelé lors de l'utilisation de l'onglet new dans le menu (input -> new).
    \par\leavevmode\par
        \begin{lstlisting}
    IJ.newImage (string titre, string type, int largeur, int hauteur, int depth); 
    \end{lstlisting}
    \end{itemize}
