module.exports = {
    presets: [
        '@babel/preset-env', // 转换最新的 ECMAScript 代码
        '@babel/preset-typescript', // 转换 TypeScript 代码
        '@babel/preset-react' // 如果使用 React，转换 JSX
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties', // 支持类属性
        '@babel/plugin-proposal-object-rest-spread' // 支持对象展开运算符
    ]
};
