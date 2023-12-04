// randomQuotes();

const randomer = async () => {
  try {
    const response = await fetch('https://dummyjson.com/quotes/random');
    const data = await response.json();
    const randomQuote = data.quote;
    const quoteAuthor = data.author;

    console.log(`${randomQuote} \n\nby ${quoteAuthor}`);
  } catch (error) {
    console.error('Not working as expected.', error);
  }
};
randomer();
