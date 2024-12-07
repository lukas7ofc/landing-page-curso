// script.js

// Função para alterar a cor dos ícones ao serem clicados
document.querySelectorAll('.icon').forEach(icon => {
  icon.addEventListener('click', () => {
    const colors = ['red', 'green', 'yellow', 'purple'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    icon.style.color = randomColor;

    // Adiciona um efeito temporário de transformação
    icon.style.transform = 'scale(1.2)';
    setTimeout(() => {
      icon.style.transform = 'scale(1)';
    }, 200);
  });
});

// Função para mostrar a categoria selecionada
document.querySelectorAll('.category').forEach(category => {
  category.addEventListener('click', (event) => {
    const categoryName = event.target.textContent;
    alert(`Você selecionou a categoria: ${categoryName}`);
  });
});

// Função de destaque nos links ao passar o mouse
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.textDecoration = 'underline';
  });
  link.addEventListener('mouseout', () => {
    link.style.textDecoration = 'none';
  });
});
