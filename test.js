"use strict";

// const foo = "Hello custom rules!"();
let hoge = function() {
    return "aaa";
};

hoge = function() {
    return "bbb";
};

hoge();
