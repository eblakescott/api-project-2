#nytimes_comment_scraper
====================

#Ed Scott
#Gist at https://gist.github.com/eblakescott/7664525
--------

##Object

###Comment
A comment is text that has been posted beneath an article hosted on the NYTimes.

###Example Comment Object

```js
{
"status":"approved",
"commentSequence":1,
"userTitle":"NULL",
"userURL":"NULL",
"commentTitle":"n\/a",
"commentBody":"Unfortunately, I must agree more with the analysis of despair written by Mr. James than a less than convincing optimism of Dr. Krugman. In 1855 Walt Whitman promulgated an ecstatic and exalted vision of democracy in \"song of Myself.\" Several decades later in his \"democratic Vistas\" he descended into despair when confronted with the crass reality of social division, greed, the ascent of the robber barons which dashed the optimism he nurtured in 1855. These two works of a great American writer mirror the statements of Dr. Krugman and Mr. James. To my great chagrin I must side with Mr. James.",
"approveDate":"1373034183",
"recommendations":43,
"replies":[],
"editorsSelection":true,
"times_people":1,
"sharing":0,
"email_status":"0",
"display_name":"gpd",
"location":"Riverdale New York",
"userComments":"api.nytimes.com\/svc\/community\/v2\/comments\/user\/id\/23271686.xml"
}

```
###See http://developer.nytimes.com/docs/community_api/ for a description of the object and fields, as well as additional examples.

Self-Critique Memo 11/13
------------------------
My goals for this project were to write a program in NodeJS that would access the NYTimes's API, retrieve comments to a specific article and sorted by recommended votes, and write the comments to structured text files stored on my machine. Since I developed a command line interface application I was more concerned with accessing, writing, and cleaning the data than manipulating it for other users. The files were solely for my benefit to aid me in submitting the comments to a web-based text analysis application.

For my project I think I succeeded with the following:

* Learn to build an app in NodeJS
* Learn to use the NodeJS community modules (in my case, "request")
* Access and authenticate to an API 
* Obtain data from an API and write the data to a structured set of text files on my machine for further use
* Change the timing of the URL requests so that requests can be made at different intervals (by using the setTimeout method of Javascript)
* Provide some basic error reporting

I didn't succeed with 

* Working with complex objects and manipulating them when making the initial request. The NYTimes comment API provides a lot of data that I wanted to parse: I wanted to obtain only the comment bodies of the comments and remove other data (e.g., commentTitle). I was able to figure out how to do that while working in the file the comments were written to but could not figure out how to front load the text manipulation so that the output contained only the data I was interested in. 
* Condensing functions so that they are easier to read and edit. I have ten functions, each of which performs a similar task (i.e., go to the NYTimes API and grab comments for an article). Where I got tripped up was with the NYTimes's default of providing only 25 comments at a time: the URL request changed for each successive batch of comments by using the "offset" option, where offset=0 provides the first 25 comments, offset=25 provides comments 26-50, and so on. I was unable to figure out a way to get all the comments I wanted using only one function.
* Developing a type-token ratio function to manipulate the comment bodies. Originally I wanted to create a type-token ratio function that would join my word count function as part of a basic text analysis suite. I tried to create one using regular expressions but didn't quite get there. I ended up spending more of my time trying to get and clean the data from the API.

My goals written at the beginning of the project, as well as some project notes I made along the way, are below.


Proposal Memo for Project 2
----------------------------
10/9/13
--------

For this project I intend to use the NYTimes's API and create a CLI application. The goal is to get 500 comments to one article sorted from best to worst using the NYTimes’s social ranking method. The data will be checked for malicious code, parsed to retrieve only the text of the comments themselves, and then the comment texts will be written to a text file and stored locally. Then I will use a function that does a basic word count of the comments and produces a type-token ratio, which is the number of unique words in a text divided by the number of total words.

Weekly Goals
------------
10/9–10/16
------------
Find an article with comments to use. Begin working on a function to parse the JSON data (maybe by using regular expressions?). Look for Node.js modules that might help with my project. 

Notes for 10/9-10/16
--------------------
Played with different regular expressions trying to find one that returns unique words. Striking out so far. 

Found an article, information is below.

See http://developer.nytimes.com/docs/community_api/. Article URL: http://www.nytimes.com/2013/07/05/opinion/krugman-e-pluribus-unum.html. Article Title: "E Pluribus Unum". Author: Paul Krugman. Section: NYTimes Opinion Pages. Example search for comments 1-25, editor's selection: http://api.nytimes.com/svc/community/v2/comments/url/exact-match.xml?url=http%3A%2F%2Fwww.nytimes.com%2F2013%2F07%2F05%2Fopinion%2Fkrugman-e-pluribus-unum.html&sort=editors-selection&api-key=22782cf7bd7c5904640c86397bf65764:19:54772968

Total Comments: 449. Total Comments Selected as "Editor's Choice": 28. Total Comments That Received at Least One Reader Recommendation: 251 (lowest recommended comment had 2 recommendations)

JSON search, recommended sort, comments 26-50: http://api.nytimes.com/svc/community/v2/comments/url/exact-match?url=http%3A%2F%2Fwww.nytimes.com%2F2013%2F07%2F05%2Fopinion%2Fkrugman-e-pluribus-unum.html&offset=25&sort=recommended&api-key=22782cf7bd7c5904640c86397bf65764:19:54772968

10/16–10/23
------------
Continue working on function to parse JSON data. Test any modules for effectiveness.

Notes for 10/16-23
--------------
Request and filestream working well to get comments and write them to a text file.

10/23–10/30
------------
Finalize parsing function. Add function to check for malicious code. Begin working on function to get Reddit comments, 50 at a time, to run for five hours, and save the output in a structured text file.

10/30–11/6
----------
Finalize get function and output store. Add test suite.

11/6–11/13
-----------
Prepare to present project to class.

