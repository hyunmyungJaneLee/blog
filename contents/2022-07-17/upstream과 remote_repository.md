---
date: '2022-07-17'
title: 'upstream과 remote repository test'
categories: ['Frontend', 'Git']
summary: '아래 글을 보고 내가 알게 쉽게 정리한 git에 대해 기록한다. 깃은 깃헙이 아니다. 깃을 제대로 알기도 전에 처음 깃헙이라는 서비스를 경험했을 당시 나도 그렇게 생각했었다. 
gitlab, bitbucket을 접하고 조금은 깃에 익숙해진 지금 더 나아가 upstream과 remote repository에 대해 정리한다.'
thumbnail: '../test.jpg'
---


# upstream과 remote repository

아래 글을 보고 내가 알게 쉽게 정리한 git에 대해 기록한다.

[GitHub에서 협업을 위한 remote repository와 upstream 이해하기](https://pers0n4.io/github-remote-repository-and-upstream/)

# git ≠ github

깃은 깃헙이 아니다. 깃을 제대로 알기도 전에 처음 깃헙이라는 서비스를 경험했을 당시 나도 그렇게 생각했었다. 

gitlab, bitbucket을 접하고 조금은 깃에 익숙해진 지금 더 나아가 upstream과 remote repository에 대해 정리한다.

# origin이 뭐야

`git remote add origin ..`명령어를 사용하면서도 origin이 뭘까 하고 넘어갔던 기억이 있다. origin는 깃허브에 존재하는 repository 곧 remote를 뜻한다.

# upstream과 downstream

upstream과 downstream은 상대적인 개념이라 origin과 local을 기준으로 생각하면 origin이 upstream, local이 downstream이다.

push와 pull로 따지면 

origin으로부터 local을 pull한다==origin 커밋 이력을 local로 내려받는다.

local에서 origin으로 push한다==local 커밋 이력을 origin으로 올린다.

만약 CLI로 push를 한다면 `git push -u origin main`형태로 명령어를 입력하게 된다.

여기서 `-u` 옵션이 `--set-upstream` 옵션의 줄임말이다.

즉, origin main 브랜치를 upstream으로 설정한다는 뜻이다.

upstream을 한 번 설정하고 나면 `git push` 또는 `git pull`이라고 명령어만 입력해도 자동으로 origin의 main 브랜치로부터 push와 pull을 진행하게 된다.

`—set-upstream` 옵션을 통해 해당 브랜치에서 upstream과 downstream 관계가 설정됐기 때문이다.

# Fork

GitHub에서 오픈소스 프로젝트에 기여한다거나, 협업을 진행할 때 fork를 이용한다. 

fork는 다른 사람의 repository를 내 소유의 repository로 복사하는 것이다. 

따라서 원래 소유자의 remote repository와 내가 fork한 remote repository 사이에도 upstream과 downstream이라는 관계가 형성된다. 

보통 원래 소유자의 remote를 말할 때 `upstream`, 내가 포크한 remote를 말할 때 `origin`이라는 용어를 사용한다.

local과 origin의 관계에선 origin이 upstream, local이 downstream이었는데, fork한 repository를 기준으로 보면 **원본 remote가 upstream**, 내 **origin이** **downstream**이라는 관계가 된다.

그래서 GitHub로 협업을 할 때는 보통 다음과 같은 프로세스를 거치게 된다.

1. 원본 remote repository(upstream)를 fork
2. fork한 remote repository(origin)를 local로 clone
3. 기능을 완성할 때까지 local 레포에 커밋
    1. local에 commit
    2. local에서 origin으로 push
4. fork repository(origin)를 원본 remote repository(upstream)에 PR
    1. PR을 등록하기 전 upstream에 **바뀐 내용이 없는 경우**
        1. origin에서 upstream으로 PR
    2. PR을 등록하기 전 upstream에 **바뀐 내용이 있는 경우**
        1. upstream을 local로 pull
        2. local에서 origin으로 push
        3. origin에서 upstream으로 PR
        

# 결론

remote repository는 upstream이 되기도 하고, downstream이 되기도 한다.

코드숨 리액트 과정을 진행할 때 분명 위에 정리한 내용대로 작업사항을 pr올리고 했었는데

부끄럽게도 설명해주신대로 따라서 명령어를 입력하기만 했던 거 같다. 반성한다.