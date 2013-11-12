api_course_project_2
====================

Ed Scott
--------

Self-Critique Memo 11/13
------------------------



Proposal Memo for Project 2
----------------------------
10/9/13
--------

For this project I intend to use the NYTimes's API and create a CLI application. The goal is to get 500 comments to one article sorted from best to worst using the NYTimes’s social ranking method. The data will be checked for malicious code, parsed to retrieve only the text of the comments themselves, and then the comment texts will be written to a text file and stored locally. Then I will use a function that does a basic word count of the comments and produces a type-token ratio, which is the number of unique words in a text divided by the number of total words.

Weekly Goals
------------
10/9–10/16: Find an article with comments to use. Begin working on a function to parse the JSON data (maybe by using regular expressions?). Look for Node.js modules that might help with my project. 

Notes for 10/9-10/16
--------------------
Played with different regular expressions trying to find one that returns unique words. Striking out so far. 

Found an article, information is below.

See http://developer.nytimes.com/docs/community_api/. Article URL: http://www.nytimes.com/2013/07/05/opinion/krugman-e-pluribus-unum.html. Article Title: "E Pluribus Unum". Author: Paul Krugman. Section: NYTimes Opinion Pages. Example search for comments 1-25, editor's selection: http://api.nytimes.com/svc/community/v2/comments/url/exact-match.xml?url=http%3A%2F%2Fwww.nytimes.com%2F2013%2F07%2F05%2Fopinion%2Fkrugman-e-pluribus-unum.html&sort=editors-selection&api-key=22782cf7bd7c5904640c86397bf65764:19:54772968

Total Comments: 449. Total Comments Selected as "Editor's Choice": 28. Total Comments That Received at Least One Reader Recommendation: 251 (lowest recommended comment had 2 recommendations)

JSON search, recommended sort, comments 26-50: http://api.nytimes.com/svc/community/v2/comments/url/exact-match?url=http%3A%2F%2Fwww.nytimes.com%2F2013%2F07%2F05%2Fopinion%2Fkrugman-e-pluribus-unum.html&offset=25&sort=recommended&api-key=22782cf7bd7c5904640c86397bf65764:19:54772968

10/16–10/23: Continue working on function to parse JSON data. Test any modules for effectiveness.

Notes 10/16-23: Request and filestream working well to get comments and write them to a text file.


10/23–10/30: Finalize parsing function. Add function to check for malicious code. Begin working on 

function to get Reddit comments, 50 at a time, to run for five hours, and save the output in a structured 

text file.


10/30–11/6: Finalize get function and output store. Add test suite.


11/6–11/13: Prepare to present project to class.

