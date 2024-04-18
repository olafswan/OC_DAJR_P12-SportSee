#### Projet 12 de la formation "Développeur d'application - JavaScript React" par OpenClassrooms

# Développez un tableau de bord d'analytics avec React

### Qu’allez-vous apprendre dans ce projet ?
 
Dans ce projet, vous développerez un tableau de bord d'analytics de coaching sportif.
Votre mission sera d'intégrer des graphiques et des diagrammes en utilisant React et de récupérer des données via une API.

Votre tâche principale consistera à développer la page profil de l'utilisateur, en intégrant des éléments graphiques 
avancés tels que des graphiques et des diagrammes pour présenter les données d'analyse sportive.

Vous utiliserez **React** pour construire l'interface utilisateur. Pour les graphiques, vous pourrez faire appel à des 
bibliothèques telles que Recharts ou D3.

Vous serez en charge de la **gestion des appels HTTP**, utilisant des bibliothèques comme Fetch ou Axios pour interagir avec 
le back-end et récupérer les données nécessaires.

Une partie importante du projet sera de développer une documentation complète comprenant un Readme, JSDoc, et les 
proptypes. Ceci est essentiel pour faciliter la collaboration et la compréhension du code au sein de l'équipe.

Bien que le back-end soit géré en utilisant Node.js, votre concentration sera principalement sur le développement 
front-end et l'intégration avec l'API.

### En quoi ces compétences seront-elles importantes pour votre carrière ? 

Le développement d'applications web modernes avec React et la capacité à intégrer des données complexes via des API 
sont des compétences hautement recherchées dans l'industrie du développement web. 

La maîtrise de bibliothèques graphiques avancées vous permettra de créer des visualisations de données interactives 
et attrayantes. 

De plus, la capacité à documenter efficacement votre code est essentielle pour le travail en équipe et la maintenance 
à long terme des projets.

### Objectifs pédagogiques
* Assurer la qualité des données d'une application
* Développer des éléments graphiques avancés à l'aide de bibliothèques JavaScript
* Interagir avec un service Web

***

### Scénario :

Vous travaillez en tant que développeur chez SportSee, une startup dédiée au coaching sportif. En pleine croissance, 
l’entreprise va aujourd’hui lancer une nouvelle version de la page profil de l’utilisateur. Cette page va notamment 
permettre à l’utilisateur de suivre le nombre de sessions réalisées ainsi que le nombre de calories brûlées.

![Logo de SportSee](https://user.oc-static.com/upload/2020/08/18/15977560509272_logo%20%285%29.png)

Vous recevez ce matin un Slack de Charles, le Product Owner :

```Hello ! Bon, c’est le grand jour aujourd’hui, on va s’attaquer à la nouvelle page profil utilisateur du site :).
Tiens, Léo (le designer) vient de me faire parvenir le lien Figma de la maquette. Et voici le kanban avec les User
Stories à intégrer pour ce projet. Pour ce sprint, il faut que tu intègres les US de la partie TODO (le reste sera
au sprint suivant).
```

Plus tard durant la journée, vous recevez un mail de votre Lead Developer, Antoine, vous donnant plus de détails 
techniques sur le projet.

```bash
Objet : Précisions techniques sur la page profil
De : Antoine
À : Moi

Re,

Charles m’a dit qu’il t’avait briefé sur les User Stories et les maquettes, voici donc plus d’infos côté technique.

L’objectif est de refaire la page profil avec React. Tu seras en charge de développer la page.

Comme tu as pu le constater, le projet intègre des graphiques sur l’activité sportive de l’utilisateur. Je t’invite à
utiliser soit D3, soit Recharts. Cela dit, fais attention à D3, c’est assez puissant comme librairie mais parfois
difficile à prendre en main.

Concernant l’intégration CSS du projet, notre Product Owner préfère qu’on se concentre sur la partie desktop pour
l’instant. Tu n’as donc pas besoin de travailler sur la version mobile et tablette du projet. Nous ferons ça dans un
second temps. Cela dit, fais bien attention à ce que ton projet puisse être lisible sur les écrans d’au moins
1024 par 780 pixels.

Concernant les données, je t’ai créé un backend utilisant NodeJS que tu peux trouver ici. Il va te permettre de
réaliser tes calls HTTP et de récupérer des données d’exemple. Tout y est décrit : les étapes d’installation ainsi
que les calls HTTP que j’ai mis en place.

Pour la gestion des calls en eux-mêmes, je t’invite à utiliser soit Fetch, soit Axios. Par contre, il est important
que tu réalises les calls en dehors des composants React. Il faudra que tu crées un service à part qui se chargera
de faire les calls pour toi.

D’ailleurs, il faudra que tu commences le projet en réalisant un mock des données de l'API. Dès que ton projet sera
fonctionnel, tu pourras t’attaquer à l’intégration de l’API. Attention, en fonction des utilisateurs, le schéma de
données est légèrement différent. Il faudra donc que tu penses à standardiser les données venant de l'API pour les
formatter correctement avant de les utiliser.

Si tu as le temps, et si tu le souhaites, il serait bien que tu documentes ton projet pour que tout le monde puisse
travailler dessus. Pour ça tu peux par exemple utiliser un Readme, de la JSDoc ou même des proptypes.

Allez, je te souhaite un bon développement !

Antoine
```

### Pièces jointes :

[Maquette Figma](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=0%3A1)

[Kanban des User Stories](https://www.notion.so/openclassrooms/Copy-of-Dev4U-projet-Learn-Home-6686aa4b5f44417881a4884c9af5669e)

[Backend NodeJS](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)

Ça y est, vous avez toutes les informations nécessaires et vous pouvez démarrer le développement de la page.

***

### Livrables :
1. Un fichier au format TXT contenant le lien vers votre **code** sur GitHub.

### Cours :
[Adoptez les API REST pour vos projets web](https://openclassrooms.com/fr/courses/6573181-adoptez-les-api-rest-pour-vos-projets-web)

### Ressources
[Bien commenter son code JavaScript avec JSDoc](https://buzut.net/bien-commenter-son-code/)

### Résultat final lors du passage de la soutenance :
[Lien du site](www.google.com)
