function adicionarTarefa() {
  //Criando variável para disparar a mensagem de "Tarefa Adicioanda com sucesso."
  let mensagem = "Tarefa adicionada com sucesso!";
        
        //Criando variável para armazenar o valor do input
        let inputTarefa = document.getElementById("inputTarefa")
      //Criando variável para salvar o valor dentro do input
        let tarefa = inputTarefa.value
        document.getElementById("mensagem").textContent = mensagem;
      
        //Variável que irá sal
        let listaTarefas = document.getElementById("listaTarefas")
        //Colocando o elemento dentro de uma váriavel, pois estamos criando Listas
        let novaTarefa = document.createElement("li")
        
        
        novaTarefa.textContent = tarefa


        listaTarefas.appendChild(novaTarefa)


        //Limpa o input após ser adicionado a tarefa
        inputTarefa.value = ""
        
}