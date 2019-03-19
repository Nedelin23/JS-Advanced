function solve() {
	let titleElement = document.getElementById('createTitle');
	let contentElement = document.getElementById('createContent');

	let titleValue = titleElement.value;
	let contentValue = contentElement.value;

	if(titleValue && contentValue){

	    let title = document.createElement('h3');
	    title.textContent = titleValue;

	    let content = document.createElement('p');
	    content.textContent = contentValue;

	    let articleElement =document.createElement('article');
	    articleElement.appendChild(title);
	    articleElement.appendChild(content);

	    let articles = document.getElementById('articles');
	    articles.appendChild(articleElement);

	    titleElement.value = '';
	    contentElement.value = '';
    }

}