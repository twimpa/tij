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
