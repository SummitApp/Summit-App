# Summit-App

## Setting Up Git
Step 1: Fork Summit-App to GitHub Account
1.	Go to GitHub of Summit-App
2.	Click “Fork” on the top right to add the repo to your repos
3.	Go to your Summit-App forked repo


Step 2: Local Clone of Forked Summit-App
1.	Click “Clone or download” and copy the URL 
2.	Open Terminal and cd to where you want to have the repo on your computer
3.	Type: git clone <URL>
4.	cd to the Summit-App repo

Step 3: Configure local fork with upstream develop
1.	Go to https://github.com/SummitApp/Summit-App
2.	Click “Clone or download”
3.	Copy the URL to your clipboard
4.	Go back to terminal (make sure you are in your repo)
a.	To confirm you’re in your local repo type: pwd
b.	Expected Result: “<PATH>/Summit-App
5.	Type: git remote -v
a.	Expected result:
origin  https://github.com/<USERNAME>/Summit-App.git (fetch)
origin  https://github.com/<USERNAME>/Summit-App.git (push)
6.	Type: git remote add upstream <URL_FROM_STEP_2>
7.	Type: get remove -v 
a.	Expected result:
origin  https://github.com/<USERNAME>/Summit-App.git (fetch)
origin  https://github.com/<USERNAME>/Summit-App.git (push)
upstream         https://github.com/SummitApp/Summit-App.git (fetch)
upstream         https://github.com/SummitApp/Summit-App.git (push)

Let me explain what you how have set up:
So, we have our SummitApp/Summit-App repo that has a master and a develop branch, and in step 1 you forked this repo to your GitHub account. This makes a copy of the repo for you in your account. In step 2 we cloned our fork to our local computer, which allows you to get/add anything found in the fork on your computer with pull/push. The last, and most confusing aspect is step 3, this is where we configure our local repo to pull from our SummitApp/Summit-App repo – which we will refer to as “upstream”. This is because while you are working on a specific feature on your local fork, somebody else might have added code to the “upstream develop” branch (this is where we will have all of our development code that people have decided to be finished). You might be asking yourself “why do this?”. The answer to this is simple: we don’t want one specific person to be able to break our upstream develop branch, which will be our “stable” codebase. This does make you have to do extra steps when trying to get your code from upstream develop. Now I will go through how to actually use this setup to develop code for specific features, push code to your fork and also get your feature code into the develop branch.
