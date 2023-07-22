function ajouterTache() {
    const tache = document.getElementById('tache');
    const taskListEnCours = document.getElementById('taskListEnCours');
    if (!tache.value) {
      return;
    }
    const newTask = document.createElement('li');
    newTask.innerText = tache.value;
  
    $(newTask).on('swiperight', function() {
      const taskListTerminee = document.getElementById('taskListTerminee');
      taskListTerminee.appendChild(this);
      $(taskListTerminee).listview('refresh');
    });
  
    $(newTask).on('swipeleft', function() {
      $(this).hide('slow', function() {
        $(this).remove();
      });
    });
  
    taskListEnCours.appendChild(newTask);
  
    tache.value = '';
    tache.focus();
  }
  function effacerListe() {
    const taskListEnCours = document.getElementById('taskListEnCours');
    const taskListTerminee = document.getElementById('taskListTerminee');
    taskListEnCours.innerHTML = '';
    taskListTerminee.innerHTML = '';
    $(taskListEnCours).listview('refresh');
    $(taskListTerminee).listview('refresh');
  }