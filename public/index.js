function insertQuestion(questionText, questionAuthor) {

   // Create a new question <article> element.
   var questionElement = document.createElement('article');
   questionElement.classList.add('question');

   /*
    * Create a new question-icon <div> element, insert bullborn with innerHTML
    * (which is safe in this case because we're not dealing with user input),
    * and add the div into the new question element.
    */
   var questionIconElem = document.createElement('div');
   questionIconElem.classList.add('question-icon');
   questionIconElem.innerHTML = '<i class="fa fa-bullhorn"></i>';
   questionElem.appendChild(questionIconElem);

   /*
    * Create a new question-content <div> element, and insert it into the new question
    * element.
    */
   var questionContentElem = document.createElement('div');
   questionContentElem.classList.add('question-content');
   questionElem.appendChild(questionContentElem);

   /*
    * Create a new question-text <p> element and add to it a text node containing
    * the question text value specified by the user.  Add the question-text <p> element
    * into the question-content element.
    */
   var questionTextNode = document.createTextNode(questionText);
   var questionTextElem = document.createElement('p');
   questionTextElem.classList.add('question-text');
   questionTextElem.appendChild(questionTextNode);
   questionContentElem.appendChild(questionTextElem);

   /*
    * Create a new question-author <p> element and add to it an <a> element
    * that itself contains a question node with the question author value
    * specified by the user.  Add the question-author <p> element into the
    * question-content element.
    */
   var questionAuthorTextNode = document.createTextNode(questionAuthor);
   var questionAuthorLinkElem = document.createElement('a');
   questionAuthorLinkElem.href = '#';
   questionAuthorLinkElem.appendChild(questionAuthorTextNode);
   var questionAuthorElem = document.createElement('p');
   questionAuthorElem.classList.add('question-author');
   questionAuthorElem.appendChild(questionAuthorLinkElem);
   questionContentElem.appendChild(questionAuthorElem);

   var questionContainer = document.querySelector('main.question-container');
   questionContainer.appendChild(questionElem);

}
/*
 * This function checks whether all of the required inputs were supplied by
 * the user and, if so, inserts a new question into the page using these inputs.
 * If the user did not supply a required input, they instead recieve an alert,
 * and no new question is inserted.
 */
function handleModalAcceptClick() {

  var questionText = document.getElementById('question-text-input').value;
  var questionAuthor = document.getElementById('question-author-input').value;

  /*
   * Only generate the new question if the user supplied values for both the question
   * text and the question attribution.  Give them an alert if they didn't.
   */
  if (questionText && questionAuthor) {

    allquestions.push({
      text: questionText,
      author: questionAuthor
    });

    clearSearchAndReinsertquestions();

    hideCreatequestionModal();

  } else {

    alert('You must specify both the text and the author of the question!');

  }
}
var modalScreen = document.getElementsByClassName("modal-backdrop");

window.addEventListener('click', function (event){
  console.log("the window was clicked:", event.target);
});


var createquestion = document.getElementById("create-question-button");
createquestion.addEventListener('click', function(event) {
  console.log("== The create question button was clicked");
  var modal = document.createElement('div');
  modal.setAttribute('id',"create-question-modal");
  modalText = document.getElementById("create-question-modal");
  modalText.style.display = "block";
  document.getElementById("question-text-input").value = ""

});

var modelClose = document.getElementsByClassName("modal-close-button")[0];
modelClose.addEventListener('click', function(event) {
 modalText = document.getElementById("create-question-modal");
 modalText.style.display = "none";

});

var modelExit = document.getElementsByClassName("modal-cancel-button")[0];
modelExit.addEventListener('click', function(event) {
 modalText = document.getElementById("create-question-modal");
 modalText.style.display = "none";

});

var modelAccept = document.getElementsByClassName("modal-accept-button")[0];
modelAccept.addEventListener('click', function(event) {
 questionText = document.getElementById("question-text-input");
 if (questionText.value.length == 0) {
   window.alert("please enter some text");
 }
});
