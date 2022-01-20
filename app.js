'use strict';
/**
 * Example store structure
 */

const store = {
  questions: [
    // Introduction to RPA and Automation
    {
      question: 'With StudioX you can automate...',
      answers: [
        'Moving values from one Excel sheet to another or from Excel to a web application. OR, Downloading a report and sending it via email to predefined users.',
        'End to end invoice processing through multiple platforms.',
        'A chatbot that sends weekly work related reminders.'
      ],
      correctAnswer: 1
    },
    {
      question: 'There\’s a lot of talk about what the future of work will entail. Besides the technological approach, a learning strategy for the employees must be put in place when getting started with RPA.',
      answers: [
        'False',
        'True'
      ],
      correctAnswer: 2
    },
    {
      question: 'RPA will not work in creative industries.',
      answers: [
        'False',
        'True'
      ],
      correctAnswer: 1
    },
    {
      question: 'Processing invoices - retrieving data from the invoices and storing the values in a database can be performed using…',
      answers: [
        'AI',
        'RPA',
        'AI + RPA'
      ],
      correctAnswer: 3
    },
    {
      question: 'What does RPA stand for?',
      answers: [
        'Robotic Processing Automation',
        'Robotic Process Analysis',
        'Robotic Process Automation'
      ],
      correctAnswer: 3
    },
    {
      question: 'Only low-skill jobs will be impacted by automation.',
      answers: [
        'False',
        'True'
      ],
      correctAnswer: 1
    },

    // Get Started with RPA Development
    {
      question: 'Which type of robot can you provision by using the sign in feature?',
      answers: [
        'Only unattended robots',
        'Both unattended and attended robots',
        'Only attended robots'
      ],
      correctAnswer: 3
    },
    {
      question: 'How can you add activities to your Studio project?',
      answers: [
        'From the Properties panel',
        'From the Output panel',
        'From the Project panel',
        'From the Activities panel'
      ],
      correctAnswer: 4
    },
    {
      question: 'Which of the following actions NOT have to be taken in order to run a job on an attended robot connected to the cloud Orchestrator?',
      answers: [
        'The user has a Studio Pro license',
        'The user was added in Automation Cloud',
        'An automation process was published in Orchestrator, in a folder to which the user has access to',
        'The user is signed in to Orchestrator'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which of the following statements about robots are false?',
      answers: [
        'You can run jobs from Orchestrator both on attended and unattended robots. Attended robots cannot run automation processes published to Orchestrator',
        'Attended users can run automation jobs using UiPath Assistant',
        'Unattended robots are typically deployed on separate machines'
      ],
      correctAnswer: 1
    },

    // Variables, Arguments, and Control Flow in Studio
    {
      question: 'Consider an Int32 variable (Counter), initially assigned with the value 10. The value decreases by 1 every time a sequence is executed in a Do While activity. How many times will the sequence be executed if the expression in the Condition field of the Do While activity is V > 0? ',
      answers: [
        '11',
        '9',
        '10'
      ],
      correctAnswer: 3
    },
    {
      question: 'What is the correct way to concatenate a string variable (Username) with a string (" is online")?',
      answers: [
        'Username  + " is online"',
        '"Username" + " is online"',
        'Username +  is online'
      ],
      correctAnswer: 1
    },
    {
      question: 'Fill in the following sentence: " ... are used to pass data from one workflow file to another in UiPath Studio."',
      answers: [
        'Both Variables and Arguments',
        'Only Arguments',
        'Only Variables'
      ],
      correctAnswer: 2
    },
    {
      question: 'When running a job, will all the automation ".xaml" files included in the project be executed?',
      answers: [
        'No, only workflows containing arguments will be executed.',
        'Yes, because data is passed between workflows using arguments. ',
        'No, only files linked to the Main.xaml through the Invoke Workflow File activity will be executed.',
        'Yes, because we can test and run any workflow separately.'
      ],
      correctAnswer: 3
    },
    {
      question: 'You are saving the input from users to a variable of String type in Main.xaml.  The user info is stored in an Excel spreadsheet by a Write Range activity added in WriteData.xaml. WriteData.xaml is invoked in Main.xaml. What direction will your argument have?',
      answers: [
        'In',
        'In/Out',
        'Out'
      ],
      correctAnswer: 1
    },
    {
      question: 'Consider the array UserNames = { "John", "Jane", "Dave", "Sandra"}. What value will the expression UserNames(1) return?',
      answers: [
        '"Jane"',
        '"Sandra"',
        '"John"',
        '"Dave"'
      ],
      correctAnswer: 1
    },
    {
      question: 'How can you create a new variable in UiPath Studio?',
      answers: [
        'Press Ctrl+K in an input field that requires a variable in the Properties panel. Select the Create new Variable option in the Variables panel. Press Ctrl+K in an activity input field that requires a variable.',
        'Press Ctrl+Shift+K in an activity input field that requires a variable',
        'Press Ctrl+Shift+K in an input field that requires a variable in the Properties panel'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which activity can be used to process every item in a collection individually?',
      answers: [
        'While',
        'For Each',
        'Do While'
      ],
      correctAnswer: 2
    },
    {
      question: 'Which of the characteristics below NOT make a process more suitable for RPA automation?',
      answers: [
        'Rule-based',
        'Stable',
        'Repetitive',
        'High exception rate'
      ],
      correctAnswer: 4
    },
    
    // UI Automation with Studio
    {
      question: 'You have just created a new project. How would you set the modern design experience as default only for this specific project? ',
      answers: [
        'Activities Panel > Filter',
        'Project Settings > General',
        'Manage Packages > Install the Modern Activities pack',
        'Backstage View > Settings > Design'
      ],
      correctAnswer: 2
    },
    {
      question: 'Which of the following options should NOT be considered in case a regular selector becomes unreliable during automation development? ',
      answers: [
        'Using the Image targeting method.',
        'Try using Fuzzy Selectors.',
        'Chose a different UI element to automate.',
        'Using Anchors to pin point the UI element.'
      ],
      correctAnswer: 3
    },
    {
      question: 'Before creating a robot path that defines a UI automation project, RPA Developers first need to: ',
      answers: [
        'Identify the human path that achieves the same goal by breaking down each individual step.',
        'Understand the job description of the human that the automation replaces.',
        'Create a sample workflow using as little activities as possible.'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which of the following statements are NOT true? ',
      answers: [
        'Developers can use modern and classic activities regardless of the automation project\'s design experience.',
        'Object repository is only available in the modern design experience.',
        'In overall UI automation scenarios, more than 90% of classic activities utilize the most reliable targeting method, namely Image.',
        'Modern activities uses a targeting technology called Unified Target that cycles through all of the available targeting methods.'
      ],
      correctAnswer: 3
    },
    {
      question: 'Which of the following output activities extracts the hidden text from a UI element?',
      answers: [
        'Get OCR Text',
        'Get Visible Text',
        'Get Full Text'
      ],
      correctAnswer: 3
    },
    {
      question: 'Which of the following activities has a Boolean variable as the output?',
      answers: [
        'Element Exists',
        'On Element Appears',
        'Find Element'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which are the steps of RPA implementations?',
      answers: [
        'Prepare RPA / Opportunity Assessment / Solution Design / Build RPA / Test RPA / Stabilize RPA / Constant improvement',
        'Prepare RPA / Solution Design / Build RPA / Test RPA / Stabilize RPA / Constant improvement',
        'Prepare RPA / Solution Design / Build RPA / Implement RPA / Constant improvement',
        'Prepare RPA / Design RPA / Develop RPA / Test RPA / Implement RPA'
      ],
      correctAnswer: 2
    },
    {
      question: 'What happens when a Find Element activity does not find the desired element within the set Timeout property?',
      answers: [
        'The activity returns a False value in a Boolean variable.',
        'The next activity is executed.',
        'The activity throws an exception and stops the execution'
      ],
      correctAnswer: 3
    },
    {
      question: 'Which of the following factors will NOT increase the complexity of a potential automation?',
      answers: [
        'The number of decision points in the business logic',
        'Inputs that cannot be standardized',
        'Having clear rules for each step',
        'Legacy applications'
      ],
      correctAnswer: 3
    },
    {
      question: 'Which of the following are NOT input actions?',
      answers: [
        'Click',
        'Get Text',
        'Send Hotkey',
        'Type into'
      ],
      correctAnswer: 2
    },
    {
      question: 'In which panel can you see the results of the Log Message or Write Line activities?',
      answers: [
        'Outline',
        'Project',
        'Properties',
        'Activities',
        'Output'
      ],
      correctAnswer: 5
    },
    {
      question: 'An automation process using UI Interaction activities set to the default input method is running on Michelle\'s machine. Would you recommend that Michelle works on her machine while the process is running?',
      answers: [
        'No',
        'Yes'
      ],
      correctAnswer: 1
    },

    // DataTables and Excel Automation with Studio
    {
      question: 'From an automation potential standpoint, a process in which changes are frequent, the system environment is volatile, and multiple manual (even non-digital) actions are required belongs to the...',
      answers: [
        'High-cost RPA category',
        'No RPA category',
        'Semi-automation category',
        'None of the above'
      ],
      correctAnswer: 2
    },
    {
      question: 'Which activity can be used to read an entire sheet from an Excel file?',
      answers: [
        'Get Table Range',
        'Read Cell',
        'Read Range'
      ],
      correctAnswer: 3
    },
    {
      question: 'This project type is recommended for simple, linear workflows without multiple decision nodes.',
      answers: [
        'Sequence',
        'State Machine',
        'Flowchart'
      ],
      correctAnswer: 1
    },
    {
      question: 'Can activities which require an Excel Application Scope run on a machine that does not have the Excel application installed? ',
      answers: [
        'Yes, but only for .xls files',
        'Yes, but only for .xlsx files',
        'Yes, for every Excel file type',
        'No, these activities require Excel to be installed'
      ],
      correctAnswer: 4
    },
    {
      question: 'Which activity would be your first choice to loop through all the rows of a data table?',
      answers: [
        'Join Data Tables',
        'For Each Row',
        'For Each',
        'While'
      ],
      correctAnswer: 2
    },
    {
      question: 'The body of a loop is executed at least once when this activity is used.',
      answers: [
        'For Each',
        'While',
        'Do While'
      ],
      correctAnswer: 3
    },
    {
      question: 'You have included a Sort Data Table activity in your workflow.  The DataTable variable is called dt_Usernames. The Input DataTable field is set to the dt_Usernames variable and the Output DataTable field is also set to dt_Usernames. The activity will sort the Data Table values and...',
      answers: [
        'display them in the Output panel',
        'store them in the same variable',
        'store them in an Excel file',
        'store them in a .CSV file',
        'store them a different variable'
      ],
      correctAnswer: 2
    },
    {
      question: 'What activity can you use to write a data table to a string variable?',
      answers: [
        'Output Data Table',
        'Write Range',
        'Generate Data Table',
        'Merge Data Table'
      ],
      correctAnswer: 1
    },
    {
      question: 'What happens if you use a Write Range activity and try to write data in an .xlsx file that does not exist?',
      answers: [
        'It will throw an error.',
        'It will create that file for you and write the data in it.',
        'It will continue the execution without writing the data.'
      ],
      correctAnswer: 2
    },
    {
      question: 'Which of the following activities can you use if you want to add data to an existing .xlsx document without overwriting existing data?',
      answers: [
        'Workbook Append Range, OR Excel Append Range',
        'Workbook Write Range',
        'Excel Write Cell'
      ],
      correctAnswer: 1
    },

    // Data Manipulation in Studio
    {
      question: 'Consider a dictionary variable (BirthDates), of type String, String, that contains name and birth date pairs. They key values are the names. You want to add a new key / value pair using an Assign Activity (John Doe, Apr/20/1980). What expressions would you enter in the To and Value fields of the Assign activity?',
      answers: [
        'To: BirthDates(John Doe) Value: "Apr/20/1980"',
        'To: BirthDates("Apr/20/1980") Value: "John Doe"',
        'To: "John Doe" Value: "Birth Dates"',
        'To: BirthDates("John Doe") Value: "Apr/20/1980"'
      ],
      correctAnswer: 4
    },
    {
      question: 'Consider the string variable Letters = "abcdefg". What value would the expression Letters.Substring(1,2) return?',
      answers: [
        '"ab"',
        '"bc"',
        '"abc"',
        '"bcd"'
      ],
      correctAnswer: 2
    },
    {
      question: 'Consider the list of strings ListOfContinents = {"Africa", "Antarctica", "Asia", "Australia", "Europe", "North America", "South America"}. What value will the expression ListOfContinents(2) return?',
      answers: [
        'Antarctica',
        'Asia',
        'Australia',
        'None, objects are not identified by their index in lists'
      ],
      correctAnswer: 2
    },
    {
      question: 'What value will the following expression return? String.Format("{1} is {0}", "home", "John", "far away", 0, 1)',
      answers: [
        '"John is home"',
        '"Home is far away"',
        '"John is far away"',
        '"1 is 0"'
      ],
      correctAnswer: 1
    },
    {
      question: 'Typical uses of RegEx include:',
      answers: [
        'Debugging',
        'String parsing, String manipulation, Data scraping, Input validation',
        'Interacting with UI elements'
      ],
      correctAnswer: 2
    },
    {
      question: 'What is the best collection data type to store several cake recipes (names and ingredients)?',
      answers: [
        'Dictionary',
        'Array',
        'List'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which of the following methods can be used to populate a list of strings type variable with the values John, Paul, George and Ringo?',
      answers: [
        'Leave the Default value blank and use Add To Collection activities to populate the list.',
        'Set the Default value in the Variables panel to New List(of String) from {"John", "Paul", "George", "Ringo"}, OR Initiate the variable with New List(of String) and use Add To Collection activities to populate the list.',
        'Set the Default value in the Variables panel to {"John", "Paul", "George", "Ringo"}'
      ],
      correctAnswer: 2
    },
    {
      question: 'Which activity can be used to write the content of a DataTable into a String?',
      answers: [
        'Generate Data Table',
        'Clear Data Table',
        'Output Data Table'
      ],
      correctAnswer: 3
    },
    {
      question: 'What expression would you use to instantiate a dictionary object that pairs names (key) with ages (value)?',
      answers: [
        'New Dictionary(of String, Int32)',
        'Dictionary (Int32, String)',
        'Dictionary (String, Int32)',
        'New Dictionary(of Int32, String)'
      ],
      correctAnswer: 1
    },

    // Selectors in Studio
    {
      question: 'You have the string variable invoiceNumber = "INV 1432" and you want to replace the last four digits with "1526". Which of the following expressions would achieve this?',
      answers: [
        'InvoiceNumber.Replace(4,4, "1526)',
        'InvoiceNumber.Replace("1432", "1526")',
        'Replace.InvoiceNumber(4, "1526")',
        'Replace.InvoiceNumber("1526", "1432")'
      ],
      correctAnswer: 2
    },
    {
      question: 'What is a Selector?',
      answers: [
        'The “path” to the UI element, starting from the root, all the way to the target element.',
        'The unique ID of an UI element.',
        'A container for UI elements.'
      ],
      correctAnswer: 1
    },
    {
      question: 'How can you improve the following calendar page selector to work for all dates in 2020, but only 2020? “&lt;html app\\=\'chrome.exe\' title\\=\'UiPath - Calendar - Week of May 1, 2020\' /&gt;”',
      answers: [
        '“&lt;html app\\=\'chrome.exe\' title\\=\'UiPath - Calendar -* 202?\' /&gt; “',
        '“&lt;html app\\=\'chrome.exe\' title\\=\'UiPath - Calendar - * 2020\' /&gt;',
        '“&lt;html app\\=\'chrome.exe\' title\\=\'UiPath - Calendar - Week of ?????, 2020\' /&gt;”',
        '“&lt;html app\\=\'chrome.exe\' title\\=\'UiPath - Calendar - * /&gt;”'
      ],
      correctAnswer: 2
    },
    {
      question: 'What is the type of selector that is generated when you use a Type Into activity in a container such as Open Browser?',
      answers: [
        'A full selector',
        'A partial selector',
        'A dynamic selector'
      ],
      correctAnswer: 2
    },
    {
      question: 'What activity would you use to eliminate an unnecessary column in a DataTable?',
      answers: [
        'Delete from Collection',
        'Remove from Collection',
        'Remove Data Column',
        'Delete Data Column'
      ],
      correctAnswer: 3
    },
    {
      question: 'What is UiExplorer used for?',
      answers: [
        'To explore the UI tree, To create and fine tune selectors',
        'To explore the workflow tree',
        'UiExplorer is not a component of UiPath'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which one of the nodes of a selector is named the "root node"?',
      answers: [
        'Neither of the two',
        'The lowest-level node, corresponding to the GUI element',
        'The highest-level node, corresponding to the application'
      ],
      correctAnswer: 3
    },
    {
      question: 'This is a reliable selector for a dynamic page: "webctrl idx\\=\'144\' tag\\=\'IMG\'/".',
      answers: [
        'False',
        'True'
      ],
      correctAnswer: 1
    },
    {
      question: 'When fine-tuning a selector, how many characters does “*” replace?',
      answers: [
        'Zero',
        'Zero or more',
        'Exactly one',
        'One or more'
      ],
      correctAnswer: 2
    },

    // Project Organization in Studio
    {
      question: 'Which variable type is fit for datasets of single values whose number is liable to change?',
      answers: [
        'Dictionary',
        'List',
        'Array'
      ],
      correctAnswer: 2
    },
    {
      question: 'We want to create a robot that searches for weather information daily and then creates a report based on it. What is the best type of workflow to use?',
      answers: [
        'Sequence',
        'Flowchart',
        'State Machine'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which factor is NOT considered as criteria for breaking down a project into different workflows?',
      answers: [
        'Using more than one application',
        'Having sets of activities serving different purposes in the same project',
        'Using decision points inside automation projects'
      ],
      correctAnswer: 3
    },
    {
      question: 'We want to send a current date value outside of an invoked workflow. What is a good name for the argument?',
      answers: [
        'in_CurrentDate',
        'CurrentDate',
        'out_CurrentDate',
        'io_CurrentDate'
      ],
      correctAnswer: 3
    },
    {
      question: 'You can use the Simulate input method to send hotkeys.',
      answers: [
        'False',
        'True'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which of the following statements is NOT true regarding the Find Element activity?',
      answers: [
        'It throws an exception if it doesn\’t find the element on screen.',
        'It returns a Boolean(True or False) specifying if the element was found on screen.',
        'It returns the found element in a variable for later use.'
      ],
      correctAnswer: 2
    },
    {
      question: 'We need to automate a logistics process that pairs goods in several warehouses with transporters according to certain rules. It configures shipments, it calculates costs and sends daily orders. The process is continuous. What is the best type of workflow to use? ',
      answers: [
        'Sequence',
        'State Machine',
        'Flowchart'
      ],
      correctAnswer: 2
    },
    {
      question: 'Which of the following criteria can be considered breakdown criteria for splitting large workflows?',
      answers: [
        'The purpose of a certain operation (login, processing, reading a document using OCR, filling in a template, and so on). The application that is being automated. The length of each workflow.',
        'The data types used.',
        'The length of timeout properties.'
      ],
      correctAnswer: 1
    },
    {
      question: 'What are the principles an UiPath implementation should follow?',
      answers: [
        'Unattended',
        'Efficient, Reliable, Extensible, Maintainable',
        'Floating'
      ],
      correctAnswer: 2
    },

    // Debugging in Studio
    {
      question: 'What happens when you click an activity or container in the Call Stack Panel?',
      answers: [
        'Nothing.',
        'It starts execution from that activity or container.',
        'You focus on it.'
      ],
      correctAnswer: 3
    },
    {
      question: 'Where can you find the Run from this Activity, Run to this Activity and Test activity actions?',
      answers: [
        'In the activity contextual menu in the Activities panel',
        'In the Properties panel',
        'In the Locals panel',
        'In the activity contextual menu in the Designer panel'
      ],
      correctAnswer: 4
    },
    {
      question: 'What information can you follow in the Watch panel?',
      answers: [
        'The next activity to be executed and its parent containers when the project is paused in debugging. ',
        'The output of log message and write line activities.',
        'The values of variables or arguments, and the values of user-defined expressions that are in scope. '
      ],
      correctAnswer: 3
    },
    {
      question: 'What information does the Call Stack Panel display?',
      answers: [
        'The next activity to be executed and its parent containers.',
        'The next container to be executed and its children containers and activities.',
        'The previous activity to be executed and its parent containers.'
      ],
      correctAnswer: 1
    },
    {
      question: 'You can check the current value of a complex expression in the Immediate Panel.',
      answers: [
        'True',
        'False'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which panel would you use to create a Test Bench?',
      answers: [
        'The Designer panel',
        'The Project panel',
        'The Locals panel',
        'The Activities panel'
      ],
      correctAnswer: 4
    },
    {
      question: 'From which panels can you directly add variables to the Watch panel?',
      answers: [
        'The Watch panel, The Variables panel, The Locals panel',
        'The Immediate panel',
        'The Activities panel',
        'The Designer panel'
      ],
      correctAnswer: 1
    },
    {
      question: 'Where is the output of Log Message or Write Line activities displayed?',
      answers: [
        'The Immediate panel',
        'The Call Stack panel',
        'The Watch panel',
        'The Breakpoints panel',
        'The Output panel'
      ],
      correctAnswer: 5
    },
    {
      question: 'Which key combination would you use to activate IntelliPrompt in the Immediate Panel?',
      answers: [
        'Ctrl + Enter',
        'Ctrl + Space',
        'Ctrl + I',
        'Ctrl + P'
      ],
      correctAnswer: 2
    },
    {
      question: 'Where will changing a variable in the Immediate Panel be reflected?',
      answers: [
        'The Watch panel, The Locals panel, The further execution of the workflow in debug mode',
        'The execution of the workflow at runtime',
        'The Output panel'
      ],
      correctAnswer: 1
    },
    {
      question: 'What is the default action of the Play button in the Ribbon?',
      answers: [
        'Debug Current File',
        'Run Current File',
        'Run Project',
        'Debug Project'
      ],
      correctAnswer: 1
    },
    {
      question: 'What happens if you close a Test Bench tab without saving the workflow?',
      answers: [
        'You lose your Test Bench workflow.',
        'Nothing, it will be there when you open another.',
        'It gets saved in the Projects Panel by default.'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which of the following are types of information you can find in the Locals Panel?',
      answers: [
        'Properties of the previously executed activity, Argument values, Properties of the current activity, Exceptions, Variable values',
        'All Activity containers',
        'Breakpoints'
      ],
      correctAnswer: 1
    },

    // Error and Exception Handling in Studio
    {
      question: 'When the Extract as Workflow option is used…',
      answers: [
        'variables are automatically turned into arguments.',
        'you need to replace the variables with arguments by hand.',
        'you can use variables to pass information between the main workflow and the extracted one.'
      ],
      correctAnswer: 1
    },
    {
      question: 'You have more than one exception type defined in the Catch block and an exception occurs that fits two types. Which block is executed?',
      answers: [
        'The first match defined',
        'The block with most specific match',
        'All matching blocks in the order they are defined',
        'The block with most generic match'
      ],
      correctAnswer: 2
    },
    {
      question: 'What is it recommended to have in a Catch block?',
      answers: [
        'A LogMessage activity, An alternative to the approach that fails',
        'Nothing',
        'An Input Dialog activity'
      ],
      correctAnswer: 1
    },
    {
      question: 'What can you use to make sure that the execution continues even if an activity fails?',
      answers: [
        'The Throw activity',
        'The Try/Catch activity',
        'The DelayAfter property',
        'The TimeoutMS property'
      ],
      correctAnswer: 2
    },
    {
      question: 'Can you store a Selector in a variable to be used in the Selector property of an activity?',
      answers: [
        'Yes, of type UiElement',
        'No',
        'Yes, of type Int32',
        'Yes, of type String'
      ],
      correctAnswer: 4
    },
    {
      question: 'What is the maximum number of catches you can have in a Try/Catch block?',
      answers: [
        '1',
        '5',
        '2',
        'There is no limit on the number of catches.'
      ],
      correctAnswer: 4
    },
    {
      question: 'The Global Exception Handler is ...... designed to determine the project\’s behavior when encountering an execution error.',
      answers: [
        'a property',
        'a type of workflow',
        'an activity',
        'a menu'
      ],
      correctAnswer: 2
    },
    {
      question: 'The Retry Scope activity can be used without a termination condition. In this case it will...',
      answers: [
        'throw an exception.',
        'retry the activities until no exception occurs (or the provided number of attempts is exceeded).',
        'retry the activities indefinitely.'
      ],
      correctAnswer: 2
    },
    {
      question: 'What is the most effective way to handle the click on a UI Element that is not always available?',
      answers: [
        'Use an Element Exists activity and then a Click activity.',
        'Set the ContinueOnError property of the Click activity to True.',
        'Place the Click activity inside a Try/Catch block.'
      ],
      correctAnswer: 3
    },

    // Introduction to Logging in Studio
    {
      question: 'What is the keyboard shortcut for accessing the Log folder?',
      answers: [
        'ALT + E',
        'CTRL + L',
        'CTRL + E',
        'ALT + L'
      ],
      correctAnswer: 2
    },
    {
      question: 'You want to filter logs in the Output panel to check Fatal level logs. What category in the Output panel would you leave enabled?',
      answers: [
        'Error',
        'Trace',
        'Warning',
        'Information'
      ],
      correctAnswer: 2
    },

    // Orchestrator for RPA Developers
    {
      question: 'When a user is being imported from Active Directory, the automation robot creation can be configured only for the attended robot, but not for the unattended one.',
      answers: [
        'False',
        'True'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which of the following pieces of information cannot be stored in an Orchestrator asset?',
      answers: [
        'A set of credentials',
        'A table',
        'A URL',
        'A number'
      ],
      correctAnswer: 2
    },
    {
      question: 'Consider an item added to a queue at 17:00. The average processing time of the queue is 30 minutes. The SLA is 3 hours and the risk SLA is 2 hours. If a robot picks it up at 18:30, what would the status of the queue item be?',
      answers: [
        'In SLA, at risk',
        'In SLA',
        'Out SLA'
      ],
      correctAnswer: 2
    },
    {
      question: 'If a company\'s Orchestrator consists of multiple tenants, will the libraries be shared between the tenants?',
      answers: [
        'Yes',
        'No',
        'It depends on the configuration'
      ],
      correctAnswer: 3
    },
    {
      question: 'Which of the following sets of jobs can be run simultaneously using a pool of 4 machines connected using the same machine template having 2 runtimes?',
      answers: [
        '5 jobs created using a background process, OR 3 jobs created using a foreground process and 5 jobs created using a background process',
        '5 jobs created using a foreground process and 3 jobs created using a background process',
        '5 jobs created using a foreground process'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which of the following statements about populating queues are true?',
      answers: [
        'Queue items can be added by a robot, typically called dispatcher. Queue items can be uploaded directly in Orchestrator.',
        'Queue items can be added by a robot, typically called performer.',
        'Queue items cannot be uploaded directly in Orchestrator.'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which of the following entities NOT need to be mapped to the folder in order to run an unattended job?',
      answers: [
        'Package',
        'User',
        'Process',
        'Machine template'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which type of trigger is more appropriate to use for a process sending notifications about paper submission deadlines for students?',
      answers: [
        'A time trigger',
        'A queue trigger'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which of the following statements about storage buckets is true?',
      answers: [
        'Orchestrator admins can toggle between read-only and write privileges for each storage bucket.',
        'Orchestrator admins can\'t edit user access rights to storage buckets.',
        'All storage buckets in Orchestrator are read-only.'
      ],
      correctAnswer: 1
    },
    {
      question: 'Consider a Windows Server machine connected to Orchestrator using a machine template configured with 3 licenses (runtimes). If the only job running uses a background process, how many licenses are consumed?',
      answers: [
        '3',
        '1',
        '0'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which of the following Orchestrator entities are NOT available through the Resources panel in Studio?',
      answers: [
        'Jobs, Packages',
        'Assets',
        'Processes',
        'Queues'
      ],
      correctAnswer: 1
    },
    {
      question: 'Headless process is an alternative name for...',
      answers: [
        'Foreground process',
        'Background process'
      ],
      correctAnswer: 2
    },
    {
      question: 'Which of the following folder entities can NOT be configured to be accessed/executed only by a certain unattended robot?',
      answers: [
        'Queue',
        'Asset',
        'Trigger',
        'Job'
      ],
      correctAnswer: 1
    },
    
    // Email Automation with Studio
    {
      question: 'What is the supported variable type in the Output property field of all Get Mail activities (POP3, IMAP, Outlook, Exchange)?',
      answers: [
        'List (Generic)',
        'MailMessage',
        'Generic',
        'List (MailMessage)'
      ],
      correctAnswer: 4
    },
    {
      question: 'If you are using the For Each activity to loop through a list of MailMessage variables, what should you set the TypeArgument property to?',
      answers: [
        'System.Web.Mail.MailMessage',
        'System.Net.Mail.MailMessage'
      ],
      correctAnswer: 2
    },
    {
      question: 'What activity can you use to send an email without entering the username and password of the email account?',
      answers: [
        'Send Outlook Mail Message',
        'Send SMTP Mail Message',
        'Send Exchange Mail Message'
      ],
      correctAnswer: 1
    },
    {
      question: 'The Send Outlook Mail Message activity will work without having Microsoft Outlook installed.',
      answers: [
        'False',
        'True'
      ],
      correctAnswer: 1 
    },
    {
      question: 'Which of the following properties are found in the Get Outlook Mail Messages activity?',
      answers: [
        'Server',
        'Password',
        'Port',
        'MailFolder'
      ],
      correctAnswer: 4
    },
    {
      question: 'You are retrieving some Outlook mail messages and you are filtering them using the following expression: "[Received] >= \'" + DateTime.Today.AddDays(-2).ToString("d") + " 00:00AM\' AND [Received] < \'"+ DateTime.Today.ToString("d") + " 00:00AM\'"This means that you are looking for...',
      answers: [
        'All mail messages received in the last 22 hours.',
        'All mail messages received two hours ago, today.',
        'All mail messages received in the last two days.',
        'All mail messages received two days ago.'
      ],
      correctAnswer: 3
    },
    {
      question: 'You are using the \'Save Attachments\' activity and you have specified a local folder to download the files. What will happen if there are duplicate file names in the folder?',
      answers: [
        'The automation will continue without downloading the new files.',
        'An error message will be thrown and the automation will stop.',
        'The old files will automatically be overwritten.',
        'A new folder will automatically be created for each duplicate file.'
      ],
      correctAnswer: 3
    },

    // PDF Automation in Studio
    {
      question: 'How can a robot read only the first page of a PDF file, using the PDF activities?',
      answers: [
        'Set the Range property to: 1.',
        'Set the Range property to: “all”',
        'Set the Range property to: “1”'
      ],
      correctAnswer: 3
    },
    {
      question: 'If the PDF activities are not listed in your Activities Panel, how can you get them?',
      answers: [
        'By installing them using the Manage Packages feature.',
        'By going to the Output panel.',
        'By finding them in the Library tab.'
      ],
      correctAnswer: 1
    },
    {
      question: 'What is the easiest way to get the invoice number from a native PDF file?',
      answers: [
        'Use the Read PDF Text activity and get the value by using string manipulation.',
        'Open the PDF file with Adobe Acrobat Reader and scrape only the relevant information.',
        'Use the Read PDF with OCR activity and get the value by using string manipulation.'
      ],
      correctAnswer: 2
    },
    {
      question: 'If you want to extract specific information from multiple native PDF files with the same structure, what activity should you use?',
      answers: [
        'There is no activity for this.',
        'Get Text Activity',
        'Read PDF Activity with OCR',
        'Get Text Activity with OCR'
      ],
      correctAnswer: 2
    },
    {
      question: 'If you want to extract specific information from a series of PDF files with a similar structure but the workflow only works for one file of the series, what should you investigate?',
      answers: [
        'The ContinueOnError property.',
        'The TimeoutMS property.',
        'The Selector property.',
        'None of the options.'
      ],
      correctAnswer: 3
    },

    // Version Control Systems Integration in Studio
    {
      question: 'At the start of your day, you\'ve pulled the latest version of the project you\'re working on from the remote Git repository. You\'ve been working for two hours and now you want to check the difference between your version of the project and the last committed version. How can you do this?',
      answers: [
        'By checking the Show Changes window which is displayed when a project with changes is pushed to the remote repository',
        'By checking the Solve Conflicts window which is displayed when a project with changes is pushed to the remote repository',
        'By selecting Show Changes in the Project context menu',
        'By selecting Solve Conflicts in the Project context menu'
      ],
      correctAnswer: 3
    },
    {
      question: 'How can you overwrite the last commit to a Git repository in UiPath Studio?',
      answers: [
        'By selecting Undo in the Project context menu',
        'By selecting Amend Commit in the Commit Changes window',
        'By selecting a version you want to commit to in the Commit Changes window'
      ],
      correctAnswer: 2
    },
    {
      question: 'You\'ve been assigned to work on a new automation project. You need to get the project template which is already stored in a remote Git repository. Which option do you need to use in the Studio Team tab?',
      answers: [
        'Git Init',
        'Connect to Git',
        'Clone Repository',
        'Copy to Git'
      ],
      correctAnswer: 3
    },
    {
      question: 'What are our options in the Solve Conflicts window?',
      answers: [
        'We can select between keeping the remote or the local version of each individual activity',,
        'We can select between keeping the remote or the local version of the workflow'
      ],
      correctAnswer: 2
    },
    {
      question: 'We want to integrate the updates pushed to the remote master branch into a feature branch. What do we need to do?',
      answers: [
        'While working in the feature branch, select Push and select the master branch',
        'While working in the feature branch, select Manage Branches > Select the master branch and select Rebase',
        'While working in the feature branch, select Manage Branches > Select the master branch and select Merge',
        'While working in the feature branch, select Pull and select the master branch'
      ],
      correctAnswer: 3
    },
    {
      question: 'Fill in the blank: When working with the Show Changes option it\'s good to know that it works at ____________ level.',
      answers: [
        'Workflow file',
        'Project'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which of the following situations would trigger the Solve Conflicts window to be displayed?',
      answers: [
        'You\'ve committed your project and then realized you need to make a few changes. You\'ve updated the project and then selected Amend Commit. You got the Solve Conflicts window because you were overwriting the last commit. ',
        'You\'ve pulled a project and started working on it. You\'ve made all the necessary changes and pushed it back to the remote repository. You got the Solve Conflicts window because the version of the project you are pushing is different from the one you pulled. ',
        'You\'ve pulled a project and started working on it. In the meantime, somebody else in the team has pushed a new version of the project to the remote repository. When pushing your version, you got the Solve Conflicts window because your last pull is not the same as the version in the remote repository at the time of push.'
      ],
      correctAnswer: 3
    },
    {
      question: 'What differences between versions of the workflow files can you see in the Show Changes and Solve conflicts windows?',
      answers: [
        'Removed workflows',
        'Added activities, Modified activity properties, Deleted activities',
        'Added workflows'
      ],
      correctAnswer: 2
    },
    {
      question: 'You\'ve just created a new project in UiPath Studio. You want to create a local repository and copy the project to it. Which of the following options in UiPath Studio allows you to do both?',
      answers: [
        'Git Init',
        'Clone Repository',
        'Copy to Git',
        'Connect to Git'
      ],
      correctAnswer: 1
    },
    {
      question: 'What do branches allow our team to do?',
      answers: [
        'Develop and test various features in parallel',
        'Compare between different projects',
        'Manage workflow files',
        'Compare different versions of the project'
      ],
      correctAnswer: 1
    },

    // RPA Testing with Studio Pro
    {
      question: 'Which of the following activities can be used to verify if the values of two variables are equal?',
      answers: [
        'Verify Expression, Verify Expression with Operator',
        'Get Attribute',
        'Check App State'
      ],
      correctAnswer: 1
    },
    {
      question: 'Can the mocking feature be used in Studio Pro without creating a test case?',
      answers: [
        'Yes',
        'No'
      ],
      correctAnswer: 2
    },
    {
      question: 'Which of the following activity can be used to directly compare the state of a UI element with a value or variable?',
      answers: [
        'Verify Expression',
        'Verify Control Attribute',
        'Verify Expression with Operator'
      ],
      correctAnswer: 2
    },
    {
      question: 'Which of the following issues affect the stability of robots?',
      answers: [
        'Regulations',
        'Environment issues, Application issues, Automation issues',
        'Human errors'
      ],
      correctAnswer: 2
    },
    {
      question: 'Where can you see the percentage of activities in an RPA workflow covered in an execution of the test case?',
      answers: [
        'Only in the Activity Coverage widget',
        'Both in the Activity Coverage widget and Activity Coverage panel',
        'Only in the Activity Coverage panel'
      ],
      correctAnswer: 2
    },
    {
      question: 'Which of the following issues are not typically handled in the RPA development stage?',
      answers: [
        'Application issues',
        'Automation issues',
        'Environment issues'
      ],
      correctAnswer: 3
    },
    {
      question: 'Which of the following statements about mock testing are true?',
      answers: [
        'In mock workflows, you can only edit the mocked activities. Changes made in the source workflow file are applied to the mock file whenever the project is saved.',
        'You can have a single mock file for a test case.',
        'In a Given-When-Then test case structure, \'Surround with mock\' is available for the activities in all the three blocks.'
      ],
      correctAnswer: 1
    },

    // UiPath RPA Associate v1.0 Practice Test
    // https://uipath.onlinetests.app/assess.aspx?aid=UIPATH-RPAV1-PT&apass=uippassword

    {
      question: 'When reading a CSV file with the Read CSV activity, which property needs to be enabled in order to access data in the output datatable by the column names in UiPath Studio 2020.10?',
      answers: [
        'Delimiter',
        'IgnoreQuotes',
        'Has headers',
        'PreserveFormat'
      ],
      correctAnswer: 3
    },
    {
      question: 'When using the For Each activity to loop through the output of a Get Outlook Mail Messages activity, how should the TypeArgument property be set?',
      answers: [
        'UiPath.Mail.MailMessageExtensions',
        'System.Web.UI.WebControls.MailMessageEventArgs',
        'System.Net.Mail.Attachment',
        'System.Net.Mail.MailMessage'
      ],
      correctAnswer: 4
    },
    {
      question: 'In UiPath Studio, which argument direction(s) exist?',
      answers: [
        'Out arguments only',
        'In arguments only',
        'In, Out, and In/Out arguments',
        'In/Out arguments only'
      ],
      correctAnswer: 3
    },
    {
      question: 'A developer has added an Invoke Workflow File activity in Main.xaml to invoke the ProcessInvoices.xaml workflow. The developer needs to pass a DataTable called dt_Invoices from Main.xaml to ProcessInvoices.xaml. Which action needs to be performed?',
      answers: [
        'Declare an "Out" argument in ProcessInvoices.xaml',
        'Declare an "Out" argument in Main.xaml',
        'Declare an "In" argument in Main.xaml',
        'Declare an "In" argument in ProcessInvoices.xaml'
      ],
      correctAnswer: 4
    },
    {
      question: 'What is a unique feature of the UI Explorer tool?',
      answers: [
        'Allows the developer to indicate a selector',
        'Allows the developer to view the full UI hierarchy tree',
        'Allows the developer to repair a selector',
        'Allows the developer to use wildcards in a selector'
      ],
      correctAnswer: 2
    },
    {
      question: 'During development, a breakpoint is enabled at a particular activity. Later, the developer published the package to UiPath Orchestrator 2020.10. When the process runs from a UiPath Robot in an unattended mode, what is the expected behavior?',
      answers: [
        'Breakpoint will have no impact on the process execution',
        'Process causes the robot to crash due to the breakpoint',
        'Process generates an exception error due to the breakpoint',
        'Breakpoint will cause the process to pause indefinitely'
      ],
      correctAnswer: 1
    },
    {
      question: 'What is the main feature of a flowchart?',
      answers: [
        'Provides a condition to facilitate the transition from one state to another',
        'Determines the project\'s behavior when encountering an execution error',
        'Enables the creation of complex business processes and connects activities in multiple ways by branching multiple logical operators',
        'Provides the ability to seamlessly go from one activity to another and act as a single Block activity for linear processes'
      ],
      correctAnswer: 3
    },
    {
      question: 'Which component of the UiPath platform is used to develop workflows?',
      answers: [
        'UiPath Agent',
        'UI Explorer',
        'UiPath Studio',
        'UiPath Orchestrator'
      ],
      correctAnswer: 3
    },
    {
      question: 'A developer is reviewing the file contents of a UiPath Studio project. In which location are the UiPath dependencies specified?',
      answers: [
        '.screenshots',
        '.entities',
        '.settings',
        'project.json'
      ],
      correctAnswer: 4
    },
    {
      question: 'A user needs to download a report for each month of the year and decides to loop over the months using a For Each activity. Which data type is best-suited to hold the values of the names of the months?',
      answers: [
        'List<String>',
        'Dictionary<Object,String>',
        'String[]',
        'String'
      ],
      correctAnswer: 3
    },
    {
      question: 'Which function does the Anchor Base activity provide?',
      answers: [
        'Confirms the selector for the element is "True" based on a nearby anchored element',
        'Confirms the page is fully loaded and that all elements are in the same place as where the automation was developed',
        'Searches for a UI element by using another UI element as an anchor and searches the specified area around the anchored element',
        'Searches for a UI element by attaching to a reliable selector field and sends the tab hotkey until it is in the desired field'
      ],
      correctAnswer: 3
    },
    {
      question: 'In UiPath Studio, which activities can be used as an anchor?',
      answers: [
        'Get Text or Get Visible Text',
        'Element Exists or Image Exists',
        'Wait Element Vanish or Wait Image Vanish',
        'Find Image or Find Element'
      ],
      correctAnswer: 4
    },
    {
      question: 'What describes a function of UiPath version control?',
      answers: [
        'Provides an effective way to manage larger projects that require collaboration between multiple users',
        'Enables an effective way to connect to GIT, TFS, and SVN at the same time',
        'Prohibits the comparison between multiple file versions',
        'Stores only one version of a project on the version control system'
      ],
      correctAnswer: 1
    },
    {
      question: 'A developer needs to design a process in the following way:1. The process needs to validate the Payment Status field in an application. 2. There are three possible values in the Payment Status field named: Pending, Paid, or Awaiting Approval. 3. For "Pending", the process should check the "Due Date" field. If the Due Date has lapsed, raise an alert. Otherwise, do nothing. 4. For "Paid", change the Overall Status to Completed. 5. For "Awaiting Approval", send an alert email to the email address in the Account Owner field. Based on best practices, which activity is recommended for designing the process flow for Step 2?',
      answers: [
        'Report Status',
        'Set Transaction Status',
        'If',
        'Switch'
      ],
      correctAnswer: 4
    },
    {
      question: 'What is a feature of the Native screen scraping method?',
      answers: [
        'Supports Citrix',
        'Extracts the text position',
        'Runs in the background',
        'Extracts hidden text'
      ],
      correctAnswer: 2
    },
    {
      question: 'Which UiPath Studio panel can be used to change the scope of a variable?',
      answers: [
        'Variables',
        'Project',
        'Locals',
        'Outline'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which characters can be used as wildcards while editing a selector?',
      answers: [
        '% and !',
        '_ and *',
        '% and _',
        '? and *'
      ],
      correctAnswer: 4
    },
    {
      question: 'Which activity can be used to retrieve the value from a specific column, from a DataRow object?',
      answers: [
        'Get Row Item',
        'Get Transaction Item',
        'Filter Data Table',
        'Remove Data Row'
      ],
      correctAnswer: 1
    },
    {
      question: 'What is the correct expression for displaying the current date in the Output panel using a Write Line activity in a "dd-MM-yyyy" format?',
      answers: [
        'Format(Now,"dd-MM-yyyy")',
        'Now.ToString("dd-MM-yyyy")',
        'Now."dd-MM-yyyy"',
        'Now.CompareTo("dd-MM-yyyy")'
      ],
      correctAnswer: 2
    },
    {
      question: 'How can a sequence named InitAllSettings.xaml be triggered from within Main.xaml?',
      answers: [
        'Using the Invoke Method activity',
        'Using the Invoke Code activity',
        'Using the Invoke Workflow File activity',
        'Using the Open Application activity'
      ],
      correctAnswer: 3
    },
    {
      question: 'A developer wants to retrieve all UI elements from a form based on a certain filter condition. Which activity should the developer use?',
      answers: [
        'Set Clipping Region',
        'Find Element',
        'Mouse Trigger',
        'Find Children'
      ],
      correctAnswer: 4
    },
    {
      question: 'Which data type does the Selector property of an activity accept?',
      answers: [
        'System.String',
        'UiPath.Core.Selector',
        'System.Security.SecureString',
        'System.Xml.XmlElement'
      ],
      correctAnswer: 1
    },
    {
      question: 'When using an Excel Application Scope activity, which activity should be used to sort a table directly in an .xlsx file?',
      answers: [
        'Sort Table',
        'Select Range',
        'Get Table Range',
        'Sort Data Table'
      ],
      correctAnswer: 1
    },
    {
      question: 'Based on best practice, how many Global Exception Handlers can be set per automation project?',
      answers: [
        'One for each activity in the project',
        'One for each workflow in the project',
        'An unlimited number in the project',
        'One for the entire project'
      ],
      correctAnswer: 4
    },
    {
      question: 'Which function is available with an attended robot?',
      answers: [
        'Process execution can continue under a locked screen',
        'Processes can be started from UiPath Assistant or the command prompt',
        'Process execution can be scheduled from Orchestrator',
        'Process execution can be manually triggered from an Orchestrator shared folder'
      ],
      correctAnswer: 2
    },
    {
      question: 'A developer needs to create a variable to store the value of an email address. Which variable property or field is optional?',
      answers: [
        'Name',
        'Default',
        'Scope',
        'Variable type'
      ],
      correctAnswer: 2
    },
    {
      question: 'A customer calls into a Call Center to get an update on their current outstanding payment. Consider the following use case: 1.  The customer provides the Customer ID to the call center representative. 2.  The call center representative inputs the Customer ID into a web application. 3.  The robot scrapes the data from the web application. 4.  The robot performs calculations. 5.  The outstanding amount is provided to the customer over the telephone by the representative. What is the number of steps that require manual intervention?',
      answers: [
        'One',
        'Two',
        'Three',
        'Five'
      ],
      correctAnswer: 3
    },
    {
      question: 'A developer wants to retrieve all rows in a Data Table variable with a "Price" value greater than 1000. Which activity can the developer use?',
      answers: [
        'Output Data Table',
        'Filter Data Table',
        'Lookup Data Table',
        'Sort Data Table'
      ],
      correctAnswer: 2
    },
    {
      question: 'What are the differences between variables and arguments?',
      answers: [
        'Variables must be assigned to an argument value. Arguments always have a direction',
        'Variables always have a direction. Arguments can be assigned to a variable value',
        'Variables pass data between activities inside the same workflow. Arguments pass data between workflow files',
        'Variables pass data between workflow files. Arguments pass data between activities inside the same workflow'
      ],
      correctAnswer: 3
    },
    {
      question: 'Which elements must exist for each Dictionary object?',
      answers: [
        'Item and Values',
        'Item and Collection',
        'Key and Collection',
        'Key and Value'
      ],
      correctAnswer: 4
    },
    {
      question: 'A developer needs to ensure a string has a valid email format. How can this be verified?',
      answers: [
        'Using a Send SMTP Mail Message activity',
        'Using Regular Expressions',
        'Using the Contains function with \'@.com\'',
        'Using the Format Value activity'
      ],
      correctAnswer: 2
    },
    {
      question: 'What describes the file access level needed when using the Workbook Read Range activity?',
      answers: [
        'Works with .xls and .xlsx files, and Excel must be installed',
        'Works only with .xlsm files and Excel must be installed',
        'Works only with .xls files and Excel does not need to be installed',
        'Works with .xlsx files and Excel does not need to be installed'
      ],
      correctAnswer: 4
    },
    {
      question: 'How can a full list of attributes of UI elements be displayed?',
      answers: [
        'Using the Outline panel',
        'Using the UI Explorer tool',
        'Using the "Indicate on Screen" button',
        'Using the Output panel'
      ],
      correctAnswer: 2
    },
    {
      question: 'A developer wants to build a project which iterates through multiple digital PDF invoice files to retrieve the Total Value. Assuming all the files have the same structure, which action should be performed based on best practices?',
      answers: [
        'Use the Find Image and Get Text activities in an Anchor Base activity',
        'Ensure the selectors are valid for all invoices',
        'Ensure the total values are copied to the clipboard by using Hotkeys',
        'Use OCR activities to output the total value from all invoices'
      ],
      correctAnswer: 2
    },
    {
      question: 'A user wants to write a data table to an .xlsx file; however, the file does not exist. What will happen if the Excel Write Range activity is used to write the data table?',
      answers: [
        'File will be created and the data will be located in the file',
        'Process will throw an execution error',
        'File will be created but the file will not contain any data',
        'Process will continue the execution without creating the file'
      ],
      correctAnswer: 1
    },
    {
      question: 'A developer wants to remove the company name from the "UiPath Certification" string. Which string method will return "Certification"?',
      answers: [
        '"UiPath Certification".Substring(6)',
        '"UiPath Certification".Substring(6).Trim',
        '"UiPath Certification".Substring(6,14)',
        '"UiPath Certification".Substring(14,6)'
      ],
      correctAnswer: 2
    },
    {
      question: 'Which data type is used to store data extracted from a Microsoft Excel file using a Read Range activity?',
      answers: [
        'String',
        'Object',
        'DataTable',
        'Array'
      ],
      correctAnswer: 3
    },
    {
      question: 'A developer has a workflow in which the value of a counter needs to be evaluated before the body of the loop is executed. Which Control Flow activity should be used?',
      answers: [
        'Switch',
        'Do While',
        'While',
        'If'
      ],
      correctAnswer: 3
    },
    {
      question: 'What is a characteristic of an Orchestrator Asset?',
      answers: [
        'All values from any Asset type are encrypted',
        'Assets can hold entire DataTable variables',
        'Asset values can be defined for each user',
        'Asset types can be changed after creation of the asset'
      ],
      correctAnswer: 3
    },
    {
      question: 'What are the differences between partial selectors and full selectors?',
      answers: [
        'Partial selectors include information about the top-level window. Full selectors are recommended to perform multiple actions in the same window.',
        'Partial selectors do not include information about the top-level window. Full selectors are recommended to perform multiple actions in the same window.',
        'Partial selectors are recommended when switching between multiple windows. Full selectors do not include information about the top-level window.',
        'Partial selectors are recommended to perform multiple actions in the same window. Full selectors include information about the top-level window.'
      ],
      correctAnswer: 4
    },
    {
      question: 'Which type(s) of automation does UiPath support?',
      answers: [
        'Unattended automation only',
        'Hybrid and Unattended automation only',
        'Attended, Hybrid, and Unattended automation',
        'Attended and Hybrid automation only'
      ],
      correctAnswer: 3
    },
    {
      question: 'What describes the relationship between UiPath Robots and UiPath Orchestrator?',
      answers: [
        'Attended robots can be connected to UiPath Orchestrator without Windows Credentials',
        'UiPath Robots can be deleted if they have pending or active jobs in UiPath Orchestrator',
        'UiPath Orchestrator consumes the Queue Items uploaded to the UiPath Robot',
        'Unattended robots can be connected to UiPath Orchestrator without the Windows username'
      ],
      correctAnswer: 1
    }

    // question template
    // {
    //   question: '',
    //   answers: [
    //     '',
    //     '',
    //     '',
    //     ''
    //   ],
    //   correctAnswer: 
    // },

  ],
  quizStart: false,
  questionNumber: 0,
  score: 0,
  answerCheck: undefined
};

// Fisher-Yates (aka Knuth) Shuffle
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// ****TEMPLATE FUNCTIONS****

function generateStartPage() {
  return `
  <form class="m-5">
    <p>The quiz contains ${store.questions.length} questions. </p>
    </br>
    <p>Let's see how much you know, or don't know, about UiPath.</p>
    </br>
    <p>Good Luck !</p>
    <br>
    <button type='submit' class='start-button btn btn-success'>Start Quiz</button> 
  </form>
  `;
}

function generateCurrentQuestion() {
  let radioButtons = '';  // initialize the radio buttons variable
  let Alphabet = ['A', 'B', 'C', 'D', 'E']; // if there are more choices for any question, this will need to be changed
  for (let i = 0; i < store.questions[store.questionNumber-1].answers.length; i++) {
    radioButtons += `<li><label for ='${Alphabet[i]}' class='choice-${Alphabet[i]}'><input type='radio' name='choice' value='${i+1}' id = ${Alphabet[i]}> ${Alphabet[i]}. ${store.questions[store.questionNumber-1].answers[i]}</label></li>`;
  }
  return `
    <form class='current-question-choices m-3'>
      <p>Question ${store.questionNumber} of ${store.questions.length}</p>
      <p>${store.questions[store.questionNumber-1].question}</p>
      <ul style='list-style-type: none;'>
        ${radioButtons}
      </ul>
      <button type='submit' id='check-answer' class="btn btn-primary">Submit</button>
      <p class="mt-3">Current Score: ${store.score} of ${store.questionNumber-1}</p>
    </form>
  `;
}

function generateCorrectPage() {
  return `
  <form class='correct-answer-form m-3'>
    <h2 class='text-success'>Correct!</h2>
    <br>
    <p>${store.questions[store.questionNumber-1].question}</p>
    <br>
    <p>Correct Answer: ${store.questions[store.questionNumber-1].answers[store.questions[store.questionNumber-1].correctAnswer - 1]}</p>
    <button type='button' class='next-question btn btn-secondary'>Next Question</button>
    <p class="mt-3">Current Score: ${store.score} of ${store.questionNumber}</p>
  </form>
  `;
}

function generateWrongPage() {
  return `
  <form class='wrong-answer-form m-3'>
    <h2 class='text-danger'>Wrong!</h2>
    <br>
    <p>${store.questions[store.questionNumber-1].question}</p>
    <br>
    <p>Correct Answer: ${store.questions[store.questionNumber-1].answers[store.questions[store.questionNumber-1].correctAnswer - 1]}</p>
    <button type='button' class='next-question btn btn-secondary'>Next Question</button>
    <p class="mt-3">Current Score: ${store.score} of ${store.questionNumber}</p>
  </form>
  `;
}

function generateQuizComplete() {
  return `
  <form class = "m-5">
    <p>You have completed all the questions</p>
    <br>
    <p>Quiz Result:</p>
    <p>You got ${store.score} out of ${store.questions.length}!</p>
    <br>
    <button type="submit" class='restart-button btn btn-warning'>Restart</button>
  </form>`;
}

// **** RENDER FUNCTION ****

function render() {
  if (store.questionNumber === 0) {
    $('main').html(generateStartPage());
  } else if (store.questionNumber > 0 && store.questionNumber <= store.questions.length) {
    if (store.answerCheck === true) {
      $('main').html(generateCorrectPage());
    } else if (store.answerCheck === false) {
      $('main').html(generateWrongPage());
    } else {
      $('main').html(generateCurrentQuestion());
    }
  } else {
    $('main').html(generateQuizComplete());
  }
  handleStartQuiz();
  handleCheckAnswer();
  handleRestartQuiz();
  handleNextQuestion();
}

// **** HANDLE FUNCTIONS ****

function handleStartQuiz() {
  // The starting screen should have a button that users can click to start the quiz.
  $('.start-button').on('click', function(e){
    e.preventDefault();
    store.questionNumber = 1;
    render();
  });
}

function handleCheckAnswer(){
  $('.current-question-choices').on('submit', function(e){
    e.preventDefault();
    let selectAnswer = parseInt($('input[type = "radio"]:checked').attr('value'));
    if (selectAnswer === store.questions[store.questionNumber-1].correctAnswer){
      store.score ++;
      store.answerCheck = true;
    }else{
      store.answerCheck = false;
    }
    render();
  });
}

function handleNextQuestion() {
  $('.next-question').on('click', function() {
    store.answerCheck = undefined;
    store.questionNumber++;
    render();
  });
}

function handleRestartQuiz() {
  // Users should be able to start a new quiz
   $('.restart-button').on('click', function() {
    store.questionNumber = 0;
    store.score = 0;
    render();
   });
}

function main() {
  render();
  handleStartQuiz();
}

// randomize the questions
shuffle(store.questions)

$(main);
