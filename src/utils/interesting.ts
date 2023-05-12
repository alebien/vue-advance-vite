/*
 * @Date: 2023-05-10 15:28:40
 * @LastEditors: sxw s9x9w9@163.com
 * @LastEditTime: 2023-05-12 14:30:56
 * @FilePath: \vue-advance-vite\src\utils\interesting.ts
 */

/**
 * @description: try use vscode-twoslash-queries
 */
type ToUppercaseWithPrefix<T extends string> = `ABC:${Uppercase<T>}`;
//      ^?

type Example1 = ToUppercaseWithPrefix<'nihao'>;
//      ^? 

type Example2 = ToUppercaseWithPrefix<'WORLD'>;
//      ^? 


/**
 * @description: extends
 */
// 接口继承
interface biology {
    breath?(): void;
}
interface animal {
    run?(): void;
}
interface dog extends animal, biology {
    cry?(): void;
    food?: '狗粮';
    name?: string;
}
interface cat extends animal, biology {
    catchMouse?(): void;
    food?: '猫粮';
    name?: string;
}
interface Corgi {
    food?: '狗粮';
    name?: string;
    isDog?: any;
}
interface Garfield {
    food?: '猫粮';
    name?: string;
}
//        ^?
// 条件判断
type isDog<T> = T extends dog ? '是' : '不是';
//      ^?
const a: Corgi = {
    food: '狗粮',
    name: '大黄',
    isDog: null,

}
const b: Garfield = {
    food: '猫粮',
    name: '小白',
}
a.food as isDog<Corgi>; // 大黄是只狗
b.food as isDog<Garfield>; // 小白不是狗
console.log(a.food, b.food)
;

/**
 * @description: 
 * 
 * Exclude<T, U> -- 从T中剔除可以赋值给U的类型。
 * Extract<T, U> -- 提取T中可以赋值给U的类型。
 * NonNullable<T> -- 从T中剔除null和undefined。
 * ReturnType<T> -- 获取函数返回值类型。
 */
type T0 = Exclude<'a' | 'b' | 'c', 'a'>; // "b" | "c"
type T1 = Extract<'a' | 'b' | 'c', 'a' | 'f'>; // "a"
type T2 = NonNullable<string | number | undefined>; // string | number
type T3 = ReturnType<() => string>; // string





