function insertNewQuestion(questionText, questionAuthor) {
  var newQuestion = {
    content: questioncontent,
    tags: tags
  };
  var newQuestion = Handlebars.templates.Question-Container(QuestionContainer);
  
  var questionContainer = document.querySelector("Question-Container");
  questionContainer.insertAdjacentHTML("beforeend",newQuestion);
}

function insertNewComment(commentText, commentAuthor)
{

}


function handleModalAcceptClick() {


}

/*
 * This function shows the modal to create a question when the "create question"
 * button is clicked.
 */
function showCreatequestionModal() {
  var modalBackdrop = document.getElementById('modal-backdrop');
  var createQuestionModal = document.getElementById('create-question-modal');

  // Show the modal and its backdrop.
  modalBackdrop.classList.remove('hidden');
  createQuestionModal.classList.remove('hidden');

}


/*
 * This function clears any value present in any of the question input elements.
 */
function clearquestionInputValues() {
  var twitInputElems = document.getElementsByClassName('question-input-element');
  for (var i = 0; i < twitInputElems.length; i++) {
    var input = twitInputElems[i].querySelector('input, textarea');
    input.value = '';
  }

  var twitInputElems = document.getElementsByClassName('tag-input-element');
  for (var i = 0; i < twitInputElems.length; i++) {
    var input = twitInputElems[i].querySelector('input, textarea');
    input.value = '';
  }

}


/*
 * This function hides the modal to create a question and clears any existing
 * values from the input fields whenever any of the modal close actions are
 * taken.
 */
function hideCreatequestionModal() {
  var modalBackdrop = document.getElementById('modal-backdrop');
  var createQuestionModal = document.getElementById('create-question-modal');

  // Show the modal and its backdrop.
  modalBackdrop.classList.add('hidden');
  createQuestionModal.classList.add'hidden');
}

function parsequestionElem(questionElem) {



}
