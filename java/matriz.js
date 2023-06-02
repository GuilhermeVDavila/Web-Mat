
var matriz1 = new Array();
var matriz2 = new Array();

var col = 3;
var lin = 3;

for (i = 0; i < lin; i++) {
    matriz1.push([]);
    for (j = 0; j < col; j++) {
        matriz1[i][j] = parseFloat(Math.floor(Math.random() * 100));
    }
}
for (i = 0; i < lin; i++) {
    matriz2.push([]);
    for (j = 0; j < col; j++) {
        matriz2[i][j] = parseFloat(Math.floor(Math.random() * 100));
    }
}
document.write("<br>");
document.write("<h4>Matriz</h4>");
document.write("<h4>1</h4>");
document.write("<table border=1>");
for (i = 0; i < matriz1.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < matriz1[i].length; x++) {
        linha = linha + "<td>" + matriz1[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");

document.write("<br>");
document.write("<h4>Matriz</h4>");
document.write("<h4>2</h4>");
document.write("<table border=1>");
for (i = 0; i < matriz2.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < matriz2[i].length; x++) {
        linha = linha + "<td>" + matriz2[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");

m = [];
for ( s = 0; s < matriz1.length; s++) {
    m.push([]);
    for ( i = 0; i < matriz1[s].length; i++) {
        m[s][i] = matriz1[s][i] + matriz2[s][i];
    }
}
document.write("<br>");
document.write("<h4>Soma</h4>");
document.write("<table border=1>");
for (i = 0; i < m.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < m[i].length; x++) {
        linha = linha + "<td>" + m[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");

m2 = [];
for ( b = 0; b < matriz1.length; b++) {
    m2.push([]);
    for ( i = 0; i < matriz1[b].length; i++) {
        m[b][i] = matriz1[b][i] - matriz2[b][i];
    }
}
document.write("<br>");
document.write("<h4>Subtração</h4>");
document.write("<table border=1>");
for (i = 0; i < m.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < m[i].length; x++) {
        linha = linha + "<td>" + m[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");
