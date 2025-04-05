console.log('Script loaded!');
const pinSequence = [1, 2, 3, 5, 9];
const userSequence = [];
function dotNumberFromId(id) {
    return parseInt(id.split('-')[1]);
}
function dotMouseDown(e) {
    console.log('Starting new sequence:');
    const n = dotNumberFromId(e.id);
    if (userSequence.includes(n)) {
        return;
    }
    userSequence.push(n);
    console.log(n);
}
function dotMouseEnter(e) {
    if (userSequence.length == 0) {
        return;
    }
    const n = dotNumberFromId(e.id);
    if (userSequence.includes(n)) {
        return;
    }
    userSequence.push(n);
    console.log(n);
}
window.addEventListener('mouseup', function (event) {
    if (userSequence.length == 0) {
        return;
    }
    console.log('ended sequence: ' + userSequence);
    userSequence.length = 0;
});
