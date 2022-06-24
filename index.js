module.exports = function (source) {
    return source.replace(/は以下のことをなさいます/g, '{')
        .replace(/以上ですわ/g, '}')
        .replace(/でしてよ/g, ';')
        .replace(/お返しするのは/g, 'return');
}