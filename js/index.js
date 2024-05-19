// document.getElementById("demo").innerHTML = Math.random();






function addquote () {
    var quotes=new Array
    quotes[0] = "“Be yourself; everyone else is already taken. ”Oscar Wilde";
    quotes[1] = "“So many books, so little time. ”Frank Zappa";
    quotes[2] = "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. ”Albert Einstein";
    quotes[3] = "“A room without books is like a body without a soul.” Marcus Tullius Cicero";
    quotes[4] = "“You only live once, but if you do it right, once is enough. ”Mae West";
    quotes[5] = "“Be the change that you wish to see in the world.” Mahatma Gandhi";
    
    index = Math.floor(Math.random() * quotes.length);
    document.getElementById('demo').innerHTML = quotes[index];
};




















