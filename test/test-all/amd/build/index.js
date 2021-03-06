/*TMODJS:{"version":2,"md5":"afe25510dffe1a37249f495a80e58d4d"}*/
define([ "./template", "./public/header", "./public/footer" ], function(template) {
    return template("index", function($data, $id) {
        var $helpers = this, include = function(id, data) {
            data = data || $data;
            var $text = $helpers.$include(id, data, $id);
            $out += $text;
            return $text;
        }, $escape = $helpers.$escape, title = $data.title, $each = $helpers.$each, list = $data.list, $value = $data.$value, $index = $data.$index, $out = "";
        include("./public/header");
        $out += ' <div id="main"> <h3>';
        $out += $escape(title);
        $out += "</h3> <ul> ";
        $each(list, function($value, $index) {
            $out += ' <li><a href="';
            $out += $escape($value.url);
            $out += '">';
            $out += $escape($value.title);
            $out += "</a></li> ";
        });
        $out += " </ul> </div> ";
        include("./public/footer");
        return new String($out);
    });
});