var anagramGroup = function(strs) {

    var arrPenampung = {}

    strs.forEach(str => {
    var sortResult = str.split("").sort().join("");

        if (arrPenampung[sortResult] != null) 
        {
            arrPenampung[sortResult].push(str);
        } 
        else 
        {
            arrPenampung[sortResult] = [str];
        }
    })
    return Object.values(arrPenampung);
};

console.log(anagramGroup(['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map']));
