module.exports = str2color;

function str2color(string) {
    function hashCode(str) {
        if (!str) str = ' ';
        while(str.length < 8) {str += str;}
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
            hash = hash & hash;
        }
        return hash;
    };

    function format(number) {
        return ("0" + number.toString(16)).slice(-2);
    }

    function intToRGB(i){
        var r = format((i>>16)&0x7F);
        var g = format((i>>8)&0x7F);
        var b = format(i&0xFF);
        return (r+g+b).toUpperCase();
    }

    return '#' + intToRGB(hashCode(string));
};
