// ===================================
// Data Layer - Questions, Students, Performance
// ===================================

const DATA = {
    // Java Topics
    topics: {
        loops: 'Loops',
        arrays: 'Arrays',
        conditionals: 'Conditionals',
        methods: 'Methods',
        oop: 'Object-Oriented Programming',
        exceptions: 'Exception Handling'
    },

    // MCQ Questions by topic and difficulty
    mcqQuestions: {
        loops: {
            easy: [
                {
                    id: 'loop_e1',
                    question: 'What is the output of the following code?\n\nfor(int i = 0; i < 3; i++) {\n    System.out.print(i + " ");\n}',
                    options: ['0 1 2', '1 2 3', '0 1 2 3', 'Compilation Error'],
                    correct: 0,
                    explanation: 'The loop starts at 0 and runs while i < 3, printing 0, 1, and 2.'
                },
                {
                    id: 'loop_e2',
                    question: 'Which loop is guaranteed to execute at least once?',
                    options: ['for loop', 'while loop', 'do-while loop', 'None of the above'],
                    correct: 2,
                    explanation: 'A do-while loop checks the condition after executing the body, so it always runs at least once.'
                },
                {
                    id: 'loop_e3',
                    question: 'What keyword is used to exit a loop early?',
                    options: ['exit', 'break', 'stop', 'return'],
                    correct: 1,
                    explanation: 'The break keyword immediately exits the current loop.'
                }
            ],
            medium: [
                {
                    id: 'loop_m1',
                    question: 'What is the output?\n\nfor(int i = 1; i <= 5; i++) {\n    if(i == 3) continue;\n    System.out.print(i + " ");\n}',
                    options: ['1 2 3 4 5', '1 2 4 5', '1 2', 'Compilation Error'],
                    correct: 1,
                    explanation: 'The continue statement skips the rest of the current iteration, so 3 is not printed.'
                },
                {
                    id: 'loop_m2',
                    question: 'How many times will this loop execute?\n\nint i = 0;\nwhile(i < 10) {\n    i += 2;\n}',
                    options: ['5', '10', '4', 'Infinite'],
                    correct: 0,
                    explanation: 'i starts at 0 and increments by 2 each time: 0, 2, 4, 6, 8, 10. That\'s 5 iterations.'
                }
            ],
            hard: [
                {
                    id: 'loop_h1',
                    question: 'What is the output of this nested loop?\n\nfor(int i = 0; i < 2; i++) {\n    for(int j = 0; j < 2; j++) {\n        System.out.print(i + j + " ");\n    }\n}',
                    options: ['0 1 1 2', '0 0 1 1', '0 1 2 3', '1 2 2 3'],
                    correct: 0,
                    explanation: 'Outer loop: i=0, inner: j=0 (prints 0), j=1 (prints 1). Outer: i=1, inner: j=0 (prints 1), j=1 (prints 2).'
                }
            ]
        },
        arrays: {
            easy: [
                {
                    id: 'array_e1',
                    question: 'How do you declare an integer array of size 5 in Java?',
                    options: ['int arr[5];', 'int[] arr = new int[5];', 'array<int> arr(5);', 'int arr = new int[5];'],
                    correct: 1,
                    explanation: 'In Java, arrays are declared as: type[] name = new type[size];'
                },
                {
                    id: 'array_e2',
                    question: 'What is the index of the first element in an array?',
                    options: ['1', '0', '-1', 'Depends on declaration'],
                    correct: 1,
                    explanation: 'Java arrays are zero-indexed, meaning the first element is at index 0.'
                },
                {
                    id: 'array_e3',
                    question: 'How do you find the length of an array named "arr"?',
                    options: ['arr.length()', 'arr.size()', 'arr.length', 'arr.size'],
                    correct: 2,
                    explanation: 'Array length is accessed using the length property (not a method): arr.length'
                }
            ],
            medium: [
                {
                    id: 'array_m1',
                    question: 'What happens if you access arr[5] when arr has length 5?',
                    options: ['Returns 0', 'Returns null', 'ArrayIndexOutOfBoundsException', 'Compilation Error'],
                    correct: 2,
                    explanation: 'Valid indices are 0-4. Accessing index 5 throws ArrayIndexOutOfBoundsException.'
                },
                {
                    id: 'array_m2',
                    question: 'What is the output?\n\nint[] arr = {1, 2, 3, 4, 5};\nSystem.out.println(arr[2]);',
                    options: ['1', '2', '3', '4'],
                    correct: 2,
                    explanation: 'arr[2] accesses the third element (index 2), which is 3.'
                }
            ],
            hard: [
                {
                    id: 'array_h1',
                    question: 'What is the output?\n\nint[][] matrix = {{1,2},{3,4}};\nSystem.out.println(matrix[1][0]);',
                    options: ['1', '2', '3', '4'],
                    correct: 2,
                    explanation: 'matrix[1][0] accesses row 1 (second row), column 0 (first element), which is 3.'
                }
            ]
        },
        conditionals: {
            easy: [
                {
                    id: 'cond_e1',
                    question: 'What is the output?\n\nint x = 5;\nif(x > 3) {\n    System.out.println("Yes");\n} else {\n    System.out.println("No");\n}',
                    options: ['Yes', 'No', 'Compilation Error', 'Nothing'],
                    correct: 0,
                    explanation: 'Since 5 > 3 is true, the if block executes and prints "Yes".'
                },
                {
                    id: 'cond_e2',
                    question: 'Which operator represents "AND" in Java?',
                    options: ['&', '&&', 'AND', 'and'],
                    correct: 1,
                    explanation: 'The logical AND operator in Java is && (short-circuit evaluation).'
                },
                {
                    id: 'cond_e3',
                    question: 'What is the correct syntax for an if-else statement?',
                    options: ['if(condition) {} else {}', 'if condition {} else {}', 'if(condition): else:', 'if condition then else'],
                    correct: 0,
                    explanation: 'Java uses if(condition) {} else {} syntax with parentheses and curly braces.'
                }
            ],
            medium: [
                {
                    id: 'cond_m1',
                    question: 'What is the output?\n\nint x = 10;\nif(x > 5 && x < 15) {\n    System.out.println("A");\n} else {\n    System.out.println("B");\n}',
                    options: ['A', 'B', 'AB', 'Compilation Error'],
                    correct: 0,
                    explanation: 'Both conditions (x > 5 and x < 15) are true, so "A" is printed.'
                },
                {
                    id: 'cond_m2',
                    question: 'What is the output?\n\nint day = 3;\nswitch(day) {\n    case 1: System.out.print("Mon"); break;\n    case 2: System.out.print("Tue"); break;\n    case 3: System.out.print("Wed"); break;\n    default: System.out.print("Other");\n}',
                    options: ['Mon', 'Tue', 'Wed', 'Other'],
                    correct: 2,
                    explanation: 'day is 3, which matches case 3, so "Wed" is printed and break exits the switch.'
                }
            ],
            hard: [
                {
                    id: 'cond_h1',
                    question: 'What is the output?\n\nint x = 5;\nint y = (x > 3) ? 10 : 20;\nSystem.out.println(y);',
                    options: ['5', '10', '20', 'Compilation Error'],
                    correct: 1,
                    explanation: 'The ternary operator evaluates (x > 3), which is true, so y = 10.'
                }
            ]
        },
        methods: {
            easy: [
                {
                    id: 'method_e1',
                    question: 'What keyword is used to define a method in Java?',
                    options: ['function', 'def', 'method', 'No keyword needed'],
                    correct: 3,
                    explanation: 'Java methods are defined with access modifier, return type, and name (no special keyword like "function").'
                },
                {
                    id: 'method_e2',
                    question: 'What does "void" mean in a method declaration?',
                    options: ['Method is empty', 'Method returns nothing', 'Method is private', 'Method has no parameters'],
                    correct: 1,
                    explanation: 'void indicates that the method does not return any value.'
                },
                {
                    id: 'method_e3',
                    question: 'How do you call a method named "display"?',
                    options: ['display()', 'call display()', 'display;', 'run display()'],
                    correct: 0,
                    explanation: 'Methods are called by their name followed by parentheses: display()'
                }
            ],
            medium: [
                {
                    id: 'method_m1',
                    question: 'What is the output?\n\npublic static int add(int a, int b) {\n    return a + b;\n}\n\nSystem.out.println(add(3, 5));',
                    options: ['3', '5', '8', 'Compilation Error'],
                    correct: 2,
                    explanation: 'The add method returns 3 + 5 = 8.'
                },
                {
                    id: 'method_m2',
                    question: 'Can two methods have the same name in Java?',
                    options: ['No, never', 'Yes, if they have different parameters', 'Yes, if they have different return types', 'Only in different classes'],
                    correct: 1,
                    explanation: 'Method overloading allows same name with different parameters (number or type).'
                }
            ],
            hard: [
                {
                    id: 'method_h1',
                    question: 'What is the output?\n\npublic static void modify(int x) {\n    x = 10;\n}\n\nint num = 5;\nmodify(num);\nSystem.out.println(num);',
                    options: ['5', '10', 'Compilation Error', 'Runtime Error'],
                    correct: 0,
                    explanation: 'Java passes primitives by value. Changes inside modify() don\'t affect the original variable.'
                }
            ]
        },
        oop: {
            easy: [
                {
                    id: 'oop_e1',
                    question: 'What keyword is used to create a new object?',
                    options: ['create', 'new', 'object', 'make'],
                    correct: 1,
                    explanation: 'The "new" keyword is used to create instances of classes in Java.'
                },
                {
                    id: 'oop_e2',
                    question: 'What is a class in Java?',
                    options: ['A function', 'A blueprint for objects', 'A variable', 'A loop'],
                    correct: 1,
                    explanation: 'A class is a template or blueprint that defines the structure and behavior of objects.'
                },
                {
                    id: 'oop_e3',
                    question: 'What is encapsulation?',
                    options: ['Hiding data using private access', 'Creating multiple classes', 'Using loops', 'Handling exceptions'],
                    correct: 0,
                    explanation: 'Encapsulation is the practice of hiding internal data and exposing it through public methods.'
                }
            ],
            medium: [
                {
                    id: 'oop_m1',
                    question: 'What is inheritance in Java?',
                    options: ['Creating multiple objects', 'A class acquiring properties of another class', 'Hiding data', 'Overloading methods'],
                    correct: 1,
                    explanation: 'Inheritance allows a class to inherit fields and methods from a parent class using "extends".'
                },
                {
                    id: 'oop_m2',
                    question: 'Which keyword is used for inheritance?',
                    options: ['inherits', 'extends', 'implements', 'super'],
                    correct: 1,
                    explanation: 'The "extends" keyword is used to inherit from a class.'
                }
            ],
            hard: [
                {
                    id: 'oop_h1',
                    question: 'What is polymorphism?',
                    options: ['Having multiple constructors', 'Ability of objects to take many forms', 'Creating private variables', 'Using static methods'],
                    correct: 1,
                    explanation: 'Polymorphism allows objects to be treated as instances of their parent class, enabling method overriding.'
                }
            ]
        },
        exceptions: {
            easy: [
                {
                    id: 'exc_e1',
                    question: 'What keyword is used to handle exceptions?',
                    options: ['catch', 'handle', 'except', 'error'],
                    correct: 0,
                    explanation: 'The "catch" keyword is used with "try" to handle exceptions in Java.'
                },
                {
                    id: 'exc_e2',
                    question: 'What block always executes regardless of exception?',
                    options: ['try', 'catch', 'finally', 'always'],
                    correct: 2,
                    explanation: 'The "finally" block always executes, whether an exception occurs or not.'
                },
                {
                    id: 'exc_e3',
                    question: 'What keyword is used to manually throw an exception?',
                    options: ['throw', 'throws', 'raise', 'error'],
                    correct: 0,
                    explanation: 'The "throw" keyword is used to explicitly throw an exception.'
                }
            ],
            medium: [
                {
                    id: 'exc_m1',
                    question: 'What is the parent class of all exceptions?',
                    options: ['Error', 'Exception', 'Throwable', 'RuntimeException'],
                    correct: 2,
                    explanation: 'Throwable is the superclass of all errors and exceptions in Java.'
                },
                {
                    id: 'exc_m2',
                    question: 'Which exception is thrown for division by zero?',
                    options: ['NullPointerException', 'ArithmeticException', 'DivisionException', 'MathException'],
                    correct: 1,
                    explanation: 'ArithmeticException is thrown for arithmetic errors like division by zero.'
                }
            ],
            hard: [
                {
                    id: 'exc_h1',
                    question: 'What is the difference between checked and unchecked exceptions?',
                    options: ['Checked must be declared or caught', 'Unchecked must be declared', 'No difference', 'Checked are runtime errors'],
                    correct: 0,
                    explanation: 'Checked exceptions must be declared with "throws" or caught with try-catch. Unchecked exceptions don\'t require this.'
                }
            ]
        }
    },

    // Code-Fix Problems
    codeFixProblems: {
        loops: [
            {
                id: 'loop_fix1',
                title: 'Infinite Loop Bug',
                description: 'This code is supposed to print numbers 1 to 5, but it runs infinitely. Fix the bug.',
                buggyCode: `int i = 1;
while(i <= 5) {
    System.out.println(i);
}`,
                correctCode: `int i = 1;
while(i <= 5) {
    System.out.println(i);
    i++;
}`,
                hints: [
                    'Look at what happens to the variable i inside the loop',
                    'The loop condition depends on i, but i never changes',
                    'Add i++ inside the loop to increment i'
                ],
                explanation: 'The loop runs infinitely because i never changes. You need to increment i inside the loop.',
                commonMistake: 'Forgetting to update the loop control variable leads to infinite loops.'
            },
            {
                id: 'loop_fix2',
                title: 'Off-by-One Error',
                description: 'This code should print numbers 0 to 9 (10 numbers total), but it only prints 9 numbers. Fix it.',
                buggyCode: `for(int i = 0; i < 9; i++) {
    System.out.println(i);
}`,
                correctCode: `for(int i = 0; i < 10; i++) {
    System.out.println(i);
}`,
                hints: [
                    'Count how many times the loop executes',
                    'The condition i < 9 stops at i = 8',
                    'Change the condition to i < 10'
                ],
                explanation: 'The loop stops when i reaches 9, printing only 0-8. Change to i < 10 to print 10 numbers.',
                commonMistake: 'Off-by-one errors occur when loop bounds are incorrect.'
            },
            {
                id: 'loop_fix3',
                title: 'Missing Semicolon',
                description: 'This code has a syntax error. Find and fix it.',
                buggyCode: `for(int i = 0; i < 5; i++) {
    System.out.println(i)
}`,
                correctCode: `for(int i = 0; i < 5; i++) {
    System.out.println(i);
}`,
                hints: [
                    'Look at the end of each statement',
                    'Java statements must end with a semicolon',
                    'The println statement is missing something'
                ],
                explanation: 'Missing semicolon after System.out.println(i). Every statement in Java must end with a semicolon.',
                commonMistake: 'Forgetting semicolons is a common syntax error.'
            }
        ],
        arrays: [
            {
                id: 'array_fix1',
                title: 'Array Index Error',
                description: 'This code throws an ArrayIndexOutOfBoundsException. Fix it.',
                buggyCode: `int[] arr = new int[5];
for(int i = 0; i <= 5; i++) {
    arr[i] = i * 2;
}`,
                correctCode: `int[] arr = new int[5];
for(int i = 0; i < 5; i++) {
    arr[i] = i * 2;
}`,
                hints: [
                    'Arrays of size 5 have indices 0-4',
                    'The loop tries to access index 5',
                    'Change <= to < in the loop condition'
                ],
                explanation: 'Array indices go from 0 to length-1. Using i <= 5 tries to access arr[5], which doesn\'t exist.',
                commonMistake: 'Using <= instead of < causes index out of bounds errors.'
            },
            {
                id: 'array_fix2',
                title: 'Uninitialized Array',
                description: 'This code has a NullPointerException. Fix the array initialization.',
                buggyCode: `int[] numbers;
numbers[0] = 10;`,
                correctCode: `int[] numbers = new int[5];
numbers[0] = 10;`,
                hints: [
                    'The array is declared but not created',
                    'You need to use the "new" keyword',
                    'Initialize the array with a size'
                ],
                explanation: 'Declaring an array doesn\'t create it. You must use "new int[size]" to allocate memory.',
                commonMistake: 'Forgetting to initialize arrays with "new" causes NullPointerException.'
            }
        ],
        conditionals: [
            {
                id: 'cond_fix1',
                title: 'Assignment vs Comparison',
                description: 'This if statement always executes. Fix the condition.',
                buggyCode: `int x = 5;
if(x = 10) {
    System.out.println("x is 10");
}`,
                correctCode: `int x = 5;
if(x == 10) {
    System.out.println("x is 10");
}`,
                hints: [
                    'Look at the operator in the if condition',
                    'Single = is assignment, not comparison',
                    'Use == for comparison'
                ],
                explanation: 'Using = (assignment) instead of == (comparison) in conditions is a common mistake.',
                commonMistake: 'Confusing = (assignment) with == (equality comparison).'
            },
            {
                id: 'cond_fix2',
                title: 'Missing Break in Switch',
                description: 'This switch statement prints multiple cases. Fix it.',
                buggyCode: `int day = 2;
switch(day) {
    case 1: System.out.println("Monday");
    case 2: System.out.println("Tuesday");
    case 3: System.out.println("Wednesday");
}`,
                correctCode: `int day = 2;
switch(day) {
    case 1: System.out.println("Monday"); break;
    case 2: System.out.println("Tuesday"); break;
    case 3: System.out.println("Wednesday"); break;
}`,
                hints: [
                    'Switch cases "fall through" without break',
                    'Add break after each case',
                    'Break prevents execution of subsequent cases'
                ],
                explanation: 'Without break, execution continues to the next case (fall-through behavior).',
                commonMistake: 'Forgetting break in switch statements causes fall-through.'
            }
        ],
        methods: [
            {
                id: 'method_fix1',
                title: 'Missing Return Statement',
                description: 'This method should return an integer but doesn\'t. Fix it.',
                buggyCode: `public static int getSum(int a, int b) {
    int sum = a + b;
}`,
                correctCode: `public static int getSum(int a, int b) {
    int sum = a + b;
    return sum;
}`,
                hints: [
                    'Method declares return type "int"',
                    'No value is being returned',
                    'Add a return statement'
                ],
                explanation: 'Methods with non-void return types must return a value using the return keyword.',
                commonMistake: 'Forgetting return statements in non-void methods.'
            },
            {
                id: 'method_fix2',
                title: 'Parameter Type Mismatch',
                description: 'This method call has wrong argument types. Fix it.',
                buggyCode: `public static void printAge(int age) {
    System.out.println("Age: " + age);
}

printAge("25");`,
                correctCode: `public static void printAge(int age) {
    System.out.println("Age: " + age);
}

printAge(25);`,
                hints: [
                    'Method expects an int parameter',
                    'You\'re passing a String',
                    'Remove the quotes from 25'
                ],
                explanation: 'Method parameters must match the declared type. "25" is a String, not an int.',
                commonMistake: 'Passing wrong data types to methods causes compilation errors.'
            }
        ],
        oop: [
            {
                id: 'oop_fix1',
                title: 'Missing Constructor',
                description: 'This code tries to create an object but the constructor is missing. Fix it.',
                buggyCode: `class Person {
    String name;
    int age;
}

Person p = new Person("John", 25);`,
                correctCode: `class Person {
    String name;
    int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

Person p = new Person("John", 25);`,
                hints: [
                    'The class needs a constructor that accepts parameters',
                    'Constructor name must match class name',
                    'Add a constructor with String and int parameters'
                ],
                explanation: 'To create objects with parameters, you need a matching constructor.',
                commonMistake: 'Forgetting to define constructors when creating parameterized objects.'
            }
        ],
        exceptions: [
            {
                id: 'exc_fix1',
                title: 'Uncaught Exception',
                description: 'This code has a potential exception that isn\'t handled. Fix it.',
                buggyCode: `String str = null;
System.out.println(str.length());`,
                correctCode: `String str = null;
if(str != null) {
    System.out.println(str.length());
} else {
    System.out.println("String is null");
}`,
                hints: [
                    'Calling methods on null causes NullPointerException',
                    'Check if str is null before using it',
                    'Add an if statement to check for null'
                ],
                explanation: 'Always check for null before calling methods on objects to avoid NullPointerException.',
                commonMistake: 'Not checking for null before using objects.'
            }
        ]
    },

    // Fill-in-the-Code Problems
    fillInProblems: {
        loops: [
            {
                id: 'loop_fill1',
                title: 'Complete the For Loop',
                description: 'Fill in the blanks to create a loop that prints numbers 1 to 10.',
                codeTemplate: `for(int i = ___; i <= ___; i++) {
    System.out.println(i);
}`,
                blanks: [
                    { id: 'blank1', answer: '1', hint: 'Starting value for the loop' },
                    { id: 'blank2', answer: '10', hint: 'Ending value (inclusive)' }
                ],
                explanation: 'A for loop needs initialization (i = 1), condition (i <= 10), and increment (i++).',
                xpReward: 15
            },
            {
                id: 'loop_fill2',
                title: 'While Loop Condition',
                description: 'Complete the while loop to count down from 5 to 1.',
                codeTemplate: `int count = 5;
while(count ___ 0) {
    System.out.println(count);
    count___;
}`,
                blanks: [
                    { id: 'blank1', answer: '>', hint: 'Comparison operator to check if count is greater than 0' },
                    { id: 'blank2', answer: '--', hint: 'Decrement operator' }
                ],
                explanation: 'While loops continue as long as the condition is true. Use > to check and -- to decrement.',
                xpReward: 15
            }
        ],
        arrays: [
            {
                id: 'array_fill1',
                title: 'Array Declaration',
                description: 'Complete the array declaration and initialization.',
                codeTemplate: `int[] numbers = new int[___];
numbers[0] = 10;
numbers[___] = 20;
System.out.println(numbers.___);`,
                blanks: [
                    { id: 'blank1', answer: '5', hint: 'Size of the array' },
                    { id: 'blank2', answer: '1', hint: 'Index for the second element' },
                    { id: 'blank3', answer: 'length', hint: 'Property to get array size' }
                ],
                explanation: 'Arrays are declared with a size, indexed from 0, and have a length property.',
                xpReward: 15
            }
        ],
        conditionals: [
            {
                id: 'cond_fill1',
                title: 'If-Else Statement',
                description: 'Complete the if-else statement to check if a number is positive.',
                codeTemplate: `int num = 10;
if(num ___ 0) {
    System.out.println("Positive");
} ___ {
    System.out.println("Not positive");
}`,
                blanks: [
                    { id: 'blank1', answer: '>', hint: 'Comparison operator for greater than' },
                    { id: 'blank2', answer: 'else', hint: 'Keyword for the alternative branch' }
                ],
                explanation: 'If-else statements use comparison operators and the else keyword for alternatives.',
                xpReward: 15
            }
        ],
        methods: [
            {
                id: 'method_fill1',
                title: 'Method Declaration',
                description: 'Complete the method that returns the sum of two numbers.',
                codeTemplate: `public ___ add(int a, int b) {
    ___ a + b;
}`,
                blanks: [
                    { id: 'blank1', answer: 'int', hint: 'Return type of the method' },
                    { id: 'blank2', answer: 'return', hint: 'Keyword to return a value' }
                ],
                explanation: 'Methods specify return type and use return keyword to send back values.',
                xpReward: 15
            }
        ],
        oop: [
            {
                id: 'oop_fill1',
                title: 'Class Declaration',
                description: 'Complete the class with a constructor.',
                codeTemplate: `public class Person {
    private String name;
    
    public ___(String n) {
        this.___ = n;
    }
}`,
                blanks: [
                    { id: 'blank1', answer: 'Person', hint: 'Constructor name matches class name' },
                    { id: 'blank2', answer: 'name', hint: 'Instance variable to assign' }
                ],
                explanation: 'Constructors have the same name as the class and use "this" to refer to instance variables.',
                xpReward: 15
            }
        ],
        exceptions: [
            {
                id: 'exc_fill1',
                title: 'Try-Catch Block',
                description: 'Complete the exception handling code.',
                codeTemplate: `try {
    int result = 10 / 0;
} ___(ArithmeticException e) {
    System.out.println("Error: " + e.___());
}`,
                blanks: [
                    { id: 'blank1', answer: 'catch', hint: 'Keyword to handle exceptions' },
                    { id: 'blank2', answer: 'getMessage', hint: 'Method to get error message' }
                ],
                explanation: 'Try-catch blocks use catch to handle exceptions and getMessage() to get error details.',
                xpReward: 15
            }
        ]
    },

    // Sample Students for Teacher Dashboard
    students: [
        {
            id: 'STU001',
            name: 'Alex Chen',
            username: 'student1',
            currentLevel: 'medium',
            weakTopics: ['loops', 'arrays'],
            codeSuccessRate: 65,
            totalQuestions: 45,
            correctAnswers: 32,
            topicPerformance: {
                loops: { attempted: 12, correct: 6, failureStreak: 3, mode: 'code-fix' },
                arrays: { attempted: 10, correct: 5, failureStreak: 2, mode: 'code-fix' },
                conditionals: { attempted: 8, correct: 7, failureStreak: 0, mode: 'mcq' },
                methods: { attempted: 7, correct: 6, failureStreak: 0, mode: 'mcq' },
                oop: { attempted: 5, correct: 4, failureStreak: 0, mode: 'mcq' },
                exceptions: { attempted: 3, correct: 4, failureStreak: 0, mode: 'mcq' }
            },
            improvementTrend: [45, 52, 58, 62, 65],
            lastActive: '2026-02-16T10:30:00'
        },
        {
            id: 'STU002',
            name: 'Maria Garcia',
            username: 'student2',
            currentLevel: 'easy',
            weakTopics: ['methods'],
            codeSuccessRate: 78,
            totalQuestions: 38,
            correctAnswers: 30,
            topicPerformance: {
                loops: { attempted: 10, correct: 8, failureStreak: 0, mode: 'mcq' },
                arrays: { attempted: 8, correct: 7, failureStreak: 0, mode: 'mcq' },
                conditionals: { attempted: 7, correct: 6, failureStreak: 0, mode: 'mcq' },
                methods: { attempted: 8, correct: 4, failureStreak: 3, mode: 'code-fix' },
                oop: { attempted: 3, correct: 3, failureStreak: 0, mode: 'mcq' },
                exceptions: { attempted: 2, correct: 2, failureStreak: 0, mode: 'mcq' }
            },
            improvementTrend: [65, 70, 73, 76, 78],
            lastActive: '2026-02-16T09:15:00'
        },
        {
            id: 'STU003',
            name: 'James Wilson',
            username: 'student3',
            currentLevel: 'hard',
            weakTopics: [],
            codeSuccessRate: 92,
            totalQuestions: 52,
            correctAnswers: 48,
            topicPerformance: {
                loops: { attempted: 12, correct: 11, failureStreak: 0, mode: 'mcq' },
                arrays: { attempted: 10, correct: 9, failureStreak: 0, mode: 'mcq' },
                conditionals: { attempted: 9, correct: 9, failureStreak: 0, mode: 'mcq' },
                methods: { attempted: 8, correct: 7, failureStreak: 0, mode: 'mcq' },
                oop: { attempted: 7, correct: 6, failureStreak: 0, mode: 'mcq' },
                exceptions: { attempted: 6, correct: 6, failureStreak: 0, mode: 'mcq' }
            },
            improvementTrend: [85, 87, 89, 91, 92],
            lastActive: '2026-02-16T11:00:00'
        },
        {
            id: 'STU004',
            name: 'Priya Patel',
            username: 'student4',
            currentLevel: 'medium',
            weakTopics: ['oop', 'exceptions'],
            codeSuccessRate: 71,
            totalQuestions: 41,
            correctAnswers: 29,
            topicPerformance: {
                loops: { attempted: 9, correct: 7, failureStreak: 0, mode: 'mcq' },
                arrays: { attempted: 8, correct: 6, failureStreak: 0, mode: 'mcq' },
                conditionals: { attempted: 7, correct: 6, failureStreak: 0, mode: 'mcq' },
                methods: { attempted: 6, correct: 5, failureStreak: 0, mode: 'mcq' },
                oop: { attempted: 7, correct: 3, failureStreak: 3, mode: 'code-fix' },
                exceptions: { attempted: 4, correct: 2, failureStreak: 2, mode: 'mcq' }
            },
            improvementTrend: [58, 63, 67, 69, 71],
            lastActive: '2026-02-16T08:45:00'
        },
        {
            id: 'STU005',
            name: 'Mohammed Ali',
            username: 'student5',
            currentLevel: 'easy',
            weakTopics: ['loops', 'conditionals', 'arrays'],
            codeSuccessRate: 54,
            totalQuestions: 35,
            correctAnswers: 19,
            topicPerformance: {
                loops: { attempted: 10, correct: 4, failureStreak: 4, mode: 'code-fix' },
                arrays: { attempted: 8, correct: 3, failureStreak: 3, mode: 'code-fix' },
                conditionals: { attempted: 7, correct: 4, failureStreak: 2, mode: 'mcq' },
                methods: { attempted: 5, correct: 4, failureStreak: 0, mode: 'mcq' },
                oop: { attempted: 3, correct: 2, failureStreak: 0, mode: 'mcq' },
                exceptions: { attempted: 2, correct: 2, failureStreak: 0, mode: 'mcq' }
            },
            improvementTrend: [42, 46, 49, 52, 54],
            lastActive: '2026-02-16T07:30:00'
        },
        {
            id: 'STU006',
            name: 'Emily Zhang',
            username: 'student6',
            currentLevel: 'medium',
            weakTopics: ['exceptions'],
            codeSuccessRate: 83,
            totalQuestions: 44,
            correctAnswers: 37,
            topicPerformance: {
                loops: { attempted: 10, correct: 9, failureStreak: 0, mode: 'mcq' },
                arrays: { attempted: 9, correct: 8, failureStreak: 0, mode: 'mcq' },
                conditionals: { attempted: 8, correct: 7, failureStreak: 0, mode: 'mcq' },
                methods: { attempted: 7, correct: 6, failureStreak: 0, mode: 'mcq' },
                oop: { attempted: 6, correct: 5, failureStreak: 0, mode: 'mcq' },
                exceptions: { attempted: 4, correct: 2, failureStreak: 2, mode: 'mcq' }
            },
            improvementTrend: [72, 76, 79, 81, 83],
            lastActive: '2026-02-16T10:00:00'
        }
    ],

    // Initialize student data in localStorage if not exists
    initializeStudentData(username) {
        const key = `student_${username}`;
        if (!localStorage.getItem(key)) {
            const defaultData = {
                currentLevel: 'easy',
                topicPerformance: {},
                totalQuestions: 0,
                correctAnswers: 0,
                improvementTrend: [0],
                lastActive: new Date().toISOString()
            };

            // Initialize all topics
            Object.keys(this.topics).forEach(topic => {
                defaultData.topicPerformance[topic] = {
                    attempted: 0,
                    correct: 0,
                    failureStreak: 0,
                    mode: 'mcq'
                };
            });

            localStorage.setItem(key, JSON.stringify(defaultData));
        }
    },

    // Get student data
    getStudentData(username) {
        this.initializeStudentData(username);
        return JSON.parse(localStorage.getItem(`student_${username}`));
    },

    // Update student data
    updateStudentData(username, data) {
        localStorage.setItem(`student_${username}`, JSON.stringify(data));
    },

    // Load students from localStorage on init
    loadStudentsFromStorage() {
        const savedStudents = localStorage.getItem('platformStudents');
        if (savedStudents) {
            const students = JSON.parse(savedStudents);
            // Merge with existing demo students (avoid duplicates)
            students.forEach(student => {
                const exists = this.students.find(s => s.username === student.username);
                if (!exists) {
                    this.students.push(student);
                }
            });
        }
    }
};

// Load students from localStorage on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => DATA.loadStudentsFromStorage());
} else {
    DATA.loadStudentsFromStorage();
}
