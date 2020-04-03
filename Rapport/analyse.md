#1. Analyse (pour le rapport)

## 1.1 Objectifs

### 1.2. Les classes
#### 1.2.1. ResultsTable :  
#### 1.2.2. ImageProcessor :  
#### 1.2.3. ImagePlus :
#### 1.2.4  IJ :
Cette dernière classe nommée **IJ** sera principalement utilitaire, elle contiendra des méthodes et fonctions qui n'ont pas un
rôle dans la manipulation d'image à proprement parler. On y retrouvera des fonctionnalités essentielles au commencement d'un 
travail et à sa fin. C'est en effet grâce à cette classe qu'il sera possible d'ouvrir ou fermer un fichier, de créer une 
nouvelle image ou encore lancer un script. Plusieurs de ses méthodes seront donc interdépendantes et se baseront sur d'autres
classes, principalement **ImagePlus** ou **ImageProcessor**.  Comme expliquez plus haut, il sera possible de **créer une image** 
à partir de cette classe et cela de deux manières différentes. Nous allons implanter deux méthodes qui auront presque le même 
fonctionnement avec des résultats légèrement différents :  
