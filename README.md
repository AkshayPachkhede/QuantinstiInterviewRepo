Dependencies and Softwares needs to be installed :-
1)Download and install Node.js Node version 8.9.0 and npm version 5.5.1


Steps To Perform the Setup :-
1)Clone the repository.

2)Navigate to lib folder and add the local path of chromedriver to environment variables 
eg. (This PC > Right click > Properties > Advanced system variables > Advanced > Environment Variables > System Variables > Path > "Add ChromeDriver path from lib folder".)

3)Navigate to lib folder and run Selenium Standalone Server by opening command prompt and file location and using below command in command prompt.
eg. (java -jar selenium-server-standalone-3.11.0.jar)

4)Navigate to node_modules > .bin folder and run below command.
( wdio wdio.conf.js)

5)Validate the result in the command prompt as well as in the browser.



Note :-
1)Please clean the browser cache before running the application,since it is observed that browser takes long time to load application if the cache is not cleaned.

2)Please add the necessary Username and Password in the test > specs > data > conf.json file. Since the file committed is without username and password value as reuested.

Thanks,
Akshay