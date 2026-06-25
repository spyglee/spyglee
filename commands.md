git checkout [name] - changing branch
git checkout -b [name] - create new branch
git add . / git add -A - stage changes
git commit -m '[message]' - commit STAGED changes
git commit --amend -m '[message]' = rewrate last commit with curernt and older changes and rename it
git branch - see all LOCAL branches
git status - see all local changes
git log - see all commits
git branch -D [name] - delete branch
git merge [name] - merge branch into current one
git rebase [name] - merge branch into current one considering history (your changes are always last)
git reset HEAD~1 --soft - uncoomit last commit but stage them
git pull - get chages from remote
git push - publish local changes to the remote