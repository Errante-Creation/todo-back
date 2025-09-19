# Gestionnaire de Tâches (To-Do List)
*   **Concept :** L'application web la plus classique pour débuter.
*   **Données :** Tâche (id, texte, isCompleted).
*   **Opérations CRUD :**
    *   `CREATE` : Ajouter une nouvelle tâche.
    *   `READ` : Afficher toutes les tâches.
    *   `UPDATE` : Marquer une tâche comme "complétée".
    *   `DELETE` : Supprimer une tâche.


## Les endpoints

GET      /todo       -- Pour récupérer tous les éléments de liste
GET      /todo/:id   -- Récupérer un élément de liste en particulier
POST     /todo       -- Créer un élément de liste
PATCH    /todo/:id   -- Modifier un élément de liste pour le passer à !isCompleted
DELETE   /todo:/id   -- Supprimer un élément de liste

## Schema de données
- ID : Identifiant unique de l'élément de liste (String)
- title : Contenu textuel de l'élément de liste (String, require)
- isCompleted : Est-ce que l'élément de liste est complété ? (Boolean, require)
- creationDate : Quand l'élément de liste à été créée (Date, Require)
- completedDate : Quand l'élément à été marqué comme validé (Data)