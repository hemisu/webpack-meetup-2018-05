# webpack-meetup-2018-05
# webpack创始人手把手教你webpack v4概念

1. 创建 Modules graph:
* src/index.js
  # react
  # react-dom
  # ./HelloWorld
  - react-bundle.js
  - src/HelloWorld.js
* react-bundle.js
* src/HelloWorld.js (ESM)
  # react
  # ./BigText
  # (async) ./Lazy
  - react-bundle.js
  - src/BigText.js
  - (async) src/Lazy.js
* src/BigText.js (ESM)
  # react
  - react-bundle.js
* src/Lazy.js (ESM)
  # react
  # ./BigText
  - react-bundle.js
  - src/BigText.js

TODO-list:
x ./src in .../ --> .../src/index.jsc
x react-bundle in .../src -> react-bundle
x ./HelloWorld in .../src -> .../src/HelloWorld.js
x ./BigText in .../src -> .../src/BigText.js
x ./Lazy in .../src -> .../src/Lazy.js
