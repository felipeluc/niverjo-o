const steps = [
  {
    bilhete: "Quando nos conhecemos você me chamava de crente conservador e eu te chamava de confeiteiro marombeiro, agora eu que vou te dar doce, mas relaxa esse é só para te dar energia para a caça, boa sorte!",
    charada: "Você sempre coloca comida para mim, qual o lugar aonde você sempre pega os pratos?"
  },
  {
    bilhete: "Achou seu presente, esse é para você ter um prato exclusivo para comer mas relaxa que não é só isso!",
    charada: "Confeiteiro marombeiro não é só pelos doces né? então procure aonde você guarda o que você usa para ir para seu lugar de virar marombeiro!"
  },
  {
    bilhete: "Esse é não é só para exercício é para eu te hidratar igual você faz comigo, mas essa não é do Stitch relaxa",
    charada: "Essa próxima é uma que eu precisava pq sempre fico com frio nos meus pés quando vc puxa a coberta, vá aonde você guarda as coisas que só eu posso ver você usando"
  },
  {
    bilhete: "Essas é para proteger seus pés do frio kkkkk",
    charada: "Não estamos na França nem na Escócia mas a próxima coisa tem haver com o seu reino, para que ninguém entre nele você deve procurar aonde somente o rei sentaria"
  },
  {
    bilhete: "Para que você possa manter as chaves do seu reino protegidas",
    charada: "Servimos no tiro de guerra porém queria nunca entramos em nenhum veículo, procure um para encontrar seu presente"
  },
  {
    bilhete: "Para que você possa ter um tanque de guerra",
    charada: "Você adoça a vida de várias pessoas, o próximo está aonde você guarda suas armas doces."
  },
  {
    bilhete: "Para que você possa continuar cozinhando ou lavando louça sem se sujar",
    charada: "Se tem alguém que não gosta de desorganização é você, e isso não pode acontecer, imagina ter que fazer pão de mel de última hora e acabar esquecendo dentro do forno"
  },
  {
    bilhete: "Esse não faz mágica igual o de Hogwarts mas vai te ajudar a anotar e se manter organizado",
    charada: "Ficar em pé por hora faz a coluna doer então de vez em quando precisamos sentar pra descansar, procure na frente de onde você fica em pé por horas"
  },
  {
    bilhete: "Para que você possa descansar o pescoço quando estiver sentado também",
    charada: "Antes da cama sempre tínhamos que usar um móvel como extensão, lá você coloca seus ursinhos, roupas, cuecas e etc… já deu uma olhada lá de novo?"
  },
  {
    bilhete: "Comprei esse para completar sua coleção e porque o macacão dele me lembrou o do Chucky kkkk",
    charada: "Açúcar? de jeito nenhum! vá aonde sua bebida sempre fica geladinha"
  },
  {
    bilhete: "Esse só será útil com o presente que vem depois do próximo kkk",
    charada: "Assistir a Mary sempre é bom, porém nada se compara a quando vimos a morte do demônio juntos no Airbnb, imagina se estivéssemos comendo pipoca voaria tudo? aonde você estouraria uma para vermos reinado?"
  },
  {
    bilhete: "Essa é para quando formos fazer uma maratona e terminar a terceira temporada",
    charada: "O próximo é mais uma reparação, quando fomos sair pela primeira vez no container nem conseguimos comer de tão cheios que estávamos, aonde você guardaria aquele lanche para o dia seguinte?"
  },
  {
    bilhete: "Esse é para comer tudo em kkkk",
    charada: "Uma boa notícia, o próximo presente já vai estar junto. é complicado quando vamos sair e não acho nada para pentear meu cabelo, tem outra coisa também aonde sempre te zoou sobre o que vc passa no cabelo?"
  },
  {
    bilhete: "Para que você possa deixar seu cabelo macio e cheiroso e bem penteado",
    charada: "Guardar coisas é sempre bom, e aqui na sua casa tem coisas de várias gerações, aonde colocariam mais uma coisa para guardar e lembrar?"
  },
  {
    bilhete: "Esse além de decorar seu quarto vai te fazer sempre lembrar de nós!",
    charada: "Tem muito trouxa por aí mas você não é um deles, tem um lugar que você guarda sua poção de beber todas as manhãs"
  },
  {
    bilhete: "Do seu grifinório favorito",
    charada: "Bom agora tá chegando ao fim os presente de 20 anos, esse vai te deixar ainda mais bonito para a noite de hoje e são dois o 18 e 19 da lista presentes, para encontrar esses procure embaixo de onde mais gostamos de ficar!"
  },
  {
    bilhete: "Esse são os últimos para você brilhar hoje!",
    charada: null
  },
  {
    bilhete: "Feliz aniversário vida, obrigado por entrar na minha vida e ressignificar o amor para mim, te amo demais! o presente final não deve ser julgado pois foi feito com carinho, irei te entregar ❤️",
    charada: null
  }
];

let currentStep = 0;
const container = document.getElementById("treasure-container");
const btn = document.getElementById("next-btn");

btn.addEventListener("click", () => {
  showStep(currentStep);
  currentStep++;
  if (currentStep >= steps.length) {
    btn.style.display = "none";
  }
});

function showStep(index) {
  const step = steps[index];
  const html = `
    <div class="card">
      <p><strong>Bilhete ${index + 1}:</strong><br/> ${step.bilhete}</p>
    </div>
    ${step.charada ? `
      <div class="card">
        <p><strong>Charada:</strong><br/> ${step.charada}</p>
      </div>` : ""}
  `;
  container.innerHTML = html;
}
