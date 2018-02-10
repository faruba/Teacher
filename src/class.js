
class Class extend DB{
  constructor() {
  }
  create() {
  }
  addStudent() {
  }
  addTeacher() {
  }
}

class Parent {
  linkS
}

class Student extends DB {
  showState(type) {}
  beginTest() {}
  beginStudy() {}
  commitQuestion() {}
}
class Teacher {
}
class Describe extends DB {
}

class Question extends DB {
  constructor(tag, content, answer, difficulty){ }
  check(){}
  get(type){}
}

class QuestionPool extends DB{
  //tag, questionID
  addQuestion(questions){}
  removeQuestions(quesionIds){}
  pickQuestion(tag, difficultyRange, count, exclude) { }
}


genTest(tag, count, level) {}
class Test extends DB{
  beginTest(student, testId) {}
  submitAnswer(student, testId, answer) {}
}

class Report {
  genReport(student, testId){}
  showReport(type) {}
}

class Viewer {
}
