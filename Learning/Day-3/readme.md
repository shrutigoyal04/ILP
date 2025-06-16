# Terminal Commands

Basic commands

1. ls - list files (show my files)
2. pwd - print working directory(where i am)
3. clear - clear screen
4. cd - change directory   [cd abc/def ]
5. cd .. = back button   
6. cd Desktop/ILP (relative path)
7. cd /users/shruti/Desktop/ILP (absolute path)
8. / = root directory(/ )
9. ~ = home directory(c/user/shruti)
10. mkdir = make directory [mkdir folderName] (new folder)
11. touch = new file created [Ex.- touch index.html]
12. rm = remove files
13. rmdir = removes empty folders
14. rm -rf = removes any folder (recursive delete and forced delete)

Flags
flags are characters that we pass with commands to modify their behaviour

1. man ls - give info about ls command
2. man makdir - give info about mkdir command
3. ls -l -> additional informal k liye 
4. ls -a -> hidden files show krne k liye
5. ls -la -> hidden file+additional info


# Git Basics

1.  git clone <link>= to clone any repo 
2.  git status  = displays the state of the code
3.  git add <filename> = add new or changed file in your working directory to the git staging area
    git add . = [add all files]
4.  git commit -m "some message" = It is the record of changed
5.  git push origin main = upload local repo content to remote repo
6.  git init = used to create a new git repo
7.  git remote add origin <link>  [ye btata h ki ab hmara code konsi repo me push hone wala h]
8.  git remote -v  = to verify remote
9.  git branch = to check branch
10. git branch -M main (to rename branch as main)
11. git push origin main

////how to divide in multiple branches
12. git checkout <branch name>  = to navigate
13. git checkout -b <new branch name> = (to create new branch)
14. git branch -d <branch name> = to delete branch

//////merging code////
15. git diff <branch name> = to compare commits, branches, files, etc.
16. git merge <branch name> = to merge 2 branchs
17. create pull request = to merge code from one branch to another branch
