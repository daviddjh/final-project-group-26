function insertNewQuestion(questionText, questionAuthor) {
  var newQuestion = {
    content: questioncontent,
    tags: tags
  };
  var newQuestion = Handlebars.templates.Question-Container(QuestionContainer);
  return newQuestion;
}



function handleModalAcceptClick() {


}


/*
 * This function clears the current search term, causing all questions to be
 * re-inserted into the DOM.
 */
function clearSearchAndReinsertquestions() {

  document.getElementById('navbar-search-input').value = "";
  doSearchUpdate();

}


/*
 * This function shows the modal to create a question when the "create question"
 * button is clicked.
 */
function showCreatequestionModal() {


}


/*
 * This function clears any value present in any of the question input elements.
 */
function clearquestionInputValues() {


}


/*
 * This function hides the modal to create a question and clears any existing
 * values from the input fields whenever any of the modal close actions are
 * taken.
 */
function hideCreatequestionModal() {

}


/*
 * A function that determines whether a given question matches a search query.
 * Returns true if the question matches the query and false otherwise.
 */
function questionMatchesSearchQuery(question, searchQuery) {
}


/*
 * Perform a search over over all the questions based on the search query the user
 * entered in the navbar.  Only display questions that match the search query.
 * Display all questions if the search query is empty.
 */
function doSearchUpdate() {



}



function parsequestionElem(questionElem) {



}
