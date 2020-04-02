{\Huge Avant propos}
\par\leavevmode\par
\par\leavevmode\par
\par\leavevmode\par

Actuellement étudiants au sein du Master I de 
Bio-informatique à l'Université de Bordeaux, nous 
réalisons ce projet dans le cadre de l'UE suivante : 
Conception d'un Projet de Recherche et de Développement.
Cette UE a pour but de nous plonger dans une situation 
proche de celles que l'on pourrait rencontrer dans le 
monde professionnel afin de nous préparer au mieux. Nous
allons donc devoir répondre aux attentes d'un client, 
tenter de les cerner au mieux au sein de divers 
rendez-vous, ce cahier des charges devra réunir et 
exprimer aux mieux celles-ci et exposer les solutions 
trouvées et par quels moyens nous souhaitons les mettre 
en œuvre.
\par\leavevmode\par
Le sujet de ce projet nous a été proposé par M. 
Jean-Christophe Taveau, enseignant-chercheur au sein de 
l'Université de Bordeaux. Celui-ci est la suite de 
projets précédents et représente donc l'un des éléments 
nécessaires à la création d'une application web appelée 
TWIMPA dont l'architecture sera présentée plus loin dans
le cahier des charges.

\newpage
\tableofcontents


\chapter{Présentation du projet}
\par\leavevmode\par
	\section{Objectifs du projet}
\par\leavevmode\par
\par\leavevmode\par
\fontfamily{cmr}\selectfont 
 Dans ce projet nous allons tenter de développer une interface web (\textbf{TWIMPA}) permettant l'analyse et le traitement de données numériques telles que des images (8-bit, 16-bit, 32-bit ou encore RGB) ou encore de tableau de type \textbf{.csv}. Cette plateforme sera inspirée d'un logiciel open-source déjà existant : \textbf{ImageJ}, ainsi il sera possible de retrouver des fonctionnalités semblables à celles que l'on peut trouver dessus. Le but principal est de permettre un traitement d'images minimales réalisables sur n'importe quel ordinateur sans obligation d'installations ou de téléchargements d'un logiciel tiers, rendant ainsi plus accessibles et facile ce genre de travail.
\par\leavevmode\par
Nous souhaitons développer une page web qui sera donc indépendant du logiciel de base : ImageJ, mais présentant des caractéristiques similaires. Nous allons nous inspirer des différentes classes que l'on pour retrouver sur ce logiciel et des caractéristiques qui les composent. Nous allons implanter 4 classes principales avec le langage Javascript :
\par\leavevmode\par
\begin{itemize}
    \item La \textbf{première} classe se concentrera principalement sur le traitement de données algébriques sous la forme de tableau .csv. Il nous sera possible d'ouvrir tout simplement un fichier .csv, de l'afficher, de le modifier et de travailler sur les données contenues par celui-ci. Il sera par exemple possible, de récupérer une colonne de données, de modifier les données contenues (d'en supprimer ou d'en ajouter). Dans une version plus aboutie, il serait aussi possible de récupérer des tables de résultats à partir d'une image donnée, cela sera certainement à développer plus tard. Cette classe sera principalement accessible via le menu metadata (voir. Fig 3.1 dans la partie prototype) et se rapprochera de la classe \textbf{ResultsTable} d'imageJ.
    \par\leavevmode\par
    \item La \textbf{deuxième} classe implantée portera plus sur le traitement des données contenues dans une image : le nombre de pixels, la valeur de chaque pixels, le type de l'image etc ... On se concentrera uniquement sur des images 2D, on peut retrouver 4 classes différentes d'images :
    \begin{itemize}[leftmargin=2cm ,itemsep=0.07cm,topsep=0.1cm]
        \item \textbf{ByteProcessor} qui regroupera les images 8-bits et binaires.
        \item \textbf{ShortProcessor} pour les images 16-bits.
        \item \textbf{FloatProcessor} pour les images dites flottantes (32-bits).
        \item  \textbf{ColorProcessor} pour les images couleurs (RGB).
    \end{itemize}
    \par\leavevmode\par
    Ces 4 classes seront donc utilisables et manipulables sur \textbf{TWIMPA}, il sera possible de récupérer la valeur de chaque pixel (un à un ou par colonne ou ligne), de modifier la valeur de ces pixels, d'effectuer des opérations mathématiques de bases dessus : multiplier, diviser, soustraction ou encore addition. Un outil de sélection/remplissage sera aussi disponible. Cette classe se rapprochera de la classe \textbf{ImageProcessor} d'imageJ. 
    \par\leavevmode\par
    \item La \textbf{troisième} classe sera en lien avec la deuxième, elle sera en quelque sorte le conteneur de la classe précédente : elle contiendra une ImageProcessor (2D) et des métadonnées (comme par exemple le chemin d'accès au fichier). Cette classe permettra ainsi de récupérer diverses données comme le titre d'une image, la taille de celle-ci, les pixels la composant, copier/coller certaines zones .. Elle sera légèrement moins développée que les autres classes et se rapproche de \textbf{ImagePlus} dans imageJ.
    \par\leavevmode\par
    \item Une \textbf{quatrième} classe sera implantée et possédera seulement quelques fonctionnalités réellement utile au développement et l'exécution de scripts. On retrouvera des méthodes utilitaires tel que run pour faire tourner un script, open pour ouvrir un fichier, create pour créer soit même une image ou une table etc … Elle sera apparentée à la classe \textbf{IJ} d'imageJ.
\end{itemize}
Pour chacune des classes, nous réunirons les méthodes sous une même dénomination :

  \begin{itemize}[leftmargin=2cm ,itemsep=0.07cm,topsep=0.1cm]
        \item \textbf{get} lorsque l'on souhaite extraire des informations.
        \item \textbf{set} ou \textbf{add} pour modifier/ajouter des données.
        \item \textbf{delete} pour supprimer un élément.
    \end{itemize}
\par\leavevmode\par
    \section{Etat de l'art}
\par\leavevmode\par
Les systèmes de recherche d'images sont basés sur des méthodes qui permettent aux utilisateurs de formuler leurs besoins en vue de récupérer l'information souhaitée. Le logiciel de traitement et d’analyse d’images scientifique, ImageJ, autant par ses fonctions intrinsèques que par le riche ensemble de fonctions, le logiciel offre la possibilité de rajouter des plugins développés par des extérieurs et téléchargeables sur le site d’ImageJ.
Cette variété de plugins et la possibilité de créer des macros combinant plusieurs fonctions permettent d’adapter le logiciel à des besoins précis. Derrière l’interface, ImageJ cache des fonctions simples d’accès, directes et puissantes pour l’analyse d’image, de nomrbreux traiteurs d’images ont mis leurs contributions en ligne. 

De nombreux chercheurs ont implanté les class d’imageJ en java, ces scripts ne peuvent etre exécuter qu’à partir de la fénétre de imageJ. Ce qui explique alors la difficulté pour certains qui ne disposent pas le logiciel et voudrant exploiter leurs données. Par exemple sur certains systèmes d’exploitation (windows ), même après avoir installé Java, les appels ne sont pas exécutés parceque Java n'est pas activé dans le navigateur Web. Si Java est déjà installé mais que les appels ne fonctionnent pas, vous devez donc activer Java via votre navigateur Web, donc une utilisation assez complexe pour certains d’ou la nécessité de créer l’interface qui sera exploitable via le navigateur.

Ce projet a pour but de développer une interface web exécutable dans n’importe quel navigateur à partir de scripts imageJ, ce qui permet le traitement de données numériques. C’est  une page qui sera développé en javascript et en html, elle aura les mêmes effets que le logiciel imageJ. L’objectif principale est que l’interface retourne des resultats similaires à ceux du logiciel. L’interface sera assez pratique pour les utilisateurs car accessible sur tous les systèmes, donc pas besoin de faire recours à une installation du logiciel imageJ.
  
\par\leavevmode\par

	\section{Organisation des tâches}
\par\leavevmode\par

\fontfamily{cmr}\selectfont 

\par\leavevmode\par
		\subsection{Tests unitaires}
\par\leavevmode\par

\fontfamily{cmr}\selectfont 
Un test unitaire est une procédure qui permet de vérifier qu'une partie d'un programme fonctionne correctement. Il définit les critères auxquels le code doit répondre pour être considéré comme fonctionnel et s'assure qu'il y adhère.
Afin de s'assurer du bon fonctionnement d'un programme il convient donc de tester toutes ses fonctions à l'aide de ces tests unitaires, et ce au fur à mesure de leur réalisation.
Pour tester l'implémentation des méthodes, nous effectuons les test unitaire à l'aide du framework Jasmine.

\par\leavevmode\par

Les tests unitaires seront tout d'abord réalisé dans ImageJ grâce au package TUNIT, un dérivé de Jasmine adapté à ImageJ, afin de vérifier le bon fonctionnement des méthodes dans leur contexte primaire, ainsi que la pertinence des tests en vue de leur utilisation dans le navigateur.
Ensuite les tests sont réalisé avec Jasmine pour vérifier l'implémentation correcte dans le navigateur.

\par\leavevmode\par
		\subsection{Implémentation}
\par\leavevmode\par

\fontfamily{cmr}\selectfont 
La majeure partie de ce projet consiste à implanter les méthodes des différentes classes d'ImageJ de façon à ce qu'elles puissent être utilisé dans un navigateur. 
Pour la classe ResultTable, il nous faudra créer une structure de données afin de stocker les données du tableau et les manipuler.
 Cela permettra la création de tableau dans le navigateur, leur écriture et leur lecture ainsi que leur affichage grâce au HTML.
Pour implémenter les autres classes nous nous baserons sur le package TIC (Tiny Image Core), créé par de précédents étudiants en master de bio-informatique. Cela nous permettra de manipuler les images en utilisant les fonctions définies dans ce package.
En ce qui concerne l'ordre de l'implémentation des méthodes, il est important de définir les méthodes essentielles tout d'abord pour tester l'implantation, puis pour faire tourner les scripts simples vu dans l'UE IMAJS. 
Chaque implantation sera suivi d'un test grâce à Jasmine comme mentionné précédemment.

\vspace{1cm}
\par\leavevmode\par
		\subsection{HTML/CSS}
\par\leavevmode\par

\fontfamily{cmr}\selectfont 
 Le HTML est comme le squelette de notre interface de site Web. Celui-ci nous aide à définir la mise en page sur notre site Web et à marquer ces sections avec certaines balises, puis il identifiera ensuite chaque objet marqué avec son propre rôle dans le site Web. Le CSS est un langage qui aide le navigateur à comprendre les paramètres de format et de mise en page d'une page Web. CSS est comme la prochaine partie de HTML, ce qui rend le site Web plus professionnel et complet. Dans notre projet, on peut appliquer HTML / CSS à la création des boutons de fonctionnalités à gauche de l'interface utilisateur et à créer la disposition, les couleurs et les polices de l'interface, plus précisément, la division de l'interface en 3 panneaux distincts: Javascript, Show data et Results. 
\par\leavevmode\par
\par\leavevmode\par
\par\leavevmode\par
	\section{Les outils utilisés}
\par\leavevmode\par
\par\leavevmode\par
\par\leavevmode\par
\par\leavevmode\par
\par\leavevmode\par

\subsection{Programmation}


\par\leavevmode\par
\subsubsection{Javascript}
\par\leavevmode\par

Le langage principal utilisé pour ce projet est JavaScript. Il s'agit d'un langage de programmation de script qui se retrouve principalement utilisé dans des pages web interactive ou les serveurs. Il a été inventé par Brendan Eich en 1995.
Dans ce projet, il est utilisé pour l'implantation des méthodes ainsi que pour les tests unitaires. 

\par\leavevmode\par
\subsubsection{ImageJ}
\par\leavevmode\par

ImageJ est un logiciel open source de traitement d'image développé par les National Institutes of Health en 1987. Il est écrit en Java. Il possède différentes classes, dont cinq seront implémentées dans ce projet :
\par\leavevmode\par
\begin{itemize}
\item ResultsTable, qui contient des méthodes permettant de manipuler des tableaux de données
\item ImagePlus, qui contient des méthodes permettant de manipuler les images
\item ImageProcessor, qui contient également des méthodes permettant de manipuler les images
\item IJ, qui contient des méthodes utilitaires d'imageJ
\item ROI, qui permet de manipuler les sélections
\end{itemize}

\par\leavevmode\par
\par\leavevmode\par
\par\leavevmode\par

\subsubsection{HTML/CSS5}
\par\leavevmode\par

Le langage HTML (HyperText Markup Language) est un langage de balisage permettant d'afficher les différents éléments d'une page web. Il a été développé au début des années 90 pour écrire des documents liant les différents ressources d'internet via des hyperliens.
Dans ce projet, le langage HTML est utilisé pour afficher l'interface de programmation dont l'utilisateur se servira. Il permettra notamment d'afficher les tableaux ainsi que les différents éléments de la page permettant d'importer des images ou tableau ou d'ajouter le script.


\par\leavevmode\par
\subsubsection{Jasmine.js}
\par\leavevmode\par

Jasmine est une infrastructure de développement qui a pour but de tester du code JavaScript. Elle permet de tester de façon unitaire les éléments d'un code.
Dans ce projet nous nous servirons principalement des fonctions describe(), it(), expect() et toBe(), qui  permettent de décrire la fonction à tester, de donner le résultat attendu et de le comparer au résultat observé.

\par\leavevmode\par
\subsubsection{Webpack, npm, nodejs}
\par\leavevmode\par

Webpack est un "module bundler" : il prend les fichiers JavaScript et les regroupe en modules.
Il est utile pour ce projet car il permet de rassembler les fichiers pour l'implantation des différentes méthodes.
Avec npm il permet de mettre en forme le code pour son utilisation dans le navigateur. Nodejs permet de les faire tourner.

\par\leavevmode\par
\par\leavevmode\par
\par\leavevmode\par
\subsection{Organisation}
\par\leavevmode\par

\par\leavevmode\par
\subsubsection{Trello}
\par\leavevmode\par

Trello est un outil de gestion de projet en ligne, lancé en 2011 par l'entreprise Frog Creek Software.
Cet outil est utilisé afin de planifier les réunions, créer des listes de tâches à accomplir et publier des commentaires. Il permet de travailler de manière collaborative en tenant au courant les utilisateurs de la répartition et l'avancée des différentes tâches.

\par\leavevmode\par
\subsubsection{Github}
\par\leavevmode\par

Github est un service d'hébergement et de gestion de développement des logiciels lancé en 2008. Il permet d'héberger du code pour qu'il soit disponible à toutes les personnes y ayant accès.
Il nous permet d'héberger les fichiers liés au projet et de récupérer le travail effectué par les autres membres du groupe ainsi que de rendre nos propres modifications disponibles.

\par\leavevmode\par
\subsubsection{Latex}
\par\leavevmode\par

LaTeX est un langage développé par Leslie Lamport dans les années 80. Il permet de composer des documents : l'utilisateur peut indiquer la manière dont il veut hiérarchiser le texte et LaTeX choisit les meilleurs agencements pour les éléments du document.
Ce langage est utilisé pour rédiger le cahier des charges ainsi que le rapport du projet. 
Nous utilisons le site Overleaf, un éditeur de LaTeX en ligne, afin de travailler de manière collaborative sur le cahier des charges ainsi que le rapport.

\par\leavevmode\par
\subsubsection{Markdown}
\par\leavevmode\par

Markdown est un langage de balisage léger créé en 2004 par John Gruber. Il permet de mettre en forme du texte de manière facile à lire. 
Il est utilisé dans le projet notamment pour laisser des commentaires sur Trello.
\newpage
\par\leavevmode\par
	\chapter{Analyse des besoins}
	    \section{Fonctionnels}
\par\leavevmode\par
\textbf{Interface utilisateur}
\par\leavevmode\par
L'interface utilisateur est un concept pour parler de l'interaction entre un utilisateur et un produit informatique. Par conséquent, la conception d'une interface simple mais qui peut conserver des fonctionnalités et des icônes familières pour les utilisateurs est une partie extrêmement importante.  
\par\leavevmode\par
\par\leavevmode\par
\textbf{Moteurs}
\par\leavevmode\par
L'interface utilisateur de notre page Web est écrit par le langage de HTML/CSS. Ainsi, les utilisateurs peuvent l'accéder depuis des différents navigateurs Web tels que: \textbf{\textit{Firefox, Chrome, Safari, Internet Explorer}} et autres. Pour avoir un temps d’accès raisonnable quelque soit la connexion de l’utilisateur, il faudra donc prévoir un système permettant de générer des miniatures lorsqu’il y aura beaucoup d’images à afficher par exemple. Son utilisation sera la plus facile possible en limitant le plus possible le nombre de clic. La navigation devra être simple et intuitive. Un fichier guide présentant l’interface et les fonctionnalités sera disponible pour aider l'utilisateur.

	    \section{Non fonctionnels}
\par\leavevmode\par
\subsection{Environnement de développement}
\par\leavevmode\par
\begin{itemize}
    \item Documentation: (API imageJ).
    \item Langages : CSS3, HTML5, JavaScript
    \item Feuille de style CSS pour la mise en forme et le design du site.
\end{itemize}
\par\leavevmode\par
\subsubsection{Node.js, Webpack}
\par\leavevmode\par
Node.js est une plateforme logicielle libre en JavaScript orientée vers les applications réseau, il est utilisé notamment pour permettre l’exécution de script javascrit et aussi dans la construction d'un serveur Web. 
\par\leavevmode\par
On utilise le Webpack pour compiler nos différents les fichiers( ResultTable.js, ImagePlus.js, ImageProcessor.js, Ij.js) afin de les regrouper en un seul fichier. C'est une pratique très intérresant, notamment pour la performance de nos tests. Webpack surveille les modifications que nous apporterions à nos fichiers. Nous pourrons donc simplement rafraîchir notre page HTML à chaque fois que nous voudrions voir le résultat.

\par\leavevmode\par
\subsubsection{Jasmine}
\par\leavevmode\par

Jasmine possède un certain nombre de fonctions ayant pour but de réaliser les tests unitaires. 
Un test unitaire se présente sous cette forme : 
\par\leavevmode\par
\begin{center}
    \includegraphics[width=17cm]{jasmine.png}
\end{center}{}
\par\leavevmode\par

Le fonction \textbf{\textit{describe}} prend en argument des informations sur la fonction à tester : quels sont les arguments à lui donner et le type de variable qu'on attend en résultat. Elle contient le reste du test.
Puis la fonction \textbf{\textit{it}} prend en argument une chaîne de caractères décrivant le but de la fonction à tester.
On peut ensuite ajouter les lignes de code nécessaires au test de la fonction, comme ici la création d'un tableau. Puis on stocke le résultats de l'utilisation de la fonction dans une variable constante "résultat", et cette variable sera comparé à un résultat attendu défini par l'utilisateur. Cette comparaison se fait grâce à la structure \textbf{\textit{expect}}(résultat).\textbf{\textit{toBe}}(résultat\_attendu).
Il existe également d'autre comparateur que \textbf{\textit{toBe}}, tel que \textbf{\textit{toEqual}}, qui permet de comparer les objets tandis que \textbf{\textit{toBe}} est plus efficace pour les nombres et les chaines de caractères.

\par\leavevmode\par
\chapter{Prototype de TWIMPA.}
\par\leavevmode\par
\par\leavevmode\par
\textbf{Plan de l'interface utilisateur}
\par\leavevmode\par
\begin{center}
    \includegraphics[width=14cm]{Interface_utilisateur.jpg}
    \par\leavevmode\par
    {\centering
    \textit{Fig 3.1: Plan de l'interface utilisateur.}}
    \label{Fig: Plan de l'interface utilisateur.}
\end{center}
\par\leavevmode\par
 Comme indiqué dans la figure ci-dessus, l'interface utilisateur est minimaliste avec 3 cadres principaux correspondant aux champs de Javascript modifiable, d'affichage des tableaux données ou des images importés, complétés en bas à droite par le résultat final. À gauche, une barre latérale contient des boutons qui remplissent des fonctions principales: \textbf{\textit{Load script, Load data (Table/Image)}} et \textbf{\textit{Run}}. Chacun de ces boutons a une fonctionnalité particulière. Les boutons servent quant à eux à effectuer des actions sur la page avec du code, en exécutant des actions sur un formulaire.
\par\leavevmode\par
- Le bouton de \textbf{\textit{Load script}} fait correctement appel à un fichier non lancé au démarrage de la page pour économiser des requêtes et ressources. Il permet de sélectionner le script de Javascript dans un répertoire sur l'ordinateur de l'utilisateur et le déposer sur notre page Web. Le script \textbf{\textit{.js}} sera alors lu et exécuté dans le panel \textbf{\textit{Javascript}}. Ici, l'utilisateur peut voir le détail du code et le modifier si c'est nécessaire.
\par\leavevmode\par
- Le bouton \textbf{\textit{Load data}} va permettre à l’utilisateur de charger des données depuis le disque dur et le valider. Les données choisies vont apparaître dans le panel \textbf{\textit{Show data}} sous forme d'un tableau de csv ou d'un image de plusieurs types différentes: 8-bit, 16-bits, 32-bits, RGB, ...
\par\leavevmode\par
-Le bouton \textbf{\textit{Run}} va permettre à l’utilisateur de faire tourner les scripts afin de retourner un résultat qui s’affichera sur l’interface au niveau de la partie \textbf{\textit{Result}}.
\par\leavevmode\par
\par\leavevmode\par
\par\leavevmode\par
\begin{center}
    \includegraphics[width=18cm]{tui_menu.png}
    \par\leavevmode\par
    {\centering
    \textit{Fig 3.2: Prototype de barre de menu pour TWIMPA.}}
    \label{Fig: Prototype de barre de menu pour TWIMPA.}
\end{center}
L'utilisateur peut également trouver sur l'interface la barre de menus qui répertorie toutes les commandes de TWIMPA. Il est organisé en douze menus:\newline
\begin{itemize}
    \item{Inputs: Des opérations de base sur les fichiers (l'ouverture, le sauvegarde et la création de nouvelles images).}
    \item{Outputs: Des consoles API (le console.log() qui envoie un message à la Console Web et le console.table() affichant les données tabulaires sous forme de tableau) et l'affichage des graphiques sous forme de 2D ou 3D.}
    \item{Image: La conversion et la modification d'images (les transformations géométriques) ainsi que le traitement d'image(les opérations ponctuelles, les filtres et les opérations arithmétiques).}
    \item{Stack: L'affichage de plusieurs images liées spatialement ou temporellement dans une seule fenêtre.}
    \item{3D: Cette commande offre des possibilités de visualisation avec une grand vitesse en utilisant la bibliothèque javascript 3D pour les piles d'images.}
    \item{MetaData}
    \item{Vector}
    \item{Tools: y compris la duplication d'image, l'affichage des histogrammes/des informations des images et l'ajout du bruit de fond.}
    \item{Segmentation: La représentation des opérations relatives à la segmentation de l'image.}
    \item{Analysis: Cette commande compte et mesure les objets dans les images binaires ou seuillées. L'analyse est effectuée sur la sélection de zone existante ou sur l'image entière si aucune sélection n'est présente. Il fonctionne en scannant l'image ou la sélection jusqu'à ce qu'il trouve le bord d'un objet. Il décrit ensuite l'objet, le mesure, le remplit pour le rendre invisible, puis reprend la numérisation jusqu'à la fin de l'image ou de la sélection.}
    \item{Programming: Le conteneur de plusieurs instructions de Javascript (Arithmetic, Debugging, Filter Func, If ... Then .. Else et Range).}
    \item{Help: est pour la mise à jour, des ressources de documentation et l'information sur la version du logiciel.} 
\end{itemize}
\par\leavevmode\par
\par\leavevmode\par
\chapter{Engagement de réalisation.}
\par\leavevmode\par

\fontfamily{cmr}\selectfont 
Dans ce projet, nous nous engageons à répondre aux maximums aux attentes de notre client en implémentant différentes classes et méthodes présentes dans le logiciel ImageJ : \textbf{\textit{ResultsTable}}, \textbf{\textit{ImagePlus}}, \textbf{\textit{ImageProcessor}}, \textbf{\textit{ROI}} et \textbf{\textit{IJ}}. L’objectif principal de ce projet est de parvenir à faire tourner de courts scripts vu précédemment durant l’UE d’\textbf{\textit{IMAJS}} ( Initiation à l’exploration d’images numériques) sur une interface web. Chaque classe possédant un certain nombre de méthodes, plus ou moins implémentables sur une application web, nous essayerons d’intégrer un maximum de celles-ci. Toutefois, nous ne pouvons nous engageons à les implémenter dans leur totalité de part : la complexité de certaines et le temps imparti pour la réalisation de notre projet. 
\par\leavevmode\par
\noindent Nous avons donc séparer les méthodes de chaque classe en 3 catégories différentes suivant leurs importances et fréquences d’utilisation: 
\par\leavevmode\par
\begin{itemize}
    \item Les méthodes essentielles : ce sont les méthodes les plus importantes et qui sont presque indispensable au bon fonctionnement de n’importe quel script. 
    \item Les méthodes utiles :  ce sont les méthodes qui sont souvent utilisées.
    \item Les méthodes occasionnelles :  ce sont les méthodes qui sont rarement utilisées, seulement pour des cas de figure précis. 
\end{itemize}
\par\leavevmode\par
Nous garantissons que la liste des méthodes ci-dessous seront implémentées et fonctionnelles sur notre API : 
\begin{itemize}

\begin{minipage}[t]{0.4\linewidth}
\par\leavevmode\par
    \item \textbf{\textit{  ResultsTable}}
        \par\leavevmode\par
        \begin{itemize}
            \item addValue
            \item addColumn
            \item addLabel
            \item deleteColumn
            \item deleteRow(s)
            \item getColumnHeading
            \item getColumn
            \item getColumnIndex
            \item getHeadings
            \item getLabel
            \item getValue
            \item getStringValue
            \item getResultsTable
            \item getTitle
            \item setLabel
            \item setValue
            \item size
            \item open
        \end{itemize}
\end{minipage}
\begin{minipage}[t]{0.4\linewidth}
\par\leavevmode\par
    \item \textbf{\textit{  ImageProcessor}}
        \par\leavevmode\par
        \begin{itemize}
            \item add
            \item autoTreshold
            \item bin
            \item blurGaussian
            \item clone
            \item createMask
            \item convertToByte
            \item draw
            \item drawOval
            \item drawRoi
            \item duplicate
            \item erode
            \item fill
            \item fillOval
            \item fillValueSet
            \item getBitDepth
            \item getf
            \item getHistogramm
            \item getIntArray
            \item getLine
            \item getPixel
            \item getRow
            \item getProcessor
            \item getHeight
            \item getProcessor
            \item getWidth
                    \end{itemize}
        \par\leavevmode\par
    \end{minipage}
\begin{minipage}[t]{0.4\linewidth}
        \par\leavevmode\par
        \par\leavevmode\par
        \par\leavevmode\par
        \begin{itemize}
            \item isBinary
            \item multiply
            \item or
            \item putPixel
            \item set
            \item setAutoTreshold
            \item setColor
            \item setPixels
            \item setRoi
        \end{itemize}
        \par\leavevmode\par
\end{minipage}
\newpage
\par\leavevmode\par
\begin{minipage}[t]{0.4\linewidth}
    \item \textbf{\textit{  ImagePlus }}:
    \par\leavevmode\par
        \begin{itemize}
            \item clone
            \item copy
            \item close
            \item createImagePlus
            \item draw
            \item duplicate
            \item getBitDepth
            \item getDimensions
            \item getHeight
            \item getPixel
            \item getTitle
            \item getSizeInBytes
            \item getWidth
            \item getTitle
            \item getHeight
            \item mouseMoved
            \item paste
            \item setRoi
            \item updateAndDraw
        \end{itemize}
\end{minipage}
\begin{minipage}[t]{0.4\linewidth}
    \item \textbf{\textit{  IJ}}
        \par\leavevmode\par
        \begin{itemize}
            \item append
            \item createImage
            \item currentMemory
            \item exit
            \item getProcessor
            \item getImage
            \item getScreenSize
            \item log
            \item newImage
            \item openImage
            \item run
            \item open
            \item openImage
            \item Roi
        \end{itemize}
        \par\leavevmode\par
\end{minipage}
\end{itemize}

\par\leavevmode\par
\par\leavevmode\par
(voir Annexe n pour plus de détails)
\par\leavevmode\par
       
Nous implémenterons le tout sur une interface simple afin de rendre accessible et plus visuel, l'utilisation des différents outils. Cela permettra ainsi d'afficher par exemple des tableaux de résultats pour la classe ResultsTable. La partie HTML/CSS5 de notre projet restera assez basique puisque l'esthétique de TWIMPA est développé dans un autre module.

\par\leavevmode\par
\chapter{Annexes}
\newpage
\par\leavevmode\par
\par\leavevmode\par
\par\leavevmode\par
    \section{Exemple de données à traiter}
\par\leavevmode\par
\par\leavevmode\par
\par\leavevmode\par
\textbf{a).} \includegraphics[width=6cm]{clown8bit.png} 
\textbf{b).} \includegraphics[width=6cm]{clown16bit.jpg}
\par\leavevmode\par
\textbf{c).} \includegraphics[width=6cm]{clown32bit.png}
\textbf{d).} \includegraphics[width=6cm]{clownRGB.png}
\par\leavevmode\par
\begin{center}
   \textbf{ Fig 1.} : a). Image 8-bit, b). Image 16-bit, c). Image 32-bit et d). Image RGB.
\end{center}
\par\leavevmode\par
\begin{center}
\includegraphics[width=7cm]{tableaucsv.png}
\par\leavevmode\par
   \textbf{ Fig 2.} : Tableau csv.
\end{center}
\par\leavevmode\par
\par\leavevmode\par
\par\leavevmode\par
\par\leavevmode\par
    \section{Diagramme de Gantt}

\end{document}
