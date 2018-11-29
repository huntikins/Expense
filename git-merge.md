If not, you'll want to do:
git -branch yourbranchname
That creates the new branch. It should be an exact copy of your master branch. Then do git add . And git commit to commit that branch.
Then do:
Git -checkout to switch back to the master.
Git pull to sync your local master branch back up with what is on the web. (From now on, you want to be working on your other branch)
You may need to commit what you pulled on your local master branch... Not sure
Then switch back to your other branch with git -checkout yourbranchname
Git push
It won't like this, but follow the instructions it gives you 
That pushes your changes up to your branch on github
Before you do a pull request, you need to resolve the merge conflicts on your local computer
To do that type
Git merge master yourbranchname
It will try to merge everything. This process makes sure that any changes made to other files are also put into your branch.
You'll probably have to resolve merge conflicts on your computer. It's a pain in the butt,but it's easier to do it in vs code than in GitHub.
Do another add, commit, and push
Then you can go onto GitHub and create a pull request.


Let me know if that made sense/cd 
