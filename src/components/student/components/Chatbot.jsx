import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../../context/context';

const Chatbot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [currentStep, setCurrentStep] = useState('greeting');
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  const { courses } = useContext(MyContext);

 const quizData = {
  'Laravel': [
    { id: 1, question: "What is the default database driver used in Laravel?", options: ["MySQL", "SQLite", "PostgreSQL", "MongoDB"], correct: 0 },
    { id: 2, question: "Which of the following is a PHP framework?", options: ["React", "Angular", "Laravel", "Vue"], correct: 2 },
    { id: 3, question: "What does MVC stand for?", options: ["Model View Controller", "Model View Component", "Model Version Control", "None"], correct: 0 },
    { id: 4, question: "Which is used for database migrations in Laravel?", options: ["Seeds", "Migrations", "Eloquent", "Blueprint"], correct: 1 },
    { id: 5, question: "Which command is used to start a Laravel server?", options: ["php artisan serve", "laravel serve", "npm start", "composer start"], correct: 0 },
    { id: 6, question: "What is Eloquent in Laravel?", options: ["A templating engine", "A database ORM", "A router", "A middleware"], correct: 1 },
    { id: 7, question: "Which file stores environment variables in Laravel?", options: [".env", "config.php", "app.php", "bootstrap.php"], correct: 0 },
    { id: 8, question: "Which function is used to return a JSON response in Laravel?", options: ["json()", "response()->json()", "returnJSON()", "sendJSON()"], correct: 1 },
    { id: 9, question: "Which command creates a new controller in Laravel?", options: ["php artisan make:model", "php artisan make:controller", "php artisan new:controller", "php artisan create:controller"], correct: 1 },
    { id: 10, question: "Which template engine is used in Laravel?", options: ["Twig", "Blade", "Smarty", "Handlebars"], correct: 1 }
  ],

  'React': [
    { id: 1, question: "What is React?", options: ["A database", "A JavaScript library", "A server", "A programming language"], correct: 1 },
    { id: 2, question: "What is JSX?", options: ["A database", "JavaScript XML", "A server", "A programming language"], correct: 1 },
    { id: 3, question: "What is a component in React?", options: ["A function", "A class", "Both A and B", "None of the above"], correct: 2 },
    { id: 4, question: "What is the virtual DOM?", options: ["A real DOM", "A JavaScript representation of the DOM", "A server", "A database"], correct: 1 },
    { id: 5, question: "What is state in React?", options: ["A database", "A server", "An object that holds data", "A function"], correct: 2 },
    { id: 6, question: "Which hook is used to manage state in functional components?", options: ["useEffect", "useState", "useRef", "useMemo"], correct: 1 },
    { id: 7, question: "What is the purpose of useEffect in React?", options: ["To manage styles", "To perform side effects", "To fetch CSS", "To create routes"], correct: 1 },
    { id: 8, question: "Which method is used to render React components to the DOM?", options: ["React.render()", "ReactDOM.render()", "renderReact()", "componentRender()"], correct: 1 },
    { id: 9, question: "What is the default port for React development server?", options: ["8080", "3000", "5000", "8000"], correct: 1 },
    { id: 10, question: "What does lifting state up mean in React?", options: ["Creating new state", "Passing state to a parent component", "Deleting state", "Using Redux"], correct: 1 }
  ],

  'JavaScript': [
    { id: 1, question: "What is JavaScript?", options: ["A markup language", "A programming language", "A database", "A server"], correct: 1 },
    { id: 2, question: "What is a variable in JavaScript?", options: ["A function", "A container for data", "A database", "A server"], correct: 1 },
    { id: 3, question: "What is a function in JavaScript?", options: ["A variable", "A block of code", "A database", "A server"], correct: 1 },
    { id: 4, question: "What is an array in JavaScript?", options: ["A function", "A variable", "A collection of data", "A database"], correct: 2 },
    { id: 5, question: "What is an object in JavaScript?", options: ["A function", "A variable", "A collection of properties", "A database"], correct: 2 },
    { id: 6, question: "Which keyword declares a constant in JavaScript?", options: ["var", "let", "const", "static"], correct: 2 },
    { id: 7, question: "What will `typeof null` return?", options: ["null", "object", "undefined", "string"], correct: 1 },
    { id: 8, question: "What does `NaN` stand for?", options: ["Not a Name", "Not a Number", "No assigned Number", "New assigned Number"], correct: 1 },
    { id: 9, question: "Which method converts JSON text into a JavaScript object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "parseJSON()"], correct: 0 },
    { id: 10, question: "Which operator is used to compare both value and type?", options: ["==", "=", "===", "!="], correct: 2 }
  ],

  'Python': [
    { id: 1, question: "Who developed Python?", options: ["James Gosling", "Guido van Rossum", "Dennis Ritchie", "Bjarne Stroustrup"], correct: 1 },
    { id: 2, question: "Which keyword defines a function in Python?", options: ["func", "define", "def", "lambda"], correct: 2 },
    { id: 3, question: "What is the output type of input() in Python?", options: ["int", "str", "float", "bool"], correct: 1 },
    { id: 4, question: "Which of the following is immutable?", options: ["List", "Dictionary", "Set", "Tuple"], correct: 3 },
    { id: 5, question: "What does PEP stand for?", options: ["Python Enhancement Proposal", "Python Execution Process", "Program Execution Plan", "None"], correct: 0 },
    { id: 6, question: "Which module is used for regular expressions in Python?", options: ["re", "regex", "pyregex", "match"], correct: 0 },
    { id: 7, question: "Which keyword creates a class in Python?", options: ["object", "define", "class", "struct"], correct: 2 },
    { id: 8, question: "Which function returns the length of an object?", options: ["length()", "count()", "len()", "size()"], correct: 2 },
    { id: 9, question: "What symbol is used for comments in Python?", options: ["//", "#", "/* */", "<!-- -->"], correct: 1 },
    { id: 10, question: "What is used to handle exceptions in Python?", options: ["try-except", "throw-catch", "error-handling", "except-finally"], correct: 0 }
  ],

  'Node.js': [
    { id: 1, question: "What is Node.js?", options: ["A frontend framework", "A JavaScript runtime", "A database", "A compiler"], correct: 1 },
    { id: 2, question: "Which engine powers Node.js?", options: ["SpiderMonkey", "Chakra", "V8", "Rhino"], correct: 2 },
    { id: 3, question: "Which module is used to create a server in Node.js?", options: ["http", "fs", "url", "os"], correct: 0 },
    { id: 4, question: "Which function is used to include modules in Node.js?", options: ["import", "include", "require", "load"], correct: 2 },
    { id: 5, question: "Which command initializes a Node.js project?", options: ["npm start", "npm init", "node install", "node init"], correct: 1 },
    { id: 6, question: "Which file is used to define project dependencies?", options: ["index.js", "config.json", "package.json", "dependencies.js"], correct: 2 },
    { id: 7, question: "What does npm stand for?", options: ["Node Programming Manager", "Node Package Manager", "Network Package Manager", "None"], correct: 1 },
    { id: 8, question: "Which method reads files asynchronously in Node.js?", options: ["fs.readFile", "fs.read", "fs.getFile", "file.readAsync"], correct: 0 },
    { id: 9, question: "Which object handles events in Node.js?", options: ["EventEmitter", "Emitter", "Event", "NodeEvent"], correct: 0 },
    { id: 10, question: "Which of the following is true about Node.js?", options: ["It is synchronous", "It is single-threaded and asynchronous", "It is multi-threaded", "It runs on Java"], correct: 1 }
  ],

  'Vue.js': [
    { id: 1, question: "Who created Vue.js?", options: ["Evan You", "Brendan Eich", "Dan Abramov", "Guido van Rossum"], correct: 0 },
    { id: 2, question: "What is Vue.js?", options: ["A backend framework", "A frontend JavaScript framework", "A CSS library", "A compiler"], correct: 1 },
    { id: 3, question: "What directive is used for conditional rendering?", options: ["v-if", "v-show", "v-bind", "v-for"], correct: 0 },
    { id: 4, question: "Which directive is used for looping?", options: ["v-loop", "v-for", "v-each", "v-repeat"], correct: 1 },
    { id: 5, question: "What is the main file in a Vue project?", options: ["index.vue", "App.vue", "main.vue", "Home.vue"], correct: 1 },
    { id: 6, question: "Which command creates a new Vue project?", options: ["npm create vue", "vue create my-app", "npm start vue", "vue new project"], correct: 1 },
    { id: 7, question: "What is the reactive data object in Vue called?", options: ["state", "data", "props", "store"], correct: 1 },
    { id: 8, question: "What is the purpose of computed properties?", options: ["For dynamic style", "To perform calculations and cache results", "For API calls", "To store constants"], correct: 1 },
    { id: 9, question: "Which lifecycle hook runs after the component is mounted?", options: ["created()", "mounted()", "beforeMount()", "destroyed()"], correct: 1 },
    { id: 10, question: "Which Vue file extension is used for components?", options: [".vue", ".js", ".jsx", ".vjs"], correct: 0 }
  ]
};


  const topics = ['Laravel', 'React', 'JavaScript', 'Python', 'Node.js', 'Vue.js'];

  useEffect(() => {
    if (isOpen) {
      setMessages([{
        id: 1,
        text: "Hi! I'm your learning assistant. I can help you take quizzes on various topics. What quiz would you like to take?",
        sender: 'bot',
        options: topics
      }]);
      setCurrentStep('quiz-selection');
    }
  }, [isOpen]);

  const handleOptionClick = (option) => {
    if (currentStep === 'quiz-selection') {
      setSelectedQuiz(option);
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: `Great choice! You selected ${option}. Now, let me prepare your quiz. Click "Start Quiz" when you're ready!`,
        sender: 'bot',
        options: ['Start Quiz', 'Change Topic']
      }]);
      setCurrentStep('quiz-confirmation');
    } else if (currentStep === 'quiz-confirmation') {
      if (option === 'Start Quiz') {
        startQuiz();
      } else if (option === 'Change Topic') {
        setMessages(prev => [...prev, {
          id: Date.now(),
          text: "No problem! What quiz would you like to take?",
          sender: 'bot',
          options: topics
        }]);
        setCurrentStep('quiz-selection');
      }
    }
  };

  const startQuiz = () => {
    const quizQuestions = quizData[selectedQuiz] || [];
    setMessages(prev => [...prev, {
      id: Date.now(),
      text: `Perfect! Starting your ${selectedQuiz} quiz with ${quizQuestions.length} questions. Good luck!`,
      sender: 'bot'
    }]);
    
    // Store quiz data in localStorage for QuestionPage to access
    localStorage.setItem('selectedQuiz', selectedQuiz);
    localStorage.setItem('quizQuestions', JSON.stringify(quizQuestions));
    localStorage.setItem('quizTopic', selectedTopic);
    
    // Navigate to QuestionPage
    navigate('/student/quizpage');
    onClose();
  };

  const calculateScore = (answers, questions) => {
    let correct = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correct) {
        correct++;Question
      }
    });
    return Math.round((correct / questions.length) * 100);
  };

  const getCourseRecommendations = (topic, score) => {
    // Filter courses based on topic and score
    const relevantCourses = courses.filter(course => 
      course.title.toLowerCase().includes(topic.toLowerCase()) ||
      course.description.toLowerCase().includes(topic.toLowerCase())
    );
    
    // Sort by relevance (you can add more sophisticated logic)
    return relevantCourses.slice(0, 3);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 max-h-[600px] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold">Learning Assistant</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
              <div className={`max-w-xs px-4 py-2 rounded-lg ${
                message.sender === 'bot' 
                  ? 'bg-gray-100 text-gray-800' 
                  : 'bg-blue-500 text-white'
              }`}>
                <p>{message.text}</p>
                {message.options && (
                  <div className="mt-2 space-y-2">
                    {message.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        className="block w-full text-left px-3 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50 text-sm"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chatbot;