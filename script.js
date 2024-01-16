function generate() {
  let quotes = {
    " - Albert Camus":
      '"The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion."',
    "- Billie Eilish":
      '"When I do have free time, I spend it with friends, or I spend it at home writing or making something."',
    "- Muhammad Ali Jinnah":
      '"One of the biggest curses from which India is suffering - I do not say that other countries are free from it, but I think our condition is much worse - is bribery and corruption. That really is a poison."',
    "- Franz Kafka": "It is often safer to be in chains than to be free.",
    "- Eric Hoffer": "We feel free when we escape - even if it be but from the frying pan to the fire.",
    "- Harriet Tubman":
      "I had crossed the line. I was free; but there was no one to welcome me to the land of freedom. I was a stranger in a strange land.",
    "- Angelina Jolie":
      "The truth is I love being alive. And I love feeling free. So if I can't have those things then I feel like a caged animal and I'd rather not be in a cage. I'd rather be dead. And it's real simple. And I think it's not that uncommon.",
  };

  let authors = Object.keys(quotes);

  let author = authors[Math.floor(Math.random() * authors.length)];

  let quote = quotes[author];

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
}
