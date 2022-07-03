---
date: '2022-07-01'
title: 'git push error..'
categories: ['Frontend', 'git']
summary: 'fatal: 관계 없는 커밋 내역의 병합을 거부합니다.'
thumbnail: '../git-icon.png'
---

# fatal: 관계 없는 커밋 내역의 병합을 거부합니다.

fatal: 관계 없는 커밋 내역의 병합을 거부합니다.

위와 같은 오류가 발생했다. 이에 대한 해결법을 기록하고자 한다.

우선 공통된 커밋이 없기 때문에 이런 문제가 발생한다고 한다.

그래서 일단 원격 저장소 (remote)의 커밋들을 가져와야 한다.

```bash
git fetch --all
git reset --hard origin/master
git push origin master
```

- git fetch -all : 원격 저장소의 모든 커밋을 가져온다.
- git reset --hard origin/master : git reset --hard를 사용하면 현재 작업 위치인 HEAD의 포인터를 특정 위치로 변경해버릴 수 있다고 한다.이 명령어를 통해 origin/master로 HEAD의 포인터를 이동시킨 것이다. 그러면 이제 원격 저장소의 커밋과 로컬 저장소의 커밋이 일치한다!
- git push origin master : origin은 원격 저장소의 별칭이다. master은 원격 저장소의 브랜치다.즉 깃허브 레포에 master로 커밋을 푸쉬!