
## Introduction
Flexbox est un module de disposition CSS qui rend la conception de mises en page plus efficace et plus dynamique, en particulier pour aligner et distribuer les éléments dans un conteneur.

## Propriétés de conteneur Flexbox

### **display: flex
   - Active le mode Flexbox sur un conteneur.

### **flex-direction
   - Définit la direction des éléments flexibles dans le conteneur.
   ```css
   flex-direction: row; /* par défaut */
   flex-direction: row-reverse;
   flex-direction: column;
   flex-direction: column-reverse;
   ```
### **justify-content
   - Aligne les éléments flexibles le long de l'axe principal.
  ```css
  justify-content: flex-start; /* Par défaut */
  justify-content: flex-end;
  justify-content: center;
  justify-content: space-between;
  justify-content: space-around;
  justify-content: space-evenly;
  ```
### **align-items
   - Aligne les éléments flexibles le long de l'axe transversal.
   ```css
   align-items: stretch; /* Par défaut */ 
   align-items: flex-start; 
   align-items: flex-end; 
   align-items: center; 
   align-items: baseline;
   ```
  
### **align-content
   - Contrôle l'alignement des lignes flexibles lorsque plusieurs lignes sont présentes.
   ```css
   align-content: flex-start;
   align-content: flex-end;
   align-content: center;
   align-content: space-between;
   align-content: space-around;
   align-content: stretch; /* Par défaut */
   ```
### **flex-wrap
   - Permet de contrôler si les éléments flexibles doivent se répartir sur plusieurs lignes.
   ```css
   flex-wrap: nowrap; /* Par défaut */
   flex-wrap: wrap;
   flex-wrap: wrap-reverse;
   ```
### **flex-flow
   - Propriété raccourcie pour [`flex-direction`](#flex-direction) et [`flex-wrap`](#flex-wrap)
   ```css
  flex-flow: row nowrap; /* Par défaut */
  flex-flow: column wrap;
   ```
### **flex-grow
   - Détermine la capacité d'un élément à s'agrandir par rapport aux autres.
   ```css
   flex-grow: 0; /* Par défaut */
   flex-grow: 1;
   ```
### **flex-shrink
   - Détermine la capacité d'un élément à se réduire par rapport aux autres.
   ```css
   flex-shrink: 1; /* Par défaut */
   flex-shrink: 0;
   ```
### **flex-basis
   - Définit la taille de base d'un élément avant que l'espace disponible ne soit distribué.
   ```css
   flex-basis: auto; /* Par défaut */
   flex-basis: 100px;
   ```
### **flex
   - Propriété raccourcie pour [`flex-grow`](#flex-grow), [`flex-shrink`](#flex-shrink) et [`flex-basis`](#flex-basis).
   ```css
   flex: 1 1 auto; /* Par défaut */
   flex: 0 1 100px;
   ```

### **Conclusion
Flexbox est un outil puissant pour créer des mises en page réactives et flexibles. En maîtrisant ses propriétés, vous pouvez facilement contrôler l'agencement et l'alignement de vos éléments.